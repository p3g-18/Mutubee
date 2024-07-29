import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { VIDEO_CONTENT } from "../utils/constants";
import numeral from "numeral";
import moment from "moment";

const WpageData = () => {
  const [content, setContent] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const [subscribe, setSubscribe] = useState("Subscribe");
  const [searchParam] = useSearchParams();
  const videoId = searchParam.get("v");

  useEffect(() => {
    const getVideoContent = async () => {
      try {
        const response = await fetch(`${VIDEO_CONTENT}${videoId}`);
        const data = await response.json();
        console.log("VIDEO", data);
        if (data.items && data.items.length > 0) {
          setContent(data.items[0]);
        }
      } catch (error) {
        console.log("error", error);
      }
    };

    if (videoId) {
      getVideoContent();
    }
  }, [videoId]);

  if (!content) {
    return <div>Loading...</div>;
  }

  const { snippet } = content;
  const { title, channelTitle, publishedAt } = snippet;
  const { viewCount } = content.statistics;
  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="Description w-[60.9%]  my-4 p-2 ">
      <div className="Title">
        <h2 className=" font-extrabold text-xl">{title}</h2>
      </div>
      <div className="py-4">
        {/* <img src={thumbnails.high.url}></img> */}
        <span className="channel font-bold ">{channelTitle}</span>
        <span>
          <button
            className="bg-slate-400 mx-4 p-2  rounded-full"
            onClick={() => {
              subscribe === "Subscribe"
                ? setSubscribe("Subscribed")
                : setSubscribe("Subscribe");
            }}
          >
            {subscribe}
          </button>
        </span>
      </div>
      <div className=" bg-gray-500 rounded-xl shadow-lg p-2">
        <div className="m-2  font-semibold">
          {numeral(viewCount).format("0.a")} Views
          <span> . {moment(publishedAt).fromNow()}</span>
        </div>
        <div
          className={`Description mb-2  text-white ${
            expanded ? "" : " line-clamp-2"
          }`}
        >
          {snippet?.description}
        </div>
        <button
          onClick={toggleExpand}
          className="text-blue-400  focus:outline-none"
        >
          {expanded ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
};

export default WpageData;
