const expect    = require('chai').expect;
const blackHole = require('../black-hole');

describe('blackHole', () => {
    it('returns nothing', () => {
        const returnValue = blackHole();
        expect(returnValue).to.equal(void 0);
    });
});
