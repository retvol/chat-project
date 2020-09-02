import axios from "axios";

// export const setChannels = (channels) => ({
//     type: "SET_CHANNELS",
//     payload: channels,
// });

export const setChannels = () => {
    return (dispatch) => {
        axios.get("http://localhost:3004/chat")
            .then((response) => {
                dispatch(setChannelsSuccess(response.data
                    // {
                    //     chatId: response.data.id,
                    //     id: response.data.msgId,
                    //     text: response.data.text
                    // }
                ))
            })
    }
};

export const addMessage = (chatId, msgId, text) => {
    return (dispatch) => {
        axios.post(`http://localhost:3004/chat`, {id: msgId, chatId, text})
            .then(response => {
                dispatch(addMessageSuccess(response.data))
            })
    }
};

export const addMessageSuccess = (payload) => ({
    type: "ADD_MESSAGE",
    ...payload,
});

export const setChannelsSuccess = (payload) => ({
    type: "SET_CHANNELS",
    payload,
});
