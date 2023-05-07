/*!jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license*/ ! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(C, e) {
    "use strict";
    var t = [],
        r = Object.getPrototypeOf,
        s = t.slice,
        g = t.flat ? function(e) {
            return t.flat.call(e)
        } : function(e) {
            return t.concat.apply([], e)
        },
        u = t.push,
        i = t.indexOf,
        n = {},
        o = n.toString,
        v = n.hasOwnProperty,
        a = v.toString,
        l = a.call(Object),
        y = {},
        m = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType
        },
        x = function(e) {
            return null != e && e === e.window
        },
        E = C.document,
        c = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };

    function b(e, t, n) {
        var r, i, o = (n = n || E).createElement("script");
        if (o.text = e, t)
            for (r in c)(i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
    }

    function w(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
    }
    var f = "3.5.1",
        S = function(e, t) {
            return new S.fn.init(e, t)
        };

    function p(e) {
        var t = !!e && "length" in e && e.length,
            n = w(e);
        return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    S.fn = S.prototype = {
        jquery: f,
        constructor: S,
        length: 0,
        toArray: function() {
            return s.call(this)
        },
        get: function(e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = S.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return S.each(this, e)
        },
        map: function(n) {
            return this.pushStack(S.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(s.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(S.grep(this, function(e, t) {
                return (t + 1) % 2
            }))
        },
        odd: function() {
            return this.pushStack(S.grep(this, function(e, t) {
                return t % 2
            }))
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: u,
        sort: t.sort,
        splice: t.splice
    }, S.extend = S.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (S.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || S.isPlainObject(n) ? n : {}, i = !1, a[t] = S.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, S.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof(n = v.call(t, "constructor") && t.constructor) && a.call(n) === l)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function(e, t, n) {
            b(e, {
                nonce: t && t.nonce
            }, n)
        },
        each: function(e, t) {
            var n, r = 0;
            if (p(e)) {
                for (n = e.length; r < n; r++)
                    if (!1 === t.call(e[r], r, e[r])) break
            } else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break;
            return e
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (p(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : i.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, i, o = 0,
                a = [];
            if (p(e))
                for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
            else
                for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
            return g(a)
        },
        guid: 1,
        support: y
    }), "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var d = function(n) {
        var e, d, b, o, i, h, f, g, w, u, l, T, C, a, E, v, s, c, y, S = "sizzle" + 1 * new Date,
            p = n.document,
            k = 0,
            r = 0,
            m = ue(),
            x = ue(),
            A = ue(),
            N = ue(),
            D = function(e, t) {
                return e === t && (l = !0), 0
            },
            j = {}.hasOwnProperty,
            t = [],
            q = t.pop,
            L = t.push,
            H = t.push,
            O = t.slice,
            P = function(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
            F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
            B = new RegExp(M + "+", "g"),
            $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            _ = new RegExp("^" + M + "*," + M + "*"),
            z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            U = new RegExp(M + "|>"),
            X = new RegExp(F),
            V = new RegExp("^" + I + "$"),
            G = {
                ID: new RegExp("^#(" + I + ")"),
                CLASS: new RegExp("^\\.(" + I + ")"),
                TAG: new RegExp("^(" + I + "|[*])"),
                ATTR: new RegExp("^" + W),
                PSEUDO: new RegExp("^" + F),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + R + ")$", "i"),
                needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
            },
            Y = /HTML$/i,
            Q = /^(?:input|select|textarea|button)$/i,
            J = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
            ne = function(e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
            },
            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ie = function(e, t) {
                return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            oe = function() {
                T()
            },
            ae = be(function(e) {
                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            H.apply(t = O.call(p.childNodes), p.childNodes), t[p.childNodes.length].nodeType
        } catch (e) {
            H = {
                apply: t.length ? function(e, t) {
                    L.apply(e, O.call(t))
                } : function(e, t) {
                    var n = e.length,
                        r = 0;
                    while (e[n++] = t[r++]);
                    e.length = n - 1
                }
            }
        }

        function se(t, e, n, r) {
            var i, o, a, s, u, l, c, f = e && e.ownerDocument,
                p = e ? e.nodeType : 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;
            if (!r && (T(e), e = e || C, E)) {
                if (11 !== p && (u = Z.exec(t)))
                    if (i = u[1]) {
                        if (9 === p) {
                            if (!(a = e.getElementById(i))) return n;
                            if (a.id === i) return n.push(a), n
                        } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n
                    } else {
                        if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
                        if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n
                    }
                if (d.qsa && !N[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
                    if (c = t, f = e, 1 === p && (U.test(t) || z.test(t))) {
                        (f = ee.test(t) && ye(e.parentNode) || e) === e && d.scope || ((s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = S)), o = (l = h(t)).length;
                        while (o--) l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
                        c = l.join(",")
                    }
                    try {
                        return H.apply(n, f.querySelectorAll(c)), n
                    } catch (e) {
                        N(t, !0)
                    } finally {
                        s === S && e.removeAttribute("id")
                    }
                }
            }
            return g(t.replace($, "$1"), e, n, r)
        }

        function ue() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n
            }
        }

        function le(e) {
            return e[S] = !0, e
        }

        function ce(e) {
            var t = C.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function fe(e, t) {
            var n = e.split("|"),
                r = n.length;
            while (r--) b.attrHandle[n[r]] = t
        }

        function pe(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function de(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function he(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }

        function ge(t) {
            return function(e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function ve(a) {
            return le(function(o) {
                return o = +o, le(function(e, t) {
                    var n, r = a([], e.length, o),
                        i = r.length;
                    while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function ye(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        for (e in d = se.support = {}, i = se.isXML = function(e) {
                var t = e.namespaceURI,
                    n = (e.ownerDocument || e).documentElement;
                return !Y.test(t || n && n.nodeName || "HTML")
            }, T = se.setDocument = function(e) {
                var t, n, r = e ? e.ownerDocument || e : p;
                return r != C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), p != C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.scope = ce(function(e) {
                    return a.appendChild(e).appendChild(C.createElement("div")), "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                }), d.attributes = ce(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), d.getElementsByTagName = ce(function(e) {
                    return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length
                }), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function(e) {
                    return a.appendChild(e).id = S, !C.getElementsByName || !C.getElementsByName(S).length
                }), d.getById ? (b.filter.ID = function(e) {
                    var t = e.replace(te, ne);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }, b.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && E) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }) : (b.filter.ID = function(e) {
                    var n = e.replace(te, ne);
                    return function(e) {
                        var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                        return t && t.value === n
                    }
                }, b.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && E) {
                        var n, r, i, o = t.getElementById(e);
                        if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                            i = t.getElementsByName(e), r = 0;
                            while (o = i[r++])
                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                        }
                        return []
                    }
                }), b.find.TAG = d.getElementsByTagName ? function(e, t) {
                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        while (n = o[i++]) 1 === n.nodeType && r.push(n);
                        return r
                    }
                    return o
                }, b.find.CLASS = d.getElementsByClassName && function(e, t) {
                    if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e)
                }, s = [], v = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function(e) {
                    var t;
                    a.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="), (t = C.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + S + "+*").length || v.push(".#.+[+~]"), e.querySelectorAll("\\\f"), v.push("[\\r\\n\\f]")
                }), ce(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = C.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
                })), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function(e) {
                    d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", F)
                }), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), y = t || K.test(a.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function(e, t) {
                    if (t)
                        while (t = t.parentNode)
                            if (t === e) return !0;
                    return !1
                }, D = t ? function(e, t) {
                    if (e === t) return l = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == p && y(p, e) ? -1 : t == C || t.ownerDocument == p && y(p, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return l = !0, 0;
                    var n, r = 0,
                        i = e.parentNode,
                        o = t.parentNode,
                        a = [e],
                        s = [t];
                    if (!i || !o) return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
                    if (i === o) return pe(e, t);
                    n = e;
                    while (n = n.parentNode) a.unshift(n);
                    n = t;
                    while (n = n.parentNode) s.unshift(n);
                    while (a[r] === s[r]) r++;
                    return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0
                }), C
            }, se.matches = function(e, t) {
                return se(e, null, null, t)
            }, se.matchesSelector = function(e, t) {
                if (T(e), d.matchesSelector && E && !N[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try {
                    var n = c.call(e, t);
                    if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (e) {
                    N(t, !0)
                }
                return 0 < se(t, C, null, [e]).length
            }, se.contains = function(e, t) {
                return (e.ownerDocument || e) != C && T(e), y(e, t)
            }, se.attr = function(e, t) {
                (e.ownerDocument || e) != C && T(e);
                var n = b.attrHandle[t.toLowerCase()],
                    r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
                return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }, se.escape = function(e) {
                return (e + "").replace(re, ie)
            }, se.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, se.uniqueSort = function(e) {
                var t, n = [],
                    r = 0,
                    i = 0;
                if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(D), l) {
                    while (t = e[i++]) t === e[i] && (r = n.push(i));
                    while (r--) e.splice(n[r], 1)
                }
                return u = null, e
            }, o = se.getText = function(e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                    } else if (3 === i || 4 === i) return e.nodeValue
                } else
                    while (t = e[r++]) n += o(t);
                return n
            }, (b = se.selectors = {
                cacheLength: 50,
                createPseudo: le,
                match: G,
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
                    ATTR: function(e) {
                        return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(te, ne).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = m[e + " "];
                        return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && m(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(n, r, i) {
                        return function(e) {
                            var t = se.attr(e, n);
                            return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(h, e, t, g, v) {
                        var y = "nth" !== h.slice(0, 3),
                            m = "last" !== h.slice(-4),
                            x = "of-type" === e;
                        return 1 === g && 0 === v ? function(e) {
                            return !!e.parentNode
                        } : function(e, t, n) {
                            var r, i, o, a, s, u, l = y !== m ? "nextSibling" : "previousSibling",
                                c = e.parentNode,
                                f = x && e.nodeName.toLowerCase(),
                                p = !n && !x,
                                d = !1;
                            if (c) {
                                if (y) {
                                    while (l) {
                                        a = e;
                                        while (a = a[l])
                                            if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                                        u = l = "only" === h && !u && "nextSibling"
                                    }
                                    return !0
                                }
                                if (u = [m ? c.firstChild : c.lastChild], m && p) {
                                    d = (s = (r = (i = (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2], a = s && c.childNodes[s];
                                    while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                        if (1 === a.nodeType && ++d && a === e) {
                                            i[h] = [k, s, d];
                                            break
                                        }
                                } else if (p && (d = s = (r = (i = (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]), !1 === d)
                                    while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                        if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, d]), a === e)) break;
                                return (d -= v) === g || d % g == 0 && 0 <= d / g
                            }
                        }
                    },
                    PSEUDO: function(e, o) {
                        var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                        return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function(e, t) {
                            var n, r = a(e, o),
                                i = r.length;
                            while (i--) e[n = P(e, r[i])] = !(t[n] = r[i])
                        }) : function(e) {
                            return a(e, 0, t)
                        }) : a
                    }
                },
                pseudos: {
                    not: le(function(e) {
                        var r = [],
                            i = [],
                            s = f(e.replace($, "$1"));
                        return s[S] ? le(function(e, t, n, r) {
                            var i, o = s(e, null, r, []),
                                a = e.length;
                            while (a--)(i = o[a]) && (e[a] = !(t[a] = i))
                        }) : function(e, t, n) {
                            return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop()
                        }
                    }),
                    has: le(function(t) {
                        return function(e) {
                            return 0 < se(t, e).length
                        }
                    }),
                    contains: le(function(t) {
                        return t = t.replace(te, ne),
                            function(e) {
                                return -1 < (e.textContent || o(e)).indexOf(t)
                            }
                    }),
                    lang: le(function(n) {
                        return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(),
                            function(e) {
                                var t;
                                do {
                                    if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var t = n.location && n.location.hash;
                        return t && t.slice(1) === e.id
                    },
                    root: function(e) {
                        return e === a
                    },
                    focus: function(e) {
                        return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: ge(!1),
                    disabled: ge(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !b.pseudos.empty(e)
                    },
                    header: function(e) {
                        return J.test(e.nodeName)
                    },
                    input: function(e) {
                        return Q.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: ve(function() {
                        return [0]
                    }),
                    last: ve(function(e, t) {
                        return [t - 1]
                    }),
                    eq: ve(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: ve(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: ve(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: ve(function(e, t, n) {
                        for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);
                        return e
                    }),
                    gt: ve(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                        return e
                    })
                }
            }).pseudos.nth = b.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) b.pseudos[e] = de(e);
        for (e in {
                submit: !0,
                reset: !0
            }) b.pseudos[e] = he(e);

        function me() {}

        function xe(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function be(s, e, t) {
            var u = e.dir,
                l = e.next,
                c = l || u,
                f = t && "parentNode" === c,
                p = r++;
            return e.first ? function(e, t, n) {
                while (e = e[u])
                    if (1 === e.nodeType || f) return s(e, t, n);
                return !1
            } : function(e, t, n) {
                var r, i, o, a = [k, p];
                if (n) {
                    while (e = e[u])
                        if ((1 === e.nodeType || f) && s(e, t, n)) return !0
                } else
                    while (e = e[u])
                        if (1 === e.nodeType || f)
                            if (i = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;
                            else {
                                if ((r = i[c]) && r[0] === k && r[1] === p) return a[2] = r[2];
                                if ((i[c] = a)[2] = s(e, t, n)) return !0
                            } return !1
            }
        }

        function we(i) {
            return 1 < i.length ? function(e, t, n) {
                var r = i.length;
                while (r--)
                    if (!i[r](e, t, n)) return !1;
                return !0
            } : i[0]
        }

        function Te(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
            return a
        }

        function Ce(d, h, g, v, y, e) {
            return v && !v[S] && (v = Ce(v)), y && !y[S] && (y = Ce(y, e)), le(function(e, t, n, r) {
                var i, o, a, s = [],
                    u = [],
                    l = t.length,
                    c = e || function(e, t, n) {
                        for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                        return n
                    }(h || "*", n.nodeType ? [n] : n, []),
                    f = !d || !e && h ? c : Te(c, s, d, n, r),
                    p = g ? y || (e ? d : l || v) ? [] : t : f;
                if (g && g(f, p, n, r), v) {
                    i = Te(p, u), v(i, [], n, r), o = i.length;
                    while (o--)(a = i[o]) && (p[u[o]] = !(f[u[o]] = a))
                }
                if (e) {
                    if (y || d) {
                        if (y) {
                            i = [], o = p.length;
                            while (o--)(a = p[o]) && i.push(f[o] = a);
                            y(null, p = [], i, r)
                        }
                        o = p.length;
                        while (o--)(a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a))
                    }
                } else p = Te(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : H.apply(t, p)
            })
        }

        function Ee(e) {
            for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function(e) {
                    return e === i
                }, a, !0), l = be(function(e) {
                    return -1 < P(i, e)
                }, a, !0), c = [function(e, t, n) {
                    var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                    return i = null, r
                }]; s < r; s++)
                if (t = b.relative[e[s].type]) c = [be(we(c), t)];
                else {
                    if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
                        for (n = ++s; n < r; n++)
                            if (b.relative[e[n].type]) break;
                        return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace($, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e))
                    }
                    c.push(t)
                }
            return we(c)
        }
        return me.prototype = b.filters = b.pseudos, b.setFilters = new me, h = se.tokenize = function(e, t) {
            var n, r, i, o, a, s, u, l = x[e + " "];
            if (l) return t ? 0 : l.slice(0);
            a = e, s = [], u = b.preFilter;
            while (a) {
                for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({
                        value: n,
                        type: r[0].replace($, " ")
                    }), a = a.slice(n.length)), b.filter) !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
                    value: n,
                    type: o,
                    matches: r
                }), a = a.slice(n.length));
                if (!n) break
            }
            return t ? a.length : a ? se.error(e) : x(e, s).slice(0)
        }, f = se.compile = function(e, t) {
            var n, v, y, m, x, r, i = [],
                o = [],
                a = A[e + " "];
            if (!a) {
                t || (t = h(e)), n = t.length;
                while (n--)(a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
                (a = A(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function(e, t, n, r, i) {
                    var o, a, s, u = 0,
                        l = "0",
                        c = e && [],
                        f = [],
                        p = w,
                        d = e || x && b.find.TAG("*", i),
                        h = k += null == p ? 1 : Math.random() || .1,
                        g = d.length;
                    for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) {
                        if (x && o) {
                            a = 0, t || o.ownerDocument == C || (T(o), n = !E);
                            while (s = v[a++])
                                if (s(o, t || C, n)) {
                                    r.push(o);
                                    break
                                }
                            i && (k = h)
                        }
                        m && ((o = !s && o) && u--, e && c.push(o))
                    }
                    if (u += l, m && l !== u) {
                        a = 0;
                        while (s = y[a++]) s(c, f, t, n);
                        if (e) {
                            if (0 < u)
                                while (l--) c[l] || f[l] || (f[l] = q.call(r));
                            f = Te(f)
                        }
                        H.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r)
                    }
                    return i && (k = h, w = p), c
                }, m ? le(r) : r))).selector = e
            }
            return a
        }, g = se.select = function(e, t, n, r) {
            var i, o, a, s, u, l = "function" == typeof e && e,
                c = !r && h(e = l.selector || e);
            if (n = n || [], 1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                i = G.needsContext.test(e) ? 0 : o.length;
                while (i--) {
                    if (a = o[i], b.relative[s = a.type]) break;
                    if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
                        if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n;
                        break
                    }
                }
            }
            return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n
        }, d.sortStable = S.split("").sort(D).join("") === S, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function(e) {
            return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
        }), ce(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || fe("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), d.attributes && ce(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || fe("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), ce(function(e) {
            return null == e.getAttribute("disabled")
        }) || fe(R, function(e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), se
    }(C);
    S.find = d, S.expr = d.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = d.uniqueSort, S.text = d.getText, S.isXMLDoc = d.isXML, S.contains = d.contains, S.escapeSelector = d.escape;
    var h = function(e, t, n) {
            var r = [],
                i = void 0 !== n;
            while ((e = e[t]) && 9 !== e.nodeType)
                if (1 === e.nodeType) {
                    if (i && S(e).is(n)) break;
                    r.push(e)
                }
            return r
        },
        T = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        k = S.expr.match.needsContext;

    function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function D(e, n, r) {
        return m(n) ? S.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== r
        }) : n.nodeType ? S.grep(e, function(e) {
            return e === n !== r
        }) : "string" != typeof n ? S.grep(e, function(e) {
            return -1 < i.call(n, e) !== r
        }) : S.filter(n, e, r)
    }
    S.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? S.find.matchesSelector(r, e) ? [r] : [] : S.find.matches(e, S.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, S.fn.extend({
        find: function(e) {
            var t, n, r = this.length,
                i = this;
            if ("string" != typeof e) return this.pushStack(S(e).filter(function() {
                for (t = 0; t < r; t++)
                    if (S.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, i[t], n);
            return 1 < r ? S.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(D(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(D(this, e || [], !0))
        },
        is: function(e) {
            return !!D(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1).length
        }
    });
    var j, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (S.fn.init = function(e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || j, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof S ? t[0] : t, S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), N.test(r[1]) && S.isPlainObject(t))
                    for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this)
    }).prototype = S.fn, j = S(E);
    var L = /^(?:parents|prev(?:Until|All))/,
        H = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function O(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType);
        return e
    }
    S.fn.extend({
        has: function(e) {
            var t = S(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (S.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && S(e);
            if (!k.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(1 < o.length ? S.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? i.call(S(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), S.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return h(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return h(e, "parentNode", n)
        },
        next: function(e) {
            return O(e, "nextSibling")
        },
        prev: function(e) {
            return O(e, "previousSibling")
        },
        nextAll: function(e) {
            return h(e, "nextSibling")
        },
        prevAll: function(e) {
            return h(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return h(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return h(e, "previousSibling", n)
        },
        siblings: function(e) {
            return T((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return T(e.firstChild)
        },
        contents: function(e) {
            return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), S.merge([], e.childNodes))
        }
    }, function(r, i) {
        S.fn[r] = function(e, t) {
            var n = S.map(this, i, e);
            return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = S.filter(t, n)), 1 < this.length && (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()), this.pushStack(n)
        }
    });
    var P = /[^\x20\t\r\n\f]+/g;

    function R(e) {
        return e
    }

    function M(e) {
        throw e
    }

    function I(e, t, n, r) {
        var i;
        try {
            e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    S.Callbacks = function(r) {
        var e, n;
        r = "string" == typeof r ? (e = r, n = {}, S.each(e.match(P) || [], function(e, t) {
            n[t] = !0
        }), n) : S.extend({}, r);
        var i, t, o, a, s = [],
            u = [],
            l = -1,
            c = function() {
                for (a = a || r.once, o = i = !0; u.length; l = -1) {
                    t = u.shift();
                    while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1)
                }
                r.memory || (t = !1), i = !1, a && (s = t ? [] : "")
            },
            f = {
                add: function() {
                    return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
                        S.each(e, function(e, t) {
                            m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t)
                        })
                    }(arguments), t && !i && c()), this
                },
                remove: function() {
                    return S.each(arguments, function(e, t) {
                        var n;
                        while (-1 < (n = S.inArray(t, s, n))) s.splice(n, 1), n <= l && l--
                    }), this
                },
                has: function(e) {
                    return e ? -1 < S.inArray(e, s) : 0 < s.length
                },
                empty: function() {
                    return s && (s = []), this
                },
                disable: function() {
                    return a = u = [], s = t = "", this
                },
                disabled: function() {
                    return !s
                },
                lock: function() {
                    return a = u = [], t || i || (s = t = ""), this
                },
                locked: function() {
                    return !!a
                },
                fireWith: function(e, t) {
                    return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this
                },
                fire: function() {
                    return f.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!o
                }
            };
        return f
    }, S.extend({
        Deferred: function(e) {
            var o = [
                    ["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2],
                    ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                a = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return s.done(arguments).fail(arguments), this
                    },
                    "catch": function(e) {
                        return a.then(null, e)
                    },
                    pipe: function() {
                        var i = arguments;
                        return S.Deferred(function(r) {
                            S.each(o, function(e, t) {
                                var n = m(i[t[4]]) && i[t[4]];
                                s[t[1]](function() {
                                    var e = n && n.apply(this, arguments);
                                    e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                                })
                            }), i = null
                        }).promise()
                    },
                    then: function(t, n, r) {
                        var u = 0;

                        function l(i, o, a, s) {
                            return function() {
                                var n = this,
                                    r = arguments,
                                    e = function() {
                                        var e, t;
                                        if (!(i < u)) {
                                            if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                            t = e && ("object" == typeof e || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, R, s), l(u, o, M, s)) : (u++, t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith))) : (a !== R && (n = void 0, r = [e]), (s || o.resolveWith)(n, r))
                                        }
                                    },
                                    t = s ? e : function() {
                                        try {
                                            e()
                                        } catch (e) {
                                            S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== M && (n = void 0, r = [e]), o.rejectWith(n, r))
                                        }
                                    };
                                i ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()), C.setTimeout(t))
                            }
                        }
                        return S.Deferred(function(e) {
                            o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : R)), o[2][3].add(l(0, e, m(n) ? n : M))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? S.extend(e, a) : a
                    }
                },
                s = {};
            return S.each(o, function(e, t) {
                var n = t[2],
                    r = t[5];
                a[t[1]] = n.add, r && n.add(function() {
                    i = r
                }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function() {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                }, s[t[0] + "With"] = n.fireWith
            }), a.promise(s), e && e.call(s, s), s
        },
        when: function(e) {
            var n = arguments.length,
                t = n,
                r = Array(t),
                i = s.call(arguments),
                o = S.Deferred(),
                a = function(t) {
                    return function(e) {
                        r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i)
                    }
                };
            if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then();
            while (t--) I(i[t], a(t), o.reject);
            return o.promise()
        }
    });
    var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    S.Deferred.exceptionHook = function(e, t) {
        C.console && C.console.warn && e && W.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }, S.readyException = function(e) {
        C.setTimeout(function() {
            throw e
        })
    };
    var F = S.Deferred();

    function B() {
        E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), S.ready()
    }
    S.fn.ready = function(e) {
        return F.then(e)["catch"](function(e) {
            S.readyException(e)
        }), this
    }, S.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || F.resolveWith(E, [S])
        }
    }), S.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(S.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));
    var $ = function(e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === w(n))
                for (s in i = !0, n) $(e, t, s, n[s], !0, o, a);
            else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
                    return l.call(S(e), n)
                })), t))
                for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
        },
        _ = /^-ms-/,
        z = /-([a-z])/g;

    function U(e, t) {
        return t.toUpperCase()
    }

    function X(e) {
        return e.replace(_, "ms-").replace(z, U)
    }
    var V = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function G() {
        this.expando = S.expando + G.uid++
    }
    G.uid = 1, G.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[X(t)] = n;
            else
                for (r in t) i[X(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(P) || []).length;
                    while (n--) delete r[t[n]]
                }(void 0 === t || S.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !S.isEmptyObject(t)
        }
    };
    var Y = new G,
        Q = new G,
        J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        K = /[A-Z]/g;

    function Z(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                try {
                    n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i)
                } catch (e) {}
                Q.set(e, t, n)
            } else n = void 0;
        return n
    }
    S.extend({
        hasData: function(e) {
            return Q.hasData(e) || Y.hasData(e)
        },
        data: function(e, t, n) {
            return Q.access(e, t, n)
        },
        removeData: function(e, t) {
            Q.remove(e, t)
        },
        _data: function(e, t, n) {
            return Y.access(e, t, n)
        },
        _removeData: function(e, t) {
            Y.remove(e, t)
        }
    }), S.fn.extend({
        data: function(n, e) {
            var t, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === n) {
                if (this.length && (i = Q.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
                    t = a.length;
                    while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = X(r.slice(5)), Z(o, r, i[r]));
                    Y.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof n ? this.each(function() {
                Q.set(this, n)
            }) : $(this, function(e) {
                var t;
                if (o && void 0 === e) return void 0 !== (t = Q.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
                this.each(function() {
                    Q.set(this, n, e)
                })
            }, null, e, 1 < arguments.length, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                Q.remove(this, e)
            })
        }
    }), S.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = Y.get(e, t), n && (!r || Array.isArray(n) ? r = Y.access(e, t, S.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = S.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = S._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() {
                S.dequeue(e, t)
            }, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Y.get(e, n) || Y.access(e, n, {
                empty: S.Callbacks("once memory").add(function() {
                    Y.remove(e, [t + "queue", n])
                })
            })
        }
    }), S.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? S.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = S.queue(this, t, n);
                S._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                S.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                i = S.Deferred(),
                o = this,
                a = this.length,
                s = function() {
                    --r || i.resolveWith(o, [o])
                };
            "string" != typeof e && (t = e, e = void 0), e = e || "fx";
            while (a--)(n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"],
        re = E.documentElement,
        ie = function(e) {
            return S.contains(e.ownerDocument, e)
        },
        oe = {
            composed: !0
        };
    re.getRootNode && (ie = function(e) {
        return S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
    });
    var ae = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === S.css(e, "display")
    };

    function se(e, t, n, r) {
        var i, o, a = 20,
            s = r ? function() {
                return r.cur()
            } : function() {
                return S.css(e, t, "")
            },
            u = s(),
            l = n && n[3] || (S.cssNumber[t] ? "" : "px"),
            c = e.nodeType && (S.cssNumber[t] || "px" !== l && +u) && te.exec(S.css(e, t));
        if (c && c[3] !== l) {
            u /= 2, l = l || c[3], c = +u || 1;
            while (a--) S.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
            c *= 2, S.style(e, t, c + l), n = n || []
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }
    var ue = {};

    function le(e, t) {
        for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)(r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Y.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ae(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ue[s]) || (o = a.body.appendChild(a.createElement(s)), u = S.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ue[s] = u)))) : "none" !== n && (l[c] = "none", Y.set(r, "display", n)));
        for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
        return e
    }
    S.fn.extend({
        show: function() {
            return le(this, !0)
        },
        hide: function() {
            return le(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ae(this) ? S(this).show() : S(this).hide()
            })
        }
    });
    var ce, fe, pe = /^(?:checkbox|radio)$/i,
        de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        he = /^$|^module$|\/(?:java|ecma)script/i;
    ce = E.createDocumentFragment().appendChild(E.createElement("div")), (fe = E.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), ce.appendChild(fe), y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked, ce.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue, ce.innerHTML = "<option></option>", y.option = !!ce.lastChild;
    var ge = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };

    function ve(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? S.merge([e], n) : n
    }

    function ye(e, t) {
        for (var n = 0, r = e.length; n < r; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"))
    }
    ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, y.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
    var me = /<|&#?\w+;/;

    function xe(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === w(o)) S.merge(p, o.nodeType ? [o] : o);
                else if (me.test(o)) {
            a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2], c = u[0];
            while (c--) a = a.lastChild;
            S.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
        } else p.push(t.createTextNode(o));
        f.textContent = "", d = 0;
        while (o = p[d++])
            if (r && -1 < S.inArray(o, r)) i && i.push(o);
            else if (l = ie(o), a = ve(f.appendChild(o), "script"), l && ye(a), n) {
            c = 0;
            while (o = a[c++]) he.test(o.type || "") && n.push(o)
        }
        return f
    }
    var be = /^key/,
        we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Te = /^([^.]*)(?:\.(.+)|)/;

    function Ce() {
        return !0
    }

    function Ee() {
        return !1
    }

    function Se(e, t) {
        return e === function() {
            try {
                return E.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }

    function ke(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n, n = void 0), t) ke(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Ee;
        else if (!i) return e;
        return 1 === o && (a = i, (i = function(e) {
            return S().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = S.guid++)), e.each(function() {
            S.event.add(this, t, i, r, n)
        })
    }

    function Ae(e, i, o) {
        o ? (Y.set(e, i, !1), S.event.add(e, i, {
            namespace: !1,
            handler: function(e) {
                var t, n, r = Y.get(this, i);
                if (1 & e.isTrigger && this[i]) {
                    if (r.length)(S.event.special[i] || {}).delegateType && e.stopPropagation();
                    else if (r = s.call(arguments), Y.set(this, i, r), t = o(this, i), this[i](), r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n.value
                } else r.length && (Y.set(this, i, {
                    value: S.event.trigger(S.extend(r[0], S.Event.prototype), r.slice(1), this)
                }), e.stopImmediatePropagation())
            }
        })) : void 0 === Y.get(e, i) && S.event.add(e, i, Ce)
    }
    S.event = {
        global: {},
        add: function(t, e, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Y.get(t);
            if (V(t)) {
                n.handler && (n = (o = n).handler, i = o.selector), i && S.find.matchesSelector(re, i), n.guid || (n.guid = S.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function(e) {
                    return "undefined" != typeof S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0
                }), l = (e = (e || "").match(P) || [""]).length;
                while (l--) d = g = (s = Te.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = S.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = S.event.special[d] || {}, c = S.extend({
                    type: d,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && S.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), S.event.global[d] = !0)
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Y.hasData(e) && Y.get(e);
            if (v && (u = v.events)) {
                l = (t = (t || "").match(P) || [""]).length;
                while (l--)
                    if (d = g = (s = Te.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
                        f = S.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
                        while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || S.removeEvent(e, d, v.handle), delete u[d])
                    } else
                        for (d in u) S.event.remove(e, d + t[l], n, r, !0);
                S.isEmptyObject(u) && Y.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a, s = new Array(arguments.length),
                u = S.event.fix(e),
                l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
                c = S.event.special[u.type] || {};
            for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
            if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
                a = S.event.handlers.call(this, u, l), t = 0;
                while ((i = a[t++]) && !u.isPropagationStopped()) {
                    u.currentTarget = i.elem, n = 0;
                    while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped()) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((S.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, u), u.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < S(i, this).index(l) : S.find(i, this, null, [l]).length), a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return l = this, u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }), s
        },
        addProp: function(t, e) {
            Object.defineProperty(S.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: m(e) ? function() {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[t]
                },
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[S.expando] ? e : new S.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click", Ce), !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click"), !0
                },
                _default: function(e) {
                    var t = e.target;
                    return pe.test(t.type) && t.click && A(t, "input") && Y.get(t, "click") || A(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, S.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, S.Event = function(e, t) {
        if (!(this instanceof S.Event)) return new S.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ce : Ee, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && S.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[S.expando] = !0
    }, S.Event.prototype = {
        constructor: S.Event,
        isDefaultPrevented: Ee,
        isPropagationStopped: Ee,
        isImmediatePropagationStopped: Ee,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = Ce, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = Ce, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Ce, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, S.each({
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
        code: !0,
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
        which: function(e) {
            var t = e.button;
            return null == e.which && be.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && we.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, S.event.addProp), S.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        S.event.special[e] = {
            setup: function() {
                return Ae(this, e, Se), !1
            },
            trigger: function() {
                return Ae(this, e), !0
            },
            delegateType: t
        }
    }), S.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, i) {
        S.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function(e) {
                var t, n = e.relatedTarget,
                    r = e.handleObj;
                return n && (n === this || S.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
            }
        }
    }), S.fn.extend({
        on: function(e, t, n, r) {
            return ke(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return ke(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, S(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ee), this.each(function() {
                S.event.remove(this, e, n, t)
            })
        }
    });
    var Ne = /<script|<style|<link/i,
        De = /checked\s*(?:[^=]|=\s*.checked.)/i,
        je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function qe(e, t) {
        return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e
    }

    function Le(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function He(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function Oe(e, t) {
        var n, r, i, o, a, s;
        if (1 === t.nodeType) {
            if (Y.hasData(e) && (s = Y.get(e).events))
                for (i in Y.remove(t, "handle events"), s)
                    for (n = 0, r = s[i].length; n < r; n++) S.event.add(t, i, s[i][n]);
            Q.hasData(e) && (o = Q.access(e), a = S.extend({}, o), Q.set(t, a))
        }
    }

    function Pe(n, r, i, o) {
        r = g(r);
        var e, t, a, s, u, l, c = 0,
            f = n.length,
            p = f - 1,
            d = r[0],
            h = m(d);
        if (h || 1 < f && "string" == typeof d && !y.checkClone && De.test(d)) return n.each(function(e) {
            var t = n.eq(e);
            h && (r[0] = d.call(this, e, t.html())), Pe(t, r, i, o)
        });
        if (f && (t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
            for (s = (a = S.map(ve(e, "script"), Le)).length; c < f; c++) u = e, c !== p && (u = S.clone(u, !0, !0), s && S.merge(a, ve(u, "script"))), i.call(n[c], u, c);
            if (s)
                for (l = a[a.length - 1].ownerDocument, S.map(a, He), c = 0; c < s; c++) u = a[c], he.test(u.type || "") && !Y.access(u, "globalEval") && S.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? S._evalUrl && !u.noModule && S._evalUrl(u.src, {
                    nonce: u.nonce || u.getAttribute("nonce")
                }, l) : b(u.textContent.replace(je, ""), u, l))
        }
        return n
    }

    function Re(e, t, n) {
        for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || S.cleanData(ve(r)), r.parentNode && (n && ie(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
        return e
    }
    S.extend({
        htmlPrefilter: function(e) {
            return e
        },
        clone: function(e, t, n) {
            var r, i, o, a, s, u, l, c = e.cloneNode(!0),
                f = ie(e);
            if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e)))
                for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++) s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++) Oe(o[r], a[r]);
                else Oe(e, c);
            return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c
        },
        cleanData: function(e) {
            for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (V(n)) {
                    if (t = n[Y.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
                        n[Y.expando] = void 0
                    }
                    n[Q.expando] && (n[Q.expando] = void 0)
                }
        }
    }), S.fn.extend({
        detach: function(e) {
            return Re(this, e, !0)
        },
        remove: function(e) {
            return Re(this, e)
        },
        text: function(e) {
            return $(this, function(e) {
                return void 0 === e ? S.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return Pe(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || qe(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return Pe(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = qe(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return Pe(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return Pe(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (S.cleanData(ve(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return S.clone(this, e, t)
            })
        },
        html: function(e) {
            return $(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Ne.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = S.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (S.cleanData(ve(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return Pe(this, arguments, function(e) {
                var t = this.parentNode;
                S.inArray(this, n) < 0 && (S.cleanData(ve(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), S.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, a) {
        S.fn[e] = function(e) {
            for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), S(r[o])[a](t), u.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var Me = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
        Ie = function(e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = C), t.getComputedStyle(e)
        },
        We = function(e, t, n) {
            var r, i, o = {};
            for (i in t) o[i] = e.style[i], e.style[i] = t[i];
            for (i in r = n.call(e), t) e.style[i] = o[i];
            return r
        },
        Fe = new RegExp(ne.join("|"), "i");

    function Be(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || Ie(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = S.style(e, t)), !y.pixelBoxStyles() && Me.test(a) && Fe.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function $e(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }! function() {
        function e() {
            if (l) {
                u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(u).appendChild(l);
                var e = C.getComputedStyle(l);
                n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), re.removeChild(u), l = null
            }
        }

        function t(e) {
            return Math.round(parseFloat(e))
        }
        var n, r, i, o, a, s, u = E.createElement("div"),
            l = E.createElement("div");
        l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === l.style.backgroundClip, S.extend(y, {
            boxSizingReliable: function() {
                return e(), r
            },
            pixelBoxStyles: function() {
                return e(), o
            },
            pixelPosition: function() {
                return e(), n
            },
            reliableMarginLeft: function() {
                return e(), s
            },
            scrollboxSize: function() {
                return e(), i
            },
            reliableTrDimensions: function() {
                var e, t, n, r;
                return null == a && (e = E.createElement("table"), t = E.createElement("tr"), n = E.createElement("div"), e.style.cssText = "position:absolute;left:-11111px", t.style.height = "1px", n.style.height = "9px", re.appendChild(e).appendChild(t).appendChild(n), r = C.getComputedStyle(t), a = 3 < parseInt(r.height), re.removeChild(e)), a
            }
        }))
    }();
    var _e = ["Webkit", "Moz", "ms"],
        ze = E.createElement("div").style,
        Ue = {};

    function Xe(e) {
        var t = S.cssProps[e] || Ue[e];
        return t || (e in ze ? e : Ue[e] = function(e) {
            var t = e[0].toUpperCase() + e.slice(1),
                n = _e.length;
            while (n--)
                if ((e = _e[n] + t) in ze) return e
        }(e) || e)
    }
    var Ve = /^(none|table(?!-c[ea]).+)/,
        Ge = /^--/,
        Ye = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Qe = {
            letterSpacing: "0",
            fontWeight: "400"
        };

    function Je(e, t, n) {
        var r = te.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function Ke(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (u += S.css(e, n + ne[a], !0, i)), r ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= S.css(e, "border" + ne[a] + "Width", !0, i))) : (u += S.css(e, "padding" + ne[a], !0, i), "padding" !== n ? u += S.css(e, "border" + ne[a] + "Width", !0, i) : s += S.css(e, "border" + ne[a] + "Width", !0, i));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u
    }

    function Ze(e, t, n) {
        var r = Ie(e),
            i = (!y.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, r),
            o = i,
            a = Be(e, t, r),
            s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Me.test(a)) {
            if (!n) return a;
            a = "auto"
        }
        return (!y.boxSizingReliable() && i || !y.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === S.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === S.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Ke(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    }

    function et(e, t, n, r, i) {
        return new et.prototype.init(e, t, n, r, i)
    }
    S.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Be(e, "opacity");
                        return "" === n ? "1" : n
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
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = X(t),
                    u = Ge.test(t),
                    l = e.style;
                if (u || (t = Xe(s)), a = S.cssHooks[t] || S.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" === (o = typeof n) && (i = te.exec(n)) && i[1] && (n = se(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (S.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = X(t);
            return Ge.test(t) || (t = Xe(s)), (a = S.cssHooks[t] || S.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Be(e, t, r)), "normal" === i && t in Qe && (i = Qe[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }), S.each(["height", "width"], function(e, u) {
        S.cssHooks[u] = {
            get: function(e, t, n) {
                if (t) return !Ve.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ze(e, u, n) : We(e, Ye, function() {
                    return Ze(e, u, n)
                })
            },
            set: function(e, t, n) {
                var r, i = Ie(e),
                    o = !y.scrollboxSize() && "absolute" === i.position,
                    a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i),
                    s = n ? Ke(e, u, n, a, i) : 0;
                return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Ke(e, u, "border", !1, i) - .5)), s && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = S.css(e, u)), Je(0, t, s)
            }
        }
    }), S.cssHooks.marginLeft = $e(y.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(Be(e, "marginLeft")) || e.getBoundingClientRect().left - We(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), S.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(i, o) {
        S.cssHooks[i + o] = {
            expand: function(e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
                return n
            }
        }, "margin" !== i && (S.cssHooks[i + o].set = Je)
    }), S.fn.extend({
        css: function(e, t) {
            return $(this, function(e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (Array.isArray(t)) {
                    for (r = Ie(e), i = t.length; a < i; a++) o[t[a]] = S.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? S.style(e, t, n) : S.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), ((S.Tween = et).prototype = {
        constructor: et,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || S.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (S.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = et.propHooks[this.prop];
            return e && e.get ? e.get(this) : et.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = et.propHooks[this.prop];
            return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : et.propHooks._default.set(this), this
        }
    }).init.prototype = et.prototype, (et.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S.cssHooks[e.prop] && null == e.elem.style[Xe(e.prop)] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = et.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, S.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, S.fx = et.prototype.init, S.fx.step = {};
    var tt, nt, rt, it, ot = /^(?:toggle|show|hide)$/,
        at = /queueHooks$/;

    function st() {
        nt && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(st) : C.setTimeout(st, S.fx.interval), S.fx.tick())
    }

    function ut() {
        return C.setTimeout(function() {
            tt = void 0
        }), tt = Date.now()
    }

    function lt(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ne[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function ct(e, t, n) {
        for (var r, i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function ft(o, e, t) {
        var n, a, r = 0,
            i = ft.prefilters.length,
            s = S.Deferred().always(function() {
                delete u.elem
            }),
            u = function() {
                if (a) return !1;
                for (var e = tt || ut(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);
                return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
            },
            l = s.promise({
                elem: o,
                props: S.extend({}, e),
                opts: S.extend(!0, {
                    specialEasing: {},
                    easing: S.easing._default
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: tt || ut(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) {
                    var n = S.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                    return l.tweens.push(n), n
                },
                stop: function(e) {
                    var t = 0,
                        n = e ? l.tweens.length : 0;
                    if (a) return this;
                    for (a = !0; t < n; t++) l.tweens[t].run(1);
                    return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this
                }
            }),
            c = l.props;
        for (! function(e, t) {
                var n, r, i, o, a;
                for (n in e)
                    if (i = t[r = X(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = S.cssHooks[r]) && "expand" in a)
                        for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                    else t[r] = i
            }(c, l.opts.specialEasing); r < i; r++)
            if (n = ft.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
        return S.map(c, ct, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), S.fx.timer(S.extend(u, {
            elem: o,
            anim: l,
            queue: l.opts.queue
        })), l
    }
    S.Animation = S.extend(ft, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return se(n.elem, e, te.exec(t), n), n
            }]
        },
        tweener: function(e, t) {
            m(e) ? (t = e, e = ["*"]) : e = e.match(P);
            for (var n, r = 0, i = e.length; r < i; r++) n = e[r], ft.tweeners[n] = ft.tweeners[n] || [], ft.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
                p = this,
                d = {},
                h = e.style,
                g = e.nodeType && ae(e),
                v = Y.get(e, "fxshow");
            for (r in n.queue || (null == (a = S._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
                    a.unqueued || s()
                }), a.unqueued++, p.always(function() {
                    p.always(function() {
                        a.unqueued--, S.queue(e, "fx").length || a.empty.fire()
                    })
                })), t)
                if (i = t[r], ot.test(i)) {
                    if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                        if ("show" !== i || !v || void 0 === v[r]) continue;
                        g = !0
                    }
                    d[r] = v && v[r] || S.style(e, r)
                }
            if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
                for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Y.get(e, "display")), "none" === (c = S.css(e, "display")) && (l ? c = l : (le([e], !0), l = e.style.display || l, c = S.css(e, "display"), le([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === S.css(e, "float") && (u || (p.done(function() {
                        h.display = l
                    }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function() {
                        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                    })), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = Y.access(e, "fxshow", {
                    display: l
                }), o && (v.hidden = !g), g && le([e], !0), p.done(function() {
                    for (r in g || le([e]), Y.remove(e, "fxshow"), d) S.style(e, r, d[r])
                })), u = ct(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0))
        }],
        prefilter: function(e, t) {
            t ? ft.prefilters.unshift(e) : ft.prefilters.push(e)
        }
    }), S.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? S.extend({}, e) : {
            complete: n || !n && t || m(e) && e,
            duration: e,
            easing: n && t || t && !m(t) && t
        };
        return S.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in S.fx.speeds ? r.duration = S.fx.speeds[r.duration] : r.duration = S.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue)
        }, r
    }, S.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(ae).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(t, e, n, r) {
            var i = S.isEmptyObject(t),
                o = S.speed(e, n, r),
                a = function() {
                    var e = ft(this, S.extend({}, t), o);
                    (i || Y.get(this, "finish")) && e.stop(!0)
                };
            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(i, e, o) {
            var a = function(e) {
                var t = e.stop;
                delete e.stop, t(o)
            };
            return "string" != typeof i && (o = e, e = i, i = void 0), e && this.queue(i || "fx", []), this.each(function() {
                var e = !0,
                    t = null != i && i + "queueHooks",
                    n = S.timers,
                    r = Y.get(this);
                if (t) r[t] && r[t].stop && a(r[t]);
                else
                    for (t in r) r[t] && r[t].stop && at.test(t) && a(r[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                !e && o || S.dequeue(this, i)
            })
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"), this.each(function() {
                var e, t = Y.get(this),
                    n = t[a + "queue"],
                    r = t[a + "queueHooks"],
                    i = S.timers,
                    o = n ? n.length : 0;
                for (t.finish = !0, S.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
                for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), S.each(["toggle", "show", "hide"], function(e, r) {
        var i = S.fn[r];
        S.fn[r] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(lt(r, !0), e, t, n)
        }
    }), S.each({
        slideDown: lt("show"),
        slideUp: lt("hide"),
        slideToggle: lt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, r) {
        S.fn[e] = function(e, t, n) {
            return this.animate(r, e, t, n)
        }
    }), S.timers = [], S.fx.tick = function() {
        var e, t = 0,
            n = S.timers;
        for (tt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || S.fx.stop(), tt = void 0
    }, S.fx.timer = function(e) {
        S.timers.push(e), S.fx.start()
    }, S.fx.interval = 13, S.fx.start = function() {
        nt || (nt = !0, st())
    }, S.fx.stop = function() {
        nt = null
    }, S.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, S.fn.delay = function(r, e) {
        return r = S.fx && S.fx.speeds[r] || r, e = e || "fx", this.queue(e, function(e, t) {
            var n = C.setTimeout(e, r);
            t.stop = function() {
                C.clearTimeout(n)
            }
        })
    }, rt = E.createElement("input"), it = E.createElement("select").appendChild(E.createElement("option")), rt.type = "checkbox", y.checkOn = "" !== rt.value, y.optSelected = it.selected, (rt = E.createElement("input")).value = "t", rt.type = "radio", y.radioValue = "t" === rt.value;
    var pt, dt = S.expr.attrHandle;
    S.fn.extend({
        attr: function(e, t) {
            return $(this, S.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                S.removeAttr(this, e)
            })
        }
    }), S.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? S.prop(e, t, n) : (1 === o && S.isXMLDoc(e) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? pt : void 0)), void 0 !== n ? null === n ? void S.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = S.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!y.radioValue && "radio" === t && A(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0,
                i = t && t.match(P);
            if (i && 1 === e.nodeType)
                while (n = i[r++]) e.removeAttribute(n)
        }
    }), pt = {
        set: function(e, t, n) {
            return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, S.each(S.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var a = dt[t] || S.find.attr;
        dt[t] = function(e, t, n) {
            var r, i, o = t.toLowerCase();
            return n || (i = dt[o], dt[o] = r, r = null != a(e, t, n) ? o : null, dt[o] = i), r
        }
    });
    var ht = /^(?:input|select|textarea|button)$/i,
        gt = /^(?:a|area)$/i;

    function vt(e) {
        return (e.match(P) || []).join(" ")
    }

    function yt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function mt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || []
    }
    S.fn.extend({
        prop: function(e, t) {
            return $(this, S.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[S.propFix[e] || e]
            })
        }
    }), S.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && S.isXMLDoc(e) || (t = S.propFix[t] || t, i = S.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = S.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : ht.test(e.nodeName) || gt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), y.optSelected || (S.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        S.propFix[this.toLowerCase()] = this
    }), S.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t)) return this.each(function(e) {
                S(this).addClass(t.call(this, e, yt(this)))
            });
            if ((e = mt(t)).length)
                while (n = this[u++])
                    if (i = yt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
                        a = 0;
                        while (o = e[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = vt(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t)) return this.each(function(e) {
                S(this).removeClass(t.call(this, e, yt(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((e = mt(t)).length)
                while (n = this[u++])
                    if (i = yt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
                        a = 0;
                        while (o = e[a++])
                            while (-1 < r.indexOf(" " + o + " ")) r = r.replace(" " + o + " ", " ");
                        i !== (s = vt(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(i, t) {
            var o = typeof i,
                a = "string" === o || Array.isArray(i);
            return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function(e) {
                S(this).toggleClass(i.call(this, e, yt(this), t), t)
            }) : this.each(function() {
                var e, t, n, r;
                if (a) {
                    t = 0, n = S(this), r = mt(i);
                    while (e = r[t++]) n.hasClass(e) ? n.removeClass(e) : n.addClass(e)
                } else void 0 !== i && "boolean" !== o || ((e = yt(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            t = " " + e + " ";
            while (n = this[r++])
                if (1 === n.nodeType && -1 < (" " + vt(yt(n)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var xt = /\r/g;
    S.fn.extend({
        val: function(n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = m(n), this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, S(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = S.map(t, function(e) {
                    return null == e ? "" : e + ""
                })), (r = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
            })) : t ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(xt, "") : null == e ? "" : e : void 0
        }
    }), S.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = S.find.attr(e, "value");
                    return null != t ? t : vt(S.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options,
                        o = e.selectedIndex,
                        a = "select-one" === e.type,
                        s = a ? null : [],
                        u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                            if (t = S(n).val(), a) return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    var n, r, i = e.options,
                        o = S.makeArray(t),
                        a = i.length;
                    while (a--)((r = i[a]).selected = -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), S.each(["radio", "checkbox"], function() {
        S.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = -1 < S.inArray(S(e).val(), t)
            }
        }, y.checkOn || (S.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), y.focusin = "onfocusin" in C;
    var bt = /^(?:focusinfocus|focusoutblur)$/,
        wt = function(e) {
            e.stopPropagation()
        };
    S.extend(S.event, {
        trigger: function(e, t, n, r) {
            var i, o, a, s, u, l, c, f, p = [n || E],
                d = v.call(e, "type") ? e.type : e,
                h = v.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !bt.test(d + S.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[S.expando] ? e : new S.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : S.makeArray(t, [e]), c = S.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !x(n)) {
                    for (s = c.delegateType || d, bt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), a = o;
                    a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C)
                }
                i = 0;
                while ((o = p[i++]) && !e.isPropagationStopped()) f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && V(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
                return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !V(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), S.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, wt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, wt), S.event.triggered = void 0, a && (n[u] = a)), e.result
            }
        },
        simulate: function(e, t, n) {
            var r = S.extend(new S.Event, n, {
                type: e,
                isSimulated: !0
            });
            S.event.trigger(r, null, t)
        }
    }), S.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                S.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return S.event.trigger(e, t, n, !0)
        }
    }), y.focusin || S.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, r) {
        var i = function(e) {
            S.event.simulate(r, e.target, S.event.fix(e))
        };
        S.event.special[r] = {
            setup: function() {
                var e = this.ownerDocument || this.document || this,
                    t = Y.access(e, r);
                t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this.document || this,
                    t = Y.access(e, r) - 1;
                t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0), Y.remove(e, r))
            }
        }
    });
    var Tt = C.location,
        Ct = {
            guid: Date.now()
        },
        Et = /\?/;
    S.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new C.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || S.error("Invalid XML: " + e), t
    };
    var St = /\[\]$/,
        kt = /\r?\n/g,
        At = /^(?:submit|button|image|reset|file)$/i,
        Nt = /^(?:input|select|textarea|keygen)/i;

    function Dt(n, e, r, i) {
        var t;
        if (Array.isArray(e)) S.each(e, function(e, t) {
            r || St.test(n) ? i(n, t) : Dt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
        });
        else if (r || "object" !== w(e)) i(n, e);
        else
            for (t in e) Dt(n + "[" + t + "]", e[t], r, i)
    }
    S.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                var n = m(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !S.isPlainObject(e)) S.each(e, function() {
            i(this.name, this.value)
        });
        else
            for (n in e) Dt(n, e[n], t, i);
        return r.join("&")
    }, S.fn.extend({
        serialize: function() {
            return S.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = S.prop(this, "elements");
                return e ? S.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !S(this).is(":disabled") && Nt.test(this.nodeName) && !At.test(e) && (this.checked || !pe.test(e))
            }).map(function(e, t) {
                var n = S(this).val();
                return null == n ? null : Array.isArray(n) ? S.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(kt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(kt, "\r\n")
                }
            }).get()
        }
    });
    var jt = /%20/g,
        qt = /#.*$/,
        Lt = /([?&])_=[^&]*/,
        Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Ot = /^(?:GET|HEAD)$/,
        Pt = /^\/\//,
        Rt = {},
        Mt = {},
        It = "*/".concat("*"),
        Wt = E.createElement("a");

    function Ft(o) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, r = 0,
                i = e.toLowerCase().match(P) || [];
            if (m(t))
                while (n = i[r++]) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }

    function Bt(t, i, o, a) {
        var s = {},
            u = t === Mt;

        function l(e) {
            var r;
            return s[e] = !0, S.each(t[e] || [], function(e, t) {
                var n = t(i, o, a);
                return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1)
            }), r
        }
        return l(i.dataTypes[0]) || !s["*"] && l("*")
    }

    function $t(e, t) {
        var n, r, i = S.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && S.extend(!0, e, r), e
    }
    Wt.href = Tt.href, S.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Tt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": It,
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
                "text xml": S.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? $t($t(e, S.ajaxSettings), t) : $t(S.ajaxSettings, e)
        },
        ajaxPrefilter: Ft(Rt),
        ajaxTransport: Ft(Mt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var c, f, p, n, d, r, h, g, i, o, v = S.ajaxSetup({}, t),
                y = v.context || v,
                m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event,
                x = S.Deferred(),
                b = S.Callbacks("once memory"),
                w = v.statusCode || {},
                a = {},
                s = {},
                u = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (h) {
                            if (!n) {
                                n = {};
                                while (t = Ht.exec(p)) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2])
                            }
                            t = n[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function() {
                        return h ? p : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == h && (v.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (h) T.always(e[T.status]);
                            else
                                for (t in e) w[t] = [w[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || u;
                        return c && c.abort(t), l(0, t), this
                    }
                };
            if (x.promise(T), v.url = ((e || v.url || Tt.href) + "").replace(Pt, Tt.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""], null == v.crossDomain) {
                r = E.createElement("a");
                try {
                    r.href = v.url, r.href = r.href, v.crossDomain = Wt.protocol + "//" + Wt.host != r.protocol + "//" + r.host
                } catch (e) {
                    v.crossDomain = !0
                }
            }
            if (v.data && v.processData && "string" != typeof v.data && (v.data = S.param(v.data, v.traditional)), Bt(Rt, v, t, T), h) return T;
            for (i in (g = S.event && v.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Ot.test(v.type), f = v.url.replace(qt, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(jt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (Et.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(Lt, "$1"), o = (Et.test(f) ? "&" : "?") + "_=" + Ct.guid++ + o), v.url = f + o), v.ifModified && (S.lastModified[f] && T.setRequestHeader("If-Modified-Since", S.lastModified[f]), S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + It + "; q=0.01" : "") : v.accepts["*"]), v.headers) T.setRequestHeader(i, v.headers[i]);
            if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();
            if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = Bt(Mt, v, t, T)) {
                if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T;
                v.async && 0 < v.timeout && (d = C.setTimeout(function() {
                    T.abort("timeout")
                }, v.timeout));
                try {
                    h = !1, c.send(a, l)
                } catch (e) {
                    if (h) throw e;
                    l(-1, e)
                }
            } else l(-1, "No Transport");

            function l(e, t, n, r) {
                var i, o, a, s, u, l = t;
                h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function(e, t, n) {
                    var r, i, o, a, s = e.contents,
                        u = e.dataTypes;
                    while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in s)
                            if (s[i] && s[i].test(r)) {
                                u.unshift(i);
                                break
                            }
                    if (u[0] in n) o = u[0];
                    else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                                o = i;
                                break
                            }
                            a || (a = i)
                        }
                        o = o || a
                    }
                    if (o) return o !== u[0] && u.unshift(o), n[o]
                }(v, T, n)), !i && -1 < S.inArray("script", v.dataTypes) && (v.converters["text script"] = function() {}), s = function(e, t, n, r) {
                    var i, o, a, s, u, l = {},
                        c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                    o = c.shift();
                    while (o)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                            if ("*" === o) o = u;
                            else if ("*" !== u && u !== o) {
                        if (!(a = l[u + " " + o] || l["* " + o]))
                            for (i in l)
                                if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                    !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                                    break
                                }
                        if (!0 !== a)
                            if (a && e["throws"]) t = a(t);
                            else try {
                                t = a(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: a ? e : "No conversion from " + u + " to " + o
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (S.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (S.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --S.active || S.event.trigger("ajaxStop")))
            }
            return T
        },
        getJSON: function(e, t, n) {
            return S.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return S.get(e, void 0, t, "script")
        }
    }), S.each(["get", "post"], function(e, i) {
        S[i] = function(e, t, n, r) {
            return m(t) && (r = r || n, n = t, t = void 0), S.ajax(S.extend({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            }, S.isPlainObject(e) && e))
        }
    }), S.ajaxPrefilter(function(e) {
        var t;
        for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    }), S._evalUrl = function(e, t, n) {
        return S.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                S.globalEval(e, t, n)
            }
        })
    }, S.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (m(e) && (e = e.call(this[0])), t = S(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(n) {
            return m(n) ? this.each(function(e) {
                S(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = S(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = m(t);
            return this.each(function(e) {
                S(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                S(this).replaceWith(this.childNodes)
            }), this
        }
    }), S.expr.pseudos.hidden = function(e) {
        return !S.expr.pseudos.visible(e)
    }, S.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, S.ajaxSettings.xhr = function() {
        try {
            return new C.XMLHttpRequest
        } catch (e) {}
    };
    var _t = {
            0: 200,
            1223: 204
        },
        zt = S.ajaxSettings.xhr();
    y.cors = !!zt && "withCredentials" in zt, y.ajax = zt = !!zt, S.ajaxTransport(function(i) {
        var o, a;
        if (y.cors || zt && !i.crossDomain) return {
            send: function(e, t) {
                var n, r = i.xhr();
                if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields)
                    for (n in i.xhrFields) r[n] = i.xhrFields[n];
                for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
                o = function(e) {
                    return function() {
                        o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(_t[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                            binary: r.response
                        } : {
                            text: r.responseText
                        }, r.getAllResponseHeaders()))
                    }
                }, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function() {
                    4 === r.readyState && C.setTimeout(function() {
                        o && a()
                    })
                }, o = o("abort");
                try {
                    r.send(i.hasContent && i.data || null)
                } catch (e) {
                    if (o) throw e
                }
            },
            abort: function() {
                o && o()
            }
        }
    }), S.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), S.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return S.globalEval(e), e
            }
        }
    }), S.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), S.ajaxTransport("script", function(n) {
        var r, i;
        if (n.crossDomain || n.scriptAttrs) return {
            send: function(e, t) {
                r = S("<script>").attr(n.scriptAttrs || {}).prop({
                    charset: n.scriptCharset,
                    src: n.url
                }).on("load error", i = function(e) {
                    r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type)
                }), E.head.appendChild(r[0])
            },
            abort: function() {
                i && i()
            }
        }
    });
    var Ut, Xt = [],
        Vt = /(=)\?(?=&|$)|\?\?/;
    S.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Xt.pop() || S.expando + "_" + Ct.guid++;
            return this[e] = !0, e
        }
    }), S.ajaxPrefilter("json jsonp", function(e, t, n) {
        var r, i, o, a = !1 !== e.jsonp && (Vt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Vt, "$1" + r) : !1 !== e.jsonp && (e.url += (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
            return o || S.error(r + " was not called"), o[0]
        }, e.dataTypes[0] = "json", i = C[r], C[r] = function() {
            o = arguments
        }, n.always(function() {
            void 0 === i ? S(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Xt.push(r)), o && m(i) && i(o[0]), o = i = void 0
        }), "script"
    }), y.createHTMLDocument = ((Ut = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ut.childNodes.length), S.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(r)) : t = E), o = !n && [], (i = N.exec(e)) ? [t.createElement(i[1])] : (i = xe([e], t, o), o && o.length && S(o).remove(), S.merge([], i.childNodes)));
        var r, i, o
    }, S.fn.load = function(e, t, n) {
        var r, i, o, a = this,
            s = e.indexOf(" ");
        return -1 < s && (r = vt(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && S.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, S.expr.pseudos.animated = function(t) {
        return S.grep(S.timers, function(e) {
            return t === e.elem
        }).length
    }, S.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l = S.css(e, "position"),
                c = S(e),
                f = {};
            "static" === l && (e.style.position = "relative"), s = c.offset(), o = S.css(e, "top"), u = S.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, S.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : ("number" == typeof f.top && (f.top += "px"), "number" == typeof f.left && (f.left += "px"), c.css(f))
        }
    }, S.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                S.offset.setOffset(this, t, e)
            });
            var e, n, r = this[0];
            return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect();
                else {
                    t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
                    while (e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position")) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0), i.left += S.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - S.css(r, "marginTop", !0),
                    left: t.left - i.left - S.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent;
                while (e && "static" === S.css(e, "position")) e = e.offsetParent;
                return e || re
            })
        }
    }), S.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var o = "pageYOffset" === i;
        S.fn[t] = function(e) {
            return $(this, function(e, t, n) {
                var r;
                if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
                r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }), S.each(["top", "left"], function(e, n) {
        S.cssHooks[n] = $e(y.pixelPosition, function(e, t) {
            if (t) return t = Be(e, n), Me.test(t) ? S(e).position()[n] + "px" : t
        })
    }), S.each({
        Height: "height",
        Width: "width"
    }, function(a, s) {
        S.each({
            padding: "inner" + a,
            content: s,
            "": "outer" + a
        }, function(r, o) {
            S.fn[o] = function(e, t) {
                var n = arguments.length && (r || "boolean" != typeof e),
                    i = r || (!0 === e || !0 === t ? "margin" : "border");
                return $(this, function(e, t, n) {
                    var r;
                    return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? S.css(e, t, i) : S.style(e, t, n, i)
                }, s, n ? e : void 0, n)
            }
        })
    }), S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        S.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), S.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        S.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    });
    var Gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    S.proxy = function(e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function() {
            return e.apply(t || this, r.concat(s.call(arguments)))
        }).guid = e.guid = e.guid || S.guid++, i
    }, S.holdReady = function(e) {
        e ? S.readyWait++ : S.ready(!0)
    }, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = A, S.isFunction = m, S.isWindow = x, S.camelCase = X, S.type = w, S.now = Date.now, S.isNumeric = function(e) {
        var t = S.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, S.trim = function(e) {
        return null == e ? "" : (e + "").replace(Gt, "")
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return S
    });
    var Yt = C.jQuery,
        Qt = C.$;
    return S.noConflict = function(e) {
        return C.$ === S && (C.$ = Qt), e && C.jQuery === S && (C.jQuery = Yt), S
    }, "undefined" == typeof e && (C.jQuery = C.$ = S), S
});;
/*!
 * jQuery Once v2.2.3 - http://github.com/robloach/jquery-once
 * @license MIT, GPL-2.0
 * http://opensource.org/licenses/MIT
 * http://opensource.org/licenses/GPL-2.0
 */
(function(e) {
    "use strict";
    if (typeof exports === "object" && typeof exports.nodeName !== "string") {
        e(require("jquery"))
    } else if (typeof define === "function" && define.amd) {
        define(["jquery"], e)
    } else {
        e(jQuery)
    }
})(function(t) {
    "use strict";
    var r = function(e) {
        e = e || "once";
        if (typeof e !== "string") {
            throw new TypeError("The jQuery Once id parameter must be a string")
        }
        return e
    };
    t.fn.once = function(e) {
        var n = "jquery-once-" + r(e);
        return this.filter(function() {
            return t(this).data(n) !== true
        }).data(n, true)
    };
    t.fn.removeOnce = function(e) {
        return this.findOnce(e).removeData("jquery-once-" + r(e))
    };
    t.fn.findOnce = function(e) {
        var n = "jquery-once-" + r(e);
        return this.filter(function() {
            return t(this).data(n) === true
        })
    }
});
(function() {
    var settingsElement = document.querySelector('head > script[type="application/json"][data-drupal-selector="json"], body > script[type="application/json"][data-drupal-selector="json"]');
    window.drupalSettings = {};
    if (settingsElement !== null) {
        window.drupalSettings = JSON.parse(settingsElement.textContent);
    }
})();;
window.Drupal = {
    behaviors: {},
    locale: {}
};
(function(Drupal, drupalSettings, drupalTranslations, console, Proxy, Reflect) {
    Drupal.throwError = function(error) {
        setTimeout(function() {
            throw error;
        }, 0);
    };
    Drupal.attachBehaviors = function(context, settings) {
        context = context || document;
        settings = settings || drupalSettings;
        var behaviors = Drupal.behaviors;
        Object.keys(behaviors || {}).forEach(function(i) {
            if (typeof behaviors[i].attach === 'function') {
                try {
                    behaviors[i].attach(context, settings);
                } catch (e) {
                    Drupal.throwError(e);
                }
            }
        });
    };
    Drupal.detachBehaviors = function(context, settings, trigger) {
        context = context || document;
        settings = settings || drupalSettings;
        trigger = trigger || 'unload';
        var behaviors = Drupal.behaviors;
        Object.keys(behaviors || {}).forEach(function(i) {
            if (typeof behaviors[i].detach === 'function') {
                try {
                    behaviors[i].detach(context, settings, trigger);
                } catch (e) {
                    Drupal.throwError(e);
                }
            }
        });
    };
    Drupal.checkPlain = function(str) {
        str = str.toString().replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
        return str;
    };
    Drupal.formatString = function(str, args) {
        var processedArgs = {};
        Object.keys(args || {}).forEach(function(key) {
            switch (key.charAt(0)) {
                case '@':
                    processedArgs[key] = Drupal.checkPlain(args[key]);
                    break;
                case '!':
                    processedArgs[key] = args[key];
                    break;
                default:
                    processedArgs[key] = Drupal.theme('placeholder', args[key]);
                    break;
            }
        });
        return Drupal.stringReplace(str, processedArgs, null);
    };
    Drupal.stringReplace = function(str, args, keys) {
        if (str.length === 0) {
            return str;
        }
        if (!Array.isArray(keys)) {
            keys = Object.keys(args || {});
            keys.sort(function(a, b) {
                return a.length - b.length;
            });
        }
        if (keys.length === 0) {
            return str;
        }
        var key = keys.pop();
        var fragments = str.split(key);
        if (keys.length) {
            for (var i = 0; i < fragments.length; i++) {
                fragments[i] = Drupal.stringReplace(fragments[i], args, keys.slice(0));
            }
        }
        return fragments.join(args[key]);
    };
    Drupal.t = function(str, args, options) {
        options = options || {};
        options.context = options.context || '';
        if (typeof drupalTranslations !== 'undefined' && drupalTranslations.strings && drupalTranslations.strings[options.context] && drupalTranslations.strings[options.context][str]) {
            str = drupalTranslations.strings[options.context][str];
        }
        if (args) {
            str = Drupal.formatString(str, args);
        }
        return str;
    };
    Drupal.url = function(path) {
        return drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + path;
    };
    Drupal.url.toAbsolute = function(url) {
        var urlParsingNode = document.createElement('a');
        try {
            url = decodeURIComponent(url);
        } catch (e) {}
        urlParsingNode.setAttribute('href', url);
        return urlParsingNode.cloneNode(false).href;
    };
    Drupal.url.isLocal = function(url) {
        var absoluteUrl = Drupal.url.toAbsolute(url);
        var protocol = window.location.protocol;
        if (protocol === 'http:' && absoluteUrl.indexOf('https:') === 0) {
            protocol = 'https:';
        }
        var baseUrl = protocol + '//' + window.location.host + drupalSettings.path.baseUrl.slice(0, -1);
        try {
            absoluteUrl = decodeURIComponent(absoluteUrl);
        } catch (e) {}
        try {
            baseUrl = decodeURIComponent(baseUrl);
        } catch (e) {}
        return absoluteUrl === baseUrl || absoluteUrl.indexOf(baseUrl + '/') === 0;
    };
    Drupal.formatPlural = function(count, singular, plural, args, options) {
        args = args || {};
        args['@count'] = count;
        var pluralDelimiter = drupalSettings.pluralDelimiter;
        var translations = Drupal.t(singular + pluralDelimiter + plural, args, options).split(pluralDelimiter);
        var index = 0;
        if (typeof drupalTranslations !== 'undefined' && drupalTranslations.pluralFormula) {
            index = count in drupalTranslations.pluralFormula ? drupalTranslations.pluralFormula[count] : drupalTranslations.pluralFormula.default;
        } else if (args['@count'] !== 1) {
            index = 1;
        }
        return translations[index];
    };
    Drupal.encodePath = function(item) {
        return window.encodeURIComponent(item).replace(/%2F/g, '/');
    };
    Drupal.deprecationError = function(_ref) {
        var message = _ref.message;
        if (drupalSettings.suppressDeprecationErrors === false && typeof console !== 'undefined' && console.warn) {
            console.warn('[Deprecation] ' + message);
        }
    };
    Drupal.deprecatedProperty = function(_ref2) {
        var target = _ref2.target,
            deprecatedProperty = _ref2.deprecatedProperty,
            message = _ref2.message;
        if (!Proxy || !Reflect) {
            return target;
        }
        return new Proxy(target, {
            get: function get(target, key) {
                for (var _len = arguments.length, rest = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
                    rest[_key - 2] = arguments[_key];
                }
                if (key === deprecatedProperty) {
                    Drupal.deprecationError({
                        message: message
                    });
                }
                return Reflect.get.apply(Reflect, [target, key].concat(rest));
            }
        });
    };
    Drupal.theme = function(func) {
        if (func in Drupal.theme) {
            var _Drupal$theme;
            for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
            }
            return (_Drupal$theme = Drupal.theme)[func].apply(_Drupal$theme, args);
        }
    };
    Drupal.theme.placeholder = function(str) {
        return '<em class="placeholder">' + Drupal.checkPlain(str) + '</em>';
    };
})(Drupal, window.drupalSettings, window.drupalTranslations, window.console, window.Proxy, window.Reflect);;
if (window.jQuery) {
    jQuery.noConflict();
}
document.documentElement.className += ' js';
(function(Drupal, drupalSettings) {
    var domReady = function domReady(callback) {
        if (document.readyState !== 'loading') {
            callback();
        } else {
            var listener = function listener() {
                callback();
                document.removeEventListener('DOMContentLoaded', listener);
            };
            document.addEventListener('DOMContentLoaded', listener);
        }
    };
    domReady(function() {
        Drupal.attachBehaviors(document, drupalSettings);
    });
})(Drupal, window.drupalSettings);;
/*! picturefill - v3.0.2 - 2016-02-12
 * https://scottjehl.github.io/picturefill/
 * Copyright (c) 2016 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT
 */
! function(a) {
    var b = navigator.userAgent;
    a.HTMLPictureElement && /ecko/.test(b) && b.match(/rv\:(\d+)/) && RegExp.$1 < 45 && addEventListener("resize", function() {
        var b, c = document.createElement("source"),
            d = function(a) {
                var b, d, e = a.parentNode;
                "PICTURE" === e.nodeName.toUpperCase() ? (b = c.cloneNode(), e.insertBefore(b, e.firstElementChild), setTimeout(function() {
                    e.removeChild(b)
                })) : (!a._pfLastSize || a.offsetWidth > a._pfLastSize) && (a._pfLastSize = a.offsetWidth, d = a.sizes, a.sizes += ",100vw", setTimeout(function() {
                    a.sizes = d
                }))
            },
            e = function() {
                var a, b = document.querySelectorAll("picture > img, img[srcset][sizes]");
                for (a = 0; a < b.length; a++) d(b[a])
            },
            f = function() {
                clearTimeout(b), b = setTimeout(e, 99)
            },
            g = a.matchMedia && matchMedia("(orientation: landscape)"),
            h = function() {
                f(), g && g.addListener && g.addListener(f)
            };
        return c.srcset = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", /^[c|i]|d$/.test(document.readyState || "") ? h() : document.addEventListener("DOMContentLoaded", h), f
    }())
}(window),
function(a, b, c) {
    "use strict";

    function d(a) {
        return " " === a || "	" === a || "\n" === a || "\f" === a || "\r" === a
    }

    function e(b, c) {
        var d = new a.Image;
        return d.onerror = function() {
            A[b] = !1, ba()
        }, d.onload = function() {
            A[b] = 1 === d.width, ba()
        }, d.src = c, "pending"
    }

    function f() {
        M = !1, P = a.devicePixelRatio, N = {}, O = {}, s.DPR = P || 1, Q.width = Math.max(a.innerWidth || 0, z.clientWidth), Q.height = Math.max(a.innerHeight || 0, z.clientHeight), Q.vw = Q.width / 100, Q.vh = Q.height / 100, r = [Q.height, Q.width, P].join("-"), Q.em = s.getEmValue(), Q.rem = Q.em
    }

    function g(a, b, c, d) {
        var e, f, g, h;
        return "saveData" === B.algorithm ? a > 2.7 ? h = c + 1 : (f = b - c, e = Math.pow(a - .6, 1.5), g = f * e, d && (g += .1 * e), h = a + g) : h = c > 1 ? Math.sqrt(a * b) : a, h > c
    }

    function h(a) {
        var b, c = s.getSet(a),
            d = !1;
        "pending" !== c && (d = r, c && (b = s.setRes(c), s.applySetCandidate(b, a))), a[s.ns].evaled = d
    }

    function i(a, b) {
        return a.res - b.res
    }

    function j(a, b, c) {
        var d;
        return !c && b && (c = a[s.ns].sets, c = c && c[c.length - 1]), d = k(b, c), d && (b = s.makeUrl(b), a[s.ns].curSrc = b, a[s.ns].curCan = d, d.res || aa(d, d.set.sizes)), d
    }

    function k(a, b) {
        var c, d, e;
        if (a && b)
            for (e = s.parseSet(b), a = s.makeUrl(a), c = 0; c < e.length; c++)
                if (a === s.makeUrl(e[c].url)) {
                    d = e[c];
                    break
                }
        return d
    }

    function l(a, b) {
        var c, d, e, f, g = a.getElementsByTagName("source");
        for (c = 0, d = g.length; d > c; c++) e = g[c], e[s.ns] = !0, f = e.getAttribute("srcset"), f && b.push({
            srcset: f,
            media: e.getAttribute("media"),
            type: e.getAttribute("type"),
            sizes: e.getAttribute("sizes")
        })
    }

    function m(a, b) {
        function c(b) {
            var c, d = b.exec(a.substring(m));
            return d ? (c = d[0], m += c.length, c) : void 0
        }

        function e() {
            var a, c, d, e, f, i, j, k, l, m = !1,
                o = {};
            for (e = 0; e < h.length; e++) f = h[e], i = f[f.length - 1], j = f.substring(0, f.length - 1), k = parseInt(j, 10), l = parseFloat(j), X.test(j) && "w" === i ? ((a || c) && (m = !0), 0 === k ? m = !0 : a = k) : Y.test(j) && "x" === i ? ((a || c || d) && (m = !0), 0 > l ? m = !0 : c = l) : X.test(j) && "h" === i ? ((d || c) && (m = !0), 0 === k ? m = !0 : d = k) : m = !0;
            m || (o.url = g, a && (o.w = a), c && (o.d = c), d && (o.h = d), d || c || a || (o.d = 1), 1 === o.d && (b.has1x = !0), o.set = b, n.push(o))
        }

        function f() {
            for (c(T), i = "", j = "in descriptor";;) {
                if (k = a.charAt(m), "in descriptor" === j)
                    if (d(k)) i && (h.push(i), i = "", j = "after descriptor");
                    else {
                        if ("," === k) return m += 1, i && h.push(i), void e();
                        if ("(" === k) i += k, j = "in parens";
                        else {
                            if ("" === k) return i && h.push(i), void e();
                            i += k
                        }
                    }
                else if ("in parens" === j)
                    if (")" === k) i += k, j = "in descriptor";
                    else {
                        if ("" === k) return h.push(i), void e();
                        i += k
                    }
                else if ("after descriptor" === j)
                    if (d(k));
                    else {
                        if ("" === k) return void e();
                        j = "in descriptor", m -= 1
                    }
                m += 1
            }
        }
        for (var g, h, i, j, k, l = a.length, m = 0, n = [];;) {
            if (c(U), m >= l) return n;
            g = c(V), h = [], "," === g.slice(-1) ? (g = g.replace(W, ""), e()) : f()
        }
    }

    function n(a) {
        function b(a) {
            function b() {
                f && (g.push(f), f = "")
            }

            function c() {
                g[0] && (h.push(g), g = [])
            }
            for (var e, f = "", g = [], h = [], i = 0, j = 0, k = !1;;) {
                if (e = a.charAt(j), "" === e) return b(), c(), h;
                if (k) {
                    if ("*" === e && "/" === a[j + 1]) {
                        k = !1, j += 2, b();
                        continue
                    }
                    j += 1
                } else {
                    if (d(e)) {
                        if (a.charAt(j - 1) && d(a.charAt(j - 1)) || !f) {
                            j += 1;
                            continue
                        }
                        if (0 === i) {
                            b(), j += 1;
                            continue
                        }
                        e = " "
                    } else if ("(" === e) i += 1;
                    else if (")" === e) i -= 1;
                    else {
                        if ("," === e) {
                            b(), c(), j += 1;
                            continue
                        }
                        if ("/" === e && "*" === a.charAt(j + 1)) {
                            k = !0, j += 2;
                            continue
                        }
                    }
                    f += e, j += 1
                }
            }
        }

        function c(a) {
            return k.test(a) && parseFloat(a) >= 0 ? !0 : l.test(a) ? !0 : "0" === a || "-0" === a || "+0" === a ? !0 : !1
        }
        var e, f, g, h, i, j, k = /^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,
            l = /^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;
        for (f = b(a), g = f.length, e = 0; g > e; e++)
            if (h = f[e], i = h[h.length - 1], c(i)) {
                if (j = i, h.pop(), 0 === h.length) return j;
                if (h = h.join(" "), s.matchesMedia(h)) return j
            }
        return "100vw"
    }
    b.createElement("picture");
    var o, p, q, r, s = {},
        t = !1,
        u = function() {},
        v = b.createElement("img"),
        w = v.getAttribute,
        x = v.setAttribute,
        y = v.removeAttribute,
        z = b.documentElement,
        A = {},
        B = {
            algorithm: ""
        },
        C = "data-pfsrc",
        D = C + "set",
        E = navigator.userAgent,
        F = /rident/.test(E) || /ecko/.test(E) && E.match(/rv\:(\d+)/) && RegExp.$1 > 35,
        G = "currentSrc",
        H = /\s+\+?\d+(e\d+)?w/,
        I = /(\([^)]+\))?\s*(.+)/,
        J = a.picturefillCFG,
        K = "position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",
        L = "font-size:100%!important;",
        M = !0,
        N = {},
        O = {},
        P = a.devicePixelRatio,
        Q = {
            px: 1,
            "in": 96
        },
        R = b.createElement("a"),
        S = !1,
        T = /^[ \t\n\r\u000c]+/,
        U = /^[, \t\n\r\u000c]+/,
        V = /^[^ \t\n\r\u000c]+/,
        W = /[,]+$/,
        X = /^\d+$/,
        Y = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,
        Z = function(a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, d || !1) : a.attachEvent && a.attachEvent("on" + b, c)
        },
        $ = function(a) {
            var b = {};
            return function(c) {
                return c in b || (b[c] = a(c)), b[c]
            }
        },
        _ = function() {
            var a = /^([\d\.]+)(em|vw|px)$/,
                b = function() {
                    for (var a = arguments, b = 0, c = a[0]; ++b in a;) c = c.replace(a[b], a[++b]);
                    return c
                },
                c = $(function(a) {
                    return "return " + b((a || "").toLowerCase(), /\band\b/g, "&&", /,/g, "||", /min-([a-z-\s]+):/g, "e.$1>=", /max-([a-z-\s]+):/g, "e.$1_3C=", /calc([^)]+)/g, "($1)", /(\d+[\.]*[\d]*)([a-z]+)/g, "($1 * e.$2)", /^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi, "") + ";"
                });
            return function(b, d) {
                var e;
                if (!(b in N))
                    if (N[b] = !1, d && (e = b.match(a))) N[b] = e[1] * Q[e[2]];
                    else try {
                        N[b] = new Function("e", c(b))(Q)
                    } catch (f) {}
                return N[b]
            }
        }(),
        aa = function(a, b) {
            return a.w ? (a.cWidth = s.calcListLength(b || "100vw"), a.res = a.w / a.cWidth) : a.res = a.d, a
        },
        ba = function(a) {
            if (t) {
                var c, d, e, f = a || {};
                if (f.elements && 1 === f.elements.nodeType && ("IMG" === f.elements.nodeName.toUpperCase() ? f.elements = [f.elements] : (f.context = f.elements, f.elements = null)), c = f.elements || s.qsa(f.context || b, f.reevaluate || f.reselect ? s.sel : s.selShort), e = c.length) {
                    for (s.setupRun(f), S = !0, d = 0; e > d; d++) s.fillImg(c[d], f);
                    s.teardownRun(f)
                }
            }
        };
    o = a.console && console.warn ? function(a) {
        console.warn(a)
    } : u, G in v || (G = "src"), A["image/jpeg"] = !0, A["image/gif"] = !0, A["image/png"] = !0, A["image/svg+xml"] = b.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1"), s.ns = ("pf" + (new Date).getTime()).substr(0, 9), s.supSrcset = "srcset" in v, s.supSizes = "sizes" in v, s.supPicture = !!a.HTMLPictureElement, s.supSrcset && s.supPicture && !s.supSizes && ! function(a) {
        v.srcset = "data:,a", a.src = "data:,a", s.supSrcset = v.complete === a.complete, s.supPicture = s.supSrcset && s.supPicture
    }(b.createElement("img")), s.supSrcset && !s.supSizes ? ! function() {
        var a = "data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==",
            c = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
            d = b.createElement("img"),
            e = function() {
                var a = d.width;
                2 === a && (s.supSizes = !0), q = s.supSrcset && !s.supSizes, t = !0, setTimeout(ba)
            };
        d.onload = e, d.onerror = e, d.setAttribute("sizes", "9px"), d.srcset = c + " 1w," + a + " 9w", d.src = c
    }() : t = !0, s.selShort = "picture>img,img[srcset]", s.sel = s.selShort, s.cfg = B, s.DPR = P || 1, s.u = Q, s.types = A, s.setSize = u, s.makeUrl = $(function(a) {
        return R.href = a, R.href
    }), s.qsa = function(a, b) {
        return "querySelector" in a ? a.querySelectorAll(b) : []
    }, s.matchesMedia = function() {
        return a.matchMedia && (matchMedia("(min-width: 0.1em)") || {}).matches ? s.matchesMedia = function(a) {
            return !a || matchMedia(a).matches
        } : s.matchesMedia = s.mMQ, s.matchesMedia.apply(this, arguments)
    }, s.mMQ = function(a) {
        return a ? _(a) : !0
    }, s.calcLength = function(a) {
        var b = _(a, !0) || !1;
        return 0 > b && (b = !1), b
    }, s.supportsType = function(a) {
        return a ? A[a] : !0
    }, s.parseSize = $(function(a) {
        var b = (a || "").match(I);
        return {
            media: b && b[1],
            length: b && b[2]
        }
    }), s.parseSet = function(a) {
        return a.cands || (a.cands = m(a.srcset, a)), a.cands
    }, s.getEmValue = function() {
        var a;
        if (!p && (a = b.body)) {
            var c = b.createElement("div"),
                d = z.style.cssText,
                e = a.style.cssText;
            c.style.cssText = K, z.style.cssText = L, a.style.cssText = L, a.appendChild(c), p = c.offsetWidth, a.removeChild(c), p = parseFloat(p, 10), z.style.cssText = d, a.style.cssText = e
        }
        return p || 16
    }, s.calcListLength = function(a) {
        if (!(a in O) || B.uT) {
            var b = s.calcLength(n(a));
            O[a] = b ? b : Q.width
        }
        return O[a]
    }, s.setRes = function(a) {
        var b;
        if (a) {
            b = s.parseSet(a);
            for (var c = 0, d = b.length; d > c; c++) aa(b[c], a.sizes)
        }
        return b
    }, s.setRes.res = aa, s.applySetCandidate = function(a, b) {
        if (a.length) {
            var c, d, e, f, h, k, l, m, n, o = b[s.ns],
                p = s.DPR;
            if (k = o.curSrc || b[G], l = o.curCan || j(b, k, a[0].set), l && l.set === a[0].set && (n = F && !b.complete && l.res - .1 > p, n || (l.cached = !0, l.res >= p && (h = l))), !h)
                for (a.sort(i), f = a.length, h = a[f - 1], d = 0; f > d; d++)
                    if (c = a[d], c.res >= p) {
                        e = d - 1, h = a[e] && (n || k !== s.makeUrl(c.url)) && g(a[e].res, c.res, p, a[e].cached) ? a[e] : c;
                        break
                    }
            h && (m = s.makeUrl(h.url), o.curSrc = m, o.curCan = h, m !== k && s.setSrc(b, h), s.setSize(b))
        }
    }, s.setSrc = function(a, b) {
        var c;
        a.src = b.url, "image/svg+xml" === b.set.type && (c = a.style.width, a.style.width = a.offsetWidth + 1 + "px", a.offsetWidth + 1 && (a.style.width = c))
    }, s.getSet = function(a) {
        var b, c, d, e = !1,
            f = a[s.ns].sets;
        for (b = 0; b < f.length && !e; b++)
            if (c = f[b], c.srcset && s.matchesMedia(c.media) && (d = s.supportsType(c.type))) {
                "pending" === d && (c = d), e = c;
                break
            }
        return e
    }, s.parseSets = function(a, b, d) {
        var e, f, g, h, i = b && "PICTURE" === b.nodeName.toUpperCase(),
            j = a[s.ns];
        (j.src === c || d.src) && (j.src = w.call(a, "src"), j.src ? x.call(a, C, j.src) : y.call(a, C)), (j.srcset === c || d.srcset || !s.supSrcset || a.srcset) && (e = w.call(a, "srcset"), j.srcset = e, h = !0), j.sets = [], i && (j.pic = !0, l(b, j.sets)), j.srcset ? (f = {
            srcset: j.srcset,
            sizes: w.call(a, "sizes")
        }, j.sets.push(f), g = (q || j.src) && H.test(j.srcset || ""), g || !j.src || k(j.src, f) || f.has1x || (f.srcset += ", " + j.src, f.cands.push({
            url: j.src,
            d: 1,
            set: f
        }))) : j.src && j.sets.push({
            srcset: j.src,
            sizes: null
        }), j.curCan = null, j.curSrc = c, j.supported = !(i || f && !s.supSrcset || g && !s.supSizes), h && s.supSrcset && !j.supported && (e ? (x.call(a, D, e), a.srcset = "") : y.call(a, D)), j.supported && !j.srcset && (!j.src && a.src || a.src !== s.makeUrl(j.src)) && (null === j.src ? a.removeAttribute("src") : a.src = j.src), j.parsed = !0
    }, s.fillImg = function(a, b) {
        var c, d = b.reselect || b.reevaluate;
        a[s.ns] || (a[s.ns] = {}), c = a[s.ns], (d || c.evaled !== r) && ((!c.parsed || b.reevaluate) && s.parseSets(a, a.parentNode, b), c.supported ? c.evaled = r : h(a))
    }, s.setupRun = function() {
        (!S || M || P !== a.devicePixelRatio) && f()
    }, s.supPicture ? (ba = u, s.fillImg = u) : ! function() {
        var c, d = a.attachEvent ? /d$|^c/ : /d$|^c|^i/,
            e = function() {
                var a = b.readyState || "";
                f = setTimeout(e, "loading" === a ? 200 : 999), b.body && (s.fillImgs(), c = c || d.test(a), c && clearTimeout(f))
            },
            f = setTimeout(e, b.body ? 9 : 99),
            g = function(a, b) {
                var c, d, e = function() {
                    var f = new Date - d;
                    b > f ? c = setTimeout(e, b - f) : (c = null, a())
                };
                return function() {
                    d = new Date, c || (c = setTimeout(e, b))
                }
            },
            h = z.clientHeight,
            i = function() {
                M = Math.max(a.innerWidth || 0, z.clientWidth) !== Q.width || z.clientHeight !== h, h = z.clientHeight, M && s.fillImgs()
            };
        Z(a, "resize", g(i, 99)), Z(b, "readystatechange", e)
    }(), s.picturefill = ba, s.fillImgs = ba, s.teardownRun = u, ba._ = s, a.picturefillCFG = {
        pf: s,
        push: function(a) {
            var b = a.shift();
            "function" == typeof s[b] ? s[b].apply(s, a) : (B[b] = a[0], S && s.fillImgs({
                reselect: !0
            }))
        }
    };
    for (; J && J.length;) a.picturefillCFG.push(J.shift());
    a.picturefill = ba, "object" == typeof module && "object" == typeof module.exports ? module.exports = ba : "function" == typeof define && define.amd && define("picturefill", function() {
        return ba
    }), s.supPicture || (A["image/webp"] = e("image/webp", "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="))
}(window, document);;
"use strict";
window.mobilecheck = function() {
    var i, a = !1;
    return i = navigator.userAgent || navigator.vendor || window.opera, (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(i) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(i.substr(0, 4))) && (a = !0), a
};;
"use strict";
! function() {
    ! function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ".popup-trigger",
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "hidden",
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "popup-shadow",
            o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "popup-close",
            r = document.querySelectorAll(t),
            c = document.querySelectorAll("." + n);

        function i(t, e) {
            return t.classList.contains(e)
        }
        Array.prototype.forEach.call(r, function(t) {
            t.addEventListener("click", function(t) {
                t.preventDefault,
                    function(t) {
                        var n, o = t.getAttribute("href").slice(1),
                            r = document.getElementById(o);
                        r && (n = e, r.classList.remove(n))
                    }(t.target)
            })
        });
        var u, a, l, s = (u = function(t) {
            (i(t.target, n) || i(t.target, o)) && (t.preventDefault, Array.prototype.forEach.call(c, function(t) {
                var n;
                n = e, t.classList.add(n)
            }))
        }, a = 300, function() {
            var t = this,
                e = arguments;
            clearTimeout(l), l = setTimeout(function() {
                return u.apply(t, e)
            }, a)
        });
        document.addEventListener("click", s)
    }()
}();;
"use strict";

function _createForOfIteratorHelper(t, e) {
    var r;
    if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
        if (Array.isArray(t) || (r = _unsupportedIterableToArray(t)) || e && t && "number" == typeof t.length) {
            r && (t = r);
            var n = 0,
                o = function() {};
            return {
                s: o,
                n: function() {
                    return n >= t.length ? {
                        done: !0
                    } : {
                        done: !1,
                        value: t[n++]
                    }
                },
                e: function(t) {
                    throw t
                },
                f: o
            }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
    var a, i = !0,
        c = !1;
    return {
        s: function() {
            r = t[Symbol.iterator]()
        },
        n: function() {
            var t = r.next();
            return i = t.done, t
        },
        e: function(t) {
            c = !0, a = t
        },
        f: function() {
            try {
                i || null == r.return || r.return()
            } finally {
                if (c) throw a
            }
        }
    }
}

function _unsupportedIterableToArray(t, e) {
    if (t) {
        if ("string" == typeof t) return _arrayLikeToArray(t, e);
        var r = Object.prototype.toString.call(t).slice(8, -1);
        return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? _arrayLikeToArray(t, e) : void 0
    }
}

function _arrayLikeToArray(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
    return n
}! function() {
    var t = "SG_NOTIFICATION",
        e = document.querySelectorAll('[data-role="notification"]');
    if (0 !== e.length) {
        var r, n, o, a, i = document.querySelector(".notification-block--fixed"),
            c = document.querySelectorAll(".notification"),
            u = (r = function() {
                f()
            }, n = 20, function() {
                var t = this,
                    e = arguments,
                    i = o && !a;
                clearTimeout(a), a = setTimeout(function() {
                    a = null, o || r.apply(t, e)
                }, n), i && r.apply(t, e)
            });
        window.addEventListener("resize", u), Array.prototype.forEach.call(e, function(t) {
            ! function(t) {
                var e = t.dataset.key || null;
                if (!e || function(t) {
                        return function(t) {
                            return y().hasOwnProperty(t)
                        }(t)
                    }(e)) return;
                (function(t) {
                    t.classList.remove("hidden")
                })(t), t.addEventListener("click", function(r) {
                    var n = r.target;
                    "SPAN" === n.tagName && (n = n.parentElement), "accept" === n.dataset.action && (! function(t) {
                        t.classList.add("hidden")
                    }(t), l(e))
                })
            }(t), f()
        });
        var l = function(e) {
            var r = y();
            r[e] = !0,
                function(e) {
                    window.localStorage.setItem(t, JSON.stringify(e))
                }(r)
        }
    }

    function f() {
        var t, e = 24 + 12 * (c.length - 1),
            r = _createForOfIteratorHelper(c);
        try {
            for (r.s(); !(t = r.n()).done;) {
                e += t.value.offsetWidth
            }
        } catch (t) {
            r.e(t)
        } finally {
            r.f()
        }
        "column" === i.style.flexDirection ? document.body.offsetWidth > e && (i.style.flexDirection = "row") : c[0].offsetHeight > 62 && (i.style.flexDirection = "column")
    }

    function y() {
        try {
            return JSON.parse(window.localStorage.getItem(t)) || {}
        } catch (t) {
            return {}
        }
    }
}();;
"use strict";
! function(e) {
    var n = document.querySelectorAll(e),
        t = "js-hover",
        o = document.querySelectorAll(".nav-submenu"),
        c = document.querySelector(".header-nav");

    function r(e) {
        return u(), e.classList.add(t), e.parentNode.closest("ul").classList.add(t), e.parentNode.classList.add("active"), e.parentNode.parentNode.closest("li") && e.parentNode.parentNode.closest("li").classList.add("active"), e
    }

    function s(e) {
        return e.classList.contains(t) ? function(e) {
            e.classList.remove(t), e.parentNode.classList.remove("active")
        }(e) : r(e), e
    }

    function d(e, n) {
        var t = e.currentTarget.nextElementSibling;
        return t ? n(t) : null
    }

    function a() {
        l = window.innerWidth
    }
    var i = !1,
        l = window.innerWidth;

    function u() {
        Array.prototype.forEach.call(o, function(e) {
            e.classList.remove(t), e.parentNode.classList.remove("active")
        })
    }
    window.addEventListener("resize", function() {
        clearTimeout(i), i = setTimeout(a, 100)
    }), Array.prototype.forEach.call(n, function(e) {
        e.addEventListener("mouseenter", function(e) {
            l > 1199 && (u(), d(e, r))
        }), e.addEventListener("click", function(e) {
            d(e, s)
        })
    }), c.addEventListener("mouseleave", function(e) {
        l > 1199 && u()
    })
}(".menu_level-0>a"),
function() {
    document.querySelector(".nav-trigger").addEventListener("click", function(e) {
        document.body.classList.toggle("js-menu-is-open")
    });
    var e = document.querySelector(".header");
    window.headerTopScroll = e.offsetTop || 50, document.addEventListener("scroll", function(e) {})
}(), window.addEventListener("DOMContentLoaded", function(e) {
    var n = new URLSearchParams(window.location.search);
    (n.has("aff_id") || n.has("cxd")) && document.querySelector(".menu-item__download").classList.add("hidden")
});;
"use strict";
window.getMobileOperatingSystem = function() {
        var e = navigator.userAgent || navigator.vendor || window.opera;
        return "huawei" == navigator.userAgent.toLowerCase().match(/huawei/i) || "honor" == navigator.userAgent.toLowerCase().match(/huawei/i) ? "huawei" : /windows phone/i.test(e) ? "Windows Phone" : /android/i.test(e) ? "Android" : /iPad|iPhone|iPod|Macintosh/.test(e) && !window.MSStream ? "iOS" : "unknown"
    },
    function() {
        var e = window.getMobileOperatingSystem,
            t = document.querySelectorAll('[data-role="app-btn"]'),
            i = e();
        if (t.length && ("iOS" === i || "Android" === i || "huawei" === i))
            for (var n = 0; n < t.length; n++) t[n].dataset.platform !== i ? t[n].classList.add("hidden") : t[n].classList.remove("hidden")
    }();;
"use strict";
! function() {
    ! function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '[data-role="collapse"]',
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 120,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "collapse",
            a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "opened",
            o = document.querySelectorAll(t);

        function l(t, e) {
            Array.prototype.forEach.call(t, e)
        }

        function r(t, e) {
            t.classList.remove(e)
        }

        function c(t, e) {
            t.classList.toggle(e)
        }

        function i(t, e) {
            return t.classList.contains(e)
        }

        function s(t, e) {
            var s, u, d;
            "true" === t.dataset.collapseAllOthers && (s = t, l(o, function(t) {
                if (t.dataset.target !== s.dataset.target) {
                    var e = document.querySelectorAll("".concat(t.dataset.target));
                    r(t, a), 0 !== e.length && l(e, function(t) {
                        var e;
                        e = n, t.classList.add(e)
                    })
                }
            })), 0 !== e.length && (i(t, a) && (u = e, d = function(t) {
                return i(t, n)
            }, Array.prototype.slice.call(u).some(d)) ? r(t, a) : (c(t, a), l(e, function(t) {
                c(t, n)
            })))
        }
        0 !== o.length && document.addEventListener("click", function(t) {
            var n;
            if ("collapse" === t.target.dataset.role) n = t.target;
            else {
                if ("collapse" !== t.target.parentElement.dataset.role) return;
                n = t.target.parentElement
            }
            if ("A" !== t.target.tagName && "true" !== n.dataset.notCollapsible && n) {
                var a = document.querySelectorAll("".concat(n.dataset.target));
                s(n, a), "true" === n.dataset.autoscroll && function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                        n = null,
                        a = null;
                    ! function o() {
                        a++, n = requestAnimationFrame(o), a >= e && (t(), cancelAnimationFrame(n))
                    }()
                }(function() {
                    var t, n;
                    t = a[0], n = e, t && (t.getBoundingClientRect().top + t.offsetHeight > window.innerHeight || t.getBoundingClientRect().top < n) && window.scrollTo({
                        top: t.getBoundingClientRect().top + window.pageYOffset - n
                    })
                })
            }
        })
    }()
}();;
"use strict";
! function() {
    var e = document.querySelectorAll(".mobile-app-banner");
    if (e.length)
        for (var n = function(n) {
                e[n].querySelector(".mobile-app-banner--close").addEventListener("click", function() {
                    e[n].style.display = "none", window.headerTopScroll && setTimeout(function() {
                        return window.headerTopScroll = 0
                    }, 0)
                })
            }, o = 0; o < e.length; o++) n(o)
}();;
! function(o) {
    var t = {};

    function s(e) {
        if (t[e]) return t[e].exports;
        var n = t[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return o[e].call(n.exports, n, n.exports, s), n.l = !0, n.exports
    }
    s.m = o, s.c = t, s.d = function(o, t, e) {
        s.o(o, t) || Object.defineProperty(o, t, {
            enumerable: !0,
            get: e
        })
    }, s.r = function(o) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(o, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(o, "__esModule", {
            value: !0
        })
    }, s.t = function(o, t) {
        if (1 & t && (o = s(o)), 8 & t) return o;
        if (4 & t && "object" == typeof o && o && o.__esModule) return o;
        var e = Object.create(null);
        if (s.r(e), Object.defineProperty(e, "default", {
                enumerable: !0,
                value: o
            }), 2 & t && "string" != typeof o)
            for (var n in o) s.d(e, n, function(t) {
                return o[t]
            }.bind(null, n));
        return e
    }, s.n = function(o) {
        var t = o && o.__esModule ? function() {
            return o.default
        } : function() {
            return o
        };
        return s.d(t, "a", t), t
    }, s.o = function(o, t) {
        return Object.prototype.hasOwnProperty.call(o, t)
    }, s.p = "js/", s(s.s = 4)
}([function(o, t, s) {
    "use strict";
    var e = s(2),
        n = s.n(e)()(function(o) {
            return o[1]
        });
    n.push([o.i, ".fjOAbRgCoNI8oeTwAW7-2 {\n  text-align: center;\n  padding-top: 10px;\n}\n\n._3SB1rRBQu4C9gvMoK5-RFS {\n  margin: 0 auto;\n  max-width: 768px;\n}\n\n._3SB1rRBQu4C9gvMoK5-RFS h1 {\n  font-weight: bold;\n  font-size: 32px;\n  color: #fff;\n  margin-bottom: 16px;\n}\n\n._3SB1rRBQu4C9gvMoK5-RFS p {\n  font-weight: normal;\n  font-size: 18px;\n  margin: 0;\n  color: #b8c0d2;\n}\n\n._3na08I_Ziq10IRsQP7gdM {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-top: 24px;\n}\n\n._1aAteKlEozPmF4BDxSmPO7 {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 128px;\n  height: 140px;\n  margin: 8px 0;\n}\n\n._1aAteKlEozPmF4BDxSmPO7:hover {\n  background: #193049;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.24);;\n  border-radius: 16px;\n}\n\n._1aAteKlEozPmF4BDxSmPO7 a {\n  color: #13da5a;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 20px;\n  text-decoration: none;\n}\n\n._1aAteKlEozPmF4BDxSmPO7 a:hover {\n  text-decoration: underline;\n}\n\n.auJysYcGnmYG_R44a7u77 {\n  margin-top: 16px;\n}\n\n.xJUmNlmp9hYgh3wONcBGD {\n  display: block;\n  position: fixed;\n  z-index: 99;\n  padding-top: 20px;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0,0,0);\n  background-color: rgba(0,0,0,0.4);\n}\n\n._2PNQ-ildiP3_2q_VddISxu {\n  background: linear-gradient(180deg, #193049 0%, #101a31 100%);\n  margin: auto;\n  padding: 20px;\n  border: 1px solid #888;\n  width: 90%;\n}\n\n._3W0Vg0io-Qym_LJeSJz2ZU {\n  color: #fff;\n  float: right;\n  font-size: 28px;\n  font-weight: bold;\n}\n\n._3W0Vg0io-Qym_LJeSJz2ZU:hover,\n._3W0Vg0io-Qym_LJeSJz2ZU:focus {\n  color: #13da5a;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n@media (min-width: 768px) {\n  ._1aAteKlEozPmF4BDxSmPO7 {\n    width: 140px;\n    margin: 16px;\n  }\n  ._3SB1rRBQu4C9gvMoK5-RFS h1 {\n    font-size: 64px;\n  }\n  ._3SB1rRBQu4C9gvMoK5-RFS p {\n    font-size: 24px;\n  }\n  ._3na08I_Ziq10IRsQP7gdM {\n    margin-top: 48px;\n  }\n  .xJUmNlmp9hYgh3wONcBGD {\n    padding-top: 100px;\n  }\n  ._2PNQ-ildiP3_2q_VddISxu {\n    width: 80%;\n  }\n}\n\n@media (min-width: 1200px) {\n  ._1aAteKlEozPmF4BDxSmPO7 {\n    width: 160px;\n  }\n}\n", ""]), n.locals = {
        unsupported_browser__wrapper: "fjOAbRgCoNI8oeTwAW7-2",
        unsupported_browser__message: "_3SB1rRBQu4C9gvMoK5-RFS",
        unsupported_browser__icons: "_3na08I_Ziq10IRsQP7gdM",
        unsupported_browser__element: "_1aAteKlEozPmF4BDxSmPO7",
        unsupported_browser__name: "auJysYcGnmYG_R44a7u77",
        unsupported_browser__modal: "xJUmNlmp9hYgh3wONcBGD",
        unsupported_browser__modal_content: "_2PNQ-ildiP3_2q_VddISxu",
        unsupported_browser__close: "_3W0Vg0io-Qym_LJeSJz2ZU"
    }, t.a = n
}, function(o, t, s) {
    "use strict";
    var e, n = function() {
            var o = {};
            return function(t) {
                if (void 0 === o[t]) {
                    var s = document.querySelector(t);
                    if (window.HTMLIFrameElement && s instanceof window.HTMLIFrameElement) try {
                        s = s.contentDocument.head
                    } catch (o) {
                        s = null
                    }
                    o[t] = s
                }
                return o[t]
            }
        }(),
        r = [];

    function p(o) {
        for (var t = -1, s = 0; s < r.length; s++)
            if (r[s].identifier === o) {
                t = s;
                break
            }
        return t
    }

    function f(o, t) {
        for (var s = {}, e = [], n = 0; n < o.length; n++) {
            var f = o[n],
                a = t.base ? f[0] + t.base : f[0],
                l = s[a] || 0,
                i = "".concat(a, " ").concat(l);
            s[a] = l + 1;
            var c = p(i),
                C = {
                    css: f[1],
                    media: f[2],
                    sourceMap: f[3]
                }; - 1 !== c ? (r[c].references++, r[c].updater(C)) : r.push({
                identifier: i,
                updater: u(C, t),
                references: 1
            }), e.push(i)
        }
        return e
    }

    function a(o) {
        var t = document.createElement("style"),
            e = o.attributes || {};
        if (void 0 === e.nonce) {
            var r = s.nc;
            r && (e.nonce = r)
        }
        if (Object.keys(e).forEach(function(o) {
                t.setAttribute(o, e[o])
            }), "function" == typeof o.insert) o.insert(t);
        else {
            var p = n(o.insert || "head");
            if (!p) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
            p.appendChild(t)
        }
        return t
    }
    var l, i = (l = [], function(o, t) {
        return l[o] = t, l.filter(Boolean).join("\n")
    });

    function c(o, t, s, e) {
        var n = s ? "" : e.media ? "@media ".concat(e.media, " {").concat(e.css, "}") : e.css;
        if (o.styleSheet) o.styleSheet.cssText = i(t, n);
        else {
            var r = document.createTextNode(n),
                p = o.childNodes;
            p[t] && o.removeChild(p[t]), p.length ? o.insertBefore(r, p[t]) : o.appendChild(r)
        }
    }
    var C = null,
        d = 0;

    function u(o, t) {
        var s, e, n;
        if (t.singleton) {
            var r = d++;
            s = C || (C = a(t)), e = c.bind(null, s, r, !1), n = c.bind(null, s, r, !0)
        } else s = a(t), e = function(o, t, s) {
            var e = s.css,
                n = s.media,
                r = s.sourceMap;
            if (n ? o.setAttribute("media", n) : o.removeAttribute("media"), r && "undefined" != typeof btoa && (e += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r)))), " */")), o.styleSheet) o.styleSheet.cssText = e;
            else {
                for (; o.firstChild;) o.removeChild(o.firstChild);
                o.appendChild(document.createTextNode(e))
            }
        }.bind(null, s, t), n = function() {
            ! function(o) {
                if (null === o.parentNode) return !1;
                o.parentNode.removeChild(o)
            }(s)
        };
        return e(o),
            function(t) {
                if (t) {
                    if (t.css === o.css && t.media === o.media && t.sourceMap === o.sourceMap) return;
                    e(o = t)
                } else n()
            }
    }
    o.exports = function(o, t) {
        (t = t || {}).singleton || "boolean" == typeof t.singleton || (t.singleton = (void 0 === e && (e = Boolean(window && document && document.all && !window.atob)), e));
        var s = f(o = o || [], t);
        return function(o) {
            if (o = o || [], "[object Array]" === Object.prototype.toString.call(o)) {
                for (var e = 0; e < s.length; e++) {
                    var n = p(s[e]);
                    r[n].references--
                }
                for (var a = f(o, t), l = 0; l < s.length; l++) {
                    var i = p(s[l]);
                    0 === r[i].references && (r[i].updater(), r.splice(i, 1))
                }
                s = a
            }
        }
    }
}, function(o, t, s) {
    "use strict";
    o.exports = function(o) {
        var t = [];
        return t.toString = function() {
            return this.map(function(t) {
                var s = o(t);
                return t[2] ? "@media ".concat(t[2], " {").concat(s, "}") : s
            }).join("")
        }, t.i = function(o, s, e) {
            "string" == typeof o && (o = [
                [null, o, ""]
            ]);
            var n = {};
            if (e)
                for (var r = 0; r < this.length; r++) {
                    var p = this[r][0];
                    null != p && (n[p] = !0)
                }
            for (var f = 0; f < o.length; f++) {
                var a = [].concat(o[f]);
                e && n[a[0]] || (s && (a[2] ? a[2] = "".concat(s, " and ").concat(a[2]) : a[2] = s), t.push(a))
            }
        }, t
    }
}, function(o, t, s) {
    "use strict";
    s.r(t);
    var e = s(1),
        n = s.n(e),
        r = s(0);
    n()(r.a, {
        insert: "head",
        singleton: !1
    }), t.default = r.a.locals || {}
}, function(o, t, s) {
    "use strict";
    s.r(t);
    var e = {
        en: {
            "Browser not supported": "Browser not supported",
            "Sorry, your browser version is not supported. Please use the latest version of one of the following browsers:": "Sorry, your browser version is not supported. Please use the latest version of one of the following browsers:"
        },
        it: {
            "Browser not supported": "Browser non supportato",
            "Sorry, your browser version is not supported. Please use the latest version of one of the following browsers:": "Spiacente, la versione del tuo browser non è supportata. Ti preghiamo di utilizzare l'ultima versione di uno dei seguenti browser:"
        },
        es: {
            "Browser not supported": "El navegador no es compatible",
            "Sorry, your browser version is not supported. Please use the latest version of one of the following browsers:": "Lo sentimos, esta versión del navegador no es compatible. Usa la última versión de uno de los siguientes navegadores:"
        },
        du: {
            "Browser not supported": "Browser niet ondersteund",
            "Sorry, your browser version is not supported. Please use the latest version of one of the following browsers:": "Sorry, uw browserversie wordt niet ondersteund. Gebruik a.u.b. de laatste versie van één van de volgende browsers:"
        },
        fr: {
            "Browser not supported": "Navigateur non pris en charge",
            "Sorry, your browser version is not supported. Please use the latest version of one of the following browsers:": "Désolé, la version de votre navigateur n'est pas prise en charge. Veuillez utiliser la dernière version de l'un des navigateurs suivants:"
        },
        tr: {
            "Browser not supported": "Tarayıcı desteklenmiyor",
            "Sorry, your browser version is not supported. Please use the latest version of one of the following browsers:": "Üzgünüz, tarayıcınızın sürümü desteklenmiyor. Lütfen aşağıdaki tarayıcılardan birisinin son sürümünü kullanın:"
        },
        de: {
            "Browser not supported": "Browser wird nicht unterstützt",
            "Sorry, your browser version is not supported. Please use the latest version of one of the following browsers:": "Es tut uns leid, aber Ihre Browserversion wird nicht unterstützt. Bitte verwenden Sie die neueste Version eines der folgenden Browser:"
        },
        pt: {
            "Browser not supported": "Navegador não suportado",
            "Sorry, your browser version is not supported. Please use the latest version of one of the following browsers:": "Lamentamos, a versão do seu navegador não está suportada. Por favor, use a última versão de um dos seguintes navegadores:"
        },
        "pt-br": {
            "Browser not supported": "Navegador não é suportado",
            "Sorry, your browser version is not supported. Please use the latest version of one of the following browsers:": "Desculpe, mas a versão de seu navegador não é suportada. Por favor, utilize a última versão de um dos seguintes navegadores:"
        },
        "zh-hant": {
            "Browser not supported": "#瀏覽器不支持",
            "Sorry, your browser version is not supported. Please use the latest version of one of the following browsers:": "抱歉，您的瀏覽器版本不支持。請使用以下瀏覽器的最新版本："
        },
        "zh-hans": {
            "Browser not supported": "浏览器不支持",
            "Sorry, your browser version is not supported. Please use the latest version of one of the following browsers:": "抱歉，您的浏览器版本不支持。请使用以下浏览器的最新版本："
        },
        vi: {
            "Browser not supported": "Trình duyệt không được hỗ trợ",
            "Sorry, your browser version is not supported. Please use the latest version of one of the following browsers:": "Rất tiếc, phiên bản trình duyệt bạn đang dùng không được hỗ trợ. Vui lòng sử dụng phiên bản mới nhất của một trong những trình duyệt sau:"
        },
        ru: {
            "Browser not supported": "Браузер не поддерживается",
            "Sorry, your browser version is not supported. Please use the latest version of one of the following browsers:": "Очень жаль, ваш браузер не поддерживается. Пожалуйста используйте последнюю версию одного из следующих браузеров:"
        },
        et: {
            "Browser not supported": "Brauserit ei toetata",
            "Sorry, your browser version is not supported. Please use the latest version of one of the following browsers:": "Vabandust, teie brauseri versiooni ei toetata. Palun kasutage mõnda järgmiste brauserite viimast versiooni:"
        },
        pl: {
            "Browser not supported": "Przeglądarka nie jest obsługiwana",
            "Sorry, your browser version is not supported. Please use the latest version of one of the following browsers:": "Przepraszamy, Twoja wersja przeglądarki nie jest obsługiwana. Proszę użyć najnowszej wersji jednej z poniższych przeglądarek:"
        }
    };

    function n(o, t) {
        for (var s = 0; s < t.length; s++) {
            var e = t[s];
            e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(o, e.key, e)
        }
    }
    var r = {
            cn: "zh-hans",
            "zh-hans": "zh-hans",
            "cn-tr": "zh-hant",
            "zh-hant": "zh-hant",
            de: "de",
            en: "en",
            es: "es",
            fr: "fr",
            it: "it",
            nl: "du",
            pl: "pl",
            pt: "pt",
            "pt-br": "pt",
            ru: "ru",
            tr: "tr",
            vi: "vi",
            et: "et"
        },
        p = function() {
            function o(t, s) {
                ! function(o, t) {
                    if (!(o instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, o), this.lang = r.hasOwnProperty(t) ? r[t] : "en", this.dictionary = s.hasOwnProperty(this.lang) ? s[this.lang] : s.en
            }
            var t, s;
            return t = o, (s = [{
                key: "get",
                value: function(o) {
                    return this.dictionary.hasOwnProperty(o) ? this.dictionary[o] : o
                }
            }, {
                key: "init",
                value: function(o) {
                    return this.get(o)
                }
            }]) && n(t.prototype, s), o
        }(),
        f = {
            firefox: {
                svg: '<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M60.4928 21.4615C59.1456 18.2199 56.4129 14.7199 54.2729 13.6135C55.7992 16.5696 56.8585 19.7443 57.04F048AAFF" fill="url(#firefox_paint0_linear)"/>\n<path d="M60.4928 21.4615C59.1456 18.2199 56.4129 14.7199 54.2729 13.6135C55.7992 16.5696 56.8585 19.7443 57.0F93656A26" fill="url(#firefox_paint1_radial)"/>\n<path d="M60.4928 21.4615C59.1456 18.2199 56.4129 14.7199 54.2729 13.6135C55.7992 16.5696 56.8585 19.7443 57.0F93656A26" fill="url(#firefox_paint2_radial)"/>\n<path d="M45.4256 25.1063C45.4928 25.1535 45.5552 25.2007 45.6184 25.2479C44.8396 23.8669 43.8701 22.6024 42.09C1827A99" fill="url(#firefox_paint3_radial)"/>\n<path d="M31.86 27.0313C31.8088 27.8025 29.084 30.4625 28.1312 30.4625C19.3144 30.4625 17.8832 35.7961 17.883047BC18A92" fill="url(#firefox_paint4_radial)"/>\n<path d="M31.86 27.0313C31.8088 27.8025 29.084 30.4625 28.1312 30.4625C19.3144 30.4625 17.8832 35.7961 17.883047BC18A92" fill="url(#firefox_paint5_radial)"/>\n<path d="M20.7722 19.4856C21.0234 19.6456 21.2306 19.7848 21.4122 19.9104C20.7057 17.4376 20.6756 14.8205 21.0E35EA8AF3" fill="url(#firefox_paint6_radial)"/>\n<path d="M1.08328 33.7272C3.47608 47.8664 16.2905 58.6616 30.8385 59.0736C44.3025 59.4543 52.9041 51.6384 56.0BB101DAA2" fill="url(#firefox_paint7_radial)"/>\n<path d="M42.7402 21.4919C43.8721 22.6037 44.8416 23.8695 45.6202 25.2519C45.7906 25.3807 45.9498 25.5087 46.0EEC20DAA5" fill="url(#firefox_paint8_radial)"/>\n<path d="M46.08 25.6288C45.9448 25.5048 45.7856 25.3768 45.6152 25.248C45.552 25.2008 45.4896 25.1536 45.42240DFB6BAA05" fill="url(#firefox_paint9_radial)"/>\n<path d="M17.8832 35.7959C17.8832 35.7959 19.3144 30.4623 28.1312 30.4623C29.084 30.4623 31.8112 27.8023 31.80D62D8FA2B" fill="url(#firefox_paint10_radial)"/>\n<path d="M60.4928 21.4615C59.1456 18.2199 56.4129 14.7199 54.2729 13.6135C55.7992 16.5696 56.8585 19.7443 57.01D9851A10" fill="url(#firefox_paint11_linear)"/>\n<defs>\n<linearGradient id="firefox_paint0_linear" x1="56.3888" y1="9.91113" x2="4.91765" y2="59.5711" gradientUnits="userSpaceOnUse">\n<stop offset="0.048" stop-color="#FFF44F"/>\n<stop offset="0.111" stop-color="#FFE847"/>\n<stop offset="0.225" stop-color="#FFC830"/>\n<stop offset="0.368" stop-color="#FF980E"/>\n<stop offset="0.401" stop-color="#FF8B16"/>\n<stop offset="0.462" stop-color="#FF672A"/>\n<stop offset="0.534" stop-color="#FF3647"/>\n<stop offset="0.705" stop-color="#E31587"/>\n</linearGradient>\n<radialGradient id="firefox_paint1_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(54.0104 7.09983) scale(64.6376)">\n<stop offset="0.129" stop-color="#FFBD4F"/>\n<stop offset="0.186" stop-color="#FFAC31"/>\n<stop offset="0.247" stop-color="#FF9D17"/>\n<stop offset="0.283" stop-color="#FF980E"/>\n<stop offset="0.403" stop-color="#FF563B"/>\n<stop offset="0.467" stop-color="#FF3750"/>\n<stop offset="0.71" stop-color="#F5156C"/>\n<stop offset="0.782" stop-color="#EB0878"/>\n<stop offset="0.86" stop-color="#E50080"/>\n</radialGradient>\n<radialGradient id="firefox_paint2_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(30.3913 33.5256) scale(64.6376)">\n<stop offset="0.3" stop-color="#960E18"/>\n<stop offset="0.351" stop-color="#B11927" stop-opacity="0.74"/>\n<stop offset="0.435" stop-color="#DB293D" stop-opacity="0.343"/>\n<stop offset="0.497" stop-color="#F5334B" stop-opacity="0.094"/>\n<stop offset="0.53" stop-color="#FF3750" stop-opacity="0"/>\n</radialGradient>\n<radialGradient id="firefox_paint3_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(38.1839 -7.56891) scale(46.8272)">\n<stop offset="0.132" stop-color="#FFF44F"/>\n<stop offset="0.252" stop-color="#FFDC3E"/>\n<stop offset="0.506" stop-color="#FF9D12"/>\n<stop offset="0.526" stop-color="#FF980E"/>\n</radialGradient>\n<radialGradient id="firefox_paint4_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(23.2417 50.4093) scale(30.7768)">\n<stop offset="0.353" stop-color="#3A8EE6"/>\n<stop offset="0.472" stop-color="#5C79F0"/>\n<stop offset="0.669" stop-color="#9059FF"/>\n<stop offset="1" stop-color="#C139E6"/>\n</radialGradient>\n<radialGradient id="firefox_paint5_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(33.9234 28.2284) rotate(-13.5916) scale(16.3177 19.1039)">\n<stop offset="0.206" stop-color="#9059FF" stop-opacity="0"/>\n<stop offset="0.278" stop-color="#8C4FF3" stop-opacity="0.064"/>\n<stop offset="0.747" stop-color="#7716A8" stop-opacity="0.45"/>\n<stop offset="0.975" stop-color="#6E008B" stop-opacity="0.6"/>\n</radialGradient>\n<radialGradient id="firefox_paint6_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(29.5754 4.45538) scale(22.1408)">\n<stop stop-color="#FFE226"/>\n<stop offset="0.121" stop-color="#FFDB27"/>\n<stop offset="0.295" stop-color="#FFC82A"/>\n<stop offset="0.502" stop-color="#FFA930"/>\n<stop offset="0.732" stop-color="#FF7E37"/>\n<stop offset="0.792" stop-color="#FF7139"/>\n</radialGradient>\n<radialGradient id="firefox_paint7_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(46.9784 -9.58838) scale(94.4648)">\n<stop offset="0.113" stop-color="#FFF44F"/>\n<stop offset="0.456" stop-color="#FF980E"/>\n<stop offset="0.622" stop-color="#FF5634"/>\n<stop offset="0.716" stop-color="#FF3647"/>\n<stop offset="0.904" stop-color="#E31587"/>\n</radialGradient>\n<radialGradient id="firefox_paint8_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(39.0169 -4.33566) rotate(83.976) scale(69.2355 45.4386)">\n<stop stop-color="#FFF44F"/>\n<stop offset="0.06" stop-color="#FFE847"/>\n<stop offset="0.168" stop-color="#FFC830"/>\n<stop offset="0.304" stop-color="#FF980E"/>\n<stop offset="0.356" stop-color="#FF8B16"/>\n<stop offset="0.455" stop-color="#FF672A"/>\n<stop offset="0.57" stop-color="#FF3647"/>\n<stop offset="0.737" stop-color="#E31587"/>\n</radialGradient>\n<radialGradient id="firefox_paint9_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(29.0538 12.6561) scale(58.976)">\n<stop offset="0.137" stop-color="#FFF44F"/>\n<stop offset="0.48" stop-color="#FF980E"/>\n<stop offset="0.592" stop-color="#FF5634"/>\n<stop offset="0.655" stop-color="#FF3647"/>\n<stop offset="0.904" stop-color="#E31587"/>\n</radialGradient>\n<radialGradient id="firefox_paint10_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(44.6217 16.1077) scale(64.5488)">\n<stop offset="0.094" stop-color="#FFF44F"/>\n<stop offset="0.231" stop-color="#FFE141"/>\n<stop offset="0.509" stop-color="#FFAF1E"/>\n<stop offset="0.626" stop-color="#FF980E"/>\n</radialGradient>\n<linearGradient id="firefox_paint11_linear" x1="55.7704" y1="9.64553" x2="11.9736" y2="53.4415" gradientUnits="userSpaceOnUse">\n<stop offset="0.167" stop-color="#FFF44F" stop-opacity="0.8"/>\n<stop offset="0.266" stop-color="#FFF44F" stop-opacity="0.634"/>\n<stop offset="0.489" stop-color="#FFF44F" stop-opacity="0.217"/>\n<stop offset="0.6" stop-color="#FFF44F" stop-opacity="0"/>\n</linearGradient>\n</defs>\n</svg>',
                title: "Firefox",
                url: "../https@www.mozilla.org/en-US/firefox/new/default.htm"
            },
            chrome: {
                svg: '<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">\n<mask id="chrome_mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="64" height="64">\n<path d="M32 64C49.6731 64 64 49.6731 64 32C64 14.3269 49.6731 0 32 0C14.3269 0 0 14.3269 0 32C0 49.6731 14.3269 64 32 64Z" fill="white"/>\n</mask>\n<g mask="url(#chrome_mask0)">\n<path d="M32 64C49.6731 64 64 49.6731 64 32C64 14.3269 49.6731 0 32 0C14.3269 0 0 14.3269 0 32C0 49.6731 14.3269 64 32 64Z" fill="url(#chrome_paint0_radial)"/>\n<path d="M5.08026 0V39.2727H19.4039L32.0003 17.4545H64.0003V0H5.08026Z" fill="#DB4437"/>\n<path d="M5.08026 0V39.2727H19.4039L32.0003 17.4545H64.0003V0H5.08026Z" fill="url(#chrome_paint1_linear)"/>\n<path d="M19.7492 39.1454L5.2656 14.3054L5.05469 14.6691L19.4329 39.3236L19.7492 39.1454Z" fill="#3E2723" fill-opacity="0.15"/>\n<path d="M0 64H30.4618L44.6 49.8618V39.2727H19.4036L0 5.99268V64Z" fill="#0F9D58"/>\n<path d="M0 64H30.4618L44.6 49.8618V39.2727H19.4036L0 5.99268V64Z" fill="url(#chrome_paint2_linear)"/>\n<path d="M44.3051 39.7563L44.0033 39.5818L30.0433 64H30.4615L44.3161 39.7672L44.3051 39.7563Z" fill="#263238" fill-opacity="0.15"/>\n<path d="M31.9999 17.4546L44.5999 39.2728L30.4617 64H63.9999V17.4546H31.9999Z" fill="#FFCD40"/>\n<path d="M31.9999 17.4546L44.5999 39.2728L30.4617 64H63.9999V17.4546H31.9999Z" fill="url(#chrome_paint3_linear)"/>\n<path d="M31.9999 17.4546L44.5999 39.2728L30.4617 64H63.9999V17.4546H31.9999Z" fill="#FFCD40"/>\n<path d="M31.9999 17.4546L44.5999 39.2728L30.4617 64H63.9999V17.4546H31.9999Z" fill="url(#chrome_paint4_linear)"/>\n<path d="M5.08026 0V39.2727H19.4039L32.0003 17.4545H64.0003V0H5.08026Z" fill="#DB4437"/>\n<path d="M5.08026 0V39.2727H19.4039L32.0003 17.4545H64.0003V0H5.08026Z" fill="url(#chrome_paint5_linear)"/>\n<path d="M32 17.4546V25.0728L60.5091 17.4546H32Z" fill="url(#chrome_paint6_radial)"/>\n<path d="M0 64H30.4618L44.6 39.2727H19.4036L0 5.99268V64Z" fill="#0F9D58"/>\n<path d="M0 64H30.4618L44.6 39.2727H19.4036L0 5.99268V64Z" fill="url(#chrome_paint7_linear)"/>\n<path d="M5.08026 14.709L25.8984 35.5235L19.4039 39.2726L5.08026 14.709Z" fill="url(#chrome_paint8_radial)"/>\n<path d="M30.4836 63.96L38.1055 35.5237L44.6 39.2728L30.4836 63.96Z" fill="url(#chrome_paint9_radial)"/>\n<path d="M32 46.5455C40.0332 46.5455 46.5454 40.0333 46.5454 32C46.5454 23.9668 40.0332 17.4546 32 17.4546C23.9668 17.4546 17.4545 23.9668 17.4545 32C17.4545 40.0333 23.9668 46.5455 32 46.5455Z" fill="#F1F1F1"/>\n<path d="M32 43.6365C38.4266 43.6365 43.6364 38.4267 43.6364 32.0001C43.6364 25.5735 38.4266 20.3638 32 20.360FBC864AA5" fill="#4285F4"/>\n<path d="M32 17.0908C23.9673 17.0908 17.4545 23.6035 17.4545 31.6363V31.9999C17.4545 23.9672 23.9673 17.4545 32 17.4545H64V17.0908H32Z" fill="#3E2723" fill-opacity="0.2"/>\n<path d="M44.5818 39.2727C42.0655 43.6145 37.3782 46.5454 32 46.5454C26.6182 46.5454 21.9309 43.6145 19.4145 0BEB892A39" fill="white" fill-opacity="0.1"/>\n<path opacity="0.1" d="M32.3636 17.4546C32.3018 17.4546 32.2436 17.4619 32.1818 17.4655C40.1309 17.5637 46.5455 24.0291 46.0B4F9CCA64" fill="#3E2723"/>\n<path d="M44.7272 39.7564C45.9636 37.6182 46.6799 35.1454 46.6799 32.4982C46.6799 30.9636 46.4399 29.4873 45.0D28461AEF" fill="white" fill-opacity="0.2"/>\n<path d="M32 0.363636C49.6109 0.363636 63.8982 14.5927 63.9964 32.1818C63.9964 32.12 64 32.0618 64 32C64 14.3273 49.6727 0 32 0C14.3273 0 0 14.3273 0 32C0 32.0618 0.00363645 32.12 0.00363645 32.1818C0.101818 14.5927 14.3891 0.363636 32 0.363636Z" fill="white" fill-opacity="0.2"/>\n<path d="M32 63.6363C49.6109 63.6363 63.8982 49.4072 63.9964 31.8181C63.9964 31.8799 64 31.9381 64 31.9999C64070055EA7C" fill="#3E2723" fill-opacity="0.15"/>\n</g>\n<defs>\n<radialGradient id="chrome_paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(9.55854 8.73236) scale(64.2713)">\n<stop stop-color="white" stop-opacity="0.1"/>\n<stop offset="1" stop-color="white" stop-opacity="0"/>\n</radialGradient>\n<linearGradient id="chrome_paint1_linear" x1="7.75917" y1="24.3713" x2="26.8501" y2="13.2196" gradientUnits="userSpaceOnUse">\n<stop stop-color="#A52714" stop-opacity="0.6"/>\n<stop offset="0.66" stop-color="#A52714" stop-opacity="0"/>\n</linearGradient>\n<linearGradient id="chrome_paint2_linear" x1="37.408" y1="56.9072" x2="16.1956" y2="44.4832" gradientUnits="userSpaceOnUse">\n<stop stop-color="#055524" stop-opacity="0.4"/>\n<stop offset="0.33" stop-color="#055524" stop-opacity="0"/>\n</linearGradient>\n<linearGradient id="chrome_paint3_linear" x1="41.4028" y1="15.2015" x2="46.7442" y2="38.5928" gradientUnits="userSpaceOnUse">\n<stop stop-color="#EA6100" stop-opacity="0.3"/>\n<stop offset="0.66" stop-color="#EA6100" stop-opacity="0"/>\n</linearGradient>\n<linearGradient id="chrome_paint4_linear" x1="41.4028" y1="15.2015" x2="46.7442" y2="38.5928" gradientUnits="userSpaceOnUse">\n<stop stop-color="#EA6100" stop-opacity="0.3"/>\n<stop offset="0.66" stop-color="#EA6100" stop-opacity="0"/>\n</linearGradient>\n<linearGradient id="chrome_paint5_linear" x1="7.75917" y1="24.3713" x2="26.8501" y2="13.2196" gradientUnits="userSpaceOnUse">\n<stop stop-color="#A52714" stop-opacity="0.6"/>\n<stop offset="0.66" stop-color="#A52714" stop-opacity="0"/>\n</linearGradient>\n<radialGradient id="chrome_paint6_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(30.6095 17.4357) scale(30.5738)">\n<stop stop-color="#3E2723" stop-opacity="0.2"/>\n<stop offset="1" stop-color="#3E2723" stop-opacity="0"/>\n</radialGradient>\n<linearGradient id="chrome_paint7_linear" x1="37.408" y1="56.9072" x2="16.1956" y2="44.4832" gradientUnits="userSpaceOnUse">\n<stop stop-color="#055524" stop-opacity="0.4"/>\n<stop offset="0.33" stop-color="#055524" stop-opacity="0"/>\n</linearGradient>\n<radialGradient id="chrome_paint8_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(5.04572 14.7344) scale(28.3796)">\n<stop stop-color="#3E2723" stop-opacity="0.2"/>\n<stop offset="1" stop-color="#3E2723" stop-opacity="0"/>\n</radialGradient>\n<radialGradient id="chrome_paint9_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(31.9433 32.0502) scale(31.9527)">\n<stop stop-color="#263238" stop-opacity="0.2"/>\n<stop offset="1" stop-color="#263238" stop-opacity="0"/>\n</radialGradient>\n</defs>\n</svg>',
                title: "Chrome",
                url: "../https@www.google.com/chrome/default.htm"
            },
            edge: {
                svg: '<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M57.7627 47.6335C56.9214 48.0746 56.0426 48.469 55.1294 48.8121C52.3841 49.8433 49.3523 50.428 46.150B6227EAB4" fill="url(#edge_paint0_linear)"/>\n<path opacity="0.35" d="M57.7627 47.6335C56.9214 48.0746 56.0426 48.469 55.1294 48.8121C52.3841 49.8433 49.3523 50.428 46.150B6227EAB4" fill="url(#edge_paint1_radial)"/>\n<path d="M26.4278 60.3535C24.2042 58.9751 22.2739 57.1577 20.7439 55.0097C18.3765 51.6857 16.9611 47.597 16.9062EE58A6A" fill="url(#edge_paint2_linear)"/>\n<path opacity="0.41" d="M26.4278 60.3535C24.2042 58.9751 22.2739 57.1577 20.7439 55.0097C18.3765 51.6857 16.9611 47.597 16.9062EE58A6A" fill="url(#edge_paint3_radial)"/>\n<path d="M38.0786 37.2144C37.8759 37.4767 37.2526 37.8388 37.2526 38.6303C37.2526 39.2814 37.6777 39.9096 38.0AE3E47A98" fill="url(#edge_paint4_radial)"/>\n<path d="M38.0786 37.2144C37.8759 37.4767 37.2526 37.8388 37.2526 38.6303C37.2526 39.2814 37.6777 39.9096 38.0AE3E47A98" fill="url(#edge_paint5_radial)"/>\n<defs>\n<linearGradient id="edge_paint0_linear" x1="14.6758" y1="44.2627" x2="59.2596" y2="44.2627" gradientUnits="userSpaceOnUse">\n<stop stop-color="#0C59A4"/>\n<stop offset="1" stop-color="#114A8B"/>\n</linearGradient>\n<radialGradient id="edge_paint1_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(39.3011 44.5958) scale(23.846 22.6792)">\n<stop offset="0.71659" stop-opacity="0"/>\n<stop offset="0.9459" stop-opacity="0.53"/>\n<stop offset="1"/>\n</radialGradient>\n<linearGradient id="edge_paint2_linear" x1="38.1808" y1="24.921" x2="10.332" y2="55.255" gradientUnits="userSpaceOnUse">\n<stop stop-color="#1B9DE2"/>\n<stop offset="0.16164" stop-color="#1595DF"/>\n<stop offset="0.66749" stop-color="#0680D7"/>\n<stop offset="1" stop-color="#0078D4"/>\n</linearGradient>\n<radialGradient id="edge_paint3_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(17.8262 49.666) rotate(-81.464) scale(35.8088 28.855)">\n<stop offset="0.76293" stop-opacity="0"/>\n<stop offset="0.9459" stop-opacity="0.5"/>\n<stop offset="1"/>\n</radialGradient>\n<radialGradient id="edge_paint4_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(6.30851 11.7013) rotate(92.129) scale(50.6079 107.786)">\n<stop stop-color="#35C1F1"/>\n<stop offset="0.11079" stop-color="#34C1ED"/>\n<stop offset="0.23164" stop-color="#2FC2DF"/>\n<stop offset="0.31446" stop-color="#2BC3D2"/>\n<stop offset="0.67338" stop-color="#36C752"/>\n</radialGradient>\n<radialGradient id="edge_paint5_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(60.6174 19.3937) rotate(73.6747) scale(24.3344 19.8678)">\n<stop stop-color="#66EB6E"/>\n<stop offset="1" stop-color="#66EB6E" stop-opacity="0"/>\n</radialGradient>\n</defs>\n</svg>',
                title: "Edge",
                url: "../https@www.microsoft.com/en-us/edge"
            },
            opera: {
                svg: '<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">\n<mask id="opera_mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="64" height="64">\n<path d="M0 0H64V64H0V0Z" fill="white"/>\n</mask>\n<g mask="url(#opera_mask0)">\n<mask id="opera_mask1" mask-type="alpha" maskUnits="userSpaceOnUse" x="-1" y="0" width="54" height="64">\n<path d="M31.688 0C14.0584 0 -0.232025 14.2904 -0.232025 31.9216C-0.232025 49.0408 13.244 63.0096 30.1656 63.06372D9A45" fill="white"/>\n</mask>\n<g mask="url(#opera_mask1)">\n<path d="M52.9624 0H-0.231232V63.84H52.9624V0Z" fill="url(#opera_paint0_linear)"/>\n</g>\n<mask id="opera_mask2" mask-type="alpha" maskUnits="userSpaceOnUse" x="20" y="4" width="44" height="56">\n<path d="M20.8 4H64V60H20.8V4Z" fill="white"/>\n</mask>\n<g mask="url(#opera_mask2)">\n<mask id="opera_mask3" mask-type="alpha" maskUnits="userSpaceOnUse" x="21" y="4" width="43" height="56">\n<path d="M21.1815 13.9313C24.1095 10.4753 27.8935 8.39046 32.0247 8.39046C41.3183 8.39046 48.8503 18.9249 48.056B73FA55" fill="white"/>\n</mask>\n<g mask="url(#opera_mask3)">\n<path d="M63.6096 4.21606H21.1815V59.6281H63.6096V4.21606Z" fill="url(#opera_paint1_linear)"/>\n</g>\n</g>\n</g>\n<defs>\n<linearGradient id="opera_paint0_linear" x1="26.365" y1="0" x2="26.365" y2="63.84" gradientUnits="userSpaceOnUse">\n<stop stop-color="#FF1B2D"/>\n<stop offset="0.25" stop-color="#FF1B2D"/>\n<stop offset="0.3125" stop-color="#FF1B2D"/>\n<stop offset="0.34375" stop-color="#FF1B2D"/>\n<stop offset="0.375" stop-color="#FE1B2D"/>\n<stop offset="0.39063" stop-color="#FD1A2D"/>\n<stop offset="0.40625" stop-color="#FD1A2C"/>\n<stop offset="0.42188" stop-color="#FC1A2C"/>\n<stop offset="0.4375" stop-color="#FB1A2C"/>\n<stop offset="0.44531" stop-color="#FA1A2C"/>\n<stop offset="0.45313" stop-color="#FA192C"/>\n<stop offset="0.46094" stop-color="#F9192B"/>\n<stop offset="0.46875" stop-color="#F9192B"/>\n<stop offset="0.47656" stop-color="#F8192B"/>\n<stop offset="0.48438" stop-color="#F8192B"/>\n<stop offset="0.49219" stop-color="#F7192B"/>\n<stop offset="0.5" stop-color="#F6182B"/>\n<stop offset="0.50781" stop-color="#F6182A"/>\n<stop offset="0.51563" stop-color="#F5182A"/>\n<stop offset="0.52344" stop-color="#F4182A"/>\n<stop offset="0.53125" stop-color="#F4172A"/>\n<stop offset="0.53906" stop-color="#F3172A"/>\n<stop offset="0.54688" stop-color="#F21729"/>\n<stop offset="0.55469" stop-color="#F11729"/>\n<stop offset="0.5625" stop-color="#F01729"/>\n<stop offset="0.57031" stop-color="#F01629"/>\n<stop offset="0.57813" stop-color="#EF1628"/>\n<stop offset="0.58594" stop-color="#EE1628"/>\n<stop offset="0.59375" stop-color="#ED1528"/>\n<stop offset="0.60156" stop-color="#EC1528"/>\n<stop offset="0.60938" stop-color="#EB1527"/>\n<stop offset="0.61719" stop-color="#EA1527"/>\n<stop offset="0.625" stop-color="#E91427"/>\n<stop offset="0.62891" stop-color="#E81427"/>\n<stop offset="0.63281" stop-color="#E81426"/>\n<stop offset="0.63672" stop-color="#E71426"/>\n<stop offset="0.64063" stop-color="#E71426"/>\n<stop offset="0.64453" stop-color="#E61326"/>\n<stop offset="0.64844" stop-color="#E61326"/>\n<stop offset="0.65234" stop-color="#E51326"/>\n<stop offset="0.65625" stop-color="#E51326"/>\n<stop offset="0.66016" stop-color="#E41325"/>\n<stop offset="0.66406" stop-color="#E41325"/>\n<stop offset="0.66797" stop-color="#E31225"/>\n<stop offset="0.67188" stop-color="#E21225"/>\n<stop offset="0.67578" stop-color="#E21225"/>\n<stop offset="0.67969" stop-color="#E11225"/>\n<stop offset="0.68359" stop-color="#E11224"/>\n<stop offset="0.6875" stop-color="#E01224"/>\n<stop offset="0.69141" stop-color="#E01124"/>\n<stop offset="0.69531" stop-color="#DF1124"/>\n<stop offset="0.69922" stop-color="#DE1124"/>\n<stop offset="0.70313" stop-color="#DE1124"/>\n<stop offset="0.70703" stop-color="#DD1123"/>\n<stop offset="0.71094" stop-color="#DD1023"/>\n<stop offset="0.71484" stop-color="#DC1023"/>\n<stop offset="0.71875" stop-color="#DB1023"/>\n<stop offset="0.72266" stop-color="#DB1023"/>\n<stop offset="0.72656" stop-color="#DA1023"/>\n<stop offset="0.73047" stop-color="#DA1022"/>\n<stop offset="0.73438" stop-color="#D90F22"/>\n<stop offset="0.73828" stop-color="#D80F22"/>\n<stop offset="0.74219" stop-color="#D80F22"/>\n<stop offset="0.74609" stop-color="#D70F22"/>\n<stop offset="0.75" stop-color="#D60F21"/>\n<stop offset="0.75391" stop-color="#D60E21"/>\n<stop offset="0.75781" stop-color="#D50E21"/>\n<stop offset="0.76172" stop-color="#D40E21"/>\n<stop offset="0.76563" stop-color="#D40E21"/>\n<stop offset="0.76953" stop-color="#D30E21"/>\n<stop offset="0.77344" stop-color="#D20D20"/>\n<stop offset="0.77734" stop-color="#D20D20"/>\n<stop offset="0.78125" stop-color="#D10D20"/>\n<stop offset="0.78516" stop-color="#D00D20"/>\n<stop offset="0.78906" stop-color="#D00C20"/>\n<stop offset="0.79297" stop-color="#CF0C1F"/>\n<stop offset="0.79688" stop-color="#CE0C1F"/>\n<stop offset="0.80078" stop-color="#CE0C1F"/>\n<stop offset="0.80469" stop-color="#CD0C1F"/>\n<stop offset="0.80859" stop-color="#CC0B1F"/>\n<stop offset="0.8125" stop-color="#CB0B1E"/>\n<stop offset="0.81641" stop-color="#CB0B1E"/>\n<stop offset="0.82031" stop-color="#CA0B1E"/>\n<stop offset="0.82422" stop-color="#C90A1E"/>\n<stop offset="0.82813" stop-color="#C80A1E"/>\n<stop offset="0.83203" stop-color="#C80A1D"/>\n<stop offset="0.83594" stop-color="#C70A1D"/>\n<stop offset="0.83984" stop-color="#C60A1D"/>\n<stop offset="0.84375" stop-color="#C5091D"/>\n<stop offset="0.84766" stop-color="#C5091C"/>\n<stop offset="0.85156" stop-color="#C4091C"/>\n<stop offset="0.85547" stop-color="#C3091C"/>\n<stop offset="0.85938" stop-color="#C2081C"/>\n<stop offset="0.86328" stop-color="#C2081C"/>\n<stop offset="0.86719" stop-color="#C1081B"/>\n<stop offset="0.87109" stop-color="#C0081B"/>\n<stop offset="0.875" stop-color="#BF071B"/>\n<stop offset="0.87891" stop-color="#BE071B"/>\n<stop offset="0.88281" stop-color="#BE071A"/>\n<stop offset="0.88672" stop-color="#BD071A"/>\n<stop offset="0.89063" stop-color="#BC061A"/>\n<stop offset="0.89453" stop-color="#BB061A"/>\n<stop offset="0.89844" stop-color="#BA061A"/>\n<stop offset="0.90234" stop-color="#BA0619"/>\n<stop offset="0.90625" stop-color="#B90519"/>\n<stop offset="0.91016" stop-color="#B80519"/>\n<stop offset="0.91406" stop-color="#B70519"/>\n<stop offset="0.91797" stop-color="#B60518"/>\n<stop offset="0.92188" stop-color="#B50418"/>\n<stop offset="0.92578" stop-color="#B50418"/>\n<stop offset="0.92969" stop-color="#B40418"/>\n<stop offset="0.93359" stop-color="#B30417"/>\n<stop offset="0.9375" stop-color="#B20317"/>\n<stop offset="0.94141" stop-color="#B10317"/>\n<stop offset="0.94531" stop-color="#B00317"/>\n<stop offset="0.94922" stop-color="#AF0316"/>\n<stop offset="0.95313" stop-color="#AE0216"/>\n<stop offset="0.95703" stop-color="#AE0216"/>\n<stop offset="0.96094" stop-color="#AD0216"/>\n<stop offset="0.96484" stop-color="#AC0115"/>\n<stop offset="0.96875" stop-color="#AB0115"/>\n<stop offset="0.97266" stop-color="#AA0115"/>\n<stop offset="0.97656" stop-color="#A90115"/>\n<stop offset="0.98047" stop-color="#A80014"/>\n<stop offset="0.98438" stop-color="#A70014"/>\n<stop offset="1" stop-color="#A70014"/>\n</linearGradient>\n<linearGradient id="opera_paint1_linear" x1="42.3947" y1="4.21551" x2="42.3947" y2="59.6264" gradientUnits="userSpaceOnUse">\n<stop stop-color="#9C0000"/>\n<stop offset="0.00781" stop-color="#9C0000"/>\n<stop offset="0.01172" stop-color="#9D0000"/>\n<stop offset="0.01563" stop-color="#9D0101"/>\n<stop offset="0.01953" stop-color="#9E0101"/>\n<stop offset="0.02344" stop-color="#9E0202"/>\n<stop offset="0.02734" stop-color="#9F0202"/>\n<stop offset="0.03125" stop-color="#9F0202"/>\n<stop offset="0.03516" stop-color="#A00303"/>\n<stop offset="0.03906" stop-color="#A00303"/>\n<stop offset="0.04297" stop-color="#A10404"/>\n<stop offset="0.04688" stop-color="#A10404"/>\n<stop offset="0.05078" stop-color="#A20505"/>\n<stop offset="0.05469" stop-color="#A30505"/>\n<stop offset="0.05859" stop-color="#A30505"/>\n<stop offset="0.0625" stop-color="#A40606"/>\n<stop offset="0.06641" stop-color="#A40606"/>\n<stop offset="0.07031" stop-color="#A50707"/>\n<stop offset="0.07422" stop-color="#A50707"/>\n<stop offset="0.07813" stop-color="#A60808"/>\n<stop offset="0.08203" stop-color="#A70808"/>\n<stop offset="0.08594" stop-color="#A70808"/>\n<stop offset="0.08984" stop-color="#A80909"/>\n<stop offset="0.09375" stop-color="#A80909"/>\n<stop offset="0.09766" stop-color="#A90A0A"/>\n<stop offset="0.10156" stop-color="#A90A0A"/>\n<stop offset="0.10547" stop-color="#AA0B0B"/>\n<stop offset="0.10938" stop-color="#AA0B0B"/>\n<stop offset="0.11328" stop-color="#AB0B0B"/>\n<stop offset="0.11719" stop-color="#AC0C0C"/>\n<stop offset="0.12109" stop-color="#AC0C0C"/>\n<stop offset="0.125" stop-color="#AD0D0D"/>\n<stop offset="0.12891" stop-color="#AD0D0D"/>\n<stop offset="0.13281" stop-color="#AE0D0D"/>\n<stop offset="0.13672" stop-color="#AE0E0E"/>\n<stop offset="0.14063" stop-color="#AF0E0E"/>\n<stop offset="0.14453" stop-color="#AF0F0F"/>\n<stop offset="0.14844" stop-color="#B00F0F"/>\n<stop offset="0.15234" stop-color="#B11010"/>\n<stop offset="0.15625" stop-color="#B11010"/>\n<stop offset="0.16016" stop-color="#B21010"/>\n<stop offset="0.16406" stop-color="#B21111"/>\n<stop offset="0.16797" stop-color="#B31111"/>\n<stop offset="0.17188" stop-color="#B31212"/>\n<stop offset="0.17578" stop-color="#B41212"/>\n<stop offset="0.17969" stop-color="#B51313"/>\n<stop offset="0.18359" stop-color="#B51313"/>\n<stop offset="0.1875" stop-color="#B61313"/>\n<stop offset="0.19141" stop-color="#B61414"/>\n<stop offset="0.19531" stop-color="#B71414"/>\n<stop offset="0.19922" stop-color="#B71515"/>\n<stop offset="0.20313" stop-color="#B81515"/>\n<stop offset="0.20703" stop-color="#B81616"/>\n<stop offset="0.21094" stop-color="#B91616"/>\n<stop offset="0.21484" stop-color="#BA1616"/>\n<stop offset="0.21875" stop-color="#BA1717"/>\n<stop offset="0.22266" stop-color="#BB1717"/>\n<stop offset="0.22656" stop-color="#BB1818"/>\n<stop offset="0.23047" stop-color="#BC1818"/>\n<stop offset="0.23438" stop-color="#BC1919"/>\n<stop offset="0.23828" stop-color="#BD1919"/>\n<stop offset="0.24219" stop-color="#BD1919"/>\n<stop offset="0.24609" stop-color="#BE1A1A"/>\n<stop offset="0.25" stop-color="#BF1A1A"/>\n<stop offset="0.25391" stop-color="#BF1B1B"/>\n<stop offset="0.25781" stop-color="#C01B1B"/>\n<stop offset="0.26172" stop-color="#C01B1B"/>\n<stop offset="0.26563" stop-color="#C11C1C"/>\n<stop offset="0.26953" stop-color="#C11C1C"/>\n<stop offset="0.27344" stop-color="#C21D1D"/>\n<stop offset="0.27734" stop-color="#C21D1D"/>\n<stop offset="0.28125" stop-color="#C31E1E"/>\n<stop offset="0.28516" stop-color="#C41E1E"/>\n<stop offset="0.28906" stop-color="#C41E1E"/>\n<stop offset="0.29297" stop-color="#C51F1F"/>\n<stop offset="0.29688" stop-color="#C51F1F"/>\n<stop offset="0.30078" stop-color="#C62020"/>\n<stop offset="0.30469" stop-color="#C62020"/>\n<stop offset="0.30859" stop-color="#C72121"/>\n<stop offset="0.3125" stop-color="#C82121"/>\n<stop offset="0.31641" stop-color="#C82121"/>\n<stop offset="0.32031" stop-color="#C92222"/>\n<stop offset="0.32422" stop-color="#C92222"/>\n<stop offset="0.32813" stop-color="#CA2323"/>\n<stop offset="0.33203" stop-color="#CA2323"/>\n<stop offset="0.33594" stop-color="#CB2424"/>\n<stop offset="0.33984" stop-color="#CB2424"/>\n<stop offset="0.34375" stop-color="#CC2424"/>\n<stop offset="0.34766" stop-color="#CD2525"/>\n<stop offset="0.35156" stop-color="#CD2525"/>\n<stop offset="0.35547" stop-color="#CE2626"/>\n<stop offset="0.35938" stop-color="#CE2626"/>\n<stop offset="0.36328" stop-color="#CF2626"/>\n<stop offset="0.36719" stop-color="#CF2727"/>\n<stop offset="0.37109" stop-color="#D02727"/>\n<stop offset="0.375" stop-color="#D02828"/>\n<stop offset="0.37891" stop-color="#D12828"/>\n<stop offset="0.38281" stop-color="#D22929"/>\n<stop offset="0.38672" stop-color="#D22929"/>\n<stop offset="0.39063" stop-color="#D32929"/>\n<stop offset="0.39453" stop-color="#D32A2A"/>\n<stop offset="0.39844" stop-color="#D42A2A"/>\n<stop offset="0.40234" stop-color="#D42B2B"/>\n<stop offset="0.40625" stop-color="#D52B2B"/>\n<stop offset="0.41016" stop-color="#D62C2C"/>\n<stop offset="0.41406" stop-color="#D62C2C"/>\n<stop offset="0.41797" stop-color="#D72C2C"/>\n<stop offset="0.42188" stop-color="#D72D2D"/>\n<stop offset="0.42578" stop-color="#D82D2D"/>\n<stop offset="0.42969" stop-color="#D82E2E"/>\n<stop offset="0.43359" stop-color="#D92E2E"/>\n<stop offset="0.4375" stop-color="#D92F2F"/>\n<stop offset="0.44141" stop-color="#DA2F2F"/>\n<stop offset="0.44531" stop-color="#DB2F2F"/>\n<stop offset="0.44922" stop-color="#DB3030"/>\n<stop offset="0.45313" stop-color="#DC3030"/>\n<stop offset="0.45703" stop-color="#DC3131"/>\n<stop offset="0.46094" stop-color="#DD3131"/>\n<stop offset="0.46484" stop-color="#DD3232"/>\n<stop offset="0.46875" stop-color="#DE3232"/>\n<stop offset="0.47266" stop-color="#DE3232"/>\n<stop offset="0.47656" stop-color="#DF3333"/>\n<stop offset="0.48047" stop-color="#E03333"/>\n<stop offset="0.48438" stop-color="#E03434"/>\n<stop offset="0.48828" stop-color="#E13434"/>\n<stop offset="0.49219" stop-color="#E13434"/>\n<stop offset="0.49609" stop-color="#E23535"/>\n<stop offset="0.5" stop-color="#E23535"/>\n<stop offset="0.50391" stop-color="#E33636"/>\n<stop offset="0.50781" stop-color="#E43636"/>\n<stop offset="0.51172" stop-color="#E43737"/>\n<stop offset="0.51563" stop-color="#E53737"/>\n<stop offset="0.51953" stop-color="#E53737"/>\n<stop offset="0.52344" stop-color="#E63838"/>\n<stop offset="0.52734" stop-color="#E63838"/>\n<stop offset="0.53125" stop-color="#E73939"/>\n<stop offset="0.53516" stop-color="#E73939"/>\n<stop offset="0.53906" stop-color="#E83A3A"/>\n<stop offset="0.54297" stop-color="#E93A3A"/>\n<stop offset="0.54688" stop-color="#E93A3A"/>\n<stop offset="0.55078" stop-color="#EA3B3B"/>\n<stop offset="0.55469" stop-color="#EA3B3B"/>\n<stop offset="0.55859" stop-color="#EB3C3C"/>\n<stop offset="0.5625" stop-color="#EB3C3C"/>\n<stop offset="0.56641" stop-color="#EC3D3D"/>\n<stop offset="0.57031" stop-color="#EC3D3D"/>\n<stop offset="0.57422" stop-color="#ED3D3D"/>\n<stop offset="0.57813" stop-color="#EE3E3E"/>\n<stop offset="0.58203" stop-color="#EE3E3E"/>\n<stop offset="0.58594" stop-color="#EF3F3F"/>\n<stop offset="0.58984" stop-color="#EF3F3F"/>\n<stop offset="0.59375" stop-color="#F03F3F"/>\n<stop offset="0.59766" stop-color="#F04040"/>\n<stop offset="0.60156" stop-color="#F14040"/>\n<stop offset="0.60547" stop-color="#F14141"/>\n<stop offset="0.60938" stop-color="#F24141"/>\n<stop offset="0.61328" stop-color="#F34242"/>\n<stop offset="0.61719" stop-color="#F34242"/>\n<stop offset="0.62109" stop-color="#F44242"/>\n<stop offset="0.625" stop-color="#F44343"/>\n<stop offset="0.62891" stop-color="#F54343"/>\n<stop offset="0.63281" stop-color="#F54444"/>\n<stop offset="0.63672" stop-color="#F64444"/>\n<stop offset="0.64063" stop-color="#F74545"/>\n<stop offset="0.64453" stop-color="#F74545"/>\n<stop offset="0.64844" stop-color="#F84545"/>\n<stop offset="0.65234" stop-color="#F84646"/>\n<stop offset="0.65625" stop-color="#F94646"/>\n<stop offset="0.66016" stop-color="#F94747"/>\n<stop offset="0.66406" stop-color="#FA4747"/>\n<stop offset="0.66797" stop-color="#FA4848"/>\n<stop offset="0.67188" stop-color="#FB4848"/>\n<stop offset="0.67578" stop-color="#FC4848"/>\n<stop offset="0.67969" stop-color="#FC4949"/>\n<stop offset="0.68359" stop-color="#FD4949"/>\n<stop offset="0.6875" stop-color="#FD4A4A"/>\n<stop offset="0.69141" stop-color="#FE4A4A"/>\n<stop offset="0.69531" stop-color="#FE4B4B"/>\n<stop offset="0.70313" stop-color="#FF4B4B"/>\n<stop offset="0.71875" stop-color="#FF4B4B"/>\n<stop offset="0.75" stop-color="#FF4B4B"/>\n<stop offset="1" stop-color="#FF4B4B"/>\n</linearGradient>\n</defs>\n</svg>',
                title: "Opera",
                url: "../https@www.opera.com/ru/download"
            },
            safari: {
                svg: '<svg width="66" height="67" viewBox="0 0 66 67" fill="none" xmlns="http://www.w3.org/2000/svg">\n<g opacity="0.53" filter="url(#safari_filter0_f)">\n<path d="M63.0553 34.7547C63.0553 38.5553 62.2779 42.3187 60.7674 45.8301C59.257 49.3414 57.0432 52.5319 54.20ABFF33A09" fill="black"/>\n</g>\n<path d="M64.2 32.2C64.2 36.2973 63.393 40.3544 61.825 44.1397C60.2571 47.9251 57.9589 51.3646 55.0617 54.2610E59031AAC" fill="url(#safari_paint0_linear)" stroke="#CDCDCD" stroke-width="0.0930123" stroke-linecap="round" stroke-linejoin="round"/>\n<path d="M61.7551 32.2C61.7551 39.8264 58.7255 47.1404 53.3329 52.533C47.9403 57.9257 40.6262 60.9552 32.99990795834A14" fill="url(#safari_paint1_radial)"/>\n<path d="M32.9997 4.94458C32.7674 4.94458 32.5804 5.13154 32.5804 5.36381V10.1996C32.5804 10.4319 32.7674 10.041B591A7A" fill="#F4F2F3"/>\n<g opacity="0.409" filter="url(#safari_filter1_f)">\n<path d="M52.65 15.4307L29.7126 28.7574L15.2099 51.5886L36.4261 35.874L52.65 15.4307Z" fill="black"/>\n</g>\n<path d="M36.287 35.6427L29.7124 28.7576L53.0349 13.0686L36.287 35.6427Z" fill="#FF5150"/>\n<path d="M36.2875 35.6427L29.7129 28.7576L12.965 51.3318L36.2875 35.6427Z" fill="#F1F1F1"/>\n<path opacity="0.243" d="M12.9647 51.3318L36.2872 35.6427L53.0352 13.0686L12.9647 51.3318Z" fill="black"/>\n<defs>\n<filter id="safari_filter0_f" x="0.575507" y="3.44431" width="64.8487" height="62.6207" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>\n<feGaussianBlur stdDeviation="1.18446" result="effect1_foregroundBlur"/>\n</filter>\n<filter id="safari_filter1_f" x="14.5366" y="14.7573" width="38.7867" height="37.5046" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>\n<feGaussianBlur stdDeviation="0.336663" result="effect1_foregroundBlur"/>\n</filter>\n<linearGradient id="safari_paint0_linear" x1="33" y1="63.4" x2="33" y2="1" gradientUnits="userSpaceOnUse">\n<stop stop-color="#BDBDBD"/>\n<stop offset="1" stop-color="white"/>\n</linearGradient>\n<radialGradient id="safari_paint1_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(33.1308 28.0075) scale(31.2001)">\n<stop stop-color="#06C2E7"/>\n<stop offset="0.25" stop-color="#0DB8EC"/>\n<stop offset="0.5" stop-color="#12AEF1"/>\n<stop offset="0.75" stop-color="#1F86F9"/>\n<stop offset="1" stop-color="#107DDD"/>\n</radialGradient>\n</defs>\n</svg>',
                title: "Safari",
                url: "../https@support.apple.com/downloads/safari"
            }
        };

    function a(o, t) {
        for (var s = 0; s < t.length; s++) {
            var e = t[s];
            e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(o, e.key, e)
        }
    }
    var l = s(3).default,
        i = "unsupported_browser__popup",
        c = function() {
            function o(t) {
                ! function(o, t) {
                    if (!(o instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, o), this.trans = t
            }
            var t, s;
            return t = o, (s = [{
                key: "build",
                value: function() {
                    var o = document.createElement("div");
                    o.innerHTML = this.renderPopup(), document.body.appendChild(o);
                    var t = document.getElementById(i);
                    document.getElementById("unsupported_browser__popup_close").addEventListener("click", function() {
                        t.style.display = "none", localStorage.setItem("unsupported_browser__show", "1")
                    })
                }
            }, {
                key: "renderPopup",
                value: function() {
                    return '<div id="'.concat(i, '" class="').concat(l.unsupported_browser__modal, '">\n            <div class="').concat(l.unsupported_browser__modal_content, '">\n            <span id="').concat("unsupported_browser__popup_close", '" class="').concat(l.unsupported_browser__close, '">&times;</span>\n            ').concat(this.renderContent(), "\n        </div></div>")
                }
            }, {
                key: "renderContent",
                value: function() {
                    var o = "",
                        t = '<div class="'.concat(l.unsupported_browser__message, '">\n            <h1>').concat(this.trans.get("Browser not supported"), "</h1>\n            <p>").concat(this.trans.get("Sorry, your browser version is not supported. Please use the latest version of one of the following browsers:"), "</p>\n        </div>");
                    return Object.keys(f).map(function(o) {
                        return f[o]
                    }).forEach(function(t) {
                        o += '<div class="'.concat(l.unsupported_browser__element, '">\n                <a target="_blank" title="').concat(t.title, '" href="').concat(t.url, '">').concat(t.svg, '\n                    <div class="').concat(l.unsupported_browser__name, '">').concat(t.title, "</div>\n                </a>                    \n            </div>")
                    }), t += '<div class="'.concat(l.unsupported_browser__icons, '">').concat(o, "</div>"), '<div class="'.concat(l.unsupported_browser__wrapper, '">') + t + "</div>"
                }
            }]) && a(t.prototype, s), o
        }();
    (-1 !== navigator.userAgent.indexOf("MSIE") || navigator.appVersion.indexOf("Trident/") > -1) && function() {
        if (!localStorage.getItem("unsupported_browser__show")) {
            var o = document.querySelector("html").getAttribute("lang"),
                t = new p(o, e);
            new c(t).build()
        }
    }()
}]);;