// RoundedImages.js

import React from "react";
import { Link } from "react-router-dom";
import StaffImage from "./assets/Staffimage.jpeg";
import StudentImage from "./assets/Studentimage.jpeg";

const RoundedImages = () => {
  return (
    <div className="rounded-images-container">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          // justifyContent: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <div>
          <Link
            to="/App3/addstaff"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <img src={StaffImage} alt="RoundedImage 1" />
            <p>STAFF</p>
          </Link>
        </div>
        <div>
          <Link
            to="/App3/addstudent"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <img
              src={StudentImage}
              alt="RoundedImage 2"
              // style={{
              //   borderRadius: "50%",
              //   width: "115px",
              //   height: "115px",
              //   objectFit: "cover",
              //   marginBottom: "5px",
              // }}
            />
            <p>STUDENT</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoundedImages;
