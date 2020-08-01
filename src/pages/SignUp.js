import React from "react";
import {
  Paper,
  FormControlLabel,
  RadioGroup,
  Radio,
  TextField,
  FormControl,
  InputLabel,
  Select,
  Button,
} from "@material-ui/core";
import { useStyles } from "../styles/themeProvider";
import InputUI from "../components/InputUI";

export default function SignUp() {
  const classes = useStyles();
  const userState = ["번역회사", "의뢰인", "번역가"];
  const dollarUnit = ["십만", "만", "백", "천"];

  const userRadioSelector = userState.map((user, idx) => (
    <FormControlLabel
      key={idx}
      value={user}
      control={<Radio className={classes.radioSelect} color="default" />}
      label={user}
    />
  ));

  const dollarSelectOption = dollarUnit.map((dollar, idx) => (
    <option key={idx} value={dollar}>
      {dollar}
    </option>
  ));

  return (
    <div className={classes.root}>
      <Paper className={classes.frame} variant="outlined">
        <div className={classes.title}>Gconstudio 계정 만들기</div>
        <div className={classes.subExp}>
          하나의 계정으로 모든 지콘스튜디오 서비스를 이용할 수 있습니다.
        </div>
        <div>
          <RadioGroup row>{userRadioSelector}</RadioGroup>
        </div>
        <div>기본정보 입력</div>
        <div className={classes.root}>
          <TextField
            className={classes.textField}
            label="이메일(아이디)를 입력하세요."
            variant="outlined"
          />
          <TextField
            className={classes.textField}
            label="비밀번호를 입력하세요."
            variant="outlined"
          />
          <TextField
            className={classes.textField}
            label="회사명을 입력하세요."
            variant="outlined"
          />
          <FormControl className={classes.textField} variant="outlined">
            <InputLabel>화폐단위를 선택하세요.</InputLabel>
            <Select>{dollarSelectOption}</Select>
          </FormControl>
          <form noValidate>
            <TextField
              className={classes.textField}
              label="설립일을 선택하세요."
              defaultValue=""
              variant="outlined"
              type="date"
            />
          </form>
        </div>
        <div>
          <Button className={classes.button} variant="contained">
            다음
          </Button>
          <Button className={classes.loginBtn}>로그인</Button>
        </div>
      </Paper>
    </div>
  );
}
