import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";

const LoginPage = () => {
    const theme = useTheme();
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
    return <Box>
        <Box width="100%" 
        backgroundColor={theme.palette.background.alt}
        padding="1rem 6%"
        textAlign="center"
        >
            <Typography
                fontWeight="bold"
                fontSize="32px"
                color="primary"
            >
                Shadapedia
            </Typography>
        </Box>

        <Box
            width={isNonMobileScreens ? "50%" : "93% "}
            padding="2rem"
            margin="2rem auto"
            borderRadius="1.5rem"
            backgroundColor= {theme.palette.background.alt}
        >
            <Typography fontWeight="500" variant="h5" sx={{ marginBottom: "1.5rem"}}>
                Welcome to Shadapedia, the Social Media for Weirdos!
            </Typography>
            <Form />
        </Box>
    </Box>
};

export default LoginPage;