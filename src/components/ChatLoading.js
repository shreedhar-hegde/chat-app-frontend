import { Skeleton, Stack } from "@chakra-ui/react";
import React from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

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

export default withRouter(ChatLoading);
