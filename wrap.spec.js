const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap("", 10)).to.equal("");
  });
  it('Breaks a string into a new column at the column number value', () => {
      expect(wrap('Lorem ipsum dolor sit eu amet', 10)).to.equal('Lorem ipsu\nm dolor si\nt eu amet');
  });
  it('Does not split words into separate columns', () => {
      expect(wrap('Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.', 20)).to.equal('Lorem ipsum dolor\nsit eu amet, elit na\n, magna sem amet nulla\nvel purus ac ligula.')
  });
});
