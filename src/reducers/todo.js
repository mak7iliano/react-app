const initialState = [
    'react',
    'react-redux',
    'react-thunk'
];

export default function todoReducer(state = initialState, action) {
    switch(action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                 action.payload
            ];

        case 'REMOVE_TODO':
            let index = state.indexOf(action.payload);
            if (index > -1) {
                state.splice(index, 1);
            }
            return [
                ...state
            ];

        case 'EDIT_TODO':
            let editIndex = state.indexOf(action.payload);
            if (editIndex > -1) {
                state[editIndex] = action.newName;
            }
            return [
                ...state
            ];

        default: break;
    }

    return state;
}