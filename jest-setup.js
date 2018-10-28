import 'jest-dom/extend-expect';
import nodeFetch from 'node-fetch';

global.fetch = nodeFetch;
