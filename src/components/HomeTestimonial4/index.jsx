import React from "react";

import { Img, Text } from "components";

const HomeTestimonial4 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-[30.73px] items-center justify-start w-full">
          <Img
            className="h-[18px] w-[111px]"
            src="images/img_stars.svg"
            alt="stars"
          />
          <div className="flex flex-col gap-[30px] items-center justify-start w-full">
            <Text
              className="leading-[140.00%] text-2xl md:text-[22px] text-black-900 text-center sm:text-xl w-full"
              size="txtRobotoBold24"
            >
              {props?.descriptionSix}
            </Text>
            <div className="flex flex-row gap-[19.21px] items-center justify-center w-full">
              <Img
                className="h-[53px] md:h-auto rounded-[50%] w-[53px]"
                src="images/img_avatarimage_53x53.png"
                alt="avatarimage"
              />
              <div className="flex flex-col gap-[5px] items-start justify-start w-auto">
                <Text
                  className="text-base text-black-900 w-auto"
                  size="txtRobotoSemiBold16"
                >
                  {props?.username}
                </Text>
                <Text
                  className="text-base text-black-900 w-auto"
                  size="txtRobotoRegular16"
                >
                  {props?.userposition}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

HomeTestimonial4.defaultProps = {
  descriptionSix:
    "Our platform has been a game-changer for me. I was able to find my dream property within days, thanks to the advanced search features and comprehensive real estate data.",
  username: "John Doe",
  userposition: "CEO, ABC Company",
};

export default HomeTestimonial4;
