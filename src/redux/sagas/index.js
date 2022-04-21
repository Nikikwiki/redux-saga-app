import { take } from "@redux-saga/core/effects"; 
import { INCREASE_COUNT, DECREASE_COUNT } from "../constants";

export function* workerSaga() {}

export function* watchClickSaga() {
    yield take(INCREASE_COUNT)
    console.log(111);
    yield take(DECREASE_COUNT)
    console.log(2222);
}

export default function* rootSaga() {
    yield watchClickSaga();
}