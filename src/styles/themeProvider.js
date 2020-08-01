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
  title: {
    fontSize: "24px",
    color: "#2f2f2f",
    fontFamily: "Arial-BoldMT",
  },
  subExp: {
    fontSize: "16px",
    color: "#1f1f1f",
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
  },
  // selectField: {
  //   width: "440px",
  //   fontSize: "16px",
  // },
  button: {
    width: "91px",
    height: "37px",
    background: "#f15642",
    color: "#ffffff",
    fontSize: "14px",
  },
  loginBtn: {
    color: "rgba(0, 0, 0, 0.6)",
    letterSpacing: "0.15px",
    fontFamily: "Roboto-Regular",
  },
});
