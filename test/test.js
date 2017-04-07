var chai = require('chai');
var assert = chai.assert;
var myApp = require('../app/app.js');

describe("My preparation function", function() {
  it("should return 6 for 3 +3 ", function() {
    assert(myApp.sum(3, 3) == 6);

  })

  it("should return 8 for 5 + 3", function() {
  	assert(myApp.sum(5, 3)==8);

})
  it("should return 2 for 1,2,3", function() {
  	assert(myApp.average(1,2,3)==2);
  })
  it("should return 120 for 5", function() {
  	assert(myApp.factorial(5)==120);
  })
  it("should return expected a number for invalid input" , function() {
  	assert(myApp.factorial("andela")=="expected a number")
  })
})
