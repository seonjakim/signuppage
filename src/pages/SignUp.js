import React, { useState } from "react";
import axios from "axios";
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
  MenuItem,
  Typography,
  NativeSelect,
  // DatePicker,
  IconButton,
  InputAdornment,
} from "@material-ui/core";
import { useStyles } from "../styles/themeProvider";
// import { DatePicker } from "@material-ui/pickers";
// import DatePicker from "react-datepicker";
import DateFnsUtils from "@date-io/date-fns";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import {
  MuiPickersUtilsProvider,
  DatePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
// import "react-datepicker/dist/react-datepicker.css";
// import {
//   MuiPickersUtilsProvider,
//   KeyboardTimePicker,
//   KeyboardDatePicker,
// } from "@material-ui/pickers";

export default function SignUp(props) {
  const classes = useStyles();

  const userState = ["번역회사", "의뢰인", "번역가"];
  const dollarUnit = ["KRW", "USD", "RMB", "SGD"];

  const emailRegex = RegExp(/\S+@\S+\.\S+/);

  const passwordRegex = RegExp(/^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/);

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
      label={
        <Typography
          className={
            radioSelected === user ? classes.labelChange : classes.label
          }
        >
          {user}
        </Typography>
      }
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

  const [companyName, setCompnayName] = useState([]);
  const getCompanyName = (e) => {
    setCompnayName(e.target.value);
  };

  const dollarSelectOption = dollarUnit.map((dollar, idx) => (
    <MenuItem key={idx} value={idx}>
      {dollar}
    </MenuItem>
  ));

  const [dollarUnitSelect, setDollarUnitSelect] = useState("");
  const selectDollarUnit = (e) => {
    setDollarUnitSelect(e.target.value);
  };
  console.log("dollarUnitSelect", dollarUnitSelect);

  const [foundationDate, setFoundationDate] = useState(null);
  const foundedDate = (date) => {
    setFoundationDate(date);
  };
  console.log("foundationDate", foundationDate);
  //validation
  const newPost = {
    user: radioSelected,
    email: email,
    password: password,
    companyName: companyName,
    dollarUnitSelect: dollarUnitSelect,
    foundationDate: foundationDate,
  };

  const fakePostAPI = async () => {
    try {
      const response = await axios.post("fake_api", newPost);
      console.log(response.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  const validationCheck = (e) => {
    if (
      //user도 선택됐는지 확인
      emailRegex.test(email) &&
      passwordRegex.test(password) &&
      companyName.length > 1
    ) {
      fakePostAPI();
      props.props.history.push("/signin");
    } else {
      alert("필수 입력 사항을 입력해주세요");
    }
  };
  const [isFocus, setIsFocus] = useState(false);
  const handleOnFocus = () => {
    setIsFocus(true);
  };
  const handleOnBlur = () => {
    setIsFocus(false);
  };

  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className={classes.root}>
      <div className={classes.marginControl}>
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
            <div className={classes.inputAreaTitle}>기본정보 입력</div>
          </div>
          <div className={classes.btmAlignment}>
            <TextField
              className={classes.textField}
              label="이메일(아이디)를 입력하세요."
              variant="outlined"
              name="email"
              value={email}
              onChange={getEmail}
            />
            <div className={classes.warningField}>
              <span className={classes.warningLetter}>
                {email.length > 0 && !emailRegex.test(email)
                  ? "이메일 양식을 확인하세요"
                  : ""}
              </span>
            </div>
            <TextField
              className={classes.textField}
              // label="Filled secondary"
              inputProps={{ "aria-label": "naked" }}
              label="비밀번호를 입력하세요."
              variant="outlined"
              type="password"
              name="password"
              value={password}
              onChange={getPassword}
            />
            <div className={classes.warningField}>
              <span className={classes.warningLetter}>
                {password.length > 0 && !passwordRegex.test(password)
                  ? "비밀번호는 8자리 이상, 16자리 이하이고 영문, 숫자, 특수문자가 각 1자리 이상 포함되어야 합니다"
                  : ""}
              </span>
            </div>

            <TextField
              className={classes.textField}
              label="회사명을 입력하세요."
              variant="outlined"
              name="companyName"
              value={companyName}
              onChange={getCompanyName}
            />
            <div className={classes.warningField}>
              <span className={classes.warningLetter}>
                {companyName.length > 1 ? "" : "회사명을 입력해주세요"}
              </span>
            </div>

            <FormControl className={classes.textField} variant="outlined">
              <InputLabel>화폐단위를 선택하세요.</InputLabel>
              <Select
                defaultValue="DEFAULT"
                value={dollarUnitSelect}
                onChange={selectDollarUnit}
                // controlled="true"
                label="화폐단위를 선택하세요."
              >
                <MenuItem value="DEFAULT" disabled />
                {dollarSelectOption}
              </Select>
            </FormControl>
            <div className={classes.warningField}>
              <span className={classes.warningLetter}>
                {!dollarUnitSelect && "필수 선택사항입니다."}
              </span>
            </div>

            <form noValidate>
              {/* <TextField
                id="date"
                className={classes.textField}
                label="설립일을 선택하세요."
                defaultValue={{
                  overrides: {
                    color: "red",
                  },
                }}
                value={foundationDate}
                variant="outlined"
                type="date"
                onChange={foundedDate}
                // InputLabelProps={{
                //   shrink: true,
                // }}
                inputProps={{ defaultValue: "" }}
                // labelFunc={}
                // InputLabelProps={{ shrink: true }}
              /> */}
              {/* <TextField
              variant="outlined"
              id="date"
              label="설립일을 선택하세요."
              type={isFocus ? "date" : "text"}
              defaultValue={null}
              className={classes.textField}
              InputLabelProps={{
                FormControl,
              }}
              FormControlLabel={{
                color: "red",
              }}
              onFocus={handleOnFocus}
              onBlur={handleOnBlur}
            /> */}
              {/* <DatePicker
              format={"DD/MM/YYYY"}
              margin="normal"
              label="Date picker"
              // labelFunc={this.renderLabel}
              // value={this.state.date}
              // onChange={this.handleDateChange}
              variant="outlined"
            /> */}

              {/* <DatePicker
              // clearable
              className={classes.dateField}
              selected={foundationDate}
              onChange={foundedDate}
              placeholderText="설립일을 선택하세요."
            /> */}
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker
                  className={classes.textField}
                  clearable
                  autoOk
                  disableFuture
                  inputVariant="outlined"
                  openTo="year"
                  format="MM/dd/yyyy"
                  // margin="normal"
                  id="date-picker-inline"
                  label="설립일을 선택하세요."
                  value={foundationDate}
                  onChange={foundedDate}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                  InputProps={{
                    className: classes.zeroPadding,
                    endAdornment: (
                      <InputAdornment position="end">
                        <ArrowDropDownIcon color="action" />
                      </InputAdornment>
                    ),
                  }}
                  // rightArrowButtonProps={<ArrowDropDownIcon />}
                  // rightArrowButtonProps={{
                  //   ...rightArrowButtonProps,
                  //   ...testIdProp("date-picker-right-arrow"),
                  // }}
                  // labelFunc={(date) => {
                  //   console.log(date.isValid());
                  //   if (date.isValid()) {
                  //     return date.format("DD/MM/YYYY");
                  //   } else {
                  //     return "";
                  //   }
                  // }}
                  // rightArrowButtonProps={Partial<IconButtonProps>}
                />
              </MuiPickersUtilsProvider>
            </form>
            <div className={classes.warningField}>
              <span className={classes.warningLetter}>
                {!foundationDate && "필수 선택사항입니다"}
              </span>
            </div>
            <div>
              <Button
                disableRipple
                onClick={validationCheck}
                className={classes.button}
                variant="contained"
              >
                다음
              </Button>
              <Button disableRipple className={classes.loginBtn}>
                로그인
              </Button>
            </div>
          </div>
        </Paper>
        <NativeSelect
          id="demo-customized-select-native"
          value={age}
          onChange={handleChange}
          className={classes.languageSelect}
        >
          <option value={10}>한국어</option>
          <option value={20}>English</option>
          <option value={30}>汉语</option>
        </NativeSelect>
      </div>
    </div>
  );
}
