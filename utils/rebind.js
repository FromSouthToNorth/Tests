function utiRebind(target, source) {
  let i = 1, n = arguments.length, method;
  while (++i < n) {
    target[method = arguments[i]] = d3_rebind(target, source, source[method]);
  }
  return target;
}

function d3_rebind(target, source, method) {
  return function() {
    const value = method.apply(source, arguments);
    return value === source ? target : value;
  };
}
