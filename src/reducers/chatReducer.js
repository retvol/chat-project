const initialState = [
    {chatId: 'general', messageList: [{id: 1598718605932, text: "HELLO"}, {id: 1598718698794, text: "WTF"}]},
    {chatId: 'austrelia', messageList: [{id: 1598718722947, text: "hi"}, {id: 1598718742677, text: "how are you"}]},
];

const chatReducer = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_MESSAGE" : {
            // заменить на клонирование из lodash
            // const newState = state.clone();
            const newState = [...state];
            const {chatId, msgId, text} = action.payload;

            let chat = newState.find(chat => chat.chatId === chatId);
            if (chat) {
                chat.messageList.push({id: msgId, text});
            }

            return newState;
        }
        case "SET_CHANNELS":
            return action.payload;



        default: return state;
    }
};

export default chatReducer;
