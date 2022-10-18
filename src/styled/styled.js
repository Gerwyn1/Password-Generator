import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const PasswordHeader = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.darkGrey,
  height: "5rem",
  padding: "1rem 2rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const PasswordBody = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.darkGrey,
  marginTop: "1.5rem",
  padding: "1.5rem 2.5rem",
  height: "33rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const PasswordHeader2 = {
  backgroundColor: "darkGrey",
  height: "5rem",
  padding: "1rem 2rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};
export const PasswordBody2 = {
  backgroundColor: "darkGrey",
  marginTop: "1.5rem",
  padding: "1.5rem 2.5rem",
  height: "33rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

export const Background = {
  background: "linear-gradient(180deg, #14131B 0%, #08070B 100%)",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  p: 2,
};
