
// 定义初始状态
const initialState = {
    city: '',
};

export function cityReducer(state = initialState, action) {

    switch (action.type) {
        case "setCity":
            return {
                ...state,
                city: action.payload,
            };
        default:
            return state
    }
}


// 创建 Redux store

