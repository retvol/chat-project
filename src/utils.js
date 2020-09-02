export function formatJsonToChatState (chat) {
    let result = [];
    chat && chat.forEach(jsonChat => {
        !result.some(stateChat => stateChat.chatId === jsonChat.chatId) ?
            result.push({
                chatId: jsonChat.chatId,
                messageList: [{id: jsonChat.id, text: jsonChat.text}]
            }) :
            result.find(stateChat => stateChat.chatId === jsonChat.chatId)
                .messageList
                .push({id: jsonChat.id, text: jsonChat.text});

    });

    return result;
}
