import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

function AdWidget() {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontFamily="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/info4.jpeg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Cosmetics shop</Typography>
        <Typography color={medium}>cosmeticshop.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Our products define a new era of beauty. With Cosmetics shop you can
        easily turn into shining star.
      </Typography>
    </WidgetWrapper>
  );
}

export default AdWidget;
