import { Skeleton, Stack } from "@chakra-ui/react";
import React from "react";

const ChatLoading = () => {
  return (
    <Stack>
      <Skeleton height="60px"></Skeleton>
      <Skeleton height="60px"></Skeleton>
      <Skeleton height="60px"></Skeleton>
      <Skeleton height="60px"></Skeleton>
      <Skeleton height="60px"></Skeleton>
      <Skeleton height="60px"></Skeleton>
      <Skeleton height="60px"></Skeleton>
      <Skeleton height="60px"></Skeleton>
      <Skeleton height="60px"></Skeleton>
    </Stack>
  );
};

export default ChatLoading;
