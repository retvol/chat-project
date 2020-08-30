export const addMessage = (chatId, msgId, text) => ({
  type: "ADD_MESSAGE",
  payload: { chatId, msgId, text },
});
export const setChannels = (channels) => ({
  type: "SET_CHANNELS",
  payload: channels,
});
