var expect = require("chai").expect;
var hex2bin_chunked = require("../src/hex2bin_chunked");

it("Invalid data", function (done) {
  var result = hex2bin_chunked.hex2bin_chunked("ffd");
  expect(result).to.equal(false);
  done();
});
