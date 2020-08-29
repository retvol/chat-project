const initialState = [
    {chatId: 'general', messageList: [{id: 1, text: "HELLO"}, {id: 2, text: "WTF"}]},
    {chatId: 'austrelia', messageList: [{id: 1, text: "hi"}, {id: 2, text: "how are you"}]},
];

const chatReducer = (state = initialState, {chatId, msgId, text, type}) => {
    switch(type) {
        case "ADD_MESSAGE" : {
            // заменить на клонирование из lodash
            // const newState = state.clone();
            const newState = [...state];
            let chat = newState.find(chat => chat.chatId === chatId);
            if (chat) {
                chat.messageList.push({id: msgId, text});
            }

            return newState;
        }

        default: return state;
    }
};

export default chatReducer;
