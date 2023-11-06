import React from "react";

import { Button, Img, Text } from "components";

const ContactTeam1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-4 items-center justify-start w-full">
          <Text
            className="text-base text-black-900 text-center w-auto"
            size="txtRobotoSemiBold16"
          >
            {props?.subheadingOne}
          </Text>
          <div className="flex flex-col gap-6 items-center justify-start w-full">
            <Text
              className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center w-full"
              size="txtRobotoCondensedBold48"
            >
              {props?.headingTwo}
            </Text>
            <Text
              className="text-black-900 text-center text-lg w-full"
              size="txtRobotoRegular18"
            >
              {props?.languageOne}
            </Text>
          </div>
        </div>
        <div className="flex flex-col md:gap-10 gap-24 items-center justify-start w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="md:gap-5 gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
              <div className="flex flex-1 flex-col gap-6 items-center justify-start w-full">
                <Img
                  className="h-20 md:h-auto object-cover w-20"
                  src="images/img_placeholderimage_80x80.png"
                  alt="placeholderimag"
                />
                <div className="flex flex-col gap-4 items-center justify-start w-full">
                  <div className="flex flex-col gap-[5px] items-center justify-start w-full">
                    <Text
                      className="text-black-900 text-center text-xl w-full"
                      size="txtRobotoSemiBold20"
                    >
                      {props?.name}
                    </Text>
                    <Text
                      className="text-black-900 text-center text-lg w-full"
                      size="txtRobotoRegular18"
                    >
                      {props?.jobtitle}
                    </Text>
                  </div>
                  <Text
                    className="leading-[150.00%] max-w-[326px] md:max-w-full text-base text-black-900 text-center"
                    size="txtRobotoRegular16"
                  >
                    {props?.text}
                  </Text>
                </div>
                <div className="flex flex-row gap-3.5 items-start justify-start w-auto">
                  <Img
                    className="h-6 w-6"
                    src="images/img_iconlinkedin.svg"
                    alt="iconlinkedin"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_airplane.svg"
                    alt="airplane"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_icondribble.svg"
                    alt="icondribble"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-6 items-center justify-start w-full">
                <Img
                  className="h-20 md:h-auto object-cover w-20"
                  src="images/img_placeholderimage_80x80.png"
                  alt="placeholderimag"
                />
                <div className="flex flex-col gap-4 items-center justify-start w-full">
                  <div className="flex flex-col gap-[5px] items-center justify-start w-full">
                    <Text
                      className="text-black-900 text-center text-xl w-full"
                      size="txtRobotoSemiBold20"
                    >
                      {props?.name1}
                    </Text>
                    <Text
                      className="text-black-900 text-center text-lg w-full"
                      size="txtRobotoRegular18"
                    >
                      {props?.jobtitle1}
                    </Text>
                  </div>
                  <Text
                    className="leading-[150.00%] max-w-[326px] md:max-w-full text-base text-black-900 text-center"
                    size="txtRobotoRegular16"
                  >
                    {props?.loremipsumdolorOne}
                  </Text>
                </div>
                <div className="flex flex-row gap-3.5 items-start justify-start w-auto">
                  <Img
                    className="h-6 w-6"
                    src="images/img_iconlinkedin.svg"
                    alt="iconlinkedin"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_airplane.svg"
                    alt="airplane"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_icondribble.svg"
                    alt="icondribble"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-6 items-center justify-start w-full">
                <Img
                  className="h-20 md:h-auto object-cover w-20"
                  src="images/img_placeholderimage_80x80.png"
                  alt="placeholderimag"
                />
                <div className="flex flex-col gap-4 items-center justify-start w-full">
                  <div className="flex flex-col gap-[5px] items-center justify-start w-full">
                    <Text
                      className="text-black-900 text-center text-xl w-full"
                      size="txtRobotoSemiBold20"
                    >
                      {props?.name2}
                    </Text>
                    <Text
                      className="text-black-900 text-center text-lg w-full"
                      size="txtRobotoRegular18"
                    >
                      {props?.jobtitle2}
                    </Text>
                  </div>
                  <Text
                    className="leading-[150.00%] max-w-[326px] md:max-w-full text-base text-black-900 text-center"
                    size="txtRobotoRegular16"
                  >
                    {props?.text1}
                  </Text>
                </div>
                <div className="flex flex-row gap-3.5 items-start justify-start w-auto">
                  <Img
                    className="h-6 w-6"
                    src="images/img_iconlinkedin.svg"
                    alt="iconlinkedin"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_airplane.svg"
                    alt="airplane"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_icondribble.svg"
                    alt="icondribble"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-6 items-center justify-start w-full">
                <Img
                  className="h-20 md:h-auto object-cover w-20"
                  src="images/img_placeholderimage_80x80.png"
                  alt="placeholderimag"
                />
                <div className="flex flex-col gap-4 items-center justify-start w-full">
                  <div className="flex flex-col gap-[5px] items-center justify-start w-full">
                    <Text
                      className="text-black-900 text-center text-xl w-full"
                      size="txtRobotoSemiBold20"
                    >
                      {props?.name3}
                    </Text>
                    <Text
                      className="text-black-900 text-center text-lg w-full"
                      size="txtRobotoRegular18"
                    >
                      {props?.jobtitle3}
                    </Text>
                  </div>
                  <Text
                    className="leading-[150.00%] max-w-[326px] md:max-w-full text-base text-black-900 text-center"
                    size="txtRobotoRegular16"
                  >
                    {props?.text2}
                  </Text>
                </div>
                <div className="flex flex-row gap-3.5 items-start justify-start w-auto">
                  <Img
                    className="h-6 w-6"
                    src="images/img_iconlinkedin.svg"
                    alt="iconlinkedin"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_airplane.svg"
                    alt="airplane"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_icondribble.svg"
                    alt="icondribble"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-6 items-center justify-start w-full">
                <Img
                  className="h-20 md:h-auto object-cover w-20"
                  src="images/img_placeholderimage_80x80.png"
                  alt="placeholderimag"
                />
                <div className="flex flex-col gap-4 items-center justify-start w-full">
                  <div className="flex flex-col gap-[5px] items-center justify-start w-full">
                    <Text
                      className="text-black-900 text-center text-xl w-full"
                      size="txtRobotoSemiBold20"
                    >
                      {props?.name4}
                    </Text>
                    <Text
                      className="text-black-900 text-center text-lg w-full"
                      size="txtRobotoRegular18"
                    >
                      {props?.jobtitle4}
                    </Text>
                  </div>
                  <Text
                    className="leading-[150.00%] max-w-[326px] md:max-w-full text-base text-black-900 text-center"
                    size="txtRobotoRegular16"
                  >
                    {props?.text3}
                  </Text>
                </div>
                <div className="flex flex-row gap-3.5 items-start justify-start w-auto">
                  <Img
                    className="h-6 w-6"
                    src="images/img_iconlinkedin.svg"
                    alt="iconlinkedin"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_airplane.svg"
                    alt="airplane"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_icondribble.svg"
                    alt="icondribble"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-6 items-center justify-start w-full">
                <Img
                  className="h-20 md:h-auto object-cover w-20"
                  src="images/img_placeholderimage_80x80.png"
                  alt="placeholderimag"
                />
                <div className="flex flex-col gap-4 items-center justify-start w-full">
                  <div className="flex flex-col gap-[5px] items-center justify-start w-full">
                    <Text
                      className="text-black-900 text-center text-xl w-full"
                      size="txtRobotoSemiBold20"
                    >
                      {props?.name5}
                    </Text>
                    <Text
                      className="text-black-900 text-center text-lg w-full"
                      size="txtRobotoRegular18"
                    >
                      {props?.jobtitle5}
                    </Text>
                  </div>
                  <Text
                    className="leading-[150.00%] max-w-[326px] md:max-w-full text-base text-black-900 text-center"
                    size="txtRobotoRegular16"
                  >
                    {props?.loremipsumdolorone1}
                  </Text>
                </div>
                <div className="flex flex-row gap-3.5 items-start justify-start w-auto">
                  <Img
                    className="h-6 w-6"
                    src="images/img_iconlinkedin.svg"
                    alt="iconlinkedin"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_airplane.svg"
                    alt="airplane"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_icondribble.svg"
                    alt="icondribble"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-6 items-center justify-start w-full">
                <Img
                  className="h-20 md:h-auto object-cover w-20"
                  src="images/img_placeholderimage_80x80.png"
                  alt="placeholderimag"
                />
                <div className="flex flex-col gap-4 items-center justify-start w-full">
                  <div className="flex flex-col gap-[5px] items-center justify-start w-full">
                    <Text
                      className="text-black-900 text-center text-xl w-full"
                      size="txtRobotoSemiBold20"
                    >
                      {props?.name6}
                    </Text>
                    <Text
                      className="text-black-900 text-center text-lg w-full"
                      size="txtRobotoRegular18"
                    >
                      {props?.jobtitle6}
                    </Text>
                  </div>
                  <Text
                    className="leading-[150.00%] max-w-[326px] md:max-w-full text-base text-black-900 text-center"
                    size="txtRobotoRegular16"
                  >
                    {props?.text4}
                  </Text>
                </div>
                <div className="flex flex-row gap-3.5 items-start justify-start w-auto">
                  <Img
                    className="h-6 w-6"
                    src="images/img_iconlinkedin.svg"
                    alt="iconlinkedin"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_airplane.svg"
                    alt="airplane"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_icondribble.svg"
                    alt="icondribble"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-6 items-center justify-start w-full">
                <Img
                  className="h-20 md:h-auto object-cover w-20"
                  src="images/img_placeholderimage_80x80.png"
                  alt="placeholderimag"
                />
                <div className="flex flex-col gap-4 items-center justify-start w-full">
                  <div className="flex flex-col gap-[5px] items-center justify-start w-full">
                    <Text
                      className="text-black-900 text-center text-xl w-full"
                      size="txtRobotoSemiBold20"
                    >
                      {props?.name7}
                    </Text>
                    <Text
                      className="text-black-900 text-center text-lg w-full"
                      size="txtRobotoRegular18"
                    >
                      {props?.jobtitle7}
                    </Text>
                  </div>
                  <Text
                    className="leading-[150.00%] max-w-[326px] md:max-w-full text-base text-black-900 text-center"
                    size="txtRobotoRegular16"
                  >
                    {props?.text5}
                  </Text>
                </div>
                <div className="flex flex-row gap-3.5 items-start justify-start w-auto">
                  <Img
                    className="h-6 w-6"
                    src="images/img_iconlinkedin.svg"
                    alt="iconlinkedin"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_airplane.svg"
                    alt="airplane"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_icondribble.svg"
                    alt="icondribble"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 items-center justify-start w-full">
            <div className="flex flex-col gap-4 items-center justify-start w-full">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center w-full"
                size="txtRobotoBold32"
              >
                {props?.headingThree}
              </Text>
              <Text
                className="text-black-900 text-center text-lg w-full"
                size="txtRobotoRegular18"
              >
                {props?.languageTwo}
              </Text>
            </div>
            <Button
              className="!text-white-A700 cursor-pointer font-roboto h-12 outline outline-[1px] outline-black-900 text-base text-center w-[155px]"
              shape="round"
              color="light_blue_500_7f"
              size="md"
              variant="fill"
            >
              {props?.button}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

ContactTeam1.defaultProps = {
  subheadingOne: "Tagline",
  headingTwo: "Our team",
  languageOne: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  name: "Full name",
  jobtitle: "Job title",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  name1: "Full name",
  jobtitle1: "Job title",
  loremipsumdolorOne:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  name2: "Full name",
  jobtitle2: "Job title",
  text1:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  name3: "Full name",
  jobtitle3: "Job title",
  text2:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  name4: "Full name",
  jobtitle4: "Job title",
  text3:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  name5: "Full name",
  jobtitle5: "Job title",
  loremipsumdolorone1:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  name6: "Full name",
  jobtitle6: "Job title",
  text4:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  name7: "Full name",
  jobtitle7: "Job title",
  text5:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  headingThree: "We’re hiring!",
  languageTwo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  button: "Button",
};

export default ContactTeam1;
