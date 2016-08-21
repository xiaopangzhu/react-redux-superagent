const reducer = require('../public/src/reducers/index');
const expect = require('chai').expect;

describe('reducer', function() {
  it('get', function() {
    const state = {value : ''};
    const action = {type:"GETTVALUE",value:'hello'};
    expect(reducer(state,action)).to.be.deep.equal({value:'hello'});
  });
});
