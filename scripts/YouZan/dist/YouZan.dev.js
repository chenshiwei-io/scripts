"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var $ = new Env('有赞');
var YouZan = ($.isNode() ? JSON.parse(process.env.YouZan) : $.getjson("YouZan")) || [];
var activityArr = [{
  "12063": "SKG会员商城"
}, {
  "99": "魅族商城Lite"
}, {
  "2162835": "PANDAER 会员商店"
}, {
  "3520910": "Achock官方商店"
}, {
  "2187565": "蜜蜂惊喜社"
}, {
  "2923467": "红之旗舰店"
}, {
  "2910869": "FicceCode菲诗蔻官方商城"
}, {
  "2386563": "HBN颜究所"
}, {
  "1597464": "Xbox 聚乐部"
}, {
  "3347128": "松鲜鲜调味品"
}, {
  "2299510": "燕京啤酒电商"
}, {
  "18415": "得宝Tempo"
}, {
  "18201": "小罐茶官方旗舰店"
}];
var notice = '';
!function _callee() {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(typeof $request != "undefined")) {
            _context.next = 5;
            break;
          }

          _context.next = 3;
          return regeneratorRuntime.awrap(getCookie());

        case 3:
          _context.next = 7;
          break;

        case 5:
          _context.next = 7;
          return regeneratorRuntime.awrap(main());

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
}()["catch"](function (e) {
  $.log(e);
})["finally"](function () {
  $.done({});
});

function main() {
  var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _loop, _iterator, _step;

  return regeneratorRuntime.async(function main$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _iteratorError = undefined;
          _context3.prev = 3;

          _loop = function _loop() {
            var item, checkinId, name, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, data, id, appId, kdtId, token, extraData, checkin;

            return regeneratorRuntime.async(function _loop$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    item = _step.value;
                    checkinId = item.checkinId;
                    name = checkinId;

                    if (activityArr.find(function (item) {
                      return checkinId in item;
                    })) {
                      name = activityArr.find(function (item) {
                        return checkinId in item;
                      })[checkinId];
                    }

                    console.log(name);
                    notice += "".concat(name, "\n");
                    _iteratorNormalCompletion2 = true;
                    _didIteratorError2 = false;
                    _iteratorError2 = undefined;
                    _context2.prev = 9;
                    _iterator2 = item.data[Symbol.iterator]();

                  case 11:
                    if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                      _context2.next = 26;
                      break;
                    }

                    data = _step2.value;
                    id = data.id, appId = data.appId, kdtId = data.kdtId, token = data.token, extraData = data.extraData;
                    console.log("\u7528\u6237\uFF1A".concat(id, "\u5F00\u59CB\u7B7E\u5230"));
                    _context2.next = 17;
                    return regeneratorRuntime.awrap(commonGet("checkinId=".concat(checkinId, "&app_id=").concat(appId, "&kdt_id=").concat(kdtId, "&access_token=").concat(token), extraData));

                  case 17:
                    checkin = _context2.sent;

                    if (!(checkin.code == -1)) {
                      _context2.next = 21;
                      break;
                    }

                    $.msg($.name, "".concat(name, " \u7528\u6237\uFF1A").concat(id), "token\u5DF2\u8FC7\u671F\uFF0C\u8BF7\u91CD\u65B0\u83B7\u53D6");
                    return _context2.abrupt("continue", 23);

                  case 21:
                    console.log("\u7B7E\u5230\u7ED3\u679C:".concat(checkin.msg, "\n"));
                    notice += "\u7528\u6237:".concat(id, "  \u7B7E\u5230\u7ED3\u679C:").concat(checkin.msg, "\n");

                  case 23:
                    _iteratorNormalCompletion2 = true;
                    _context2.next = 11;
                    break;

                  case 26:
                    _context2.next = 32;
                    break;

                  case 28:
                    _context2.prev = 28;
                    _context2.t0 = _context2["catch"](9);
                    _didIteratorError2 = true;
                    _iteratorError2 = _context2.t0;

                  case 32:
                    _context2.prev = 32;
                    _context2.prev = 33;

                    if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
                      _iterator2["return"]();
                    }

                  case 35:
                    _context2.prev = 35;

                    if (!_didIteratorError2) {
                      _context2.next = 38;
                      break;
                    }

                    throw _iteratorError2;

                  case 38:
                    return _context2.finish(35);

                  case 39:
                    return _context2.finish(32);

                  case 40:
                  case "end":
                    return _context2.stop();
                }
              }
            }, null, null, [[9, 28, 32, 40], [33,, 35, 39]]);
          };

          _iterator = YouZan[Symbol.iterator]();

        case 6:
          if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
            _context3.next = 12;
            break;
          }

          _context3.next = 9;
          return regeneratorRuntime.awrap(_loop());

        case 9:
          _iteratorNormalCompletion = true;
          _context3.next = 6;
          break;

        case 12:
          _context3.next = 18;
          break;

        case 14:
          _context3.prev = 14;
          _context3.t0 = _context3["catch"](3);
          _didIteratorError = true;
          _iteratorError = _context3.t0;

        case 18:
          _context3.prev = 18;
          _context3.prev = 19;

          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }

        case 21:
          _context3.prev = 21;

          if (!_didIteratorError) {
            _context3.next = 24;
            break;
          }

          throw _iteratorError;

        case 24:
          return _context3.finish(21);

        case 25:
          return _context3.finish(18);

        case 26:
          if (notice) {
            $.msg($.name, '', notice);
          }

        case 27:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[3, 14, 18, 26], [19,, 21, 25]]);
}

function getCookie() {
  var extraData, urlStr, result, paramsArr, i, len, arr, checkinId, appId, kdtId, token, body, id, newData, data, existingIndex, index;
  return regeneratorRuntime.async(function getCookie$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          extraData = $request.headers["extra-data"] || $request.headers["Extra-Data"];

          if (extraData) {
            _context4.next = 5;
            break;
          }

          console.log('获取额外数据失败', $request.headers);
          $.msg($.name, "".concat(checkinId), '获取额外数据失败');
          return _context4.abrupt("return");

        case 5:
          urlStr = $request.url.split('?')[1];
          result = {};
          paramsArr = urlStr.split('&');

          for (i = 0, len = paramsArr.length; i < len; i++) {
            arr = paramsArr[i].split('=');
            result[arr[0]] = arr[1];
          }

          checkinId = result.checkinId;
          appId = result.app_id;
          kdtId = result.kdt_id;
          token = result.access_token;
          body = JSON.parse(extraData);
          id = body.uuid;
          newData = {
            "checkinId": checkinId,
            "data": []
          };
          data = {
            "id": id,
            "appId": appId,
            "kdtId": kdtId,
            "token": token,
            "extraData": extraData
          };
          existingIndex = YouZan.findIndex(function (e) {
            return e.checkinId == newData.checkinId;
          });
          $.msg($.name, "".concat(checkinId), "\uD83C\uDF89\u7528\u6237".concat(data.id, "\u66F4\u65B0token\u6210\u529F!"));

          if (!(existingIndex !== -1)) {
            _context4.next = 38;
            break;
          }

          index = YouZan[existingIndex].data.findIndex(function (e) {
            return e.id == data.id;
          });

          if (!(index !== -1)) {
            _context4.next = 33;
            break;
          }

          if (!(YouZan[existingIndex].data[index].token == data.token)) {
            _context4.next = 28;
            break;
          }

          console.log("".concat(checkinId, " \u91CD\u590D\u83B7\u53D6 cookie "), JSON.stringify(data));
          $.msg($.name, "".concat(checkinId), "\uD83C\uDF89\u7528\u6237 ".concat(data.id, " \u91CD\u590D\u83B7\u53D6 cookie!"));
          return _context4.abrupt("return");

        case 28:
          YouZan[existingIndex].data[index] = data;
          console.log(JSON.stringify(data));
          $.msg($.name, "".concat(checkinId), "\uD83C\uDF89\u7528\u6237".concat(data.id, "\u66F4\u65B0token\u6210\u529F!"));

        case 31:
          _context4.next = 36;
          break;

        case 33:
          YouZan[existingIndex].data.push(data);
          console.log(JSON.stringify(data));
          $.msg($.name, "".concat(checkinId), "\uD83C\uDF89\u65B0\u589E\u7528\u6237".concat(data.id, "\u6210\u529F!"));

        case 36:
          _context4.next = 44;
          break;

        case 38:
          console.log("发现新的签到活动");
          $.msg($.name, "\uD83C\uDF89\u53D1\u73B0\u65B0\u7684\u7B7E\u5230\u6D3B\u52A8!");
          YouZan.push(newData);
          newData.data.push(data);
          console.log(JSON.stringify(data));
          $.msg($.name, "".concat(checkinId), "\uD83C\uDF89\u65B0\u589E\u7528\u6237".concat(data.id, "\u6210\u529F!"));

        case 44:
          $.setjson(YouZan, "YouZan");

        case 45:
        case "end":
          return _context4.stop();
      }
    }
  });
}

function commonGet(url, extraData) {
  return regeneratorRuntime.async(function commonGet$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          return _context6.abrupt("return", new Promise(function (resolve) {
            var options = {
              url: "https://h5.youzan.com/wscump/checkin/checkinV2.json?".concat(url),
              headers: {
                'User-Agent': 'Mozilla/5.0 (Linux; Android 10; 16th Build/QKQ1.191222.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/116.0.0.0 Mobile Safari/537.36 XWEB/1160083 MMWEBSDK/20231202 MMWEBID/2933 MicroMessenger/8.0.47.2560(0x28002F50) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android',
                'Content-Type': 'application/json',
                'Accept-Encoding': 'gzip,compress,br,deflate',
                'Extra-Data': extraData
              }
            };
            $.get(options, function _callee2(err, resp, data) {
              return regeneratorRuntime.async(function _callee2$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      try {
                        if (err) {
                          console.log("".concat(JSON.stringify(err)));
                          console.log("".concat($.name, " API\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u8DEF\u91CD\u8BD5"));
                        } else {
                          resolve(JSON.parse(data));
                        }
                      } catch (e) {
                        $.logErr(e, resp);
                      } finally {
                        resolve();
                      }

                    case 1:
                    case "end":
                      return _context5.stop();
                  }
                }
              });
            });
          }));

        case 1:
        case "end":
          return _context6.stop();
      }
    }
  });
} // prettier-ignore


function Env(t, e) {
  var s =
  /*#__PURE__*/
  function () {
    function s(t) {
      _classCallCheck(this, s);

      this.env = t;
    }

    _createClass(s, [{
      key: "send",
      value: function send(t) {
        var _this = this;

        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "GET";
        t = "string" == typeof t ? {
          url: t
        } : t;
        var s = this.get;
        return "POST" === e && (s = this.post), new Promise(function (e, a) {
          s.call(_this, t, function (t, s, r) {
            t ? a(t) : e(s);
          });
        });
      }
    }, {
      key: "get",
      value: function get(t) {
        return this.send.call(this.env, t);
      }
    }, {
      key: "post",
      value: function post(t) {
        return this.send.call(this.env, t, "POST");
      }
    }]);

    return s;
  }();

  return new (
  /*#__PURE__*/
  function () {
    function _class(t, e) {
      _classCallCheck(this, _class);

      this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.encoding = "utf-8", this.startTime = new Date().getTime(), Object.assign(this, e), this.log("", "\uD83D\uDD14".concat(this.name, ", \u5F00\u59CB!"));
    }

    _createClass(_class, [{
      key: "getEnv",
      value: function getEnv() {
        return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : void 0;
      }
    }, {
      key: "isNode",
      value: function isNode() {
        return "Node.js" === this.getEnv();
      }
    }, {
      key: "isQuanX",
      value: function isQuanX() {
        return "Quantumult X" === this.getEnv();
      }
    }, {
      key: "isSurge",
      value: function isSurge() {
        return "Surge" === this.getEnv();
      }
    }, {
      key: "isLoon",
      value: function isLoon() {
        return "Loon" === this.getEnv();
      }
    }, {
      key: "isShadowrocket",
      value: function isShadowrocket() {
        return "Shadowrocket" === this.getEnv();
      }
    }, {
      key: "isStash",
      value: function isStash() {
        return "Stash" === this.getEnv();
      }
    }, {
      key: "toObj",
      value: function toObj(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        try {
          return JSON.parse(t);
        } catch (_unused) {
          return e;
        }
      }
    }, {
      key: "toStr",
      value: function toStr(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        try {
          return JSON.stringify(t);
        } catch (_unused2) {
          return e;
        }
      }
    }, {
      key: "getjson",
      value: function getjson(t, e) {
        var s = e;
        var a = this.getdata(t);
        if (a) try {
          s = JSON.parse(this.getdata(t));
        } catch (_unused3) {}
        return s;
      }
    }, {
      key: "setjson",
      value: function setjson(t, e) {
        try {
          return this.setdata(JSON.stringify(t), e);
        } catch (_unused4) {
          return !1;
        }
      }
    }, {
      key: "getScript",
      value: function getScript(t) {
        var _this2 = this;

        return new Promise(function (e) {
          _this2.get({
            url: t
          }, function (t, s, a) {
            return e(a);
          });
        });
      }
    }, {
      key: "runScript",
      value: function runScript(t, e) {
        var _this3 = this;

        return new Promise(function (s) {
          var a = _this3.getdata("@chavy_boxjs_userCfgs.httpapi");

          a = a ? a.replace(/\n/g, "").trim() : a;

          var r = _this3.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");

          r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;

          var _a$split = a.split("@"),
              _a$split2 = _slicedToArray(_a$split, 2),
              i = _a$split2[0],
              o = _a$split2[1],
              n = {
            url: "http://".concat(o, "/v1/scripting/evaluate"),
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: r
            },
            headers: {
              "X-Key": i,
              Accept: "*/*"
            },
            timeout: r
          };

          _this3.post(n, function (t, e, a) {
            return s(a);
          });
        })["catch"](function (t) {
          return _this3.logErr(t);
        });
      }
    }, {
      key: "loaddata",
      value: function loaddata() {
        if (!this.isNode()) return {};
        {
          this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");

          var _t = this.path.resolve(this.dataFile),
              _e2 = this.path.resolve(process.cwd(), this.dataFile),
              _s2 = this.fs.existsSync(_t),
              a = !_s2 && this.fs.existsSync(_e2);

          if (!_s2 && !a) return {};
          {
            var _a = _s2 ? _t : _e2;

            try {
              return JSON.parse(this.fs.readFileSync(_a));
            } catch (t) {
              return {};
            }
          }
        }
      }
    }, {
      key: "writedata",
      value: function writedata() {
        if (this.isNode()) {
          this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");

          var _t2 = this.path.resolve(this.dataFile),
              _e3 = this.path.resolve(process.cwd(), this.dataFile),
              _s3 = this.fs.existsSync(_t2),
              a = !_s3 && this.fs.existsSync(_e3),
              r = JSON.stringify(this.data);

          _s3 ? this.fs.writeFileSync(_t2, r) : a ? this.fs.writeFileSync(_e3, r) : this.fs.writeFileSync(_t2, r);
        }
      }
    }, {
      key: "lodash_get",
      value: function lodash_get(t, e, s) {
        var a = e.replace(/\[(\d+)\]/g, ".$1").split(".");
        var r = t;
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = a[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var _t3 = _step3.value;
            if (r = Object(r)[_t3], void 0 === r) return s;
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
              _iterator3["return"]();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }

        return r;
      }
    }, {
      key: "lodash_set",
      value: function lodash_set(t, e, s) {
        return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce(function (t, s, a) {
          return Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[a + 1]) >> 0 == +e[a + 1] ? [] : {};
        }, t)[e[e.length - 1]] = s, t);
      }
    }, {
      key: "getdata",
      value: function getdata(t) {
        var e = this.getval(t);

        if (/^@/.test(t)) {
          var _$exec = /^@(.*?)\.(.*?)$/.exec(t),
              _$exec2 = _slicedToArray(_$exec, 3),
              _s4 = _$exec2[1],
              a = _$exec2[2],
              r = _s4 ? this.getval(_s4) : "";

          if (r) try {
            var _t4 = JSON.parse(r);

            e = _t4 ? this.lodash_get(_t4, a, "") : e;
          } catch (t) {
            e = "";
          }
        }

        return e;
      }
    }, {
      key: "setdata",
      value: function setdata(t, e) {
        var s = !1;

        if (/^@/.test(e)) {
          var _$exec3 = /^@(.*?)\.(.*?)$/.exec(e),
              _$exec4 = _slicedToArray(_$exec3, 3),
              a = _$exec4[1],
              r = _$exec4[2],
              i = this.getval(a),
              o = a ? "null" === i ? null : i || "{}" : "{}";

          try {
            var _e4 = JSON.parse(o);

            this.lodash_set(_e4, r, t), s = this.setval(JSON.stringify(_e4), a);
          } catch (e) {
            var _i2 = {};
            this.lodash_set(_i2, r, t), s = this.setval(JSON.stringify(_i2), a);
          }
        } else s = this.setval(t, e);

        return s;
      }
    }, {
      key: "getval",
      value: function getval(t) {
        switch (this.getEnv()) {
          case "Surge":
          case "Loon":
          case "Stash":
          case "Shadowrocket":
            return $persistentStore.read(t);

          case "Quantumult X":
            return $prefs.valueForKey(t);

          case "Node.js":
            return this.data = this.loaddata(), this.data[t];

          default:
            return this.data && this.data[t] || null;
        }
      }
    }, {
      key: "setval",
      value: function setval(t, e) {
        switch (this.getEnv()) {
          case "Surge":
          case "Loon":
          case "Stash":
          case "Shadowrocket":
            return $persistentStore.write(t, e);

          case "Quantumult X":
            return $prefs.setValueForKey(t, e);

          case "Node.js":
            return this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0;

          default:
            return this.data && this.data[e] || null;
        }
      }
    }, {
      key: "initGotEnv",
      value: function initGotEnv(t) {
        this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar(), t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar));
      }
    }, {
      key: "get",
      value: function get(t) {
        var _this4 = this;

        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

        switch (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"], delete t.headers["content-type"], delete t.headers["content-length"]), t.params && (t.url += "?" + this.queryStr(t.params)), this.getEnv()) {
          case "Surge":
          case "Loon":
          case "Stash":
          case "Shadowrocket":
          default:
            this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
              "X-Surge-Skip-Scripting": !1
            })), $httpClient.get(t, function (t, s, a) {
              !t && s && (s.body = a, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode), e(t, s, a);
            });
            break;

          case "Quantumult X":
            this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
              hints: !1
            })), $task.fetch(t).then(function (t) {
              var s = t.statusCode,
                  a = t.statusCode,
                  r = t.headers,
                  i = t.body,
                  o = t.bodyBytes;
              e(null, {
                status: s,
                statusCode: a,
                headers: r,
                body: i,
                bodyBytes: o
              }, i, o);
            }, function (t) {
              return e(t && t.error || "UndefinedError");
            });
            break;

          case "Node.js":
            var _s5 = require("iconv-lite");

            this.initGotEnv(t), this.got(t).on("redirect", function (t, e) {
              try {
                if (t.headers["set-cookie"]) {
                  var _s6 = t.headers["set-cookie"].map(_this4.cktough.Cookie.parse).toString();

                  _s6 && _this4.ckjar.setCookieSync(_s6, null), e.cookieJar = _this4.ckjar;
                }
              } catch (t) {
                _this4.logErr(t);
              }
            }).then(function (t) {
              var a = t.statusCode,
                  r = t.statusCode,
                  i = t.headers,
                  o = t.rawBody,
                  n = _s5.decode(o, _this4.encoding);

              e(null, {
                status: a,
                statusCode: r,
                headers: i,
                rawBody: o,
                body: n
              }, n);
            }, function (t) {
              var a = t.message,
                  r = t.response;
              e(a, r, r && _s5.decode(r.rawBody, _this4.encoding));
            });
        }
      }
    }, {
      key: "post",
      value: function post(t) {
        var _this5 = this;

        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
        var s = t.method ? t.method.toLocaleLowerCase() : "post";

        switch (t.body && t.headers && !t.headers["Content-Type"] && !t.headers["content-type"] && (t.headers["content-type"] = "application/x-www-form-urlencoded"), t.headers && (delete t.headers["Content-Length"], delete t.headers["content-length"]), this.getEnv()) {
          case "Surge":
          case "Loon":
          case "Stash":
          case "Shadowrocket":
          default:
            this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
              "X-Surge-Skip-Scripting": !1
            })), $httpClient[s](t, function (t, s, a) {
              !t && s && (s.body = a, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode), e(t, s, a);
            });
            break;

          case "Quantumult X":
            t.method = s, this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
              hints: !1
            })), $task.fetch(t).then(function (t) {
              var s = t.statusCode,
                  a = t.statusCode,
                  r = t.headers,
                  i = t.body,
                  o = t.bodyBytes;
              e(null, {
                status: s,
                statusCode: a,
                headers: r,
                body: i,
                bodyBytes: o
              }, i, o);
            }, function (t) {
              return e(t && t.error || "UndefinedError");
            });
            break;

          case "Node.js":
            var a = require("iconv-lite");

            this.initGotEnv(t);

            var r = t.url,
                i = _objectWithoutProperties(t, ["url"]);

            this.got[s](r, i).then(function (t) {
              var s = t.statusCode,
                  r = t.statusCode,
                  i = t.headers,
                  o = t.rawBody,
                  n = a.decode(o, _this5.encoding);
              e(null, {
                status: s,
                statusCode: r,
                headers: i,
                rawBody: o,
                body: n
              }, n);
            }, function (t) {
              var s = t.message,
                  r = t.response;
              e(s, r, r && a.decode(r.rawBody, _this5.encoding));
            });
        }
      }
    }, {
      key: "time",
      value: function time(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var s = e ? new Date(e) : new Date();
        var a = {
          "M+": s.getMonth() + 1,
          "d+": s.getDate(),
          "H+": s.getHours(),
          "m+": s.getMinutes(),
          "s+": s.getSeconds(),
          "q+": Math.floor((s.getMonth() + 3) / 3),
          S: s.getMilliseconds()
        };
        /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));

        for (var _e5 in a) {
          new RegExp("(" + _e5 + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? a[_e5] : ("00" + a[_e5]).substr(("" + a[_e5]).length)));
        }

        return t;
      }
    }, {
      key: "queryStr",
      value: function queryStr(t) {
        var e = "";

        for (var _s7 in t) {
          var a = t[_s7];
          null != a && "" !== a && ("object" == _typeof(a) && (a = JSON.stringify(a)), e += "".concat(_s7, "=").concat(a, "&"));
        }

        return e = e.substring(0, e.length - 1), e;
      }
    }, {
      key: "msg",
      value: function msg() {
        var _this6 = this;

        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : t;
        var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
        var a = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
        var r = arguments.length > 3 ? arguments[3] : undefined;

        var i = function i(t) {
          switch (_typeof(t)) {
            case void 0:
              return t;

            case "string":
              switch (_this6.getEnv()) {
                case "Surge":
                case "Stash":
                default:
                  return {
                    url: t
                  };

                case "Loon":
                case "Shadowrocket":
                  return t;

                case "Quantumult X":
                  return {
                    "open-url": t
                  };

                case "Node.js":
                  return;
              }

            case "object":
              switch (_this6.getEnv()) {
                case "Surge":
                case "Stash":
                case "Shadowrocket":
                default:
                  {
                    var _e6 = t.url || t.openUrl || t["open-url"];

                    return {
                      url: _e6
                    };
                  }

                case "Loon":
                  {
                    var _e7 = t.openUrl || t.url || t["open-url"],
                        _s8 = t.mediaUrl || t["media-url"];

                    return {
                      openUrl: _e7,
                      mediaUrl: _s8
                    };
                  }

                case "Quantumult X":
                  {
                    var _e8 = t["open-url"] || t.url || t.openUrl,
                        _s9 = t["media-url"] || t.mediaUrl,
                        _a2 = t["update-pasteboard"] || t.updatePasteboard;

                    return {
                      "open-url": _e8,
                      "media-url": _s9,
                      "update-pasteboard": _a2
                    };
                  }

                case "Node.js":
                  return;
              }

            default:
              return;
          }
        };

        if (!this.isMute) switch (this.getEnv()) {
          case "Surge":
          case "Loon":
          case "Stash":
          case "Shadowrocket":
          default:
            $notification.post(e, s, a, i(r));
            break;

          case "Quantumult X":
            $notify(e, s, a, i(r));
            break;

          case "Node.js":
        }

        if (!this.isMuteLog) {
          var _t5 = ["", "==============📣系统通知📣=============="];
          _t5.push(e), s && _t5.push(s), a && _t5.push(a), console.log(_t5.join("\n")), this.logs = this.logs.concat(_t5);
        }
      }
    }, {
      key: "log",
      value: function log() {
        for (var _len = arguments.length, t = new Array(_len), _key = 0; _key < _len; _key++) {
          t[_key] = arguments[_key];
        }

        t.length > 0 && (this.logs = [].concat(_toConsumableArray(this.logs), t)), console.log(t.join(this.logSeparator));
      }
    }, {
      key: "logErr",
      value: function logErr(t, e) {
        switch (this.getEnv()) {
          case "Surge":
          case "Loon":
          case "Stash":
          case "Shadowrocket":
          case "Quantumult X":
          default:
            this.log("", "\u2757\uFE0F".concat(this.name, ", \u9519\u8BEF!"), t);
            break;

          case "Node.js":
            this.log("", "\u2757\uFE0F".concat(this.name, ", \u9519\u8BEF!"), t.stack);
        }
      }
    }, {
      key: "wait",
      value: function wait(t) {
        return new Promise(function (e) {
          return setTimeout(e, t);
        });
      }
    }, {
      key: "done",
      value: function done() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var e = new Date().getTime(),
            s = (e - this.startTime) / 1e3;

        switch (this.log("", "\uD83D\uDD14".concat(this.name, ", \u7ED3\u675F! \uD83D\uDD5B ").concat(s, " \u79D2")), this.log(), this.getEnv()) {
          case "Surge":
          case "Loon":
          case "Stash":
          case "Shadowrocket":
          case "Quantumult X":
          default:
            $done(t);
            break;

          case "Node.js":
            process.exit(1);
        }
      }
    }]);

    return _class;
  }())(t, e);
}