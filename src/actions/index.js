import { getCollectionData } from '../firebase/api'
import { useDispatch } from 'react-redux'

export const ADD_TODO = "ADD_TODO"
export const DELETE_TODO = "DELETE_TODO"
export const UPDATE_TODO = "UPDATE_TODO"
export const GET_TODO = "GET_TODO"
export const FETCH_TODO = "FETCH_TODO"

// actions creator functions
export const fetchTodo = (collection) =>  async (dispatch)  => {
    const data = await getCollectionData(collection)
    dispatch({
        type: FETCH_TODO,
        payload: data
    })
    return
}

export const addTodo = (obj) => {
    let { title, isDone } = obj
    return {
        type: ADD_TODO,
        payload: {
            title,
            isDone
        }
    }
}

export const updateTodo = (obj) => {
    let { title, isDone } = obj
    return {
        type: UPDATE_TODO,
        payload: {
            title,
            isDone
        }
    }
}

export const deleteTodo = (obj) => {
    let { id } = obj
    return {
        type: DELETE_TODO,
        payload: {
            id
        }
    }
}
