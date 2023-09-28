const translate = require(google-translate-cn-api);

(async () => {
  // English => Chinese
 const res =  await translate('hello world', { to: 'zh-cn' })
console.log(res);
})();



