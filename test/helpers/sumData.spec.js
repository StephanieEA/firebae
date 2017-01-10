import { assert, expect } from 'chai';
import sumData from '../../lib/helpers/sumData';


describe('sumData', () => {
  it('is a fuction', () => {
    assert.isFunction(sumData);
  });

  it('should compute properties correctly', () => {
    const test = sumData(2, 4)
    expect(test).to.be.equal(6)
  })
});
