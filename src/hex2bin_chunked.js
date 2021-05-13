var btoa = require("btoa");

function hex2bin_chunked(s, as_base_64) {
  const ret = [];
  var l = s.length;
  s += "";
  for (var i = 0; i < l; i += 2) {
    const c = parseInt(s.substr(i, 1), 16);
    const k = parseInt(s.substr(i + 1, 1), 16);

    if (isNaN(c) || isNaN(k)) return false;
    ret.push((c << 4) | k);
  }

  var toReturn = "";
  var chunk = 50000;
  var slice_start = 0,
    slice_end = 0;
  var max = ret.length;
  while (true) {
    slice_end = slice_start + chunk;
    slice_end = slice_end > max ? max : slice_end;
    toReturn += String.fromCharCode.apply(
      String,
      ret.slice(slice_start, slice_end)
    );
    if (slice_end >= max) {
      break;
    }
    slice_start = slice_end;
  }

  if (as_base_64 === true) return btoa(toReturn);
  return toReturn;
}

module.exports = { hex2bin_chunked };
