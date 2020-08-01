import React from "react";
import { styled } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";

export default function InputUI(props) {
  const RevisedTextField = styled(TextField)({
    width: "440px",
    margin: "0 auto 45px",
  });
  return (
    <div>
      <RevisedTextField labal={props.label} variant="outlined" />
    </div>
  );
}
