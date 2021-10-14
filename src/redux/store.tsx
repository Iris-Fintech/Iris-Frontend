import { configureStore } from '@reduxjs/toolkit';
import modalShowReducer from './modalShowSlice';
import triedEagerReducer from './triedEager';

const store = configureStore({
    reducer: {
        modalShow: modalShowReducer,
        triedEager: triedEagerReducer,
    },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
