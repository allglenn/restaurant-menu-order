"use client";

import { Box, FilledInput, Typography } from "@mui/material";
import { useChat } from "ai/react";
import ReactMarkdown from "react-markdown";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <Box className="mx-auto w-full max-w-md py-24 flex flex-col stretch">
      {messages.length > 0
        ? messages.map((m) => (
            <Box
              key={m.id}
              className="
              flex
              items-center
              gap-2
              p-2
              rounded
              mb-2
            "
            >
              <Box
                className="
                flex
                items-center
                gap-2
                flex-1
              "
              >
                <Box
                  className="
                  w-8
                  h-8
                  rounded-full
                  bg-gray-300
                  flex
                  items-center
                  justify-center
                "
                >
                  <Typography variant="body1" className="text-gray-500 text-sm">
                    {m.role === "user" ? "🗒️ : " : "🤖: "}
                  </Typography>
                </Box>
                <Box
                  className="
                  flex-1
                  bg-white
                  p-2
                  rounded
                  shadow-md
                "
                >
                <ReactMarkdown>{m.content}</ReactMarkdown>
                </Box>
              </Box>
            </Box>
          ))
        : null}

      <form onSubmit={handleSubmit}>
        <FilledInput
          className="fixed w-full max-w-md bottom-0 border border-gray-300 rounded mb-8 shadow-xl p-2"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
      <Box className="h-16"></Box>
    </Box>
  );
}
