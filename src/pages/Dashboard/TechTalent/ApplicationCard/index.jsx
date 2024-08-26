import React, { useState, useEffect } from "react";
import avater from "../../../../static/images/user.png";
import { useApiRequest } from "../../../../utils/functions/fetchEndPoint";

const JobApplication = () => {
  const token =
    JSON.parse(window.localStorage.getItem("NXGJOBHUBLOGINKEYV1")) ||
    JSON.parse(window.sessionStorage.getItem("NXGJOBHUBLOGINKEYV1"));
  useEffect(() => {
    if (!token.authKey) {
      navigate("/login");
      return;
    }
  }, []);
  const {
    data: MyApplication,
    loading,
    error,
  } = useApiRequest("/api/v1/tech-talent/my-applications");

  const hasError = error || !MyApplication || !MyApplication.content?.length;

  const jobsResult = MyApplication?.content || [];

  return (
    <div className="">
      {loading ? (
        <p className="loading">Loading jobs...</p>
      ) : hasError ? (
        <div className="error-message">
          {error ? (
            <p>An error occurred while fetching jobs: {error.message}</p>
          ) : (
            <p>You haven't applied for any jobs yet.</p>
          )}
        </div>
      ) : (
        <>
          <div className="jobresults grid lg:grid-cols-3 grid-cols-2 gap-4 p-[20px] lg:gap-7 lg:p-[70px]">
            {jobsResult.map((data) => (
              <div
                className="job-Post bg-white rounded shadow-md p-4 flex flex-col items-start lg:px-[30px] px-[10px] py-[8px] lg:py-[20px]"
                key={data.id}>
                <div className="employerimg flex items-center mb-4">
                  <div className="userimg mr-4">
                    <img
                      src={data?.jobPosting?.employer_profile_pic || avater}
                      alt=""
                    />
                  </div>
                  <div className="employerdetails">
                    <h4 className="name text-lg font-bold">
                      <b>{data?.jobPosting?.employer_name || "Kristy Haag"}</b>
                    </h4>
                    <h2>Employer</h2>
                  </div>
                </div>
                <div className="detail flex flex-col justify-between">
                  <div className="job-Details">
                    <h3>
                      <b>Job Category:</b> {data?.jobPosting?.job_title}
                    </h3>
                    <h3>
                      <b>Budget:</b> {data?.jobPosting?.salary}
                    </h3>
                    <h3 className="">
                      <b>Application Status:</b>
                      <span>{data?.applicationStatus}</span>
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default JobApplication;
