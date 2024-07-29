import React, { useState } from "react";
import moment from "moment";

const Comments = ({ data }) => {
  const [showReplies, setShowReplies] = useState(false);

  const {
    snippet: {
      topLevelComment: {
        snippet: {
          authorDisplayName,
          publishedAt,
          textOriginal,
          authorProfileImageUrl,
        },
      },
    },
  } = data;
  const { replies } = data;
  console.log("Replies", data);

  return (
    <div className="m-2 w-[60%]">
      <div className="w-2/4 flex items-center">
        <div>
          <img
            className="h-12 rounded-full items-center"
            src={
              authorProfileImageUrl ||
              "https://static.vecteezy.com/system/resources/thumbnails/002/387/693/small_2x/user-profile-icon-free-vector.jpg"
            }
            alt="pfp"
          />
        </div>
        <div className="px-4 font-bold">{authorDisplayName}</div>
        <div>{moment(publishedAt).fromNow()}</div>
      </div>
      <div className="pl-16 ">{textOriginal}</div>
      {replies && replies.comments && (
        <div className="px-14">
          <button
            className=" text-blue-600  font-bold rounded-full p-2"
            onClick={() => setShowReplies(!showReplies)}
          >
            {showReplies ? "Hide Replies" : "Show Replies"}
          </button>
          {showReplies &&
            replies.comments.map((reply) => (
              <div key={reply.id} className="mt-3 pl-6">
                <div className="flex items-center">
                  <div>
                    <img
                      className="h-8 rounded-full items-center"
                      src={
                        reply.snippet.authorProfileImageUrl ||
                        "https://static.vecteezy.com/system/resources/thumbnails/002/387/693/small_2x/user-profile-icon-free-vector.jpg"
                      }
                      alt="profile-icon"
                    />
                  </div>
                  <div className="px-4 font-bold">
                    {reply.snippet.authorDisplayName}
                  </div>
                  <div>{moment(reply.snippet.publishedAt).fromNow()}</div>
                </div>
                <div className="pl-16 line-clamp-2 p-2">
                  {reply.snippet.textOriginal}
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Comments;
