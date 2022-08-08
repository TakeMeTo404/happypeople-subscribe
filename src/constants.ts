import { v4 as uuidv4 } from 'uuid';
import EventEmitter from "event-emitter";

export const BASE_API_URL = 'https://api.happypeople.group/v1';
export const DEVICE_GLOBAL_ID = uuidv4();
export const JOIN_CLICKS_EMITTER = EventEmitter();
export const CLOUD_PAYMENTS_PUBLIC_ID = 'pk_f3fa17c4058b9be4609c94cb6fdf5';
