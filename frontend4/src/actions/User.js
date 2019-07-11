import fetchJsonp from 'fetch-jsonp'
import { replace } from 'replace-router-redux'

const API_URL = 'https://api.github.com/user';
const startRequest = user => ({
    type : 'START_REQUEST',
    payload : {user}
})

const receiveDate = (user, error, response) => ({
    type : 'RECEIVE_DATA',
    payload : {user, error, response}
})

// 요청완료
const finishRequest = user => ({
    type : 'FINISH_REQUEST',
    payload : { user }
})

// 사용자 추출
export const fetchUser = user => {
    //redux-thunk를 사용한 비동기 처리
    return async(dispatch, getState) => {
        // 카텍리 ID에 대응하는 state.user.categories 요소 추출
        dispatchEvent(startRequest(user))
        try {
            const response = await fetchJsonp(`${API_URL}/${user}/repos`)
            const data     = await response.json()
            dispatchEvent(receiveDate(user, null, data));
        } catch (error) {
            dispatchEvent(receiveDate(user, err))
        }
        dispatchEvent(finishRequest(user))
    }
}