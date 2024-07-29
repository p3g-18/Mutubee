import React, { useEffect, useState } from "react";
import Comments from "./Comments";
import { Cmnt_API } from "../utils/constants";
import { useSearchParams } from "react-router-dom";

const CommentContainer = () => {
  const [cmntData, setCmntData] = useState([]);
  const [searchParam] = useSearchParams();
  const videoId = searchParam.get("v");

  useEffect(() => {
    if (videoId) {
      getComments();
    }
  }, [videoId]);

  const getComments = async () => {
    const data = await fetch(`${Cmnt_API}&videoId=${videoId}`);
    const json = await data.json();
    console.log("CMNT", json);
    setCmntData(json.items || []);
    // const { snippet } = json?.items;

    console.log("fefewf", json?.items[0]);
  };

  return (
    <div className="m-2 p-2">
      <h1 className=" font-bold">Comments: </h1>
      <div>
        {cmntData.map((item) => (
          <Comments data={item} key={videoId} />
        ))}
      </div>
    </div>
  );
};

export default CommentContainer;
