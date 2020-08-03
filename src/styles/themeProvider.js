import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  root: {
    width: "100",
  },
  marginControl: {
    width: "585px",
    margin: "0 auto 60px",
  },
  frame: {
    width: "585px",
    height: "794px",
    margin: "73px auto 0",
    borderRadius: "11px",
    border: "1px solid #dadce0",
  },
  frameTop: {
    margin: "66px 0 0 78px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#2f2f2f",
    fontFamily: "Arial-BoldMT",
    marginBottom: "13px",
  },
  subExp: {
    fontFamily: "ArialMT",
    fontSize: "14px",
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
  labelChange: {
    fontFamily: "Arial-BoldMT",
    fontWeight: "bold",
  },
  inputAreaTitle: {
    fontFamily: "NotoSansCJKkr-Regular",
    fontSize: "12px",
    color: "#000000",
    marginBottom: "8px",
  },
  btmAlignment: {
    margin: "0 0 0 72px",
  },
  textField: {
    width: "440px",
    fontSize: "16px",
    letterSpacing: "0.15px",
    color: "rgba(0, 0, 0, 0.6)",
    "&:label": {
      color: "red",
    },
    "&:hover": {
      borderColor: "transparent",
    },
    "&:focus": {
      borderColor: "red",
    },

    MuiTextField: {
      border: "1px solid red",
    },
  },
  dateField: {
    width: "440px",
    height: "55px",
    padding: "18.5px 14px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "1px solid #dadce0",
    letterSpacing: "0.15px",
    color: "rgba(0, 0, 0, 0.6)",
  },
  warningField: {
    height: "45px",
  },
  warningLetter: {
    fontFamily: "AppleSDGothicNeo-Regular",
    fontSize: "10px",
    color: "#ff0000",
    margin: "0 0 0 10px",
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
    height: "37px",
    color: "rgba(0, 0, 0, 0.6)",
    letterSpacing: "0.15px",
    fontFamily: "Roboto-Regular",
    textDecoration: "underline",
    padding: "0 16px",
    "&:hover": {
      backgroundColor: "#ffffff",
      textDecoration: "underline",
    },
  },
  languageSelect: {
    height: "18px",
    margin: "0 0 0 22px",
    fontSize: "12px",
    fontFamily: "NotoSansCJKkr-Regular",
    color: "#000000",
  },
});
