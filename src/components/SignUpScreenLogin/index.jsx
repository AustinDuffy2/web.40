import React from "react";

import { Button, Img, Input, Line, Text } from "components";

const SignUpScreenLogin = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-8 items-center justify-start pb-24 pt-2 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
            <div className="flex flex-1 flex-col items-start justify-start w-full">
              <div className="flex flex-col h-12 md:h-auto items-center justify-center sm:px-5 px-6 py-3 w-full">
                <Text
                  className="text-base text-black-900 w-auto"
                  size="txtRobotoRegular16"
                >
                  {props?.signup}
                </Text>
              </div>
              <Line className="bg-black-900 h-px w-full" />
            </div>
            <Button
              className="bg-transparent cursor-pointer flex-1 font-roboto text-base text-black-900 text-center w-full"
              size="md"
            >
              {props?.logintext}
            </Button>
          </div>
          <div className="flex flex-col gap-6 items-center justify-start w-full">
            <Text
              className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center w-full"
              size="txtRobotoCondensedBold48"
            >
              {props?.headingtext}
            </Text>
            <Text
              className="text-black-900 text-center text-lg w-full"
              size="txtRobotoRegular18"
            >
              {props?.subheadingtext}
            </Text>
          </div>
          <div className="flex flex-col gap-6 items-center justify-center w-full">
            <div className="flex flex-col gap-2 items-start justify-start w-full">
              <Text
                className="text-base text-black-900 w-full"
                size="txtRobotoRegular16"
              >
                {props?.namelabeltext}
              </Text>
              <Input
                name="textinput"
                placeholder=""
                className="p-0 w-full"
                wrapClassName="flex h-12 outline outline-[1px] outline-black-900 w-full"
                shape="round"
                color="white_A700"
                variant="fill"
              ></Input>
            </div>
            <div className="flex flex-col gap-2 items-start justify-start w-full">
              <Text
                className="text-base text-black-900 w-full"
                size="txtRobotoRegular16"
              >
                {props?.emaillabeltext}
              </Text>
              <Input
                name="textinput_One"
                placeholder=""
                className="p-0 w-full"
                wrapClassName="flex h-12 outline outline-[1px] outline-black-900 w-full"
                shape="round"
                color="white_A700"
                variant="fill"
              ></Input>
            </div>
            <div className="flex flex-col gap-2 items-start justify-start w-full">
              <Text
                className="text-base text-black-900 w-full"
                size="txtRobotoRegular16"
              >
                {props?.passwordlabeltext}
              </Text>
              <Input
                name="textinput_Two"
                placeholder=""
                className="p-0 w-full"
                wrapClassName="flex h-12 outline outline-[1px] outline-black-900 w-full"
                shape="round"
                color="white_A700"
                variant="fill"
              ></Input>
            </div>
            <div className="flex flex-col gap-4 items-start justify-start w-full">
              <Button
                className="!text-white-A700 cursor-pointer font-roboto outline outline-[1px] outline-white-A700 text-base text-center w-full"
                shape="round"
                color="light_blue_500"
                size="md"
                variant="fill"
              >
                {props?.signupbuttontext}
              </Button>
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[1292px] md:min-w-full"
                leftIcon={
                  <Img
                    className="h-6 mr-3"
                    src="images/img_icon_google.svg"
                    alt="Icon / Google"
                  />
                }
                shape="round"
                color="light_blue_500_7f"
                size="sm"
                variant="fill"
              >
                <div className="!text-white-A700 font-roboto text-base text-left">
                  {props?.signupwithgoogletext}
                </div>
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col h-[72px] md:h-auto items-center justify-start w-auto">
          <Text
            className="text-base text-black-900 text-center w-auto"
            size="txtRobotoRegular16"
          >
            {props?.copyrighttext}
          </Text>
        </div>
      </div>
    </>
  );
};

SignUpScreenLogin.defaultProps = {
  signup: "Sign Up",
  logintext: "Login",
  headingtext: "Sign Up",
  subheadingtext: "Create an account",
  namelabeltext: "Name*",
  emaillabeltext: "Email*",
  passwordlabeltext: "Password*",
  signupbuttontext: "Sign Up",
  signupwithgoogletext: "Sign Up with Google",
  copyrighttext: "© 2022 Relume",
};

export default SignUpScreenLogin;
