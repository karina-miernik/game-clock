import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { FC } from "react";
import { useTimer } from "react-timer-hook";

export interface ICounter {
    expiryTimestamp: Date;
}
const Counter: FC<ICounter> = ({ expiryTimestamp }) => {
    const { seconds, minutes, hours, isRunning, start, pause, restart } =
        useTimer({
            expiryTimestamp,
            onExpire: () => console.warn("onExpire called"),
        });

    return (
        <Box sx={{ textAlign: "center" }}>
            <Box style={{ fontSize: "100px" }}>
                <span>{hours}</span>:<span>{minutes}</span>:
                <span>{seconds}</span>
            </Box>
            <Typography>{isRunning ? "Running" : "Not running"}</Typography>
            <Button onClick={start}>Start</Button>
            <Button onClick={pause}>Stop</Button>
            <Button
                onClick={() => {
                    // Restarts to 5 minutes timer
                    const time = new Date();
                    time.setSeconds(time.getSeconds() + 300);
                    restart(time);
                }}
            >
                Restart
            </Button>
        </Box>
    );
};

export default Counter;
