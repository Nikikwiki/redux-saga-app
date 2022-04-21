import { takeEvery, put, call, fork, all, race, spawn } from "@redux-saga/core/effects"; 
import { GET_NEWS, SET_LATEST_NEWS_ERROR, SET_POPULAR_NEWS_ERROR } from "../constants";
import { setLatestNews, setPopularNews } from "../actions/actionCreator";
import { getLatestNews, getPopularNews } from "../../api";

export function* handlePopularNews() {
    try {
        const { hits } = yield call(getPopularNews);
        yield put(setPopularNews(hits));
    } catch {
        yield put({type: SET_POPULAR_NEWS_ERROR, payload: 'Error fetch popular'})
    }
}

export function* handleLatestNews() {
    try {
        const { hits } = yield call(getLatestNews, 'react');
        yield put(setLatestNews(hits));
    } catch {
        yield put({type: SET_LATEST_NEWS_ERROR, payload: 'Error fetch latest'})
    }
}

export function* handleNews() {
    yield fork(handleLatestNews);
    yield fork(handlePopularNews);
}

export function* watchClickSaga() {
    yield takeEvery(GET_NEWS, handleNews);
}


export default function* rootSaga() {
    yield watchClickSaga();
}