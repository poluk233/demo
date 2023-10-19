const formatPath = (path) => {
  // 若是数组，则直接返回
  if (Array.isArray(path)) return path;
  // 若有 '[',']'，则替换成将 '[' 替换成 '.',去掉 ']'
  return path.replace(/\[/g, ".").replace(/\]/g, "").split(".");
};

export const $set = (object, path, value) => {
  if (typeof object !== "object") return object;
  formatPath(path).reduce((p, c, i, _) => {
    if (i === _.length - 1) {
      p[c] = value;
      return null;
    } else if (c in p) {
      return p[c];
    } else {
      o[k] = /^[0-9]{1,}$/.test(_[i + 1]) ? [] : {};
      return o[k];
    }
  }, object);
  return object;
};
export const $get = (object, path, defaultValue) => {
  if (typeof object !== "object") return defaultValue;
  return formatPath(path).reduce((p, c) => (p || {})[c], object) || defaultValue;
};


