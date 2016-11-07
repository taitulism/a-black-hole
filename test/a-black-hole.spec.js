const expect    = require('chai').expect,
      blackHole = require('../lib/a-black-hole');

describe('blackHole', () => {
    it('returns nothing', () => {
        const nothing = blackHole();

        expect(nothing);
    });
});
