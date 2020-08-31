export const addMessage = (chatId, msgId, text) => ({
  type: "ADD_MESSAGE",
  payload: { chatId, msgId, text },
});
export const setChannels = (channels) => ({
  type: "SET_CHANNELS",
  payload: channels,
});

export function setAdd(url) {
  return (dispatch) => {
    fetch(url)
      .then((response) => response.json())
      .then((channels) => dispatch(setChannels(channels)));
  };
}
