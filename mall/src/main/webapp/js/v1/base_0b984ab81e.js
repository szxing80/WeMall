function FastClick(e, t) {
    function n(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    }
    var i;
    if (t = t || {},
    this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = t.touchBoundary || 10, this.layer = e, this.tapDelay = t.tapDelay || 200, !FastClick.notNeeded(e)) {
        for (var o = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], r = this, a = 0, s = o.length; s > a; a++) r[o[a]] = n(r[o[a]], r);
        deviceIsAndroid && (e.addEventListener("mouseover", this.onMouse, !0), e.addEventListener("mousedown", this.onMouse, !0), e.addEventListener("mouseup", this.onMouse, !0)),
        e.addEventListener("click", this.onClick, !0),
        e.addEventListener("touchstart", this.onTouchStart, !1),
        e.addEventListener("touchmove", this.onTouchMove, !1),
        e.addEventListener("touchend", this.onTouchEnd, !1),
        e.addEventListener("touchcancel", this.onTouchCancel, !1),
        Event.prototype.stopImmediatePropagation || (e.removeEventListener = function(t, n, i) {
            var o = Node.prototype.removeEventListener;
            "click" === t ? o.call(e, t, n.hijacked || n, i) : o.call(e, t, n, i)
        },
        e.addEventListener = function(t, n, i) {
            var o = Node.prototype.addEventListener;
            "click" === t ? o.call(e, t, n.hijacked || (n.hijacked = function(e) {
                e.propagationStopped || n(e)
            }), i) : o.call(e, t, n, i)
        }),
        "function" == typeof e.onclick && (i = e.onclick, e.addEventListener("click",
        function(e) {
            i(e)
        },
        !1), e.onclick = null)
    }
}
window.zenjs = window.zenjs || {},
function(e) {
    var t = navigator.userAgent.toLowerCase();
    e.UA = {
        isIOS: function() {
            return "ios" == window._global.mobile_system
        },
        getIOSVersion: function() {
            return parseFloat(("" + (/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [0, ""])[1]).replace("undefined", "3_2").replace("_", ".").replace("_", "")) || !1
        },
        isAndroid: function() {
            return "android" == window._global.mobile_system
        },
        isAndroidOld: function() {
            return /android 2.3/gi.test(t) || /android 2.2/gi.test(t)
        },
        isWeixin: function() {
            return "weixin" == window._global.platform
        },
        isIPad: function() {
            return /ipad/gi.test(t)
        },
        isMobile: function() {
            return window._global.is_mobile
        },
        isSafari: function() {
            return /safari/gi.test(t) && !/chrome/gi.test(t)
        }
    }
} (window.zenjs),
define("components/zenjs/util/ua",
function() {}),
define("wap/base/fullguide", ["components/zenjs/util/ua"],
function() {
    var e = window._global,
    t = $("body"),
    n = $("html").hasClass("wx_mobile") && e.mp_data && +e.mp_data.quick_subscribe && e.mp_data.quick_subscribe_url,
    i = {
        fav: function() {
            return '<div id="js-fav-guide" class="js-fullguide fullscreen-guide fav-guide hide"><span class="guide-close">&times;</span><span class="guide-arrow"></span><div class="guide-inner"><div class="step step-1"></div><div class="step step-2"></div></div></div>'
        },
        share: function() {
            return '<div id="js-share-guide" class="js-fullguide fullscreen-guide hide" style="font-size: 16px; line-height: 35px; color: #fff; text-align: center;"><span class="js-close-guide guide-close">&times;</span><span class="guide-arrow"></span><div class="guide-inner">请点击右上角<br/>通过【发送给朋友】功能<br>或【分享到朋友圈】功能<br>把消息告诉小伙伴哟～</div></div>'
        },
        browser: function(e) {
            var t = e || {},
            n = t.isIOS ? '<div id="js-share-guide" class="js-fullguide fullscreen-guide hide" style="font-size: 16px; line-height: 35px; color: #fff; text-align: center;"><span class="js-close-guide guide-close">&times;</span><span class="guide-arrow"></span><div class="guide-inner">请点击右上角<br/>在Safari中打开～</div></div>': '<div id="js-share-guide" class="js-fullguide fullscreen-guide hide" style="font-size: 16px; line-height: 35px; color: #fff; text-align: center;"><span class="js-close-guide guide-close">&times;</span><span class="guide-arrow"></span><div class="guide-inner">请点击右上角<br/>在浏览器中打开～</div></div>';
            return n
        },
        follow: function(e) {
            var t = e || {},
            n = ['<div id="js-follow-guide" class="js-fullguide fullscreen-guide follow-guide hide"><span class="js-close-guide guide-close">&times;</span><div class="guide-inner"><div class="step step-2"></div><div class="wxid"><strong>', t.mp_weixin, '</strong></div><div class="step step-3"></div></div></div>'];
            return n.join("")
        },
        goodsFollow: function(e) {
            var t = e || {},
            n = ['<div id="js-follow-guide" class="js-fullguide fullscreen-guide follow-guide hide"><span class="js-close-guide guide-close">&times;</span><div class="guide-inner"><h3 class="guide-inner-title">你需要关注后才能购买</h3><div class="step step-2"></div><div class="wxid"><strong>', t.mp_weixin, '</strong></div><div class="step step-3"></div></div></div>'];
            return n.join("")
        },
        goodsQuickSubscribe: function(e) {
            var t = e || {},
            n = ['<div id="js-follow-guide" class="js-fullguide fullscreen-guide follow-guide hide"><div class="quick-subscribe js-quick-subscribe"><h2>请先关注后再购买，享受更好的服务~</h2><div><a class="btn" href="', t.quick_subscribe_url, '">去关注</a ></div></div></div>'];
            return n.join("")
        },
        pc: function(e) {
            var t = e || {},
            n = ['<div id="js-share-guide" class="js-fullguide fullscreen-guide hide" style="font-size: 20px; line-height: 30px; color: #fff; text-align: center;"> <span class="js-close-guide guide-close">&times;</span> <div class="guide-inner"> 通过微信【扫一扫】功能<br/>扫描二维码关注我们<img style="width:160px; height: 160px;margin-top: 20px;" src="http://open.weixin.qq.com/qr/code/?username=', t.mp_weixin, '" alt="', t.mp_weixin, '"> </div> </div> '];
            return n.join("")
        }
    },
    o = {
        follow: "#js-follow-guide",
        fav: "#js-fav-guide",
        share: "#js-share-guide"
    },
    r = function(e, t) {
        var n, r;
        $(o[e]).length ? r = $(o[e]) : (n = i[e](t || {}), r = $(n).appendTo("body")),
        r.removeClass("hide")
    },
    a = {
        fav: function() {
            r("fav")
        },
        share: function() {
            r("share")
        },
        follow: function(t) {
            var i = e.mp_data;
            if (i) return ! (t || {}).goods && n ? void(window.location.href = i.quick_subscribe_url) : void r("follow", i)
        },
        browser: function(e) {
            zenjs.UA && zenjs.UA.isWeixin() && r("browser", e)
        }
    },
    s = function(e, t) {
        var n = $(o[e]);
        n && 0 != n.length ? n.removeClass("hide") : a[e](t)
    };
    e.is_mobile ? e && "Showcase_Goods_Controller" === e.controller && (i.follow = n ? i.goodsQuickSubscribe: i.goodsFollow) : i.follow = i.pc,
    t.on("click", ".wxid",
    function(e) {
        e.stopPropagation()
    }),
    t.on("click", ".js-open-follow",
    function(e) {
        e.preventDefault(),
        s("follow")
    }),
    t.on("click", ".js-open-browser",
    function(e) {
        e.preventDefault(),
        s("browser")
    }),
    t.on("click", ".js-open-fav",
    function(e) {
        e.preventDefault(),
        s("fav")
    }),
    t.on("click", ".js-open-share",
    function(e) {
        e.preventDefault(),
        window._global && window._global.wuxi1_0_0 && window.shareHook ? window.shareHook() : s("share")
    }),
    t.on("click", ".js-fullguide",
    function() {
        $(this).addClass("hide")
    }),
    t.on("click", ".js-quick-subscribe",
    function(e) {
        e.stopPropagation()
    }),
    window.showGuide = s
});
var deviceIsAndroid = navigator.userAgent.indexOf("Android") > 0,
deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent),
deviceIsIOS4 = deviceIsIOS && /OS 4_\d(_\d)?/.test(navigator.userAgent),
deviceIsIOSWithBadTarget = deviceIsIOS && /OS ([6-9]|\d{2})_\d/.test(navigator.userAgent),
deviceIsBlackBerry10 = navigator.userAgent.indexOf("BB10") > 0;
FastClick.prototype.needsClick = function(e) {
    switch (e.nodeName.toLowerCase()) {
    case "button":
    case "select":
    case "textarea":
        if (e.disabled) return ! 0;
        break;
    case "input":
        if (deviceIsIOS && "file" === e.type || e.disabled) return ! 0;
        break;
    case "label":
    case "video":
        return ! 0
    }
    return /\bneedsclick\b/.test(e.className)
},
FastClick.prototype.needsFocus = function(e) {
    switch (e.nodeName.toLowerCase()) {
    case "textarea":
        return ! 0;
    case "select":
        return ! deviceIsAndroid;
    case "input":
        switch (e.type) {
        case "button":
        case "checkbox":
        case "file":
        case "image":
        case "radio":
        case "submit":
            return ! 1
        }
        return ! e.disabled && !e.readOnly;
    default:
        return /\bneedsfocus\b/.test(e.className)
    }
},
FastClick.prototype.sendClick = function(e, t) {
    var n, i;
    document.activeElement && document.activeElement !== e && document.activeElement.blur(),
    i = t.changedTouches[0],
    n = document.createEvent("MouseEvents"),
    n.initMouseEvent(this.determineEventType(e), !0, !0, window, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null),
    n.forwardedTouchEvent = !0,
    e.dispatchEvent(n)
},
FastClick.prototype.determineEventType = function(e) {
    return deviceIsAndroid && "select" === e.tagName.toLowerCase() ? "mousedown": "click"
},
FastClick.prototype.focus = function(e) {
    var t;
    deviceIsIOS && e.setSelectionRange && 0 !== e.type.indexOf("date") && "time" !== e.type ? (t = e.value.length, e.setSelectionRange(t, t)) : e.focus()
},
FastClick.prototype.updateScrollParent = function(e) {
    var t, n;
    if (t = e.fastClickScrollParent, !t || !t.contains(e)) {
        n = e;
        do {
            if (n.scrollHeight > n.offsetHeight) {
                t = n,
                e.fastClickScrollParent = n;
                break
            }
            n = n.parentElement
        } while ( n )
    }
    t && (t.fastClickLastScrollTop = t.scrollTop)
},
FastClick.prototype.getTargetElementFromEventTarget = function(e) {
    return e.nodeType === Node.TEXT_NODE ? e.parentNode: e
},
FastClick.prototype.onTouchStart = function(e) {
    var t, n, i;
    if (e.targetTouches.length > 1) return ! 0;
    if (t = this.getTargetElementFromEventTarget(e.target), n = e.targetTouches[0], deviceIsIOS) {
        if (i = window.getSelection(), i.rangeCount && !i.isCollapsed) return ! 0;
        if (!deviceIsIOS4) {
            if (n.identifier === this.lastTouchIdentifier) return e.preventDefault(),
            !1;
            this.lastTouchIdentifier = n.identifier,
            this.updateScrollParent(t)
        }
    }
    return this.trackingClick = !0,
    this.trackingClickStart = e.timeStamp,
    this.targetElement = t,
    this.touchStartX = n.pageX,
    this.touchStartY = n.pageY,
    e.timeStamp - this.lastClickTime < this.tapDelay && e.preventDefault(),
    !0
},
FastClick.prototype.touchHasMoved = function(e) {
    var t = e.changedTouches[0],
    n = this.touchBoundary;
    return Math.abs(t.pageX - this.touchStartX) > n || Math.abs(t.pageY - this.touchStartY) > n ? !0 : !1
},
FastClick.prototype.onTouchMove = function(e) {
    return this.trackingClick ? ((this.targetElement !== this.getTargetElementFromEventTarget(e.target) || this.touchHasMoved(e)) && (this.trackingClick = !1, this.targetElement = null), !0) : !0
},
FastClick.prototype.findControl = function(e) {
    return void 0 !== e.control ? e.control: e.htmlFor ? document.getElementById(e.htmlFor) : e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
},
FastClick.prototype.onTouchEnd = function(e) {
    var t, n, i, o, r, a = this.targetElement;
    if (!this.trackingClick) return ! 0;
    if (e.timeStamp - this.lastClickTime < this.tapDelay) return this.cancelNextClick = !0,
    !0;
    if (this.cancelNextClick = !1, this.lastClickTime = e.timeStamp, n = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, deviceIsIOSWithBadTarget && (r = e.changedTouches[0], a = document.elementFromPoint(r.pageX - window.pageXOffset, r.pageY - window.pageYOffset) || a, a.fastClickScrollParent = this.targetElement.fastClickScrollParent), i = a.tagName.toLowerCase(), "label" === i) {
        if (t = this.findControl(a)) {
            if (this.focus(a), deviceIsAndroid) return ! 1;
            a = t
        }
    } else if (this.needsFocus(a)) return e.timeStamp - n > 100 || deviceIsIOS && window.top !== window && "input" === i ? (this.targetElement = null, !1) : (this.focus(a), this.sendClick(a, e), deviceIsIOS && "select" === i || (this.targetElement = null, e.preventDefault()), !1);
    return deviceIsIOS && !deviceIsIOS4 && (o = a.fastClickScrollParent, o && o.fastClickLastScrollTop !== o.scrollTop) ? !0 : (this.needsClick(a) || (e.preventDefault(), this.sendClick(a, e)), !1)
},
FastClick.prototype.onTouchCancel = function() {
    this.trackingClick = !1,
    this.targetElement = null
},
FastClick.prototype.onMouse = function(e) {
    return this.targetElement ? e.forwardedTouchEvent ? !0 : e.cancelable && (!this.needsClick(this.targetElement) || this.cancelNextClick) ? (e.stopImmediatePropagation ? e.stopImmediatePropagation() : e.propagationStopped = !0, e.stopPropagation(), e.preventDefault(), !1) : !0 : !0
},
FastClick.prototype.onClick = function(e) {
    var t;
    return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : "submit" === e.target.type && 0 === e.detail ? !0 : (t = this.onMouse(e), t || (this.targetElement = null), t)
},
FastClick.prototype.destroy = function() {
    var e = this.layer;
    deviceIsAndroid && (e.removeEventListener("mouseover", this.onMouse, !0), e.removeEventListener("mousedown", this.onMouse, !0), e.removeEventListener("mouseup", this.onMouse, !0)),
    e.removeEventListener("click", this.onClick, !0),
    e.removeEventListener("touchstart", this.onTouchStart, !1),
    e.removeEventListener("touchmove", this.onTouchMove, !1),
    e.removeEventListener("touchend", this.onTouchEnd, !1),
    e.removeEventListener("touchcancel", this.onTouchCancel, !1)
},
FastClick.notNeeded = function(e) {
    var t, n, i;
    if ("undefined" == typeof window.ontouchstart) return ! 0;
    if (n = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
        if (!deviceIsAndroid) return ! 0;
        if (t = document.querySelector("meta[name=viewport]")) {
            if ( - 1 !== t.content.indexOf("user-scalable=no")) return ! 0;
            if (n > 31 && document.documentElement.scrollWidth <= window.outerWidth) return ! 0
        }
    }
    if (deviceIsBlackBerry10 && (i = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/), i[1] >= 10 && i[2] >= 3 && (t = document.querySelector("meta[name=viewport]")))) {
        if ( - 1 !== t.content.indexOf("user-scalable=no")) return ! 0;
        if (document.documentElement.scrollWidth <= window.outerWidth) return ! 0
    }
    return "none" === e.style.msTouchAction ? !0 : !1
},
FastClick.attach = function(e, t) {
    return new FastClick(e, t)
},
define("vendor/fastclick_release",
function() {}),
window.zenjs = window.zenjs || {},
function(e) {
    e.Args = {
        getParameterByName: function(e, t) {
            e = e.replace(/[[]/, "\\[").replace(/[]]/, "\\]"),
            t = t ? "?" + t.split("#")[0].split("?")[1] : window.location.search;
            var n = RegExp("[?&]" + e + "=([^&#]*)").exec(t);
            return n ? decodeURIComponent(n[1].replace(/\+/g, " ")) : ""
        },
        removeParameter: function(e, t) {
            var n = e.split("?");
            if (n.length >= 2) {
                for (var i = encodeURIComponent(t) + "=", o = n[1].split(/[&;]/g), r = o.length; r-->0;) - 1 !== o[r].lastIndexOf(i, 0) && o.splice(r, 1);
                return e = n[0] + "?" + o.join("&")
            }
            return e
        },
        addParameter: function() {
            var e = function(e) {
                var t = "";
                for (var n in e) t += $.trim(n) + "=" + e[n] + "&";
                return t ? "?" + t.slice(0, t.length - 1) : ""
            };
            return function(t, n) {
                if (!t || 0 === t.length || 0 === $.trim(t).indexOf("javascript")) return "";
                var i = t.split("#"),
                o = i[0].split("?"),
                r = {};
                return o[1] && $.each(o[1].split("&"),
                function(e, t) {
                    var n;
                    n = t.split("="),
                    r[n[0]] = n.slice(1).join("=")
                }),
                $.each(n || {},
                function(e, t) {
                    r[$.trim(e)] = encodeURIComponent(t)
                }),
                t = o[0] + e(r),
                i[1] ? t += "#" + i[1] : t
            }
        } ()
    }
} (window.zenjs),
define("components/zenjs/util/args",
function() {}),
define("wap/base/log", ["components/zenjs/util/args"],
function() {
    var e = {};
    _global.spm = _global.spm || {};
    var t = function() {
        var e = function() {
            return _global.spm.logType + _global.spm.logId || "fake" + _global.kdt_id
        };
        return function() {
            var t = zenjs.Args.getParameterByName("spm");
            if (t = $.trim(t), "" !== t) {
                var n = t.split("_");
                n.length > 2 && (t = n[0] + "_" + n[n.length - 1]),
                t += "_" + e()
            } else t = e();
            return t
        }
    } (),
    n = function(e, t) {
        var n = new Image,
        i = Math.floor(2147483648 * Math.random()).toString(36),
        o = "log_" + i,
        r = new $.Deferred;
        return window[o] = n,
        n.onload = n.onerror = n.onabort = function() {
            n.onload = n.onerror = n.onabort = null,
            window[o] = null,
            n = null,
            r.resolve()
        },
        t.time = (new Date).getTime(),
        n.src = zenjs.Args.addParameter(e, t),
        window.setTimeout(r.resolve, 1500),
        r.promise()
    },
    i = function(e) {
        e = e || "default";
        var t = {
            wxd: "",
            "default": ""
        };
        return t[e]
    };
    e.log = function(t, o) {
        return t.spm || (t.spm = e.getSpm()),
        t.referer_url || (t.referer_url = encodeURIComponent(document.referrer)),
        t.title || (t.title = _global.title || $.trim(document.title)),
        n(i(t.target), t, o)
    },
    e.getSpm = function() {
        return e.spm || (e.spm = t()),
        e.spm
    },
    window.Logger = e
}),
define("wap/base/lazy_load", ["wap/base/log"],
function() {
    var e = $(window),
    t = Logger.getSpm();
    $.fn.lazyload = function(t) {
        function n() {
            var e = 0;
            o.each(function() {
                var t = $(this);
                if (!r.skip_invisible || t.is(":visible")) if ($.abovethetop(this, r) || $.leftofbegin(this, r));
                else if ($.belowthefold(this, r) || $.rightoffold(this, r)) {
                    if (++e > r.failure_limit) return ! 1
                } else t.trigger("appear"),
                e = 0
            })
        }
        var i, o = this,
        r = {
            threshold: 0,
            failure_limit: 0,
            event: "scroll",
            effect: "show",
            container: window,
            data_attribute: "src",
            skip_invisible: !1,
            appear: null,
            load: null,
            placeholder: null
        };
        return t && (void 0 !== t.failurelimit && (t.failure_limit = t.failurelimit, delete t.failurelimit), void 0 !== t.effectspeed && (t.effect_speed = t.effectspeed, delete t.effectspeed), $.extend(r, t)),
        i = void 0 === r.container || r.container === window ? e: $(r.container),
        0 === r.event.indexOf("scroll") && i.bind(r.event,
        function() {
            return n()
        }),
        this.each(function() {
            var e = this,
            t = $(e);
            e.loaded = !1,
            (void 0 === t.attr("src") || t.attr("src") === !1) && t.is("img") && r.placeholder && t.attr("src", r.placeholder),
            t.one("appear",
            function() {
                if (!this.loaded) {
                    if (r.appear) {
                        var n = o.length;
                        r.appear.call(e, n, r)
                    }
                    $("<img />").bind("load",
                    function() {
                        var n = t.attr("data-" + r.data_attribute);
                        t.hide(),
                        t.is("img") ? t.attr("src", n) : t.css("background-image", 'url("' + n + '")'),
                        t[r.effect](),
                        e.loaded = !0;
                        var i = $(e).parent();
                        i.hasClass("photo-block") && i.css("background-color", "#fff");
                        var a = $.grep(o,
                        function(e) {
                            return ! e.loaded
                        });
                        if (o = $(a), r.load) {
                            var s = o.length;
                            r.load.call(e, s, r)
                        }
                    }).attr("src", t.attr("data-" + r.data_attribute))
                }
            }),
            0 !== r.event.indexOf("scroll") && t.bind(r.event,
            function() {
                e.loaded || t.trigger("appear")
            })
        }),
        e.bind("resize",
        function() {
            n()
        }),
        /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) && e.bind("pageshow",
        function(e) {
            e.originalEvent && e.originalEvent.persisted && o.each(function() {
                $(this).trigger("appear")
            })
        }),
        $(document).ready(function() {
            n()
        }),
        this
    },
    $.belowthefold = function(t, n) {
        var i;
        return i = void 0 === n.container || n.container === window ? (window.innerHeight ? window.innerHeight: e.height()) + e.scrollTop() : $(n.container).offset().top + $(n.container).height(),
        i <= $(t).offset().top - n.threshold
    },
    $.rightoffold = function(t, n) {
        var i;
        return i = void 0 === n.container || n.container === window ? e.width() + e.scrollLeft() : $(n.container).offset().left + $(n.container).width(),
        i <= $(t).offset().left - n.threshold
    },
    $.abovethetop = function(t, n) {
        var i;
        return i = void 0 === n.container || n.container === window ? e.scrollTop() : $(n.container).offset().top,
        i >= $(t).offset().top + n.threshold + $(t).height()
    },
    $.leftofbegin = function(t, n) {
        var i;
        return i = void 0 === n.container || n.container === window ? e.scrollLeft() : $(n.container).offset().left,
        i >= $(t).offset().left + n.threshold + $(t).width()
    },
    $.inviewport = function(e, t) {
        return ! ($.rightoffold(e, t) || $.leftofbegin(e, t) || $.belowthefold(e, t) || $.abovethetop(e, t))
    },
    $(".js-lazy").lazyload({ 
        placeholder : "/Public/Shop/images/loading.jpg", //用图片提前占位
        threshold: 200,
        effect: "fadeIn",     
    }),
    $(".js-goods-lazy").lazyload({
        threshold: 200,
        appear: function() {
            var e, n = $(this).parents(".js-goods").first().data("goods-id");
            e = t.lastIndexOf("_") === t.length - 1 ? t + "SI" + n: t + "_SI" + n,
            Logger && Logger.log({
                spm: e,
                fm: "display"
            })
        }
    })
}),
define("components/zenjs/class", ["require", "exports", "module"],
function(e, t, n) {
    var i = !1,
    o = /\b_super\b/,
    r = function() {};
    r.extend = function(e) {
        function t() { ! i && this.init && this.init.apply(this, arguments)
        }
        var n = this.prototype;
        i = !0;
        var r = new this;
        i = !1;
        for (var a in e) r[a] = "function" == typeof e[a] && "function" == typeof n[a] && o.test(e[a]) ?
        function(e, t) {
            return function() {
                var i = this._super;
                this._super = n[e];
                var o = t.apply(this, arguments);
                return this._super = i,
                o
            }
        } (a, e[a]) : e[a];
        return t.prototype = r,
        t.prototype.constructor = t,
        t.extend = arguments.callee,
        t
    },
    n.exports = r
}),
define("components/zenjs/core/trigger_method", [],
function() {
    var e = function() {
        function e(e, t, n) {
            return n.toUpperCase()
        }
        function t(e, t, n) {
            return [].slice.call(e, null === t || n ? 1 : t)
        }
        var n = /(^|:)(\w)/gi;
        return function(i) {
            var o = "on" + i.replace(n, e),
            r = this[o];
            return "function" == typeof this.trigger && this.trigger.apply(this, arguments),
            "function" == typeof r ? r.apply(this, t(arguments)) : void 0
        }
    } ();
    return e
}),
define("components/zenjs/events", ["require", "exports", "module", "components/zenjs/class", "components/zenjs/core/trigger_method"],
function(e, t, n) {
    var i = e("components/zenjs/class"),
    o = e("components/zenjs/core/trigger_method"),
    r = i.extend({
        on: function(e, t, n) {
            return this._events = this._events || {},
            this._events[e] = this._events[e] || [],
            this._events[e].push({
                callback: t,
                context: n,
                ctx: n || this
            }),
            this
        },
        off: function(e, t, n) {
            var i, o, r, a, s, l, c, d;
            if (!e && !t && !n) return this._events = {},
            this;
            for (a = e ? [e] : Object.keys(this._events), s = 0, l = a.length; l > s; s++) if (e = a[s], r = this._events[e]) {
                if (this._events[e] = i = [], t || n) for (c = 0, d = r.length; d > c; c++) o = r[c],
                (t && t !== o.callback && t !== o.callback._callback || n && n !== o.context) && i.push(o);
                i.length || delete this._events[e]
            }
            return this
        },
        trigger: function(e) {
            if (!this._events) return this;
            var t = [].slice.call(arguments, 1),
            n = this._events[e];
            if (n) for (var i, o = -1; ++o < n.length;)(i = n[o]).callback.apply(i.ctx, t)
        },
        triggerMethod: o
    });
    n.exports = r
}),
window.Utils = window.Utils || {},
$.extend(window.Utils, {
    unescape: function(e) {
        var t = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"',
            "&#x27;": "'"
        },
        n = /(\&amp;|\&lt;|\&gt;|\&quot;|\&#x27;)/g;
        return ("" + e).replace(n,
        function(e) {
            return t[e]
        })
    }
}),
define("wap/components/util/unescape",
function() {}),
function(e, t) {
    function n() {
        e(".motify").length ? this.$el = e(".motify") : (this.$el = e('<div class="motify"><div class="motify-inner"></div></div>'), e("body").append(this.$el))
    }
    n.prototype = {
        log: function(e, t, n) {
            this.clear(),
            this.$el.find(".motify-inner").html(e),
            this.$el.show(),
            this.hide(t, n)
        },
        hide: function(e, n) {
            var i = this,
            o = e || 2e3;
            o > 0 && (i.$el.removeClass("motifyFx"), t.clearTimeout(i.hideTimer), i.hideTimer = t.setTimeout(function() {
                i.$el.addClass("motifyFx"),
                n && n.apply(i),
                i.clear()
            },
            "function" != typeof n ? o: o + 300))
        },
        clear: function() {
            this.$el.hide().removeClass("motifyFx")
        }
    },
    t.motify = t.motify || new n
} ($, window),
define("wap/base/motify",
function() {}),
window.Zepto &&
function(e) { ["width", "height"].forEach(function(t) {
        var n = t.replace(/./,
        function(e) {
            return e[0].toUpperCase()
        });
        e.fn["outer" + n] = function(e) {
            var n = this;
            if (n && n.length > 0) {
                var i = n[t](),
                o = {
                    width: ["left", "right"],
                    height: ["top", "bottom"]
                };
                return o[t].forEach(function(t) {
                    e && (i += parseInt(n.css("margin-" + t), 10))
                }),
                i
            }
            return null
        }
    })
} (Zepto),
define("vendor/zepto/outer",
function() {}),
define("wap/components/footer_auto", ["vendor/zepto/outer"],
function() {
    var e = navigator.userAgent,
    t = ["MI", "NX507J", "SM701"],
    n = function() {
        for (var n = t.length - 1; n >= 0; n--) if (e.indexOf(t[n]) > -1) return ! 0;
        return ! 1
    } (),
    i = "atuo-footer-off",
    o = 0 === $("." + i).length ? !1 : !0,
    r = function() {
        var e = $(window).height(),
        t = $(".container > .content"),
        n = $(".footer").length && $(".footer").outerHeight(!0) || 0,
        i = $(".container > .header"),
        o = $(".js-footer-auto-ele"),
        r = e,
        a = $(".js-footer-hide");
        if (0 !== t.length) {
            0 === a.length && (r -= n),
            i.length > 0 && (r -= i.outerHeight(!0)),
            o.length > 0 && (r -= o.outerHeight(!0)),
            t.css("min-height", r + "px");
            var s = +t.outerHeight(!0) - r;
            s > 0 && t.css("min-height", r - s + "px")
        }
    };
    o || n || r()
}),
define("wap/base/base", ["wap/base/log", "components/zenjs/util/ua"],
function() {
    document.addEventListener("click",
    function() {},
    !0),
    function(e) {
        e.kdt = e.kdt || {};
        var t = window.zenjs.UA;
        e.extend(e.kdt, {
            getTaobaoModal: function() {
                return e.kdt._taobaoEle = e.kdt._taobaoEle || e("#js-fuck-taobao"),
                e.kdt._taobaoEle
            },
            fuckTaobao: function(e) {
                return (t.isIOS() || t.isAndroid()) && t.isWeixin() && (e.indexOf("taobao.com") >= 0 || e.indexOf("tmall.com") >= 0)
            },
            openModal: function() {
                this._opened || (t.isIOS() ? (e.kdt.getTaobaoModal().find(".js-step-2").addClass("step-2"), this._opened = !0) : t.isAndroid() && (e.kdt.getTaobaoModal().find(".js-step-2").addClass("step-and-2"), this._opened = !0)),
                e.kdt.getTaobaoModal().removeClass("hide")
            },
            openLink: function(t, n) {
                if (void 0 !== t && null !== t) {
                    if (e.kdt.fuckTaobao(t)) return e.kdt.openModal();
                    if (n = n || !1) {
                        var i = window.open(t, "_blank");
                        i.focus()
                    } else location.href = t
                }
            }
        })
    } ($),
    function() {
        $.kdt.getTaobaoModal().on("click",
        function(e) {
            e.target.className.indexOf("step-") < 0 && $.kdt.getTaobaoModal().addClass("hide")
        })
    } (),
    function() {
        var e = Logger.getSpm();
        $(document).on("click", "a",
        function(t) {
            var n = $(this),
            i = n.attr("href"),
            o = "_blank" === n.attr("target"),
            r = n.data("goods-id"),
            a = n.prop("title") || n.text(),
            s = $.trim(i);
            if ("" !== s && 0 !== s.indexOf("javascript") && 0 !== s.indexOf("tel") && !n.hasClass("js-no-follow")) {
                "wxd" == zenjs.Args.getParameterByName("from", location.href) && (i = zenjs.Args.addParameter(i, {
                    from: "wxd"
                }));
                var l = i;
                i.match(/^https?:\/\/\S*\.?(koudaitong\.com|kdt\.im|youzan\.com)/) && (l = zenjs.Args.addParameter(i, {
                    spm: e
                }));
                var c = {
                    fm: "click",
                    url: window.encodeURIComponent(i),
                    title: $.trim(a)
                };
                t.fromMenu && $.extend(c, {
                    click_type: "menu"
                }),
                null !== r && void 0 !== r && $.extend(c, {
                    click_id: r
                }),
                Logger && Logger.log(c).then(function() { (zenjs.UA.isMobile() || !o) && $.kdt.openLink(l)
                }),
                zenjs.UA.isMobile() || !o ? t.preventDefault() : n.attr("href", l)
            }
        });
        var t = function() {
            var e = [],
            t = $(".js-goods");
            return t.length < 1 ? null: (t.each(function(t, n) {
                var i = $(n);
                e.push(i.data("goods-id"))
            }), e.join(","))
        } ();
        Logger && Logger.log({
            fm: "display",
            display_goods: t
        });
        var n = ($(document.documentElement), $(".js-mp-info")),
        i = window.navigator.userAgent,
        o = i.match(/MicroMessenger\/(\d+(\.\d+)*)/),
        r = null !== o && o.length,
        a = r ? o[1] : "",
        s = a.split("."),
        l = [5, 2, 0],
        c = !0;
        for (var d in l) {
            if (!s[d]) break;
            if (parseInt(s[d]) < l[d]) {
                c = !0;
                break
            }
            if (parseInt(s[d]) > l[d]) {
                c = !1;
                break
            }
        }
        var u = zenjs.UA.isAndroid() && zenjs.UA.isWeixin() && c;
        u || n.on("click", ".js-follow-mp",
        function() {
            return window.showGuide && window.showGuide("follow"),
            !1
        })
    } ($, window, document),
    function() {
        var e = zenjs.Args.getParameterByName("promote"),
        t = zenjs.Args.getParameterByName("from"),
        n = $("a");
        e && n.each(function() {
            var t = $(this),
            n = t.attr("href");
            n = zenjs.Args.addParameter(n, {
                promote: e
            }),
            n && 0 !== n.indexOf("tel") && t.attr("href", n)
        }),
        t && n.each(function() {
            var e = $(this),
            n = e.attr("href");
            n = zenjs.Args.addParameter(n, {
                from: t
            }),
            n && 0 !== n.indexOf("tel") && e.attr("href", n)
        })
    } ()
}),
require(["wap/base/fullguide", "vendor/fastclick_release", "wap/base/log", "wap/base/lazy_load","wap/base/motify", "wap/components/footer_auto", "wap/base/base"],
function() {
    var e = function() {
        $(".vote-page").length || FastClick && FastClick.attach(document.body)
    };
    /loaded|complete/.test(document.readyState) ? e() : window.addEventListener("load", e)
}),
define("main",
function() {});