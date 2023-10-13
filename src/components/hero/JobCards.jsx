import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { jobsDetails, chosen } from './Datas';
import { MdLocationPin } from 'react-icons/md';
import { Link } from 'react-router-dom';

const JobCards = () => {
  return (
    <>
      <div className="job-card-slider">
        <Swiper
          spaceBetween={70}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {jobsDetails.map((detail) => (
            <SwiperSlide key={detail.heading}>
              <div className="detail-holder">
                <div className="price-shadow">
                  <div className="p-shadows"></div>
                  <div className="p-detail">{detail.price}</div>
                </div>
                <div className="card-content">
                  <div className="card-location">
                    <MdLocationPin
                      style={{ color: "#2596BE", width: "2rem", height: "2rem" }}
                    />
                    <p style={{ fontSize: "20px", fontWeight: "700", marginLeft: ".6rem" }}>
                      {detail.location}
                    </p>
                  </div>
                  <div className="card-detail">
                    <h3>{detail.heading}</h3>
                    <div className="card-detail-texts">
                      <span>{detail.schedule}</span>
                      <p>{detail.body}</p>
                    </div>
                    <div className="read" style={{marginTop:"1rem"}}>
                      <Link to={`/detail/${detail.id}`} style={{color:"#2596BE", fontSize:"18px",fontWeight:"400"}}>{detail.herf}</Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="choose-us-section" style={{marginTop:"3rem"}}>
        <h3 style={{ fontSize: "34px", fontWeight: "700", margin: ".5rem 0", color: "#2596BE", textAlign: "center" }}>
          Why Choose Us ?
        </h3>
        <div className="choose-content">
          {chosen.map((data) => (
            <div className="choose-card-div" key={data.group}>
              <div className={data.group === "help" ? "help-details" : "choose-details"}>
                <div className="choose-text">
                  <h4>{data.title}</h4>
                  <div className="title-line"></div>
                  <div className={data.group === "help" ? "circle-help" : "circles"}>
                    <div className="circle1"></div>
                    <div className="circle1 circle2"></div>
                  </div>
                  <p>{data.chosentext}</p>
                </div>
                <div className="choose-img" style={{ width: "620px", height: "300px" }}>
                  <img src={data.img} alt={data.title} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default JobCards;