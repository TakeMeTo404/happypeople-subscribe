import {ReactNode} from "react";
import {Stack} from "@mui/material";

export default ({children}: { children?: ReactNode }) => {
    return <div className="card-content">
        <Stack alignItems="center"
               justifyContent="flex-start"
               width="100%"
               height="100%"
        >
            {children}
        </Stack>
    </div>;
};
