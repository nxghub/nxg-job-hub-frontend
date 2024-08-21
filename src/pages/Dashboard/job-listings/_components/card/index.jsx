import React from "react";
import { Link } from "react-router-dom";
import SaveBtn from "../../../TechTalent/RecommendationCard/saveBtn";
import { data } from "autoprefixer";
import JobListings from "../..";

const JobCard = ({ job, handleShowDetails, handleApply }) => {
  return (
    <div className="px-6 bg-white py-4 hover:scale-95 transition-all ease-in">
      <div className="flex flex-col gap-y-2">
        <div className="flex justify-between">
          <div className="items-center gap-x-2 flex">
            <img src="/dashboard/figma-logo.png" alt="logo" />
            <div className="flex flex-col capitalize">
              <span className="font-bold md:text-xl">
                {job.employer_name || "Employer"}
              </span>
              <div className="flex items-center gap-x-2">
                <img src="/dashboard/location.png" alt="location" />
                <span className="md:text-sm font-medium text-[#444444]">
                  {job.job_location}
                </span>
              </div>
            </div>
          </div>
          <div className="flex hover:cursor-pointer items-center gap-x-2 border border-[#2596BE] text-[#2596BE] rounded-[5px] px-4 text-sm">
            <SaveBtn jobID={JobListings.jobId} />
          </div>
        </div>

        <span className="font-medium md:text-lg capitalize">
          {job.job_title}
        </span>

        <span className="text-base font-normal text-[#263238]">
          {job.job_description.substring(0, 250)}
          {job.job_description.length > 250 && "..."}
        </span>

        <div className="flex gap-x-2">
          <span className="border border-[#215E7D] rounded-[8px] p-1 text-[#215E7D]">
            Full time
          </span>
          <span className="border border-[#215E7D] rounded-[8px] p-1 text-[#215E7D]">
            On-site
          </span>
        </div>

        <div className="flex flex-col">
          <div className="flex items-center gap-x-2">
            <img src="/dashboard/pay.png" alt="pay" />
            <span className="font-medium md:text-sm">{job.salary}</span>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-x-3 items-center font-normal text-xs">
              <img src="/dashboard/view.png" alt="views" />
              <span>{job.view} views</span>
              <span>{job.status} Applicants</span>
            </div>
            <button
              className="flex items-center gap-2 group"
              // onClick={onClick}
              onClick={() => handleShowDetails(job)}
            >
              <Link className="underline underline-[#215E7D] underline-offset-4 text-[#215E7D]">
                See more
              </Link>
              <img
                src="/dashboard/right-arrow.png"
                alt="see more"
                className="group-hover:translate-x-2 transition-all ease-in-out"
              />
            </button>
          </div>
        </div>

        <button
          className="bg-[#2596BE] my-4 py-2 rounded-[8px] hover:scale-95 transition-all ease-in text-white"
          onClick={handleApply}
        >
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobCard;
