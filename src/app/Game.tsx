import { FC } from "react";
import { Box, Typography } from "@mui/material";

export interface IGame {
    children?: React.ReactNode;
}

const Game: FC<IGame> = ({ children }) => {
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
            <Typography variant="body1"></Typography>
                Zagraj
        </Box>
    );
};

export default Game;