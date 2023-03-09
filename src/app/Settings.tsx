import { FC } from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Counter from "./Counter";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
export interface ISettings {
    children?: React.ReactNode;
}

const Settings: FC<ISettings> = ({ children }) => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 600); // 10 minutes timer
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
            <Typography variant="h5">Zaproś znajomych</Typography>
            <Typography variant="h5">Ustaw czas</Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <MobileTimePicker
                    label={'"godziny", "minuty"'}
                    views={["hours", "minutes"]}
                    ampm={false}
                />
            </LocalizationProvider>
            <Counter expiryTimestamp={time} />
            {/* podanie swojego imienia */}
            <Link to="/">Anuluj</Link>
            <Link to="/zagraj">Dalej</Link>
        </Box>
    );
};

export default Settings;
