import {CLOUD_PAYMENTS_PUBLIC_ID} from "../../../../constants";

let isOpened: boolean = false;

export default function (accountId: string, onSuccess: () => void, onFail: () => void): void {
    if (isOpened) return;

    // eslint-disable-next-line no-undef
    // @ts-ignore
    const widget = new cp.CloudPayments();

    let data = {
        CloudPayments: {
            recurrent: { interval: 'Day', period: 1 }
        }
    };

    isOpened = true;

    widget.charge(
        {
            publicId: CLOUD_PAYMENTS_PUBLIC_ID,
            description: 'Оплата подписки в #счастливых',
            amount: 199,
            currency: 'RUB',
            accountId,
            skin: "mini",
            data: data
        },
        function (options: any) {
            isOpened = false;
            console.group("onSuccess callback. Parameters:")
            console.log('options: ')
            console.log(options)
            console.groupEnd()
            onSuccess();
        },
        function (reason: any, options: any) {
            isOpened = false;
            console.group("onFail callback. Parameters:")
            console.log('options: ')
            console.log(options)
            console.log('reason: ')
            console.log(reason)
            console.groupEnd()
            onFail();
        },
        function (aaa: any) {
            console.group('onComplete')
            console.log(aaa)
            console.groupEnd();
        }
    );
}
