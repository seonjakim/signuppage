import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  root: {
    width: "100",
  },
  frame: {
    width: "585px",
    height: "794px",
    margin: "73px auto",
    borderRadius: "11px",
    border: "1px solid #dadce0",
  },
  frameTop: {
    margin: "68px 0 0 78px",
  },
  title: {
    fontSize: "24px",
    color: "#2f2f2f",
    fontFamily: "Arial-BoldMT",
    marginBottom: "13px",
  },
  subExp: {
    fontSize: "16px",
    color: "#1f1f1f",
  },
  radioSelectField: {
    display: "flex",
    alignItems: "center",
    height: "68px",
  },
  radioSelect: {
    color: "#f15642",
    "&$checked": {
      color: "#f15642",
    },
  },
  textField: {
    width: "440px",
    margin: "0 72px",
    fontSize: "16px",
    letterSpacing: "0.15px",
    color: "rgba(0, 0, 0, 0.6)",
    "&:hover": {
      borderColor: "transparent",
    },
  },
  warningField: {
    height: "45px",
  },
  warningLetter: {
    fontFamily: "AppleSDGothicNeo-Regular",
    fontSize: "10px",
    color: "#ff0000",
    margin: "0 0 0 84px",
  },
  button: {
    width: "91px",
    height: "37px",
    background: "#f15642",
    color: "#ffffff",
    fontSize: "14px",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "#f15642",
      boxShadow: "none",
    },
  },
  loginBtn: {
    color: "rgba(0, 0, 0, 0.6)",
    letterSpacing: "0.15px",
    fontFamily: "Roboto-Regular",
    "&:hover": {
      backgroundColor: "transparent",
      boxShadow: "none",
    },
  },
});
