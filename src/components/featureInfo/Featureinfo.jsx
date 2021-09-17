import React from "react";
import "./Featureinfo.css";
import { Videocam } from "@material-ui/icons";

export default function Featureinfo() {
  return (
    <div className="featured">
      <div className="featuredItem featureItemColor1">
        <Videocam className="featureIcon" />
        <span className="featuredTittle">Tổng số camera</span>
        <div className="featuredCameraContainer">
          <span className="featuredCameraNumber">894</span>
        </div>
      </div>

      <div className="featuredItem featureItemColor2">
        <Videocam className="featureIcon" />
        <span className="featuredTittle">CameraAI</span>
        <div className="featuredCameraContainer">
          <span className="featuredCameraNumber">121</span>
        </div>
      </div>

      <div className="featuredItem featureItemColor3">
        <Videocam className="featureIcon" />
        <span className="featuredTittle">Camera đang h.động</span>
        <div className="featuredCameraContainer">
          <span className="featuredCameraNumber">856</span>
        </div>
      </div>

      <div className="featuredItem featureItemColor4">
        <Videocam className="featureIcon" />
        <span className="featuredTittle">Camera dừng h.động</span>
        <div className="featuredCameraContainer">
          <span className="featuredCameraNumber">14</span>
        </div>
      </div>
    </div>
  );
}
