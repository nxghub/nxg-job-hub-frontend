import { useApiRequest } from "../../../../utils/functions/fetchEndPoint";
import spinner from "../../../../static/icons/spinner.svg";
import SavedJobCard from "./SavedJobCard";
import { useEffect, useState } from "react";
import SavedJobDetails from "./SavedJobCard/SavedJobDetails";
import { API_HOST_URL } from "../../../../utils/api/API_HOST";
import { useDispatch, useSelector } from "react-redux";
import Successfull from "../../job-listings/_components/successfull";
import {
  applyForJob,
  closeModal,
  setNoticeFalse,
} from "../../../../redux/TalentApplicationSlice";
import { fetchLoggedInUser } from "../../../../redux/LoggedInUserSlice";
import AppErrorMessage from "../RecommendationCard/AppErrorMessage";
import ProfileSearch from "../ProfileSearch";

const SavedJobs = () => {
  //fetching saved job
  const {
    data: savedJob,
    loading,
    error,
  } = useApiRequest("/api/v1/tech-talent/my-jobs");
  const saved = savedJob.content;
  const dispatch = useDispatch();
  const [showDetails, setShowDetails] = useState(false);
  const [selectedCardId, setSelectedCardId] = useState(null);

  const success = useSelector((state) => state.TalentApplicationSlice.success);
  const applyloader = useSelector(
    (state) => state.TalentApplicationSlice.loading
  );
  const applyError = useSelector((state) => state.TalentApplicationSlice.error);
  const notice = useSelector((state) => state.TalentApplicationSlice.notice);

  const handleCardClick = (id) => {
    setSelectedCardId(id);
    setShowDetails(true);
  };

  const handleClose = () => {
    setShowDetails(false);
  };

  const closeNoticeModal = () => {
    dispatch(setNoticeFalse());
  };
  const close = () => {
    dispatch(closeModal());
  };

  return (
    <div className="dash-profile-main-side">
      <div className="dash-profile-search-section">
        <ProfileSearch />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-20 px-2 lg:px-10 gap-6 w-full">
        {loading ? (
          <img
            className="w-[30%] absolute left-[45%]"
            src={spinner}
            alt="spinner"
          />
        ) : !loading && error ? (
          <div className="w-[80%] m-auto mt-[400px] text-xl md:text-2xl">
            <h2>
              Something went wrong, check internet connection and try again
            </h2>
          </div>
        ) : applyloader ? (
          <img
            className="w-[30%] absolute left-[45%]"
            src={spinner}
            alt="spinner"
          />
        ) : !applyloader && error ? (
          <div className="w-[80%] m-auto mt-[400px] text-xl md:text-2xl">
            <h2>
              Something went wrong, check internet connection and try again
            </h2>
          </div>
        ) : (
          saved?.map((job) => (
            <SavedJobCard
              job={job}
              key={job.id}
              onClick={() => handleCardClick(job.id)}
            />
          ))
        )}
        {showDetails && (
          <div className="fixed lg:absolute z-50 w-full lg:w-1/2 h-full overflow-auto lg:top-[8%] bottom-[0%] lg:left-[25%]">
            <SavedJobDetails
              details={saved.find((job) => job.id === selectedCardId)}
              onClose={handleClose}
            />
          </div>
        )}
        {showDetails && (
          <div className="absolute z-20 bg-black bg-opacity-25 top-0 h-full left-0 right-0 bottom-0" />
        )}
        {applyloader && (
          <img
            className="w-[30%] absolute left-[45%]"
            src={spinner}
            alt="spinner"
          />
        )}
        {notice && (
          <>
            <div className="absolute top-[100px] md:text-xl right-[20%] w-[50%] px-3 rounded-md md:w-[50%] m-auto bg-blue-200 z-30 h-[130px] md:h-[100px] py-5 text-center">
              <h2 className="font-bold">
                User is not Verified, Please Complete your Profile and Try Again
              </h2>
              <span
                onClick={closeNoticeModal}
                className="cursor-pointer font-bold relative bottom-[90px] left-[80px] md:left-[50%] md:bottom-[75px] lg:left-[45%] lg:bottom-[50px] text-red-600">
                x
              </span>
            </div>
            <div className="absolute z-20 bg-black bg-opacity-25 top-0 h-full left-0 right-0 bottom-0" />
          </>
        )}
        {success && (
          <>
            <Successfull onClose={close} />
            <div className="absolute z-20 bg-black bg-opacity-25 top-0 h-full left-0 right-0 bottom-0" />
          </>
        )}
        {applyError && (
          <>
            <AppErrorMessage />
            <div className="absolute z-20 bg-black bg-opacity-25 top-0 h-full left-0 right-0 bottom-0" />
          </>
        )}
      </div>
    </div>
  );
};

export default SavedJobs;
