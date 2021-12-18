import React from "react";
import "./Topbar.css";


export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="logo">
          Customer Service CRM
        </div>
        <div>
          <img
            src="https://www.pngfind.com/pngs/m/676-6764065_default-profile-picture-transparent-hd-png-download.png"
            alt="profilePic"
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}
