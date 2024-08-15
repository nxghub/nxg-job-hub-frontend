import React from "react";
import { useDispatch } from "react-redux";
import { closeErrorModal } from "../../../../redux/TalentApplicationSlice";

const AppErrorMessage = () => {
  const dispatch = useDispatch();
  const close = () => {
    dispatch(closeErrorModal());
  };
  return (
    <div
      className={` bg-white z-30 absolute top-[150px] left-[15%] md:left-[25%] w-[80%] md:w-[60%] m-auto  rounded-[24px] text-base font-medium px-10 py-5`}>
      <div className="flex items-center gap-y-3 text-center justify-center flex-col">
        <div className="flex items-center gap-x-1">
          <span className="text-xl">Ooops!!, Something went wrong!!</span>
        </div>
        <span>
          ChecK Internet Connection and Try Again.
          {/* <span className="text-lg font-semibold">“My Applications”</span> */}
        </span>
        <button onClick={close} className="w-1/2 py-2  bg-[#2596BE] text-white">
          Close
        </button>
      </div>
    </div>
  );
};

export default AppErrorMessage;
