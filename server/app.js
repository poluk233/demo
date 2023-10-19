// import translate from 'google-translate-cn-api'
const  translate = require('google-translate-api');

( () => {
  // English => Chinese
 translate('hello world', { to: 'zh-cn' }).then(res=>{
  console.log(res);
 })
})();



