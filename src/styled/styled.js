import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const Background = {
  background: "linear-gradient(180deg, #14131B 0%, #08070B 100%)",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  paddingX: 2,
};

export const Container = {
  background: "linear-gradient(180deg, #14131B 0%, #08070B 100%)",
  width: "100%",
  maxWidth: "540px",
  m: "1rem 0",
};

export const PasswordHeader = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.darkGrey,
  width: "100%",
  padding: "1rem 2rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  "@media (max-width:425px)": {
    padding: "1rem 1rem",
  },
}));

export const PasswordBody = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.darkGrey,
  marginTop: "1.5rem",
  padding: "1.5rem 2rem",
  height: "33rem",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  "@media (max-width:425px)": {
    padding: "1rem 1rem",
  },
}));

export const StrengthBar = styled(Box)(({ theme }) => ({
  border: `1px solid ${theme.palette.almostWhite}`,
  width: "0.625rem",
  height: "1.75rem",
}));
