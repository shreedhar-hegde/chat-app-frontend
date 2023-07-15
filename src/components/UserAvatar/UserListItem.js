import React from "react";
import { Avatar, Box, Text } from "@chakra-ui/react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

const UserListItem = ({ user, handleFunction }) => {
  return (
    <Box
      onClick={handleFunction}
      cursor="pointer"
      background="#E8E8E8"
      _hover={{ background: "#38B2AC" }}
      width="100%"
      display="flex"
      alignItems="center"
      color="black"
      px={3}
      py={2}
      mb={2}
      borderRadius="lg"
    >
      <Avatar
        mr={2}
        size="sm"
        cursor="pointer"
        name={user.name}
        src={user.pic}
      />
      <Box>
        <Text>{user.name}</Text>
        <Text fontSize="xs">
          <b>Email:</b> {user.email}
        </Text>
      </Box>
      PC
    </Box>
  );
};

export default withRouter(UserListItem);
