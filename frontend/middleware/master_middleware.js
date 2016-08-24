import TodoMiddleware from './todo_middleware';
import { applyMiddleware } from 'redux';

const MasterMiddleware = applyMiddleware(TodoMiddleware);

export default MasterMiddleware;
