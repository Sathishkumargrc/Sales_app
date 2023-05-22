import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  parameters: '',
  user : '',
  projects: '',
  projectID:'',
  projectUsers: '',
  userID: '',
  response : '',
};

const userSlicer = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    setUser: (state, action) => ({...state, parameters: action.payload}),
    setProjects: (state, action) => ({...state, projects: action.payload}),
    setProjectUsers: (state, action) => ({
      ...state,
      projectUsers: action.payload,
    }),
    setResponse: (state,action)=>({...state,projectID:action.payload}),
    setProjectID:(state,action)=>({...state,projectID:action.payload}),
    setUserID: (state, action) => ({...state, userID: action.payload}),
  },
});
export default userSlicer.reducer;

export const {
  setUser,
  setProjects,
  setProjectUsers,
  setUserID,
  setProjectID,
  setResponse,
} = userSlicer.actions;
