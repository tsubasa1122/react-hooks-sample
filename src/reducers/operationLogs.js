import {
  ADD_OPERATION_LOG,
  DELETE_ALL_OPERATION_LOGS
} from '../actions';

cosnt operationLogs = (state = [], action) => {
  switch (action.type) {
    case ADD_OPERATION_LOG:
      const operationLog = {
        action.description,
        action.operatedAt
      };
      return [operationLog, ...state]
    case DELETE_ALL_OPERATION_LOGS:
      return []
  default:
    return state
  }
}

export default operationLogs
