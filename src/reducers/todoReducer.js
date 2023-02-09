import { FETCH_TODO, ADD_TODO, UPDATE_TODO, DELETE_TODO } from "../actions"
import { getCollectionData } from "../firebase/api"

const initialState = {
    todoList: []
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        // action에 따라서 state를 변경한 다음 변경된 state를 리턴
        case 'FETCH_TODO':
            // 새로운 객체 (다른 주소) 만들어서 리턴해줘야 변경 감지
            return {
                ...state,
                todoList: action.payload
            }
        case 'ADD_TODO':
            // 새로운 객체 (다른 주소) 만들어서 리턴해줘야 변경 감지
            return {
                ...state,
                ...action.payload
            }
        case 'UPDATE_TODO':
            // 새로운 객체 (다른 주소) 만들어서 리턴해줘야 변경 감지
            return {
                ...state,
                ...action.payload
            }
        case 'DELETE_TODO':
            // 새로운 객체 (다른 주소) 만들어서 리턴해줘야 변경 감지
            
            return [...state.filter((el) => el.id !== action.payload.id)]
        // 위에 해당하는 경우가 없을 때 undefined가 되지 않으려면 기본값
        default :
            return state
    }
}

export default todoReducer