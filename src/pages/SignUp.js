import React, { useState } from "react";
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

export default function SignUp() {
  const classes = useStyles();

  const userState = ["번역회사", "의뢰인", "번역가"];
  const dollarUnit = ["십만", "만", "백", "천"];

  const [radioSelected, setRadioSelected] = useState([]);

  const selectRadio = (e) => {
    setRadioSelected(e.target.value);
  };
  console.log("radioSelected", radioSelected);

  const userRadioSelector = userState.map((user, idx) => (
    <FormControlLabel
      key={idx}
      value={user}
      control={<Radio className={classes.radioSelect} color="default" />}
      label={user}
    />
  ));

  const [email, setEmail] = useState([]);

  const getEmail = (e) => {
    setEmail(e.target.value);
  };

  const [password, setPassword] = useState([]);

  const getPassword = (e) => {
    setPassword(e.target.value);
  };
  console.log("pass", password);

  const [companyName, setCompnayName] = useState([]);

  const getCompanyName = (e) => {
    setCompnayName(e.target.value);
  };

  const [dollarUnitSelect, setDollarUnitSelect] = useState("");

  const selectDollarUnit = (e) => {
    setDollarUnitSelect(e.target.value);
  };

  console.log("dollarUnit", dollarUnitSelect);

  const dollarSelectOption = dollarUnit.map((dollar, idx) => (
    <option key={idx} value={dollar}>
      {dollar}
    </option>
  ));

  return (
    <div className={classes.root}>
      <Paper className={classes.frame} variant="outlined">
        <div className={classes.frameTop}>
          <div className={classes.title}>Gconstudio 계정 만들기</div>
          <div className={classes.subExp}>
            하나의 계정으로 모든 지콘스튜디오 서비스를 이용할 수 있습니다.
          </div>
          <div className={classes.radioSelectField}>
            <RadioGroup value={radioSelected} onChange={selectRadio} row>
              {userRadioSelector}
            </RadioGroup>
          </div>
          <div>기본정보 입력</div>
        </div>
        <div className={classes.root}>
          <TextField
            className={classes.textField}
            label="이메일(아이디)를 입력하세요."
            variant="outlined"
            value={email}
            onChange={getEmail}
          />
          <div className={classes.warningField}>
            <span className={classes.warningLetter}>
              이메일 양식을 확인하세요
            </span>
          </div>
          <TextField
            className={classes.textField}
            label="비밀번호를 입력하세요."
            variant="outlined"
            type="password"
            value={password}
            onChange={getPassword}
          />
          <div className={classes.warningField}>
            <span className={classes.warningLetter}>
              비밀번호는 8자리 이상, 16자리 이하이고 영문, 숫자, 특수문자가 각
              1자리 이상 포함되어야 합니다
            </span>
          </div>

          <TextField
            className={classes.textField}
            label="회사명을 입력하세요."
            variant="outlined"
            value={companyName}
            onChange={getCompanyName}
          />
          <div className={classes.warningField}>
            <span className={classes.warningLetter}>회사명을 입력해주세요</span>
          </div>

          <FormControl className={classes.textField} variant="outlined">
            <InputLabel>화폐단위를 선택하세요.</InputLabel>
            <Select value={dollarUnitSelect} onChange={selectDollarUnit}>
              {dollarSelectOption}
            </Select>
          </FormControl>
          <div className={classes.warningField}>
            <span className={classes.warningLetter}>필수 선택사항입니다.</span>
          </div>

          <form noValidate>
            <TextField
              className={classes.textField}
              label="설립일을 선택하세요."
              defaultValue=""
              variant="outlined"
              type="date"
            />
          </form>
          <div className={classes.warningField}>
            <span className={classes.warningLetter}>필수 선택사항입니다</span>
          </div>
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
