import { INCREMENT, DECREMENT } from '../actions/actionTypes';
//Saga effects
import { delay } from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';

export function* sayHello() {
    console.log('Hello world!');
}
function* increment() {
    console.log('this is increment saga');
}
export function* watchIncrement() {
    yield takeEvery(INCREMENT, increment);
}
function* decrement() {
    console.log('this is decrement saga');
}
export function* watchDecrement() {
    yield takeEvery(DECREMENT, decrement);
}