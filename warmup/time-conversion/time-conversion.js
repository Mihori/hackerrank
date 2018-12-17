function timeConversion(s) {
  if (s.indexOf('AM') !== -1) {
    if (s.slice(0, 2) === '12') {
      let hour = '00';
        return hour + s.slice(2, -2);
    } else {
      return s.slice(0, -2);
      }
  } else if (s.slice(0, 2) === '12') {
    return s.slice(0, -2);
  } else {
    let hour = 12 + parseInt(s.slice(0, 2));
    return hour.toString() + s.slice(2, -2);
  }
}