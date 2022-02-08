export const setRoomDetails = (username, room) => {
  return (dispatch) => {
    dispatch({
      type: "SETROOMDETAILS",
      payload: {
        username,
        room,
      },
    });
  };
};
