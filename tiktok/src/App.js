import React from "react";
import "./App.css";
import Video from "./Video";
function App() {
  return (
    //BEM naming convention
    <div className="app">
      <div className="app__videos">
        <Video
          url={
            "https://v16m.tiktokcdn.com/4f5d536aaf8afa13aa95a44269472b2f/6002a03a/video/tos/alisg/tos-alisg-pve-0037c001/a7613534a7f644908e9a94e671411e86/?a=1233&br=2682&bt=1341&cd=0%7C0%7C1&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202101160213360101890651372800A183&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=ajp5aHJoNW1seTMzOzczM0ApZzZmMzVoPDw6Nzo1NmQ8OWdlbXMzXnNhcnNfLS0tMTRzczNgYGE0XjM2M2MwLy9eNDU6Yw%3D%3D&vl=&vr="
          }
          channel="@10numaramizah"
          description="Mizah bu mu gercekten"
          song="Muzik yok"
          likes={11}
          messages={14}
          shares={21}
        />
        <Video
          url={
            "https://v16m.tiktokcdn.com/4f5d536aaf8afa13aa95a44269472b2f/6002a03a/video/tos/alisg/tos-alisg-pve-0037c001/a7613534a7f644908e9a94e671411e86/?a=1233&br=2682&bt=1341&cd=0%7C0%7C1&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202101160213360101890651372800A183&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=ajp5aHJoNW1seTMzOzczM0ApZzZmMzVoPDw6Nzo1NmQ8OWdlbXMzXnNhcnNfLS0tMTRzczNgYGE0XjM2M2MwLy9eNDU6Yw%3D%3D&vl=&vr="
          }
          channel="@10numaramizah"
          description="Mizah bu mu gercekten"
          song="Muzik yok"
          likes={11}
          messages={14}
          shares={21}
        />
      </div>

      {/*app container*/}
      {/* videos */}
      {/*<Video />*/}
      {/*<Video />*/}
      {/*<Video />*/}
      {/*<Video />*/}
      {/*<Video />*/}
    </div>
  );
}

export default App;
