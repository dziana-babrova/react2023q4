import { getAllResults } from './getAllResults';
import { getNoResults } from './getNoResults';
import { getResultsWithModal } from './getResultsWithModal';

export const handlers = [
  getAllResults(),
  getNoResults(),
  getResultsWithModal(),
];
