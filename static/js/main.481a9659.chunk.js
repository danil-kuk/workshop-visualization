(this["webpackJsonpworkshop-visualization"]=this["webpackJsonpworkshop-visualization"]||[]).push([[0],{29:function(t,n,e){"use strict";e.d(n,"a",(function(){return d}));var r=e(1),c=e.n(r),u=e(3),o=e(34),i=new o.a("workshop-mongo-qqunb");function a(){var t,n=null===(t=i.currentUser)||void 0===t?void 0:t.mongoClient("mongodb-atlas");if(!n)throw Error("Database connection error! Unable to create MongoDB Client.");return n}function s(){return(s=Object(u.a)(c.a.mark((function t(n,e){var r,u,o,i=arguments;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=i.length>2&&void 0!==i[2]?i[2]:10,u=a(),o=u.db(n).collection(e),t.abrupt("return",o.find({},{limit:r}));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var d={login:function(){var t=o.b.apiKey("A80ekR6X3jZ4vubEuT9oHwVqqBLWRgPCOxQNC4eS63hVG1d31R7wi99wUxNiz5nZ");return i.logIn(t,!1)},getItemById:function(t,n,e){return a().db(t).collection(n).findOne({_id:e})},getItems:function(t,n){return s.apply(this,arguments)}}},39:function(t,n,e){"use strict";e.d(n,"a",(function(){return i})),e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return s}));var r=e(13),c=e(18),u=e(42),o=e(43),i=Object(r.a)({reducer:{counter:u.a.reducer,dashboard:o.a.reducer}}),a=function(){return Object(c.b)()},s=c.c},40:function(t,n,e){"use strict";function r(t){return"/workshop-visualization"+t}e.d(n,"a",(function(){return r}))},41:function(t,n,e){"use strict";var r=e(39);e.d(n,"a",(function(){return r.a})),e.d(n,"b",(function(){return r.b})),e.d(n,"c",(function(){return r.c}))},42:function(t,n,e){"use strict";e.d(n,"a",(function(){return c})),e.d(n,"c",(function(){return o})),e.d(n,"b",(function(){return i})),e.d(n,"d",(function(){return a}));var r=e(13),c=Object(r.c)({name:"counter",initialState:{value:0},reducers:{increment:function(t){t.value+=1},decrement:function(t){t.value-=1},incrementByAmount:function(t,n){t.value+=n.payload}}}),u=c.actions,o=u.increment,i=u.decrement,a=(u.incrementByAmount,function(t){return t.counter.value})},43:function(t,n,e){"use strict";e.d(n,"b",(function(){return j})),e.d(n,"a",(function(){return h})),e.d(n,"c",(function(){return p}));var r=e(13),c=e(1),u=e.n(c),o=e(3),i=e(10),a=function(t){return{studentsCount:t.students_count,projectsCount:t.projects_count,teamsCount:t.teams_count,curatorsCount:t.curators_count,customersCount:t.customers_count}},s=e(29),d="dashboard",l="keyStatistic";function f(){return(f=Object(o.a)(u.a.mark((function t(){var n,e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=i.b.createFromHexString("605f04bda559b036e051d558"),t.next=3,s.a.getItemById(d,l,n);case 3:if(e=t.sent){t.next=6;break}return t.abrupt("return",null);case 6:return t.abrupt("return",a(e));case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var b=function(){return f.apply(this,arguments)},j=Object(r.b)("dashboard/fetchKeyStatistic",b),h=Object(r.c)({name:"dashboard",initialState:{keyStatistic:null},reducers:{},extraReducers:function(t){return t.addCase(j.fulfilled,(function(t,n){t.keyStatistic=n.payload}))}}),p=function(t){return t.dashboard.keyStatistic}},62:function(t,n,e){},63:function(t,n,e){},64:function(t,n,e){"use strict";e.r(n);var r=e(0),c=e.n(r),u=e(25),o=e.n(u),i=e(18),a=e(24),s=e(12),d=e(2),l=e(29),f=e(19),b=e(8),j=Object(r.lazy)((function(){return e.e(3).then(e.bind(null,68))})),h=Object(r.lazy)((function(){return e.e(4).then(e.bind(null,69))})),p=[{path:"/welcome",element:Object(b.jsx)(j,{}),children:[{path:"counter",element:Object(b.jsx)(h,{})}]}],m=e(40),v=[].concat(Object(f.a)(p),[{path:"/",element:Object(b.jsx)(d.a,{to:Object(m.a)("/welcome")})},{path:"*",element:Object(b.jsx)("div",{children:"404 page"})}]),O=function(){var t=Object(d.i)(v,"/workshop-visualization"),n=Object(r.useState)(!1),e=Object(s.a)(n,2),c=e[0],u=e[1];return Object(r.useEffect)((function(){l.a.login().then((function(){return u(!0)})).catch((function(t){return console.error("Database connection error",t)}))}),[]),c?Object(b.jsx)("main",{children:t}):null},x=e(41);e(62),e(63);o.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(i.a,{store:x.a,children:Object(b.jsx)(a.a,{children:Object(b.jsx)(r.Suspense,{fallback:Object(b.jsx)("div",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."}),children:Object(b.jsx)(O,{})})})})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.481a9659.chunk.js.map