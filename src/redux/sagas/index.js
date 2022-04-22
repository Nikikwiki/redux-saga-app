import { takeEvery, put, call, fork, all, race, spawn, takeLatest } from "@redux-saga/core/effects"; 
import { SET_LATEST_NEWS_ERROR, SET_POPULAR_NEWS_ERROR, GET_LATEST_NEWS, GET_POPULAR_NEWS, SET_LOADING_DATA } from "../constants";
import { setLatestNews, setPopularNews } from "../actions/actionCreator";
import { getLatestNews, getPopularNews } from "../../api";

export function* handlePopularNews() {
    yield put({type: SET_LOADING_DATA, payload: true });
    try {
        const { hits } = yield call(getPopularNews);
        yield put(setPopularNews(hits));
    } catch {
        yield put({type: SET_POPULAR_NEWS_ERROR, payload: 'Error fetch popular'})
    }
    yield put({type: SET_LOADING_DATA, payload: false });
}

export function* handleLatestNews() {
    yield put({type: SET_LOADING_DATA, payload: true });
    try {
        const { hits } = yield call(getLatestNews, 'react');
        yield put(setLatestNews(hits));
    } catch {
        yield put({type: SET_LATEST_NEWS_ERROR, payload: 'Error fetch latest'})
    }
    yield put({type: SET_LOADING_DATA, payload: false });
}

export function* watchPopularSaga() {
    yield takeLatest(GET_POPULAR_NEWS, handlePopularNews);
}

export function* watchLatestSaga() {
    yield takeLatest(GET_LATEST_NEWS, handleLatestNews);
}

export default function* rootSaga() {
    yield all([
        fork(watchPopularSaga),
        fork(watchLatestSaga)
    ])
}