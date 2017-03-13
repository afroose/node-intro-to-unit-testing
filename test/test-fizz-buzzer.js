const should = require('chai').should();

const fizzbuzzer = require('../fizzbuzzer');


// unit tests for our `adder` function
describe('fizzbuzzer', function() {

  // test the normal case
  it('should be divisible by 15 - return fizz-buzz', function() {
    [15, 30, 45].forEach(function(input) {
      fizzbuzzer(input).should.equal('fizz-buzz');
    });
  });

  it('should return the original number in not divisible by 3 or 5', function() {
    [7, 13, 22].forEach(function(input) {
      fizzbuzzer(input).should.equal(input);
    });
  });

  it('should tell if not a number', function() {
    // range of bad inputs where not both are numbers
    const badInputs = ['a', 'b'];
    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      (function() {
          fizzbuzzer(input)
      }).should.throw(Error);
    });
  });
});