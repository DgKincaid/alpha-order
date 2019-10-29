const expect = require('chai').expect;
const assert = require('assert');

const alpha = require('./alpha-order');

describe('alpha', () => {

    describe('getAlphaOrder', () => {
        const test1 = ['bca', 'aaa', 'acb'];
        const test2 = ['bca', 'aaa', 'acb', 'eee', 'ece'];
        const test3 = ['bcaa', 'aaa', 'aaa', 'eeeeee', 'eeeeeeeeeea'];
        const test5 = ['$ca', 'a%a', '%ab', '%c'];

        const test4 = [];

        it('should be a function', () => {
            expect(alpha.getAlphaOrder).to.be.a('function');
        })

        it('should be empty', () => {
            let answer = alpha.getAlphaOrder(test4);

            expect(answer).to.be.empty;
        })

        it('should be equal - simple test', () => {
            let answer = alpha.getAlphaOrder(test1);

            expect(answer).to.deep.equal(['b', 'a', 'c']);
        })

        it('should be equal - swap elements', () => {
            let answer = alpha.getAlphaOrder(test2);

            expect(answer).to.deep.equal(['b', 'a', 'e', 'c']);
        })

        it('should not throw error - same word', () => {
            let answer = alpha.getAlphaOrder(test3);

            expect(answer).to.deep.equal(['b', 'a', 'e']);
        })

        it('should be equal - special character', () => {
            let answer = alpha.getAlphaOrder(test5);

            expect(answer).to.deep.equal(['$', 'a', '%', 'c']);
        })
    })
})