var expect = require("chai").expect;
var hex2bin_chunked = require("../src/hex2bin_chunked");

it("Return binary", function (done) {
  var result = hex2bin_chunked.hex2bin_chunked("ffd8");
  expect(result).to.equal("ÿØ");
  done();
});

it("Return hex", function (done) {
  var result = hex2bin_chunked.hex2bin_chunked("ffd8", true);
  expect(result).to.equal("/9g=");
  done();
});
