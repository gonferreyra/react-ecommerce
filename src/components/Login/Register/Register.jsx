import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Main,
  RegisterSection,
  RegisterContainer,
  FormBox,
  RegisterForm,
  RegisterTitle,
  InputDataContainer,
  FormDataContainer,
  Span,
  Data,
  Input,
  FormError,
  FormErrorP,
  FormBtn,
  FormButton,
  Return,
  ReturnLink,
} from "./RegisterStyle";
import { MdKeyboardReturn } from "react-icons/md";
import { useForm } from "../../../hooks/useForm";
import validator from "validator";
import { uiRemoveError, uiSetError } from "../../../redux/UiReducer/ui-actions";
import { registerWithEmailPassword } from "../../../redux/Auth/auth-actions";

const Register = () => {
  const dispatch = useDispatch();

  // connect state from store to component
  const msgError = useSelector((state) => state.ui.msgError);
  // console.log(msgError);

  const [formValues, handleInputChange] = useForm({
    name: "Gonzalo",
    email: "user@email.com",
    password: "",
    passconfirm: "",
  });

  const { name, email, password, passconfirm } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();
    if (IsformValid()) {
      dispatch(registerWithEmailPassword(name, email, password));
    }
  };

  const IsformValid = () => {
    if (name.trim().length === 0) {
      dispatch(uiSetError("Name is required"));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(uiSetError("Email is not valid. Please try again"));
      return false;
    } else if (password !== passconfirm || password.length < 5) {
      dispatch(
        uiSetError(
          "Error. Password must be at least 6 characters and match each other"
        )
      );
      return false;
    }
    dispatch(uiRemoveError());
    return true;
  };

  return (
    <Main>
      <RegisterSection>
        <RegisterContainer>
          <FormBox>
            <RegisterForm onSubmit={handleRegister}>
              <RegisterTitle>Create a new account</RegisterTitle>
              <InputDataContainer>
                <FormDataContainer>
                  <Span>Name</Span>
                  <Data>
                    <Input
                      type="text"
                      name="name"
                      autoComplete="off"
                      value={name}
                      onChange={handleInputChange}
                    />
                  </Data>
                </FormDataContainer>
                <FormDataContainer>
                  <Span>Email</Span>
                  <Data>
                    <Input
                      type="email"
                      name="email"
                      autoComplete="off"
                      value={email}
                      onChange={handleInputChange}
                    />
                  </Data>
                </FormDataContainer>
                <FormDataContainer>
                  <Span>Password</Span>
                  <Data>
                    <Input
                      type="password"
                      name="password"
                      value={password}
                      onChange={handleInputChange}
                    />
                  </Data>
                </FormDataContainer>
                <FormDataContainer>
                  <Span>Confirm password</Span>
                  <Data>
                    <Input
                      type="password"
                      name="passconfirm"
                      value={passconfirm}
                      onChange={handleInputChange}
                    />
                  </Data>
                </FormDataContainer>
                {/* if msgError is true it will render de formerror div. Null values on JS are treated false in boolean operations */}
                {msgError && (
                  <FormError>
                    <FormErrorP>{msgError}</FormErrorP>
                  </FormError>
                )}
                <FormBtn>
                  <FormButton type="submit">REGISTER</FormButton>
                </FormBtn>
              </InputDataContainer>
            </RegisterForm>
            <Return>
              <ReturnLink to="/login">
                <MdKeyboardReturn size={19} />
                Go Back
              </ReturnLink>
            </Return>
          </FormBox>
        </RegisterContainer>
      </RegisterSection>
    </Main>
  );
};

export default Register;
