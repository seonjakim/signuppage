import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  root: {
    width: "100",
  },
  marginControl: {
    width: "585px",
    margin: "0 auto 70px",
  },
  frame: {
    width: "100",
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
  label: {
    fontFamily: "Arial-BoldMT",
    fontSize: "13.4px",
  },
  labelChange: {
    fontWeight: "bold",
  },
  inputAreaTitle: {
    fontFamily: "NotoSansCJKkr-Regular",
    fontSize: "11.6px",
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
  },
  zeroPadding: {
    paddingRight: "7.7px",
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
    fontSize: "13.5px",
    fontFamily: "ArialMT",
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
    // paddingRight: "0px",
    height: "18px",
    margin: "7px 0 0 22px",
    fontSize: "12px",
    fontFamily: "NotoSansCJKkr-Regular",
    color: "#000000",
    "&:before": {
      borderColor: "transparent",
    },
    "&:hover:not(.Mui-disabled):before": {
      borderColor: "transparent",
    },
    "&:after": {
      borderColor: "transparent",
    },
  },
});
