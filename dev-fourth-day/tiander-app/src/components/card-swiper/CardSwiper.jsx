var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === "function" &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while ((g && ((g = 0), op[0] && (_ = 0)), _))
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y["return"]
                  : op[0]
                    ? y["throw"] || ((t = y["return"]) && t.call(y), 0)
                    : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export var CardSwiper = function (props) {
  var _a;
  var target = useRef(null);
  var x = useRef(0);
  var y = useRef(0);
  var mid = useRef(0);
  var angleMax = 30;
  var getRotateOrigin = function (mx) {
    return __awaiter(void 0, void 0, void 0, function () {
      var result;
      return __generator(this, function (_a) {
        result = [];
        if (target.current !== null) {
          if (y.current < mid.current) {
            if (x.current > mx) {
              result = [0, 100, -1];
            } else {
              result = [100, 100, 1];
            }
          } else {
            if (x.current > mx) {
              result = [0, 0, 1];
            } else {
              result = [100, 0, -1];
            }
          }
          return [2, result];
        } else {
          return [2, undefined];
        }
        return [2];
      });
    });
  };
  var selectDirection = function (mx, my) {
    return __awaiter(void 0, void 0, void 0, function () {
      var _a, _b, _c, _d;
      return __generator(this, function (_e) {
        if (
          mx - x.current >
          ((_a = props.detectingSize) !== null && _a !== void 0 ? _a : 400)
        ) {
          return [2, "right"];
        } else if (
          mx - x.current <
          -((_b = props.detectingSize) !== null && _b !== void 0 ? _b : 400)
        ) {
          return [2, "left"];
        } else if (
          my - y.current <
          -((_c = props.detectingSize) !== null && _c !== void 0 ? _c : 400)
        ) {
          return [2, "up"];
        } else if (
          my - y.current >
          ((_d = props.detectingSize) !== null && _d !== void 0 ? _d : 400)
        ) {
          return [2, "down"];
        }
        return [2, "none"];
      });
    });
  };
  var onStart = function (mx, my) {
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_a) {
        x.current = mx;
        y.current = my;
        return [2];
      });
    });
  };
  var onMove = function (mx, my) {
    return __awaiter(void 0, void 0, void 0, function () {
      var origin, angle;
      var _a;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            if (target.current === null) return [2];
            return [4, getRotateOrigin(mx)];
          case 1:
            origin = _b.sent();
            angle =
              (Math.abs(mx - x.current) *
                angleMax *
                (1 - Math.abs(my - mid.current) / mid.current / 2)) /
              ((_a = target.current) === null || _a === void 0
                ? void 0
                : _a.offsetWidth);
            if (origin !== undefined) {
              gsap.to(target.current, {
                transformOrigin: ""
                  .concat(origin[0], "% ")
                  .concat(origin[1], "%"),
                x: (mx - x.current) * 0.2,
                y: (my - y.current) * 0.8,
                rotation: origin[2] * angle,
                duration: 0.1,
              });
            }
            return [2];
        }
      });
    });
  };
  var onEnd = function (mx, my) {
    return __awaiter(void 0, void 0, void 0, function () {
      var mid, angle, d, tl;
      var _a, _b, _c, _d, _e;
      return __generator(this, function (_f) {
        switch (_f.label) {
          case 0:
            if (target.current === null) return [2];
            mid =
              ((_a = target.current) === null || _a === void 0
                ? void 0
                : _a.offsetHeight) / 2;
            angle =
              (Math.abs(mx - x.current) *
                angleMax *
                (1 - Math.abs(my - mid) / mid)) /
              ((_b = target.current) === null || _b === void 0
                ? void 0
                : _b.offsetWidth);
            return [4, selectDirection(mx, my)];
          case 1:
            d = _f.sent();
            if (d === "right" || d === "left") {
              tl = gsap.timeline();
              tl.to(target.current, {
                x:
                  (mx - x.current > 0 ? 1 : -1) *
                    ((_c = props.throwLimit) !== null && _c !== void 0
                      ? _c
                      : 3000) +
                  "px",
                y:
                  (my - y.current > 0 ? 1 : -1) *
                    ((_d = props.throwLimit) !== null && _d !== void 0
                      ? _d
                      : 3000) *
                    Math.tan((angle * Math.PI) / 180) +
                  "px",
                duration: 0.5,
                ease: "power1.in",
              });
              tl.to(target.current, {
                display: "none",
                duration: 0,
              });
            } else if (d === "up" || d === "down") {
              gsap.to(target.current, {
                x: 0,
                y: 0,
                rotation: 0,
                duration: 0.5,
                ease: "power3.out",
              });
            } else {
              gsap.to(target.current, {
                x: 0,
                y: 0,
                rotation: 0,
                duration: 0.5,
                ease: "power3.out",
              });
            }
            x.current = 0;
            y.current = 0;
            return [
              4,
              (_e = props.onSwipe) === null || _e === void 0
                ? void 0
                : _e.call(props, d, props.profile),
            ];
          case 2:
            _f.sent();
            return [2];
        }
      });
    });
  };
  var handleTouchStart = function (e) {
    var mx = e.targetTouches[0].clientX;
    var my = e.targetTouches[0].clientY;
    onStart(mx, my);
  };
  var handleTouchMove = function (e) {
    var mx = e.changedTouches[0].clientX;
    var my = e.changedTouches[0].clientY;
    onMove(mx, my);
  };
  var handleTouchEnd = function (e) {
    var mx = e.changedTouches[0].clientX;
    var my = e.changedTouches[0].clientY;
    onEnd(mx, my);
  };
  var mouseClicked = useRef(false);
  var handleMouseDown = function (e) {
    mouseClicked.current = true;
    var mx = e.clientX;
    var my = e.clientY;
    onStart(mx, my);
  };
  var handleMouseMove = function (e) {
    if (mouseClicked.current) {
      var mx = e.clientX;
      var my = e.clientY;
      onMove(mx, my);
    }
  };
  var handleMouseUp = function (e) {
    if (mouseClicked.current) {
      mouseClicked.current = false;
      var mx = e.clientX;
      var my = e.clientY;
      onEnd(mx, my);
    }
  };
  var handleMouseLeave = function (e) {
    if (mouseClicked.current) {
      mouseClicked.current = false;
      var mx = e.clientX;
      var my = e.clientY;
      onEnd(mx, my);
    }
  };
  useEffect(function () {
    var _a;
    var info =
      (_a = target.current) === null || _a === void 0
        ? void 0
        : _a.getBoundingClientRect();
    if (info !== undefined) {
      mid.current = (info.top + info.bottom) / 2;
    }
    if (target.current !== null) {
      target.current.addEventListener("touchstart", function (ev) {
        ev.preventDefault();
      });
      target.current.addEventListener("mousedown", function (ev) {
        ev.preventDefault();
      });
      target.current.addEventListener("touchmove", function (ev) {
        ev.preventDefault();
      });
      target.current.addEventListener("mousemove", function (ev) {
        ev.preventDefault();
      });
      target.current.addEventListener("touchend", function (ev) {
        ev.preventDefault();
      });
      target.current.addEventListener("mouseup", function (ev) {
        ev.preventDefault();
      });
      target.current.addEventListener("mouseleave", function (ev) {
        ev.preventDefault();
      });
    }
  }, []);
  return (
    <div
      ref={target}
      className={(_a = props.className) !== null && _a !== void 0 ? _a : ""}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      {props.children}
    </div>
  );
};
