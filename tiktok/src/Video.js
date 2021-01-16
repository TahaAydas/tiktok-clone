import React from "react";
import { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

function Video() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);
  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
    //if video is playing
    //stop it
    //otherwise if its not playing
    //play it
  };
  return (
    <div className="video">
      <video
        onClick={handleVideoPress}
        className="video__player"
        loop
        ref={videoRef}
        src="https://v77.tiktokcdn.com/a1fc4441651280a7a17f15e96d1237c6/60024906/video/tos/alisg/tos-alisg-pve-0037c001/0565ff41c81d4e6795b9eeb79af6450e/?a=1233&br=2998&bt=1499&cd=0%7C0%7C1&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202101152001230101902192114921412C&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=amY7cTk3ZnE6eTMzNjczM0ApNDs1Njs5ZDs4NzM2ZmYzOGdrLW9tNC5wX2ZfLS1eMTRzczBeMjE1MmJeMmA2M2EyLjA6Yw%3D%3D&vl=&vr="
      ></video>
      <VideoFooter />
      <VideoSidebar />
    </div>
  );
}

export default Video;
