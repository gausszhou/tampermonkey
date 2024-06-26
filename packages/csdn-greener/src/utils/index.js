export const injection =  () => {
    !function(e) {
        "use strict";
        function t() {
            return !!window.navigator.userAgent.toLowerCase().match(/(phone|pad|pod|iphone|ipod|ios|ipad|android|mobile|blackberry|iemobile|mqqbrowser|juc|fennec|wosbrowser|browserng|webos|symbian|windows phone)/i)
        }
        function n() {
            return !!window.navigator.userAgent.toLowerCase().match(/(csdn)/i)
        }
        function o(e) {
            for (var t = document.cookie.split("; "), n = 0; n < t.length; n++) {
                var o = t[n].split("=");
                if (e == o[0])
                    return o[1]
            }
            return null
        }
        function i(e) {
            var t = e.target || e.srcElement
              , n = document.documentElement.scrollTop;
            if (t.className.indexOf('hljs-button') > -1) {
                e.preventDefault();
                var o = document.getElementById("hljs-copy-el");
                o || (o = document.createElement("textarea"),
                o.style.position = "absolute",
                o.style.left = "-9999px",
                o.style.top = n + "px",
                o.id = "hljs-copy-el",
                document.body.appendChild(o)),
                o.textContent = e.currentTarget.innerText.replace(/[\u00A0]/gi, " "),
                f($(e.currentTarget.parentNode).attr("data-index")),
                a("#hljs-copy-el");
                try {
                    var i = document.execCommand("copy");
                    o.remove(),
                    t.dataset.title = i ? b : y,
                    i && setTimeout(function() {
                        t.dataset.title = x
                    }, 3e3)
                } catch (r) {
                    t.dataset.title = y
                }
            }
        }
        function r(e) {
            var t = e.target || e.srcElement
              , n = document.documentElement.scrollTop;
            if (t.className.indexOf("hljs-button") > -1) {
                e.preventDefault();
                var o = document.getElementById("hljs-copy-el");
                o || (o = document.createElement("textarea"),
                o.style.position = "absolute",
                o.style.left = "-9999px",
                o.style.top = n + "px",
                o.id = "hljs-copy-el",
                document.body.appendChild(o)),
                o.textContent = e.currentTarget.parentNode.innerText.replace(/[\u00A0]/gi, " "),
                f($(e.currentTarget.parentNode).attr("data-index")),
                a("#hljs-copy-el");
                try {
                    var i = document.execCommand("copy");
                    o.remove(),
                    t.dataset.title = i ? b : y,
                    i && setTimeout(function() {
                        t.dataset.title = x
                    }, 3e3)
                } catch (r) {
                    t.dataset.title = y
                }
            }
        }
        function a(e) {
            if (e = "string" == typeof e ? document.querySelector(e) : e,
            navigator.userAgent.match(/ipad|ipod|iphone/i)) {
                var t = e.contentEditable
                  , n = e.readOnly;
                e.contentEditable = !0,
                e.readOnly = !0;
                var o = document.createRange();
                o.selectNodeContents(e);
                var i = window.getSelection();
                i.removeAllRanges(),
                i.addRange(o),
                e.setSelectionRange(0, 999999),
                e.contentEditable = t,
                e.readOnly = n
            } else
                e.select()
        }
        function c() {
            var e = "z-index: 20;";
            n() && (e = "z-index: 100002;");
            var t = document.createElement("style");
            t.type = "text/css",
            window.navigator.userAgent.toLowerCase().match(/(csdn)/i) && isShowCodeFull ? t.innerHTML = ["pre{position: relative}", "pre:hover .code-full-screen{display:block !important;}", ".code-full-screen{", "display: none !important;", "position: absolute;", "right: 4px;", "top: 4px;", "width: 24px !important;", "height: 24px !important;", "margin: 4px !important;", e, "}", "pre:hover .{0}{display: block}", ".{0}{", "display: none;", "position: absolute;", "right: 34px;", "top: 4px;", "font-size: 12px;", "color: #ffffff;", "background-color: #9999AA;", "width:58px;", "text-align: center;", "padding:2px 0;", "margin: 4px !important;", "border-radius: 4px;", e, "cursor: pointer;", " box-shadow: 0 2px 4px rgba(0,0,0,0.05), 0 2px 4px rgba(0,0,0,0.05);", "}", ".{0}:after{", "content: attr(data-title)", "}", "code .{0}{", "margin: 2px 8px;", "}"].join("").format(v) : t.innerHTML = ["pre{position: relative}", "pre:hover .code-full-screen{display:none !important;}", ".code-full-screen{", "display: none !important;", "position: absolute;", "right: 4px;", "top: 3px;", "width: 24px !important;", "height: 24px !important;", "margin: 4px !important;", e, "}", "pre:hover .{0}{display: block}", ".{0}{", "display: none;", "position: absolute;", "right: 4px;", "top: 4px;", "font-size: 12px;", "color: #ffffff;", "background-color: #9999AA;", "width:58px;", "text-align: center;", "padding:2px 0;", e, "margin: 8px;", "border-radius: 4px;", "cursor: pointer;", " box-shadow: 0 2px 4px rgba(0,0,0,0.05), 0 2px 4px rgba(0,0,0,0.05);", "}", ".{0}:after{", "content: attr(data-title)", "}", "code .{0}{", "margin: 2px 8px;", "}"].join("").format(v),
            document.getElementsByTagName("head")[0].appendChild(t)
        }
        function d() {
            "complete" === document.readyState ? l() : e.addEventListener("DOMContentLoaded", l)
        }
        function s(e) {
            if (!$(this).hasClass("active")) {
                if (!o("UserName"))
                    return window.csdn.loginBox.show({
                        spm: "1001.2101.3001.10011"
                    }),
                    void window.csdn.report.reportClick({
                        spm: "3001.10011"
                    });
                window.csdn.report.reportClick({
                    spm: "3001.10012"
                });
                try {
                    var t = e.currentTarget.parentNode.innerText;
                    t = t.replaceAll("\n", "");
                    var n = $(".annotation-boxshadow").data("isblack")
                      , i = $(this).parents("pre").data("index") || "0"
                      , r = !0;
                    $(".i-ai-code-bottom").hide(),
                    codeMaxSize - t.length <= 0 && (r = !1),
                    $(".annotation-content").attr("data-num", i),
                    $("#annotation-iframe")[0].contentWindow.postMessage({
                        type: "blog-code-sin",
                        isblack: n,
                        content: t,
                        lengthFlag: r
                    }, "*"),
                    $(".annotation-boxshadow").show(),
                    $(".annotation-btn .annotation-def").show(),
                    $(".annotation-btn .annotation-active").hide(),
                    $(".annotation-btn").removeClass("active")
                } catch (a) {
                    console.error("CopyButton error: ", a)
                }
            }
        }
        function p() {
            try {
                var e, t = '<div class="code-annotation" data-title="一键注释"></div>';
                if (overCost || !canRead)
                    return;
                unUseCount <= 0 && o("UserName") && (t = '<div class="code-annotation active" data-title="一键注释"><div class="code-annotation-mask" data-title="今日免费次数已用完"></div></div>'),
                "ckeditor" == C ? (e = $("code.hljs"),
                $("code.hljs").parent().each(function(e, n) {
                    n && (n.innerHTML = n.innerHTML + t)
                })) : (e = $("pre code"),
                e.each(function(e, n) {
                    n && (n.innerHTML = n.innerHTML + t)
                })),
                $(document).on("click", "pre .code-annotation", s);
                var n = "3001.10012";
                o("UserName") || (n = "3001.10011"),
                window.csdn.report && "function" == typeof window.csdn.report.reportView && window.csdn.report.reportView({
                    spm: n
                })
            } catch (i) {
                console.error("CopyButton error: ", i)
            }
        }
        function l() {
            try {
                var e;
                if ("ckeditor" == C) {
                    e = document.querySelectorAll("code.hljs");
                    for (var i in e)
                        e.hasOwnProperty(i) && u(e[i].parentNode)
                } else {
                    e = A;
                    for (var i in e)
                        e.hasOwnProperty(i) && u(e[i])
                }
                t() || n() || ($("#annotation-iframe").length > 0 && o("UserName") ? $("#annotation-iframe").on("load", function() {
                    p()
                }) : p())
            } catch (r) {
                console.error("CopyButton error: ", r)
            }
        }
        function m(e) {
            var i = e.target || e.srcElement;
            i.className.indexOf(v) > -1 && (n() ? window.location.href = "https://passport.csdn.net/account/login?ref=codecopy" : t() ? toobarFlag(20, 21) ? $(".ab-app-shadowbox").show() : window.csdn.loginBox.show({
                spm: "1001.2101.3001.7759"
            }) : o("UserName") || window.csdn.loginBox.show({
                spm: "1001.2101.3001.4334"
            }))
        }
        function u(e) {
            var t = "";
            if ("object" == typeof e && null !== e) {
                var n = ".signin(event)"
                  , o = "hljs"
                  , i = ".copyCode(event)";
                "mdeditor" === C && (o = "mdcp"),
                i = o + i,
                j && (i = o + n,
                t = 'data-report-click=\'{"spm":"1001.2101.3001.4334"}\''),
                window.navigator.userAgent.toLowerCase().match(/(csdn)/i) && isShowCodeFull ? e.innerHTML = e.innerHTML + ('<img class="code-full-screen app_remove_content no-enlarge-img" src="' + blogStaticHost + 'dist/app/img/codeAmplify.png"><div class="{0} {2}" data-title="{1}" ' + t + "></div>").format(v, x, k) : e.innerHTML = e.innerHTML + ('<div class="{0} {2}" data-title="{1}" ' + t + "></div>").format(v, x, k),
                "登录复制" == x && $(".hljs-button").addClass("active"),
                "hljs" === o ? e.querySelector(".hljs-button").setAttribute("onclick", i) : (e.setAttribute("onclick", i),
                e.style.position = "unset")
            }
        }
        function f(e) {
            var t = "1001.2101.3001.4259"
              , n = JSON.stringify({
                codeId: e
            });
            if (window.csdn.report && "function" == typeof window.csdn.report.reportClick)
                window.csdn.report.reportClick({
                    spm: t,
                    extra: n
                });
            else if (window.isApp) {
                var o = {
                    spm: t,
                    extra: n
                }
                  , i = {
                    trackingInfo: JSON.stringify(o)
                };
                g && window.jsCallBackListener.csdntrackclick(JSON.stringify(i)),
                h && window.webkit.messageHandlers.csdntrackclick.postMessage(JSON.stringify(i))
            }
        }
        window.copyCode = r;
        if (window.ActiveXObject || "ActiveXObject"in window)
            return !1;
        var w = navigator.userAgent
          , g = w.indexOf("Android") > -1 || w.indexOf("Adr") > -1
          , h = !!w.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
          , v = "hljs-button"
          , x = "复制"
          , y = "复制失败"
          , b = "已复制"
          , C = void 0
          , k = ""
          , j = !1;
        n() || o("UserName") || (j = !0),
        j && (x = "登录复制",
        k = "signin"),
        $("#content_views").find("pre").each(function(e, t) {
            $(t).attr("data-index", e)
        }),
        String.prototype.format = String.prototype.f = function() {
            var e = arguments;
            return !!this && this.replace(/\{(\d+)\}/g, function(t, n) {
                return e[n] ? e[n] : t
            })
        }
        ;
        var A = document.querySelectorAll("pre code");
        document.querySelectorAll("div.htmledit_views").length > 0 ? (e.hljs.initCopyButtonOnLoad = d,
        e.hljs.addCopyButton = u,
        e.hljs.copyCode = r,
        e.hljs.signin = m,
        c(),
        C = "ckeditor") : A.length > 0 && (window.mdcp ? window.mdcp : window.mdcp = {},
        window.mdcp.copyCode = i,
        window.mdcp.signin = m,
        d(),
        c(),
        C = "mdeditor"),
        $("#content_views").on("copy", function(e) {
            if (!n()) {
                var o = t() ? "3001.10057" : "3001.10056";
                window.csdn.report.reportClick({
                    spm: o
                })
            }
        })
    }(window);
    
}