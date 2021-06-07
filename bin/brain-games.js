#!/usr/bin/env node
import { greeting, getUserName } from '../src/cli';
import { checkIsEven } from './brain-even';

console.log('Welcome to the Brain Games!');
const username = getUserName();
greeting(username);
checkIsEven(username);
