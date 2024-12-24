import { configureStore } from "@reduxjs/toolkit";
import { songsReducer, addSong, removeSong } from "./slices/songsSlice";
import { moviesReducer, addMovie, removeMovie } from "./slices/moviesSlice";
import { reset } from "./actions";
// export const reset = createAction("app/reset");

// const moviesSlice = createSlice({
//   name: "movie",
//   initialState: [],
//   reducers: {
//     addMovie(state, action) {
//       state.push(action.payload);
//     },
//     removeMovie(state, action) {
//       //
//       const index = state.indexOf(action.payload);
//       state.splice(index,1);
//     },
//   },
//   extraReducers(builder){
//     builder.addCase(reset, (state, action)=>{
//       return [];
//     });
//   },
// });


// const songsSlice = createSlice({
//   name: "song",
//   initialState: [],
//   reducers: {
//     addSong(state, action) {
//       state.push(action.payload);
//     },
//     removeSong(state, action) {
//       //
//       const index = state.indexOf(action.payload);
//       state.splice(index,1);
//     },
//   },
//   extraReducers(builder){
//     builder.addCase(reset, (state, action)=>{
//       return [];
//     });
//   },
// });

// const store = configureStore({
//   reducer: {
//     // songs: songsSlice.reducer,
//     songs: songsSlice.reducer,
//     movies: moviesSlice.reducer
//   },
// });

// // console.log(store);
// const startingState = store.getState();
// console.log(startingState);

// // song state update using pattern
// store.dispatch({
//   type: "song/addSong",
//   payload: "New Song!!!",
// });

// // song state update using action creator
// store.dispatch(
//     songsSlice.actions.addSong("Another New Song!!")
// );


// const finalState = store.getState();
// console.log(finalState);
// export {store};
// export const {addSong, removeSong} = songsSlice.actions;
// export const {addMovie, removeMovie} = moviesSlice.actions;

const store = configureStore({
  reducer: {
    songs: songsReducer,
    movies: moviesReducer,
  },
});


export {store, addSong, removeSong, addMovie, removeMovie, reset};