import React from "react";
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
  FormBtn,
  FormButton,
  FormText,
  FormTextP,
  FormIcons,
} from "./LoginStyle";
import { FiUser } from "react-icons/fi";
import { BiLock } from "react-icons/bi";
import { AiOutlineGoogle } from "react-icons/ai";
import { RiFacebookFill } from "react-icons/ri";
import { RiTwitterFill } from "react-icons/ri";
import { useForm } from "../../hooks/useForm";

const Login = () => {
  const [formValues, handleInputChange] = useForm({
    email: "user@mail.com",
    password: "",
  });

  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <Main>
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
                <ForgotPass>Forgot password?</ForgotPass>
              </FormLink>
              <FormError></FormError>
              <FormBtn>
                <FormButton>LOGIN</FormButton>
              </FormBtn>
              <FormText>
                <FormTextP>Or Sign Up Using</FormTextP>
              </FormText>
              <FormIcons>
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
            </LoginForm>
          </FormBox>
        </LoginContainer>
      </LoginSection>
    </Main>
  );
};

export default Login;
