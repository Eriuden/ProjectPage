import { combineReducers } from "redux"
import UserReducer from "./User.reducer"
import AllUsersReducer from "./AllUsers.reducer"
import ProjectReducer from "./Project.reducer"
import AllProjectsReducer from "./AllProjects.reducer"
import ErrorsReducer from "./Errors.reducer"

const reducers = combineReducers({
    UserReducer,
    AllUsersReducer,
    ProjectReducer,
    AllProjectsReducer,
    ErrorsReducer,
})

export default reducers