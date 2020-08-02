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
  // radioFontSelect: {
  //   fontFamily: "ArialMT",
  //   // fontSize: "100px",
  //   "&$checked": {
  //     fontFamily: "Arial-BoldMT",
  //     fontSize: "1px",
  //     color: "red",
  //   },
  // },
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

    "&:hover": {
      borderColor: "transparent",
    },
    "&:focus": {
      borderColor: "red",
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
});
