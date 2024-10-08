/*!jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license*/
!function(a, b) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document)
            throw new Error("jQuery requires a window with a document");
        return b(a)
    }
    : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    "use strict";
    var c = []
      , d = a.document
      , e = Object.getPrototypeOf
      , f = c.slice
      , g = c.concat
      , h = c.push
      , i = c.indexOf
      , j = {}
      , k = j.toString
      , l = j.hasOwnProperty
      , m = l.toString
      , n = m.call(Object)
      , o = {};
    function p(a, b) {
        b = b || d;
        var c = b.createElement("script");
        c.text = a,
        b.head.appendChild(c).parentNode.removeChild(c)
    }
    var q = "3.2.1"
      , r = function(a, b) {
        return new r.fn.init(a,b)
    }
      , s = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
      , t = /^-ms-/
      , u = /-([a-z])/g
      , v = function(a, b) {
        return b.toUpperCase()
    };
    r.fn = r.prototype = {
        jquery: q,
        constructor: r,
        length: 0,
        toArray: function() {
            return f.call(this)
        },
        get: function(a) {
            return null == a ? f.call(this) : a < 0 ? this[a + this.length] : this[a]
        },
        pushStack: function(a) {
            var b = r.merge(this.constructor(), a);
            return b.prevObject = this,
            b
        },
        each: function(a) {
            return r.each(this, a)
        },
        map: function(a) {
            return this.pushStack(r.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(f.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length
              , c = +a + (a < 0 ? b : 0);
            return this.pushStack(c >= 0 && c < b ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: h,
        sort: c.sort,
        splice: c.splice
    },
    r.extend = r.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
        for ("boolean" == typeof g && (j = g,
        g = arguments[h] || {},
        h++),
        "object" == typeof g || r.isFunction(g) || (g = {}),
        h === i && (g = this,
        h--); h < i; h++)
            if (null != (a = arguments[h]))
                for (b in a)
                    c = g[b],
                    d = a[b],
                    g !== d && (j && d && (r.isPlainObject(d) || (e = Array.isArray(d))) ? (e ? (e = !1,
                    f = c && Array.isArray(c) ? c : []) : f = c && r.isPlainObject(c) ? c : {},
                    g[b] = r.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }
    ,
    r.extend({
        expando: "jQuery" + (q + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === r.type(a)
        },
        isWindow: function(a) {
            return null != a && a === a.window
        },
        isNumeric: function(a) {
            var b = r.type(a);
            return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a))
        },
        isPlainObject: function(a) {
            var b, c;
            return !(!a || "[object Object]" !== k.call(a)) && (!(b = e(a)) || (c = l.call(b, "constructor") && b.constructor,
            "function" == typeof c && m.call(c) === n))
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a)
                return !1;
            return !0
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? j[k.call(a)] || "object" : typeof a
        },
        globalEval: function(a) {
            p(a)
        },
        camelCase: function(a) {
            return a.replace(t, "ms-").replace(u, v)
        },
        each: function(a, b) {
            var c, d = 0;
            if (w(a)) {
                for (c = a.length; d < c; d++)
                    if (b.call(a[d], d, a[d]) === !1)
                        break
            } else
                for (d in a)
                    if (b.call(a[d], d, a[d]) === !1)
                        break;
            return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(s, "")
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (w(Object(a)) ? r.merge(c, "string" == typeof a ? [a] : a) : h.call(c, a)),
            c
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : i.call(b, a, c)
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; d < c; d++)
                a[e++] = b[d];
            return a.length = e,
            a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; f < g; f++)
                d = !b(a[f], f),
                d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, c) {
            var d, e, f = 0, h = [];
            if (w(a))
                for (d = a.length; f < d; f++)
                    e = b(a[f], f, c),
                    null != e && h.push(e);
            else
                for (f in a)
                    e = b(a[f], f, c),
                    null != e && h.push(e);
            return g.apply([], h)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, d, e;
            if ("string" == typeof b && (c = a[b],
            b = a,
            a = c),
            r.isFunction(a))
                return d = f.call(arguments, 2),
                e = function() {
                    return a.apply(b || this, d.concat(f.call(arguments)))
                }
                ,
                e.guid = a.guid = a.guid || r.guid++,
                e
        },
        now: Date.now,
        support: o
    }),
    "function" == typeof Symbol && (r.fn[Symbol.iterator] = c[Symbol.iterator]),
    r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
        j["[object " + b + "]"] = b.toLowerCase()
    });
    function w(a) {
        var b = !!a && "length"in a && a.length
          , c = r.type(a);
        return "function" !== c && !r.isWindow(a) && ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a)
    }
    var x = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date, v = a.document, w = 0, x = 0, y = ha(), z = ha(), A = ha(), B = function(a, b) {
            return a === b && (l = !0),
            0
        }, C = {}.hasOwnProperty, D = [], E = D.pop, F = D.push, G = D.push, H = D.slice, I = function(a, b) {
            for (var c = 0, d = a.length; c < d; c++)
                if (a[c] === b)
                    return c;
            return -1
        }, J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", K = "[\\x20\\t\\r\\n\\f]", L = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", M = "\\[" + K + "*(" + L + ")(?:" + K + "*([*^$|!~]?=)" + K + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + L + "))|)" + K + "*\\]", N = ":(" + L + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)", O = new RegExp(K + "+","g"), P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$","g"), Q = new RegExp("^" + K + "*," + K + "*"), R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"), S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]","g"), T = new RegExp(N), U = new RegExp("^" + L + "$"), V = {
            ID: new RegExp("^#(" + L + ")"),
            CLASS: new RegExp("^\\.(" + L + ")"),
            TAG: new RegExp("^(" + L + "|[*])"),
            ATTR: new RegExp("^" + M),
            PSEUDO: new RegExp("^" + N),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)","i"),
            bool: new RegExp("^(?:" + J + ")$","i"),
            needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)","i")
        }, W = /^(?:input|select|textarea|button)$/i, X = /^h\d$/i, Y = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, $ = /[+~]/, _ = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)","ig"), aa = function(a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
        }, ba = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ca = function(a, b) {
            return b ? "\0" === a ? "\ufffd" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a
        }, da = function() {
            m()
        }, ea = ta(function(a) {
            return a.disabled === !0 && ("form"in a || "label"in a)
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            G.apply(D = H.call(v.childNodes), v.childNodes),
            D[v.childNodes.length].nodeType
        } catch (fa) {
            G = {
                apply: D.length ? function(a, b) {
                    F.apply(a, H.call(b))
                }
                : function(a, b) {
                    var c = a.length
                      , d = 0;
                    while (a[c++] = b[d++])
                        ;
                    a.length = c - 1
                }
            }
        }
        function ga(a, b, d, e) {
            var f, h, j, k, l, o, r, s = b && b.ownerDocument, w = b ? b.nodeType : 9;
            if (d = d || [],
            "string" != typeof a || !a || 1 !== w && 9 !== w && 11 !== w)
                return d;
            if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b),
            b = b || n,
            p)) {
                if (11 !== w && (l = Z.exec(a)))
                    if (f = l[1]) {
                        if (9 === w) {
                            if (!(j = b.getElementById(f)))
                                return d;
                            if (j.id === f)
                                return d.push(j),
                                d
                        } else if (s && (j = s.getElementById(f)) && t(b, j) && j.id === f)
                            return d.push(j),
                            d
                    } else {
                        if (l[2])
                            return G.apply(d, b.getElementsByTagName(a)),
                            d;
                        if ((f = l[3]) && c.getElementsByClassName && b.getElementsByClassName)
                            return G.apply(d, b.getElementsByClassName(f)),
                            d
                    }
                if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
                    if (1 !== w)
                        s = b,
                        r = a;
                    else if ("object" !== b.nodeName.toLowerCase()) {
                        (k = b.getAttribute("id")) ? k = k.replace(ba, ca) : b.setAttribute("id", k = u),
                        o = g(a),
                        h = o.length;
                        while (h--)
                            o[h] = "#" + k + " " + sa(o[h]);
                        r = o.join(","),
                        s = $.test(a) && qa(b.parentNode) || b
                    }
                    if (r)
                        try {
                            return G.apply(d, s.querySelectorAll(r)),
                            d
                        } catch (x) {} finally {
                            k === u && b.removeAttribute("id")
                        }
                }
            }
            return i(a.replace(P, "$1"), b, d, e)
        }
        function ha() {
            var a = [];
            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()],
                b[c + " "] = e
            }
            return b
        }
        function ia(a) {
            return a[u] = !0,
            a
        }
        function ja(a) {
            var b = n.createElement("fieldset");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b),
                b = null
            }
        }
        function ka(a, b) {
            var c = a.split("|")
              , e = c.length;
            while (e--)
                d.attrHandle[c[e]] = b
        }
        function la(a, b) {
            var c = b && a
              , d = c && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;
            if (d)
                return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b)
                        return -1;
            return a ? 1 : -1
        }
        function ma(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }
        function na(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }
        function oa(a) {
            return function(b) {
                return "form"in b ? b.parentNode && b.disabled === !1 ? "label"in b ? "label"in b.parentNode ? b.parentNode.disabled === a : b.disabled === a : b.isDisabled === a || b.isDisabled !== !a && ea(b) === a : b.disabled === a : "label"in b && b.disabled === a
            }
        }
        function pa(a) {
            return ia(function(b) {
                return b = +b,
                ia(function(c, d) {
                    var e, f = a([], c.length, b), g = f.length;
                    while (g--)
                        c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }
        function qa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }
        c = ga.support = {},
        f = ga.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return !!b && "HTML" !== b.nodeName
        }
        ,
        m = ga.setDocument = function(a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g,
            o = n.documentElement,
            p = !f(n),
            v !== n && (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)),
            c.attributes = ja(function(a) {
                return a.className = "i",
                !a.getAttribute("className")
            }),
            c.getElementsByTagName = ja(function(a) {
                return a.appendChild(n.createComment("")),
                !a.getElementsByTagName("*").length
            }),
            c.getElementsByClassName = Y.test(n.getElementsByClassName),
            c.getById = ja(function(a) {
                return o.appendChild(a).id = u,
                !n.getElementsByName || !n.getElementsByName(u).length
            }),
            c.getById ? (d.filter.ID = function(a) {
                var b = a.replace(_, aa);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }
            ,
            d.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c ? [c] : []
                }
            }
            ) : (d.filter.ID = function(a) {
                var b = a.replace(_, aa);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }
            ,
            d.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c, d, e, f = b.getElementById(a);
                    if (f) {
                        if (c = f.getAttributeNode("id"),
                        c && c.value === a)
                            return [f];
                        e = b.getElementsByName(a),
                        d = 0;
                        while (f = e[d++])
                            if (c = f.getAttributeNode("id"),
                            c && c.value === a)
                                return [f]
                    }
                    return []
                }
            }
            ),
            d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
            }
            : function(a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++])
                        1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }
            ,
            d.find.CLASS = c.getElementsByClassName && function(a, b) {
                if ("undefined" != typeof b.getElementsByClassName && p)
                    return b.getElementsByClassName(a)
            }
            ,
            r = [],
            q = [],
            (c.qsa = Y.test(n.querySelectorAll)) && (ja(function(a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + K + "*(?:''|\"\")"),
                a.querySelectorAll("[selected]").length || q.push("\\[" + K + "*(?:value|" + J + ")"),
                a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="),
                a.querySelectorAll(":checked").length || q.push(":checked"),
                a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
            }),
            ja(function(a) {
                a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var b = n.createElement("input");
                b.setAttribute("type", "hidden"),
                a.appendChild(b).setAttribute("name", "D"),
                a.querySelectorAll("[name=d]").length && q.push("name" + K + "*[*^$|!~]?="),
                2 !== a.querySelectorAll(":enabled").length && q.push(":enabled", ":disabled"),
                o.appendChild(a).disabled = !0,
                2 !== a.querySelectorAll(":disabled").length && q.push(":enabled", ":disabled"),
                a.querySelectorAll("*,:x"),
                q.push(",.*:")
            })),
            (c.matchesSelector = Y.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function(a) {
                c.disconnectedMatch = s.call(a, "*"),
                s.call(a, "[s!='']:x"),
                r.push("!=", N)
            }),
            q = q.length && new RegExp(q.join("|")),
            r = r.length && new RegExp(r.join("|")),
            b = Y.test(o.compareDocumentPosition),
            t = b || Y.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a
                  , d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            }
            : function(a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a)
                            return !0;
                return !1
            }
            ,
            B = b ? function(a, b) {
                if (a === b)
                    return l = !0,
                    0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1,
                1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? I(k, a) - I(k, b) : 0 : 4 & d ? -1 : 1)
            }
            : function(a, b) {
                if (a === b)
                    return l = !0,
                    0;
                var c, d = 0, e = a.parentNode, f = b.parentNode, g = [a], h = [b];
                if (!e || !f)
                    return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? I(k, a) - I(k, b) : 0;
                if (e === f)
                    return la(a, b);
                c = a;
                while (c = c.parentNode)
                    g.unshift(c);
                c = b;
                while (c = c.parentNode)
                    h.unshift(c);
                while (g[d] === h[d])
                    d++;
                return d ? la(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0
            }
            ,
            n) : n
        }
        ,
        ga.matches = function(a, b) {
            return ga(a, null, null, b)
        }
        ,
        ga.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a),
            b = b.replace(S, "='$1']"),
            c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b)))
                try {
                    var d = s.call(a, b);
                    if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType)
                        return d
                } catch (e) {}
            return ga(b, n, null, [a]).length > 0
        }
        ,
        ga.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a),
            t(a, b)
        }
        ,
        ga.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()]
              , f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }
        ,
        ga.escape = function(a) {
            return (a + "").replace(ba, ca)
        }
        ,
        ga.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }
        ,
        ga.uniqueSort = function(a) {
            var b, d = [], e = 0, f = 0;
            if (l = !c.detectDuplicates,
            k = !c.sortStable && a.slice(0),
            a.sort(B),
            l) {
                while (b = a[f++])
                    b === a[f] && (e = d.push(f));
                while (e--)
                    a.splice(d[e], 1)
            }
            return k = null,
            a
        }
        ,
        e = ga.getText = function(a) {
            var b, c = "", d = 0, f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent)
                        return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling)
                        c += e(a)
                } else if (3 === f || 4 === f)
                    return a.nodeValue
            } else
                while (b = a[d++])
                    c += e(b);
            return c
        }
        ,
        d = ga.selectors = {
            cacheLength: 50,
            createPseudo: ia,
            match: V,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(_, aa),
                    a[3] = (a[3] || a[4] || a[5] || "").replace(_, aa),
                    "~=" === a[2] && (a[3] = " " + a[3] + " "),
                    a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(),
                    "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]),
                    a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])),
                    a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]),
                    a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return V.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && T.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b),
                    a[2] = c.slice(0, b)),
                    a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(_, aa).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    }
                    : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) && y(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = ga.attr(d, a);
                        return null == e ? "!=" === b : !b || (e += "",
                        "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(O, " ") + " ").indexOf(c) > -1 : "|=" === b && (e === c || e.slice(0, c.length + 1) === c + "-"))
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3)
                      , g = "last" !== a.slice(-4)
                      , h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    }
                    : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h, t = !1;
                        if (q) {
                            if (f) {
                                while (p) {
                                    m = b;
                                    while (m = m[p])
                                        if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType)
                                            return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild],
                            g && s) {
                                m = q,
                                l = m[u] || (m[u] = {}),
                                k = l[m.uniqueID] || (l[m.uniqueID] = {}),
                                j = k[a] || [],
                                n = j[0] === w && j[1],
                                t = n && j[2],
                                m = n && q.childNodes[n];
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if (1 === m.nodeType && ++t && m === b) {
                                        k[a] = [w, n, t];
                                        break
                                    }
                            } else if (s && (m = b,
                            l = m[u] || (m[u] = {}),
                            k = l[m.uniqueID] || (l[m.uniqueID] = {}),
                            j = k[a] || [],
                            n = j[0] === w && j[1],
                            t = n),
                            t === !1)
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}),
                                    k = l[m.uniqueID] || (l[m.uniqueID] = {}),
                                    k[a] = [w, t]),
                                    m === b))
                                        break;
                            return t -= e,
                            t === d || t % d === 0 && t / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b],
                    d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function(a, c) {
                        var d, f = e(a, b), g = f.length;
                        while (g--)
                            d = I(a, f[g]),
                            a[d] = !(c[d] = f[g])
                    }) : function(a) {
                        return e(a, 0, c)
                    }
                    ) : e
                }
            },
            pseudos: {
                not: ia(function(a) {
                    var b = []
                      , c = []
                      , d = h(a.replace(P, "$1"));
                    return d[u] ? ia(function(a, b, c, e) {
                        var f, g = d(a, null, e, []), h = a.length;
                        while (h--)
                            (f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, e, f) {
                        return b[0] = a,
                        d(b, null, f, c),
                        b[0] = null,
                        !c.pop()
                    }
                }),
                has: ia(function(a) {
                    return function(b) {
                        return ga(a, b).length > 0
                    }
                }),
                contains: ia(function(a) {
                    return a = a.replace(_, aa),
                    function(b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                    }
                }),
                lang: ia(function(a) {
                    return U.test(a || "") || ga.error("unsupported lang: " + a),
                    a = a.replace(_, aa).toLowerCase(),
                    function(b) {
                        var c;
                        do
                            if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                                return c = c.toLowerCase(),
                                c === a || 0 === c.indexOf(a + "-");
                        while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1
                    }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === o
                },
                focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: oa(!1),
                disabled: oa(!0),
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex,
                    a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(a) {
                    return !d.pseudos.empty(a)
                },
                header: function(a) {
                    return X.test(a.nodeName)
                },
                input: function(a) {
                    return W.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: pa(function() {
                    return [0]
                }),
                last: pa(function(a, b) {
                    return [b - 1]
                }),
                eq: pa(function(a, b, c) {
                    return [c < 0 ? c + b : c]
                }),
                even: pa(function(a, b) {
                    for (var c = 0; c < b; c += 2)
                        a.push(c);
                    return a
                }),
                odd: pa(function(a, b) {
                    for (var c = 1; c < b; c += 2)
                        a.push(c);
                    return a
                }),
                lt: pa(function(a, b, c) {
                    for (var d = c < 0 ? c + b : c; --d >= 0; )
                        a.push(d);
                    return a
                }),
                gt: pa(function(a, b, c) {
                    for (var d = c < 0 ? c + b : c; ++d < b; )
                        a.push(d);
                    return a
                })
            }
        },
        d.pseudos.nth = d.pseudos.eq;
        for (b in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            d.pseudos[b] = ma(b);
        for (b in {
            submit: !0,
            reset: !0
        })
            d.pseudos[b] = na(b);
        function ra() {}
        ra.prototype = d.filters = d.pseudos,
        d.setFilters = new ra,
        g = ga.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k)
                return b ? 0 : k.slice(0);
            h = a,
            i = [],
            j = d.preFilter;
            while (h) {
                c && !(e = Q.exec(h)) || (e && (h = h.slice(e[0].length) || h),
                i.push(f = [])),
                c = !1,
                (e = R.exec(h)) && (c = e.shift(),
                f.push({
                    value: c,
                    type: e[0].replace(P, " ")
                }),
                h = h.slice(c.length));
                for (g in d.filter)
                    !(e = V[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(),
                    f.push({
                        value: c,
                        type: g,
                        matches: e
                    }),
                    h = h.slice(c.length));
                if (!c)
                    break
            }
            return b ? h.length : h ? ga.error(a) : z(a, i).slice(0)
        }
        ;
        function sa(a) {
            for (var b = 0, c = a.length, d = ""; b < c; b++)
                d += a[b].value;
            return d
        }
        function ta(a, b, c) {
            var d = b.dir
              , e = b.next
              , f = e || d
              , g = c && "parentNode" === f
              , h = x++;
            return b.first ? function(b, c, e) {
                while (b = b[d])
                    if (1 === b.nodeType || g)
                        return a(b, c, e);
                return !1
            }
            : function(b, c, i) {
                var j, k, l, m = [w, h];
                if (i) {
                    while (b = b[d])
                        if ((1 === b.nodeType || g) && a(b, c, i))
                            return !0
                } else
                    while (b = b[d])
                        if (1 === b.nodeType || g)
                            if (l = b[u] || (b[u] = {}),
                            k = l[b.uniqueID] || (l[b.uniqueID] = {}),
                            e && e === b.nodeName.toLowerCase())
                                b = b[d] || b;
                            else {
                                if ((j = k[f]) && j[0] === w && j[1] === h)
                                    return m[2] = j[2];
                                if (k[f] = m,
                                m[2] = a(b, c, i))
                                    return !0
                            }
                return !1
            }
        }
        function ua(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d))
                        return !1;
                return !0
            }
            : a[0]
        }
        function va(a, b, c) {
            for (var d = 0, e = b.length; d < e; d++)
                ga(a, b[d], c);
            return c
        }
        function wa(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++)
                (f = a[h]) && (c && !c(f, d, e) || (g.push(f),
                j && b.push(h)));
            return g
        }
        function xa(a, b, c, d, e, f) {
            return d && !d[u] && (d = xa(d)),
            e && !e[u] && (e = xa(e, f)),
            ia(function(f, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, p = f || va(b || "*", h.nodeType ? [h] : h, []), q = !a || !f && b ? p : wa(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i),
                d) {
                    j = wa(r, n),
                    d(j, [], h, i),
                    k = j.length;
                    while (k--)
                        (l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [],
                            k = r.length;
                            while (k--)
                                (l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)
                            (l = r[k]) && (j = e ? I(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else
                    r = wa(r === g ? r.splice(o, r.length) : r),
                    e ? e(null, g, r, i) : G.apply(g, r)
            })
        }
        function ya(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ta(function(a) {
                return a === b
            }, h, !0), l = ta(function(a) {
                return I(b, a) > -1
            }, h, !0), m = [function(a, c, d) {
                var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                return b = null,
                e
            }
            ]; i < f; i++)
                if (c = d.relative[a[i].type])
                    m = [ta(ua(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches),
                    c[u]) {
                        for (e = ++i; e < f; e++)
                            if (d.relative[a[e].type])
                                break;
                        return xa(i > 1 && ua(m), i > 1 && sa(a.slice(0, i - 1).concat({
                            value: " " === a[i - 2].type ? "*" : ""
                        })).replace(P, "$1"), c, i < e && ya(a.slice(i, e)), e < f && ya(a = a.slice(e)), e < f && sa(a))
                    }
                    m.push(c)
                }
            return ua(m)
        }
        function za(a, b) {
            var c = b.length > 0
              , e = a.length > 0
              , f = function(f, g, h, i, k) {
                var l, o, q, r = 0, s = "0", t = f && [], u = [], v = j, x = f || e && d.find.TAG("*", k), y = w += null == v ? 1 : Math.random() || .1, z = x.length;
                for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
                    if (e && l) {
                        o = 0,
                        g || l.ownerDocument === n || (m(l),
                        h = !p);
                        while (q = a[o++])
                            if (q(l, g || n, h)) {
                                i.push(l);
                                break
                            }
                        k && (w = y)
                    }
                    c && ((l = !q && l) && r--,
                    f && t.push(l))
                }
                if (r += s,
                c && s !== r) {
                    o = 0;
                    while (q = b[o++])
                        q(t, u, g, h);
                    if (f) {
                        if (r > 0)
                            while (s--)
                                t[s] || u[s] || (u[s] = E.call(i));
                        u = wa(u)
                    }
                    G.apply(i, u),
                    k && !f && u.length > 0 && r + b.length > 1 && ga.uniqueSort(i)
                }
                return k && (w = y,
                j = v),
                t
            };
            return c ? ia(f) : f
        }
        return h = ga.compile = function(a, b) {
            var c, d = [], e = [], f = A[a + " "];
            if (!f) {
                b || (b = g(a)),
                c = b.length;
                while (c--)
                    f = ya(b[c]),
                    f[u] ? d.push(f) : e.push(f);
                f = A(a, za(e, d)),
                f.selector = a
            }
            return f
        }
        ,
        i = ga.select = function(a, b, c, e) {
            var f, i, j, k, l, m = "function" == typeof a && a, n = !e && g(a = m.selector || a);
            if (c = c || [],
            1 === n.length) {
                if (i = n[0] = n[0].slice(0),
                i.length > 2 && "ID" === (j = i[0]).type && 9 === b.nodeType && p && d.relative[i[1].type]) {
                    if (b = (d.find.ID(j.matches[0].replace(_, aa), b) || [])[0],
                    !b)
                        return c;
                    m && (b = b.parentNode),
                    a = a.slice(i.shift().value.length)
                }
                f = V.needsContext.test(a) ? 0 : i.length;
                while (f--) {
                    if (j = i[f],
                    d.relative[k = j.type])
                        break;
                    if ((l = d.find[k]) && (e = l(j.matches[0].replace(_, aa), $.test(i[0].type) && qa(b.parentNode) || b))) {
                        if (i.splice(f, 1),
                        a = e.length && sa(i),
                        !a)
                            return G.apply(c, e),
                            c;
                        break
                    }
                }
            }
            return (m || h(a, n))(e, b, !p, c, !b || $.test(a) && qa(b.parentNode) || b),
            c
        }
        ,
        c.sortStable = u.split("").sort(B).join("") === u,
        c.detectDuplicates = !!l,
        m(),
        c.sortDetached = ja(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("fieldset"))
        }),
        ja(function(a) {
            return a.innerHTML = "<a href='#'></a>",
            "#" === a.firstChild.getAttribute("href")
        }) || ka("type|href|height|width", function(a, b, c) {
            if (!c)
                return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }),
        c.attributes && ja(function(a) {
            return a.innerHTML = "<input/>",
            a.firstChild.setAttribute("value", ""),
            "" === a.firstChild.getAttribute("value")
        }) || ka("value", function(a, b, c) {
            if (!c && "input" === a.nodeName.toLowerCase())
                return a.defaultValue
        }),
        ja(function(a) {
            return null == a.getAttribute("disabled")
        }) || ka(J, function(a, b, c) {
            var d;
            if (!c)
                return a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }),
        ga
    }(a);
    r.find = x,
    r.expr = x.selectors,
    r.expr[":"] = r.expr.pseudos,
    r.uniqueSort = r.unique = x.uniqueSort,
    r.text = x.getText,
    r.isXMLDoc = x.isXML,
    r.contains = x.contains,
    r.escapeSelector = x.escape;
    var y = function(a, b, c) {
        var d = []
          , e = void 0 !== c;
        while ((a = a[b]) && 9 !== a.nodeType)
            if (1 === a.nodeType) {
                if (e && r(a).is(c))
                    break;
                d.push(a)
            }
        return d
    }
      , z = function(a, b) {
        for (var c = []; a; a = a.nextSibling)
            1 === a.nodeType && a !== b && c.push(a);
        return c
    }
      , A = r.expr.match.needsContext;
    function B(a, b) {
        return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
    }
    var C = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i
      , D = /^.[^:#\[\.,]*$/;
    function E(a, b, c) {
        return r.isFunction(b) ? r.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c
        }) : b.nodeType ? r.grep(a, function(a) {
            return a === b !== c
        }) : "string" != typeof b ? r.grep(a, function(a) {
            return i.call(b, a) > -1 !== c
        }) : D.test(b) ? r.filter(b, a, c) : (b = r.filter(b, a),
        r.grep(a, function(a) {
            return i.call(b, a) > -1 !== c && 1 === a.nodeType
        }))
    }
    r.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"),
        1 === b.length && 1 === d.nodeType ? r.find.matchesSelector(d, a) ? [d] : [] : r.find.matches(a, r.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }
    ,
    r.fn.extend({
        find: function(a) {
            var b, c, d = this.length, e = this;
            if ("string" != typeof a)
                return this.pushStack(r(a).filter(function() {
                    for (b = 0; b < d; b++)
                        if (r.contains(e[b], this))
                            return !0
                }));
            for (c = this.pushStack([]),
            b = 0; b < d; b++)
                r.find(a, e[b], c);
            return d > 1 ? r.uniqueSort(c) : c
        },
        filter: function(a) {
            return this.pushStack(E(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(E(this, a || [], !0))
        },
        is: function(a) {
            return !!E(this, "string" == typeof a && A.test(a) ? r(a) : a || [], !1).length
        }
    });
    var F, G = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, H = r.fn.init = function(a, b, c) {
        var e, f;
        if (!a)
            return this;
        if (c = c || F,
        "string" == typeof a) {
            if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : G.exec(a),
            !e || !e[1] && b)
                return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
            if (e[1]) {
                if (b = b instanceof r ? b[0] : b,
                r.merge(this, r.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)),
                C.test(e[1]) && r.isPlainObject(b))
                    for (e in b)
                        r.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
                return this
            }
            return f = d.getElementById(e[2]),
            f && (this[0] = f,
            this.length = 1),
            this
        }
        return a.nodeType ? (this[0] = a,
        this.length = 1,
        this) : r.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(r) : r.makeArray(a, this)
    }
    ;
    H.prototype = r.fn,
    F = r(d);
    var I = /^(?:parents|prev(?:Until|All))/
      , J = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    r.fn.extend({
        has: function(a) {
            var b = r(a, this)
              , c = b.length;
            return this.filter(function() {
                for (var a = 0; a < c; a++)
                    if (r.contains(this, b[a]))
                        return !0
            })
        },
        closest: function(a, b) {
            var c, d = 0, e = this.length, f = [], g = "string" != typeof a && r(a);
            if (!A.test(a))
                for (; d < e; d++)
                    for (c = this[d]; c && c !== b; c = c.parentNode)
                        if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && r.find.matchesSelector(c, a))) {
                            f.push(c);
                            break
                        }
            return this.pushStack(f.length > 1 ? r.uniqueSort(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? i.call(r(a), this[0]) : i.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(r.uniqueSort(r.merge(this.get(), r(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });
    function K(a, b) {
        while ((a = a[b]) && 1 !== a.nodeType)
            ;
        return a
    }
    r.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return y(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return y(a, "parentNode", c)
        },
        next: function(a) {
            return K(a, "nextSibling")
        },
        prev: function(a) {
            return K(a, "previousSibling")
        },
        nextAll: function(a) {
            return y(a, "nextSibling")
        },
        prevAll: function(a) {
            return y(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return y(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return y(a, "previousSibling", c)
        },
        siblings: function(a) {
            return z((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return z(a.firstChild)
        },
        contents: function(a) {
            return B(a, "iframe") ? a.contentDocument : (B(a, "template") && (a = a.content || a),
            r.merge([], a.childNodes))
        }
    }, function(a, b) {
        r.fn[a] = function(c, d) {
            var e = r.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c),
            d && "string" == typeof d && (e = r.filter(d, e)),
            this.length > 1 && (J[a] || r.uniqueSort(e),
            I.test(a) && e.reverse()),
            this.pushStack(e)
        }
    });
    var L = /[^\x20\t\r\n\f]+/g;
    function M(a) {
        var b = {};
        return r.each(a.match(L) || [], function(a, c) {
            b[c] = !0
        }),
        b
    }
    r.Callbacks = function(a) {
        a = "string" == typeof a ? M(a) : r.extend({}, a);
        var b, c, d, e, f = [], g = [], h = -1, i = function() {
            for (e = e || a.once,
            d = b = !0; g.length; h = -1) {
                c = g.shift();
                while (++h < f.length)
                    f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length,
                    c = !1)
            }
            a.memory || (c = !1),
            b = !1,
            e && (f = c ? [] : "")
        }, j = {
            add: function() {
                return f && (c && !b && (h = f.length - 1,
                g.push(c)),
                function d(b) {
                    r.each(b, function(b, c) {
                        r.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== r.type(c) && d(c)
                    })
                }(arguments),
                c && !b && i()),
                this
            },
            remove: function() {
                return r.each(arguments, function(a, b) {
                    var c;
                    while ((c = r.inArray(b, f, c)) > -1)
                        f.splice(c, 1),
                        c <= h && h--
                }),
                this
            },
            has: function(a) {
                return a ? r.inArray(a, f) > -1 : f.length > 0
            },
            empty: function() {
                return f && (f = []),
                this
            },
            disable: function() {
                return e = g = [],
                f = c = "",
                this
            },
            disabled: function() {
                return !f
            },
            lock: function() {
                return e = g = [],
                c || b || (f = c = ""),
                this
            },
            locked: function() {
                return !!e
            },
            fireWith: function(a, c) {
                return e || (c = c || [],
                c = [a, c.slice ? c.slice() : c],
                g.push(c),
                b || i()),
                this
            },
            fire: function() {
                return j.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!d
            }
        };
        return j
    }
    ;
    function N(a) {
        return a
    }
    function O(a) {
        throw a
    }
    function P(a, b, c, d) {
        var e;
        try {
            a && r.isFunction(e = a.promise) ? e.call(a).done(b).fail(c) : a && r.isFunction(e = a.then) ? e.call(a, b, c) : b.apply(void 0, [a].slice(d))
        } catch (a) {
            c.apply(void 0, [a])
        }
    }
    r.extend({
        Deferred: function(b) {
            var c = [["notify", "progress", r.Callbacks("memory"), r.Callbacks("memory"), 2], ["resolve", "done", r.Callbacks("once memory"), r.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", r.Callbacks("once memory"), r.Callbacks("once memory"), 1, "rejected"]]
              , d = "pending"
              , e = {
                state: function() {
                    return d
                },
                always: function() {
                    return f.done(arguments).fail(arguments),
                    this
                },
                "catch": function(a) {
                    return e.then(null, a)
                },
                pipe: function() {
                    var a = arguments;
                    return r.Deferred(function(b) {
                        r.each(c, function(c, d) {
                            var e = r.isFunction(a[d[4]]) && a[d[4]];
                            f[d[1]](function() {
                                var a = e && e.apply(this, arguments);
                                a && r.isFunction(a.promise) ? a.promise().progress(b.notify).done(b.resolve).fail(b.reject) : b[d[0] + "With"](this, e ? [a] : arguments)
                            })
                        }),
                        a = null
                    }).promise()
                },
                then: function(b, d, e) {
                    var f = 0;
                    function g(b, c, d, e) {
                        return function() {
                            var h = this
                              , i = arguments
                              , j = function() {
                                var a, j;
                                if (!(b < f)) {
                                    if (a = d.apply(h, i),
                                    a === c.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    j = a && ("object" == typeof a || "function" == typeof a) && a.then,
                                    r.isFunction(j) ? e ? j.call(a, g(f, c, N, e), g(f, c, O, e)) : (f++,
                                    j.call(a, g(f, c, N, e), g(f, c, O, e), g(f, c, N, c.notifyWith))) : (d !== N && (h = void 0,
                                    i = [a]),
                                    (e || c.resolveWith)(h, i))
                                }
                            }
                              , k = e ? j : function() {
                                try {
                                    j()
                                } catch (a) {
                                    r.Deferred.exceptionHook && r.Deferred.exceptionHook(a, k.stackTrace),
                                    b + 1 >= f && (d !== O && (h = void 0,
                                    i = [a]),
                                    c.rejectWith(h, i))
                                }
                            }
                            ;
                            b ? k() : (r.Deferred.getStackHook && (k.stackTrace = r.Deferred.getStackHook()),
                            a.setTimeout(k))
                        }
                    }
                    return r.Deferred(function(a) {
                        c[0][3].add(g(0, a, r.isFunction(e) ? e : N, a.notifyWith)),
                        c[1][3].add(g(0, a, r.isFunction(b) ? b : N)),
                        c[2][3].add(g(0, a, r.isFunction(d) ? d : O))
                    }).promise()
                },
                promise: function(a) {
                    return null != a ? r.extend(a, e) : e
                }
            }
              , f = {};
            return r.each(c, function(a, b) {
                var g = b[2]
                  , h = b[5];
                e[b[1]] = g.add,
                h && g.add(function() {
                    d = h
                }, c[3 - a][2].disable, c[0][2].lock),
                g.add(b[3].fire),
                f[b[0]] = function() {
                    return f[b[0] + "With"](this === f ? void 0 : this, arguments),
                    this
                }
                ,
                f[b[0] + "With"] = g.fireWith
            }),
            e.promise(f),
            b && b.call(f, f),
            f
        },
        when: function(a) {
            var b = arguments.length
              , c = b
              , d = Array(c)
              , e = f.call(arguments)
              , g = r.Deferred()
              , h = function(a) {
                return function(c) {
                    d[a] = this,
                    e[a] = arguments.length > 1 ? f.call(arguments) : c,
                    --b || g.resolveWith(d, e)
                }
            };
            if (b <= 1 && (P(a, g.done(h(c)).resolve, g.reject, !b),
            "pending" === g.state() || r.isFunction(e[c] && e[c].then)))
                return g.then();
            while (c--)
                P(e[c], h(c), g.reject);
            return g.promise()
        }
    });
    var Q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    r.Deferred.exceptionHook = function(b, c) {
        a.console && a.console.warn && b && Q.test(b.name) && a.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c)
    }
    ,
    r.readyException = function(b) {
        a.setTimeout(function() {
            //throw b
            
        })
    };
    var R = r.Deferred();
    r.fn.ready = function(a) {
        return R.then(a)["catch"](function(a) {
            r.readyException(a)
        }),
        this
    }
    ,
    r.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(a) {
            (a === !0 ? --r.readyWait : r.isReady) || (r.isReady = !0,
            a !== !0 && --r.readyWait > 0 || R.resolveWith(d, [r]))
        }
    }),
    r.ready.then = R.then;
    function S() {
        d.removeEventListener("DOMContentLoaded", S),
        a.removeEventListener("load", S),
        r.ready()
    }
    "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(r.ready) : (d.addEventListener("DOMContentLoaded", S),
    a.addEventListener("load", S));
    var T = function(a, b, c, d, e, f, g) {
        var h = 0
          , i = a.length
          , j = null == c;
        if ("object" === r.type(c)) {
            e = !0;
            for (h in c)
                T(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e = !0,
        r.isFunction(d) || (g = !0),
        j && (g ? (b.call(a, d),
        b = null) : (j = b,
        b = function(a, b, c) {
            return j.call(r(a), c)
        }
        )),
        b))
            for (; h < i; h++)
                b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    }
      , U = function(a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
    };
    function V() {
        this.expando = r.expando + V.uid++
    }
    V.uid = 1,
    V.prototype = {
        cache: function(a) {
            var b = a[this.expando];
            return b || (b = {},
            U(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {
                value: b,
                configurable: !0
            }))),
            b
        },
        set: function(a, b, c) {
            var d, e = this.cache(a);
            if ("string" == typeof b)
                e[r.camelCase(b)] = c;
            else
                for (d in b)
                    e[r.camelCase(d)] = b[d];
            return e
        },
        get: function(a, b) {
            return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][r.camelCase(b)]
        },
        access: function(a, b, c) {
            return void 0 === b || b && "string" == typeof b && void 0 === c ? this.get(a, b) : (this.set(a, b, c),
            void 0 !== c ? c : b)
        },
        remove: function(a, b) {
            var c, d = a[this.expando];
            if (void 0 !== d) {
                if (void 0 !== b) {
                    Array.isArray(b) ? b = b.map(r.camelCase) : (b = r.camelCase(b),
                    b = b in d ? [b] : b.match(L) || []),
                    c = b.length;
                    while (c--)
                        delete d[b[c]]
                }
                (void 0 === b || r.isEmptyObject(d)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando])
            }
        },
        hasData: function(a) {
            var b = a[this.expando];
            return void 0 !== b && !r.isEmptyObject(b)
        }
    };
    var W = new V
      , X = new V
      , Y = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , Z = /[A-Z]/g;
    function $(a) {
        return "true" === a || "false" !== a && ("null" === a ? null : a === +a + "" ? +a : Y.test(a) ? JSON.parse(a) : a)
    }
    function _(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)
            if (d = "data-" + b.replace(Z, "-$&").toLowerCase(),
            c = a.getAttribute(d),
            "string" == typeof c) {
                try {
                    c = $(c)
                } catch (e) {}
                X.set(a, b, c)
            } else
                c = void 0;
        return c
    }
    r.extend({
        hasData: function(a) {
            return X.hasData(a) || W.hasData(a)
        },
        data: function(a, b, c) {
            return X.access(a, b, c)
        },
        removeData: function(a, b) {
            X.remove(a, b)
        },
        _data: function(a, b, c) {
            return W.access(a, b, c)
        },
        _removeData: function(a, b) {
            W.remove(a, b)
        }
    }),
    r.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0], g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = X.get(f),
                1 === f.nodeType && !W.get(f, "hasDataAttrs"))) {
                    c = g.length;
                    while (c--)
                        g[c] && (d = g[c].name,
                        0 === d.indexOf("data-") && (d = r.camelCase(d.slice(5)),
                        _(f, d, e[d])));
                    W.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                X.set(this, a)
            }) : T(this, function(b) {
                var c;
                if (f && void 0 === b) {
                    if (c = X.get(f, a),
                    void 0 !== c)
                        return c;
                    if (c = _(f, a),
                    void 0 !== c)
                        return c
                } else
                    this.each(function() {
                        X.set(this, a, b)
                    })
            }, null, b, arguments.length > 1, null, !0)
        },
        removeData: function(a) {
            return this.each(function() {
                X.remove(this, a)
            })
        }
    }),
    r.extend({
        queue: function(a, b, c) {
            var d;
            if (a)
                return b = (b || "fx") + "queue",
                d = W.get(a, b),
                c && (!d || Array.isArray(c) ? d = W.access(a, b, r.makeArray(c)) : d.push(c)),
                d || []
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = r.queue(a, b)
              , d = c.length
              , e = c.shift()
              , f = r._queueHooks(a, b)
              , g = function() {
                r.dequeue(a, b)
            };
            "inprogress" === e && (e = c.shift(),
            d--),
            e && ("fx" === b && c.unshift("inprogress"),
            delete f.stop,
            e.call(a, g, f)),
            !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return W.get(a, c) || W.access(a, c, {
                empty: r.Callbacks("once memory").add(function() {
                    W.remove(a, [b + "queue", c])
                })
            })
        }
    }),
    r.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a,
            a = "fx",
            c--),
            arguments.length < c ? r.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = r.queue(this, a, b);
                r._queueHooks(this, a),
                "fx" === a && "inprogress" !== c[0] && r.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                r.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1, e = r.Deferred(), f = this, g = this.length, h = function() {
                --d || e.resolveWith(f, [f])
            };
            "string" != typeof a && (b = a,
            a = void 0),
            a = a || "fx";
            while (g--)
                c = W.get(f[g], a + "queueHooks"),
                c && c.empty && (d++,
                c.empty.add(h));
            return h(),
            e.promise(b)
        }
    });
    var aa = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , ba = new RegExp("^(?:([+-])=|)(" + aa + ")([a-z%]*)$","i")
      , ca = ["Top", "Right", "Bottom", "Left"]
      , da = function(a, b) {
        return a = b || a,
        "none" === a.style.display || "" === a.style.display && r.contains(a.ownerDocument, a) && "none" === r.css(a, "display")
    }
      , ea = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b)
            g[f] = a.style[f],
            a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b)
            a.style[f] = g[f];
        return e
    };
    function fa(a, b, c, d) {
        var e, f = 1, g = 20, h = d ? function() {
            return d.cur()
        }
        : function() {
            return r.css(a, b, "")
        }
        , i = h(), j = c && c[3] || (r.cssNumber[b] ? "" : "px"), k = (r.cssNumber[b] || "px" !== j && +i) && ba.exec(r.css(a, b));
        if (k && k[3] !== j) {
            j = j || k[3],
            c = c || [],
            k = +i || 1;
            do
                f = f || ".5",
                k /= f,
                r.style(a, b, k + j);
            while (f !== (f = h() / i) && 1 !== f && --g)
        }
        return c && (k = +k || +i || 0,
        e = c[1] ? k + (c[1] + 1) * c[2] : +c[2],
        d && (d.unit = j,
        d.start = k,
        d.end = e)),
        e
    }
    var ga = {};
    function ha(a) {
        var b, c = a.ownerDocument, d = a.nodeName, e = ga[d];
        return e ? e : (b = c.body.appendChild(c.createElement(d)),
        e = r.css(b, "display"),
        b.parentNode.removeChild(b),
        "none" === e && (e = "block"),
        ga[d] = e,
        e)
    }
    function ia(a, b) {
        for (var c, d, e = [], f = 0, g = a.length; f < g; f++)
            d = a[f],
            d.style && (c = d.style.display,
            b ? ("none" === c && (e[f] = W.get(d, "display") || null,
            e[f] || (d.style.display = "")),
            "" === d.style.display && da(d) && (e[f] = ha(d))) : "none" !== c && (e[f] = "none",
            W.set(d, "display", c)));
        for (f = 0; f < g; f++)
            null != e[f] && (a[f].style.display = e[f]);
        return a
    }
    r.fn.extend({
        show: function() {
            return ia(this, !0)
        },
        hide: function() {
            return ia(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                da(this) ? r(this).show() : r(this).hide()
            })
        }
    });
    var ja = /^(?:checkbox|radio)$/i
      , ka = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i
      , la = /^$|\/(?:java|ecma)script/i
      , ma = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    ma.optgroup = ma.option,
    ma.tbody = ma.tfoot = ma.colgroup = ma.caption = ma.thead,
    ma.th = ma.td;
    function na(a, b) {
        var c;
        return c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [],
        void 0 === b || b && B(a, b) ? r.merge([a], c) : c
    }
    function oa(a, b) {
        for (var c = 0, d = a.length; c < d; c++)
            W.set(a[c], "globalEval", !b || W.get(b[c], "globalEval"))
    }
    var pa = /<|&#?\w+;/;
    function qa(a, b, c, d, e) {
        for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], n = 0, o = a.length; n < o; n++)
            if (f = a[n],
            f || 0 === f)
                if ("object" === r.type(f))
                    r.merge(m, f.nodeType ? [f] : f);
                else if (pa.test(f)) {
                    g = g || l.appendChild(b.createElement("div")),
                    h = (ka.exec(f) || ["", ""])[1].toLowerCase(),
                    i = ma[h] || ma._default,
                    g.innerHTML = i[1] + r.htmlPrefilter(f) + i[2],
                    k = i[0];
                    while (k--)
                        g = g.lastChild;
                    r.merge(m, g.childNodes),
                    g = l.firstChild,
                    g.textContent = ""
                } else
                    m.push(b.createTextNode(f));
        l.textContent = "",
        n = 0;
        while (f = m[n++])
            if (d && r.inArray(f, d) > -1)
                e && e.push(f);
            else if (j = r.contains(f.ownerDocument, f),
            g = na(l.appendChild(f), "script"),
            j && oa(g),
            c) {
                k = 0;
                while (f = g[k++])
                    la.test(f.type || "") && c.push(f)
            }
        return l
    }
    !function() {
        var a = d.createDocumentFragment()
          , b = a.appendChild(d.createElement("div"))
          , c = d.createElement("input");
        c.setAttribute("type", "radio"),
        c.setAttribute("checked", "checked"),
        c.setAttribute("name", "t"),
        b.appendChild(c),
        o.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked,
        b.innerHTML = "<textarea>x</textarea>",
        o.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var ra = d.documentElement
      , sa = /^key/
      , ta = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , ua = /^([^.]*)(?:\.(.+)|)/;
    function va() {
        return !0
    }
    function wa() {
        return !1
    }
    function xa() {
        try {
            return d.activeElement
        } catch (a) {}
    }
    function ya(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) {
            "string" != typeof c && (d = d || c,
            c = void 0);
            for (h in b)
                ya(a, h, c, d, b[h], f);
            return a
        }
        if (null == d && null == e ? (e = c,
        d = c = void 0) : null == e && ("string" == typeof c ? (e = d,
        d = void 0) : (e = d,
        d = c,
        c = void 0)),
        e === !1)
            e = wa;
        else if (!e)
            return a;
        return 1 === f && (g = e,
        e = function(a) {
            return r().off(a),
            g.apply(this, arguments)
        }
        ,
        e.guid = g.guid || (g.guid = r.guid++)),
        a.each(function() {
            r.event.add(this, b, e, d, c)
        })
    }
    r.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = W.get(a);
            if (q) {
                c.handler && (f = c,
                c = f.handler,
                e = f.selector),
                e && r.find.matchesSelector(ra, e),
                c.guid || (c.guid = r.guid++),
                (i = q.events) || (i = q.events = {}),
                (g = q.handle) || (g = q.handle = function(b) {
                    return "undefined" != typeof r && r.event.triggered !== b.type ? r.event.dispatch.apply(a, arguments) : void 0
                }
                ),
                b = (b || "").match(L) || [""],
                j = b.length;
                while (j--)
                    h = ua.exec(b[j]) || [],
                    n = p = h[1],
                    o = (h[2] || "").split(".").sort(),
                    n && (l = r.event.special[n] || {},
                    n = (e ? l.delegateType : l.bindType) || n,
                    l = r.event.special[n] || {},
                    k = r.extend({
                        type: n,
                        origType: p,
                        data: d,
                        handler: c,
                        guid: c.guid,
                        selector: e,
                        needsContext: e && r.expr.match.needsContext.test(e),
                        namespace: o.join(".")
                    }, f),
                    (m = i[n]) || (m = i[n] = [],
                    m.delegateCount = 0,
                    l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g)),
                    l.add && (l.add.call(a, k),
                    k.handler.guid || (k.handler.guid = c.guid)),
                    e ? m.splice(m.delegateCount++, 0, k) : m.push(k),
                    r.event.global[n] = !0)
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = W.hasData(a) && W.get(a);
            if (q && (i = q.events)) {
                b = (b || "").match(L) || [""],
                j = b.length;
                while (j--)
                    if (h = ua.exec(b[j]) || [],
                    n = p = h[1],
                    o = (h[2] || "").split(".").sort(),
                    n) {
                        l = r.event.special[n] || {},
                        n = (d ? l.delegateType : l.bindType) || n,
                        m = i[n] || [],
                        h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        g = f = m.length;
                        while (f--)
                            k = m[f],
                            !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1),
                            k.selector && m.delegateCount--,
                            l.remove && l.remove.call(a, k));
                        g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || r.removeEvent(a, n, q.handle),
                        delete i[n])
                    } else
                        for (n in i)
                            r.event.remove(a, n + b[j], c, d, !0);
                r.isEmptyObject(i) && W.remove(a, "handle events")
            }
        },
        dispatch: function(a) {
            var b = r.event.fix(a), c, d, e, f, g, h, i = new Array(arguments.length), j = (W.get(this, "events") || {})[b.type] || [], k = r.event.special[b.type] || {};
            for (i[0] = b,
            c = 1; c < arguments.length; c++)
                i[c] = arguments[c];
            if (b.delegateTarget = this,
            !k.preDispatch || k.preDispatch.call(this, b) !== !1) {
                h = r.event.handlers.call(this, b, j),
                c = 0;
                while ((f = h[c++]) && !b.isPropagationStopped()) {
                    b.currentTarget = f.elem,
                    d = 0;
                    while ((g = f.handlers[d++]) && !b.isImmediatePropagationStopped())
                        b.rnamespace && !b.rnamespace.test(g.namespace) || (b.handleObj = g,
                        b.data = g.data,
                        e = ((r.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i),
                        void 0 !== e && (b.result = e) === !1 && (b.preventDefault(),
                        b.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, b),
                b.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g, h = [], i = b.delegateCount, j = a.target;
            if (i && j.nodeType && !("click" === a.type && a.button >= 1))
                for (; j !== this; j = j.parentNode || this)
                    if (1 === j.nodeType && ("click" !== a.type || j.disabled !== !0)) {
                        for (f = [],
                        g = {},
                        c = 0; c < i; c++)
                            d = b[c],
                            e = d.selector + " ",
                            void 0 === g[e] && (g[e] = d.needsContext ? r(e, this).index(j) > -1 : r.find(e, this, null, [j]).length),
                            g[e] && f.push(d);
                        f.length && h.push({
                            elem: j,
                            handlers: f
                        })
                    }
            return j = this,
            i < b.length && h.push({
                elem: j,
                handlers: b.slice(i)
            }),
            h
        },
        addProp: function(a, b) {
            Object.defineProperty(r.Event.prototype, a, {
                enumerable: !0,
                configurable: !0,
                get: r.isFunction(b) ? function() {
                    if (this.originalEvent)
                        return b(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[a]
                }
                ,
                set: function(b) {
                    Object.defineProperty(this, a, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: b
                    })
                }
            })
        },
        fix: function(a) {
            return a[r.expando] ? a : new r.Event(a)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== xa() && this.focus)
                        return this.focus(),
                        !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === xa() && this.blur)
                        return this.blur(),
                        !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && B(this, "input"))
                        return this.click(),
                        !1
                },
                _default: function(a) {
                    return B(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        }
    },
    r.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c)
    }
    ,
    r.Event = function(a, b) {
        return this instanceof r.Event ? (a && a.type ? (this.originalEvent = a,
        this.type = a.type,
        this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? va : wa,
        this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target,
        this.currentTarget = a.currentTarget,
        this.relatedTarget = a.relatedTarget) : this.type = a,
        b && r.extend(this, b),
        this.timeStamp = a && a.timeStamp || r.now(),
        void (this[r.expando] = !0)) : new r.Event(a,b)
    }
    ,
    r.Event.prototype = {
        constructor: r.Event,
        isDefaultPrevented: wa,
        isPropagationStopped: wa,
        isImmediatePropagationStopped: wa,
        isSimulated: !1,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = va,
            a && !this.isSimulated && a.preventDefault()
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = va,
            a && !this.isSimulated && a.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = va,
            a && !this.isSimulated && a.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    r.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(a) {
            var b = a.button;
            return null == a.which && sa.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && ta.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which
        }
    }, r.event.addProp),
    r.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        r.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return e && (e === d || r.contains(d, e)) || (a.type = f.origType,
                c = f.handler.apply(this, arguments),
                a.type = b),
                c
            }
        }
    }),
    r.fn.extend({
        on: function(a, b, c, d) {
            return ya(this, a, b, c, d)
        },
        one: function(a, b, c, d) {
            return ya(this, a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj)
                return d = a.handleObj,
                r(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler),
                this;
            if ("object" == typeof a) {
                for (e in a)
                    this.off(e, b, a[e]);
                return this
            }
            return b !== !1 && "function" != typeof b || (c = b,
            b = void 0),
            c === !1 && (c = wa),
            this.each(function() {
                r.event.remove(this, a, c, b)
            })
        }
    });
    var za = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
      , Aa = /<script|<style|<link/i
      , Ba = /checked\s*(?:[^=]|=\s*.checked.)/i
      , Ca = /^true\/(.*)/
      , Da = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function Ea(a, b) {
        return B(a, "table") && B(11 !== b.nodeType ? b : b.firstChild, "tr") ? r(">tbody", a)[0] || a : a
    }
    function Fa(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type,
        a
    }
    function Ga(a) {
        var b = Ca.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"),
        a
    }
    function Ha(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (W.hasData(a) && (f = W.access(a),
            g = W.set(b, f),
            j = f.events)) {
                delete g.handle,
                g.events = {};
                for (e in j)
                    for (c = 0,
                    d = j[e].length; c < d; c++)
                        r.event.add(b, e, j[e][c])
            }
            X.hasData(a) && (h = X.access(a),
            i = r.extend({}, h),
            X.set(b, i))
        }
    }
    function Ia(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && ja.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
    }
    function Ja(a, b, c, d) {
        b = g.apply([], b);
        var e, f, h, i, j, k, l = 0, m = a.length, n = m - 1, q = b[0], s = r.isFunction(q);
        if (s || m > 1 && "string" == typeof q && !o.checkClone && Ba.test(q))
            return a.each(function(e) {
                var f = a.eq(e);
                s && (b[0] = q.call(this, e, f.html())),
                Ja(f, b, c, d)
            });
        if (m && (e = qa(b, a[0].ownerDocument, !1, a, d),
        f = e.firstChild,
        1 === e.childNodes.length && (e = f),
        f || d)) {
            for (h = r.map(na(e, "script"), Fa),
            i = h.length; l < m; l++)
                j = e,
                l !== n && (j = r.clone(j, !0, !0),
                i && r.merge(h, na(j, "script"))),
                c.call(a[l], j, l);
            if (i)
                for (k = h[h.length - 1].ownerDocument,
                r.map(h, Ga),
                l = 0; l < i; l++)
                    j = h[l],
                    la.test(j.type || "") && !W.access(j, "globalEval") && r.contains(k, j) && (j.src ? r._evalUrl && r._evalUrl(j.src) : p(j.textContent.replace(Da, ""), k))
        }
        return a
    }
    function Ka(a, b, c) {
        for (var d, e = b ? r.filter(b, a) : a, f = 0; null != (d = e[f]); f++)
            c || 1 !== d.nodeType || r.cleanData(na(d)),
            d.parentNode && (c && r.contains(d.ownerDocument, d) && oa(na(d, "script")),
            d.parentNode.removeChild(d));
        return a
    }
    r.extend({
        htmlPrefilter: function(a) {
            return a.replace(za, "<$1></$2>")
        },
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0), i = r.contains(a.ownerDocument, a);
            if (!(o.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || r.isXMLDoc(a)))
                for (g = na(h),
                f = na(a),
                d = 0,
                e = f.length; d < e; d++)
                    Ia(f[d], g[d]);
            if (b)
                if (c)
                    for (f = f || na(a),
                    g = g || na(h),
                    d = 0,
                    e = f.length; d < e; d++)
                        Ha(f[d], g[d]);
                else
                    Ha(a, h);
            return g = na(h, "script"),
            g.length > 0 && oa(g, !i && na(a, "script")),
            h
        },
        cleanData: function(a) {
            for (var b, c, d, e = r.event.special, f = 0; void 0 !== (c = a[f]); f++)
                if (U(c)) {
                    if (b = c[W.expando]) {
                        if (b.events)
                            for (d in b.events)
                                e[d] ? r.event.remove(c, d) : r.removeEvent(c, d, b.handle);
                        c[W.expando] = void 0
                    }
                    c[X.expando] && (c[X.expando] = void 0)
                }
        }
    }),
    r.fn.extend({
        detach: function(a) {
            return Ka(this, a, !0)
        },
        remove: function(a) {
            return Ka(this, a)
        },
        text: function(a) {
            return T(this, function(a) {
                return void 0 === a ? r.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a)
                })
            }, null, a, arguments.length)
        },
        append: function() {
            return Ja(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Ea(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return Ja(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Ea(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return Ja(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return Ja(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++)
                1 === a.nodeType && (r.cleanData(na(a, !1)),
                a.textContent = "");
            return this
        },
        clone: function(a, b) {
            return a = null != a && a,
            b = null == b ? a : b,
            this.map(function() {
                return r.clone(this, a, b)
            })
        },
        html: function(a) {
            return T(this, function(a) {
                var b = this[0] || {}
                  , c = 0
                  , d = this.length;
                if (void 0 === a && 1 === b.nodeType)
                    return b.innerHTML;
                if ("string" == typeof a && !Aa.test(a) && !ma[(ka.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = r.htmlPrefilter(a);
                    try {
                        for (; c < d; c++)
                            b = this[c] || {},
                            1 === b.nodeType && (r.cleanData(na(b, !1)),
                            b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = [];
            return Ja(this, arguments, function(b) {
                var c = this.parentNode;
                r.inArray(this, a) < 0 && (r.cleanData(na(this)),
                c && c.replaceChild(b, this))
            }, a)
        }
    }),
    r.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        r.fn[a] = function(a) {
            for (var c, d = [], e = r(a), f = e.length - 1, g = 0; g <= f; g++)
                c = g === f ? this : this.clone(!0),
                r(e[g])[b](c),
                h.apply(d, c.get());
            return this.pushStack(d)
        }
    });
    var La = /^margin/
      , Ma = new RegExp("^(" + aa + ")(?!px)[a-z%]+$","i")
      , Na = function(b) {
        var c = b.ownerDocument.defaultView;
        return c && c.opener || (c = a),
        c.getComputedStyle(b)
    };
    !function() {
        function b() {
            if (i) {
                i.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
                i.innerHTML = "",
                ra.appendChild(h);
                var b = a.getComputedStyle(i);
                c = "1%" !== b.top,
                g = "2px" === b.marginLeft,
                e = "4px" === b.width,
                i.style.marginRight = "50%",
                f = "4px" === b.marginRight,
                ra.removeChild(h),
                i = null
            }
        }
        var c, e, f, g, h = d.createElement("div"), i = d.createElement("div");
        i.style && (i.style.backgroundClip = "content-box",
        i.cloneNode(!0).style.backgroundClip = "",
        o.clearCloneStyle = "content-box" === i.style.backgroundClip,
        h.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
        h.appendChild(i),
        r.extend(o, {
            pixelPosition: function() {
                return b(),
                c
            },
            boxSizingReliable: function() {
                return b(),
                e
            },
            pixelMarginRight: function() {
                return b(),
                f
            },
            reliableMarginLeft: function() {
                return b(),
                g
            }
        }))
    }();
    function Oa(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Na(a),
        c && (g = c.getPropertyValue(b) || c[b],
        "" !== g || r.contains(a.ownerDocument, a) || (g = r.style(a, b)),
        !o.pixelMarginRight() && Ma.test(g) && La.test(b) && (d = h.width,
        e = h.minWidth,
        f = h.maxWidth,
        h.minWidth = h.maxWidth = h.width = g,
        g = c.width,
        h.width = d,
        h.minWidth = e,
        h.maxWidth = f)),
        void 0 !== g ? g + "" : g
    }
    function Pa(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }
    var Qa = /^(none|table(?!-c[ea]).+)/
      , Ra = /^--/
      , Sa = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , Ta = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , Ua = ["Webkit", "Moz", "ms"]
      , Va = d.createElement("div").style;
    function Wa(a) {
        if (a in Va)
            return a;
        var b = a[0].toUpperCase() + a.slice(1)
          , c = Ua.length;
        while (c--)
            if (a = Ua[c] + b,
            a in Va)
                return a
    }
    function Xa(a) {
        var b = r.cssProps[a];
        return b || (b = r.cssProps[a] = Wa(a) || a),
        b
    }
    function Ya(a, b, c) {
        var d = ba.exec(b);
        return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b
    }
    function Za(a, b, c, d, e) {
        var f, g = 0;
        for (f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0; f < 4; f += 2)
            "margin" === c && (g += r.css(a, c + ca[f], !0, e)),
            d ? ("content" === c && (g -= r.css(a, "padding" + ca[f], !0, e)),
            "margin" !== c && (g -= r.css(a, "border" + ca[f] + "Width", !0, e))) : (g += r.css(a, "padding" + ca[f], !0, e),
            "padding" !== c && (g += r.css(a, "border" + ca[f] + "Width", !0, e)));
        return g
    }
    function $a(a, b, c) {
        var d, e = Na(a), f = Oa(a, b, e), g = "border-box" === r.css(a, "boxSizing", !1, e);
        return Ma.test(f) ? f : (d = g && (o.boxSizingReliable() || f === a.style[b]),
        "auto" === f && (f = a["offset" + b[0].toUpperCase() + b.slice(1)]),
        f = parseFloat(f) || 0,
        f + Za(a, b, c || (g ? "border" : "content"), d, e) + "px")
    }
    r.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Oa(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = r.camelCase(b), i = Ra.test(b), j = a.style;
                return i || (b = Xa(h)),
                g = r.cssHooks[b] || r.cssHooks[h],
                void 0 === c ? g && "get"in g && void 0 !== (e = g.get(a, !1, d)) ? e : j[b] : (f = typeof c,
                "string" === f && (e = ba.exec(c)) && e[1] && (c = fa(a, b, e),
                f = "number"),
                null != c && c === c && ("number" === f && (c += e && e[3] || (r.cssNumber[h] ? "" : "px")),
                o.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (j[b] = "inherit"),
                g && "set"in g && void 0 === (c = g.set(a, c, d)) || (i ? j.setProperty(b, c) : j[b] = c)),
                void 0)
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = r.camelCase(b), i = Ra.test(b);
            return i || (b = Xa(h)),
            g = r.cssHooks[b] || r.cssHooks[h],
            g && "get"in g && (e = g.get(a, !0, c)),
            void 0 === e && (e = Oa(a, b, d)),
            "normal" === e && b in Ta && (e = Ta[b]),
            "" === c || c ? (f = parseFloat(e),
            c === !0 || isFinite(f) ? f || 0 : e) : e
        }
    }),
    r.each(["height", "width"], function(a, b) {
        r.cssHooks[b] = {
            get: function(a, c, d) {
                if (c)
                    return !Qa.test(r.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? $a(a, b, d) : ea(a, Sa, function() {
                        return $a(a, b, d)
                    })
            },
            set: function(a, c, d) {
                var e, f = d && Na(a), g = d && Za(a, b, d, "border-box" === r.css(a, "boxSizing", !1, f), f);
                return g && (e = ba.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c,
                c = r.css(a, b)),
                Ya(a, c, g)
            }
        }
    }),
    r.cssHooks.marginLeft = Pa(o.reliableMarginLeft, function(a, b) {
        if (b)
            return (parseFloat(Oa(a, "marginLeft")) || a.getBoundingClientRect().left - ea(a, {
                marginLeft: 0
            }, function() {
                return a.getBoundingClientRect().left
            })) + "px"
    }),
    r.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        r.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; d < 4; d++)
                    e[a + ca[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        },
        La.test(a) || (r.cssHooks[a + b].set = Ya)
    }),
    r.fn.extend({
        css: function(a, b) {
            return T(this, function(a, b, c) {
                var d, e, f = {}, g = 0;
                if (Array.isArray(b)) {
                    for (d = Na(a),
                    e = b.length; g < e; g++)
                        f[b[g]] = r.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? r.style(a, b, c) : r.css(a, b)
            }, a, b, arguments.length > 1)
        }
    });
    function _a(a, b, c, d, e) {
        return new _a.prototype.init(a,b,c,d,e)
    }
    r.Tween = _a,
    _a.prototype = {
        constructor: _a,
        init: function(a, b, c, d, e, f) {
            this.elem = a,
            this.prop = c,
            this.easing = e || r.easing._default,
            this.options = b,
            this.start = this.now = this.cur(),
            this.end = d,
            this.unit = f || (r.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = _a.propHooks[this.prop];
            return a && a.get ? a.get(this) : _a.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = _a.propHooks[this.prop];
            return this.options.duration ? this.pos = b = r.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a,
            this.now = (this.end - this.start) * b + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            c && c.set ? c.set(this) : _a.propHooks._default.set(this),
            this
        }
    },
    _a.prototype.init.prototype = _a.prototype,
    _a.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = r.css(a.elem, a.prop, ""),
                b && "auto" !== b ? b : 0)
            },
            set: function(a) {
                r.fx.step[a.prop] ? r.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[r.cssProps[a.prop]] && !r.cssHooks[a.prop] ? a.elem[a.prop] = a.now : r.style(a.elem, a.prop, a.now + a.unit)
            }
        }
    },
    _a.propHooks.scrollTop = _a.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    },
    r.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        },
        _default: "swing"
    },
    r.fx = _a.prototype.init,
    r.fx.step = {};
    var ab, bb, cb = /^(?:toggle|show|hide)$/, db = /queueHooks$/;
    function eb() {
        bb && (d.hidden === !1 && a.requestAnimationFrame ? a.requestAnimationFrame(eb) : a.setTimeout(eb, r.fx.interval),
        r.fx.tick())
    }
    function fb() {
        return a.setTimeout(function() {
            ab = void 0
        }),
        ab = r.now()
    }
    function gb(a, b) {
        var c, d = 0, e = {
            height: a
        };
        for (b = b ? 1 : 0; d < 4; d += 2 - b)
            c = ca[d],
            e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a),
        e
    }
    function hb(a, b, c) {
        for (var d, e = (kb.tweeners[b] || []).concat(kb.tweeners["*"]), f = 0, g = e.length; f < g; f++)
            if (d = e[f].call(c, b, a))
                return d
    }
    function ib(a, b, c) {
        var d, e, f, g, h, i, j, k, l = "width"in b || "height"in b, m = this, n = {}, o = a.style, p = a.nodeType && da(a), q = W.get(a, "fxshow");
        c.queue || (g = r._queueHooks(a, "fx"),
        null == g.unqueued && (g.unqueued = 0,
        h = g.empty.fire,
        g.empty.fire = function() {
            g.unqueued || h()
        }
        ),
        g.unqueued++,
        m.always(function() {
            m.always(function() {
                g.unqueued--,
                r.queue(a, "fx").length || g.empty.fire()
            })
        }));
        for (d in b)
            if (e = b[d],
            cb.test(e)) {
                if (delete b[d],
                f = f || "toggle" === e,
                e === (p ? "hide" : "show")) {
                    if ("show" !== e || !q || void 0 === q[d])
                        continue;
                    p = !0
                }
                n[d] = q && q[d] || r.style(a, d)
            }
        if (i = !r.isEmptyObject(b),
        i || !r.isEmptyObject(n)) {
            l && 1 === a.nodeType && (c.overflow = [o.overflow, o.overflowX, o.overflowY],
            j = q && q.display,
            null == j && (j = W.get(a, "display")),
            k = r.css(a, "display"),
            "none" === k && (j ? k = j : (ia([a], !0),
            j = a.style.display || j,
            k = r.css(a, "display"),
            ia([a]))),
            ("inline" === k || "inline-block" === k && null != j) && "none" === r.css(a, "float") && (i || (m.done(function() {
                o.display = j
            }),
            null == j && (k = o.display,
            j = "none" === k ? "" : k)),
            o.display = "inline-block")),
            c.overflow && (o.overflow = "hidden",
            m.always(function() {
                o.overflow = c.overflow[0],
                o.overflowX = c.overflow[1],
                o.overflowY = c.overflow[2]
            })),
            i = !1;
            for (d in n)
                i || (q ? "hidden"in q && (p = q.hidden) : q = W.access(a, "fxshow", {
                    display: j
                }),
                f && (q.hidden = !p),
                p && ia([a], !0),
                m.done(function() {
                    p || ia([a]),
                    W.remove(a, "fxshow");
                    for (d in n)
                        r.style(a, d, n[d])
                })),
                i = hb(p ? q[d] : 0, d, m),
                d in q || (q[d] = i.start,
                p && (i.end = i.start,
                i.start = 0))
        }
    }
    function jb(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = r.camelCase(c),
            e = b[d],
            f = a[c],
            Array.isArray(f) && (e = f[1],
            f = a[c] = f[0]),
            c !== d && (a[d] = f,
            delete a[c]),
            g = r.cssHooks[d],
            g && "expand"in g) {
                f = g.expand(f),
                delete a[d];
                for (c in f)
                    c in a || (a[c] = f[c],
                    b[c] = e)
            } else
                b[d] = e
    }
    function kb(a, b, c) {
        var d, e, f = 0, g = kb.prefilters.length, h = r.Deferred().always(function() {
            delete i.elem
        }), i = function() {
            if (e)
                return !1;
            for (var b = ab || fb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; g < i; g++)
                j.tweens[g].run(f);
            return h.notifyWith(a, [j, f, c]),
            f < 1 && i ? c : (i || h.notifyWith(a, [j, 1, 0]),
            h.resolveWith(a, [j]),
            !1)
        }, j = h.promise({
            elem: a,
            props: r.extend({}, b),
            opts: r.extend(!0, {
                specialEasing: {},
                easing: r.easing._default
            }, c),
            originalProperties: b,
            originalOptions: c,
            startTime: ab || fb(),
            duration: c.duration,
            tweens: [],
            createTween: function(b, c) {
                var d = r.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d),
                d
            },
            stop: function(b) {
                var c = 0
                  , d = b ? j.tweens.length : 0;
                if (e)
                    return this;
                for (e = !0; c < d; c++)
                    j.tweens[c].run(1);
                return b ? (h.notifyWith(a, [j, 1, 0]),
                h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]),
                this
            }
        }), k = j.props;
        for (jb(k, j.opts.specialEasing); f < g; f++)
            if (d = kb.prefilters[f].call(j, a, k, j.opts))
                return r.isFunction(d.stop) && (r._queueHooks(j.elem, j.opts.queue).stop = r.proxy(d.stop, d)),
                d;
        return r.map(k, hb, j),
        r.isFunction(j.opts.start) && j.opts.start.call(a, j),
        j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always),
        r.fx.timer(r.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })),
        j
    }
    r.Animation = r.extend(kb, {
        tweeners: {
            "*": [function(a, b) {
                var c = this.createTween(a, b);
                return fa(c.elem, a, ba.exec(b), c),
                c
            }
            ]
        },
        tweener: function(a, b) {
            r.isFunction(a) ? (b = a,
            a = ["*"]) : a = a.match(L);
            for (var c, d = 0, e = a.length; d < e; d++)
                c = a[d],
                kb.tweeners[c] = kb.tweeners[c] || [],
                kb.tweeners[c].unshift(b)
        },
        prefilters: [ib],
        prefilter: function(a, b) {
            b ? kb.prefilters.unshift(a) : kb.prefilters.push(a)
        }
    }),
    r.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? r.extend({}, a) : {
            complete: c || !c && b || r.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !r.isFunction(b) && b
        };
        return r.fx.off ? d.duration = 0 : "number" != typeof d.duration && (d.duration in r.fx.speeds ? d.duration = r.fx.speeds[d.duration] : d.duration = r.fx.speeds._default),
        null != d.queue && d.queue !== !0 || (d.queue = "fx"),
        d.old = d.complete,
        d.complete = function() {
            r.isFunction(d.old) && d.old.call(this),
            d.queue && r.dequeue(this, d.queue)
        }
        ,
        d
    }
    ,
    r.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(da).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function(a, b, c, d) {
            var e = r.isEmptyObject(a)
              , f = r.speed(b, c, d)
              , g = function() {
                var b = kb(this, r.extend({}, a), f);
                (e || W.get(this, "finish")) && b.stop(!0)
            };
            return g.finish = g,
            e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        },
        stop: function(a, b, c) {
            var d = function(a) {
                var b = a.stop;
                delete a.stop,
                b(c)
            };
            return "string" != typeof a && (c = b,
            b = a,
            a = void 0),
            b && a !== !1 && this.queue(a || "fx", []),
            this.each(function() {
                var b = !0
                  , e = null != a && a + "queueHooks"
                  , f = r.timers
                  , g = W.get(this);
                if (e)
                    g[e] && g[e].stop && d(g[e]);
                else
                    for (e in g)
                        g[e] && g[e].stop && db.test(e) && d(g[e]);
                for (e = f.length; e--; )
                    f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c),
                    b = !1,
                    f.splice(e, 1));
                !b && c || r.dequeue(this, a)
            })
        },
        finish: function(a) {
            return a !== !1 && (a = a || "fx"),
            this.each(function() {
                var b, c = W.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = r.timers, g = d ? d.length : 0;
                for (c.finish = !0,
                r.queue(this, a, []),
                e && e.stop && e.stop.call(this, !0),
                b = f.length; b--; )
                    f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0),
                    f.splice(b, 1));
                for (b = 0; b < g; b++)
                    d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    }),
    r.each(["toggle", "show", "hide"], function(a, b) {
        var c = r.fn[b];
        r.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(gb(b, !0), a, d, e)
        }
    }),
    r.each({
        slideDown: gb("show"),
        slideUp: gb("hide"),
        slideToggle: gb("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        r.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }),
    r.timers = [],
    r.fx.tick = function() {
        var a, b = 0, c = r.timers;
        for (ab = r.now(); b < c.length; b++)
            a = c[b],
            a() || c[b] !== a || c.splice(b--, 1);
        c.length || r.fx.stop(),
        ab = void 0
    }
    ,
    r.fx.timer = function(a) {
        r.timers.push(a),
        r.fx.start()
    }
    ,
    r.fx.interval = 13,
    r.fx.start = function() {
        bb || (bb = !0,
        eb())
    }
    ,
    r.fx.stop = function() {
        bb = null
    }
    ,
    r.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    r.fn.delay = function(b, c) {
        return b = r.fx ? r.fx.speeds[b] || b : b,
        c = c || "fx",
        this.queue(c, function(c, d) {
            var e = a.setTimeout(c, b);
            d.stop = function() {
                a.clearTimeout(e)
            }
        })
    }
    ,
    function() {
        var a = d.createElement("input")
          , b = d.createElement("select")
          , c = b.appendChild(d.createElement("option"));
        a.type = "checkbox",
        o.checkOn = "" !== a.value,
        o.optSelected = c.selected,
        a = d.createElement("input"),
        a.value = "t",
        a.type = "radio",
        o.radioValue = "t" === a.value
    }();
    var lb, mb = r.expr.attrHandle;
    r.fn.extend({
        attr: function(a, b) {
            return T(this, r.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                r.removeAttr(this, a)
            })
        }
    }),
    r.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f)
                return "undefined" == typeof a.getAttribute ? r.prop(a, b, c) : (1 === f && r.isXMLDoc(a) || (e = r.attrHooks[b.toLowerCase()] || (r.expr.match.bool.test(b) ? lb : void 0)),
                void 0 !== c ? null === c ? void r.removeAttr(a, b) : e && "set"in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""),
                c) : e && "get"in e && null !== (d = e.get(a, b)) ? d : (d = r.find.attr(a, b),
                null == d ? void 0 : d))
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!o.radioValue && "radio" === b && B(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b),
                        c && (a.value = c),
                        b
                    }
                }
            }
        },
        removeAttr: function(a, b) {
            var c, d = 0, e = b && b.match(L);
            if (e && 1 === a.nodeType)
                while (c = e[d++])
                    a.removeAttribute(c)
        }
    }),
    lb = {
        set: function(a, b, c) {
            return b === !1 ? r.removeAttr(a, c) : a.setAttribute(c, c),
            c
        }
    },
    r.each(r.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = mb[b] || r.find.attr;
        mb[b] = function(a, b, d) {
            var e, f, g = b.toLowerCase();
            return d || (f = mb[g],
            mb[g] = e,
            e = null != c(a, b, d) ? g : null,
            mb[g] = f),
            e
        }
    });
    var nb = /^(?:input|select|textarea|button)$/i
      , ob = /^(?:a|area)$/i;
    r.fn.extend({
        prop: function(a, b) {
            return T(this, r.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[r.propFix[a] || a]
            })
        }
    }),
    r.extend({
        prop: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f)
                return 1 === f && r.isXMLDoc(a) || (b = r.propFix[b] || b,
                e = r.propHooks[b]),
                void 0 !== c ? e && "set"in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get"in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = r.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : nb.test(a.nodeName) || ob.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }),
    o.optSelected || (r.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex,
            null
        },
        set: function(a) {
            var b = a.parentNode;
            b && (b.selectedIndex,
            b.parentNode && b.parentNode.selectedIndex)
        }
    }),
    r.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        r.propFix[this.toLowerCase()] = this
    });
    function pb(a) {
        var b = a.match(L) || [];
        return b.join(" ")
    }
    function qb(a) {
        return a.getAttribute && a.getAttribute("class") || ""
    }
    r.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (r.isFunction(a))
                return this.each(function(b) {
                    r(this).addClass(a.call(this, b, qb(this)))
                });
            if ("string" == typeof a && a) {
                b = a.match(L) || [];
                while (c = this[i++])
                    if (e = qb(c),
                    d = 1 === c.nodeType && " " + pb(e) + " ") {
                        g = 0;
                        while (f = b[g++])
                            d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                        h = pb(d),
                        e !== h && c.setAttribute("class", h)
                    }
            }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (r.isFunction(a))
                return this.each(function(b) {
                    r(this).removeClass(a.call(this, b, qb(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ("string" == typeof a && a) {
                b = a.match(L) || [];
                while (c = this[i++])
                    if (e = qb(c),
                    d = 1 === c.nodeType && " " + pb(e) + " ") {
                        g = 0;
                        while (f = b[g++])
                            while (d.indexOf(" " + f + " ") > -1)
                                d = d.replace(" " + f + " ", " ");
                        h = pb(d),
                        e !== h && c.setAttribute("class", h)
                    }
            }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : r.isFunction(a) ? this.each(function(c) {
                r(this).toggleClass(a.call(this, c, qb(this), b), b)
            }) : this.each(function() {
                var b, d, e, f;
                if ("string" === c) {
                    d = 0,
                    e = r(this),
                    f = a.match(L) || [];
                    while (b = f[d++])
                        e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else
                    void 0 !== a && "boolean" !== c || (b = qb(this),
                    b && W.set(this, "__className__", b),
                    this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : W.get(this, "__className__") || ""))
            })
        },
        hasClass: function(a) {
            var b, c, d = 0;
            b = " " + a + " ";
            while (c = this[d++])
                if (1 === c.nodeType && (" " + pb(qb(c)) + " ").indexOf(b) > -1)
                    return !0;
            return !1
        }
    });
    var rb = /\r/g;
    r.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0];
            {
                if (arguments.length)
                    return d = r.isFunction(a),
                    this.each(function(c) {
                        var e;
                        1 === this.nodeType && (e = d ? a.call(this, c, r(this).val()) : a,
                        null == e ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = r.map(e, function(a) {
                            return null == a ? "" : a + ""
                        })),
                        b = r.valHooks[this.type] || r.valHooks[this.nodeName.toLowerCase()],
                        b && "set"in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                    });
                if (e)
                    return b = r.valHooks[e.type] || r.valHooks[e.nodeName.toLowerCase()],
                    b && "get"in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value,
                    "string" == typeof c ? c.replace(rb, "") : null == c ? "" : c)
            }
        }
    }),
    r.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = r.find.attr(a, "value");
                    return null != b ? b : pb(r.text(a))
                }
            },
            select: {
                get: function(a) {
                    var b, c, d, e = a.options, f = a.selectedIndex, g = "select-one" === a.type, h = g ? null : [], i = g ? f + 1 : e.length;
                    for (d = f < 0 ? i : g ? f : 0; d < i; d++)
                        if (c = e[d],
                        (c.selected || d === f) && !c.disabled && (!c.parentNode.disabled || !B(c.parentNode, "optgroup"))) {
                            if (b = r(c).val(),
                            g)
                                return b;
                            h.push(b)
                        }
                    return h
                },
                set: function(a, b) {
                    var c, d, e = a.options, f = r.makeArray(b), g = e.length;
                    while (g--)
                        d = e[g],
                        (d.selected = r.inArray(r.valHooks.option.get(d), f) > -1) && (c = !0);
                    return c || (a.selectedIndex = -1),
                    f
                }
            }
        }
    }),
    r.each(["radio", "checkbox"], function() {
        r.valHooks[this] = {
            set: function(a, b) {
                if (Array.isArray(b))
                    return a.checked = r.inArray(r(a).val(), b) > -1
            }
        },
        o.checkOn || (r.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        }
        )
    });
    var sb = /^(?:focusinfocus|focusoutblur)$/;
    r.extend(r.event, {
        trigger: function(b, c, e, f) {
            var g, h, i, j, k, m, n, o = [e || d], p = l.call(b, "type") ? b.type : b, q = l.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = i = e = e || d,
            3 !== e.nodeType && 8 !== e.nodeType && !sb.test(p + r.event.triggered) && (p.indexOf(".") > -1 && (q = p.split("."),
            p = q.shift(),
            q.sort()),
            k = p.indexOf(":") < 0 && "on" + p,
            b = b[r.expando] ? b : new r.Event(p,"object" == typeof b && b),
            b.isTrigger = f ? 2 : 3,
            b.namespace = q.join("."),
            b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            b.result = void 0,
            b.target || (b.target = e),
            c = null == c ? [b] : r.makeArray(c, [b]),
            n = r.event.special[p] || {},
            f || !n.trigger || n.trigger.apply(e, c) !== !1)) {
                if (!f && !n.noBubble && !r.isWindow(e)) {
                    for (j = n.delegateType || p,
                    sb.test(j + p) || (h = h.parentNode); h; h = h.parentNode)
                        o.push(h),
                        i = h;
                    i === (e.ownerDocument || d) && o.push(i.defaultView || i.parentWindow || a)
                }
                g = 0;
                while ((h = o[g++]) && !b.isPropagationStopped())
                    b.type = g > 1 ? j : n.bindType || p,
                    m = (W.get(h, "events") || {})[b.type] && W.get(h, "handle"),
                    m && m.apply(h, c),
                    m = k && h[k],
                    m && m.apply && U(h) && (b.result = m.apply(h, c),
                    b.result === !1 && b.preventDefault());
                return b.type = p,
                f || b.isDefaultPrevented() || n._default && n._default.apply(o.pop(), c) !== !1 || !U(e) || k && r.isFunction(e[p]) && !r.isWindow(e) && (i = e[k],
                i && (e[k] = null),
                r.event.triggered = p,
                e[p](),
                r.event.triggered = void 0,
                i && (e[k] = i)),
                b.result
            }
        },
        simulate: function(a, b, c) {
            var d = r.extend(new r.Event, c, {
                type: a,
                isSimulated: !0
            });
            r.event.trigger(d, null, b)
        }
    }),
    r.fn.extend({
        trigger: function(a, b) {
            return this.each(function() {
                r.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            if (c)
                return r.event.trigger(a, b, c, !0)
        }
    }),
    r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(a, b) {
        r.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }),
    r.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    }),
    o.focusin = "onfocusin"in a,
    o.focusin || r.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            r.event.simulate(b, a.target, r.event.fix(a))
        };
        r.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this
                  , e = W.access(d, b);
                e || d.addEventListener(a, c, !0),
                W.access(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this
                  , e = W.access(d, b) - 1;
                e ? W.access(d, b, e) : (d.removeEventListener(a, c, !0),
                W.remove(d, b))
            }
        }
    });
    var tb = a.location
      , ub = r.now()
      , vb = /\?/;
    r.parseXML = function(b) {
        var c;
        if (!b || "string" != typeof b)
            return null;
        try {
            c = (new a.DOMParser).parseFromString(b, "text/xml")
        } catch (d) {
            c = void 0
        }
        return c && !c.getElementsByTagName("parsererror").length || r.error("Invalid XML: " + b),
        c
    }
    ;
    var wb = /\[\]$/
      , xb = /\r?\n/g
      , yb = /^(?:submit|button|image|reset|file)$/i
      , zb = /^(?:input|select|textarea|keygen)/i;
    function Ab(a, b, c, d) {
        var e;
        if (Array.isArray(b))
            r.each(b, function(b, e) {
                c || wb.test(a) ? d(a, e) : Ab(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
            });
        else if (c || "object" !== r.type(b))
            d(a, b);
        else
            for (e in b)
                Ab(a + "[" + e + "]", b[e], c, d)
    }
    r.param = function(a, b) {
        var c, d = [], e = function(a, b) {
            var c = r.isFunction(b) ? b() : b;
            d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c)
        };
        if (Array.isArray(a) || a.jquery && !r.isPlainObject(a))
            r.each(a, function() {
                e(this.name, this.value)
            });
        else
            for (c in a)
                Ab(c, a[c], b, e);
        return d.join("&")
    }
    ,
    r.fn.extend({
        serialize: function() {
            return r.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = r.prop(this, "elements");
                return a ? r.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !r(this).is(":disabled") && zb.test(this.nodeName) && !yb.test(a) && (this.checked || !ja.test(a))
            }).map(function(a, b) {
                var c = r(this).val();
                return null == c ? null : Array.isArray(c) ? r.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(xb, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(xb, "\r\n")
                }
            }).get()
        }
    });
    var Bb = /%20/g
      , Cb = /#.*$/
      , Db = /([?&])_=[^&]*/
      , Eb = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , Fb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
      , Gb = /^(?:GET|HEAD)$/
      , Hb = /^\/\//
      , Ib = {}
      , Jb = {}
      , Kb = "*/".concat("*")
      , Lb = d.createElement("a");
    Lb.href = tb.href;
    function Mb(a) {
        return function(b, c) {
            "string" != typeof b && (c = b,
            b = "*");
            var d, e = 0, f = b.toLowerCase().match(L) || [];
            if (r.isFunction(c))
                while (d = f[e++])
                    "+" === d[0] ? (d = d.slice(1) || "*",
                    (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }
    function Nb(a, b, c, d) {
        var e = {}
          , f = a === Jb;
        function g(h) {
            var i;
            return e[h] = !0,
            r.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j),
                g(j),
                !1)
            }),
            i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }
    function Ob(a, b) {
        var c, d, e = r.ajaxSettings.flatOptions || {};
        for (c in b)
            void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && r.extend(!0, a, d),
        a
    }
    function Pb(a, b, c) {
        var d, e, f, g, h = a.contents, i = a.dataTypes;
        while ("*" === i[0])
            i.shift(),
            void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d)
            for (e in h)
                if (h[e] && h[e].test(d)) {
                    i.unshift(e);
                    break
                }
        if (i[0]in c)
            f = i[0];
        else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        if (f)
            return f !== i[0] && i.unshift(f),
            c[f]
    }
    function Qb(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters)
                j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b),
            !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)),
            i = f,
            f = k.shift())
                if ("*" === f)
                    f = i;
                else if ("*" !== i && i !== f) {
                    if (g = j[i + " " + f] || j["* " + f],
                    !g)
                        for (e in j)
                            if (h = e.split(" "),
                            h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0],
                                k.unshift(h[1]));
                                break
                            }
                    if (g !== !0)
                        if (g && a["throws"])
                            b = g(b);
                        else
                            try {
                                b = g(b)
                            } catch (l) {
                                return {
                                    state: "parsererror",
                                    error: g ? l : "No conversion from " + i + " to " + f
                                }
                            }
                }
        return {
            state: "success",
            data: b
        }
    }
    r.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: tb.href,
            type: "GET",
            isLocal: Fb.test(tb.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Kb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": r.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? Ob(Ob(a, r.ajaxSettings), b) : Ob(r.ajaxSettings, a)
        },
        ajaxPrefilter: Mb(Ib),
        ajaxTransport: Mb(Jb),
        ajax: function(b, c) {
            "object" == typeof b && (c = b,
            b = void 0),
            c = c || {};
            var e, f, g, h, i, j, k, l, m, n, o = r.ajaxSetup({}, c), p = o.context || o, q = o.context && (p.nodeType || p.jquery) ? r(p) : r.event, s = r.Deferred(), t = r.Callbacks("once memory"), u = o.statusCode || {}, v = {}, w = {}, x = "canceled", y = {
                readyState: 0,
                getResponseHeader: function(a) {
                    var b;
                    if (k) {
                        if (!h) {
                            h = {};
                            while (b = Eb.exec(g))
                                h[b[1].toLowerCase()] = b[2]
                        }
                        b = h[a.toLowerCase()]
                    }
                    return null == b ? null : b
                },
                getAllResponseHeaders: function() {
                    return k ? g : null
                },
                setRequestHeader: function(a, b) {
                    return null == k && (a = w[a.toLowerCase()] = w[a.toLowerCase()] || a,
                    v[a] = b),
                    this
                },
                overrideMimeType: function(a) {
                    return null == k && (o.mimeType = a),
                    this
                },
                statusCode: function(a) {
                    var b;
                    if (a)
                        if (k)
                            y.always(a[y.status]);
                        else
                            for (b in a)
                                u[b] = [u[b], a[b]];
                    return this
                },
                abort: function(a) {
                    var b = a || x;
                    return e && e.abort(b),
                    A(0, b),
                    this
                }
            };
            if (s.promise(y),
            o.url = ((b || o.url || tb.href) + "").replace(Hb, tb.protocol + "//"),
            o.type = c.method || c.type || o.method || o.type,
            o.dataTypes = (o.dataType || "*").toLowerCase().match(L) || [""],
            null == o.crossDomain) {
                j = d.createElement("a");
                try {
                    j.href = o.url,
                    j.href = j.href,
                    o.crossDomain = Lb.protocol + "//" + Lb.host != j.protocol + "//" + j.host
                } catch (z) {
                    o.crossDomain = !0
                }
            }
            if (o.data && o.processData && "string" != typeof o.data && (o.data = r.param(o.data, o.traditional)),
            Nb(Ib, o, c, y),
            k)
                return y;
            l = r.event && o.global,
            l && 0 === r.active++ && r.event.trigger("ajaxStart"),
            o.type = o.type.toUpperCase(),
            o.hasContent = !Gb.test(o.type),
            f = o.url.replace(Cb, ""),
            o.hasContent ? o.data && o.processData && 0 === (o.contentType || "").indexOf("application/x-www-form-urlencoded") && (o.data = o.data.replace(Bb, "+")) : (n = o.url.slice(f.length),
            o.data && (f += (vb.test(f) ? "&" : "?") + o.data,
            delete o.data),
            o.cache === !1 && (f = f.replace(Db, "$1"),
            n = (vb.test(f) ? "&" : "?") + "_=" + ub++ + n),
            o.url = f + n),
            o.ifModified && (r.lastModified[f] && y.setRequestHeader("If-Modified-Since", r.lastModified[f]),
            r.etag[f] && y.setRequestHeader("If-None-Match", r.etag[f])),
            (o.data && o.hasContent && o.contentType !== !1 || c.contentType) && y.setRequestHeader("Content-Type", o.contentType),
            y.setRequestHeader("Accept", o.dataTypes[0] && o.accepts[o.dataTypes[0]] ? o.accepts[o.dataTypes[0]] + ("*" !== o.dataTypes[0] ? ", " + Kb + "; q=0.01" : "") : o.accepts["*"]);
            for (m in o.headers)
                y.setRequestHeader(m, o.headers[m]);
            if (o.beforeSend && (o.beforeSend.call(p, y, o) === !1 || k))
                return y.abort();
            if (x = "abort",
            t.add(o.complete),
            y.done(o.success),
            y.fail(o.error),
            e = Nb(Jb, o, c, y)) {
                if (y.readyState = 1,
                l && q.trigger("ajaxSend", [y, o]),
                k)
                    return y;
                o.async && o.timeout > 0 && (i = a.setTimeout(function() {
                    y.abort("timeout")
                }, o.timeout));
                try {
                    k = !1,
                    e.send(v, A)
                } catch (z) {
                    if (k)
                        throw z;
                    A(-1, z)
                }
            } else
                A(-1, "No Transport");
            function A(b, c, d, h) {
                var j, m, n, v, w, x = c;
                k || (k = !0,
                i && a.clearTimeout(i),
                e = void 0,
                g = h || "",
                y.readyState = b > 0 ? 4 : 0,
                j = b >= 200 && b < 300 || 304 === b,
                d && (v = Pb(o, y, d)),
                v = Qb(o, v, y, j),
                j ? (o.ifModified && (w = y.getResponseHeader("Last-Modified"),
                w && (r.lastModified[f] = w),
                w = y.getResponseHeader("etag"),
                w && (r.etag[f] = w)),
                204 === b || "HEAD" === o.type ? x = "nocontent" : 304 === b ? x = "notmodified" : (x = v.state,
                m = v.data,
                n = v.error,
                j = !n)) : (n = x,
                !b && x || (x = "error",
                b < 0 && (b = 0))),
                y.status = b,
                y.statusText = (c || x) + "",
                j ? s.resolveWith(p, [m, x, y]) : s.rejectWith(p, [y, x, n]),
                y.statusCode(u),
                u = void 0,
                l && q.trigger(j ? "ajaxSuccess" : "ajaxError", [y, o, j ? m : n]),
                t.fireWith(p, [y, x]),
                l && (q.trigger("ajaxComplete", [y, o]),
                --r.active || r.event.trigger("ajaxStop")))
            }
            return y
        },
        getJSON: function(a, b, c) {
            return r.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return r.get(a, void 0, b, "script")
        }
    }),
    r.each(["get", "post"], function(a, b) {
        r[b] = function(a, c, d, e) {
            return r.isFunction(c) && (e = e || d,
            d = c,
            c = void 0),
            r.ajax(r.extend({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            }, r.isPlainObject(a) && a))
        }
    }),
    r._evalUrl = function(a) {
        return r.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }
    ,
    r.fn.extend({
        wrapAll: function(a) {
            var b;
            return this[0] && (r.isFunction(a) && (a = a.call(this[0])),
            b = r(a, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && b.insertBefore(this[0]),
            b.map(function() {
                var a = this;
                while (a.firstElementChild)
                    a = a.firstElementChild;
                return a
            }).append(this)),
            this
        },
        wrapInner: function(a) {
            return r.isFunction(a) ? this.each(function(b) {
                r(this).wrapInner(a.call(this, b))
            }) : this.each(function() {
                var b = r(this)
                  , c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = r.isFunction(a);
            return this.each(function(c) {
                r(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function(a) {
            return this.parent(a).not("body").each(function() {
                r(this).replaceWith(this.childNodes)
            }),
            this
        }
    }),
    r.expr.pseudos.hidden = function(a) {
        return !r.expr.pseudos.visible(a)
    }
    ,
    r.expr.pseudos.visible = function(a) {
        return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length)
    }
    ,
    r.ajaxSettings.xhr = function() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }
    ;
    var Rb = {
        0: 200,
        1223: 204
    }
      , Sb = r.ajaxSettings.xhr();
    o.cors = !!Sb && "withCredentials"in Sb,
    o.ajax = Sb = !!Sb,
    r.ajaxTransport(function(b) {
        var c, d;
        if (o.cors || Sb && !b.crossDomain)
            return {
                send: function(e, f) {
                    var g, h = b.xhr();
                    if (h.open(b.type, b.url, b.async, b.username, b.password),
                    b.xhrFields)
                        for (g in b.xhrFields)
                            h[g] = b.xhrFields[g];
                    b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType),
                    b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                    for (g in e)
                        h.setRequestHeader(g, e[g]);
                    c = function(a) {
                        return function() {
                            c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null,
                            "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Rb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? {
                                binary: h.response
                            } : {
                                text: h.responseText
                            }, h.getAllResponseHeaders()))
                        }
                    }
                    ,
                    h.onload = c(),
                    d = h.onerror = c("error"),
                    void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function() {
                        4 === h.readyState && a.setTimeout(function() {
                            c && d()
                        })
                    }
                    ,
                    c = c("abort");
                    try {
                        h.send(b.hasContent && b.data || null)
                    } catch (i) {
                        if (c)
                            throw i
                    }
                },
                abort: function() {
                    c && c()
                }
            }
    }),
    r.ajaxPrefilter(function(a) {
        a.crossDomain && (a.contents.script = !1)
    }),
    r.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(a) {
                return r.globalEval(a),
                a
            }
        }
    }),
    r.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1),
        a.crossDomain && (a.type = "GET")
    }),
    r.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function(e, f) {
                    b = r("<script>").prop({
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove(),
                        c = null,
                        a && f("error" === a.type ? 404 : 200, a.type)
                    }
                    ),
                    d.head.appendChild(b[0])
                },
                abort: function() {
                    c && c()
                }
            }
        }
    });
    var Tb = []
      , Ub = /(=)\?(?=&|$)|\?\?/;
    r.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Tb.pop() || r.expando + "_" + ub++;
            return this[a] = !0,
            a
        }
    }),
    r.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Ub.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Ub.test(b.data) && "data");
        if (h || "jsonp" === b.dataTypes[0])
            return e = b.jsonpCallback = r.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback,
            h ? b[h] = b[h].replace(Ub, "$1" + e) : b.jsonp !== !1 && (b.url += (vb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e),
            b.converters["script json"] = function() {
                return g || r.error(e + " was not called"),
                g[0]
            }
            ,
            b.dataTypes[0] = "json",
            f = a[e],
            a[e] = function() {
                g = arguments
            }
            ,
            d.always(function() {
                void 0 === f ? r(a).removeProp(e) : a[e] = f,
                b[e] && (b.jsonpCallback = c.jsonpCallback,
                Tb.push(e)),
                g && r.isFunction(f) && f(g[0]),
                g = f = void 0
            }),
            "script"
    }),
    o.createHTMLDocument = function() {
        var a = d.implementation.createHTMLDocument("").body;
        return a.innerHTML = "<form></form><form></form>",
        2 === a.childNodes.length
    }(),
    r.parseHTML = function(a, b, c) {
        if ("string" != typeof a)
            return [];
        "boolean" == typeof b && (c = b,
        b = !1);
        var e, f, g;
        return b || (o.createHTMLDocument ? (b = d.implementation.createHTMLDocument(""),
        e = b.createElement("base"),
        e.href = d.location.href,
        b.head.appendChild(e)) : b = d),
        f = C.exec(a),
        g = !c && [],
        f ? [b.createElement(f[1])] : (f = qa([a], b, g),
        g && g.length && r(g).remove(),
        r.merge([], f.childNodes))
    }
    ,
    r.fn.load = function(a, b, c) {
        var d, e, f, g = this, h = a.indexOf(" ");
        return h > -1 && (d = pb(a.slice(h)),
        a = a.slice(0, h)),
        r.isFunction(b) ? (c = b,
        b = void 0) : b && "object" == typeof b && (e = "POST"),
        g.length > 0 && r.ajax({
            url: a,
            type: e || "GET",
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments,
            g.html(d ? r("<div>").append(r.parseHTML(a)).find(d) : a)
        }).always(c && function(a, b) {
            g.each(function() {
                c.apply(this, f || [a.responseText, b, a])
            })
        }
        ),
        this
    }
    ,
    r.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        r.fn[b] = function(a) {
            return this.on(b, a)
        }
    }),
    r.expr.pseudos.animated = function(a) {
        return r.grep(r.timers, function(b) {
            return a === b.elem
        }).length
    }
    ,
    r.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = r.css(a, "position"), l = r(a), m = {};
            "static" === k && (a.style.position = "relative"),
            h = l.offset(),
            f = r.css(a, "top"),
            i = r.css(a, "left"),
            j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1,
            j ? (d = l.position(),
            g = d.top,
            e = d.left) : (g = parseFloat(f) || 0,
            e = parseFloat(i) || 0),
            r.isFunction(b) && (b = b.call(a, c, r.extend({}, h))),
            null != b.top && (m.top = b.top - h.top + g),
            null != b.left && (m.left = b.left - h.left + e),
            "using"in b ? b.using.call(a, m) : l.css(m)
        }
    },
    r.fn.extend({
        offset: function(a) {
            if (arguments.length)
                return void 0 === a ? this : this.each(function(b) {
                    r.offset.setOffset(this, a, b)
                });
            var b, c, d, e, f = this[0];
            if (f)
                return f.getClientRects().length ? (d = f.getBoundingClientRect(),
                b = f.ownerDocument,
                c = b.documentElement,
                e = b.defaultView,
                {
                    top: d.top + e.pageYOffset - c.clientTop,
                    left: d.left + e.pageXOffset - c.clientLeft
                }) : {
                    top: 0,
                    left: 0
                }
        },
        position: function() {
            if (this[0]) {
                var a, b, c = this[0], d = {
                    top: 0,
                    left: 0
                };
                return "fixed" === r.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(),
                b = this.offset(),
                B(a[0], "html") || (d = a.offset()),
                d = {
                    top: d.top + r.css(a[0], "borderTopWidth", !0),
                    left: d.left + r.css(a[0], "borderLeftWidth", !0)
                }),
                {
                    top: b.top - d.top - r.css(c, "marginTop", !0),
                    left: b.left - d.left - r.css(c, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent;
                while (a && "static" === r.css(a, "position"))
                    a = a.offsetParent;
                return a || ra
            })
        }
    }),
    r.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = "pageYOffset" === b;
        r.fn[a] = function(d) {
            return T(this, function(a, d, e) {
                var f;
                return r.isWindow(a) ? f = a : 9 === a.nodeType && (f = a.defaultView),
                void 0 === e ? f ? f[b] : a[d] : void (f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e)
            }, a, d, arguments.length)
        }
    }),
    r.each(["top", "left"], function(a, b) {
        r.cssHooks[b] = Pa(o.pixelPosition, function(a, c) {
            if (c)
                return c = Oa(a, b),
                Ma.test(c) ? r(a).position()[b] + "px" : c
        })
    }),
    r.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        r.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            r.fn[d] = function(e, f) {
                var g = arguments.length && (c || "boolean" != typeof e)
                  , h = c || (e === !0 || f === !0 ? "margin" : "border");
                return T(this, function(b, c, e) {
                    var f;
                    return r.isWindow(b) ? 0 === d.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = b.documentElement,
                    Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a])) : void 0 === e ? r.css(b, c, h) : r.style(b, c, e, h)
                }, b, g ? e : void 0, g)
            }
        })
    }),
    r.fn.extend({
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    }),
    r.holdReady = function(a) {
        a ? r.readyWait++ : r.ready(!0)
    }
    ,
    r.isArray = Array.isArray,
    r.parseJSON = JSON.parse,
    r.nodeName = B,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return r
    });
    var Vb = a.jQuery
      , Wb = a.$;
    return r.noConflict = function(b) {
        return a.$ === r && (a.$ = Wb),
        b && a.jQuery === r && (a.jQuery = Vb),
        r
    }
    ,
    b || (a.jQuery = a.$ = r),
    r
});
jQuery.easing['jswing'] = jQuery.easing['swing'];
jQuery.extend(jQuery.easing, {
    def: 'easeOutQuad',
    swing: function(x, t, b, c, d) {
        return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
    },
    easeInQuad: function(x, t, b, c, d) {
        return c * (t /= d) * t + b;
    },
    easeOutQuad: function(x, t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b;
    },
    easeInOutQuad: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1)
            return c / 2 * t * t + b;
        return -c / 2 * ((--t) * (t - 2) - 1) + b;
    },
    easeInCubic: function(x, t, b, c, d) {
        return c * (t /= d) * t * t + b;
    },
    easeOutCubic: function(x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t + 1) + b;
    },
    easeInOutCubic: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1)
            return c / 2 * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t + 2) + b;
    },
    easeInQuart: function(x, t, b, c, d) {
        return c * (t /= d) * t * t * t + b;
    },
    easeOutQuart: function(x, t, b, c, d) {
        return -c * ((t = t / d - 1) * t * t * t - 1) + b;
    },
    easeInOutQuart: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1)
            return c / 2 * t * t * t * t + b;
        return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
    },
    easeInQuint: function(x, t, b, c, d) {
        return c * (t /= d) * t * t * t * t + b;
    },
    easeOutQuint: function(x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
    },
    easeInOutQuint: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1)
            return c / 2 * t * t * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
    },
    easeInSine: function(x, t, b, c, d) {
        return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
    },
    easeOutSine: function(x, t, b, c, d) {
        return c * Math.sin(t / d * (Math.PI / 2)) + b;
    },
    easeInOutSine: function(x, t, b, c, d) {
        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
    },
    easeInExpo: function(x, t, b, c, d) {
        return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
    },
    easeOutExpo: function(x, t, b, c, d) {
        return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
    },
    easeInOutExpo: function(x, t, b, c, d) {
        if (t == 0)
            return b;
        if (t == d)
            return b + c;
        if ((t /= d / 2) < 1)
            return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
    },
    easeInCirc: function(x, t, b, c, d) {
        return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
    },
    easeOutCirc: function(x, t, b, c, d) {
        return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
    },
    easeInOutCirc: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1)
            return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
        return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
    },
    easeInElastic: function(x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0)
            return b;
        if ((t /= d) == 1)
            return b + c;
        if (!p)
            p = d * .3;
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        } else
            var s = p / (2 * Math.PI) * Math.asin(c / a);
        return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    },
    easeOutElastic: function(x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0)
            return b;
        if ((t /= d) == 1)
            return b + c;
        if (!p)
            p = d * .3;
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        } else
            var s = p / (2 * Math.PI) * Math.asin(c / a);
        return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
    },
    easeInOutElastic: function(x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0)
            return b;
        if ((t /= d / 2) == 2)
            return b + c;
        if (!p)
            p = d * (.3 * 1.5);
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        } else
            var s = p / (2 * Math.PI) * Math.asin(c / a);
        if (t < 1)
            return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
    },
    easeInBack: function(x, t, b, c, d, s) {
        if (s == undefined)
            s = 1.70158;
        return c * (t /= d) * t * ((s + 1) * t - s) + b;
    },
    easeOutBack: function(x, t, b, c, d, s) {
        if (s == undefined)
            s = 1.70158;
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
    },
    easeInOutBack: function(x, t, b, c, d, s) {
        if (s == undefined)
            s = 1.70158;
        if ((t /= d / 2) < 1)
            return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
        return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
    },
    easeInBounce: function(x, t, b, c, d) {
        return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b;
    },
    easeOutBounce: function(x, t, b, c, d) {
        if ((t /= d) < (1 / 2.75)) {
            return c * (7.5625 * t * t) + b;
        } else if (t < (2 / 2.75)) {
            return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
        } else if (t < (2.5 / 2.75)) {
            return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
        } else {
            return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
        }
    },
    easeInOutBounce: function(x, t, b, c, d) {
        if (t < d / 2)
            return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
        return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b;
    }
});
jQuery.extend(jQuery.easing, {
    easeIn: function(x, t, b, c, d) {
        return jQuery.easing.easeInQuad(x, t, b, c, d);
    },
    easeOut: function(x, t, b, c, d) {
        return jQuery.easing.easeOutQuad(x, t, b, c, d);
    },
    easeInOut: function(x, t, b, c, d) {
        return jQuery.easing.easeInOutQuad(x, t, b, c, d);
    },
    expoin: function(x, t, b, c, d) {
        return jQuery.easing.easeInExpo(x, t, b, c, d);
    },
    expoout: function(x, t, b, c, d) {
        return jQuery.easing.easeOutExpo(x, t, b, c, d);
    },
    expoinout: function(x, t, b, c, d) {
        return jQuery.easing.easeInOutExpo(x, t, b, c, d);
    },
    bouncein: function(x, t, b, c, d) {
        return jQuery.easing.easeInBounce(x, t, b, c, d);
    },
    bounceout: function(x, t, b, c, d) {
        return jQuery.easing.easeOutBounce(x, t, b, c, d);
    },
    bounceinout: function(x, t, b, c, d) {
        return jQuery.easing.easeInOutBounce(x, t, b, c, d);
    },
    elasin: function(x, t, b, c, d) {
        return jQuery.easing.easeInElastic(x, t, b, c, d);
    },
    elasout: function(x, t, b, c, d) {
        return jQuery.easing.easeOutElastic(x, t, b, c, d);
    },
    elasinout: function(x, t, b, c, d) {
        return jQuery.easing.easeInOutElastic(x, t, b, c, d);
    },
    backin: function(x, t, b, c, d) {
        return jQuery.easing.easeInBack(x, t, b, c, d);
    },
    backout: function(x, t, b, c, d) {
        return jQuery.easing.easeOutBack(x, t, b, c, d);
    },
    backinout: function(x, t, b, c, d) {
        return jQuery.easing.easeInOutBack(x, t, b, c, d);
    }
});
!function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : jQuery)
}(function(a) {
    var b, c = navigator.userAgent, d = /iphone/i.test(c), e = /chrome/i.test(c), f = /android/i.test(c);
    a.mask = {
        definitions: {
            0: "[0-9]",
            a: "[A-Za-z]",
            "*": "[A-Za-z0-9]"
        },
        autoclear: !0,
        dataName: "rawMaskFn",
        placeholder: "_"
    },
    a.fn.extend({
        caret: function(a, b) {
            var c;
            if (0 !== this.length && !this.is(":hidden"))
                return "number" == typeof a ? (b = "number" == typeof b ? b : a,
                this.each(function() {
                    this.setSelectionRange ? this.setSelectionRange(a, b) : this.createTextRange && (c = this.createTextRange(),
                    c.collapse(!0),
                    c.moveEnd("character", b),
                    c.moveStart("character", a),
                    c.select())
                })) : (this[0].setSelectionRange ? (a = this[0].selectionStart,
                b = this[0].selectionEnd) : document.selection && document.selection.createRange && (c = document.selection.createRange(),
                a = 0 - c.duplicate().moveStart("character", -1e5),
                b = a + c.text.length),
                {
                    begin: a,
                    end: b
                })
        },
        unmask: function() {
            return this.trigger("unmask")
        },
        mask: function(c, g) {
            var h, i, j, k, l, m, n, o;
            if (!c && this.length > 0) {
                h = a(this[0]);
                var p = h.data(a.mask.dataName);
                return p ? p() : void 0
            }
            return g = a.extend({
                autoclear: a.mask.autoclear,
                placeholder: a.mask.placeholder,
                completed: null
            }, g),
            i = a.mask.definitions,
            j = [],
            k = n = c.length,
            l = null,
            a.each(c.split(""), function(a, b) {
                "?" == b ? (n--,
                k = a) : i[b] ? (j.push(new RegExp(i[b])),
                null === l && (l = j.length - 1),
                k > a && (m = j.length - 1)) : j.push(null)
            }),
            this.trigger("unmask").each(function() {
                function h() {
                    if (g.completed) {
                        for (var a = l; m >= a; a++)
                            if (j[a] && C[a] === p(a))
                                return;
                        g.completed.call(B)
                    }
                }
                function p(a) {
                    return g.placeholder.charAt(a < g.placeholder.length ? a : 0)
                }
                function q(a) {
                    for (; ++a < n && !j[a]; )
                        ;
                    return a
                }
                function r(a) {
                    for (; --a >= 0 && !j[a]; )
                        ;
                    return a
                }
                function s(a, b) {
                    var c, d;
                    if (!(0 > a)) {
                        for (c = a,
                        d = q(b); n > c; c++)
                            if (j[c]) {
                                if (!(n > d && j[c].test(C[d])))
                                    break;
                                C[c] = C[d],
                                C[d] = p(d),
                                d = q(d)
                            }
                        z(),
                        B.caret(Math.max(l, a))
                    }
                }
                function t(a) {
                    var b, c, d, e;
                    for (b = a,
                    c = p(a); n > b; b++)
                        if (j[b]) {
                            if (d = q(b),
                            e = C[b],
                            C[b] = c,
                            !(n > d && j[d].test(e)))
                                break;
                            c = e
                        }
                }
                function u() {
                    var a = B.val()
                      , b = B.caret();
                    if (o && o.length && o.length > a.length) {
                        for (A(!0); b.begin > 0 && !j[b.begin - 1]; )
                            b.begin--;
                        if (0 === b.begin)
                            for (; b.begin < l && !j[b.begin]; )
                                b.begin++;
                        B.caret(b.begin, b.begin)
                    } else {
                        for (A(!0); b.begin < n && !j[b.begin]; )
                            b.begin++;
                        B.caret(b.begin, b.begin)
                    }
                    h()
                }
                function v() {
                    A(),
                    B.val() != E && B.change()
                }
                function w(a) {
                    if (!B.prop("readonly")) {
                        var b, c, e, f = a.which || a.keyCode;
                        o = B.val(),
                        8 === f || 46 === f || d && 127 === f ? (b = B.caret(),
                        c = b.begin,
                        e = b.end,
                        e - c === 0 && (c = 46 !== f ? r(c) : e = q(c - 1),
                        e = 46 === f ? q(e) : e),
                        y(c, e),
                        s(c, e - 1),
                        a.preventDefault()) : 13 === f ? v.call(this, a) : 27 === f && (B.val(E),
                        B.caret(0, A()),
                        a.preventDefault())
                    }
                }
                function x(b) {
                    if (!B.prop("readonly")) {
                        var c, d, e, g = b.which || b.keyCode, i = B.caret();
                        if (!(b.ctrlKey || b.altKey || b.metaKey || 32 > g) && g && 13 !== g) {
                            if (i.end - i.begin !== 0 && (y(i.begin, i.end),
                            s(i.begin, i.end - 1)),
                            c = q(i.begin - 1),
                            n > c && (d = String.fromCharCode(g),
                            j[c].test(d))) {
                                if (t(c),
                                C[c] = d,
                                z(),
                                e = q(c),
                                f) {
                                    var k = function() {
                                        a.proxy(a.fn.caret, B, e)()
                                    };
                                    setTimeout(k, 0)
                                } else
                                    B.caret(e);
                                i.begin <= m && h()
                            }
                            b.preventDefault()
                        }
                    }
                }
                function y(a, b) {
                    var c;
                    for (c = a; b > c && n > c; c++)
                        j[c] && (C[c] = p(c))
                }
                function z() {
                    B.val(C.join(""))
                }
                function A(a) {
                    var b, c, d, e = B.val(), f = -1;
                    for (b = 0,
                    d = 0; n > b; b++)
                        if (j[b]) {
                            for (C[b] = p(b); d++ < e.length; )
                                if (c = e.charAt(d - 1),
                                j[b].test(c)) {
                                    C[b] = c,
                                    f = b;
                                    break
                                }
                            if (d > e.length) {
                                y(b + 1, n);
                                break
                            }
                        } else
                            C[b] === e.charAt(d) && d++,
                            k > b && (f = b);
                    return a ? z() : k > f + 1 ? g.autoclear || C.join("") === D ? (B.val() && B.val(""),
                    y(0, n)) : z() : (z(),
                    B.val(B.val().substring(0, f + 1))),
                    k ? b : l
                }
                var B = a(this)
                  , C = a.map(c.split(""), function(a, b) {
                    return "?" != a ? i[a] ? p(b) : a : void 0
                })
                  , D = C.join("")
                  , E = B.val();
                B.data(a.mask.dataName, function() {
                    return a.map(C, function(a, b) {
                        return j[b] && a != p(b) ? a : null
                    }).join("")
                }),
                B.one("unmask", function() {
                    B.off(".mask").removeData(a.mask.dataName)
                }).on("focus.mask", function() {
                    if (!B.prop("readonly")) {
                        clearTimeout(b);
                        var a;
                        E = B.val(),
                        a = A(),
                        b = setTimeout(function() {
                            B.get(0) === document.activeElement && (z(),
                            a == c.replace("?", "").length ? B.caret(0, a) : B.caret(a))
                        }, 10)
                    }
                }).on("blur.mask", v).on("keydown.mask", w).on("keypress.mask", x).on("input.mask paste.mask", function() {
                    B.prop("readonly") || setTimeout(function() {
                        var a = A(!0);
                        B.caret(a),
                        h()
                    }, 0)
                }),
                e && f && B.off("input.mask").on("input.mask", u),
                A()
            })
        }
    })
});
!function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
}(function(e) {
    "use strict";
    function o() {
        var e = document.getElementsByTagName("script")
          , o = e[e.length - 1].src.split("?")[0];
        return o.split("/").length > 0 ? o.split("/").slice(0, -1).join("/") + "/" : ""
    }
    function t(e, o, t) {
        for (var r = 0; r < o.length; r++)
            t(e, o[r])
    }
    var r = !1
      , i = !1
      , n = 0
      , s = 2e3
      , l = 0
      , a = e
      , c = ["webkit", "ms", "moz", "o"]
      , d = window.requestAnimationFrame || !1
      , u = window.cancelAnimationFrame || !1;
    if (!d)
        for (var h in c) {
            var p = c[h];
            d || (d = window[p + "RequestAnimationFrame"]),
            u || (u = window[p + "CancelAnimationFrame"] || window[p + "CancelRequestAnimationFrame"])
        }
    var m = window.MutationObserver || window.WebKitMutationObserver || !1
      , f = {
        zindex: "auto",
        cursoropacitymin: 0,
        cursoropacitymax: 1,
        cursorcolor: "#424242",
        cursorwidth: "5px",
        cursorborder: "1px solid #fff",
        cursorborderradius: "5px",
        scrollspeed: 60,
        mousescrollstep: 24,
        touchbehavior: !1,
        hwacceleration: !0,
        usetransition: !0,
        boxzoom: !1,
        dblclickzoom: !0,
        gesturezoom: !0,
        grabcursorenabled: !0,
        autohidemode: !0,
        background: "",
        iframeautoresize: !0,
        cursorminheight: 32,
        preservenativescrolling: !0,
        railoffset: !1,
        railhoffset: !1,
        bouncescroll: !0,
        spacebarenabled: !0,
        railpadding: {
            top: 0,
            right: 0,
            left: 0,
            bottom: 0
        },
        disableoutline: !0,
        horizrailenabled: !0,
        railalign: "right",
        railvalign: "bottom",
        enabletranslate3d: !0,
        enablemousewheel: !0,
        enablekeyboard: !0,
        smoothscroll: !0,
        sensitiverail: !0,
        enablemouselockapi: !0,
        cursorfixedheight: !1,
        directionlockdeadzone: 6,
        hidecursordelay: 400,
        nativeparentscrolling: !0,
        enablescrollonselection: !0,
        overflowx: !0,
        overflowy: !0,
        cursordragspeed: .3,
        rtlmode: "auto",
        cursordragontouch: !1,
        oneaxismousemode: "auto",
        scriptpath: o(),
        preventmultitouchscrolling: !0
    }
      , g = !1
      , w = function() {
        function e() {
            var e = ["-webkit-grab", "-moz-grab", "grab"];
            (n.ischrome && !n.ischrome22 || n.isie) && (e = []);
            for (var o = 0; o < e.length; o++) {
                var r = e[o];
                if (t.cursor = r,
                t.cursor == r)
                    return r
            }
            return "url(//mail.google.com/mail/images/2/openhand.cur),n-resize"
        }
        if (g)
            return g;
        var o = document.createElement("DIV")
          , t = o.style
          , r = navigator.userAgent
          , i = navigator.platform
          , n = {};
        n.haspointerlock = "pointerLockElement"in document || "webkitPointerLockElement"in document || "mozPointerLockElement"in document,
        n.isopera = "opera"in window,
        n.isopera12 = n.isopera && "getUserMedia"in navigator,
        n.isoperamini = "[object OperaMini]" === Object.prototype.toString.call(window.operamini),
        n.isie = "all"in document && "attachEvent"in o && !n.isopera,
        n.isieold = n.isie && !("msInterpolationMode"in t),
        n.isie7 = n.isie && !n.isieold && (!("documentMode"in document) || 7 == document.documentMode),
        n.isie8 = n.isie && "documentMode"in document && 8 == document.documentMode,
        n.isie9 = n.isie && "performance"in window && document.documentMode >= 9,
        n.isie10 = n.isie && "performance"in window && 10 == document.documentMode,
        n.isie11 = "msRequestFullscreen"in o && document.documentMode >= 11,
        n.isie9mobile = /iemobile.9/i.test(r),
        n.isie9mobile && (n.isie9 = !1),
        n.isie7mobile = !n.isie9mobile && n.isie7 && /iemobile/i.test(r),
        n.ismozilla = "MozAppearance"in t,
        n.iswebkit = "WebkitAppearance"in t,
        n.ischrome = "chrome"in window,
        n.ischrome22 = n.ischrome && n.haspointerlock,
        n.ischrome26 = n.ischrome && "transition"in t,
        n.cantouch = "ontouchstart"in document.documentElement || "ontouchstart"in window,
        n.hasmstouch = window.MSPointerEvent || !1,
        n.hasw3ctouch = window.PointerEvent || !1,
        n.ismac = /^mac$/i.test(i),
        n.isios = n.cantouch && /iphone|ipad|ipod/i.test(i),
        n.isios4 = n.isios && !("seal"in Object),
        n.isios7 = n.isios && "webkitHidden"in document,
        n.isandroid = /android/i.test(r),
        n.haseventlistener = "addEventListener"in o,
        n.trstyle = !1,
        n.hastransform = !1,
        n.hastranslate3d = !1,
        n.transitionstyle = !1,
        n.hastransition = !1,
        n.transitionend = !1;
        var s, l = ["transform", "msTransform", "webkitTransform", "MozTransform", "OTransform"];
        for (s = 0; s < l.length; s++)
            if ("undefined" != typeof t[l[s]]) {
                n.trstyle = l[s];
                break
            }
        n.hastransform = !!n.trstyle,
        n.hastransform && (t[n.trstyle] = "translate3d(1px,2px,3px)",
        n.hastranslate3d = /translate3d/.test(t[n.trstyle])),
        n.transitionstyle = !1,
        n.prefixstyle = "",
        n.transitionend = !1,
        l = ["transition", "webkitTransition", "msTransition", "MozTransition", "OTransition", "OTransition", "KhtmlTransition"];
        var a = ["", "-webkit-", "-ms-", "-moz-", "-o-", "-o", "-khtml-"]
          , c = ["transitionend", "webkitTransitionEnd", "msTransitionEnd", "transitionend", "otransitionend", "oTransitionEnd", "KhtmlTransitionEnd"];
        for (s = 0; s < l.length; s++)
            if (l[s]in t) {
                n.transitionstyle = l[s],
                n.prefixstyle = a[s],
                n.transitionend = c[s];
                break
            }
        return n.ischrome26 && (n.prefixstyle = a[1]),
        n.hastransition = n.transitionstyle,
        n.cursorgrabvalue = e(),
        n.hasmousecapture = "setCapture"in o,
        n.hasMutationObserver = m !== !1,
        o = null,
        g = n,
        n
    }
      , v = function(e, o) {
        function t() {
            var e = v.doc.css(x.trstyle);
            return e && "matrix" == e.substr(0, 6) ? e.replace(/^.*\((.*)\)$/g, "$1").replace(/px/g, "").split(/, +/) : !1
        }
        function c() {
            var e = v.win;
            if ("zIndex"in e)
                return e.zIndex();
            for (; e.length > 0; ) {
                if (9 == e[0].nodeType)
                    return !1;
                var o = e.css("zIndex");
                if (!isNaN(o) && 0 != o)
                    return parseInt(o);
                e = e.parent()
            }
            return !1
        }
        function h(e, o, t) {
            var r = e.css(o)
              , i = parseFloat(r);
            if (isNaN(i)) {
                i = k[r] || 0;
                var n = 3 == i ? t ? v.win.outerHeight() - v.win.innerHeight() : v.win.outerWidth() - v.win.innerWidth() : 1;
                return v.isie8 && i && (i += 1),
                n ? i : 0
            }
            return i
        }
        function p(e, o, t, r) {
            v._bind(e, o, function(r) {
                var r = r ? r : window.event
                  , i = {
                    original: r,
                    target: r.target || r.srcElement,
                    type: "wheel",
                    deltaMode: "MozMousePixelScroll" == r.type ? 0 : 1,
                    deltaX: 0,
                    deltaZ: 0,
                    preventDefault: function() {
                        return r.preventDefault ? r.preventDefault() : r.returnValue = !1,
                        !1
                    },
                    stopImmediatePropagation: function() {
                        r.stopImmediatePropagation ? r.stopImmediatePropagation() : r.cancelBubble = !0
                    }
                };
                return "mousewheel" == o ? (i.deltaY = -1 / 40 * r.wheelDelta,
                r.wheelDeltaX && (i.deltaX = -1 / 40 * r.wheelDeltaX)) : i.deltaY = r.detail,
                t.call(e, i)
            }, r)
        }
        function g(e, o, t) {
            var r, i;
            if (0 == e.deltaMode ? (r = -Math.floor(e.deltaX * (v.opt.mousescrollstep / 54)),
            i = -Math.floor(e.deltaY * (v.opt.mousescrollstep / 54))) : 1 == e.deltaMode && (r = -Math.floor(e.deltaX * v.opt.mousescrollstep),
            i = -Math.floor(e.deltaY * v.opt.mousescrollstep)),
            o && v.opt.oneaxismousemode && 0 == r && i && (r = i,
            i = 0,
            t)) {
                var n = 0 > r ? v.getScrollLeft() >= v.page.maxw : v.getScrollLeft() <= 0;
                n && (i = r,
                r = 0)
            }
            if (r && (v.scrollmom && v.scrollmom.stop(),
            v.lastdeltax += r,
            v.debounced("mousewheelx", function() {
                var e = v.lastdeltax;
                v.lastdeltax = 0,
                v.rail.drag || v.doScrollLeftBy(e)
            }, 15)),
            i) {
                if (v.opt.nativeparentscrolling && t && !v.ispage && !v.zoomactive)
                    if (0 > i) {
                        if (v.getScrollTop() >= v.page.maxh)
                            return !0
                    } else if (v.getScrollTop() <= 0)
                        return !0;
                v.scrollmom && v.scrollmom.stop(),
                v.lastdeltay += i,
                v.debounced("mousewheely", function() {
                    var e = v.lastdeltay;
                    v.lastdeltay = 0,
                    v.rail.drag || v.doScrollBy(e)
                }, 15)
            }
            return e.stopImmediatePropagation(),
            e.preventDefault()
        }
        var v = this;
        if (this.version = "3.6.0 [RC8]",
        this.name = "nicescroll",
        this.me = o,
        this.opt = {
            doc: a("body"),
            win: !1
        },
        a.extend(this.opt, f),
        this.opt.snapbackspeed = 80,
        e)
            for (var y in v.opt)
                "undefined" != typeof e[y] && (v.opt[y] = e[y]);
        this.doc = v.opt.doc,
        this.iddoc = this.doc && this.doc[0] ? this.doc[0].id || "" : "",
        this.ispage = /^BODY|HTML/.test(v.opt.win ? v.opt.win[0].nodeName : this.doc[0].nodeName),
        this.haswrapper = v.opt.win !== !1,
        this.win = v.opt.win || (this.ispage ? a(window) : this.doc),
        this.docscroll = this.ispage && !this.haswrapper ? a(window) : this.win,
        this.body = a("body"),
        this.viewport = !1,
        this.isfixed = !1,
        this.iframe = !1,
        this.isiframe = "IFRAME" == this.doc[0].nodeName && "IFRAME" == this.win[0].nodeName,
        this.istextarea = "TEXTAREA" == this.win[0].nodeName,
        this.forcescreen = !1,
        this.canshowonmouseevent = "scroll" != v.opt.autohidemode,
        this.onmousedown = !1,
        this.onmouseup = !1,
        this.onmousemove = !1,
        this.onmousewheel = !1,
        this.onkeypress = !1,
        this.ongesturezoom = !1,
        this.onclick = !1,
        this.onscrollstart = !1,
        this.onscrollend = !1,
        this.onscrollcancel = !1,
        this.onzoomin = !1,
        this.onzoomout = !1,
        this.view = !1,
        this.page = !1,
        this.scroll = {
            x: 0,
            y: 0
        },
        this.scrollratio = {
            x: 0,
            y: 0
        },
        this.cursorheight = 20,
        this.scrollvaluemax = 0,
        this.isrtlmode = "auto" == this.opt.rtlmode ? "rtl" == (this.win[0] == window ? this.body : this.win).css("direction") : this.opt.rtlmode === !0,
        this.scrollrunning = !1,
        this.scrollmom = !1,
        this.observer = !1,
        this.observerremover = !1,
        this.observerbody = !1;
        do
            this.id = "ascrail" + s++;
        while (document.getElementById(this.id));
        this.rail = !1,
        this.cursor = !1,
        this.cursorfreezed = !1,
        this.selectiondrag = !1,
        this.zoom = !1,
        this.zoomactive = !1,
        this.hasfocus = !1,
        this.hasmousefocus = !1,
        this.visibility = !0,
        this.railslocked = !1,
        this.locked = !1,
        this.hidden = !1,
        this.cursoractive = !0,
        this.wheelprevented = !1,
        this.overflowx = v.opt.overflowx,
        this.overflowy = v.opt.overflowy,
        this.nativescrollingarea = !1,
        this.checkarea = 0,
        this.events = [],
        this.saved = {},
        this.delaylist = {},
        this.synclist = {},
        this.lastdeltax = 0,
        this.lastdeltay = 0,
        this.detected = w();
        var x = a.extend({}, this.detected);
        this.canhwscroll = x.hastransform && v.opt.hwacceleration,
        this.ishwscroll = this.canhwscroll && v.haswrapper,
        this.hasreversehr = this.isrtlmode && !x.iswebkit,
        this.istouchcapable = !1,
        !x.cantouch || x.isios || x.isandroid || !x.iswebkit && !x.ismozilla || (this.istouchcapable = !0,
        x.cantouch = !1),
        v.opt.enablemouselockapi || (x.hasmousecapture = !1,
        x.haspointerlock = !1),
        this.debounced = function(e, o, t) {
            var r = v.delaylist[e];
            v.delaylist[e] = o,
            r || setTimeout(function() {
                var o = v.delaylist[e];
                v.delaylist[e] = !1,
                o.call(v)
            }, t)
        }
        ;
        var S = !1;
        this.synched = function(e, o) {
            function t() {
                S || (d(function() {
                    S = !1;
                    for (var e in v.synclist) {
                        var o = v.synclist[e];
                        o && o.call(v),
                        v.synclist[e] = !1
                    }
                }),
                S = !0)
            }
            return v.synclist[e] = o,
            t(),
            e
        }
        ,
        this.unsynched = function(e) {
            v.synclist[e] && (v.synclist[e] = !1)
        }
        ,
        this.css = function(e, o) {
            for (var t in o)
                v.saved.css.push([e, t, e.css(t)]),
                e.css(t, o[t])
        }
        ,
        this.scrollTop = function(e) {
            return "undefined" == typeof e ? v.getScrollTop() : v.setScrollTop(e)
        }
        ,
        this.scrollLeft = function(e) {
            return "undefined" == typeof e ? v.getScrollLeft() : v.setScrollLeft(e)
        }
        ;
        var z = function(e, o, t, r, i, n, s) {
            this.st = e,
            this.ed = o,
            this.spd = t,
            this.p1 = r || 0,
            this.p2 = i || 1,
            this.p3 = n || 0,
            this.p4 = s || 1,
            this.ts = (new Date).getTime(),
            this.df = this.ed - this.st
        };
        if (z.prototype = {
            B2: function(e) {
                return 3 * e * e * (1 - e)
            },
            B3: function(e) {
                return 3 * e * (1 - e) * (1 - e)
            },
            B4: function(e) {
                return (1 - e) * (1 - e) * (1 - e)
            },
            getNow: function() {
                var e = (new Date).getTime()
                  , o = 1 - (e - this.ts) / this.spd
                  , t = this.B2(o) + this.B3(o) + this.B4(o);
                return 0 > o ? this.ed : this.st + Math.round(this.df * t)
            },
            update: function(e, o) {
                return this.st = this.getNow(),
                this.ed = e,
                this.spd = o,
                this.ts = (new Date).getTime(),
                this.df = this.ed - this.st,
                this
            }
        },
        this.ishwscroll) {
            this.doc.translate = {
                x: 0,
                y: 0,
                tx: "0px",
                ty: "0px"
            },
            x.hastranslate3d && x.isios && this.doc.css("-webkit-backface-visibility", "hidden"),
            this.getScrollTop = function(e) {
                if (!e) {
                    var o = t();
                    if (o)
                        return 16 == o.length ? -o[13] : -o[5];
                    if (v.timerscroll && v.timerscroll.bz)
                        return v.timerscroll.bz.getNow()
                }
                return v.doc.translate.y
            }
            ,
            this.getScrollLeft = function(e) {
                if (!e) {
                    var o = t();
                    if (o)
                        return 16 == o.length ? -o[12] : -o[4];
                    if (v.timerscroll && v.timerscroll.bh)
                        return v.timerscroll.bh.getNow()
                }
                return v.doc.translate.x
            }
            ,
            this.notifyScrollEvent = function(e) {
                var o = document.createEvent("UIEvents");
                o.initUIEvent("scroll", !1, !0, window, 1),
                o.niceevent = !0,
                e.dispatchEvent(o)
            }
            ;
            var T = this.isrtlmode ? 1 : -1;
            x.hastranslate3d && v.opt.enabletranslate3d ? (this.setScrollTop = function(e, o) {
                v.doc.translate.y = e,
                v.doc.translate.ty = -1 * e + "px",
                v.doc.css(x.trstyle, "translate3d(" + v.doc.translate.tx + "," + v.doc.translate.ty + ",0px)"),
                o || v.notifyScrollEvent(v.win[0])
            }
            ,
            this.setScrollLeft = function(e, o) {
                v.doc.translate.x = e,
                v.doc.translate.tx = e * T + "px",
                v.doc.css(x.trstyle, "translate3d(" + v.doc.translate.tx + "," + v.doc.translate.ty + ",0px)"),
                o || v.notifyScrollEvent(v.win[0])
            }
            ) : (this.setScrollTop = function(e, o) {
                v.doc.translate.y = e,
                v.doc.translate.ty = -1 * e + "px",
                v.doc.css(x.trstyle, "translate(" + v.doc.translate.tx + "," + v.doc.translate.ty + ")"),
                o || v.notifyScrollEvent(v.win[0])
            }
            ,
            this.setScrollLeft = function(e, o) {
                v.doc.translate.x = e,
                v.doc.translate.tx = e * T + "px",
                v.doc.css(x.trstyle, "translate(" + v.doc.translate.tx + "," + v.doc.translate.ty + ")"),
                o || v.notifyScrollEvent(v.win[0])
            }
            )
        } else
            this.getScrollTop = function() {
                return v.docscroll.scrollTop()
            }
            ,
            this.setScrollTop = function(e) {
                return v.docscroll.scrollTop(e)
            }
            ,
            this.getScrollLeft = function() {
                return v.detected.ismozilla && v.isrtlmode ? Math.abs(v.docscroll.scrollLeft()) : v.docscroll.scrollLeft()
            }
            ,
            this.setScrollLeft = function(e) {
                return v.docscroll.scrollLeft(v.detected.ismozilla && v.isrtlmode ? -e : e)
            }
            ;
        this.getTarget = function(e) {
            return e ? e.target ? e.target : e.srcElement ? e.srcElement : !1 : !1
        }
        ,
        this.hasParent = function(e, o) {
            if (!e)
                return !1;
            for (var t = e.target || e.srcElement || e || !1; t && t.id != o; )
                t = t.parentNode || !1;
            return t !== !1
        }
        ;
        var k = {
            thin: 1,
            medium: 3,
            thick: 5
        };
        this.getDocumentScrollOffset = function() {
            return {
                top: window.pageYOffset || document.documentElement.scrollTop,
                left: window.pageXOffset || document.documentElement.scrollLeft
            }
        }
        ,
        this.getOffset = function() {
            if (v.isfixed) {
                var e = v.win.offset()
                  , o = v.getDocumentScrollOffset();
                return e.top -= o.top,
                e.left -= o.left,
                e
            }
            var t = v.win.offset();
            if (!v.viewport)
                return t;
            var r = v.viewport.offset();
            return {
                top: t.top - r.top,
                left: t.left - r.left
            }
        }
        ,
        this.updateScrollBar = function(e) {
            if (v.ishwscroll)
                v.rail.css({
                    height: v.win.innerHeight() - (v.opt.railpadding.top + v.opt.railpadding.bottom)
                }),
                v.railh && v.railh.css({
                    width: v.win.innerWidth() - (v.opt.railpadding.left + v.opt.railpadding.right)
                });
            else {
                var o = v.getOffset()
                  , t = {
                    top: o.top,
                    left: o.left - (v.opt.railpadding.left + v.opt.railpadding.right)
                };
                t.top += h(v.win, "border-top-width", !0),
                t.left += v.rail.align ? v.win.outerWidth() - h(v.win, "border-right-width") - v.rail.width : h(v.win, "border-left-width");
                var r = v.opt.railoffset;
                if (r && (r.top && (t.top += r.top),
                v.rail.align && r.left && (t.left += r.left)),
                v.railslocked || v.rail.css({
                    top: t.top,
                    left: t.left,
                    height: (e ? e.h : v.win.innerHeight()) - (v.opt.railpadding.top + v.opt.railpadding.bottom)
                }),
                v.zoom && v.zoom.css({
                    top: t.top + 1,
                    left: 1 == v.rail.align ? t.left - 20 : t.left + v.rail.width + 4
                }),
                v.railh && !v.railslocked) {
                    var t = {
                        top: o.top,
                        left: o.left
                    }
                      , r = v.opt.railhoffset;
                    r && (r.top && (t.top += r.top),
                    r.left && (t.left += r.left));
                    var i = v.railh.align ? t.top + h(v.win, "border-top-width", !0) + v.win.innerHeight() - v.railh.height : t.top + h(v.win, "border-top-width", !0)
                      , n = t.left + h(v.win, "border-left-width");
                    v.railh.css({
                        top: i - (v.opt.railpadding.top + v.opt.railpadding.bottom),
                        left: n,
                        width: v.railh.width
                    })
                }
            }
        }
        ,
        this.doRailClick = function(e, o, t) {
            var r, i, n, s;
            v.railslocked || (v.cancelEvent(e),
            o ? (r = t ? v.doScrollLeft : v.doScrollTop,
            n = t ? (e.pageX - v.railh.offset().left - v.cursorwidth / 2) * v.scrollratio.x : (e.pageY - v.rail.offset().top - v.cursorheight / 2) * v.scrollratio.y,
            r(n)) : (r = t ? v.doScrollLeftBy : v.doScrollBy,
            n = t ? v.scroll.x : v.scroll.y,
            s = t ? e.pageX - v.railh.offset().left : e.pageY - v.rail.offset().top,
            i = t ? v.view.w : v.view.h,
            r(n >= s ? i : -i)))
        }
        ,
        v.hasanimationframe = d,
        v.hascancelanimationframe = u,
        v.hasanimationframe ? v.hascancelanimationframe || (u = function() {
            v.cancelAnimationFrame = !0
        }
        ) : (d = function(e) {
            return setTimeout(e, 15 - Math.floor(+new Date / 1e3) % 16)
        }
        ,
        u = clearInterval),
        this.init = function() {
            if (v.saved.css = [],
            x.isie7mobile)
                return !0;
            if (x.isoperamini)
                return !0;
            if (x.hasmstouch && v.css(v.ispage ? a("html") : v.win, {
                "-ms-touch-action": "none"
            }),
            v.zindex = "auto",
            v.ispage || "auto" != v.opt.zindex ? v.zindex = v.opt.zindex : v.zindex = c() || "auto",
            v.ispage || "auto" == v.zindex || v.zindex > l && (l = v.zindex),
            v.isie && 0 == v.zindex && "auto" == v.opt.zindex && (v.zindex = "auto"),
            !v.ispage || !x.cantouch && !x.isieold && !x.isie9mobile) {
                var e = v.docscroll;
                v.ispage && (e = v.haswrapper ? v.win : v.doc),
                x.isie9mobile || v.css(e, {
                    "overflow-y": "hidden"
                }),
                v.ispage && x.isie7 && ("BODY" == v.doc[0].nodeName ? v.css(a("html"), {
                    "overflow-y": "hidden"
                }) : "HTML" == v.doc[0].nodeName && v.css(a("body"), {
                    "overflow-y": "hidden"
                })),
                !x.isios || v.ispage || v.haswrapper || v.css(a("body"), {
                    "-webkit-overflow-scrolling": "touch"
                });
                var o = a(document.createElement("div"));
                o.css({
                    position: "relative",
                    top: 0,
                    "float": "right",
                    width: v.opt.cursorwidth,
                    height: "0px",
                    "background-color": v.opt.cursorcolor,
                    border: v.opt.cursorborder,
                    "background-clip": "padding-box",
                    "-webkit-border-radius": v.opt.cursorborderradius,
                    "-moz-border-radius": v.opt.cursorborderradius,
                    "border-radius": v.opt.cursorborderradius
                }),
                o.hborder = parseFloat(o.outerHeight() - o.innerHeight()),
                o.addClass("nicescroll-cursors"),
                v.cursor = o;
                var t = a(document.createElement("div"));
                t.attr("id", v.id);
                var s = v.win.attr("class");
                t.addClass("nicescroll-rails nicescroll-rails-vr scroll_" + s);
                var d, u, h = ["left", "right", "top", "bottom"];
                for (var p in h)
                    u = h[p],
                    d = v.opt.railpadding[u],
                    d ? t.css("padding-" + u, d + "px") : v.opt.railpadding[u] = 0;
                t.append(o),
                t.width = Math.max(parseFloat(v.opt.cursorwidth), o.outerWidth()),
                t.css({
                    width: t.width + "px",
                    zIndex: v.zindex,
                    background: v.opt.background,
                    cursor: "default"
                }),
                t.visibility = !0,
                t.scrollable = !0,
                t.align = "left" == v.opt.railalign ? 0 : 1,
                v.rail = t,
                v.rail.drag = !1;
                var f = !1;
                !v.opt.boxzoom || v.ispage || x.isieold || (f = document.createElement("div"),
                v.bind(f, "click", v.doZoom),
                v.bind(f, "mouseenter", function() {
                    v.zoom.css("opacity", v.opt.cursoropacitymax)
                }),
                v.bind(f, "mouseleave", function() {
                    v.zoom.css("opacity", v.opt.cursoropacitymin)
                }),
                v.zoom = a(f),
                v.zoom.css({
                    cursor: "pointer",
                    "z-index": v.zindex,
                    backgroundImage: "url(" + v.opt.scriptpath + "zoomico.png)",
                    height: 18,
                    width: 18,
                    backgroundPosition: "0px 0px"
                }),
                v.opt.dblclickzoom && v.bind(v.win, "dblclick", v.doZoom),
                x.cantouch && v.opt.gesturezoom && (v.ongesturezoom = function(e) {
                    return e.scale > 1.5 && v.doZoomIn(e),
                    e.scale < .8 && v.doZoomOut(e),
                    v.cancelEvent(e)
                }
                ,
                v.bind(v.win, "gestureend", v.ongesturezoom))),
                v.railh = !1;
                var g;
                if (v.opt.horizrailenabled) {
                    v.css(e, {
                        "overflow-x": "hidden"
                    });
                    var o = a(document.createElement("div"));
                    o.css({
                        position: "absolute",
                        top: 0,
                        height: v.opt.cursorwidth,
                        width: "0px",
                        "background-color": v.opt.cursorcolor,
                        border: v.opt.cursorborder,
                        "background-clip": "padding-box",
                        "-webkit-border-radius": v.opt.cursorborderradius,
                        "-moz-border-radius": v.opt.cursorborderradius,
                        "border-radius": v.opt.cursorborderradius
                    }),
                    x.isieold && o.css({
                        overflow: "hidden"
                    }),
                    o.wborder = parseFloat(o.outerWidth() - o.innerWidth()),
                    o.addClass("nicescroll-cursors"),
                    v.cursorh = o,
                    g = a(document.createElement("div")),
                    g.attr("id", v.id + "-hr");
                    var s = v.win.attr("class");
                    g.addClass("nicescroll-rails nicescroll-rails-hr scroll_" + s),
                    g.height = Math.max(parseFloat(v.opt.cursorwidth), o.outerHeight()),
                    g.css({
                        height: g.height + "px",
                        zIndex: v.zindex,
                        background: v.opt.background
                    }),
                    g.append(o),
                    g.visibility = !0,
                    g.scrollable = !0,
                    g.align = "top" == v.opt.railvalign ? 0 : 1,
                    v.railh = g,
                    v.railh.drag = !1
                }
                if (v.ispage)
                    t.css({
                        position: "fixed",
                        top: "0px",
                        height: "100%"
                    }),
                    t.align ? t.css({
                        right: "0px"
                    }) : t.css({
                        left: "0px"
                    }),
                    v.body.append(t),
                    v.railh && (g.css({
                        position: "fixed",
                        left: "0px",
                        width: "100%"
                    }),
                    g.align ? g.css({
                        bottom: "0px"
                    }) : g.css({
                        top: "0px"
                    }),
                    v.body.append(g));
                else {
                    if (v.ishwscroll) {
                        "static" == v.win.css("position") && v.css(v.win, {
                            position: "relative"
                        });
                        var w = "HTML" == v.win[0].nodeName ? v.body : v.win;
                        a(w).scrollTop(0).scrollLeft(0),
                        v.zoom && (v.zoom.css({
                            position: "absolute",
                            top: 1,
                            right: 0,
                            "margin-right": t.width + 4
                        }),
                        w.append(v.zoom)),
                        t.css({
                            position: "absolute",
                            top: 0
                        }),
                        t.align ? t.css({
                            right: 0
                        }) : t.css({
                            left: 0
                        }),
                        w.append(t),
                        g && (g.css({
                            position: "absolute",
                            left: 0,
                            bottom: 0
                        }),
                        g.align ? g.css({
                            bottom: 0
                        }) : g.css({
                            top: 0
                        }),
                        w.append(g))
                    } else {
                        v.isfixed = "fixed" == v.win.css("position");
                        var y = v.isfixed ? "fixed" : "absolute";
                        v.isfixed || (v.viewport = v.getViewport(v.win[0])),
                        v.viewport && (v.body = v.viewport,
                        0 == /fixed|absolute/.test(v.viewport.css("position")) && v.css(v.viewport, {
                            position: "relative"
                        })),
                        t.css({
                            position: y
                        }),
                        v.zoom && v.zoom.css({
                            position: y
                        }),
                        v.updateScrollBar(),
                        v.body.append(t),
                        v.zoom && v.body.append(v.zoom),
                        v.railh && (g.css({
                            position: y
                        }),
                        v.body.append(g))
                    }
                    x.isios && v.css(v.win, {
                        "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
                        "-webkit-touch-callout": "none"
                    }),
                    x.isie && v.opt.disableoutline && v.win.attr("hideFocus", "true"),
                    x.iswebkit && v.opt.disableoutline && v.win.css({
                        outline: "none"
                    })
                }
                if (v.opt.autohidemode === !1 ? (v.autohidedom = !1,
                v.rail.css({
                    opacity: v.opt.cursoropacitymax
                }),
                v.railh && v.railh.css({
                    opacity: v.opt.cursoropacitymax
                })) : v.opt.autohidemode === !0 || "leave" === v.opt.autohidemode ? (v.autohidedom = a().add(v.rail),
                x.isie8 && (v.autohidedom = v.autohidedom.add(v.cursor)),
                v.railh && (v.autohidedom = v.autohidedom.add(v.railh)),
                v.railh && x.isie8 && (v.autohidedom = v.autohidedom.add(v.cursorh))) : "scroll" == v.opt.autohidemode ? (v.autohidedom = a().add(v.rail),
                v.railh && (v.autohidedom = v.autohidedom.add(v.railh))) : "cursor" == v.opt.autohidemode ? (v.autohidedom = a().add(v.cursor),
                v.railh && (v.autohidedom = v.autohidedom.add(v.cursorh))) : "hidden" == v.opt.autohidemode && (v.autohidedom = !1,
                v.hide(),
                v.railslocked = !1),
                x.isie9mobile) {
                    v.scrollmom = new b(v),
                    v.onmangotouch = function() {
                        var e = v.getScrollTop()
                          , o = v.getScrollLeft();
                        if (e == v.scrollmom.lastscrolly && o == v.scrollmom.lastscrollx)
                            return !0;
                        var t = e - v.mangotouch.sy
                          , r = o - v.mangotouch.sx
                          , i = Math.round(Math.sqrt(Math.pow(r, 2) + Math.pow(t, 2)));
                        if (0 != i) {
                            var n = 0 > t ? -1 : 1
                              , s = 0 > r ? -1 : 1
                              , l = +new Date;
                            if (v.mangotouch.lazy && clearTimeout(v.mangotouch.lazy),
                            l - v.mangotouch.tm > 80 || v.mangotouch.dry != n || v.mangotouch.drx != s)
                                v.scrollmom.stop(),
                                v.scrollmom.reset(o, e),
                                v.mangotouch.sy = e,
                                v.mangotouch.ly = e,
                                v.mangotouch.sx = o,
                                v.mangotouch.lx = o,
                                v.mangotouch.dry = n,
                                v.mangotouch.drx = s,
                                v.mangotouch.tm = l;
                            else {
                                v.scrollmom.stop(),
                                v.scrollmom.update(v.mangotouch.sx - r, v.mangotouch.sy - t),
                                v.mangotouch.tm = l;
                                var a = Math.max(Math.abs(v.mangotouch.ly - e), Math.abs(v.mangotouch.lx - o));
                                v.mangotouch.ly = e,
                                v.mangotouch.lx = o,
                                a > 2 && (v.mangotouch.lazy = setTimeout(function() {
                                    v.mangotouch.lazy = !1,
                                    v.mangotouch.dry = 0,
                                    v.mangotouch.drx = 0,
                                    v.mangotouch.tm = 0,
                                    v.scrollmom.doMomentum(30)
                                }, 100))
                            }
                        }
                    }
                    ;
                    var S = v.getScrollTop()
                      , z = v.getScrollLeft();
                    v.mangotouch = {
                        sy: S,
                        ly: S,
                        dry: 0,
                        sx: z,
                        lx: z,
                        drx: 0,
                        lazy: !1,
                        tm: 0
                    },
                    v.bind(v.docscroll, "scroll", v.onmangotouch)
                } else {
                    if (x.cantouch || v.istouchcapable || v.opt.touchbehavior || x.hasmstouch) {
                        v.scrollmom = new b(v),
                        v.ontouchstart = function(e) {
                            if (e.pointerType && 2 != e.pointerType && "touch" != e.pointerType)
                                return !1;
                            if (v.hasmoving = !1,
                            !v.railslocked) {
                                var o;
                                if (x.hasmstouch)
                                    for (o = e.target ? e.target : !1; o; ) {
                                        var t = a(o).getNiceScroll();
                                        if (t.length > 0 && t[0].me == v.me)
                                            break;
                                        if (t.length > 0)
                                            return !1;
                                        if ("DIV" == o.nodeName && o.id == v.id)
                                            break;
                                        o = o.parentNode ? o.parentNode : !1
                                    }
                                if (v.cancelScroll(),
                                o = v.getTarget(e)) {
                                    var r = /INPUT/i.test(o.nodeName) && /range/i.test(o.type);
                                    if (r)
                                        return v.stopPropagation(e)
                                }
                                if (!("clientX"in e) && "changedTouches"in e && (e.clientX = e.changedTouches[0].clientX,
                                e.clientY = e.changedTouches[0].clientY),
                                v.forcescreen) {
                                    var i = e;
                                    e = {
                                        original: e.original ? e.original : e
                                    },
                                    e.clientX = i.screenX,
                                    e.clientY = i.screenY
                                }
                                if (v.rail.drag = {
                                    x: e.clientX,
                                    y: e.clientY,
                                    sx: v.scroll.x,
                                    sy: v.scroll.y,
                                    st: v.getScrollTop(),
                                    sl: v.getScrollLeft(),
                                    pt: 2,
                                    dl: !1
                                },
                                v.ispage || !v.opt.directionlockdeadzone)
                                    v.rail.drag.dl = "f";
                                else {
                                    var n = {
                                        w: a(window).width(),
                                        h: a(window).height()
                                    }
                                      , s = {
                                        w: Math.max(document.body.scrollWidth, document.documentElement.scrollWidth),
                                        h: Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                                    }
                                      , l = Math.max(0, s.h - n.h)
                                      , c = Math.max(0, s.w - n.w);
                                    !v.rail.scrollable && v.railh.scrollable ? v.rail.drag.ck = l > 0 ? "v" : !1 : v.rail.scrollable && !v.railh.scrollable ? v.rail.drag.ck = c > 0 ? "h" : !1 : v.rail.drag.ck = !1,
                                    v.rail.drag.ck || (v.rail.drag.dl = "f")
                                }
                                if (v.opt.touchbehavior && v.isiframe && x.isie) {
                                    var d = v.win.position();
                                    v.rail.drag.x += d.left,
                                    v.rail.drag.y += d.top
                                }
                                if (v.hasmoving = !1,
                                v.lastmouseup = !1,
                                v.scrollmom.reset(e.clientX, e.clientY),
                                !x.cantouch && !this.istouchcapable && !e.pointerType) {
                                    var u = o ? /INPUT|SELECT|TEXTAREA/i.test(o.nodeName) : !1;
                                    if (!u)
                                        return !v.ispage && x.hasmousecapture && o.setCapture(),
                                        v.opt.touchbehavior ? (o.onclick && !o._onclick && (o._onclick = o.onclick,
                                        o.onclick = function(e) {
                                            return v.hasmoving ? !1 : void o._onclick.call(this, e)
                                        }
                                        ),
                                        v.cancelEvent(e)) : v.stopPropagation(e);
                                    /SUBMIT|CANCEL|BUTTON/i.test(a(o).attr("type")) && (pc = {
                                        tg: o,
                                        click: !1
                                    },
                                    v.preventclick = pc)
                                }
                            }
                        }
                        ,
                        v.ontouchend = function(e) {
                            if (!v.rail.drag)
                                return !0;
                            if (2 == v.rail.drag.pt) {
                                if (e.pointerType && 2 != e.pointerType && "touch" != e.pointerType)
                                    return !1;
                                if (v.scrollmom.doMomentum(),
                                v.rail.drag = !1,
                                v.hasmoving && (v.lastmouseup = !0,
                                v.hideCursor(),
                                x.hasmousecapture && document.releaseCapture(),
                                !x.cantouch))
                                    return v.cancelEvent(e)
                            } else if (1 == v.rail.drag.pt)
                                return v.onmouseup(e)
                        }
                        ;
                        var T = v.opt.touchbehavior && v.isiframe && !x.hasmousecapture;
                        v.ontouchmove = function(e, o) {
                            if (!v.rail.drag)
                                return !1;
                            if (e.targetTouches && v.opt.preventmultitouchscrolling && e.targetTouches.length > 1)
                                return !1;
                            if (e.pointerType && 2 != e.pointerType && "touch" != e.pointerType)
                                return !1;
                            if (2 == v.rail.drag.pt) {
                                if (x.cantouch && x.isios && "undefined" == typeof e.original)
                                    return !0;
                                v.hasmoving = !0,
                                v.preventclick && !v.preventclick.click && (v.preventclick.click = v.preventclick.tg.onclick || !1,
                                v.preventclick.tg.onclick = v.onpreventclick);
                                var t = a.extend({
                                    original: e
                                }, e);
                                if (e = t,
                                "changedTouches"in e && (e.clientX = e.changedTouches[0].clientX,
                                e.clientY = e.changedTouches[0].clientY),
                                v.forcescreen) {
                                    var r = e;
                                    e = {
                                        original: e.original ? e.original : e
                                    },
                                    e.clientX = r.screenX,
                                    e.clientY = r.screenY
                                }
                                var i, n;
                                if (n = i = 0,
                                T && !o) {
                                    var s = v.win.position();
                                    n = -s.left,
                                    i = -s.top
                                }
                                var l = e.clientY + i
                                  , c = l - v.rail.drag.y
                                  , d = e.clientX + n
                                  , u = d - v.rail.drag.x
                                  , h = v.rail.drag.st - c;
                                v.ishwscroll && v.opt.bouncescroll ? 0 > h ? h = Math.round(h / 2) : h > v.page.maxh && (h = v.page.maxh + Math.round((h - v.page.maxh) / 2)) : (0 > h && (h = 0,
                                l = 0),
                                h > v.page.maxh && (h = v.page.maxh,
                                l = 0));
                                var p;
                                v.railh && v.railh.scrollable && (p = v.isrtlmode ? u - v.rail.drag.sl : v.rail.drag.sl - u,
                                v.ishwscroll && v.opt.bouncescroll ? 0 > p ? p = Math.round(p / 2) : p > v.page.maxw && (p = v.page.maxw + Math.round((p - v.page.maxw) / 2)) : (0 > p && (p = 0,
                                d = 0),
                                p > v.page.maxw && (p = v.page.maxw,
                                d = 0)));
                                var m = !1;
                                if (v.rail.drag.dl)
                                    m = !0,
                                    "v" == v.rail.drag.dl ? p = v.rail.drag.sl : "h" == v.rail.drag.dl && (h = v.rail.drag.st);
                                else {
                                    var f = Math.abs(c)
                                      , g = Math.abs(u)
                                      , w = v.opt.directionlockdeadzone;
                                    if ("v" == v.rail.drag.ck) {
                                        if (f > w && .3 * f >= g)
                                            return v.rail.drag = !1,
                                            !0;
                                        g > w && (v.rail.drag.dl = "f",
                                        a("body").scrollTop(a("body").scrollTop()))
                                    } else if ("h" == v.rail.drag.ck) {
                                        if (g > w && .3 * g >= f)
                                            return v.rail.drag = !1,
                                            !0;
                                        f > w && (v.rail.drag.dl = "f",
                                        a("body").scrollLeft(a("body").scrollLeft()))
                                    }
                                }
                                if (v.synched("touchmove", function() {
                                    v.rail.drag && 2 == v.rail.drag.pt && (v.prepareTransition && v.prepareTransition(0),
                                    v.rail.scrollable && v.setScrollTop(h),
                                    v.scrollmom.update(d, l),
                                    v.railh && v.railh.scrollable ? (v.setScrollLeft(p),
                                    v.showCursor(h, p)) : v.showCursor(h),
                                    x.isie10 && document.selection.clear())
                                }),
                                x.ischrome && v.istouchcapable && (m = !1),
                                m)
                                    return v.cancelEvent(e)
                            } else if (1 == v.rail.drag.pt)
                                return v.onmousemove(e)
                        }
                    }
                    if (v.onmousedown = function(e, o) {
                        if (!v.rail.drag || 1 == v.rail.drag.pt) {
                            if (v.railslocked)
                                return v.cancelEvent(e);
                            v.cancelScroll(),
                            v.rail.drag = {
                                x: e.clientX,
                                y: e.clientY,
                                sx: v.scroll.x,
                                sy: v.scroll.y,
                                pt: 1,
                                hr: !!o
                            };
                            var t = v.getTarget(e);
                            return !v.ispage && x.hasmousecapture && t.setCapture(),
                            v.isiframe && !x.hasmousecapture && (v.saved.csspointerevents = v.doc.css("pointer-events"),
                            v.css(v.doc, {
                                "pointer-events": "none"
                            })),
                            v.hasmoving = !1,
                            v.cancelEvent(e)
                        }
                    }
                    ,
                    v.onmouseup = function(e) {
                        return v.rail.drag ? 1 != v.rail.drag.pt ? !0 : (x.hasmousecapture && document.releaseCapture(),
                        v.isiframe && !x.hasmousecapture && v.doc.css("pointer-events", v.saved.csspointerevents),
                        v.rail.drag = !1,
                        v.hasmoving && v.triggerScrollEnd(),
                        v.cancelEvent(e)) : void 0
                    }
                    ,
                    v.onmousemove = function(e) {
                        if (v.rail.drag) {
                            if (1 != v.rail.drag.pt)
                                return;
                            if (x.ischrome && 0 == e.which)
                                return v.onmouseup(e);
                            if (v.cursorfreezed = !0,
                            v.hasmoving = !0,
                            v.rail.drag.hr) {
                                v.scroll.x = v.rail.drag.sx + (e.clientX - v.rail.drag.x),
                                v.scroll.x < 0 && (v.scroll.x = 0);
                                var o = v.scrollvaluemaxw;
                                v.scroll.x > o && (v.scroll.x = o)
                            } else {
                                v.scroll.y = v.rail.drag.sy + (e.clientY - v.rail.drag.y),
                                v.scroll.y < 0 && (v.scroll.y = 0);
                                var t = v.scrollvaluemax;
                                v.scroll.y > t && (v.scroll.y = t)
                            }
                            return v.synched("mousemove", function() {
                                v.rail.drag && 1 == v.rail.drag.pt && (v.showCursor(),
                                v.rail.drag.hr ? v.hasreversehr ? v.doScrollLeft(v.scrollvaluemaxw - Math.round(v.scroll.x * v.scrollratio.x), v.opt.cursordragspeed) : v.doScrollLeft(Math.round(v.scroll.x * v.scrollratio.x), v.opt.cursordragspeed) : v.doScrollTop(Math.round(v.scroll.y * v.scrollratio.y), v.opt.cursordragspeed))
                            }),
                            v.cancelEvent(e)
                        }
                    }
                    ,
                    x.cantouch || v.opt.touchbehavior)
                        v.onpreventclick = function(e) {
                            return v.preventclick ? (v.preventclick.tg.onclick = v.preventclick.click,
                            v.preventclick = !1,
                            v.cancelEvent(e)) : void 0
                        }
                        ,
                        v.bind(v.win, "mousedown", v.ontouchstart),
                        v.onclick = x.isios ? !1 : function(e) {
                            return v.lastmouseup ? (v.lastmouseup = !1,
                            v.cancelEvent(e)) : !0
                        }
                        ,
                        v.opt.grabcursorenabled && x.cursorgrabvalue && (v.css(v.ispage ? v.doc : v.win, {
                            cursor: x.cursorgrabvalue
                        }),
                        v.css(v.rail, {
                            cursor: x.cursorgrabvalue
                        }));
                    else {
                        var k = function(e) {
                            if (v.selectiondrag) {
                                if (e) {
                                    var o = v.win.outerHeight()
                                      , t = e.pageY - v.selectiondrag.top;
                                    t > 0 && o > t && (t = 0),
                                    t >= o && (t -= o),
                                    v.selectiondrag.df = t
                                }
                                if (0 != v.selectiondrag.df) {
                                    var r = 2 * -Math.floor(v.selectiondrag.df / 6);
                                    v.doScrollBy(r),
                                    v.debounced("doselectionscroll", function() {
                                        k()
                                    }, 50)
                                }
                            }
                        };
                        "getSelection"in document ? v.hasTextSelected = function() {
                            return document.getSelection().rangeCount > 0
                        }
                        : "selection"in document ? v.hasTextSelected = function() {
                            return "None" != document.selection.type
                        }
                        : v.hasTextSelected = function() {
                            return !1
                        }
                        ,
                        v.onselectionstart = function(e) {
                            v.ispage || (v.selectiondrag = v.win.offset())
                        }
                        ,
                        v.onselectionend = function(e) {
                            v.selectiondrag = !1
                        }
                        ,
                        v.onselectiondrag = function(e) {
                            v.selectiondrag && v.hasTextSelected() && v.debounced("selectionscroll", function() {
                                k(e)
                            }, 250)
                        }
                    }
                    x.hasw3ctouch ? (v.css(v.rail, {
                        "touch-action": "none"
                    }),
                    v.css(v.cursor, {
                        "touch-action": "none"
                    }),
                    v.bind(v.win, "pointerdown", v.ontouchstart),
                    v.bind(document, "pointerup", v.ontouchend),
                    v.bind(document, "pointermove", v.ontouchmove)) : x.hasmstouch ? (v.css(v.rail, {
                        "-ms-touch-action": "none"
                    }),
                    v.css(v.cursor, {
                        "-ms-touch-action": "none"
                    }),
                    v.bind(v.win, "MSPointerDown", v.ontouchstart),
                    v.bind(document, "MSPointerUp", v.ontouchend),
                    v.bind(document, "MSPointerMove", v.ontouchmove),
                    v.bind(v.cursor, "MSGestureHold", function(e) {
                        e.preventDefault()
                    }),
                    v.bind(v.cursor, "contextmenu", function(e) {
                        e.preventDefault()
                    })) : this.istouchcapable && (v.bind(v.win, "touchstart", v.ontouchstart),
                    v.bind(document, "touchend", v.ontouchend),
                    v.bind(document, "touchcancel", v.ontouchend),
                    v.bind(document, "touchmove", v.ontouchmove)),
                    (v.opt.cursordragontouch || !x.cantouch && !v.opt.touchbehavior) && (v.rail.css({
                        cursor: "default"
                    }),
                    v.railh && v.railh.css({
                        cursor: "default"
                    }),
                    v.jqbind(v.rail, "mouseenter", function() {
                        return v.ispage || v.win.is(":visible") ? (v.canshowonmouseevent && v.showCursor(),
                        void (v.rail.active = !0)) : !1
                    }),
                    v.jqbind(v.rail, "mouseleave", function() {
                        v.rail.active = !1,
                        v.rail.drag || v.hideCursor()
                    }),
                    v.opt.sensitiverail && (v.bind(v.rail, "click", function(e) {
                        v.doRailClick(e, !1, !1)
                    }),
                    v.bind(v.rail, "dblclick", function(e) {
                        v.doRailClick(e, !0, !1)
                    }),
                    v.bind(v.cursor, "click", function(e) {
                        v.cancelEvent(e)
                    }),
                    v.bind(v.cursor, "dblclick", function(e) {
                        v.cancelEvent(e)
                    })),
                    v.railh && (v.jqbind(v.railh, "mouseenter", function() {
                        return v.ispage || v.win.is(":visible") ? (v.canshowonmouseevent && v.showCursor(),
                        void (v.rail.active = !0)) : !1
                    }),
                    v.jqbind(v.railh, "mouseleave", function() {
                        v.rail.active = !1,
                        v.rail.drag || v.hideCursor()
                    }),
                    v.opt.sensitiverail && (v.bind(v.railh, "click", function(e) {
                        v.doRailClick(e, !1, !0)
                    }),
                    v.bind(v.railh, "dblclick", function(e) {
                        v.doRailClick(e, !0, !0)
                    }),
                    v.bind(v.cursorh, "click", function(e) {
                        v.cancelEvent(e)
                    }),
                    v.bind(v.cursorh, "dblclick", function(e) {
                        v.cancelEvent(e)
                    })))),
                    x.cantouch || v.opt.touchbehavior ? (v.bind(x.hasmousecapture ? v.win : document, "mouseup", v.ontouchend),
                    v.bind(document, "mousemove", v.ontouchmove),
                    v.onclick && v.bind(document, "click", v.onclick),
                    v.opt.cursordragontouch && (v.bind(v.cursor, "mousedown", v.onmousedown),
                    v.bind(v.cursor, "mouseup", v.onmouseup),
                    v.cursorh && v.bind(v.cursorh, "mousedown", function(e) {
                        v.onmousedown(e, !0)
                    }),
                    v.cursorh && v.bind(v.cursorh, "mouseup", v.onmouseup))) : (v.bind(x.hasmousecapture ? v.win : document, "mouseup", v.onmouseup),
                    v.bind(document, "mousemove", v.onmousemove),
                    v.onclick && v.bind(document, "click", v.onclick),
                    v.bind(v.cursor, "mousedown", v.onmousedown),
                    v.bind(v.cursor, "mouseup", v.onmouseup),
                    v.railh && (v.bind(v.cursorh, "mousedown", function(e) {
                        v.onmousedown(e, !0)
                    }),
                    v.bind(v.cursorh, "mouseup", v.onmouseup)),
                    !v.ispage && v.opt.enablescrollonselection && (v.bind(v.win[0], "mousedown", v.onselectionstart),
                    v.bind(document, "mouseup", v.onselectionend),
                    v.bind(v.cursor, "mouseup", v.onselectionend),
                    v.cursorh && v.bind(v.cursorh, "mouseup", v.onselectionend),
                    v.bind(document, "mousemove", v.onselectiondrag)),
                    v.zoom && (v.jqbind(v.zoom, "mouseenter", function() {
                        v.canshowonmouseevent && v.showCursor(),
                        v.rail.active = !0
                    }),
                    v.jqbind(v.zoom, "mouseleave", function() {
                        v.rail.active = !1,
                        v.rail.drag || v.hideCursor()
                    }))),
                    v.opt.enablemousewheel && (v.isiframe || v.bind(x.isie && v.ispage ? document : v.win, "mousewheel", v.onmousewheel),
                    v.bind(v.rail, "mousewheel", v.onmousewheel),
                    v.railh && v.bind(v.railh, "mousewheel", v.onmousewheelhr)),
                    v.ispage || x.cantouch || /HTML|^BODY/.test(v.win[0].nodeName) || (v.win.attr("tabindex") || v.win.attr({
                        tabindex: n++
                    }),
                    v.jqbind(v.win, "focus", function(e) {
                        r = v.getTarget(e).id || !0,
                        v.hasfocus = !0,
                        v.canshowonmouseevent && v.noticeCursor()
                    }),
                    v.jqbind(v.win, "blur", function(e) {
                        r = !1,
                        v.hasfocus = !1
                    }),
                    v.jqbind(v.win, "mouseenter", function(e) {
                        i = v.getTarget(e).id || !0,
                        v.hasmousefocus = !0,
                        v.canshowonmouseevent && v.noticeCursor()
                    }),
                    v.jqbind(v.win, "mouseleave", function() {
                        i = !1,
                        v.hasmousefocus = !1,
                        v.rail.drag || v.hideCursor()
                    }))
                }
                if (v.onkeypress = function(e) {
                    if (v.railslocked && 0 == v.page.maxh)
                        return !0;
                    e = e ? e : window.e;
                    var o = v.getTarget(e);
                    if (o && /INPUT|TEXTAREA|SELECT|OPTION/.test(o.nodeName)) {
                        var t = o.getAttribute("type") || o.type || !1;
                        if (!t || !/submit|button|cancel/i.tp)
                            return !0
                    }
                    if (a(o).attr("contenteditable"))
                        return !0;
                    if (v.hasfocus || v.hasmousefocus && !r || v.ispage && !r && !i) {
                        var n = e.keyCode;
                        if (v.railslocked && 27 != n)
                            return v.cancelEvent(e);
                        var s = e.ctrlKey || !1
                          , l = e.shiftKey || !1
                          , c = !1;
                        switch (n) {
                        case 38:
                        case 63233:
                            v.doScrollBy(72),
                            c = !0;
                            break;
                        case 40:
                        case 63235:
                            v.doScrollBy(-72),
                            c = !0;
                            break;
                        case 37:
                        case 63232:
                            v.railh && (s ? v.doScrollLeft(0) : v.doScrollLeftBy(72),
                            c = !0);
                            break;
                        case 39:
                        case 63234:
                            v.railh && (s ? v.doScrollLeft(v.page.maxw) : v.doScrollLeftBy(-72),
                            c = !0);
                            break;
                        case 33:
                        case 63276:
                            v.doScrollBy(v.view.h),
                            c = !0;
                            break;
                        case 34:
                        case 63277:
                            v.doScrollBy(-v.view.h),
                            c = !0;
                            break;
                        case 36:
                        case 63273:
                            v.railh && s ? v.doScrollPos(0, 0) : v.doScrollTo(0),
                            c = !0;
                            break;
                        case 35:
                        case 63275:
                            v.railh && s ? v.doScrollPos(v.page.maxw, v.page.maxh) : v.doScrollTo(v.page.maxh),
                            c = !0;
                            break;
                        case 32:
                            v.opt.spacebarenabled && (l ? v.doScrollBy(v.view.h) : v.doScrollBy(-v.view.h),
                            c = !0);
                            break;
                        case 27:
                            v.zoomactive && (v.doZoom(),
                            c = !0)
                        }
                        if (c)
                            return v.cancelEvent(e)
                    }
                }
                ,
                v.opt.enablekeyboard && v.bind(document, x.isopera && !x.isopera12 ? "keypress" : "keydown", v.onkeypress),
                v.bind(document, "keydown", function(e) {
                    var o = e.ctrlKey || !1;
                    o && (v.wheelprevented = !0)
                }),
                v.bind(document, "keyup", function(e) {
                    var o = e.ctrlKey || !1;
                    o || (v.wheelprevented = !1)
                }),
                v.bind(window, "blur", function(e) {
                    v.wheelprevented = !1
                }),
                v.bind(window, "resize", v.lazyResize),
                v.bind(window, "orientationchange", v.lazyResize),
                v.bind(window, "load", v.lazyResize),
                x.ischrome && !v.ispage && !v.haswrapper) {
                    var M = v.win.attr("style")
                      , E = parseFloat(v.win.css("width")) + 1;
                    v.win.css("width", E),
                    v.synched("chromefix", function() {
                        v.win.attr("style", M)
                    })
                }
                v.onAttributeChange = function(e) {
                    v.lazyResize(v.isieold ? 250 : 30)
                }
                ,
                m !== !1 && (v.observerbody = new m(function(e) {
                    return e.forEach(function(e) {
                        return "attributes" == e.type ? a("body").hasClass("modal-open") ? v.hide() : v.show() : void 0
                    }),
                    document.body.scrollHeight != v.page.maxh ? v.lazyResize(30) : void 0
                }
                ),
                v.observerbody.observe(document.body, {
                    childList: !0,
                    subtree: !0,
                    characterData: !1,
                    attributes: !0,
                    attributeFilter: ["class"]
                })),
                v.ispage || v.haswrapper || (m !== !1 ? (v.observer = new m(function(e) {
                    e.forEach(v.onAttributeChange)
                }
                ),
                v.observer.observe(v.win[0], {
                    childList: !0,
                    characterData: !1,
                    attributes: !0,
                    subtree: !1
                }),
                v.observerremover = new m(function(e) {
                    e.forEach(function(e) {
                        if (e.removedNodes.length > 0)
                            for (var o in e.removedNodes)
                                if (v && e.removedNodes[o] == v.win[0])
                                    return v.remove()
                    })
                }
                ),
                v.observerremover.observe(v.win[0].parentNode, {
                    childList: !0,
                    characterData: !1,
                    attributes: !1,
                    subtree: !1
                })) : (v.bind(v.win, x.isie && !x.isie9 ? "propertychange" : "DOMAttrModified", v.onAttributeChange),
                x.isie9 && v.win[0].attachEvent("onpropertychange", v.onAttributeChange),
                v.bind(v.win, "DOMNodeRemoved", function(e) {
                    e.target == v.win[0] && v.remove()
                }))),
                !v.ispage && v.opt.boxzoom && v.bind(window, "resize", v.resizeZoom),
                v.istextarea && v.bind(v.win, "mouseup", v.lazyResize),
                v.lazyResize(30)
            }
            if ("IFRAME" == this.doc[0].nodeName) {
                var L = function() {
                    v.iframexd = !1;
                    var e;
                    try {
                        e = "contentDocument"in this ? this.contentDocument : this.contentWindow.document;
                        e.domain
                    } catch (o) {
                        v.iframexd = !0,
                        e = !1
                    }
                    if (v.iframexd)
                        return "console"in window && console.log("NiceScroll error: policy restriced iframe"),
                        !0;
                    if (v.forcescreen = !0,
                    v.isiframe && (v.iframe = {
                        doc: a(e),
                        html: v.doc.contents().find("html")[0],
                        body: v.doc.contents().find("body")[0]
                    },
                    v.getContentSize = function() {
                        return {
                            w: Math.max(v.iframe.html.scrollWidth, v.iframe.body.scrollWidth),
                            h: Math.max(v.iframe.html.scrollHeight, v.iframe.body.scrollHeight)
                        }
                    }
                    ,
                    v.docscroll = a(v.iframe.body)),
                    !x.isios && v.opt.iframeautoresize && !v.isiframe) {
                        v.win.scrollTop(0),
                        v.doc.height("");
                        var t = Math.max(e.getElementsByTagName("html")[0].scrollHeight, e.body.scrollHeight);
                        v.doc.height(t)
                    }
                    v.lazyResize(30),
                    x.isie7 && v.css(a(v.iframe.html), {
                        "overflow-y": "hidden"
                    }),
                    v.css(a(v.iframe.body), {
                        "overflow-y": "hidden"
                    }),
                    x.isios && v.haswrapper && v.css(a(e.body), {
                        "-webkit-transform": "translate3d(0,0,0)"
                    }),
                    "contentWindow"in this ? v.bind(this.contentWindow, "scroll", v.onscroll) : v.bind(e, "scroll", v.onscroll),
                    v.opt.enablemousewheel && v.bind(e, "mousewheel", v.onmousewheel),
                    v.opt.enablekeyboard && v.bind(e, x.isopera ? "keypress" : "keydown", v.onkeypress),
                    (x.cantouch || v.opt.touchbehavior) && (v.bind(e, "mousedown", v.ontouchstart),
                    v.bind(e, "mousemove", function(e) {
                        return v.ontouchmove(e, !0)
                    }),
                    v.opt.grabcursorenabled && x.cursorgrabvalue && v.css(a(e.body), {
                        cursor: x.cursorgrabvalue
                    })),
                    v.bind(e, "mouseup", v.ontouchend),
                    v.zoom && (v.opt.dblclickzoom && v.bind(e, "dblclick", v.doZoom),
                    v.ongesturezoom && v.bind(e, "gestureend", v.ongesturezoom))
                };
                this.doc[0].readyState && "complete" == this.doc[0].readyState && setTimeout(function() {
                    L.call(v.doc[0], !1)
                }, 500),
                v.bind(this.doc, "load", L)
            }
        }
        ,
        this.showCursor = function(e, o) {
            if (v.cursortimeout && (clearTimeout(v.cursortimeout),
            v.cursortimeout = 0),
            v.rail) {
                if (v.autohidedom && (v.autohidedom.stop().css({
                    opacity: v.opt.cursoropacitymax
                }),
                v.cursoractive = !0),
                v.rail.drag && 1 == v.rail.drag.pt || ("undefined" != typeof e && e !== !1 && (v.scroll.y = Math.round(1 * e / v.scrollratio.y)),
                "undefined" != typeof o && (v.scroll.x = Math.round(1 * o / v.scrollratio.x))),
                v.cursor.css({
                    height: v.cursorheight,
                    top: v.scroll.y
                }),
                v.cursorh) {
                    var t = v.hasreversehr ? v.scrollvaluemaxw - v.scroll.x : v.scroll.x;
                    !v.rail.align && v.rail.visibility ? v.cursorh.css({
                        width: v.cursorwidth,
                        left: t + v.rail.width
                    }) : v.cursorh.css({
                        width: v.cursorwidth,
                        left: t
                    }),
                    v.cursoractive = !0
                }
                v.zoom && v.zoom.stop().css({
                    opacity: v.opt.cursoropacitymax
                })
            }
        }
        ,
        this.hideCursor = function(e) {
            v.cursortimeout || v.rail && v.autohidedom && (v.hasmousefocus && "leave" == v.opt.autohidemode || (v.cursortimeout = setTimeout(function() {
                v.rail.active && v.showonmouseevent || (v.autohidedom.stop().animate({
                    opacity: v.opt.cursoropacitymin
                }),
                v.zoom && v.zoom.stop().animate({
                    opacity: v.opt.cursoropacitymin
                }),
                v.cursoractive = !1),
                v.cursortimeout = 0
            }, e || v.opt.hidecursordelay)))
        }
        ,
        this.noticeCursor = function(e, o, t) {
            v.showCursor(o, t),
            v.rail.active || v.hideCursor(e)
        }
        ,
        this.getContentSize = v.ispage ? function() {
            return {
                w: Math.max(document.body.scrollWidth, document.documentElement.scrollWidth),
                h: Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            }
        }
        : v.haswrapper ? function() {
            return {
                w: v.doc.outerWidth() + parseInt(v.win.css("paddingLeft")) + parseInt(v.win.css("paddingRight")),
                h: v.doc.outerHeight() + parseInt(v.win.css("paddingTop")) + parseInt(v.win.css("paddingBottom"))
            }
        }
        : function() {
            return {
                w: v.docscroll[0].scrollWidth,
                h: v.docscroll[0].scrollHeight
            }
        }
        ,
        this.onResize = function(e, o) {
            if (!v || !v.win)
                return !1;
            if (!v.haswrapper && !v.ispage) {
                if ("none" == v.win.css("display"))
                    return v.visibility && v.hideRail().hideRailHr(),
                    !1;
                v.hidden || v.visibility || v.showRail().showRailHr()
            }
            var t = v.page.maxh
              , r = v.page.maxw
              , i = {
                h: v.view.h,
                w: v.view.w
            };
            if (v.view = {
                w: v.ispage ? v.win.width() : parseInt(v.win[0].clientWidth),
                h: v.ispage ? v.win.height() : parseInt(v.win[0].clientHeight)
            },
            v.page = o ? o : v.getContentSize(),
            v.page.maxh = Math.max(0, v.page.h - v.view.h),
            v.page.maxw = Math.max(0, v.page.w - v.view.w),
            v.page.maxh == t && v.page.maxw == r && v.view.w == i.w && v.view.h == i.h) {
                if (v.ispage)
                    return v;
                var n = v.win.offset();
                if (v.lastposition) {
                    var s = v.lastposition;
                    if (s.top == n.top && s.left == n.left)
                        return v
                }
                v.lastposition = n
            }
            if (0 == v.page.maxh ? (v.hideRail(),
            v.scrollvaluemax = 0,
            v.scroll.y = 0,
            v.scrollratio.y = 0,
            v.cursorheight = 0,
            v.setScrollTop(0),
            v.rail.scrollable = !1) : (v.page.maxh -= v.opt.railpadding.top + v.opt.railpadding.bottom,
            v.rail.scrollable = !0),
            0 == v.page.maxw ? (v.hideRailHr(),
            v.scrollvaluemaxw = 0,
            v.scroll.x = 0,
            v.scrollratio.x = 0,
            v.cursorwidth = 0,
            v.setScrollLeft(0),
            v.railh.scrollable = !1) : (v.page.maxw -= v.opt.railpadding.left + v.opt.railpadding.right,
            v.railh.scrollable = !0),
            v.railslocked = v.locked || 0 == v.page.maxh && 0 == v.page.maxw,
            v.railslocked)
                return v.ispage || v.updateScrollBar(v.view),
                !1;
            v.hidden || v.visibility ? v.hidden || v.railh.visibility || v.showRailHr() : v.showRail().showRailHr(),
            v.istextarea && v.win.css("resize") && "none" != v.win.css("resize") && (v.view.h -= 20),
            v.cursorheight = Math.min(v.view.h, Math.round(v.view.h * (v.view.h / v.page.h))),
            v.cursorheight = v.opt.cursorfixedheight ? v.opt.cursorfixedheight : Math.max(v.opt.cursorminheight, v.cursorheight),
            v.cursorwidth = Math.min(v.view.w, Math.round(v.view.w * (v.view.w / v.page.w))),
            v.cursorwidth = v.opt.cursorfixedheight ? v.opt.cursorfixedheight : Math.max(v.opt.cursorminheight, v.cursorwidth),
            v.scrollvaluemax = v.view.h - v.cursorheight - v.cursor.hborder - (v.opt.railpadding.top + v.opt.railpadding.bottom),
            v.railh && (v.railh.width = v.page.maxh > 0 ? v.view.w - v.rail.width : v.view.w,
            v.scrollvaluemaxw = v.railh.width - v.cursorwidth - v.cursorh.wborder - (v.opt.railpadding.left + v.opt.railpadding.right)),
            v.ispage || v.updateScrollBar(v.view),
            v.scrollratio = {
                x: v.page.maxw / v.scrollvaluemaxw,
                y: v.page.maxh / v.scrollvaluemax
            };
            var l = v.getScrollTop();
            return l > v.page.maxh ? v.doScrollTop(v.page.maxh) : (v.scroll.y = Math.round(v.getScrollTop() * (1 / v.scrollratio.y)),
            v.scroll.x = Math.round(v.getScrollLeft() * (1 / v.scrollratio.x)),
            v.cursoractive && v.noticeCursor()),
            v.scroll.y && 0 == v.getScrollTop() && v.doScrollTo(Math.floor(v.scroll.y * v.scrollratio.y)),
            v
        }
        ,
        this.resize = v.onResize,
        this.lazyResize = function(e) {
            return e = isNaN(e) ? 30 : e,
            v.debounced("resize", v.resize, e),
            v
        }
        ,
        this.jqbind = function(e, o, t) {
            v.events.push({
                e: e,
                n: o,
                f: t,
                q: !0
            }),
            a(e).bind(o, t)
        }
        ,
        this.bind = function(e, o, t, r) {
            var i = "jquery"in e ? e[0] : e;
            if ("mousewheel" == o)
                if (window.addEventListener || "onwheel"in document)
                    v._bind(i, "wheel", t, r || !1);
                else {
                    var n = "undefined" != typeof document.onmousewheel ? "mousewheel" : "DOMMouseScroll";
                    p(i, n, t, r || !1),
                    "DOMMouseScroll" == n && p(i, "MozMousePixelScroll", t, r || !1)
                }
            else if (i.addEventListener) {
                if (x.cantouch && /mouseup|mousedown|mousemove/.test(o)) {
                    var s = "mousedown" == o ? "touchstart" : "mouseup" == o ? "touchend" : "touchmove";
                    v._bind(i, s, function(e) {
                        if (e.touches) {
                            if (e.touches.length < 2) {
                                var o = e.touches.length ? e.touches[0] : e;
                                o.original = e,
                                t.call(this, o)
                            }
                        } else if (e.changedTouches) {
                            var o = e.changedTouches[0];
                            o.original = e,
                            t.call(this, o)
                        }
                    }, r || !1)
                }
                v._bind(i, o, t, r || !1),
                x.cantouch && "mouseup" == o && v._bind(i, "touchcancel", t, r || !1)
            } else
                v._bind(i, o, function(e) {
                    return e = e || window.event || !1,
                    e && e.srcElement && (e.target = e.srcElement),
                    "pageY"in e || (e.pageX = e.clientX + document.documentElement.scrollLeft,
                    e.pageY = e.clientY + document.documentElement.scrollTop),
                    t.call(i, e) === !1 || r === !1 ? v.cancelEvent(e) : !0
                })
        }
        ,
        x.haseventlistener ? (this._bind = function(e, o, t, r) {
            v.events.push({
                e: e,
                n: o,
                f: t,
                b: r,
                q: !1
            }),
            e.addEventListener(o, t, r || !1)
        }
        ,
        this.cancelEvent = function(e) {
            if (!e)
                return !1;
            var e = e.original ? e.original : e;
            return e.preventDefault(),
            e.stopPropagation(),
            e.preventManipulation && e.preventManipulation(),
            !1
        }
        ,
        this.stopPropagation = function(e) {
            if (!e)
                return !1;
            var e = e.original ? e.original : e;
            return e.stopPropagation(),
            !1
        }
        ,
        this._unbind = function(e, o, t, r) {
            e.removeEventListener(o, t, r)
        }
        ) : (this._bind = function(e, o, t, r) {
            v.events.push({
                e: e,
                n: o,
                f: t,
                b: r,
                q: !1
            }),
            e.attachEvent ? e.attachEvent("on" + o, t) : e["on" + o] = t
        }
        ,
        this.cancelEvent = function(e) {
            var e = window.event || !1;
            return e ? (e.cancelBubble = !0,
            e.cancel = !0,
            e.returnValue = !1,
            !1) : !1
        }
        ,
        this.stopPropagation = function(e) {
            var e = window.event || !1;
            return e ? (e.cancelBubble = !0,
            !1) : !1
        }
        ,
        this._unbind = function(e, o, t, r) {
            e.detachEvent ? e.detachEvent("on" + o, t) : e["on" + o] = !1
        }
        ),
        this.unbindAll = function() {
            for (var e = 0; e < v.events.length; e++) {
                var o = v.events[e];
                o.q ? o.e.unbind(o.n, o.f) : v._unbind(o.e, o.n, o.f, o.b)
            }
        }
        ,
        this.showRail = function() {
            return 0 == v.page.maxh || !v.ispage && "none" == v.win.css("display") || (v.visibility = !0,
            v.rail.visibility = !0,
            v.rail.css("display", "block")),
            v
        }
        ,
        this.showRailHr = function() {
            return v.railh ? (0 == v.page.maxw || !v.ispage && "none" == v.win.css("display") || (v.railh.visibility = !0,
            v.railh.css("display", "block")),
            v) : v
        }
        ,
        this.hideRail = function() {
            return v.visibility = !1,
            v.rail.visibility = !1,
            v.rail.css("display", "none"),
            v
        }
        ,
        this.hideRailHr = function() {
            return v.railh ? (v.railh.visibility = !1,
            v.railh.css("display", "none"),
            v) : v
        }
        ,
        this.show = function() {
            return v.hidden = !1,
            v.railslocked = !1,
            v.showRail().showRailHr()
        }
        ,
        this.hide = function() {
            return v.hidden = !0,
            v.railslocked = !0,
            v.hideRail().hideRailHr()
        }
        ,
        this.toggle = function() {
            return v.hidden ? v.show() : v.hide()
        }
        ,
        this.remove = function() {
            v.stop(),
            v.cursortimeout && clearTimeout(v.cursortimeout),
            v.doZoomOut(),
            v.unbindAll(),
            x.isie9 && v.win[0].detachEvent("onpropertychange", v.onAttributeChange),
            v.observer !== !1 && v.observer.disconnect(),
            v.observerremover !== !1 && v.observerremover.disconnect(),
            v.observerbody !== !1 && v.observerbody.disconnect(),
            v.events = null,
            v.cursor && v.cursor.remove(),
            v.cursorh && v.cursorh.remove(),
            v.rail && v.rail.remove(),
            v.railh && v.railh.remove(),
            v.zoom && v.zoom.remove();
            for (var e = 0; e < v.saved.css.length; e++) {
                var o = v.saved.css[e];
                o[0].css(o[1], "undefined" == typeof o[2] ? "" : o[2])
            }
            v.saved = !1,
            v.me.data("__nicescroll", "");
            var t = a.nicescroll;
            t.each(function(e) {
                if (this && this.id === v.id) {
                    delete t[e];
                    for (var o = ++e; o < t.length; o++,
                    e++)
                        t[e] = t[o];
                    t.length--,
                    t.length && delete t[t.length]
                }
            });
            for (var r in v)
                v[r] = null,
                delete v[r];
            v = null
        }
        ,
        this.scrollstart = function(e) {
            return this.onscrollstart = e,
            v
        }
        ,
        this.scrollend = function(e) {
            return this.onscrollend = e,
            v
        }
        ,
        this.scrollcancel = function(e) {
            return this.onscrollcancel = e,
            v
        }
        ,
        this.zoomin = function(e) {
            return this.onzoomin = e,
            v
        }
        ,
        this.zoomout = function(e) {
            return this.onzoomout = e,
            v
        }
        ,
        this.isScrollable = function(e) {
            var o = e.target ? e.target : e;
            if ("OPTION" == o.nodeName)
                return !0;
            for (; o && 1 == o.nodeType && !/^BODY|HTML/.test(o.nodeName); ) {
                var t = a(o)
                  , r = t.css("overflowY") || t.css("overflowX") || t.css("overflow") || "";
                if (/scroll|auto/.test(r))
                    return o.clientHeight != o.scrollHeight;
                o = o.parentNode ? o.parentNode : !1
            }
            return !1
        }
        ,
        this.getViewport = function(e) {
            for (var o = e && e.parentNode ? e.parentNode : !1; o && 1 == o.nodeType && !/^BODY|HTML/.test(o.nodeName); ) {
                var t = a(o);
                if (/fixed|absolute/.test(t.css("position")))
                    return t;
                var r = t.css("overflowY") || t.css("overflowX") || t.css("overflow") || "";
                if (/scroll|auto/.test(r) && o.clientHeight != o.scrollHeight)
                    return t;
                if (t.getNiceScroll().length > 0)
                    return t;
                o = o.parentNode ? o.parentNode : !1
            }
            return !1
        }
        ,
        this.triggerScrollEnd = function() {
            if (v.onscrollend) {
                var e = v.getScrollLeft()
                  , o = v.getScrollTop()
                  , t = {
                    type: "scrollend",
                    current: {
                        x: e,
                        y: o
                    },
                    end: {
                        x: e,
                        y: o
                    }
                };
                v.onscrollend.call(v, t)
            }
        }
        ,
        this.onmousewheel = function(e) {
            if (!v.wheelprevented) {
                if (v.railslocked)
                    return v.debounced("checkunlock", v.resize, 250),
                    !0;
                if (v.rail.drag)
                    return v.cancelEvent(e);
                if ("auto" == v.opt.oneaxismousemode && 0 != e.deltaX && (v.opt.oneaxismousemode = !1),
                v.opt.oneaxismousemode && 0 == e.deltaX && !v.rail.scrollable)
                    return v.railh && v.railh.scrollable ? v.onmousewheelhr(e) : !0;
                var o = +new Date
                  , t = !1;
                if (v.opt.preservenativescrolling && v.checkarea + 600 < o && (v.nativescrollingarea = v.isScrollable(e),
                t = !0),
                v.checkarea = o,
                v.nativescrollingarea)
                    return !0;
                var r = g(e, !1, t);
                return r && (v.checkarea = 0),
                r
            }
        }
        ,
        this.onmousewheelhr = function(e) {
            if (!v.wheelprevented) {
                if (v.railslocked || !v.railh.scrollable)
                    return !0;
                if (v.rail.drag)
                    return v.cancelEvent(e);
                var o = +new Date
                  , t = !1;
                return v.opt.preservenativescrolling && v.checkarea + 600 < o && (v.nativescrollingarea = v.isScrollable(e),
                t = !0),
                v.checkarea = o,
                v.nativescrollingarea ? !0 : v.railslocked ? v.cancelEvent(e) : g(e, !0, t)
            }
        }
        ,
        this.stop = function() {
            return v.cancelScroll(),
            v.scrollmon && v.scrollmon.stop(),
            v.cursorfreezed = !1,
            v.scroll.y = Math.round(v.getScrollTop() * (1 / v.scrollratio.y)),
            v.noticeCursor(),
            v
        }
        ,
        this.getTransitionSpeed = function(e) {
            var o = Math.round(10 * v.opt.scrollspeed)
              , t = Math.min(o, Math.round(e / 20 * v.opt.scrollspeed));
            return t > 20 ? t : 0
        }
        ,
        v.opt.smoothscroll ? v.ishwscroll && x.hastransition && v.opt.usetransition && v.opt.smoothscroll ? (this.prepareTransition = function(e, o) {
            var t = o ? e > 20 ? e : 0 : v.getTransitionSpeed(e)
              , r = t ? x.prefixstyle + "transform " + t + "ms ease-out" : "";
            return v.lasttransitionstyle && v.lasttransitionstyle == r || (v.lasttransitionstyle = r,
            v.doc.css(x.transitionstyle, r)),
            t
        }
        ,
        this.doScrollLeft = function(e, o) {
            var t = v.scrollrunning ? v.newscrolly : v.getScrollTop();
            v.doScrollPos(e, t, o)
        }
        ,
        this.doScrollTop = function(e, o) {
            var t = v.scrollrunning ? v.newscrollx : v.getScrollLeft();
            v.doScrollPos(t, e, o)
        }
        ,
        this.doScrollPos = function(e, o, t) {
            var r = v.getScrollTop()
              , i = v.getScrollLeft();
            return ((v.newscrolly - r) * (o - r) < 0 || (v.newscrollx - i) * (e - i) < 0) && v.cancelScroll(),
            0 == v.opt.bouncescroll && (0 > o ? o = 0 : o > v.page.maxh && (o = v.page.maxh),
            0 > e ? e = 0 : e > v.page.maxw && (e = v.page.maxw)),
            v.scrollrunning && e == v.newscrollx && o == v.newscrolly ? !1 : (v.newscrolly = o,
            v.newscrollx = e,
            v.newscrollspeed = t || !1,
            v.timer ? !1 : void (v.timer = setTimeout(function() {
                var t = v.getScrollTop()
                  , r = v.getScrollLeft()
                  , i = {};
                i.x = e - r,
                i.y = o - t,
                i.px = r,
                i.py = t;
                var n = Math.round(Math.sqrt(Math.pow(i.x, 2) + Math.pow(i.y, 2)))
                  , s = v.newscrollspeed && v.newscrollspeed > 1 ? v.newscrollspeed : v.getTransitionSpeed(n);
                if (v.newscrollspeed && v.newscrollspeed <= 1 && (s *= v.newscrollspeed),
                v.prepareTransition(s, !0),
                v.timerscroll && v.timerscroll.tm && clearInterval(v.timerscroll.tm),
                s > 0) {
                    if (!v.scrollrunning && v.onscrollstart) {
                        var l = {
                            type: "scrollstart",
                            current: {
                                x: r,
                                y: t
                            },
                            request: {
                                x: e,
                                y: o
                            },
                            end: {
                                x: v.newscrollx,
                                y: v.newscrolly
                            },
                            speed: s
                        };
                        v.onscrollstart.call(v, l)
                    }
                    x.transitionend ? v.scrollendtrapped || (v.scrollendtrapped = !0,
                    v.bind(v.doc, x.transitionend, v.onScrollTransitionEnd, !1)) : (v.scrollendtrapped && clearTimeout(v.scrollendtrapped),
                    v.scrollendtrapped = setTimeout(v.onScrollTransitionEnd, s));
                    var a = t
                      , c = r;
                    v.timerscroll = {
                        bz: new z(a,v.newscrolly,s,0,0,.58,1),
                        bh: new z(c,v.newscrollx,s,0,0,.58,1)
                    },
                    v.cursorfreezed || (v.timerscroll.tm = setInterval(function() {
                        v.showCursor(v.getScrollTop(), v.getScrollLeft())
                    }, 60))
                }
                v.synched("doScroll-set", function() {
                    v.timer = 0,
                    v.scrollendtrapped && (v.scrollrunning = !0),
                    v.setScrollTop(v.newscrolly),
                    v.setScrollLeft(v.newscrollx),
                    v.scrollendtrapped || v.onScrollTransitionEnd()
                })
            }, 50)))
        }
        ,
        this.cancelScroll = function() {
            if (!v.scrollendtrapped)
                return !0;
            var e = v.getScrollTop()
              , o = v.getScrollLeft();
            return v.scrollrunning = !1,
            x.transitionend || clearTimeout(x.transitionend),
            v.scrollendtrapped = !1,
            v._unbind(v.doc[0], x.transitionend, v.onScrollTransitionEnd),
            v.prepareTransition(0),
            v.setScrollTop(e),
            v.railh && v.setScrollLeft(o),
            v.timerscroll && v.timerscroll.tm && clearInterval(v.timerscroll.tm),
            v.timerscroll = !1,
            v.cursorfreezed = !1,
            v.showCursor(e, o),
            v
        }
        ,
        this.onScrollTransitionEnd = function() {
            v.scrollendtrapped && v._unbind(v.doc[0], x.transitionend, v.onScrollTransitionEnd),
            v.scrollendtrapped = !1,
            v.prepareTransition(0),
            v.timerscroll && v.timerscroll.tm && clearInterval(v.timerscroll.tm),
            v.timerscroll = !1;
            var e = v.getScrollTop()
              , o = v.getScrollLeft();
            return v.setScrollTop(e),
            v.railh && v.setScrollLeft(o),
            v.noticeCursor(!1, e, o),
            v.cursorfreezed = !1,
            0 > e ? e = 0 : e > v.page.maxh && (e = v.page.maxh),
            0 > o ? o = 0 : o > v.page.maxw && (o = v.page.maxw),
            e != v.newscrolly || o != v.newscrollx ? v.doScrollPos(o, e, v.opt.snapbackspeed) : (v.onscrollend && v.scrollrunning && v.triggerScrollEnd(),
            void (v.scrollrunning = !1))
        }
        ) : (this.doScrollLeft = function(e, o) {
            var t = v.scrollrunning ? v.newscrolly : v.getScrollTop();
            v.doScrollPos(e, t, o)
        }
        ,
        this.doScrollTop = function(e, o) {
            var t = v.scrollrunning ? v.newscrollx : v.getScrollLeft();
            v.doScrollPos(t, e, o)
        }
        ,
        this.doScrollPos = function(e, o, t) {
            function r() {
                if (v.cancelAnimationFrame)
                    return !0;
                if (v.scrollrunning = !0,
                h = 1 - h)
                    return v.timer = d(r) || 1;
                var e, o, t = 0, i = o = v.getScrollTop();
                if (v.dst.ay) {
                    i = v.bzscroll ? v.dst.py + v.bzscroll.getNow() * v.dst.ay : v.newscrolly;
                    var n = i - o;
                    (0 > n && i < v.newscrolly || n > 0 && i > v.newscrolly) && (i = v.newscrolly),
                    v.setScrollTop(i),
                    i == v.newscrolly && (t = 1)
                } else
                    t = 1;
                var s = e = v.getScrollLeft();
                if (v.dst.ax) {
                    s = v.bzscroll ? v.dst.px + v.bzscroll.getNow() * v.dst.ax : v.newscrollx;
                    var n = s - e;
                    (0 > n && s < v.newscrollx || n > 0 && s > v.newscrollx) && (s = v.newscrollx),
                    v.setScrollLeft(s),
                    s == v.newscrollx && (t += 1)
                } else
                    t += 1;
                2 == t ? (v.timer = 0,
                v.cursorfreezed = !1,
                v.bzscroll = !1,
                v.scrollrunning = !1,
                0 > i ? i = 0 : i > v.page.maxh && (i = v.page.maxh),
                0 > s ? s = 0 : s > v.page.maxw && (s = v.page.maxw),
                s != v.newscrollx || i != v.newscrolly ? v.doScrollPos(s, i) : v.onscrollend && v.triggerScrollEnd()) : v.timer = d(r) || 1
            }
            var o = "undefined" == typeof o || o === !1 ? v.getScrollTop(!0) : o;
            if (v.timer && v.newscrolly == o && v.newscrollx == e)
                return !0;
            v.timer && u(v.timer),
            v.timer = 0;
            var i = v.getScrollTop()
              , n = v.getScrollLeft();
            ((v.newscrolly - i) * (o - i) < 0 || (v.newscrollx - n) * (e - n) < 0) && v.cancelScroll(),
            v.newscrolly = o,
            v.newscrollx = e,
            v.bouncescroll && v.rail.visibility || (v.newscrolly < 0 ? v.newscrolly = 0 : v.newscrolly > v.page.maxh && (v.newscrolly = v.page.maxh)),
            v.bouncescroll && v.railh.visibility || (v.newscrollx < 0 ? v.newscrollx = 0 : v.newscrollx > v.page.maxw && (v.newscrollx = v.page.maxw)),
            v.dst = {},
            v.dst.x = e - n,
            v.dst.y = o - i,
            v.dst.px = n,
            v.dst.py = i;
            var s = Math.round(Math.sqrt(Math.pow(v.dst.x, 2) + Math.pow(v.dst.y, 2)));
            v.dst.ax = v.dst.x / s,
            v.dst.ay = v.dst.y / s;
            var l = 0
              , a = s;
            0 == v.dst.x ? (l = i,
            a = o,
            v.dst.ay = 1,
            v.dst.py = 0) : 0 == v.dst.y && (l = n,
            a = e,
            v.dst.ax = 1,
            v.dst.px = 0);
            var c = v.getTransitionSpeed(s);
            if (t && 1 >= t && (c *= t),
            c > 0 ? v.bzscroll = v.bzscroll ? v.bzscroll.update(a, c) : new z(l,a,c,0,1,0,1) : v.bzscroll = !1,
            !v.timer) {
                (i == v.page.maxh && o >= v.page.maxh || n == v.page.maxw && e >= v.page.maxw) && v.checkContentSize();
                var h = 1;
                if (v.cancelAnimationFrame = !1,
                v.timer = 1,
                v.onscrollstart && !v.scrollrunning) {
                    var p = {
                        type: "scrollstart",
                        current: {
                            x: n,
                            y: i
                        },
                        request: {
                            x: e,
                            y: o
                        },
                        end: {
                            x: v.newscrollx,
                            y: v.newscrolly
                        },
                        speed: c
                    };
                    v.onscrollstart.call(v, p)
                }
                r(),
                (i == v.page.maxh && o >= i || n == v.page.maxw && e >= n) && v.checkContentSize(),
                v.noticeCursor()
            }
        }
        ,
        this.cancelScroll = function() {
            return v.timer && u(v.timer),
            v.timer = 0,
            v.bzscroll = !1,
            v.scrollrunning = !1,
            v
        }
        ) : (this.doScrollLeft = function(e, o) {
            var t = v.getScrollTop();
            v.doScrollPos(e, t, o)
        }
        ,
        this.doScrollTop = function(e, o) {
            var t = v.getScrollLeft();
            v.doScrollPos(t, e, o)
        }
        ,
        this.doScrollPos = function(e, o, t) {
            var r = e > v.page.maxw ? v.page.maxw : e;
            0 > r && (r = 0);
            var i = o > v.page.maxh ? v.page.maxh : o;
            0 > i && (i = 0),
            v.synched("scroll", function() {
                v.setScrollTop(i),
                v.setScrollLeft(r)
            })
        }
        ,
        this.cancelScroll = function() {}
        ),
        this.doScrollBy = function(e, o) {
            var t = 0;
            if (o)
                t = Math.floor((v.scroll.y - e) * v.scrollratio.y);
            else {
                var r = v.timer ? v.newscrolly : v.getScrollTop(!0);
                t = r - e
            }
            if (v.bouncescroll) {
                var i = Math.round(v.view.h / 2);
                -i > t ? t = -i : t > v.page.maxh + i && (t = v.page.maxh + i)
            }
            v.cursorfreezed = !1;
            var n = v.getScrollTop(!0);
            return 0 > t && 0 >= n ? v.noticeCursor() : t > v.page.maxh && n >= v.page.maxh ? (v.checkContentSize(),
            v.noticeCursor()) : void v.doScrollTop(t)
        }
        ,
        this.doScrollLeftBy = function(e, o) {
            var t = 0;
            if (o)
                t = Math.floor((v.scroll.x - e) * v.scrollratio.x);
            else {
                var r = v.timer ? v.newscrollx : v.getScrollLeft(!0);
                t = r - e
            }
            if (v.bouncescroll) {
                var i = Math.round(v.view.w / 2);
                -i > t ? t = -i : t > v.page.maxw + i && (t = v.page.maxw + i)
            }
            v.cursorfreezed = !1;
            var n = v.getScrollLeft(!0);
            return 0 > t && 0 >= n ? v.noticeCursor() : t > v.page.maxw && n >= v.page.maxw ? v.noticeCursor() : void v.doScrollLeft(t)
        }
        ,
        this.doScrollTo = function(e, o) {
            var t = o ? Math.round(e * v.scrollratio.y) : e;
            0 > t ? t = 0 : t > v.page.maxh && (t = v.page.maxh),
            v.cursorfreezed = !1,
            v.doScrollTop(e)
        }
        ,
        this.checkContentSize = function() {
            var e = v.getContentSize();
            (e.h != v.page.h || e.w != v.page.w) && v.resize(!1, e)
        }
        ,
        v.onscroll = function(e) {
            v.rail.drag || v.cursorfreezed || v.synched("scroll", function() {
                v.scroll.y = Math.round(v.getScrollTop() * (1 / v.scrollratio.y)),
                v.railh && (v.scroll.x = Math.round(v.getScrollLeft() * (1 / v.scrollratio.x))),
                v.noticeCursor()
            })
        }
        ,
        v.bind(v.docscroll, "scroll", v.onscroll),
        this.doZoomIn = function(e) {
            if (!v.zoomactive) {
                v.zoomactive = !0,
                v.zoomrestore = {
                    style: {}
                };
                var o = ["position", "top", "left", "zIndex", "backgroundColor", "marginTop", "marginBottom", "marginLeft", "marginRight"]
                  , t = v.win[0].style;
                for (var r in o) {
                    var i = o[r];
                    v.zoomrestore.style[i] = "undefined" != typeof t[i] ? t[i] : ""
                }
                v.zoomrestore.style.width = v.win.css("width"),
                v.zoomrestore.style.height = v.win.css("height"),
                v.zoomrestore.padding = {
                    w: v.win.outerWidth() - v.win.width(),
                    h: v.win.outerHeight() - v.win.height()
                },
                x.isios4 && (v.zoomrestore.scrollTop = a(window).scrollTop(),
                a(window).scrollTop(0)),
                v.win.css({
                    position: x.isios4 ? "absolute" : "fixed",
                    top: 0,
                    left: 0,
                    "z-index": l + 100,
                    margin: "0px"
                });
                var n = v.win.css("backgroundColor");
                return ("" == n || /transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(n)) && v.win.css("backgroundColor", "#fff"),
                v.rail.css({
                    "z-index": l + 101
                }),
                v.zoom.css({
                    "z-index": l + 102
                }),
                v.zoom.css("backgroundPosition", "0px -18px"),
                v.resizeZoom(),
                v.onzoomin && v.onzoomin.call(v),
                v.cancelEvent(e)
            }
        }
        ,
        this.doZoomOut = function(e) {
            return v.zoomactive ? (v.zoomactive = !1,
            v.win.css("margin", ""),
            v.win.css(v.zoomrestore.style),
            x.isios4 && a(window).scrollTop(v.zoomrestore.scrollTop),
            v.rail.css({
                "z-index": v.zindex
            }),
            v.zoom.css({
                "z-index": v.zindex
            }),
            v.zoomrestore = !1,
            v.zoom.css("backgroundPosition", "0px 0px"),
            v.onResize(),
            v.onzoomout && v.onzoomout.call(v),
            v.cancelEvent(e)) : void 0
        }
        ,
        this.doZoom = function(e) {
            return v.zoomactive ? v.doZoomOut(e) : v.doZoomIn(e)
        }
        ,
        this.resizeZoom = function() {
            if (v.zoomactive) {
                var e = v.getScrollTop();
                v.win.css({
                    width: a(window).width() - v.zoomrestore.padding.w + "px",
                    height: a(window).height() - v.zoomrestore.padding.h + "px"
                }),
                v.onResize(),
                v.setScrollTop(Math.min(v.page.maxh, e))
            }
        }
        ,
        this.init(),
        a.nicescroll.push(this)
    }
      , b = function(e) {
        var o = this;
        this.nc = e,
        this.lastx = 0,
        this.lasty = 0,
        this.speedx = 0,
        this.speedy = 0,
        this.lasttime = 0,
        this.steptime = 0,
        this.snapx = !1,
        this.snapy = !1,
        this.demulx = 0,
        this.demuly = 0,
        this.lastscrollx = -1,
        this.lastscrolly = -1,
        this.chkx = 0,
        this.chky = 0,
        this.timer = 0,
        this.time = function() {
            return +new Date
        }
        ,
        this.reset = function(e, t) {
            o.stop();
            var r = o.time();
            o.steptime = 0,
            o.lasttime = r,
            o.speedx = 0,
            o.speedy = 0,
            o.lastx = e,
            o.lasty = t,
            o.lastscrollx = -1,
            o.lastscrolly = -1
        }
        ,
        this.update = function(e, t) {
            var r = o.time();
            o.steptime = r - o.lasttime,
            o.lasttime = r;
            var i = t - o.lasty
              , n = e - o.lastx
              , s = o.nc.getScrollTop()
              , l = o.nc.getScrollLeft()
              , a = s + i
              , c = l + n;
            o.snapx = 0 > c || c > o.nc.page.maxw,
            o.snapy = 0 > a || a > o.nc.page.maxh,
            o.speedx = n,
            o.speedy = i,
            o.lastx = e,
            o.lasty = t
        }
        ,
        this.stop = function() {
            o.nc.unsynched("domomentum2d"),
            o.timer && clearTimeout(o.timer),
            o.timer = 0,
            o.lastscrollx = -1,
            o.lastscrolly = -1
        }
        ,
        this.doSnapy = function(e, t) {
            var r = !1;
            0 > t ? (t = 0,
            r = !0) : t > o.nc.page.maxh && (t = o.nc.page.maxh,
            r = !0),
            0 > e ? (e = 0,
            r = !0) : e > o.nc.page.maxw && (e = o.nc.page.maxw,
            r = !0),
            r ? o.nc.doScrollPos(e, t, o.nc.opt.snapbackspeed) : o.nc.triggerScrollEnd()
        }
        ,
        this.doMomentum = function(e) {
            var t = o.time()
              , r = e ? t + e : o.lasttime
              , i = o.nc.getScrollLeft()
              , n = o.nc.getScrollTop()
              , s = o.nc.page.maxh
              , l = o.nc.page.maxw;
            o.speedx = l > 0 ? Math.min(60, o.speedx) : 0,
            o.speedy = s > 0 ? Math.min(60, o.speedy) : 0;
            var a = r && 60 >= t - r;
            (0 > n || n > s || 0 > i || i > l) && (a = !1);
            var c = o.speedy && a ? o.speedy : !1
              , d = o.speedx && a ? o.speedx : !1;
            if (c || d) {
                var u = Math.max(16, o.steptime);
                if (u > 50) {
                    var h = u / 50;
                    o.speedx *= h,
                    o.speedy *= h,
                    u = 50
                }
                o.demulxy = 0,
                o.lastscrollx = o.nc.getScrollLeft(),
                o.chkx = o.lastscrollx,
                o.lastscrolly = o.nc.getScrollTop(),
                o.chky = o.lastscrolly;
                var p = o.lastscrollx
                  , m = o.lastscrolly
                  , f = function() {
                    var e = o.time() - t > 600 ? .04 : .02;
                    o.speedx && (p = Math.floor(o.lastscrollx - o.speedx * (1 - o.demulxy)),
                    o.lastscrollx = p,
                    (0 > p || p > l) && (e = .1)),
                    o.speedy && (m = Math.floor(o.lastscrolly - o.speedy * (1 - o.demulxy)),
                    o.lastscrolly = m,
                    (0 > m || m > s) && (e = .1)),
                    o.demulxy = Math.min(1, o.demulxy + e),
                    o.nc.synched("domomentum2d", function() {
                        if (o.speedx) {
                            var e = o.nc.getScrollLeft();
                            e != o.chkx && o.stop(),
                            o.chkx = p,
                            o.nc.setScrollLeft(p)
                        }
                        if (o.speedy) {
                            var t = o.nc.getScrollTop();
                            t != o.chky && o.stop(),
                            o.chky = m,
                            o.nc.setScrollTop(m)
                        }
                        o.timer || (o.nc.hideCursor(),
                        o.doSnapy(p, m))
                    }),
                    o.demulxy < 1 ? o.timer = setTimeout(f, u) : (o.stop(),
                    o.nc.hideCursor(),
                    o.doSnapy(p, m))
                };
                f()
            } else
                o.doSnapy(o.nc.getScrollLeft(), o.nc.getScrollTop())
        }
    }
      , y = e.fn.scrollTop;
    e.cssHooks.pageYOffset = {
        get: function(e, o, t) {
            var r = a.data(e, "__nicescroll") || !1;
            return r && r.ishwscroll ? r.getScrollTop() : y.call(e)
        },
        set: function(e, o) {
            var t = a.data(e, "__nicescroll") || !1;
            return t && t.ishwscroll ? t.setScrollTop(parseInt(o)) : y.call(e, o),
            this
        }
    },
    e.fn.scrollTop = function(e) {
        if ("undefined" == typeof e) {
            var o = this[0] ? a.data(this[0], "__nicescroll") || !1 : !1;
            return o && o.ishwscroll ? o.getScrollTop() : y.call(this)
        }
        return this.each(function() {
            var o = a.data(this, "__nicescroll") || !1;
            o && o.ishwscroll ? o.setScrollTop(parseInt(e)) : y.call(a(this), e)
        })
    }
    ;
    var x = e.fn.scrollLeft;
    a.cssHooks.pageXOffset = {
        get: function(e, o, t) {
            var r = a.data(e, "__nicescroll") || !1;
            return r && r.ishwscroll ? r.getScrollLeft() : x.call(e)
        },
        set: function(e, o) {
            var t = a.data(e, "__nicescroll") || !1;
            return t && t.ishwscroll ? t.setScrollLeft(parseInt(o)) : x.call(e, o),
            this
        }
    },
    e.fn.scrollLeft = function(e) {
        if ("undefined" == typeof e) {
            var o = this[0] ? a.data(this[0], "__nicescroll") || !1 : !1;
            return o && o.ishwscroll ? o.getScrollLeft() : x.call(this)
        }
        return this.each(function() {
            var o = a.data(this, "__nicescroll") || !1;
            o && o.ishwscroll ? o.setScrollLeft(parseInt(e)) : x.call(a(this), e)
        })
    }
    ;
    var S = function(e) {
        var o = this;
        if (this.length = 0,
        this.name = "nicescrollarray",
        this.each = function(e) {
            for (var t = 0, r = 0; t < o.length; t++)
                e.call(o[t], r++);
            return o
        }
        ,
        this.push = function(e) {
            o[o.length] = e,
            o.length++
        }
        ,
        this.eq = function(e) {
            return o[e]
        }
        ,
        e)
            for (var t = 0; t < e.length; t++) {
                var r = a.data(e[t], "__nicescroll") || !1;
                r && (this[this.length] = r,
                this.length++)
            }
        return this
    };
    t(S.prototype, ["show", "hide", "toggle", "onResize", "resize", "remove", "stop", "doScrollPos"], function(e, o) {
        e[o] = function() {
            var e = arguments;
            return this.each(function() {
                this[o].apply(this, e)
            })
        }
    }),
    e.fn.getNiceScroll = function(e) {
        if ("undefined" == typeof e)
            return new S(this);
        var o = this[e] && a.data(this[e], "__nicescroll") || !1;
        return o
    }
    ,
    e.extend(e.expr[":"], {
        nicescroll: function(e) {
            return a.data(e, "__nicescroll") ? !0 : !1
        }
    }),
    a.fn.niceScroll = function(e, o) {
        "undefined" == typeof o && ("object" != typeof e || "jquery"in e || (o = e,
        e = !1)),
        o = a.extend({}, o);
        var t = new S;
        "undefined" == typeof o && (o = {}),
        e && (o.doc = a(e),
        o.win = a(this));
        var r = !("doc"in o);
        return r || "win"in o || (o.win = a(this)),
        this.each(function() {
            var e = a(this).data("__nicescroll") || !1;
            e || (o.doc = r ? a(this) : o.doc,
            e = new v(o,a(this)),
            a(this).data("__nicescroll", e)),
            t.push(e)
        }),
        1 == t.length ? t[0] : t
    }
    ,
    window.NiceScroll = {
        getjQuery: function() {
            return e
        }
    },
    a.nicescroll || (a.nicescroll = new S,
    a.nicescroll.options = f)
});
(function($, window, document, undefined) {
    $.fn.quicksearch = function(target, opt) {
        var timeout, cache, rowcache, jq_results, val = '', e = this, options = $.extend({
            delay: 100,
            selector: null,
            stripeRows: null,
            loader: null,
            noResults: '',
            matchedResultsCount: 0,
            bind: 'keyup',
            onBefore: function() {
                return;
            },
            onAfter: function() {
                return;
            },
            show: function() {
                this.style.display = "";
            },
            hide: function() {
                this.style.display = "none";
            },
            prepareQuery: function(val) {
                return val.toLowerCase().split(' ');
            },
            testQuery: function(query, txt, _row) {
                for (var i = 0; i < query.length; i += 1) {
                    if (txt.indexOf(query[i]) === -1) {
                        return false;
                    }
                }
                return true;
            }
        }, opt);
        this.go = function() {
            var i = 0
              , numMatchedRows = 0
              , noresults = true
              , query = options.prepareQuery(val)
              , val_empty = (val.replace(' ', '').length === 0);
            for (var i = 0, len = rowcache.length; i < len; i++) {
                if (val_empty || options.testQuery(query, cache[i], rowcache[i])) {
                    options.show.apply(rowcache[i]);
                    noresults = false;
                    numMatchedRows++;
                } else {
                    options.hide.apply(rowcache[i]);
                }
            }
            if (noresults) {
                this.results(false);
            } else {
                this.results(true);
                this.stripe();
            }
            this.matchedResultsCount = numMatchedRows;
            this.loader(false);
            options.onAfter();
            return this;
        }
        ;
        this.search = function(submittedVal) {
            val = submittedVal;
            e.trigger();
        }
        ;
        this.currentMatchedResults = function() {
            return this.matchedResultsCount;
        }
        ;
        this.stripe = function() {
            if (typeof options.stripeRows === "object" && options.stripeRows !== null) {
                var joined = options.stripeRows.join(' ');
                var stripeRows_length = options.stripeRows.length;
                jq_results.not(':hidden').each(function(i) {
                    $(this).removeClass(joined).addClass(options.stripeRows[i % stripeRows_length]);
                });
            }
            return this;
        }
        ;
        this.strip_html = function(input) {
            var output = input.replace(new RegExp('<[^<]+\>','g'), "");
            output = $.trim(output.toLowerCase());
            return output;
        }
        ;
        this.results = function(bool) {
            if (typeof options.noResults === "string" && options.noResults !== "") {
                if (bool) {
                    $(options.noResults).hide();
                } else {
                    $(options.noResults).show();
                }
            }
            return this;
        }
        ;
        this.loader = function(bool) {
            if (typeof options.loader === "string" && options.loader !== "") {
                (bool) ? $(options.loader).show() : $(options.loader).hide();
            }
            return this;
        }
        ;
        this.cache = function() {
            jq_results = $(target);
            if (typeof options.noResults === "string" && options.noResults !== "") {
                jq_results = jq_results.not(options.noResults);
            }
            var t = (typeof options.selector === "string") ? jq_results.find(options.selector) : $(target).not(options.noResults);
            cache = t.map(function() {
                return e.strip_html(this.innerHTML);
            });
            rowcache = jq_results.map(function() {
                return this;
            });
            val = val || this.val() || "";
            return this.go();
        }
        ;
        this.trigger = function() {
            this.loader(true);
            options.onBefore();
            window.clearTimeout(timeout);
            timeout = window.setTimeout(function() {
                e.go();
            }, options.delay);
            return this;
        }
        ;
        this.cache();
        this.results(true);
        this.stripe();
        this.loader(false);
        return this.each(function() {
            $(this).on(options.bind, function() {
                val = $(this).val();
                e.trigger();
            });
        });
    }
    ;
}(jQuery, this, document));
;(function($, window, document, undefined) {
    var OnePageNav = function(elem, options) {
        this.elem = elem;
        this.$elem = $(elem);
        this.options = options;
        this.metadata = this.$elem.data('plugin-options');
        this.$win = $(window);
        this.sections = {};
        this.didScroll = false;
        this.$doc = $(document);
        this.docHeight = this.$doc.height();
    };
    OnePageNav.prototype = {
        defaults: {
            navItems: 'a',
            currentClass: 'current',
            changeHash: true,
            easing: 'easeInOutExpo',
            filter: '',
            scrollSpeed: 450,
            scrollThreshold: 0.5,
            begin: false,
            end: false,
            scrollChange: false
        },
        init: function() {
            this.config = $.extend({}, this.defaults, this.options, this.metadata);
            this.$nav = this.$elem.find(this.config.navItems);
            if (this.config.filter !== '') {
                this.$nav = this.$nav.filter(this.config.filter);
            }
            this.$nav.on('click.onePageNav', $.proxy(this.handleClick, this));
            this.getPositions();
            this.bindInterval();
            this.$win.on('resize.onePageNav', $.proxy(this.getPositions, this));
            return this;
        },
        adjustNav: function(self, $parent) {
            self.$elem.find('.' + self.config.currentClass).removeClass(self.config.currentClass);
            $parent.addClass(self.config.currentClass);
        },
        bindInterval: function() {
            var self = this;
            var docHeight;
            self.$win.on('scroll.onePageNav', function() {
                self.didScroll = true;
            });
            self.t = setInterval(function() {
                docHeight = self.$doc.height();
                if (self.didScroll) {
                    self.didScroll = false;
                    self.scrollChange();
                }
                if (docHeight !== self.docHeight) {
                    self.docHeight = docHeight;
                    self.getPositions();
                }
            }, 250);
        },
        getHash: function($link) {
            return $link.attr('href').split('#')[1];
        },
        getPositions: function() {
            var self = this;
            var linkHref;
            var topPos;
            var $target;
            self.$nav.each(function() {
                linkHref = self.getHash($(this));
                $target = $('#' + linkHref);
                if ($target.length) {
                    topPos = $target.offset().top;
                    self.sections[linkHref] = Math.round(topPos);
                }
            });
        },
        getSection: function(windowPos) {
            var returnValue = null;
            var windowHeight = Math.round(this.$win.height() * this.config.scrollThreshold);
            for (var section in this.sections) {
                if ((this.sections[section] - windowHeight) < windowPos) {
                    returnValue = section;
                }
            }
            return returnValue;
        },
        handleClick: function(e) {
            var self = this;
            var $link = $(e.currentTarget);
            var $parent = $link.parent();
            var newLoc = '#' + self.getHash($link);
            if (!$parent.hasClass(self.config.currentClass)) {
                if (self.config.begin) {
                    self.config.begin();
                }
                self.adjustNav(self, $parent);
                self.unbindInterval();
                self.scrollTo(newLoc, function() {
                    if (self.config.changeHash) {
                        window.location.hash = newLoc;
                    }
                    self.bindInterval();
                    if (self.config.end) {
                        self.config.end();
                    }
                });
            }
            e.preventDefault();
        },
        scrollChange: function() {
            var windowTop = this.$win.scrollTop();
            var position = this.getSection(windowTop);
            var $parent;
            if (position !== null) {
                $parent = this.$elem.find('a[href$="#' + position + '"]').parent();
                if (!$parent.hasClass(this.config.currentClass)) {
                    this.adjustNav(this, $parent);
                    if (this.config.scrollChange) {
                        this.config.scrollChange($parent);
                    }
                }
            }
        },
        scrollTo: function(target, callback) {
            var offset = $(target).offset().top;
            $('html, body').animate({
                scrollTop: offset
            }, this.config.scrollSpeed, this.config.easing, callback);
        },
        unbindInterval: function() {
            clearInterval(this.t);
            this.$win.unbind('scroll.onePageNav');
        }
    };
    OnePageNav.defaults = OnePageNav.prototype.defaults;
    $.fn.onePageNav = function(options) {
        return this.each(function() {
            new OnePageNav(this,options).init();
        });
    }
    ;
}
)(jQuery, window, document);
/*! jQuery Validation Plugin - v1.15.0 - 2/24/2016
* http://jqueryvalidation.org/
* Copyright (c) 2016 Jörn Zaefferer; Licensed MIT */
!function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof module && module.exports ? module.exports = a(require("jquery")) : a(jQuery)
}(function(a) {
    a.extend(a.fn, {
        validate: function(b) {
            if (!this.length)
                return void (b && b.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
            var c = a.data(this[0], "validator");
            return c ? c : (this.attr("novalidate", "novalidate"),
            c = new a.validator(b,this[0]),
            a.data(this[0], "validator", c),
            c.settings.onsubmit && (this.on("click.validate", ":submit", function(b) {
                c.settings.submitHandler && (c.submitButton = b.target),
                a(this).hasClass("cancel") && (c.cancelSubmit = !0),
                void 0 !== a(this).attr("formnovalidate") && (c.cancelSubmit = !0)
            }),
            this.on("submit.validate", function(b) {
                function d() {
                    var d, e;
                    return c.settings.submitHandler ? (c.submitButton && (d = a("<input type='hidden'/>").attr("name", c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)),
                    e = c.settings.submitHandler.call(c, c.currentForm, b),
                    c.submitButton && d.remove(),
                    void 0 !== e ? e : !1) : !0
                }
                return c.settings.debug && b.preventDefault(),
                c.cancelSubmit ? (c.cancelSubmit = !1,
                d()) : c.form() ? c.pendingRequest ? (c.formSubmitted = !0,
                !1) : d() : (c.focusInvalid(),
                !1)
            })),
            c)
        },
        valid: function() {
            var b, c, d;
            return a(this[0]).is("form") ? b = this.validate().form() : (d = [],
            b = !0,
            c = a(this[0].form).validate(),
            this.each(function() {
                b = c.element(this) && b,
                b || (d = d.concat(c.errorList))
            }),
            c.errorList = d),
            b
        },
        rules: function(b, c) {
            if (this.length) {
                var d, e, f, g, h, i, j = this[0];
                if (b)
                    switch (d = a.data(j.form, "validator").settings,
                    e = d.rules,
                    f = a.validator.staticRules(j),
                    b) {
                    case "add":
                        a.extend(f, a.validator.normalizeRule(c)),
                        delete f.messages,
                        e[j.name] = f,
                        c.messages && (d.messages[j.name] = a.extend(d.messages[j.name], c.messages));
                        break;
                    case "remove":
                        return c ? (i = {},
                        a.each(c.split(/\s/), function(b, c) {
                            i[c] = f[c],
                            delete f[c],
                            "required" === c && a(j).removeAttr("aria-required")
                        }),
                        i) : (delete e[j.name],
                        f)
                    }
                return g = a.validator.normalizeRules(a.extend({}, a.validator.classRules(j), a.validator.attributeRules(j), a.validator.dataRules(j), a.validator.staticRules(j)), j),
                g.required && (h = g.required,
                delete g.required,
                g = a.extend({
                    required: h
                }, g),
                a(j).attr("aria-required", "true")),
                g.remote && (h = g.remote,
                delete g.remote,
                g = a.extend(g, {
                    remote: h
                })),
                g
            }
        }
    }),
    a.extend(a.expr[":"], {
        blank: function(b) {
            return !a.trim("" + a(b).val())
        },
        filled: function(b) {
            var c = a(b).val();
            return null !== c && !!a.trim("" + c)
        },
        unchecked: function(b) {
            return !a(b).prop("checked")
        }
    }),
    a.validator = function(b, c) {
        this.settings = a.extend(!0, {}, a.validator.defaults, b),
        this.currentForm = c,
        this.init()
    }
    ,
    a.validator.format = function(b, c) {
        return 1 === arguments.length ? function() {
            var c = a.makeArray(arguments);
            return c.unshift(b),
            a.validator.format.apply(this, c)
        }
        : void 0 === c ? b : (arguments.length > 2 && c.constructor !== Array && (c = a.makeArray(arguments).slice(1)),
        c.constructor !== Array && (c = [c]),
        a.each(c, function(a, c) {
            b = b.replace(new RegExp("\\{" + a + "\\}","g"), function() {
                return c
            })
        }),
        b)
    }
    ,
    a.extend(a.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            pendingClass: "pending",
            validClass: "valid",
            errorElement: "label",
            focusCleanup: !1,
            focusInvalid: !0,
            errorContainer: a([]),
            errorLabelContainer: a([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function(a) {
                this.lastActive = a,
                this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass),
                this.hideThese(this.errorsFor(a)))
            },
            onfocusout: function(a) {
                this.checkable(a) || !(a.name in this.submitted) && this.optional(a) || this.element(a)
            },
            onkeyup: function(b, c) {
                var d = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
                9 === c.which && "" === this.elementValue(b) || -1 !== a.inArray(c.keyCode, d) || (b.name in this.submitted || b.name in this.invalid) && this.element(b)
            },
            onclick: function(a) {
                a.name in this.submitted ? this.element(a) : a.parentNode.name in this.submitted && this.element(a.parentNode)
            },
            highlight: function(b, c, d) {
                "radio" === b.type ? this.findByName(b.name).addClass(c).removeClass(d) : a(b).addClass(c).removeClass(d)
            },
            unhighlight: function(b, c, d) {
                "radio" === b.type ? this.findByName(b.name).removeClass(c).addClass(d) : a(b).removeClass(c).addClass(d)
            }
        },
        setDefaults: function(b) {
            a.extend(a.validator.defaults, b)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date ( ISO ).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            equalTo: "Please enter the same value again.",
            maxlength: a.validator.format("Please enter no more than {0} characters."),
            minlength: a.validator.format("Please enter at least {0} characters."),
            rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."),
            range: a.validator.format("Please enter a value between {0} and {1}."),
            max: a.validator.format("Please enter a value less than or equal to {0}."),
            min: a.validator.format("Please enter a value greater than or equal to {0}."),
            step: a.validator.format("Please enter a multiple of {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function() {
                function b(b) {
                    var c = a.data(this.form, "validator")
                      , d = "on" + b.type.replace(/^validate/, "")
                      , e = c.settings;
                    e[d] && !a(this).is(e.ignore) && e[d].call(c, this, b)
                }
                this.labelContainer = a(this.settings.errorLabelContainer),
                this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm),
                this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer),
                this.submitted = {},
                this.valueCache = {},
                this.pendingRequest = 0,
                this.pending = {},
                this.invalid = {},
                this.reset();
                var c, d = this.groups = {};
                a.each(this.settings.groups, function(b, c) {
                    "string" == typeof c && (c = c.split(/\s/)),
                    a.each(c, function(a, c) {
                        d[c] = b
                    })
                }),
                c = this.settings.rules,
                a.each(c, function(b, d) {
                    c[b] = a.validator.normalizeRule(d)
                }),
                a(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable]", b).on("click.validate", "select, option, [type='radio'], [type='checkbox']", b),
                this.settings.invalidHandler && a(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler),
                a(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
            },
            form: function() {
                return this.checkForm(),
                a.extend(this.submitted, this.errorMap),
                this.invalid = a.extend({}, this.errorMap),
                this.valid() || a(this.currentForm).triggerHandler("invalid-form", [this]),
                this.showErrors(),
                this.valid()
            },
            checkForm: function() {
                this.prepareForm();
                for (var a = 0, b = this.currentElements = this.elements(); b[a]; a++)
                    this.check(b[a]);
                return this.valid()
            },
            element: function(b) {
                var c, d, e = this.clean(b), f = this.validationTargetFor(e), g = this, h = !0;
                return void 0 === f ? delete this.invalid[e.name] : (this.prepareElement(f),
                this.currentElements = a(f),
                d = this.groups[f.name],
                d && a.each(this.groups, function(a, b) {
                    b === d && a !== f.name && (e = g.validationTargetFor(g.clean(g.findByName(a))),
                    e && e.name in g.invalid && (g.currentElements.push(e),
                    h = h && g.check(e)))
                }),
                c = this.check(f) !== !1,
                h = h && c,
                c ? this.invalid[f.name] = !1 : this.invalid[f.name] = !0,
                this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)),
                this.showErrors(),
                a(b).attr("aria-invalid", !c)),
                h
            },
            showErrors: function(b) {
                if (b) {
                    var c = this;
                    a.extend(this.errorMap, b),
                    this.errorList = a.map(this.errorMap, function(a, b) {
                        return {
                            message: a,
                            element: c.findByName(b)[0]
                        }
                    }),
                    this.successList = a.grep(this.successList, function(a) {
                        return !(a.name in b)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function() {
                a.fn.resetForm && a(this.currentForm).resetForm(),
                this.invalid = {},
                this.submitted = {},
                this.prepareForm(),
                this.hideErrors();
                var b = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                this.resetElements(b)
            },
            resetElements: function(a) {
                var b;
                if (this.settings.unhighlight)
                    for (b = 0; a[b]; b++)
                        this.settings.unhighlight.call(this, a[b], this.settings.errorClass, ""),
                        this.findByName(a[b].name).removeClass(this.settings.validClass);
                else
                    a.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            },
            objectLength: function(a) {
                var b, c = 0;
                for (b in a)
                    a[b] && c++;
                return c
            },
            hideErrors: function() {
                this.hideThese(this.toHide)
            },
            hideThese: function(a) {
                a.not(this.containers).text(""),
                this.addWrapper(a).hide()
            },
            valid: function() {
                return 0 === this.size()
            },
            size: function() {
                return this.errorList.length
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid)
                    try {
                        a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                    } catch (b) {}
            },
            findLastActive: function() {
                var b = this.lastActive;
                return b && 1 === a.grep(this.errorList, function(a) {
                    return a.element.name === b.name
                }).length && b
            },
            elements: function() {
                var b = this
                  , c = {};
                return a(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() {
                    var d = this.name || a(this).attr("name");
                    return !d && b.settings.debug && window.console && console.error("%o has no name assigned", this),
                    this.hasAttribute("contenteditable") && (this.form = a(this).closest("form")[0]),
                    d in c || !b.objectLength(a(this).rules()) ? !1 : (c[d] = !0,
                    !0)
                })
            },
            clean: function(b) {
                return a(b)[0]
            },
            errors: function() {
                var b = this.settings.errorClass.split(" ").join(".");
                return a(this.settings.errorElement + "." + b, this.errorContext)
            },
            resetInternals: function() {
                this.successList = [],
                this.errorList = [],
                this.errorMap = {},
                this.toShow = a([]),
                this.toHide = a([])
            },
            reset: function() {
                this.resetInternals(),
                this.currentElements = a([])
            },
            prepareForm: function() {
                this.reset(),
                this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function(a) {
                this.reset(),
                this.toHide = this.errorsFor(a)
            },
            elementValue: function(b) {
                var c, d, e = a(b), f = b.type;
                return "radio" === f || "checkbox" === f ? this.findByName(b.name).filter(":checked").val() : "number" === f && "undefined" != typeof b.validity ? b.validity.badInput ? "NaN" : e.val() : (c = b.hasAttribute("contenteditable") ? e.text() : e.val(),
                "file" === f ? "C:\\fakepath\\" === c.substr(0, 12) ? c.substr(12) : (d = c.lastIndexOf("/"),
                d >= 0 ? c.substr(d + 1) : (d = c.lastIndexOf("\\"),
                d >= 0 ? c.substr(d + 1) : c)) : "string" == typeof c ? c.replace(/\r/g, "") : c)
            },
            check: function(b) {
                b = this.validationTargetFor(this.clean(b));
                var c, d, e, f = a(b).rules(), g = a.map(f, function(a, b) {
                    return b
                }).length, h = !1, i = this.elementValue(b);
                if ("function" == typeof f.normalizer) {
                    if (i = f.normalizer.call(b, i),
                    "string" != typeof i)
                        throw new TypeError("The normalizer should return a string value.");
                    delete f.normalizer
                }
                for (d in f) {
                    e = {
                        method: d,
                        parameters: f[d]
                    };
                    try {
                        if (c = a.validator.methods[d].call(this, i, b, e.parameters),
                        "dependency-mismatch" === c && 1 === g) {
                            h = !0;
                            continue
                        }
                        if (h = !1,
                        "pending" === c)
                            return void (this.toHide = this.toHide.not(this.errorsFor(b)));
                        if (!c)
                            return this.formatAndAdd(b, e),
                            !1
                    } catch (j) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method.", j),
                        j instanceof TypeError && (j.message += ".  Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method."),
                        j
                    }
                }
                if (!h)
                    return this.objectLength(f) && this.successList.push(b),
                    !0
            },
            customDataMessage: function(b, c) {
                return a(b).data("msg" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()) || a(b).data("msg")
            },
            customMessage: function(a, b) {
                var c = this.settings.messages[a];
                return c && (c.constructor === String ? c : c[b])
            },
            findDefined: function() {
                for (var a = 0; a < arguments.length; a++)
                    if (void 0 !== arguments[a])
                        return arguments[a]
            },
            defaultMessage: function(b, c) {
                var d = this.findDefined(this.customMessage(b.name, c.method), this.customDataMessage(b, c.method), !this.settings.ignoreTitle && b.title || void 0, a.validator.messages[c.method], "<strong>Warning: No message defined for " + b.name + "</strong>")
                  , e = /\$?\{(\d+)\}/g;
                return "function" == typeof d ? d = d.call(this, c.parameters, b) : e.test(d) && (d = a.validator.format(d.replace(e, "{$1}"), c.parameters)),
                d
            },
            formatAndAdd: function(a, b) {
                var c = this.defaultMessage(a, b);
                this.errorList.push({
                    message: c,
                    element: a,
                    method: b.method
                }),
                this.errorMap[a.name] = c,
                this.submitted[a.name] = c
            },
            addWrapper: function(a) {
                return this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper))),
                a
            },
            defaultShowErrors: function() {
                var a, b, c;
                for (a = 0; this.errorList[a]; a++)
                    c = this.errorList[a],
                    this.settings.highlight && this.settings.highlight.call(this, c.element, this.settings.errorClass, this.settings.validClass),
                    this.showLabel(c.element, c.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)),
                this.settings.success)
                    for (a = 0; this.successList[a]; a++)
                        this.showLabel(this.successList[a]);
                if (this.settings.unhighlight)
                    for (a = 0,
                    b = this.validElements(); b[a]; a++)
                        this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow),
                this.hideErrors(),
                this.addWrapper(this.toShow).show()
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function() {
                return a(this.errorList).map(function() {
                    return this.element
                })
            },
            showLabel: function(b, c) {
                var d, e, f, g, h = this.errorsFor(b), i = this.idOrName(b), j = a(b).attr("aria-describedby");
                h.length ? (h.removeClass(this.settings.validClass).addClass(this.settings.errorClass),
                h.html(c)) : (h = a("<" + this.settings.errorElement + ">").attr("id", i + "-error").addClass(this.settings.errorClass).html(c || ""),
                d = h,
                this.settings.wrapper && (d = h.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()),
                this.labelContainer.length ? this.labelContainer.append(d) : this.settings.errorPlacement ? this.settings.errorPlacement(d, a(b)) : d.insertAfter(b),
                h.is("label") ? h.attr("for", i) : 0 === h.parents("label[for='" + this.escapeCssMeta(i) + "']").length && (f = h.attr("id"),
                j ? j.match(new RegExp("\\b" + this.escapeCssMeta(f) + "\\b")) || (j += " " + f) : j = f,
                a(b).attr("aria-describedby", j),
                e = this.groups[b.name],
                e && (g = this,
                a.each(g.groups, function(b, c) {
                    c === e && a("[name='" + g.escapeCssMeta(b) + "']", g.currentForm).attr("aria-describedby", h.attr("id"))
                })))),
                !c && this.settings.success && (h.text(""),
                "string" == typeof this.settings.success ? h.addClass(this.settings.success) : this.settings.success(h, b)),
                this.toShow = this.toShow.add(h)
            },
            errorsFor: function(b) {
                var c = this.escapeCssMeta(this.idOrName(b))
                  , d = a(b).attr("aria-describedby")
                  , e = "label[for='" + c + "'], label[for='" + c + "'] *";
                return d && (e = e + ", #" + this.escapeCssMeta(d).replace(/\s+/g, ", #")),
                this.errors().filter(e)
            },
            escapeCssMeta: function(a) {
                return a.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1")
            },
            idOrName: function(a) {
                return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name)
            },
            validationTargetFor: function(b) {
                return this.checkable(b) && (b = this.findByName(b.name)),
                a(b).not(this.settings.ignore)[0]
            },
            checkable: function(a) {
                return /radio|checkbox/i.test(a.type)
            },
            findByName: function(b) {
                return a(this.currentForm).find("[name='" + this.escapeCssMeta(b) + "']")
            },
            getLength: function(b, c) {
                switch (c.nodeName.toLowerCase()) {
                case "select":
                    return a("option:selected", c).length;
                case "input":
                    if (this.checkable(c))
                        return this.findByName(c.name).filter(":checked").length
                }
                return b.length
            },
            depend: function(a, b) {
                return this.dependTypes[typeof a] ? this.dependTypes[typeof a](a, b) : !0
            },
            dependTypes: {
                "boolean": function(a) {
                    return a
                },
                string: function(b, c) {
                    return !!a(b, c.form).length
                },
                "function": function(a, b) {
                    return a(b)
                }
            },
            optional: function(b) {
                var c = this.elementValue(b);
                return !a.validator.methods.required.call(this, c, b) && "dependency-mismatch"
            },
            startRequest: function(b) {
                this.pending[b.name] || (this.pendingRequest++,
                a(b).addClass(this.settings.pendingClass),
                this.pending[b.name] = !0)
            },
            stopRequest: function(b, c) {
                this.pendingRequest--,
                this.pendingRequest < 0 && (this.pendingRequest = 0),
                delete this.pending[b.name],
                a(b).removeClass(this.settings.pendingClass),
                c && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (a(this.currentForm).submit(),
                this.formSubmitted = !1) : !c && 0 === this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler("invalid-form", [this]),
                this.formSubmitted = !1)
            },
            previousValue: function(b, c) {
                return a.data(b, "previousValue") || a.data(b, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(b, {
                        method: c
                    })
                })
            },
            destroy: function() {
                this.resetForm(),
                a(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur")
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            number: {
                number: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function(b, c) {
            b.constructor === String ? this.classRuleSettings[b] = c : a.extend(this.classRuleSettings, b)
        },
        classRules: function(b) {
            var c = {}
              , d = a(b).attr("class");
            return d && a.each(d.split(" "), function() {
                this in a.validator.classRuleSettings && a.extend(c, a.validator.classRuleSettings[this])
            }),
            c
        },
        normalizeAttributeRule: function(a, b, c, d) {
            /min|max|step/.test(c) && (null === b || /number|range|text/.test(b)) && (d = Number(d),
            isNaN(d) && (d = void 0)),
            d || 0 === d ? a[c] = d : b === c && "range" !== b && (a[c] = !0)
        },
        attributeRules: function(b) {
            var c, d, e = {}, f = a(b), g = b.getAttribute("type");
            for (c in a.validator.methods)
                "required" === c ? (d = b.getAttribute(c),
                "" === d && (d = !0),
                d = !!d) : d = f.attr(c),
                this.normalizeAttributeRule(e, g, c, d);
            return e.maxlength && /-1|2147483647|524288/.test(e.maxlength) && delete e.maxlength,
            e
        },
        dataRules: function(b) {
            var c, d, e = {}, f = a(b), g = b.getAttribute("type");
            for (c in a.validator.methods)
                d = f.data("rule" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()),
                this.normalizeAttributeRule(e, g, c, d);
            return e
        },
        staticRules: function(b) {
            var c = {}
              , d = a.data(b.form, "validator");
            return d.settings.rules && (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}),
            c
        },
        normalizeRules: function(b, c) {
            return a.each(b, function(d, e) {
                if (e === !1)
                    return void delete b[d];
                if (e.param || e.depends) {
                    var f = !0;
                    switch (typeof e.depends) {
                    case "string":
                        f = !!a(e.depends, c.form).length;
                        break;
                    case "function":
                        f = e.depends.call(c, c)
                    }
                    f ? b[d] = void 0 !== e.param ? e.param : !0 : (a.data(c.form, "validator").resetElements(a(c)),
                    delete b[d])
                }
            }),
            a.each(b, function(d, e) {
                b[d] = a.isFunction(e) && "normalizer" !== d ? e(c) : e
            }),
            a.each(["minlength", "maxlength"], function() {
                b[this] && (b[this] = Number(b[this]))
            }),
            a.each(["rangelength", "range"], function() {
                var c;
                b[this] && (a.isArray(b[this]) ? b[this] = [Number(b[this][0]), Number(b[this][1])] : "string" == typeof b[this] && (c = b[this].replace(/[\[\]]/g, "").split(/[\s,]+/),
                b[this] = [Number(c[0]), Number(c[1])]))
            }),
            a.validator.autoCreateRanges && (null != b.min && null != b.max && (b.range = [b.min, b.max],
            delete b.min,
            delete b.max),
            null != b.minlength && null != b.maxlength && (b.rangelength = [b.minlength, b.maxlength],
            delete b.minlength,
            delete b.maxlength)),
            b
        },
        normalizeRule: function(b) {
            if ("string" == typeof b) {
                var c = {};
                a.each(b.split(/\s/), function() {
                    c[this] = !0
                }),
                b = c
            }
            return b
        },
        addMethod: function(b, c, d) {
            a.validator.methods[b] = c,
            a.validator.messages[b] = void 0 !== d ? d : a.validator.messages[b],
            c.length < 3 && a.validator.addClassRules(b, a.validator.normalizeRule(b))
        },
        methods: {
            required: function(b, c, d) {
                if (!this.depend(d, c))
                    return "dependency-mismatch";
                if ("select" === c.nodeName.toLowerCase()) {
                    var e = a(c).val();
                    return e && e.length > 0
                }
                return this.checkable(c) ? this.getLength(b, c) > 0 : b.length > 0
            },
            email: function(a, b) {
                return this.optional(b) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)
            },
            url: function(a, b) {
                return this.optional(b) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(a)
            },
            date: function(a, b) {
                return this.optional(b) || !/Invalid|NaN/.test(new Date(a).toString())
            },
            dateISO: function(a, b) {
                return this.optional(b) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)
            },
            number: function(a, b) {
                return this.optional(b) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)
            },
            digits: function(a, b) {
                return this.optional(b) || /^\d+$/.test(a)
            },
            minlength: function(b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(b, c);
                return this.optional(c) || e >= d
            },
            maxlength: function(b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(b, c);
                return this.optional(c) || d >= e
            },
            rangelength: function(b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(b, c);
                return this.optional(c) || e >= d[0] && e <= d[1]
            },
            min: function(a, b, c) {
                return this.optional(b) || a >= c
            },
            max: function(a, b, c) {
                return this.optional(b) || c >= a
            },
            range: function(a, b, c) {
                return this.optional(b) || a >= c[0] && a <= c[1]
            },
            step: function(b, c, d) {
                var e = a(c).attr("type")
                  , f = "Step attribute on input type " + e + " is not supported."
                  , g = ["text", "number", "range"]
                  , h = new RegExp("\\b" + e + "\\b")
                  , i = e && !h.test(g.join());
                if (i)
                    throw new Error(f);
                return this.optional(c) || b % d === 0
            },
            equalTo: function(b, c, d) {
                var e = a(d);
                return this.settings.onfocusout && e.not(".validate-equalTo-blur").length && e.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function() {
                    a(c).valid()
                }),
                b === e.val()
            },
            remote: function(b, c, d, e) {
                if (this.optional(c))
                    return "dependency-mismatch";
                e = "string" == typeof e && e || "remote";
                var f, g, h, i = this.previousValue(c, e);
                return this.settings.messages[c.name] || (this.settings.messages[c.name] = {}),
                i.originalMessage = i.originalMessage || this.settings.messages[c.name][e],
                this.settings.messages[c.name][e] = i.message,
                d = "string" == typeof d && {
                    url: d
                } || d,
                h = a.param(a.extend({
                    data: b
                }, d.data)),
                i.old === h ? i.valid : (i.old = h,
                f = this,
                this.startRequest(c),
                g = {},
                g[c.name] = b,
                a.ajax(a.extend(!0, {
                    mode: "abort",
                    port: "validate" + c.name,
                    dataType: "json",
                    data: g,
                    context: f.currentForm,
                    success: function(a) {
                        var d, g, h, j = a === !0 || "true" === a;
                        f.settings.messages[c.name][e] = i.originalMessage,
                        j ? (h = f.formSubmitted,
                        f.resetInternals(),
                        f.toHide = f.errorsFor(c),
                        f.formSubmitted = h,
                        f.successList.push(c),
                        f.invalid[c.name] = !1,
                        f.showErrors()) : (d = {},
                        g = a || f.defaultMessage(c, {
                            method: e,
                            parameters: b
                        }),
                        d[c.name] = i.message = g,
                        f.invalid[c.name] = !0,
                        f.showErrors(d)),
                        i.valid = j,
                        f.stopRequest(c, j)
                    }
                }, d)),
                "pending")
            }
        }
    });
    var b, c = {};
    a.ajaxPrefilter ? a.ajaxPrefilter(function(a, b, d) {
        var e = a.port;
        "abort" === a.mode && (c[e] && c[e].abort(),
        c[e] = d)
    }) : (b = a.ajax,
    a.ajax = function(d) {
        var e = ("mode"in d ? d : a.ajaxSettings).mode
          , f = ("port"in d ? d : a.ajaxSettings).port;
        return "abort" === e ? (c[f] && c[f].abort(),
        c[f] = b.apply(this, arguments),
        c[f]) : b.apply(this, arguments)
    }
    )
});
function atvImg() {
    function e(e, t, a, r, n, o) {
        var i = l.scrollTop || s.scrollTop
          , d = l.scrollLeft
          , c = t ? e.touches[0].pageX : e.pageX
          , m = t ? e.touches[0].pageY : e.pageY
          , v = a.getBoundingClientRect()
          , f = a.clientWidth || a.offsetWidth || a.scrollWidth
          , g = a.clientHeight || a.offsetHeight || a.scrollHeight
          , h = 320 / f
          , u = .52 - (c - v.left - d) / f
          , p = .52 - (m - v.top - i) / g
          , y = m - v.top - i - g / 2
          , E = c - v.left - d - f / 2
          , C = (u - E) * (.07 * h)
          , I = (y - p) * (.1 * h)
          , N = "rotateX(" + I + "deg) rotateY(" + C + "deg)"
          , x = Math.atan2(y, E)
          , b = 180 * x / Math.PI - 90;
        0 > b && (b += 360),
        -1 != a.firstChild.className.indexOf(" over") && (N += " scale3d(1.07,1.07,1.07)"),
        a.firstChild.style.transform = N,
        o.style.background = "linear-gradient(" + b + "deg, rgba(255,255,255," + (m - v.top - i) / g * .4 + ") 0%,rgba(255,255,255,0) 80%)",
        o.style.transform = "translateX(" + u * n - .1 + "px) translateY(" + p * n - .1 + "px)";
        for (var L = n, S = 0; n > S; S++)
            r[S].style.transform = "translateX(" + u * L * (2.5 * S / h) + "px) translateY(" + p * n * (2.5 * S / h) + "px)",
            L--
    }
    function t(e, t) {
        t.firstChild.className += " over"
    }
    function a(e, t, a, r, n) {
        var l = t.firstChild;
        l.className = l.className.replace(" over", ""),
        l.style.transform = "",
        n.style.cssText = "";
        for (var s = 0; r > s; s++)
            a[s].style.transform = ""
    }
    var r = document
      , n = r.documentElement
      , l = r.getElementsByTagName("body")[0]
      , s = r.getElementsByTagName("html")[0]
      , o = window
      , i = r.querySelectorAll(".atvImg")
      , d = i.length
      , c = "ontouchstart"in o || navigator.msMaxTouchPoints;
    if (!(0 >= d))
        for (var m = 0; d > m; m++) {
            var v = i[m]
              , f = v.querySelectorAll(".atvImg-layer")
              , g = f.length;
            if (!(0 >= g)) {
                for (; v.firstChild; )
                    v.removeChild(v.firstChild);
                var h = r.createElement("div")
                  , u = r.createElement("div")
                  , p = r.createElement("div")
                  , y = r.createElement("div")
                  , E = [];
                v.id = "atvImg__" + m,
                h.className = "atvImg-container",
                u.className = "atvImg-shine",
                p.className = "atvImg-shadow",
                y.className = "atvImg-layers";
                for (var C = 0; g > C; C++) {
                    var I = r.createElement("div")
                      , N = f[C].getAttribute("data-img");
                    I.className = "atvImg-rendered-layer",
                    I.setAttribute("data-layer", C),
                    I.style.backgroundImage = "url(" + N + ")",
                    y.appendChild(I),
                    E.push(I)
                }
                h.appendChild(p),
                h.appendChild(y),
                h.appendChild(u),
                v.appendChild(h);
                var x = v.clientWidth || v.offsetWidth || v.scrollWidth;
                v.style.transform = "perspective(" + 3 * x + "px)",
                c ? (o.preventScroll = !1,
                function(r, n, l, s) {
                    v.addEventListener("touchmove", function(t) {
                        o.preventScroll && t.preventDefault(),
                        e(t, !0, r, n, l, s)
                    }),
                    v.addEventListener("touchstart", function(e) {
                        o.preventScroll = !0,
                        t(e, r)
                    }),
                    v.addEventListener("touchend", function(e) {
                        o.preventScroll = !1,
                        a(e, r, n, l, s)
                    })
                }(v, E, g, u)) : !function(r, n, l, s) {
                    v.addEventListener("mousemove", function(t) {
                        e(t, !1, r, n, l, s)
                    }),
                    v.addEventListener("mouseenter", function(e) {
                        t(e, r)
                    }),
                    v.addEventListener("mouseleave", function(e) {
                        a(e, r, n, l, s)
                    })
                }(v, E, g, u)
            }
        }
}
/*!
* Flickity PACKAGED v2.0.8
* Touch, responsive, flickable carousels
*
* Licensed GPLv3 for open source use
* or Flickity Commercial License for commercial use
*
* http://flickity.metafizzy.co
* Copyright 2016 Metafizzy
*/
!function(t, e) {
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
}(window, function(t, e) {
    "use strict";
    function i(i, o, a) {
        function h(t, e, n) {
            var s, o = "$()." + i + '("' + e + '")';
            return t.each(function(t, h) {
                var l = a.data(h, i);
                if (!l)
                    return void r(i + " not initialized. Cannot call methods, i.e. " + o);
                var c = l[e];
                if (!c || "_" == e.charAt(0))
                    return void r(o + " is not a valid method");
                var d = c.apply(l, n);
                s = void 0 === s ? d : s
            }),
            void 0 !== s ? s : t
        }
        function l(t, e) {
            t.each(function(t, n) {
                var s = a.data(n, i);
                s ? (s.option(e),
                s._init()) : (s = new o(n,e),
                a.data(n, i, s))
            })
        }
        a = a || e || t.jQuery,
        a && (o.prototype.option || (o.prototype.option = function(t) {
            a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
        }
        ),
        a.fn[i] = function(t) {
            if ("string" == typeof t) {
                var e = s.call(arguments, 1);
                return h(this, t, e)
            }
            return l(this, t),
            this
        }
        ,
        n(a))
    }
    function n(t) {
        !t || t && t.bridget || (t.bridget = i)
    }
    var s = Array.prototype.slice
      , o = t.console
      , r = "undefined" == typeof o ? function() {}
    : function(t) {
        o.error(t)
    }
    ;
    return n(e || t.jQuery),
    i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, function() {
    function t() {}
    var e = t.prototype;
    return e.on = function(t, e) {
        if (t && e) {
            var i = this._events = this._events || {}
              , n = i[t] = i[t] || [];
            return n.indexOf(e) == -1 && n.push(e),
            this
        }
    }
    ,
    e.once = function(t, e) {
        if (t && e) {
            this.on(t, e);
            var i = this._onceEvents = this._onceEvents || {}
              , n = i[t] = i[t] || {};
            return n[e] = !0,
            this
        }
    }
    ,
    e.off = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var n = i.indexOf(e);
            return n != -1 && i.splice(n, 1),
            this
        }
    }
    ,
    e.emitEvent = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var n = 0
              , s = i[n];
            e = e || [];
            for (var o = this._onceEvents && this._onceEvents[t]; s; ) {
                var r = o && o[s];
                r && (this.off(t, s),
                delete o[s]),
                s.apply(this, e),
                n += r ? 0 : 1,
                s = i[n]
            }
            return this
        }
    }
    ,
    t
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("get-size/get-size", [], function() {
        return e()
    }) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
}(window, function() {
    "use strict";
    function t(t) {
        var e = parseFloat(t)
          , i = t.indexOf("%") == -1 && !isNaN(e);
        return i && e
    }
    function e() {}
    function i() {
        for (var t = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0
        }, e = 0; e < l; e++) {
            var i = h[e];
            t[i] = 0
        }
        return t
    }
    function n(t) {
        var e = getComputedStyle(t);
        return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),
        e
    }
    function s() {
        if (!c) {
            c = !0;
            var e = document.createElement("div");
            e.style.width = "200px",
            e.style.padding = "1px 2px 3px 4px",
            e.style.borderStyle = "solid",
            e.style.borderWidth = "1px 2px 3px 4px",
            e.style.boxSizing = "border-box";
            var i = document.body || document.documentElement;
            i.appendChild(e);
            var s = n(e);
            o.isBoxSizeOuter = r = 200 == t(s.width),
            i.removeChild(e)
        }
    }
    function o(e) {
        if (s(),
        "string" == typeof e && (e = document.querySelector(e)),
        e && "object" == typeof e && e.nodeType) {
            var o = n(e);
            if ("none" == o.display)
                return i();
            var a = {};
            a.width = e.offsetWidth,
            a.height = e.offsetHeight;
            for (var c = a.isBorderBox = "border-box" == o.boxSizing, d = 0; d < l; d++) {
                var u = h[d]
                  , f = o[u]
                  , p = parseFloat(f);
                a[u] = isNaN(p) ? 0 : p
            }
            var v = a.paddingLeft + a.paddingRight
              , g = a.paddingTop + a.paddingBottom
              , m = a.marginLeft + a.marginRight
              , y = a.marginTop + a.marginBottom
              , E = a.borderLeftWidth + a.borderRightWidth
              , S = a.borderTopWidth + a.borderBottomWidth
              , b = c && r
              , x = t(o.width);
            x !== !1 && (a.width = x + (b ? 0 : v + E));
            var C = t(o.height);
            return C !== !1 && (a.height = C + (b ? 0 : g + S)),
            a.innerWidth = a.width - (v + E),
            a.innerHeight = a.height - (g + S),
            a.outerWidth = a.width + m,
            a.outerHeight = a.height + y,
            a
        }
    }
    var r, a = "undefined" == typeof console ? e : function(t) {
        console.error(t)
    }
    , h = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"], l = h.length, c = !1;
    return o
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
}(window, function() {
    "use strict";
    var t = function() {
        var t = window.Element.prototype;
        if (t.matches)
            return "matches";
        if (t.matchesSelector)
            return "matchesSelector";
        for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
            var n = e[i]
              , s = n + "MatchesSelector";
            if (t[s])
                return s
        }
    }();
    return function(e, i) {
        return e[t](i)
    }
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
}(window, function(t, e) {
    var i = {};
    i.extend = function(t, e) {
        for (var i in e)
            t[i] = e[i];
        return t
    }
    ,
    i.modulo = function(t, e) {
        return (t % e + e) % e
    }
    ,
    i.makeArray = function(t) {
        var e = [];
        if (Array.isArray(t))
            e = t;
        else if (t && "object" == typeof t && "number" == typeof t.length)
            for (var i = 0; i < t.length; i++)
                e.push(t[i]);
        else
            e.push(t);
        return e
    }
    ,
    i.removeFrom = function(t, e) {
        var i = t.indexOf(e);
        i != -1 && t.splice(i, 1)
    }
    ,
    i.getParent = function(t, i) {
        for (; t.parentNode && t != document.body; )
            if (t = t.parentNode,
            e(t, i))
                return t
    }
    ,
    i.getQueryElement = function(t) {
        return "string" == typeof t ? document.querySelector(t) : t
    }
    ,
    i.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }
    ,
    i.filterFindElements = function(t, n) {
        t = i.makeArray(t);
        var s = [];
        return t.forEach(function(t) {
            if (t instanceof HTMLElement) {
                if (!n)
                    return void s.push(t);
                e(t, n) && s.push(t);
                for (var i = t.querySelectorAll(n), o = 0; o < i.length; o++)
                    s.push(i[o])
            }
        }),
        s
    }
    ,
    i.debounceMethod = function(t, e, i) {
        var n = t.prototype[e]
          , s = e + "Timeout";
        t.prototype[e] = function() {
            var t = this[s];
            t && clearTimeout(t);
            var e = arguments
              , o = this;
            this[s] = setTimeout(function() {
                n.apply(o, e),
                delete o[s]
            }, i || 100)
        }
    }
    ,
    i.docReady = function(t) {
        var e = document.readyState;
        "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
    }
    ,
    i.toDashed = function(t) {
        return t.replace(/(.)([A-Z])/g, function(t, e, i) {
            return e + "-" + i
        }).toLowerCase()
    }
    ;
    var n = t.console;
    return i.htmlInit = function(e, s) {
        i.docReady(function() {
            var o = i.toDashed(s)
              , r = "data-" + o
              , a = document.querySelectorAll("[" + r + "]")
              , h = document.querySelectorAll(".js-" + o)
              , l = i.makeArray(a).concat(i.makeArray(h))
              , c = r + "-options"
              , d = t.jQuery;
            l.forEach(function(t) {
                var i, o = t.getAttribute(r) || t.getAttribute(c);
                try {
                    i = o && JSON.parse(o)
                } catch (a) {
                    return void (n && n.error("Error parsing " + r + " on " + t.className + ": " + a))
                }
                var h = new e(t,i);
                d && d.data(t, s, h)
            })
        })
    }
    ,
    i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("flickity/js/cell", ["get-size/get-size"], function(i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("get-size")) : (t.Flickity = t.Flickity || {},
    t.Flickity.Cell = e(t, t.getSize))
}(window, function(t, e) {
    function i(t, e) {
        this.element = t,
        this.parent = e,
        this.create()
    }
    var n = i.prototype;
    return n.create = function() {
        this.element.style.position = "absolute",
        this.x = 0,
        this.shift = 0
    }
    ,
    n.destroy = function() {
        this.element.style.position = "";
        var t = this.parent.originSide;
        this.element.style[t] = ""
    }
    ,
    n.getSize = function() {
        this.size = e(this.element)
    }
    ,
    n.setPosition = function(t) {
        this.x = t,
        this.updateTarget(),
        this.renderPosition(t)
    }
    ,
    n.updateTarget = n.setDefaultTarget = function() {
        var t = "left" == this.parent.originSide ? "marginLeft" : "marginRight";
        this.target = this.x + this.size[t] + this.size.width * this.parent.cellAlign
    }
    ,
    n.renderPosition = function(t) {
        var e = this.parent.originSide;
        this.element.style[e] = this.parent.getPositionValue(t)
    }
    ,
    n.wrapShift = function(t) {
        this.shift = t,
        this.renderPosition(this.x + this.parent.slideableWidth * t)
    }
    ,
    n.remove = function() {
        this.element.parentNode.removeChild(this.element)
    }
    ,
    i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("flickity/js/slide", e) : "object" == typeof module && module.exports ? module.exports = e() : (t.Flickity = t.Flickity || {},
    t.Flickity.Slide = e())
}(window, function() {
    "use strict";
    function t(t) {
        this.parent = t,
        this.isOriginLeft = "left" == t.originSide,
        this.cells = [],
        this.outerWidth = 0,
        this.height = 0
    }
    var e = t.prototype;
    return e.addCell = function(t) {
        if (this.cells.push(t),
        this.outerWidth += t.size.outerWidth,
        this.height = Math.max(t.size.outerHeight, this.height),
        1 == this.cells.length) {
            this.x = t.x;
            var e = this.isOriginLeft ? "marginLeft" : "marginRight";
            this.firstMargin = t.size[e]
        }
    }
    ,
    e.updateTarget = function() {
        var t = this.isOriginLeft ? "marginRight" : "marginLeft"
          , e = this.getLastCell()
          , i = e ? e.size[t] : 0
          , n = this.outerWidth - (this.firstMargin + i);
        this.target = this.x + this.firstMargin + n * this.parent.cellAlign
    }
    ,
    e.getLastCell = function() {
        return this.cells[this.cells.length - 1]
    }
    ,
    e.select = function() {
        this.changeSelectedClass("add")
    }
    ,
    e.unselect = function() {
        this.changeSelectedClass("remove")
    }
    ,
    e.changeSelectedClass = function(t) {
        this.cells.forEach(function(e) {
            e.element.classList[t]("is-selected")
        })
    }
    ,
    e.getCellElements = function() {
        return this.cells.map(function(t) {
            return t.element
        })
    }
    ,
    t
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("flickity/js/animate", ["fizzy-ui-utils/utils"], function(i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("fizzy-ui-utils")) : (t.Flickity = t.Flickity || {},
    t.Flickity.animatePrototype = e(t, t.fizzyUIUtils))
}(window, function(t, e) {
    var i = t.requestAnimationFrame || t.webkitRequestAnimationFrame
      , n = 0;
    i || (i = function(t) {
        var e = (new Date).getTime()
          , i = Math.max(0, 16 - (e - n))
          , s = setTimeout(t, i);
        return n = e + i,
        s
    }
    );
    var s = {};
    s.startAnimation = function() {
        this.isAnimating || (this.isAnimating = !0,
        this.restingFrames = 0,
        this.animate())
    }
    ,
    s.animate = function() {
        this.applyDragForce(),
        this.applySelectedAttraction();
        var t = this.x;
        if (this.integratePhysics(),
        this.positionSlider(),
        this.settle(t),
        this.isAnimating) {
            var e = this;
            i(function() {
                e.animate()
            })
        }
    }
    ;
    var o = function() {
        var t = document.documentElement.style;
        return "string" == typeof t.transform ? "transform" : "WebkitTransform"
    }();
    return s.positionSlider = function() {
        var t = this.x;
        this.options.wrapAround && this.cells.length > 1 && (t = e.modulo(t, this.slideableWidth),
        t -= this.slideableWidth,
        this.shiftWrapCells(t)),
        t += this.cursorPosition,
        t = this.options.rightToLeft && o ? -t : t;
        var i = this.getPositionValue(t);
        this.slider.style[o] = this.isAnimating ? "translate3d(" + i + ",0,0)" : "translateX(" + i + ")";
        var n = this.slides[0];
        if (n) {
            var s = -this.x - n.target
              , r = s / this.slidesWidth;
            this.dispatchEvent("scroll", null, [r, s])
        }
    }
    ,
    s.positionSliderAtSelected = function() {
        this.cells.length && (this.x = -this.selectedSlide.target,
        this.positionSlider())
    }
    ,
    s.getPositionValue = function(t) {
        return this.options.percentPosition ? .01 * Math.round(t / this.size.innerWidth * 1e4) + "%" : Math.round(t) + "px"
    }
    ,
    s.settle = function(t) {
        this.isPointerDown || Math.round(100 * this.x) != Math.round(100 * t) || this.restingFrames++,
        this.restingFrames > 2 && (this.isAnimating = !1,
        delete this.isFreeScrolling,
        this.positionSlider(),
        this.dispatchEvent("settle"))
    }
    ,
    s.shiftWrapCells = function(t) {
        var e = this.cursorPosition + t;
        this._shiftCells(this.beforeShiftCells, e, -1);
        var i = this.size.innerWidth - (t + this.slideableWidth + this.cursorPosition);
        this._shiftCells(this.afterShiftCells, i, 1)
    }
    ,
    s._shiftCells = function(t, e, i) {
        for (var n = 0; n < t.length; n++) {
            var s = t[n]
              , o = e > 0 ? i : 0;
            s.wrapShift(o),
            e -= s.size.outerWidth
        }
    }
    ,
    s._unshiftCells = function(t) {
        if (t && t.length)
            for (var e = 0; e < t.length; e++)
                t[e].wrapShift(0)
    }
    ,
    s.integratePhysics = function() {
        this.x += this.velocity,
        this.velocity *= this.getFrictionFactor()
    }
    ,
    s.applyForce = function(t) {
        this.velocity += t
    }
    ,
    s.getFrictionFactor = function() {
        return 1 - this.options[this.isFreeScrolling ? "freeScrollFriction" : "friction"]
    }
    ,
    s.getRestingPosition = function() {
        return this.x + this.velocity / (1 - this.getFrictionFactor())
    }
    ,
    s.applyDragForce = function() {
        if (this.isPointerDown) {
            var t = this.dragX - this.x
              , e = t - this.velocity;
            this.applyForce(e)
        }
    }
    ,
    s.applySelectedAttraction = function() {
        if (!this.isPointerDown && !this.isFreeScrolling && this.cells.length) {
            var t = this.selectedSlide.target * -1 - this.x
              , e = t * this.options.selectedAttraction;
            this.applyForce(e)
        }
    }
    ,
    s
}),
function(t, e) {
    if ("function" == typeof define && define.amd)
        define("flickity/js/flickity", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./cell", "./slide", "./animate"], function(i, n, s, o, r, a) {
            return e(t, i, n, s, o, r, a)
        });
    else if ("object" == typeof module && module.exports)
        module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./cell"), require("./slide"), require("./animate"));
    else {
        var i = t.Flickity;
        t.Flickity = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, i.Cell, i.Slide, i.animatePrototype)
    }
}(window, function(t, e, i, n, s, o, r) {
    function a(t, e) {
        for (t = n.makeArray(t); t.length; )
            e.appendChild(t.shift())
    }
    function h(t, e) {
        var i = n.getQueryElement(t);
        if (!i)
            return void (d && d.error("Bad element for Flickity: " + (i || t)));
        if (this.element = i,
        this.element.flickityGUID) {
            var s = f[this.element.flickityGUID];
            return s.option(e),
            s
        }
        l && (this.$element = l(this.element)),
        this.options = n.extend({}, this.constructor.defaults),
        this.option(e),
        this._create()
    }
    var l = t.jQuery
      , c = t.getComputedStyle
      , d = t.console
      , u = 0
      , f = {};
    h.defaults = {
        accessibility: !0,
        cellAlign: "center",
        freeScrollFriction: .075,
        friction: .28,
        namespaceJQueryEvents: !0,
        percentPosition: !0,
        resize: !0,
        selectedAttraction: .025,
        setGallerySize: !0
    },
    h.createMethods = [];
    var p = h.prototype;
    n.extend(p, e.prototype),
    p._create = function() {
        var e = this.guid = ++u;
        this.element.flickityGUID = e,
        f[e] = this,
        this.selectedIndex = 0,
        this.restingFrames = 0,
        this.x = 0,
        this.velocity = 0,
        this.originSide = this.options.rightToLeft ? "right" : "left",
        this.viewport = document.createElement("div"),
        this.viewport.className = "flickity-viewport",
        this._createSlider(),
        (this.options.resize || this.options.watchCSS) && t.addEventListener("resize", this),
        h.createMethods.forEach(function(t) {
            this[t]()
        }, this),
        this.options.watchCSS ? this.watchCSS() : this.activate()
    }
    ,
    p.option = function(t) {
        n.extend(this.options, t)
    }
    ,
    p.activate = function() {
        if (!this.isActive) {
            this.isActive = !0,
            this.element.classList.add("flickity-enabled"),
            this.options.rightToLeft && this.element.classList.add("flickity-rtl"),
            this.getSize();
            var t = this._filterFindCellElements(this.element.children);
            a(t, this.slider),
            this.viewport.appendChild(this.slider),
            this.element.appendChild(this.viewport),
            this.reloadCells(),
            this.options.accessibility && (this.element.tabIndex = 0,
            this.element.addEventListener("keydown", this)),
            this.emitEvent("activate");
            var e, i = this.options.initialIndex;
            e = this.isInitActivated ? this.selectedIndex : void 0 !== i && this.cells[i] ? i : 0,
            this.select(e, !1, !0),
            this.isInitActivated = !0
        }
    }
    ,
    p._createSlider = function() {
        var t = document.createElement("div");
        t.className = "flickity-slider",
        t.style[this.originSide] = 0,
        this.slider = t
    }
    ,
    p._filterFindCellElements = function(t) {
        return n.filterFindElements(t, this.options.cellSelector)
    }
    ,
    p.reloadCells = function() {
        this.cells = this._makeCells(this.slider.children),
        this.positionCells(),
        this._getWrapShiftCells(),
        this.setGallerySize()
    }
    ,
    p._makeCells = function(t) {
        var e = this._filterFindCellElements(t)
          , i = e.map(function(t) {
            return new s(t,this)
        }, this);
        return i
    }
    ,
    p.getLastCell = function() {
        return this.cells[this.cells.length - 1]
    }
    ,
    p.getLastSlide = function() {
        return this.slides[this.slides.length - 1]
    }
    ,
    p.positionCells = function() {
        this._sizeCells(this.cells),
        this._positionCells(0)
    }
    ,
    p._positionCells = function(t) {
        t = t || 0,
        this.maxCellHeight = t ? this.maxCellHeight || 0 : 0;
        var e = 0;
        if (t > 0) {
            var i = this.cells[t - 1];
            e = i.x + i.size.outerWidth
        }
        for (var n = this.cells.length, s = t; s < n; s++) {
            var o = this.cells[s];
            o.setPosition(e),
            e += o.size.outerWidth,
            this.maxCellHeight = Math.max(o.size.outerHeight, this.maxCellHeight)
        }
        this.slideableWidth = e,
        this.updateSlides(),
        this._containSlides(),
        this.slidesWidth = n ? this.getLastSlide().target - this.slides[0].target : 0
    }
    ,
    p._sizeCells = function(t) {
        t.forEach(function(t) {
            t.getSize()
        })
    }
    ,
    p.updateSlides = function() {
        if (this.slides = [],
        this.cells.length) {
            var t = new o(this);
            this.slides.push(t);
            var e = "left" == this.originSide
              , i = e ? "marginRight" : "marginLeft"
              , n = this._getCanCellFit();
            this.cells.forEach(function(e, s) {
                if (!t.cells.length)
                    return void t.addCell(e);
                var r = t.outerWidth - t.firstMargin + (e.size.outerWidth - e.size[i]);
                n.call(this, s, r) ? t.addCell(e) : (t.updateTarget(),
                t = new o(this),
                this.slides.push(t),
                t.addCell(e))
            }, this),
            t.updateTarget(),
            this.updateSelectedSlide()
        }
    }
    ,
    p._getCanCellFit = function() {
        var t = this.options.groupCells;
        if (!t)
            return function() {
                return !1
            }
            ;
        if ("number" == typeof t) {
            var e = parseInt(t, 10);
            return function(t) {
                return t % e !== 0
            }
        }
        var i = "string" == typeof t && t.match(/^(\d+)%$/)
          , n = i ? parseInt(i[1], 10) / 100 : 1;
        return function(t, e) {
            return e <= (this.size.innerWidth + 1) * n
        }
    }
    ,
    p._init = p.reposition = function() {
        this.positionCells(),
        this.positionSliderAtSelected()
    }
    ,
    p.getSize = function() {
        this.size = i(this.element),
        this.setCellAlign(),
        this.cursorPosition = this.size.innerWidth * this.cellAlign
    }
    ;
    var v = {
        center: {
            left: .5,
            right: .5
        },
        left: {
            left: 0,
            right: 1
        },
        right: {
            right: 0,
            left: 1
        }
    };
    return p.setCellAlign = function() {
        var t = v[this.options.cellAlign];
        this.cellAlign = t ? t[this.originSide] : this.options.cellAlign
    }
    ,
    p.setGallerySize = function() {
        if (this.options.setGallerySize) {
            var t = this.options.adaptiveHeight && this.selectedSlide ? this.selectedSlide.height : this.maxCellHeight;
            this.viewport.style.height = t + "px"
        }
    }
    ,
    p._getWrapShiftCells = function() {
        if (this.options.wrapAround) {
            this._unshiftCells(this.beforeShiftCells),
            this._unshiftCells(this.afterShiftCells);
            var t = this.cursorPosition
              , e = this.cells.length - 1;
            this.beforeShiftCells = this._getGapCells(t, e, -1),
            t = this.size.innerWidth - this.cursorPosition,
            this.afterShiftCells = this._getGapCells(t, 0, 1)
        }
    }
    ,
    p._getGapCells = function(t, e, i) {
        for (var n = []; t > 0; ) {
            var s = this.cells[e];
            if (!s)
                break;
            n.push(s),
            e += i,
            t -= s.size.outerWidth
        }
        return n
    }
    ,
    p._containSlides = function() {
        if (this.options.contain && !this.options.wrapAround && this.cells.length) {
            var t = this.options.rightToLeft
              , e = t ? "marginRight" : "marginLeft"
              , i = t ? "marginLeft" : "marginRight"
              , n = this.slideableWidth - this.getLastCell().size[i]
              , s = n < this.size.innerWidth
              , o = this.cursorPosition + this.cells[0].size[e]
              , r = n - this.size.innerWidth * (1 - this.cellAlign);
            this.slides.forEach(function(t) {
                s ? t.target = n * this.cellAlign : (t.target = Math.max(t.target, o),
                t.target = Math.min(t.target, r))
            }, this)
        }
    }
    ,
    p.dispatchEvent = function(t, e, i) {
        var n = e ? [e].concat(i) : i;
        if (this.emitEvent(t, n),
        l && this.$element) {
            t += this.options.namespaceJQueryEvents ? ".flickity" : "";
            var s = t;
            if (e) {
                var o = l.Event(e);
                o.type = t,
                s = o
            }
            this.$element.trigger(s, i)
        }
    }
    ,
    p.select = function(t, e, i) {
        this.isActive && (t = parseInt(t, 10),
        this._wrapSelect(t),
        (this.options.wrapAround || e) && (t = n.modulo(t, this.slides.length)),
        this.slides[t] && (this.selectedIndex = t,
        this.updateSelectedSlide(),
        i ? this.positionSliderAtSelected() : this.startAnimation(),
        this.options.adaptiveHeight && this.setGallerySize(),
        this.dispatchEvent("select"),
        this.dispatchEvent("cellSelect")))
    }
    ,
    p._wrapSelect = function(t) {
        var e = this.slides.length
          , i = this.options.wrapAround && e > 1;
        if (!i)
            return t;
        var s = n.modulo(t, e)
          , o = Math.abs(s - this.selectedIndex)
          , r = Math.abs(s + e - this.selectedIndex)
          , a = Math.abs(s - e - this.selectedIndex);
        !this.isDragSelect && r < o ? t += e : !this.isDragSelect && a < o && (t -= e),
        t < 0 ? this.x -= this.slideableWidth : t >= e && (this.x += this.slideableWidth)
    }
    ,
    p.previous = function(t, e) {
        this.select(this.selectedIndex - 1, t, e)
    }
    ,
    p.next = function(t, e) {
        this.select(this.selectedIndex + 1, t, e)
    }
    ,
    p.updateSelectedSlide = function() {
        var t = this.slides[this.selectedIndex];
        t && (this.unselectSelectedSlide(),
        this.selectedSlide = t,
        t.select(),
        this.selectedCells = t.cells,
        this.selectedElements = t.getCellElements(),
        this.selectedCell = t.cells[0],
        this.selectedElement = this.selectedElements[0])
    }
    ,
    p.unselectSelectedSlide = function() {
        this.selectedSlide && this.selectedSlide.unselect()
    }
    ,
    p.selectCell = function(t, e, i) {
        var n;
        "number" == typeof t ? n = this.cells[t] : ("string" == typeof t && (t = this.element.querySelector(t)),
        n = this.getCell(t));
        for (var s = 0; n && s < this.slides.length; s++) {
            var o = this.slides[s]
              , r = o.cells.indexOf(n);
            if (r != -1)
                return void this.select(s, e, i)
        }
    }
    ,
    p.getCell = function(t) {
        for (var e = 0; e < this.cells.length; e++) {
            var i = this.cells[e];
            if (i.element == t)
                return i
        }
    }
    ,
    p.getCells = function(t) {
        t = n.makeArray(t);
        var e = [];
        return t.forEach(function(t) {
            var i = this.getCell(t);
            i && e.push(i)
        }, this),
        e
    }
    ,
    p.getCellElements = function() {
        return this.cells.map(function(t) {
            return t.element
        })
    }
    ,
    p.getParentCell = function(t) {
        var e = this.getCell(t);
        return e ? e : (t = n.getParent(t, ".flickity-slider > *"),
        this.getCell(t))
    }
    ,
    p.getAdjacentCellElements = function(t, e) {
        if (!t)
            return this.selectedSlide.getCellElements();
        e = void 0 === e ? this.selectedIndex : e;
        var i = this.slides.length;
        if (1 + 2 * t >= i)
            return this.getCellElements();
        for (var s = [], o = e - t; o <= e + t; o++) {
            var r = this.options.wrapAround ? n.modulo(o, i) : o
              , a = this.slides[r];
            a && (s = s.concat(a.getCellElements()))
        }
        return s
    }
    ,
    p.uiChange = function() {
        this.emitEvent("uiChange")
    }
    ,
    p.childUIPointerDown = function(t) {
        this.emitEvent("childUIPointerDown", [t])
    }
    ,
    p.onresize = function() {
        this.watchCSS(),
        this.resize()
    }
    ,
    n.debounceMethod(h, "onresize", 150),
    p.resize = function() {
        if (this.isActive) {
            this.getSize(),
            this.options.wrapAround && (this.x = n.modulo(this.x, this.slideableWidth)),
            this.positionCells(),
            this._getWrapShiftCells(),
            this.setGallerySize(),
            this.emitEvent("resize");
            var t = this.selectedElements && this.selectedElements[0];
            this.selectCell(t, !1, !0)
        }
    }
    ,
    p.watchCSS = function() {
        var t = this.options.watchCSS;
        if (t) {
            var e = c(this.element, ":after").content;
            e.indexOf("flickity") != -1 ? this.activate() : this.deactivate()
        }
    }
    ,
    p.onkeydown = function(t) {
        if (this.options.accessibility && (!document.activeElement || document.activeElement == this.element))
            if (37 == t.keyCode) {
                var e = this.options.rightToLeft ? "next" : "previous";
                this.uiChange(),
                this[e]()
            } else if (39 == t.keyCode) {
                var i = this.options.rightToLeft ? "previous" : "next";
                this.uiChange(),
                this[i]()
            }
    }
    ,
    p.deactivate = function() {
        this.isActive && (this.element.classList.remove("flickity-enabled"),
        this.element.classList.remove("flickity-rtl"),
        this.cells.forEach(function(t) {
            t.destroy()
        }),
        this.unselectSelectedSlide(),
        this.element.removeChild(this.viewport),
        a(this.slider.children, this.element),
        this.options.accessibility && (this.element.removeAttribute("tabIndex"),
        this.element.removeEventListener("keydown", this)),
        this.isActive = !1,
        this.emitEvent("deactivate"))
    }
    ,
    p.destroy = function() {
        this.deactivate(),
        t.removeEventListener("resize", this),
        this.emitEvent("destroy"),
        l && this.$element && l.removeData(this.element, "flickity"),
        delete this.element.flickityGUID,
        delete f[this.guid]
    }
    ,
    n.extend(p, r),
    h.data = function(t) {
        t = n.getQueryElement(t);
        var e = t && t.flickityGUID;
        return e && f[e]
    }
    ,
    n.htmlInit(h, "flickity"),
    l && l.bridget && l.bridget("flickity", h),
    h.setJQuery = function(t) {
        l = t
    }
    ,
    h.Cell = s,
    h
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("unipointer/unipointer", ["ev-emitter/ev-emitter"], function(i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter")) : t.Unipointer = e(t, t.EvEmitter)
}(window, function(t, e) {
    function i() {}
    function n() {}
    var s = n.prototype = Object.create(e.prototype);
    s.bindStartEvent = function(t) {
        this._bindStartEvent(t, !0)
    }
    ,
    s.unbindStartEvent = function(t) {
        this._bindStartEvent(t, !1)
    }
    ,
    s._bindStartEvent = function(e, i) {
        i = void 0 === i || !!i;
        var n = i ? "addEventListener" : "removeEventListener";
        t.PointerEvent ? e[n]("pointerdown", this) : (e[n]("mousedown", this),
        e[n]("touchstart", this))
    }
    ,
    s.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }
    ,
    s.getTouch = function(t) {
        for (var e = 0; e < t.length; e++) {
            var i = t[e];
            if (i.identifier == this.pointerIdentifier)
                return i
        }
    }
    ,
    s.onmousedown = function(t) {
        var e = t.button;
        e && 0 !== e && 1 !== e || this._pointerDown(t, t)
    }
    ,
    s.ontouchstart = function(t) {
        this._pointerDown(t, t.changedTouches[0])
    }
    ,
    s.onpointerdown = function(t) {
        this._pointerDown(t, t)
    }
    ,
    s._pointerDown = function(t, e) {
        this.isPointerDown || (this.isPointerDown = !0,
        this.pointerIdentifier = void 0 !== e.pointerId ? e.pointerId : e.identifier,
        this.pointerDown(t, e))
    }
    ,
    s.pointerDown = function(t, e) {
        this._bindPostStartEvents(t),
        this.emitEvent("pointerDown", [t, e])
    }
    ;
    var o = {
        mousedown: ["mousemove", "mouseup"],
        touchstart: ["touchmove", "touchend", "touchcancel"],
        pointerdown: ["pointermove", "pointerup", "pointercancel"]
    };
    return s._bindPostStartEvents = function(e) {
        if (e) {
            var i = o[e.type];
            i.forEach(function(e) {
                t.addEventListener(e, this)
            }, this),
            this._boundPointerEvents = i
        }
    }
    ,
    s._unbindPostStartEvents = function() {
        this._boundPointerEvents && (this._boundPointerEvents.forEach(function(e) {
            t.removeEventListener(e, this)
        }, this),
        delete this._boundPointerEvents)
    }
    ,
    s.onmousemove = function(t) {
        this._pointerMove(t, t)
    }
    ,
    s.onpointermove = function(t) {
        t.pointerId == this.pointerIdentifier && this._pointerMove(t, t)
    }
    ,
    s.ontouchmove = function(t) {
        var e = this.getTouch(t.changedTouches);
        e && this._pointerMove(t, e)
    }
    ,
    s._pointerMove = function(t, e) {
        this.pointerMove(t, e)
    }
    ,
    s.pointerMove = function(t, e) {
        this.emitEvent("pointerMove", [t, e])
    }
    ,
    s.onmouseup = function(t) {
        this._pointerUp(t, t)
    }
    ,
    s.onpointerup = function(t) {
        t.pointerId == this.pointerIdentifier && this._pointerUp(t, t)
    }
    ,
    s.ontouchend = function(t) {
        var e = this.getTouch(t.changedTouches);
        e && this._pointerUp(t, e)
    }
    ,
    s._pointerUp = function(t, e) {
        this._pointerDone(),
        this.pointerUp(t, e)
    }
    ,
    s.pointerUp = function(t, e) {
        this.emitEvent("pointerUp", [t, e])
    }
    ,
    s._pointerDone = function() {
        this.isPointerDown = !1,
        delete this.pointerIdentifier,
        this._unbindPostStartEvents(),
        this.pointerDone()
    }
    ,
    s.pointerDone = i,
    s.onpointercancel = function(t) {
        t.pointerId == this.pointerIdentifier && this._pointerCancel(t, t)
    }
    ,
    s.ontouchcancel = function(t) {
        var e = this.getTouch(t.changedTouches);
        e && this._pointerCancel(t, e)
    }
    ,
    s._pointerCancel = function(t, e) {
        this._pointerDone(),
        this.pointerCancel(t, e)
    }
    ,
    s.pointerCancel = function(t, e) {
        this.emitEvent("pointerCancel", [t, e])
    }
    ,
    n.getPointerPoint = function(t) {
        return {
            x: t.pageX,
            y: t.pageY
        }
    }
    ,
    n
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("unidragger/unidragger", ["unipointer/unipointer"], function(i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("unipointer")) : t.Unidragger = e(t, t.Unipointer)
}(window, function(t, e) {
    function i() {}
    var n = i.prototype = Object.create(e.prototype);
    return n.bindHandles = function() {
        this._bindHandles(!0)
    }
    ,
    n.unbindHandles = function() {
        this._bindHandles(!1)
    }
    ,
    n._bindHandles = function(e) {
        e = void 0 === e || !!e;
        for (var i = e ? "addEventListener" : "removeEventListener", n = 0; n < this.handles.length; n++) {
            var s = this.handles[n];
            this._bindStartEvent(s, e),
            s[i]("click", this),
            t.PointerEvent && (s.style.touchAction = e ? "none" : "")
        }
    }
    ,
    n.pointerDown = function(t, e) {
        if ("INPUT" == t.target.nodeName && "range" == t.target.type)
            return this.isPointerDown = !1,
            void delete this.pointerIdentifier;
        this._dragPointerDown(t, e);
        var i = document.activeElement;
        i && i.blur && i.blur(),
        this._bindPostStartEvents(t),
        this.emitEvent("pointerDown", [t, e])
    }
    ,
    n._dragPointerDown = function(t, i) {
        this.pointerDownPoint = e.getPointerPoint(i);
        var n = this.canPreventDefaultOnPointerDown(t, i);
        n && t.preventDefault()
    }
    ,
    n.canPreventDefaultOnPointerDown = function(t) {
        return "SELECT" != t.target.nodeName
    }
    ,
    n.pointerMove = function(t, e) {
        var i = this._dragPointerMove(t, e);
        this.emitEvent("pointerMove", [t, e, i]),
        this._dragMove(t, e, i)
    }
    ,
    n._dragPointerMove = function(t, i) {
        var n = e.getPointerPoint(i)
          , s = {
            x: n.x - this.pointerDownPoint.x,
            y: n.y - this.pointerDownPoint.y
        };
        return !this.isDragging && this.hasDragStarted(s) && this._dragStart(t, i),
        s
    }
    ,
    n.hasDragStarted = function(t) {
        return Math.abs(t.x) > 3 || Math.abs(t.y) > 3
    }
    ,
    n.pointerUp = function(t, e) {
        this.emitEvent("pointerUp", [t, e]),
        this._dragPointerUp(t, e)
    }
    ,
    n._dragPointerUp = function(t, e) {
        this.isDragging ? this._dragEnd(t, e) : this._staticClick(t, e)
    }
    ,
    n._dragStart = function(t, i) {
        this.isDragging = !0,
        this.dragStartPoint = e.getPointerPoint(i),
        this.isPreventingClicks = !0,
        this.dragStart(t, i)
    }
    ,
    n.dragStart = function(t, e) {
        this.emitEvent("dragStart", [t, e])
    }
    ,
    n._dragMove = function(t, e, i) {
        this.isDragging && this.dragMove(t, e, i)
    }
    ,
    n.dragMove = function(t, e, i) {
        t.preventDefault(),
        this.emitEvent("dragMove", [t, e, i])
    }
    ,
    n._dragEnd = function(t, e) {
        this.isDragging = !1,
        setTimeout(function() {
            delete this.isPreventingClicks
        }
        .bind(this)),
        this.dragEnd(t, e)
    }
    ,
    n.dragEnd = function(t, e) {
        this.emitEvent("dragEnd", [t, e])
    }
    ,
    n.onclick = function(t) {
        this.isPreventingClicks && t.preventDefault()
    }
    ,
    n._staticClick = function(t, e) {
        if (!this.isIgnoringMouseUp || "mouseup" != t.type) {
            var i = t.target.nodeName;
            "INPUT" != i && "TEXTAREA" != i || t.target.focus(),
            this.staticClick(t, e),
            "mouseup" != t.type && (this.isIgnoringMouseUp = !0,
            setTimeout(function() {
                delete this.isIgnoringMouseUp
            }
            .bind(this), 400))
        }
    }
    ,
    n.staticClick = function(t, e) {
        this.emitEvent("staticClick", [t, e])
    }
    ,
    i.getPointerPoint = e.getPointerPoint,
    i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("flickity/js/drag", ["./flickity", "unidragger/unidragger", "fizzy-ui-utils/utils"], function(i, n, s) {
        return e(t, i, n, s)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("./flickity"), require("unidragger"), require("fizzy-ui-utils")) : t.Flickity = e(t, t.Flickity, t.Unidragger, t.fizzyUIUtils)
}(window, function(t, e, i, n) {
    function s(t) {
        var e = d[t.type]
          , i = u[t.target.nodeName];
        return e || i
    }
    function o() {
        return {
            x: t.pageXOffset,
            y: t.pageYOffset
        }
    }
    n.extend(e.defaults, {
        draggable: !0,
        dragThreshold: 3
    }),
    e.createMethods.push("_createDrag");
    var r = e.prototype;
    n.extend(r, i.prototype);
    var a = "createTouch"in document
      , h = !1;
    r._createDrag = function() {
        this.on("activate", this.bindDrag),
        this.on("uiChange", this._uiChangeDrag),
        this.on("childUIPointerDown", this._childUIPointerDownDrag),
        this.on("deactivate", this.unbindDrag),
        a && !h && (t.addEventListener("touchmove", function() {}),
        h = !0)
    }
    ,
    r.bindDrag = function() {
        this.options.draggable && !this.isDragBound && (this.element.classList.add("is-draggable"),
        this.handles = [this.viewport],
        this.bindHandles(),
        this.isDragBound = !0)
    }
    ,
    r.unbindDrag = function() {
        this.isDragBound && (this.element.classList.remove("is-draggable"),
        this.unbindHandles(),
        delete this.isDragBound)
    }
    ,
    r._uiChangeDrag = function() {
        delete this.isFreeScrolling
    }
    ,
    r._childUIPointerDownDrag = function(t) {
        t.preventDefault(),
        this.pointerDownFocus(t)
    }
    ;
    var l = {
        TEXTAREA: !0,
        INPUT: !0,
        OPTION: !0
    }
      , c = {
        radio: !0,
        checkbox: !0,
        button: !0,
        submit: !0,
        image: !0,
        file: !0
    };
    r.pointerDown = function(e, i) {
        var n = l[e.target.nodeName] && !c[e.target.type];
        if (n)
            return this.isPointerDown = !1,
            void delete this.pointerIdentifier;
        this._dragPointerDown(e, i);
        var s = document.activeElement;
        s && s.blur && s != this.element && s != document.body && s.blur(),
        this.pointerDownFocus(e),
        this.dragX = this.x,
        this.viewport.classList.add("is-pointer-down"),
        this._bindPostStartEvents(e),
        this.pointerDownScroll = o(),
        t.addEventListener("scroll", this),
        this.dispatchEvent("pointerDown", e, [i])
    }
    ,
    r.pointerDownFocus = function(e) {
        var i = s(e);
        if (this.options.accessibility && !i) {
            var n = t.pageYOffset;
            this.element.focus(),
            t.pageYOffset != n && t.scrollTo(t.pageXOffset, n)
        }
    }
    ;
    var d = {
        touchstart: !0,
        pointerdown: !0
    }
      , u = {
        INPUT: !0,
        SELECT: !0
    };
    return r.canPreventDefaultOnPointerDown = function(t) {
        var e = s(t);
        return !e
    }
    ,
    r.hasDragStarted = function(t) {
        return Math.abs(t.x) > this.options.dragThreshold
    }
    ,
    r.pointerUp = function(t, e) {
        delete this.isTouchScrolling,
        this.viewport.classList.remove("is-pointer-down"),
        this.dispatchEvent("pointerUp", t, [e]),
        this._dragPointerUp(t, e)
    }
    ,
    r.pointerDone = function() {
        t.removeEventListener("scroll", this),
        delete this.pointerDownScroll
    }
    ,
    r.dragStart = function(e, i) {
        this.dragStartPosition = this.x,
        this.startAnimation(),
        t.removeEventListener("scroll", this),
        this.dispatchEvent("dragStart", e, [i])
    }
    ,
    r.pointerMove = function(t, e) {
        var i = this._dragPointerMove(t, e);
        this.dispatchEvent("pointerMove", t, [e, i]),
        this._dragMove(t, e, i)
    }
    ,
    r.dragMove = function(t, e, i) {
        t.preventDefault(),
        this.previousDragX = this.dragX;
        var n = this.options.rightToLeft ? -1 : 1
          , s = this.dragStartPosition + i.x * n;
        if (!this.options.wrapAround && this.slides.length) {
            var o = Math.max(-this.slides[0].target, this.dragStartPosition);
            s = s > o ? .5 * (s + o) : s;
            var r = Math.min(-this.getLastSlide().target, this.dragStartPosition);
            s = s < r ? .5 * (s + r) : s
        }
        this.dragX = s,
        this.dragMoveTime = new Date,
        this.dispatchEvent("dragMove", t, [e, i])
    }
    ,
    r.dragEnd = function(t, e) {
        this.options.freeScroll && (this.isFreeScrolling = !0);
        var i = this.dragEndRestingSelect();
        if (this.options.freeScroll && !this.options.wrapAround) {
            var n = this.getRestingPosition();
            this.isFreeScrolling = -n > this.slides[0].target && -n < this.getLastSlide().target
        } else
            this.options.freeScroll || i != this.selectedIndex || (i += this.dragEndBoostSelect());
        delete this.previousDragX,
        this.isDragSelect = this.options.wrapAround,
        this.select(i),
        delete this.isDragSelect,
        this.dispatchEvent("dragEnd", t, [e])
    }
    ,
    r.dragEndRestingSelect = function() {
        var t = this.getRestingPosition()
          , e = Math.abs(this.getSlideDistance(-t, this.selectedIndex))
          , i = this._getClosestResting(t, e, 1)
          , n = this._getClosestResting(t, e, -1)
          , s = i.distance < n.distance ? i.index : n.index;
        return s
    }
    ,
    r._getClosestResting = function(t, e, i) {
        for (var n = this.selectedIndex, s = 1 / 0, o = this.options.contain && !this.options.wrapAround ? function(t, e) {
            return t <= e
        }
        : function(t, e) {
            return t < e
        }
        ; o(e, s) && (n += i,
        s = e,
        e = this.getSlideDistance(-t, n),
        null !== e); )
            e = Math.abs(e);
        return {
            distance: s,
            index: n - i
        }
    }
    ,
    r.getSlideDistance = function(t, e) {
        var i = this.slides.length
          , s = this.options.wrapAround && i > 1
          , o = s ? n.modulo(e, i) : e
          , r = this.slides[o];
        if (!r)
            return null;
        var a = s ? this.slideableWidth * Math.floor(e / i) : 0;
        return t - (r.target + a)
    }
    ,
    r.dragEndBoostSelect = function() {
        if (void 0 === this.previousDragX || !this.dragMoveTime || new Date - this.dragMoveTime > 100)
            return 0;
        var t = this.getSlideDistance(-this.dragX, this.selectedIndex)
          , e = this.previousDragX - this.dragX;
        return t > 0 && e > 0 ? 1 : t < 0 && e < 0 ? -1 : 0
    }
    ,
    r.staticClick = function(t, e) {
        var i = this.getParentCell(t.target)
          , n = i && i.element
          , s = i && this.cells.indexOf(i);
        this.dispatchEvent("staticClick", t, [e, n, s])
    }
    ,
    r.onscroll = function() {
        var t = o()
          , e = this.pointerDownScroll.x - t.x
          , i = this.pointerDownScroll.y - t.y;
        (Math.abs(e) > 3 || Math.abs(i) > 3) && this._pointerDone()
    }
    ,
    e
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("tap-listener/tap-listener", ["unipointer/unipointer"], function(i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("unipointer")) : t.TapListener = e(t, t.Unipointer)
}(window, function(t, e) {
    function i(t) {
        this.bindTap(t)
    }
    var n = i.prototype = Object.create(e.prototype);
    return n.bindTap = function(t) {
        t && (this.unbindTap(),
        this.tapElement = t,
        this._bindStartEvent(t, !0))
    }
    ,
    n.unbindTap = function() {
        this.tapElement && (this._bindStartEvent(this.tapElement, !0),
        delete this.tapElement)
    }
    ,
    n.pointerUp = function(i, n) {
        if (!this.isIgnoringMouseUp || "mouseup" != i.type) {
            var s = e.getPointerPoint(n)
              , o = this.tapElement.getBoundingClientRect()
              , r = t.pageXOffset
              , a = t.pageYOffset
              , h = s.x >= o.left + r && s.x <= o.right + r && s.y >= o.top + a && s.y <= o.bottom + a;
            if (h && this.emitEvent("tap", [i, n]),
            "mouseup" != i.type) {
                this.isIgnoringMouseUp = !0;
                var l = this;
                setTimeout(function() {
                    delete l.isIgnoringMouseUp
                }, 400)
            }
        }
    }
    ,
    n.destroy = function() {
        this.pointerDone(),
        this.unbindTap()
    }
    ,
    i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("flickity/js/prev-next-button", ["./flickity", "tap-listener/tap-listener", "fizzy-ui-utils/utils"], function(i, n, s) {
        return e(t, i, n, s)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("./flickity"), require("tap-listener"), require("fizzy-ui-utils")) : e(t, t.Flickity, t.TapListener, t.fizzyUIUtils)
}(window, function(t, e, i, n) {
    "use strict";
    function s(t, e) {
        this.direction = t,
        this.parent = e,
        this._create()
    }
    function o(t) {
        return "string" == typeof t ? t : "M " + t.x0 + ",50 L " + t.x1 + "," + (t.y1 + 50) + " L " + t.x2 + "," + (t.y2 + 50) + " L " + t.x3 + ",50  L " + t.x2 + "," + (50 - t.y2) + " L " + t.x1 + "," + (50 - t.y1) + " Z"
    }
    var r = "http://www.w3.org/2000/svg";
    s.prototype = new i,
    s.prototype._create = function() {
        this.isEnabled = !0,
        this.isPrevious = this.direction == -1;
        var t = this.parent.options.rightToLeft ? 1 : -1;
        this.isLeft = this.direction == t;
        var e = this.element = document.createElement("button");
        e.className = "flickity-prev-next-button",
        e.className += this.isPrevious ? " previous" : " next",
        e.setAttribute("type", "button"),
        this.disable(),
        e.setAttribute("aria-label", this.isPrevious ? "previous" : "next");
        var i = this.createSVG();
        e.appendChild(i),
        this.on("tap", this.onTap),
        this.parent.on("select", this.update.bind(this)),
        this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent))
    }
    ,
    s.prototype.activate = function() {
        this.bindTap(this.element),
        this.element.addEventListener("click", this),
        this.parent.element.appendChild(this.element)
    }
    ,
    s.prototype.deactivate = function() {
        this.parent.element.removeChild(this.element),
        i.prototype.destroy.call(this),
        this.element.removeEventListener("click", this)
    }
    ,
    s.prototype.createSVG = function() {
        var t = document.createElementNS(r, "svg");
        t.setAttribute("viewBox", "0 0 100 100");
        var e = document.createElementNS(r, "path")
          , i = o(this.parent.options.arrowShape);
        return e.setAttribute("d", i),
        e.setAttribute("class", "arrow"),
        this.isLeft || e.setAttribute("transform", "translate(100, 100) rotate(180) "),
        t.appendChild(e),
        t
    }
    ,
    s.prototype.onTap = function() {
        if (this.isEnabled) {
            this.parent.uiChange();
            var t = this.isPrevious ? "previous" : "next";
            this.parent[t]()
        }
    }
    ,
    s.prototype.handleEvent = n.handleEvent,
    s.prototype.onclick = function() {
        var t = document.activeElement;
        t && t == this.element && this.onTap()
    }
    ,
    s.prototype.enable = function() {
        this.isEnabled || (this.element.disabled = !1,
        this.isEnabled = !0)
    }
    ,
    s.prototype.disable = function() {
        this.isEnabled && (this.element.disabled = !0,
        this.isEnabled = !1)
    }
    ,
    s.prototype.update = function() {
        var t = this.parent.slides;
        if (this.parent.options.wrapAround && t.length > 1)
            return void this.enable();
        var e = t.length ? t.length - 1 : 0
          , i = this.isPrevious ? 0 : e
          , n = this.parent.selectedIndex == i ? "disable" : "enable";
        this[n]()
    }
    ,
    s.prototype.destroy = function() {
        this.deactivate()
    }
    ,
    n.extend(e.defaults, {
        prevNextButtons: !0,
        arrowShape: {
            x0: 10,
            x1: 60,
            y1: 50,
            x2: 70,
            y2: 40,
            x3: 30
        }
    }),
    e.createMethods.push("_createPrevNextButtons");
    var a = e.prototype;
    return a._createPrevNextButtons = function() {
        this.options.prevNextButtons && (this.prevButton = new s((-1),this),
        this.nextButton = new s(1,this),
        this.on("activate", this.activatePrevNextButtons))
    }
    ,
    a.activatePrevNextButtons = function() {
        this.prevButton.activate(),
        this.nextButton.activate(),
        this.on("deactivate", this.deactivatePrevNextButtons)
    }
    ,
    a.deactivatePrevNextButtons = function() {
        this.prevButton.deactivate(),
        this.nextButton.deactivate(),
        this.off("deactivate", this.deactivatePrevNextButtons)
    }
    ,
    e.PrevNextButton = s,
    e
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("flickity/js/page-dots", ["./flickity", "tap-listener/tap-listener", "fizzy-ui-utils/utils"], function(i, n, s) {
        return e(t, i, n, s)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("./flickity"), require("tap-listener"), require("fizzy-ui-utils")) : e(t, t.Flickity, t.TapListener, t.fizzyUIUtils)
}(window, function(t, e, i, n) {
    function s(t) {
        this.parent = t,
        this._create()
    }
    s.prototype = new i,
    s.prototype._create = function() {
        this.holder = document.createElement("ol"),
        this.holder.className = "flickity-page-dots",
        this.dots = [],
        this.on("tap", this.onTap),
        this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent))
    }
    ,
    s.prototype.activate = function() {
        this.setDots(),
        this.bindTap(this.holder),
        this.parent.element.appendChild(this.holder)
    }
    ,
    s.prototype.deactivate = function() {
        this.parent.element.removeChild(this.holder),
        i.prototype.destroy.call(this)
    }
    ,
    s.prototype.setDots = function() {
        var t = this.parent.slides.length - this.dots.length;
        t > 0 ? this.addDots(t) : t < 0 && this.removeDots(-t)
    }
    ,
    s.prototype.addDots = function(t) {
        for (var e = document.createDocumentFragment(), i = []; t; ) {
            var n = document.createElement("li");
            n.className = "dot",
            e.appendChild(n),
            i.push(n),
            t--
        }
        this.holder.appendChild(e),
        this.dots = this.dots.concat(i)
    }
    ,
    s.prototype.removeDots = function(t) {
        var e = this.dots.splice(this.dots.length - t, t);
        e.forEach(function(t) {
            this.holder.removeChild(t)
        }, this)
    }
    ,
    s.prototype.updateSelected = function() {
        this.selectedDot && (this.selectedDot.className = "dot"),
        this.dots.length && (this.selectedDot = this.dots[this.parent.selectedIndex],
        this.selectedDot.className = "dot is-selected")
    }
    ,
    s.prototype.onTap = function(t) {
        var e = t.target;
        if ("LI" == e.nodeName) {
            this.parent.uiChange();
            var i = this.dots.indexOf(e);
            this.parent.select(i)
        }
    }
    ,
    s.prototype.destroy = function() {
        this.deactivate()
    }
    ,
    e.PageDots = s,
    n.extend(e.defaults, {
        pageDots: !0
    }),
    e.createMethods.push("_createPageDots");
    var o = e.prototype;
    return o._createPageDots = function() {
        this.options.pageDots && (this.pageDots = new s(this),
        this.on("activate", this.activatePageDots),
        this.on("select", this.updateSelectedPageDots),
        this.on("cellChange", this.updatePageDots),
        this.on("resize", this.updatePageDots),
        this.on("deactivate", this.deactivatePageDots))
    }
    ,
    o.activatePageDots = function() {
        this.pageDots.activate()
    }
    ,
    o.updateSelectedPageDots = function() {
        this.pageDots.updateSelected()
    }
    ,
    o.updatePageDots = function() {
        this.pageDots.setDots()
    }
    ,
    o.deactivatePageDots = function() {
        this.pageDots.deactivate()
    }
    ,
    e.PageDots = s,
    e
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("flickity/js/player", ["ev-emitter/ev-emitter", "fizzy-ui-utils/utils", "./flickity"], function(t, i, n) {
        return e(t, i, n)
    }) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("fizzy-ui-utils"), require("./flickity")) : e(t.EvEmitter, t.fizzyUIUtils, t.Flickity)
}(window, function(t, e, i) {
    function n(t) {
        this.parent = t,
        this.state = "stopped",
        o && (this.onVisibilityChange = function() {
            this.visibilityChange()
        }
        .bind(this),
        this.onVisibilityPlay = function() {
            this.visibilityPlay()
        }
        .bind(this))
    }
    var s, o;
    "hidden"in document ? (s = "hidden",
    o = "visibilitychange") : "webkitHidden"in document && (s = "webkitHidden",
    o = "webkitvisibilitychange"),
    n.prototype = Object.create(t.prototype),
    n.prototype.play = function() {
        if ("playing" != this.state) {
            var t = document[s];
            if (o && t)
                return void document.addEventListener(o, this.onVisibilityPlay);
            this.state = "playing",
            o && document.addEventListener(o, this.onVisibilityChange),
            this.tick()
        }
    }
    ,
    n.prototype.tick = function() {
        if ("playing" == this.state) {
            var t = this.parent.options.autoPlay;
            t = "number" == typeof t ? t : 3e3;
            var e = this;
            this.clear(),
            this.timeout = setTimeout(function() {
                e.parent.next(!0),
                e.tick()
            }, t)
        }
    }
    ,
    n.prototype.stop = function() {
        this.state = "stopped",
        this.clear(),
        o && document.removeEventListener(o, this.onVisibilityChange)
    }
    ,
    n.prototype.clear = function() {
        clearTimeout(this.timeout)
    }
    ,
    n.prototype.pause = function() {
        "playing" == this.state && (this.state = "paused",
        this.clear())
    }
    ,
    n.prototype.unpause = function() {
        "paused" == this.state && this.play()
    }
    ,
    n.prototype.visibilityChange = function() {
        var t = document[s];
        this[t ? "pause" : "unpause"]()
    }
    ,
    n.prototype.visibilityPlay = function() {
        this.play(),
        document.removeEventListener(o, this.onVisibilityPlay)
    }
    ,
    e.extend(i.defaults, {
        pauseAutoPlayOnHover: !0
    }),
    i.createMethods.push("_createPlayer");
    var r = i.prototype;
    return r._createPlayer = function() {
        this.player = new n(this),
        this.on("activate", this.activatePlayer),
        this.on("uiChange", this.stopPlayer),
        this.on("pointerDown", this.stopPlayer),
        this.on("deactivate", this.deactivatePlayer)
    }
    ,
    r.activatePlayer = function() {
        this.options.autoPlay && (this.player.play(),
        this.element.addEventListener("mouseenter", this))
    }
    ,
    r.playPlayer = function() {
        this.player.play()
    }
    ,
    r.stopPlayer = function() {
        this.player.stop()
    }
    ,
    r.pausePlayer = function() {
        this.player.pause()
    }
    ,
    r.unpausePlayer = function() {
        this.player.unpause()
    }
    ,
    r.deactivatePlayer = function() {
        this.player.stop(),
        this.element.removeEventListener("mouseenter", this)
    }
    ,
    r.onmouseenter = function() {
        this.options.pauseAutoPlayOnHover && (this.player.pause(),
        this.element.addEventListener("mouseleave", this))
    }
    ,
    r.onmouseleave = function() {
        this.player.unpause(),
        this.element.removeEventListener("mouseleave", this)
    }
    ,
    i.Player = n,
    i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("flickity/js/add-remove-cell", ["./flickity", "fizzy-ui-utils/utils"], function(i, n) {
        return e(t, i, n)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("./flickity"), require("fizzy-ui-utils")) : e(t, t.Flickity, t.fizzyUIUtils)
}(window, function(t, e, i) {
    function n(t) {
        var e = document.createDocumentFragment();
        return t.forEach(function(t) {
            e.appendChild(t.element)
        }),
        e
    }
    var s = e.prototype;
    return s.insert = function(t, e) {
        var i = this._makeCells(t);
        if (i && i.length) {
            var s = this.cells.length;
            e = void 0 === e ? s : e;
            var o = n(i)
              , r = e == s;
            if (r)
                this.slider.appendChild(o);
            else {
                var a = this.cells[e].element;
                this.slider.insertBefore(o, a)
            }
            if (0 === e)
                this.cells = i.concat(this.cells);
            else if (r)
                this.cells = this.cells.concat(i);
            else {
                var h = this.cells.splice(e, s - e);
                this.cells = this.cells.concat(i).concat(h)
            }
            this._sizeCells(i);
            var l = e > this.selectedIndex ? 0 : i.length;
            this._cellAddedRemoved(e, l)
        }
    }
    ,
    s.append = function(t) {
        this.insert(t, this.cells.length)
    }
    ,
    s.prepend = function(t) {
        this.insert(t, 0)
    }
    ,
    s.remove = function(t) {
        var e, n, s = this.getCells(t), o = 0, r = s.length;
        for (e = 0; e < r; e++) {
            n = s[e];
            var a = this.cells.indexOf(n) < this.selectedIndex;
            o -= a ? 1 : 0
        }
        for (e = 0; e < r; e++)
            n = s[e],
            n.remove(),
            i.removeFrom(this.cells, n);
        s.length && this._cellAddedRemoved(0, o)
    }
    ,
    s._cellAddedRemoved = function(t, e) {
        e = e || 0,
        this.selectedIndex += e,
        this.selectedIndex = Math.max(0, Math.min(this.slides.length - 1, this.selectedIndex)),
        this.cellChange(t, !0),
        this.emitEvent("cellAddedRemoved", [t, e])
    }
    ,
    s.cellSizeChange = function(t) {
        var e = this.getCell(t);
        if (e) {
            e.getSize();
            var i = this.cells.indexOf(e);
            this.cellChange(i)
        }
    }
    ,
    s.cellChange = function(t, e) {
        var i = this.slideableWidth;
        if (this._positionCells(t),
        this._getWrapShiftCells(),
        this.setGallerySize(),
        this.emitEvent("cellChange", [t]),
        this.options.freeScroll) {
            var n = i - this.slideableWidth;
            this.x += n * this.cellAlign,
            this.positionSlider()
        } else
            e && this.positionSliderAtSelected(),
            this.select(this.selectedIndex)
    }
    ,
    e
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("flickity/js/lazyload", ["./flickity", "fizzy-ui-utils/utils"], function(i, n) {
        return e(t, i, n)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("./flickity"), require("fizzy-ui-utils")) : e(t, t.Flickity, t.fizzyUIUtils)
}(window, function(t, e, i) {
    "use strict";
    function n(t) {
        if ("IMG" == t.nodeName && t.getAttribute("data-flickity-lazyload"))
            return [t];
        var e = t.querySelectorAll("img[data-flickity-lazyload]");
        return i.makeArray(e)
    }
    function s(t, e) {
        this.img = t,
        this.flickity = e,
        this.load()
    }
    e.createMethods.push("_createLazyload");
    var o = e.prototype;
    return o._createLazyload = function() {
        this.on("select", this.lazyLoad)
    }
    ,
    o.lazyLoad = function() {
        var t = this.options.lazyLoad;
        if (t) {
            var e = "number" == typeof t ? t : 0
              , i = this.getAdjacentCellElements(e)
              , o = [];
            i.forEach(function(t) {
                var e = n(t);
                o = o.concat(e)
            }),
            o.forEach(function(t) {
                new s(t,this)
            }, this)
        }
    }
    ,
    s.prototype.handleEvent = i.handleEvent,
    s.prototype.load = function() {
        this.img.addEventListener("load", this),
        this.img.addEventListener("error", this),
        this.img.src = this.img.getAttribute("data-flickity-lazyload"),
        this.img.removeAttribute("data-flickity-lazyload")
    }
    ,
    s.prototype.onload = function(t) {
        this.complete(t, "flickity-lazyloaded")
    }
    ,
    s.prototype.onerror = function(t) {
        this.complete(t, "flickity-lazyerror")
    }
    ,
    s.prototype.complete = function(t, e) {
        this.img.removeEventListener("load", this),
        this.img.removeEventListener("error", this);
        var i = this.flickity.getParentCell(this.img)
          , n = i && i.element;
        this.flickity.cellSizeChange(n),
        this.img.classList.add(e),
        this.flickity.dispatchEvent("lazyLoad", t, n)
    }
    ,
    e.LazyLoader = s,
    e
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("flickity/js/index", ["./flickity", "./drag", "./prev-next-button", "./page-dots", "./player", "./add-remove-cell", "./lazyload"], e) : "object" == typeof module && module.exports && (module.exports = e(require("./flickity"), require("./drag"), require("./prev-next-button"), require("./page-dots"), require("./player"), require("./add-remove-cell"), require("./lazyload")))
}(window, function(t) {
    return t
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("flickity-as-nav-for/as-nav-for", ["flickity/js/index", "fizzy-ui-utils/utils"], e) : "object" == typeof module && module.exports ? module.exports = e(require("flickity"), require("fizzy-ui-utils")) : t.Flickity = e(t.Flickity, t.fizzyUIUtils)
}(window, function(t, e) {
    function i(t, e, i) {
        return (e - t) * i + t
    }
    t.createMethods.push("_createAsNavFor");
    var n = t.prototype;
    return n._createAsNavFor = function() {
        this.on("activate", this.activateAsNavFor),
        this.on("deactivate", this.deactivateAsNavFor),
        this.on("destroy", this.destroyAsNavFor);
        var t = this.options.asNavFor;
        if (t) {
            var e = this;
            setTimeout(function() {
                e.setNavCompanion(t)
            })
        }
    }
    ,
    n.setNavCompanion = function(i) {
        i = e.getQueryElement(i);
        var n = t.data(i);
        if (n && n != this) {
            this.navCompanion = n;
            var s = this;
            this.onNavCompanionSelect = function() {
                s.navCompanionSelect()
            }
            ,
            n.on("select", this.onNavCompanionSelect),
            this.on("staticClick", this.onNavStaticClick),
            this.navCompanionSelect(!0)
        }
    }
    ,
    n.navCompanionSelect = function(t) {
        if (this.navCompanion) {
            var e = this.navCompanion.selectedCells[0]
              , n = this.navCompanion.cells.indexOf(e)
              , s = n + this.navCompanion.selectedCells.length - 1
              , o = Math.floor(i(n, s, this.navCompanion.cellAlign));
            if (this.selectCell(o, !1, t),
            this.removeNavSelectedElements(),
            !(o >= this.cells.length)) {
                var r = this.cells.slice(n, s + 1);
                this.navSelectedElements = r.map(function(t) {
                    return t.element
                }),
                this.changeNavSelectedClass("add")
            }
        }
    }
    ,
    n.changeNavSelectedClass = function(t) {
        this.navSelectedElements.forEach(function(e) {
            e.classList[t]("is-nav-selected")
        })
    }
    ,
    n.activateAsNavFor = function() {
        this.navCompanionSelect(!0)
    }
    ,
    n.removeNavSelectedElements = function() {
        this.navSelectedElements && (this.changeNavSelectedClass("remove"),
        delete this.navSelectedElements)
    }
    ,
    n.onNavStaticClick = function(t, e, i, n) {
        "number" == typeof n && this.navCompanion.selectCell(n)
    }
    ,
    n.deactivateAsNavFor = function() {
        this.removeNavSelectedElements()
    }
    ,
    n.destroyAsNavFor = function() {
        this.navCompanion && (this.navCompanion.off("select", this.onNavCompanionSelect),
        this.off("staticClick", this.onNavStaticClick),
        delete this.navCompanion)
    }
    ,
    t
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("imagesloaded/imagesloaded", ["ev-emitter/ev-emitter"], function(i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter")) : t.imagesLoaded = e(t, t.EvEmitter)
}("undefined" != typeof window ? window : this, function(t, e) {
    function i(t, e) {
        for (var i in e)
            t[i] = e[i];
        return t
    }
    function n(t) {
        var e = [];
        if (Array.isArray(t))
            e = t;
        else if ("number" == typeof t.length)
            for (var i = 0; i < t.length; i++)
                e.push(t[i]);
        else
            e.push(t);
        return e
    }
    function s(t, e, o) {
        return this instanceof s ? ("string" == typeof t && (t = document.querySelectorAll(t)),
        this.elements = n(t),
        this.options = i({}, this.options),
        "function" == typeof e ? o = e : i(this.options, e),
        o && this.on("always", o),
        this.getImages(),
        a && (this.jqDeferred = new a.Deferred),
        void setTimeout(function() {
            this.check()
        }
        .bind(this))) : new s(t,e,o)
    }
    function o(t) {
        this.img = t
    }
    function r(t, e) {
        this.url = t,
        this.element = e,
        this.img = new Image
    }
    var a = t.jQuery
      , h = t.console;
    s.prototype = Object.create(e.prototype),
    s.prototype.options = {},
    s.prototype.getImages = function() {
        this.images = [],
        this.elements.forEach(this.addElementImages, this)
    }
    ,
    s.prototype.addElementImages = function(t) {
        "IMG" == t.nodeName && this.addImage(t),
        this.options.background === !0 && this.addElementBackgroundImages(t);
        var e = t.nodeType;
        if (e && l[e]) {
            for (var i = t.querySelectorAll("img"), n = 0; n < i.length; n++) {
                var s = i[n];
                this.addImage(s)
            }
            if ("string" == typeof this.options.background) {
                var o = t.querySelectorAll(this.options.background);
                for (n = 0; n < o.length; n++) {
                    var r = o[n];
                    this.addElementBackgroundImages(r)
                }
            }
        }
    }
    ;
    var l = {
        1: !0,
        9: !0,
        11: !0
    };
    return s.prototype.addElementBackgroundImages = function(t) {
        var e = getComputedStyle(t);
        if (e)
            for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(e.backgroundImage); null !== n; ) {
                var s = n && n[2];
                s && this.addBackground(s, t),
                n = i.exec(e.backgroundImage)
            }
    }
    ,
    s.prototype.addImage = function(t) {
        var e = new o(t);
        this.images.push(e)
    }
    ,
    s.prototype.addBackground = function(t, e) {
        var i = new r(t,e);
        this.images.push(i)
    }
    ,
    s.prototype.check = function() {
        function t(t, i, n) {
            setTimeout(function() {
                e.progress(t, i, n)
            })
        }
        var e = this;
        return this.progressedCount = 0,
        this.hasAnyBroken = !1,
        this.images.length ? void this.images.forEach(function(e) {
            e.once("progress", t),
            e.check()
        }) : void this.complete()
    }
    ,
    s.prototype.progress = function(t, e, i) {
        this.progressedCount++,
        this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded,
        this.emitEvent("progress", [this, t, e]),
        this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t),
        this.progressedCount == this.images.length && this.complete(),
        this.options.debug && h && h.log("progress: " + i, t, e)
    }
    ,
    s.prototype.complete = function() {
        var t = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0,
        this.emitEvent(t, [this]),
        this.emitEvent("always", [this]),
        this.jqDeferred) {
            var e = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[e](this)
        }
    }
    ,
    o.prototype = Object.create(e.prototype),
    o.prototype.check = function() {
        var t = this.getIsImageComplete();
        return t ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image,
        this.proxyImage.addEventListener("load", this),
        this.proxyImage.addEventListener("error", this),
        this.img.addEventListener("load", this),
        this.img.addEventListener("error", this),
        void (this.proxyImage.src = this.img.src))
    }
    ,
    o.prototype.getIsImageComplete = function() {
        return this.img.complete && void 0 !== this.img.naturalWidth
    }
    ,
    o.prototype.confirm = function(t, e) {
        this.isLoaded = t,
        this.emitEvent("progress", [this, this.img, e])
    }
    ,
    o.prototype.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }
    ,
    o.prototype.onload = function() {
        this.confirm(!0, "onload"),
        this.unbindEvents()
    }
    ,
    o.prototype.onerror = function() {
        this.confirm(!1, "onerror"),
        this.unbindEvents()
    }
    ,
    o.prototype.unbindEvents = function() {
        this.proxyImage.removeEventListener("load", this),
        this.proxyImage.removeEventListener("error", this),
        this.img.removeEventListener("load", this),
        this.img.removeEventListener("error", this)
    }
    ,
    r.prototype = Object.create(o.prototype),
    r.prototype.check = function() {
        this.img.addEventListener("load", this),
        this.img.addEventListener("error", this),
        this.img.src = this.url;
        var t = this.getIsImageComplete();
        t && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"),
        this.unbindEvents())
    }
    ,
    r.prototype.unbindEvents = function() {
        this.img.removeEventListener("load", this),
        this.img.removeEventListener("error", this)
    }
    ,
    r.prototype.confirm = function(t, e) {
        this.isLoaded = t,
        this.emitEvent("progress", [this, this.element, e])
    }
    ,
    s.makeJQueryPlugin = function(e) {
        e = e || t.jQuery,
        e && (a = e,
        a.fn.imagesLoaded = function(t, e) {
            var i = new s(this,t,e);
            return i.jqDeferred.promise(a(this))
        }
        )
    }
    ,
    s.makeJQueryPlugin(),
    s
}),
function(t, e) {
    "function" == typeof define && define.amd ? define(["flickity/js/index", "imagesloaded/imagesloaded"], function(i, n) {
        return e(t, i, n)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("flickity"), require("imagesloaded")) : t.Flickity = e(t, t.Flickity, t.imagesLoaded)
}(window, function(t, e, i) {
    "use strict";
    e.createMethods.push("_createImagesLoaded");
    var n = e.prototype;
    return n._createImagesLoaded = function() {
        this.on("activate", this.imagesLoaded)
    }
    ,
    n.imagesLoaded = function() {
        function t(t, i) {
            var n = e.getParentCell(i.img);
            e.cellSizeChange(n && n.element),
            e.options.freeScroll || e.positionSliderAtSelected()
        }
        if (this.options.imagesLoaded) {
            var e = this;
            i(this.slider).on("progress", t)
        }
    }
    ,
    e
});
!function(e) {
    var t = {
        sectionContainer: "section",
        easing: "ease",
        animationTime: 1e3,
        pagination: true,
        updateURL: false,
        keyboard: true,
        beforeMove: null,
        afterMove: null,
        loop: true,
        responsiveFallback: false,
        direction: "vertical"
    };
    e.fn.swipeEvents = function() {
        return this.each(function() {
            function i(e) {
                var i = e.originalEvent.touches;
                if (i && i.length) {
                    t = i[0].pageX;
                    n = i[0].pageY;
                    r.bind("touchmove", s)
                }
            }
            function s(e) {
                var i = e.originalEvent.touches;
                if (i && i.length) {
                    var o = t - i[0].pageX;
                    var u = n - i[0].pageY;
                    if (o >= 50) {
                        r.trigger("swipeLeft")
                    }
                    if (o <= -50) {
                        r.trigger("swipeRight")
                    }
                    if (u >= 50) {
                        r.trigger("swipeUp")
                    }
                    if (u <= -50) {
                        r.trigger("swipeDown")
                    }
                    if (Math.abs(o) >= 50 || Math.abs(u) >= 50) {
                        r.unbind("touchmove", s)
                    }
                }
            }
            var t, n, r = e(this);
            r.bind("touchstart", i)
        })
    }
    ;
    e.fn.onepage_scroll = function(n) {
        function o() {
            var t = false;
            var n = typeof r.responsiveFallback;
            if (n == "number") {
                t = e(window).width() < r.responsiveFallback
            }
            if (n == "boolean") {
                t = r.responsiveFallback
            }
            if (n == "function") {
                valFunction = r.responsiveFallback();
                t = valFunction;
                typeOFv = typeof t;
                if (typeOFv == "number") {
                    t = e(window).width() < valFunction
                }
            }
            if (t) {
                e("body").addClass("disabled-onepage-scroll");
                e(document).unbind("mousewheel DOMMouseScroll MozMousePixelScroll");
                i.swipeEvents().unbind("swipeDown swipeUp")
            } else {
                if (e("body").hasClass("disabled-onepage-scroll")) {
                    e("body").removeClass("disabled-onepage-scroll");
                    e("html, body, .wrapper").animate({
                        scrollTop: 0
                    }, "fast")
                }
                i.swipeEvents().bind("swipeDown", function(t) {
                    if (!e("body").hasClass("disabled-onepage-scroll"))
                        t.preventDefault();
                    i.moveUp()
                }).bind("swipeUp", function(t) {
                    if (!e("body").hasClass("disabled-onepage-scroll"))
                        t.preventDefault();
                    i.moveDown()
                });
                e(document).bind("mousewheel DOMMouseScroll MozMousePixelScroll", function(e) {
                    e.preventDefault();
                    var t = e.originalEvent.wheelDelta || -e.originalEvent.detail;
                    u(e, t)
                })
            }
        }
        function u(e, t) {
            deltaOfInterest = t;
            var n = (new Date).getTime();
            if (n - lastAnimation < quietPeriod + r.animationTime) {
                e.preventDefault();
                return
            }
            if (deltaOfInterest < 0) {
                i.moveDown()
            } else {
                i.moveUp()
            }
            lastAnimation = n
        }
        var r = e.extend({}, t, n)
          , i = e(this)
          , s = e(r.sectionContainer);
        total = s.length,
        status = "off",
        topPos = 0,
        leftPos = 0,
        lastAnimation = 0,
        quietPeriod = 500,
        paginationList = "";
        e.fn.transformPage = function(t, n, r) {
            if (typeof t.beforeMove == "function")
                t.beforeMove(r);
            if (e("html").hasClass("ie8")) {
                if (t.direction == "horizontal") {
                    var s = i.width() / 100 * n;
                    e(this).animate({
                        left: s + "px"
                    }, t.animationTime)
                } else {
                    var s = i.height() / 100 * n;
                    e(this).animate({
                        top: s + "px"
                    }, t.animationTime)
                }
            } else {
                e(this).css({
                    "-webkit-transform": t.direction == "horizontal" ? "translate3d(" + n + "%, 0, 0)" : "translate3d(0, " + n + "%, 0)",
                    "-webkit-transition": "all " + t.animationTime + "ms " + t.easing,
                    "-moz-transform": t.direction == "horizontal" ? "translate3d(" + n + "%, 0, 0)" : "translate3d(0, " + n + "%, 0)",
                    "-moz-transition": "all " + t.animationTime + "ms " + t.easing,
                    "-ms-transform": t.direction == "horizontal" ? "translate3d(" + n + "%, 0, 0)" : "translate3d(0, " + n + "%, 0)",
                    "-ms-transition": "all " + t.animationTime + "ms " + t.easing,
                    transform: t.direction == "horizontal" ? "translate3d(" + n + "%, 0, 0)" : "translate3d(0, " + n + "%, 0)",
                    transition: "all " + t.animationTime + "ms " + t.easing
                })
            }
            e(this).one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function(e) {
                if (typeof t.afterMove == "function")
                    t.afterMove(r)
            })
        }
        ;
        e.fn.moveDown = function() {
            var t = e(this);
            index = e(r.sectionContainer + ".active").data("index");
            current = e(r.sectionContainer + "[data-index='" + index + "']");
            next = e(r.sectionContainer + "[data-index='" + (index + 1) + "']");
            if (next.length < 1) {
                if (r.loop == true) {
                    pos = 0;
                    next = e(r.sectionContainer + "[data-index='1']")
                } else {
                    return
                }
            } else {
                pos = index * 100 * -1
            }
            if (typeof r.beforeMove == "function")
                r.beforeMove(next.data("index"));
            current.removeClass("active");
            next.addClass("active");
            if (r.pagination == true) {
                e(".onepage-pagination li a" + "[data-index='" + index + "']").removeClass("active");
                e(".onepage-pagination li a" + "[data-index='" + next.data("index") + "']").addClass("active")
            }
            e("body")[0].className = e("body")[0].className.replace(/\bviewing-page-\d.*?\b/g, "");
            e("body").addClass("viewing-page-" + next.data("index"));
            if (history.replaceState && r.updateURL == true) {
                var n = window.location.href.substr(0, window.location.href.indexOf("#")) + "#" + (index + 1);
                history.pushState({}, document.title, n)
            }
            t.transformPage(r, pos, next.data("index"))
        }
        ;
        e.fn.moveUp = function() {
            var t = e(this);
            index = e(r.sectionContainer + ".active").data("index");
            current = e(r.sectionContainer + "[data-index='" + index + "']");
            next = e(r.sectionContainer + "[data-index='" + (index - 1) + "']");
            if (next.length < 1) {
                if (r.loop == true) {
                    pos = (total - 1) * 100 * -1;
                    next = e(r.sectionContainer + "[data-index='" + total + "']")
                } else {
                    return
                }
            } else {
                pos = (next.data("index") - 1) * 100 * -1
            }
            if (typeof r.beforeMove == "function")
                r.beforeMove(next.data("index"));
            current.removeClass("active");
            next.addClass("active");
            if (r.pagination == true) {
                e(".onepage-pagination li a" + "[data-index='" + index + "']").removeClass("active");
                e(".onepage-pagination li a" + "[data-index='" + next.data("index") + "']").addClass("active")
            }
            e("body")[0].className = e("body")[0].className.replace(/\bviewing-page-\d.*?\b/g, "");
            e("body").addClass("viewing-page-" + next.data("index"));
            if (history.replaceState && r.updateURL == true) {
                var n = window.location.href.substr(0, window.location.href.indexOf("#")) + "#" + (index - 1);
                history.pushState({}, document.title, n)
            }
            t.transformPage(r, pos, next.data("index"))
        }
        ;
        e.fn.moveTo = function(t) {
            current = e(r.sectionContainer + ".active");
            next = e(r.sectionContainer + "[data-index='" + t + "']");
            if (next.length > 0) {
                if (typeof r.beforeMove == "function")
                    r.beforeMove(next.data("index"));
                current.removeClass("active");
                next.addClass("active");
                e(".onepage-pagination li a" + ".active").removeClass("active");
                e(".onepage-pagination li a" + "[data-index='" + t + "']").addClass("active");
                e("body")[0].className = e("body")[0].className.replace(/\bviewing-page-\d.*?\b/g, "");
                e("body").addClass("viewing-page-" + next.data("index"));
                pos = (t - 1) * 100 * -1;
                if (history.replaceState && r.updateURL == true) {
                    var n = window.location.href.substr(0, window.location.href.indexOf("#")) + "#" + (t - 1);
                    history.pushState({}, document.title, n)
                }
                i.transformPage(r, pos, t)
            }
        }
        ;
        i.addClass("onepage-wrapper").css("position", "relative");
        e.each(s, function(t) {
            e(this).css({
                position: "absolute",
                top: topPos + "%"
            }).addClass("section").attr("data-index", t + 1);
            e(this).css({
                position: "absolute",
                left: r.direction == "horizontal" ? leftPos + "%" : 0,
                top: r.direction == "vertical" || r.direction != "horizontal" ? topPos + "%" : 0
            });
            if (r.direction == "horizontal")
                leftPos = leftPos + 100;
            else
                topPos = topPos + 100;
            if (r.pagination == true) {
                paginationList += "<li><a data-index='" + (t + 1) + "' href='#" + (t + 1) + "'></a></li>"
            }
        });
        i.swipeEvents().bind("swipeDown", function(t) {
            if (!e("body").hasClass("disabled-onepage-scroll"))
                t.preventDefault();
            i.moveUp()
        }).bind("swipeUp", function(t) {
            if (!e("body").hasClass("disabled-onepage-scroll"))
                t.preventDefault();
            i.moveDown()
        });
        if (r.pagination == true) {
            if (e("ul.onepage-pagination").length < 1)
                e("<ul class='onepage-pagination'></ul>").prependTo("body");
            if (r.direction == "horizontal") {
                posLeft = i.find(".onepage-pagination").width() / 2 * -1;
                i.find(".onepage-pagination").css("margin-left", posLeft)
            } else {
                posTop = i.find(".onepage-pagination").height() / 2 * -1;
                i.find(".onepage-pagination").css("margin-top", posTop)
            }
            e("ul.onepage-pagination").html(paginationList)
        }
        if (window.location.hash != "" && window.location.hash != "#1") {
            init_index = window.location.hash.replace("#", "");
            if (parseInt(init_index) <= total && parseInt(init_index) > 0) {
                e(r.sectionContainer + "[data-index='" + init_index + "']").addClass("active");
                e("body").addClass("viewing-page-" + init_index);
                if (r.pagination == true)
                    e(".onepage-pagination li a" + "[data-index='" + init_index + "']").addClass("active");
                next = e(r.sectionContainer + "[data-index='" + init_index + "']");
                if (next) {
                    next.addClass("active");
                    if (r.pagination == true)
                        e(".onepage-pagination li a" + "[data-index='" + init_index + "']").addClass("active");
                    e("body")[0].className = e("body")[0].className.replace(/\bviewing-page-\d.*?\b/g, "");
                    e("body").addClass("viewing-page-" + next.data("index"));
                    if (history.replaceState && r.updateURL == true) {
                        var a = window.location.href.substr(0, window.location.href.indexOf("#")) + "#" + init_index;
                        history.pushState({}, document.title, a)
                    }
                }
                pos = (init_index - 1) * 100 * -1;
                i.transformPage(r, pos, init_index)
            } else {
                e(r.sectionContainer + "[data-index='1']").addClass("active");
                e("body").addClass("viewing-page-1");
                if (r.pagination == true)
                    e(".onepage-pagination li a" + "[data-index='1']").addClass("active")
            }
        } else {
            e(r.sectionContainer + "[data-index='1']").addClass("active");
            e("body").addClass("viewing-page-1");
            if (r.pagination == true)
                e(".onepage-pagination li a" + "[data-index='1']").addClass("active")
        }
        if (r.pagination == true) {
            e(".onepage-pagination li a").click(function() {
                var t = e(this).data("index");
                i.moveTo(t)
            })
        }
        e(document).bind("mousewheel DOMMouseScroll MozMousePixelScroll", function(t) {
            t.preventDefault();
            var n = t.originalEvent.wheelDelta || -t.originalEvent.detail;
            if (!e("body").hasClass("disabled-onepage-scroll"))
                u(t, n)
        });
        if (r.responsiveFallback != false) {
            e(window).resize(function() {
                o()
            });
            o()
        }
        if (r.keyboard == true) {
            e(document).keydown(function(t) {
                var n = t.target.tagName.toLowerCase();
                if (!e("body").hasClass("disabled-onepage-scroll")) {
                    switch (t.which) {
                    case 38:
                        if (n != "input" && n != "textarea")
                            i.moveUp();
                        break;
                    case 40:
                        if (n != "input" && n != "textarea")
                            i.moveDown();
                        break;
                    case 32:
                        if (n != "input" && n != "textarea")
                            i.moveDown();
                        break;
                    case 33:
                        if (n != "input" && n != "textarea")
                            i.moveUp();
                        break;
                    case 34:
                        if (n != "input" && n != "textarea")
                            i.moveDown();
                        break;
                    case 36:
                        i.moveTo(1);
                        break;
                    case 35:
                        i.moveTo(total);
                        break;
                    default:
                        return
                    }
                }
            })
        }
        return false
    }
}(window.jQuery)
