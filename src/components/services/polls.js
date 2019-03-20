import { post } from './request';

export const postPoll = poll => post('/polls', poll);
