import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget= () => {
    const { palette } = useTheme();
    const dark = palette.neutral.dark;
    const main = palette.neutral.main;
    const medium = palette.neutral.medium;

    return (
        <WidgetWrapper>
            <FlexBetween>
                <Typography color={dark} variant="h5" fontWeight="500">
                    Sponsored
                </Typography>
                <Typography color={medium}>Create Ad</Typography>
            </FlexBetween>
            <img 
                width="100%"
                height="auto"
                alt="advertisement"
                src="http://localhost:3001/assets/info4.jpeg"
                style={{ borderRadius: "0.75rem", marin: "0.75rem 0" }}
            />
            <FlexBetween>
                <Typography color={main}>Dev4DevsAgency</Typography>
                <Typography color={medium}>dev4devs.com</Typography>
            </FlexBetween>
            <Typography color={medium} margin="0.5rem 0">
                Your direct access to a world class group of Developers ready to
                help a brethren...
            </Typography>
        </WidgetWrapper>
    );
};

export default AdvertWidget;