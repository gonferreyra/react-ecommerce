import React, { useContext } from "react";
import {
  Main,
  LoginSection,
  LoginContainer,
  FormBox,
  LoginForm,
  LoginTitle,
  FormUsername,
  Span,
  UserName,
  Input,
  FormPassword,
  UserPassword,
  FormLink,
  ForgotPass,
  FormError,
  FormErrorP,
  FormBtn,
  FormButton,
  FormText,
  FormTextP,
  FormIcons,
  IconBtn,
  Register,
  RegisterLink,
} from "./LoginStyle";
import { FiUser } from "react-icons/fi";
import { BiLock } from "react-icons/bi";
import { AiOutlineGoogle } from "react-icons/ai";
import { RiFacebookFill } from "react-icons/ri";
import { RiTwitterFill } from "react-icons/ri";
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import {
  startGoogleLogin,
  startLoginEmailPassword,
} from "../../redux/Auth/auth-actions";
import { UserContext } from "../Context/UserContext";
// import validator from "validator";
// import { uiSetError } from "../../redux/UiReducer/ui-actions";
import { redirect, useNavigate } from "react-router-dom";
import { useEffect } from "react";
// import { IoMdNotificationsOutline } from "react-icons/io";

const Login = ({ isLoggedIn }) => {
  const dispatch = useDispatch();
  const { cartIsOpen } = useContext(UserContext);
  const { loading, msgError } = useSelector((state) => state.ui);
  const { name } = useSelector((state) => state.auth);
  console.log(name);
  const navigate = useNavigate();

  const [formValues, handleInputChange] = useForm({
    email: "user@email.com",
    password: "",
  });

  useEffect(() => {
    if (isLoggedIn) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [isLoggedIn]);

  const { email, password } = formValues;

  // console.log(isLoggedIn);
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLoginEmailPassword(email, password));
    // navigate('/')
  };

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  };

  return (
    <Main cartIsOpen={cartIsOpen}>
      <LoginSection>
        <LoginContainer>
          <FormBox>
            <LoginForm onSubmit={handleLogin}>
              <LoginTitle>Login</LoginTitle>
              <FormUsername>
                <Span>Username</Span>
                <UserName>
                  <FiUser
                    style={{
                      paddingRight: "0.5rem",
                      width: "30px",
                      height: "30px",
                      color: "#71909D",
                    }}
                  />
                  <Input
                    type="email"
                    name="email"
                    value={email}
                    autoComplete="off"
                    onChange={handleInputChange}
                  />
                </UserName>
              </FormUsername>
              <FormPassword>
                <Span>Password</Span>
                <UserPassword>
                  <BiLock
                    style={{
                      paddingRight: "0.5rem",
                      width: "30px",
                      height: "30px",
                      color: "#71909D",
                    }}
                  />
                  <Input
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                  />
                </UserPassword>
              </FormPassword>
              <FormLink>
                <ForgotPass to="/register">Forgot password?</ForgotPass>
              </FormLink>
              <FormError>{/* <FormErrorP>Error</FormErrorP> */}</FormError>
              <FormBtn>
                <FormButton disabled={loading}>LOGIN</FormButton>
              </FormBtn>
              <FormText>
                <FormTextP>Or Sign Up Using</FormTextP>
              </FormText>
            </LoginForm>
            <FormIcons>
              <IconBtn onClick={handleGoogleLogin}>
                <AiOutlineGoogle
                  style={{
                    color: "white",
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    backgroundColor: "#eb3e32",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "10px",
                  }}
                />
              </IconBtn>

              <RiFacebookFill
                style={{
                  color: "white",
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  backgroundColor: "#3b5998",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                }}
              />
              <RiTwitterFill
                style={{
                  color: "white",
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  backgroundColor: "#1da1f2",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                }}
              />
            </FormIcons>
            <Register>
              <RegisterLink to="/register">Create a new account</RegisterLink>
            </Register>
          </FormBox>
        </LoginContainer>
      </LoginSection>
    </Main>
  );
};

export default Login;
