import React from "react";
import Nav from "./Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnglesRight,
  faGasPump,
  faIndianRupeeSign,
  faMessage,
  faMobileScreenButton,
  faMoneyBill,
  faNewspaper,
  faUserDoctor,
} from "@fortawesome/free-solid-svg-icons";
import { faTv } from "@fortawesome/free-solid-svg-icons";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import { faBlog } from "@fortawesome/free-solid-svg-icons";
import { faWater } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div>
      <Nav />
      <div className="bg-gray-100 h-full w-screen mt-4">
        <div className="mt-24">
          <img src="./banner.jpg"></img>
        </div>
        <div className="grid grid-cols-4 m-2 p-2 gap-4 mt-4 bg-white">
          <div className="flex-col justify-center items-center">
            <div className="flex justify-center m-2">
              <FontAwesomeIcon
                icon={faMobileScreenButton}
                size="2xl"
                style={{ color: "#00838f" }}
              />
            </div>
            <div className="text-center text-xs" style={{ color: "#00838f" }}>
              Prepaid Mobile Recharge
            </div>
          </div>
          <div className="flex-col justify-center items-center">
            <div className="flex justify-center m-2">
              <FontAwesomeIcon
                icon={faTv}
                size="2xl"
                style={{ color: "#00838f" }}
              />
            </div>
            <div className="text-center text-xs" style={{ color: "#00838f" }}>
              DTH Recharge
            </div>
          </div>
          <div className="flex-col justify-center items-center">
            <div className="flex justify-center m-2">
              <FontAwesomeIcon
                icon={faIndianRupeeSign}
                size="2xl"
                style={{ color: "#00838f" }}
              />
            </div>
            <div className="text-center text-xs" style={{ color: "#00838f" }}>
              Loans
            </div>
          </div>
          <div className="flex-col justify-center items-center">
            <div className="flex justify-center m-2">
              <FontAwesomeIcon
                icon={faVolumeHigh}
                size="2xl"
                style={{ color: "#00838f" }}
              />
            </div>
            <div className="text-center text-xs" style={{ color: "#00838f" }}>
              Promotion
            </div>
          </div>
          <div className="flex-col justify-center items-center">
            <div className="flex justify-center m-2">
              <FontAwesomeIcon
                icon={faNewspaper}
                size="2xl"
                style={{ color: "#00838f" }}
              />
            </div>
            <div className="text-center text-xs" style={{ color: "#00838f" }}>
              News
            </div>
          </div>
          <div className="flex-col justify-center items-center">
            <div className="flex justify-center m-2">
              <FontAwesomeIcon
                icon={faBlog}
                size="2xl"
                style={{ color: "#00838f" }}
              />
            </div>
            <div className="text-center text-xs" style={{ color: "#00838f" }}>
              Blog
            </div>
          </div>
          <div className="flex-col justify-center items-center">
            <div className="flex justify-center m-2">
              <FontAwesomeIcon
                icon={faUserDoctor}
                size="2xl"
                style={{ color: "#00838f" }}
              />
            </div>
            <div className="text-center text-xs" style={{ color: "#00838f" }}>
              Jobs
            </div>
          </div>
          <div className="flex-col justify-center items-center">
            <div className="flex justify-center m-2">
              <FontAwesomeIcon
                icon={faMessage}
                size="2xl"
                style={{ color: "#00838f" }}
              />
            </div>
            <div className="text-center text-xs" style={{ color: "#00838f" }}>
              Anonymous Feedback
            </div>
          </div>
          <div className="flex-col justify-center items-center">
            <div className="flex justify-center m-2">
              <FontAwesomeIcon
                icon={faGasPump}
                size="2xl"
                style={{ color: "#00838f" }}
              />
            </div>
            <div className="text-center text-xs" style={{ color: "#00838f" }}>
              Gas Booking
            </div>
          </div>
          <div className="flex-col justify-center items-center">
            <div className="flex justify-center m-2">
              <FontAwesomeIcon
                icon={faMoneyBill}
                size="2xl"
                style={{ color: "#00838f" }}
              />
            </div>
            <div className="text-center text-xs" style={{ color: "#00838f" }}>
              Electricity Bill
            </div>
          </div>
          <div className="flex-col justify-center items-center">
            <div className="flex justify-center m-2">
              <FontAwesomeIcon
                icon={faWater}
                size="2xl"
                style={{ color: "#00838f" }}
              />
            </div>
            <div className="text-center text-xs" style={{ color: "#00838f" }}>
              Water Bill
            </div>
          </div>
          <div className="flex-col justify-center items-center">
            <div className="flex justify-center m-2">
              <FontAwesomeIcon
                icon={faAnglesRight}
                size="2xl"
                style={{ color: "#00838f" }}
              />
            </div>
            <div className="text-center text-xs" style={{ color: "#00838f" }}>
              See More
            </div>
          </div>
        </div>
        <div className="text-2xl  font-semibold text-center p-4 mt-4 bg-teal-300 bg-opacity-10 flex justify-center" style={{color:"#00838f"}}>
          All Popular Service Provides
        </div>
        <div>
          <img src="./banner2.jpg"></img>
        </div>
        <div className="text-2xl  font-semibold text-center p-4 mt-4 bg-teal-300 bg-opacity-10 flex justify-center" style={{color:"#00838f"}}>
          Services We Provide
        </div>
        <div className="">
          <img src="./banner3.jpg"></img>
        </div>
        <div className="w-screen h-24 bg-white">

        </div>
      </div>
    </div>
  );
}
