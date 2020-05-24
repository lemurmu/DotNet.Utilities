
//创建url的authkey
function getAuthkey(url)
{
  var timestamp = new Date().getTime();
  var rand = 0;
  var uid = 0;
  var auth_str = url + '-' + timestamp + '-' + rand + '-' + uid + '-' + privatekey;
  var auth_key = timestamp + '-' + rand + '-' + uid + '-'+ hex_md5(auth_str);
  return auth_key;
}
