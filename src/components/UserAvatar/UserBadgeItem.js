import { CloseIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";
import React from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

const UserBadgeItem = ({ user, handleFunction }) => {
  return (
    <Box
      px={2}
      py={1}
      borderRadius="lg"
      m="1"
      mb="2"
      variant="solid"
      fontSize={12}
      cursor={"pointer"}
      backgroundColor="purple"
      color={"white"}
      onClick={handleFunction}
    >
      {user.name}
      <CloseIcon pl={1} />
    </Box>
  );
};

export default withRouter(UserBadgeItem);