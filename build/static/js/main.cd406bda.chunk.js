(this.webpackJsonpchating=this.webpackJsonpchating||[]).push([[0],{12:function(e,t,c){},13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var i=c(1),r=c.n(i),n=c(7),a=c.n(n),s=(c(12),c(5)),d=c(6),o=(c.p,c(13),c(0));var l=function(e){return Object(o.jsx)("div",{class:"col-lg-4 col-md-6 mb-4",children:Object(o.jsxs)("div",{class:"card h-100",children:[Object(o.jsx)("a",{href:"#",children:Object(o.jsx)("img",{class:"card-img-top",src:e.data.img,alt:""})}),Object(o.jsxs)("div",{class:"card-body",children:[Object(o.jsx)("h4",{class:"card-title",children:Object(o.jsx)("a",{href:"#",children:e.data.productName})}),Object(o.jsx)("h5",{children:e.data.price}),Object(o.jsx)("p",{class:"card-text",children:e.data.discription})]}),Object(o.jsxs)("div",{class:"card-footer",children:[Object(o.jsx)("small",{class:"text-muted",children:"\u2605 \u2605 \u2605 \u2605 \u2606"}),Object(o.jsx)("button",{class:"btn btn-warning",onClick:function(){return e.handleAddItems(e.data)},children:"Add to Cart"})]})]})})};var j=function(){var e=Object(i.useState)([]),t=Object(d.a)(e,2),c=t[0],r=t[1],n=Object(i.useState)(0),a=Object(d.a)(n,2),j=a[0],p=a[1];function h(e){c.push(e),r(Object(s.a)(c));var t=parseFloat(j)+parseFloat(e.price);console.log(t),p(t.toFixed(2))}return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"row",children:[Object(o.jsxs)("div",{class:"col-lg-3",children:[Object(o.jsx)("h1",{class:"my-4",children:"Your Cart"}),Object(o.jsxs)("div",{class:"list-group",children:[Object(o.jsx)("ul",{class:"list-group",children:c.map((function(e,t){return Object(o.jsxs)("li",{class:"list-group-item d-flex justify-content-between align-items-center",children:[e.productName,"-Rs",e.price,Object(o.jsx)("span",{class:" btn btn-primary badge-pill",onClick:function(){return function(e){var t=Math.floor(j-c[e].price);p(t.toFixed(2)),c.splice(e,1),r(Object(s.a)(c))}(t)},children:"Delete"})]})}))}),Object(o.jsxs)("h5",{class:"bg-warning",children:["Your Cart Value :",j]})]})]}),Object(o.jsx)("div",{className:"col-lg-9",children:Object(o.jsx)("div",{className:"row",children:[{productName:"virtue",price:72e3,discription:"1.quality performance     2.warranty of upto 5years         3.free Insurance included",img:"https://vertuphones.in/image/thumbnails/18/85/vertu_aster_p_rococo_phones_in_india_png-100435-250x250.png"},{productName:"iphone",price:12e4,discription:"1.excellet performance  2.warranty upto 2years",img:"https://th.bing.com/th/id/OIP.TWgBkFbuv6P74-YkOnatfwHaHa?pid=ImgDet&rs=1"},{productName:"samsung",price:95e3,discription:"1.good performance     2.warranty upto 1years",img:"https://th.bing.com/th/id/R8301d4967f8251aeb31542f97f1e224f?rik=Pi%2fnibsAftdpGw&pid=ImgRaw"},{productName:"moto",price:22e3,discription:"1.good performance         2.warranty upto 1years",img:"https://th.bing.com/th/id/R17ce73388959d5d29e4fe9ebca345598?rik=I%2b%2f3Nt1mYyVNzQ&pid=ImgRaw"}].map((function(e){return Object(o.jsx)(l,{data:e,handleAddItems:h})}))})})]})})})},p=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,16)).then((function(t){var c=t.getCLS,i=t.getFID,r=t.getFCP,n=t.getLCP,a=t.getTTFB;c(e),i(e),r(e),n(e),a(e)}))};a.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(j,{})}),document.getElementById("root")),p()}},[[15,1,2]]]);
//# sourceMappingURL=main.cd406bda.chunk.js.map