import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, SelectBox, Text } from "components";

const navlinkdropdownOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const Navbar = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <div className={props.className}>
        <div className="border-b border-black-900 border-solid flex md:flex-col flex-row md:gap-5 items-start justify-center sm:px-5 px-[30px] py-5 w-full">
          <div className="flex flex-1 md:flex-col flex-row gap-8 items-center sm:items-start justify-between sm:justify-center w-full">
            <Img
              className="h-[27px] w-[151px]"
              src="images/img_column.svg"
              alt="column"
            />
            <Text
              className="common-pointer flex-1 text-base text-black-900 w-auto"
              size="txtRobotoRegular16"
              onClick={() => navigate("/home1")}
            >
              Link One
            </Text>
            <Text
              className="common-pointer flex-1 text-base text-black-900 w-auto"
              size="txtRobotoRegular16"
              onClick={() => navigate("/aiplatform")}
            >
              Link Two
            </Text>
            <Text
              className="common-pointer flex-1 text-base text-black-900 w-auto"
              size="txtRobotoRegular16"
              onClick={() => navigate("/propertydetails")}
            >
              Link Three
            </Text>
            <SelectBox
              className="flex-1 md:flex-1 font-roboto sm:pr-5 pr-[35px] text-base text-black-900 text-left w-[22%] md:w-full"
              placeholderClassName="text-black-900"
              indicator={
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowdown.svg"
                  alt="arrow_down"
                />
              }
              isMulti={false}
              name="navlinkdropdown"
              options={navlinkdropdownOptionsList}
              isSearchable={false}
              placeholder="Link Four"
            />
          </div>
          <div className="flex flex-row gap-4 items-center justify-center w-auto">
            <Button className="bg-light_blue-500_7f cursor-pointer font-roboto min-w-[89px] py-2.5 rounded-[10px] text-base text-center text-white-A700">
              Sign In
            </Button>
            <Button className="bg-light_blue-500 cursor-pointer font-roboto min-w-[150px] outline outline-[1px] outline-white-A700 py-2.5 rounded-[10px] text-base text-center text-white-A700">
              Create Account
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

Navbar.defaultProps = {};

export default Navbar;
