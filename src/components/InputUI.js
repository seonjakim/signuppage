import React from "react";
import { styled } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import {
  fade,
  ThemeProvider,
  withStyles,
  makeStyles,
  createMuiTheme,
} from "@material-ui/core/styles";
export default function InputUI(props) {
  const useStylesReddit = makeStyles((theme) => ({
    root: {
      border: "1px solid #e2e2e1",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "#fcfcfb",
      transition: theme.transitions.create(["border-color", "box-shadow"]),
      "&:hover": {
        backgroundColor: "#ffffff",
      },
      "&:hover fieldset": {
        borderColor: "yellow",
      },
      "&$focused": {
        backgroundColor: "#fff",
        boxShadow: "none",
        borderColor: "none",
      },
    },
    focused: {},
  }));

  function RedditTextField(props) {
    const classes = useStylesReddit();

    return (
      <TextField InputProps={{ classes, disableUnderline: true }} {...props} />
    );
  }
  return (
    <div>
      <RedditTextField labal={props.label} variant="outlined" />
    </div>
  );
}
