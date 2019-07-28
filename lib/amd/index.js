define(["require", "exports", "./url", "./query-params", "./url"], function (require, exports, url_1, query_params_1, url_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Url = url_1.Url;
    exports.QueryParam = query_params_1.QueryParam;
    const url = new url_2.Url("https://www.mysuperoriginalurl.dev?foo=bar&baz=420&qpa=p,a,r,a,m");
    console.log(url);
});
//# sourceMappingURL=index.js.map