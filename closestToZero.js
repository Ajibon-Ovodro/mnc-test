const closestToZero = (ts) => {
  let closest = 0;
  if (ts.length === 0) {
    return 0;
  }
  ts.map((_, i) => {
    if (closest === 0) {
        closest = ts[i];
    } else if (ts[i] > 0 && ts[i] <= Math.abs(closest)) {
        closest = ts[i];
    } else if (ts[i] < 0 && -ts[i] < Math.abs(closest)) {
        closest = ts[i];
    }
  });
  return closest;
}

let ts = [7,-10, 13, 8, 4, -7.2,-12,-3.7,3.5,-9.6, 6.5,-1.7, -6.2,7]
console.log(closestToZero(ts))