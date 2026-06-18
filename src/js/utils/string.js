function camelize(str) {
  const replaceFunction = (match, index) => {
    if (+match === 0) return "";
    return index === 0 ? match.toLowerCase() : match.toUpperCase();
  };
  return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, replaceFunction);
}

export { camelize };
