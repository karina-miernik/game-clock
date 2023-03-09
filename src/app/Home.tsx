import { FC, useState } from "react";
import {
    Box,
    Button,
    Icon,
    IconButton,
    TextField,
    Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

export interface IHome {
    children?: React.ReactNode;
}

const Home: FC<IHome> = ({ children }) => {
    const [name, setName] = useState<string>("");
    const [isName, setIsName] = useState<boolean>(false);
    console.log(name, isName);
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
            <Typography variant="body1">
                Zagraj w grę ze znajomymi korzystając z zegara
            </Typography>
            <Box display="flex" flexDirection="column" mt={5}>
                {!isName && (
                    <Box
                        display="flex"
                        flexDirection="row"
                        justifyContent="center"
                    >
                        <TextField
                            label="Podaj swoje imię"
                            variant="outlined"
                            onChange={(e: any) => setName(e.target.value)}
                            sx={{
                                background: "#fff",
                                "& .MuiOutlinedInput-root": {
                                    "& fieldset": {
                                        borderRadius: `4px 0 0 4px`,
                                        borderColor: "#111D13",
                                    },
                                },
                            }}
                        >
                            {name}
                        </TextField>
                        <Button
                            sx={{
                                borderRadius: "4px",
                                borderTopLeftRadius: 0,
                                borderBottomLeftRadius: 0,
                                border: "1px solid #111D13",
                                background: "#111D13",
                                color: "#fff",
                                "&:hover": {
                                    background: "#fff",
                                    color: "#111D13"
                                },
                            }}
                            disabled={!name}
                            onClick={() => setIsName(true)}
                        >
                            <Icon>done</Icon>
                        </Button>
                    </Box>
                )}
                {isName && (
                    <>
                        <Typography variant="h5">Cześć {name}!</Typography>
                        <Button
                            component={Link}
                            to="/ustawienia"
                            variant="contained"
                            sx={{
                                mt: 1,
                                background: "#111D13",
                                border: "1px solid #111D13",
                                "&:hover": {
                                    background: "#fff",
                                    color: "#111D13"
                                },
                            }}
                        >
                            Utwórz pokój
                        </Button>
                        <Button onClick={() => setIsName(false)} sx={{
                                mt: 1,
                                background: "#fff",
                                border: "1px solid #111D13",
                                color: "#111D13",
                                "&:hover": {
                                    background: "#fff",
                                    color: "#111D13"
                                },
                            }}>Anuluj</Button>
                    </>
                )}
            </Box>
        </Box>
    );
};

export default Home;
