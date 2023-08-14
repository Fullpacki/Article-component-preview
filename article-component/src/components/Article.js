import { useState } from "react";
import ImgDrawers from "../images/drawers.jpg";
import ProfilAvatar from "../images/avatar-michelle.jpg";
import IconShare from "../images/icon-share.svg";
import IconFacebook from "../images/icon-facebook.svg";
import IconPinterest from "../images/icon-pinterest.svg";
import IconTwitter from "../images/icon-twitter.svg";

function Article() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="flex flex-col rounded-xl bg-white shadow-xl max-w-sm overflow-hidden relative xl:flex-row xl:max-w-3xl xl:overflow-visible">
      <img
        className="rounded-t-xl xl:rounded-none xl:rounded-l-xl xl:w-1/2 object-cover"
        src={ImgDrawers}
        alt=""
      />
      <div className="pt-10 pb-5 px-10 flex flex-col gap-5 xl:w-full">
        <h1 className="text-xl font-semibold text-gray-700">
          Shift the overall look and feel by adding these wonderful touches to
          furniture in your home
        </h1>
        <h2 className="text-gray-500 text-sm">
          Ever been in a room and felt like something was missing? Perhaps it
          felt slightly bare and ininviting. I've got some simple tips to help
          you make any room feel complete.
        </h2>
        <div
          className={`flex flex-row items-center justify-between transition-all ease-in-out duration-300 mt-5 ${
            isActive ? "translate-x-[0%] xl:translate-x-0" : ""
          }`}
        >
          <div className="flex flex-row gap-4 items-center">
            <img className="rounded-full w-10" src={ProfilAvatar} alt="" />
            <div>
              <h3 className="font-semibold text-gray-700">Michelle Appleton</h3>
              <p className="text-gray-400">28 Jun 2020</p>
            </div>
          </div>
          <div
            onClick={handleClick}
            className="p-2 rounded-full cursor-pointer bg-gray-100"
          >
            <img src={IconShare} alt="" />
          </div>
        </div>
        <div
          className={`bg-[#48576c] flex-row justify-around flex px-2 py-7 rounded-b-xl transition-all ease-in-out duration-300  absolute w-full bottom-0 left-0 xl:hidden ${
            isActive ? "translate-x-[150%]" : "translate-x-[0%]"
          }`}
        >
          <div className="flex flex-row items-center gap-4">
            <p className="tracking-[0.3em] text-gray-400">SHARE</p>
            <img src={IconFacebook} alt="" />
            <img src={IconTwitter} alt="" />
            <img src={IconPinterest} alt="" />
          </div>
          <div onClick={handleClick} className="p-2 rounded-full bg-gray-300">
            <img src={IconShare} alt="" />
          </div>
        </div>
        <div className="hidden xl:flex">
          <div
            className={`"px-6 py-3 w-1/3 flex flex-row justify-center gap-5 items-center rounded-xl bg-[#48576c] absolute bottom-[6em] -right-[4.5em] transition-all ease-in-out duration-500"
            ${isActive ? "" : "opacity-0"}`}
          >
            <p className="tracking-[0.3em] text-gray-400">SHARE</p>
            <img className="cursor-pointer" src={IconFacebook} alt="" />
            <img className="cursor-pointer" src={IconTwitter} alt="" />
            <img className="cursor-pointer" src={IconPinterest} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Article;
