import React from "react";

const CardDetails = ({ job, onClose }) => {
  return (
    <div className=" bg-white px-4 lg:px-10 py-5">
      <div className="flex w-full gap-y-4 flex-col">
        <div className="flex w-full justify-between">
          <div className="items-center gap-x-2 flex">
            <img src="/dashboard/figma-logo.png" alt="logo" />
            <div className="flex flex-col">
              <span className="font-bold md:text-xl">{job.employerID}</span>
              <div className="flex items-center gap-x-2">
                <img src="/dashboard/location.png" alt="location" />
                <span className="md:text-sm font-medium text-[#444444]">
                  {job.location}
                </span>
              </div>
            </div>
          </div>
          <div className="flex hover:cursor-pointer items-center gap-x-2 border border-[#2596BE] text-[#2596BE] rounded-[5px] px-4 text-sm">
            <img src="/dashboard/save.png" alt="save" />
            <span>Save</span>
          </div>
        </div>

        <div className="flex gap-y-1 flex-col">
          <span className="font-medium md:text-xl">{job.job_title}</span>
          <div className="flex text-[#263238] gap-x-3 items-center font-normal md:text-sm text-xs">
            <img src="/dashboard/users.png" alt="views" />
            <span>{job.employees} employees</span>
          </div>
          <div className="flex gap-x-3 text-[#263238] items-center font-normal md:text-sm text-xs">
            <img src="/dashboard/view.png" alt="views" />
            <span>{job.views} views</span>
            <span>{job.applicants} Applicants</span>
          </div>
          <div className="flex gap-x-3 text-[#263238] items-center font-normal md:text-sm text-xs">
            <img src="/dashboard/brief.png" alt="views" />
            {job.status && <span>full time</span>} <span>*</span>
            {job.status && <span>onsite</span>}
          </div>

          <div className="flex items-center gap-x-2">
            <img src="/dashboard/pay.png" alt="pay" />
            <span className="text-[13px] text-[#263238] font-medium">
              {job.salary}
            </span>
          </div>
        </div>

        <div className="flex flex-col">
          <span className="text-sm md:text-base text-[#000000] font-medium">
            About the company
          </span>
          <span className="text-[13px] md:text-sm text-[#263238] font-medium">
            {job.company_bio}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm md:text-base text-[#000000] font-medium">
            Job Description
          </span>
          <span className="text-[13px] md:text-sm text-[#263238] font-medium">
            {job.job_description}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm md:text-base text-[#000000] font-medium">
            Required Skills and Qualifications:
          </span>
          {job.requirements}
        </div>
        <div className="flex flex-col">
          <span className="text-sm md:text-base text-[#000000] font-medium">
            Application closing date
          </span>
          <span className="text-[13px] md:text-sm text-[#263238] font-medium">
            {job.deadline}
          </span>
        </div>
      </div>
      <div className="flex justify-center py-2 items-center">
        <button
          className="w-1/2 py-2  bg-[#2596BE] text-white"
          onClick={onClose}
        >
          Apply now
        </button>
      </div>
    </div>
  );
};

export default CardDetails;
