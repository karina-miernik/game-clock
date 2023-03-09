import { FC } from "react";
import { Box } from "@mui/material"

export interface IPageWrapper {
    children: React.ReactNode;
}

const PageWrapper: FC<IPageWrapper> = ({ children }) => {
    return (
        <Box
            sx={{
                position: "relative",
                minHeight: "100vh",
                width: "90%",
                margin: "0 auto",
                py: 2,
            }}
        >
            {children}
        </Box>
    );
};

export default PageWrapper;