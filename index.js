// import { alpha } from './alpha-order';

const alpha = require('./alpha-order');

function main() {
    const test1 = ['bca', 'aaa', 'acb'];
    const test2 = ['bca', 'aaa', 'acb', 'eee', 'ece']
    const test3 = ['bcaa', 'aaa', 'acb', 'eee', 'ece']
    const test4 = [];
    
    console.log(alpha.getAlphaOrder(test1));
}

main();