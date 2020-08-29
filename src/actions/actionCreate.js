export const addMessage = (chatId, msgId, text) => ({
  type: "ADD_MESSAGE",
  chatId,
  msgId,
  text,
});
