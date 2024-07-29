import React from "react";
import Msg from "./Msg";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../Redux/chatSlice";

const LiveChat = () => {
  const dispatch = useDispatch();
  // @ts-ignore
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const j = setInterval(() => {
      console.log("api polling");
      dispatch(
        addMessage({
          name: "Pg",
          message: "Let's goo🚀",
        })
      );
    }, 90000);

    return () => clearInterval(j);
  }, []);

  return (
    <div className=" w-[350px] h-[450px] border border-black mx-2 shadow-md rounded-xl overflow-y-scroll">
      {chatMessages.map((c, i) => (
        <Msg key={i} name={c.name} message={c.message} />
      ))}
    </div>
  );
};

export default LiveChat;
