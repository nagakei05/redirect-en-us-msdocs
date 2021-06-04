// ==UserScript==
// @name         redirect en-us MS Docs
// @namespace    none
// @version      0.1
// @description  try to take over the world!
// @author       shnarita
// @match        https://docs.microsoft.com/*
// @grant        none
// @updateURL    https://github.com/nagakei05/redirect-en-us-msdocs/raw/master/main.user.js
// @downloadURL  https://github.com/nagakei05/redirect-en-us-msdocs/raw/master/main.user.js
// @supportURL   https://github.com/nagakei05/redirect-en-us-msdocs/
// ==/UserScript==

(function () {

  const msDocsUrlReg = new RegExp('https://docs.microsoft.com/\\w{2}-\\w{2}/(.*)', 'ig');
  const msDocsJAJPUrlReg = new RegExp('https://docs.microsoft.com/ja-jp/(.*)', 'ig');
  const msDocsENUSUrlReg = new RegExp('https://docs.microsoft.com/en-us/(.*)', 'ig');

  document.onkeydown = function (e) {
    if (e.keyCode == 220) {
      // "\" キーを押下で en-us/ja-jp 間を切り替え
      const currentUrl = location.href; // 現在のページのURLを取得
      const nextpage = currentUrl; // nextpage 初期化
      if (currentUrl.match(msDocsUrlReg)) {
        if (currentUrl.match(msDocsJAJPUrlReg)) {
          nextPage = currentUrl.replace(msDocsUrlReg, "https://docs.microsoft.com/en-us/$1"); // マッチさせた文字列以外を置換
        } else if (currentUrl.match(msDocsENUSUrlReg)) {
          nextPage = currentUrl.replace(msDocsUrlReg, "https://docs.microsoft.com/ja-jp/$1"); // マッチさせた文字列以外を置換
        } else {
          nextPage = currentUrl.replace(msDocsUrlReg, "https://docs.microsoft.com/en-us/$1"); // マッチさせた文字列以外を置換
        }
        console.log({"nextPage" : nextPage});
        location.href = nextPage;
      }
    }
  };

})();
