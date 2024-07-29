import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FilterShimmer from "./FilterShimmer";

const VideoList = ({ category }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideos(category);
  }, [category]);

  const fetchVideos = async (category) => {
    const apiKey = "AIzaSyCg_FibtkIF4BcoPTOXiCokN85kid-d9SM";
    const apiUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${category}&key=${apiKey}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      if (data.items) {
        setVideos(data.items);
      } else {
        setVideos([]);
      }
    } catch (error) {
      console.error("Error fetching the videos:", error);
      setVideos([]);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">{category}</h1>
      <div className="flex flex-col gap-4">
        {videos.length > 0 ? (
          videos.map((video) => (
            <div
              className="flex flex-row items-start gap-4 p-4 rounded-lg shadow-lg"
              key={video.id}
            >
              <Link
                to={`/watch?v=${video.id.videoId}`}
                className="flex-shrink-0"
              >
                <img
                  src={video.snippet.thumbnails.high.url}
                  alt={video.snippet.title}
                  className="w-80 h-auto rounded-lg"
                />
              </Link>
              <div>
                <Link
                  to={`/watch?v=${video.id.videoId}`}
                  className="text-lg font-semibold"
                >
                  <h3>{video.snippet.title}</h3>
                </Link>
                <div>{video.snippet.channelTitle}</div>
                <div className="text-gray-600 line-clamp-2">
                  {video.snippet.description}
                </div>
              </div>
            </div>
          ))
        ) : (
          <FilterShimmer />
        )}
      </div>
    </div>
  );
};

export default VideoList;
