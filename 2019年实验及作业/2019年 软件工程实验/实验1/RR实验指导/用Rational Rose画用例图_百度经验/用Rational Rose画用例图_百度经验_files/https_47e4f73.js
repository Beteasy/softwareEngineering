define("common-jquery:widget/js/logic/https/https.es",function(t,e){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t){if(!u.isString(t))throw new TypeError("fixUrl: first param must is string","https.es");var e=t.split("#");if(e[0]===location.href.split("#")[0])return e[1]?"#"+e[1]:"";if("https:"!==location.protocol)return t;var r=s.parse(location.href);t=/^\/\w/.test(t)?r.origin+t:t;var o=s.parse(t);if("jingyan.baidu.com"!==o.hostname&&"jingyan-shahe.baidu.com"!==o.hostname&&"jingyan-test.baidu.com"!==o.hostname)return t;var i=c.filter(function(t){return t.test(r.pathname)})[0];return i&&i.test(o.pathname)?(o.protocol=r.protocol,s.format(o)):(o.protocol=l.some(function(t){return t.test(o.pathname)})?"https:":"http:",s.format(o))}function i(){n["default"]("a").each(function(){var t=n["default"](this);t.attr("href")&&t.prop("href",o(t.prop("href")))})}Object.defineProperty(e,"__esModule",{value:!0});var a=t("common-jquery:widget/lib/jquery/jquery.js"),n=r(a),s=t("common-jquery:widget/js/util/url/url.es"),u=t("common-jquery:widget/js/util/type/type.es"),l=[/^\/$/,/^\/tag/,/^\/help/,/^\/orgList/,/^\/expertList/,/^\/shop/,/^\/magazine/,/^\/list/,/^\/fancier\/list/,/^\/task$/,/^\/patch$/,/^\/tasklist$/,/^\/usersign$/,/^\/user/,/^\/comment\/list/,/^\/season/,/^\/manual$/,/^\/manual\/list/,/^\/taskbook/],c=[/^\/article/,/^\/album/];e.autoFixAnchor=i,e.autoFixUrl=o});