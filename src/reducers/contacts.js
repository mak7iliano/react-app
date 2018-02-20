const initialState = [];

export default function contactsReducer(state = initialState, action) {
    switch(action.type) {
        case 'ADD_USER_EMAIL':
            return [
                ...state,
                action.payload
            ];

        case 'REMOVE_USER_EMAIL':
            return [];

        default: break;
    }

    return state;
}