function allProperties(obj) {
  var props = [];
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      props.push(prop);
    }
  }
  return props;
}

console.log(allProperties(Array.prototype));
