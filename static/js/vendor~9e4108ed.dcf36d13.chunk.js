(this.webpackJsonpyugong=this.webpackJsonpyugong||[]).push([[59],{197:function(t,e,a){"use strict";a.d(e,"e",(function(){return T})),a.d(e,"c",(function(){return W})),a.d(e,"b",(function(){return I})),a.d(e,"d",(function(){return _})),a.d(e,"a",(function(){return B}));var r=a(64),n=a(43),i=a(326),o=a(147),l=a(279),s=a(52),c=a(1),u=a(44),d=a(18),f=a(14),h=2*Math.PI,g=o.a.CMD,v=["top","right","bottom","left"];function b(t,e,a,r,n){var i=a.width,o=a.height;switch(t){case"top":r.set(a.x+i/2,a.y-e),n.set(0,-1);break;case"bottom":r.set(a.x+i/2,a.y+o+e),n.set(0,1);break;case"left":r.set(a.x-e,a.y+o/2),n.set(-1,0);break;case"right":r.set(a.x+i+e,a.y+o/2),n.set(1,0)}}function y(t,e,a,r,n,i,o,s,c){o-=t,s-=e;var u=Math.sqrt(o*o+s*s),d=(o/=u)*a+t,f=(s/=u)*a+e;if(Math.abs(r-n)%h<1e-4)return c[0]=d,c[1]=f,u-a;if(i){var g=r;r=Object(l.a)(n),n=Object(l.a)(g)}else r=Object(l.a)(r),n=Object(l.a)(n);r>n&&(n+=h);var v=Math.atan2(s,o);if(v<0&&(v+=h),v>=r&&v<=n||v+h>=r&&v+h<=n)return c[0]=d,c[1]=f,u-a;var b=a*Math.cos(r)+t,y=a*Math.sin(r)+e,p=a*Math.cos(n)+t,m=a*Math.sin(n)+e,x=(b-o)*(b-o)+(y-s)*(y-s),w=(p-o)*(p-o)+(m-s)*(m-s);return x<w?(c[0]=b,c[1]=y,Math.sqrt(x)):(c[0]=p,c[1]=m,Math.sqrt(w))}function p(t,e,a,r,n,i,o,l){var s=n-t,c=i-e,u=a-t,d=r-e,f=Math.sqrt(u*u+d*d),h=(s*(u/=f)+c*(d/=f))/f;l&&(h=Math.min(Math.max(h,0),1)),h*=f;var g=o[0]=t+h*u,v=o[1]=e+h*d;return Math.sqrt((g-n)*(g-n)+(v-i)*(v-i))}function m(t,e,a,r,n,i,o){a<0&&(t+=a,a=-a),r<0&&(e+=r,r=-r);var l=t+a,s=e+r,c=o[0]=Math.min(Math.max(n,t),l),u=o[1]=Math.min(Math.max(i,e),s);return Math.sqrt((c-n)*(c-n)+(u-i)*(u-i))}var x=[];function w(t,e,a){var r=m(e.x,e.y,e.width,e.height,t.x,t.y,x);return a.set(x[0],x[1]),r}function O(t,e,a){for(var r,n,i=0,o=0,l=0,c=0,u=1/0,d=e.data,f=t.x,h=t.y,v=0;v<d.length;){var b=d[v++];1===v&&(l=i=d[v],c=o=d[v+1]);var w=u;switch(b){case g.M:i=l=d[v++],o=c=d[v++];break;case g.L:w=p(i,o,d[v],d[v+1],f,h,x,!0),i=d[v++],o=d[v++];break;case g.C:w=Object(s.e)(i,o,d[v++],d[v++],d[v++],d[v++],d[v],d[v+1],f,h,x),i=d[v++],o=d[v++];break;case g.Q:w=Object(s.l)(i,o,d[v++],d[v++],d[v],d[v+1],f,h,x),i=d[v++],o=d[v++];break;case g.A:var O=d[v++],M=d[v++],S=d[v++],A=d[v++],L=d[v++],j=d[v++];v+=1;var T=!!(1-d[v++]);r=Math.cos(L)*S+O,n=Math.sin(L)*A+M,v<=1&&(l=r,c=n),w=y(O,M,A,L,L+j,T,(f-O)*A/S+O,h,x),i=Math.cos(L+j)*S+O,o=Math.sin(L+j)*A+M;break;case g.R:w=m(l=i=d[v++],c=o=d[v++],d[v++],d[v++],f,h,x);break;case g.Z:w=p(i,o,l,c,f,h,x,!0),i=l,o=c}w<u&&(u=w,a.set(x[0],x[1]))}return u}var M=new r.a,S=new r.a,A=new r.a,L=new r.a,j=new r.a;function T(t,e){if(t){var a=t.getTextGuideLine(),i=t.getTextContent();if(i&&a){var o=t.textGuideLineConfig||{},l=[[0,0],[0,0],[0,0]],s=o.candidates||v,c=i.getBoundingRect().clone();c.applyTransform(i.getComputedTransform());var d=1/0,f=o.anchor,h=t.getComputedTransform(),g=h&&Object(u.invert)([],h),y=e.get("length2")||0;f&&A.copy(f);for(var p=0;p<s.length;p++){b(s[p],0,c,M,L),r.a.scaleAndAdd(S,M,L,y),S.transform(g);var m=t.getBoundingRect(),x=f?f.distance(S):t instanceof n.b?O(S,t.path,A):w(S,m,A);x<d&&(d=x,S.transform(h),A.transform(h),A.toArray(l[0]),S.toArray(l[1]),M.toArray(l[2]))}W(l,e.get("minTurnAngle")),a.setShape({points:l})}}}var C=[],k=new r.a;function W(t,e){if(e<=180&&e>0){e=e/180*Math.PI,M.fromArray(t[0]),S.fromArray(t[1]),A.fromArray(t[2]),r.a.sub(L,M,S),r.a.sub(j,A,S);var a=L.len(),n=j.len();if(!(a<.001||n<.001)){L.scale(1/a),j.scale(1/n);var i=L.dot(j);if(Math.cos(e)<i){var o=p(S.x,S.y,A.x,A.y,M.x,M.y,C,!1);k.fromArray(C),k.scaleAndAdd(j,o/Math.tan(Math.PI-e));var l=A.x!==S.x?(k.x-S.x)/(A.x-S.x):(k.y-S.y)/(A.y-S.y);if(isNaN(l))return;l<0?r.a.copy(k,S):l>1&&r.a.copy(k,A),k.toArray(t[1])}}}}function I(t,e,a){if(a<=180&&a>0){a=a/180*Math.PI,M.fromArray(t[0]),S.fromArray(t[1]),A.fromArray(t[2]),r.a.sub(L,S,M),r.a.sub(j,A,S);var n=L.len(),i=j.len();if(!(n<.001||i<.001))if(L.scale(1/n),j.scale(1/i),L.dot(e)<Math.cos(a)){var o=p(S.x,S.y,A.x,A.y,M.x,M.y,C,!1);k.fromArray(C);var l=Math.PI/2,s=l+Math.acos(j.dot(e))-a;if(s>=l)r.a.copy(k,A);else{k.scaleAndAdd(j,o/Math.tan(Math.PI/2-s));var c=A.x!==S.x?(k.x-S.x)/(A.x-S.x):(k.y-S.y)/(A.y-S.y);if(isNaN(c))return;c<0?r.a.copy(k,S):c>1&&r.a.copy(k,A)}k.toArray(t[1])}}}function P(t,e,a,r){var n="normal"===a,i=n?t:t.ensureState(a);i.ignore=e;var o=r.get("smooth");o&&!0===o&&(o=.3),i.shape=i.shape||{},o>0&&(i.shape.smooth=o);var l=r.getModel("lineStyle").getLineStyle();n?t.useStyle(l):i.style=l}function D(t,e){var a=e.smooth,r=e.points;if(r)if(t.moveTo(r[0][0],r[0][1]),a>0&&r.length>=3){var n=d.dist(r[0],r[1]),i=d.dist(r[1],r[2]);if(!n||!i)return t.lineTo(r[1][0],r[1][1]),void t.lineTo(r[2][0],r[2][1]);var o=Math.min(n,i)*a,l=d.lerp([],r[1],r[0],o/n),s=d.lerp([],r[1],r[2],o/i),c=d.lerp([],l,s,.5);t.bezierCurveTo(l[0],l[1],l[0],l[1],c[0],c[1]),t.bezierCurveTo(s[0],s[1],s[0],s[1],r[2][0],r[2][1])}else for(var u=1;u<r.length;u++)t.lineTo(r[u][0],r[u][1])}function _(t,e,a){var r=t.getTextGuideLine(),n=t.getTextContent();if(n){for(var o=e.normal,l=o.get("show"),s=n.ignore,u=0;u<f.a.length;u++){var d=f.a[u],h=e[d],g="normal"===d;if(h){var v=h.get("show");if((g?s:Object(c.retrieve2)(n.states[d]&&n.states[d].ignore,s))||!Object(c.retrieve2)(v,l)){var b=g?r:r&&r.states.normal;b&&(b.ignore=!0);continue}r||(r=new i.a,t.setTextGuideLine(r),g||!s&&l||P(r,!0,"normal",e.normal),t.stateProxy&&(r.stateProxy=t.stateProxy)),P(r,!1,d,h)}}if(r){Object(c.defaults)(r.style,a),r.style.fill=null;var y=o.get("showAbove");(t.textGuideLineConfig=t.textGuideLineConfig||{}).showAbove=y||!1,r.buildPath=D}}else r&&t.removeTextGuideLine()}function B(t,e){e=e||"labelLine";for(var a={normal:t.getModel(e)},r=0;r<f.g.length;r++){var n=f.g[r];a[n]=t.getModel([n,e])}return a}},242:function(t,e,a){"use strict";a.d(e,"a",(function(){return d})),a.d(e,"e",(function(){return f})),a.d(e,"d",(function(){return h})),a.d(e,"f",(function(){return v})),a.d(e,"c",(function(){return b})),a.d(e,"b",(function(){return y}));var r=a(1),n=a(7),i=a(128),o=a(216),l="__ec_stack_",s="undefined"!==typeof Float32Array?Float32Array:Array;function c(t){return t.get("stack")||l+t.seriesIndex}function u(t){return t.dim+t.index}function d(t){var e=[],a=t.axis,n="axis0";if("category"===a.type){for(var i=a.getBandWidth(),o=0;o<t.count;o++)e.push(r.defaults({bandWidth:i,axisKey:n,stackId:l+o},t));var s=g(e),c=[];for(o=0;o<t.count;o++){var u=s.axis0[l+o];u.offsetCenter=u.offset+u.width/2,c.push(u)}return c}}function f(t,e){var a=[];return e.eachSeriesByType(t,(function(t){p(t)&&!m(t)&&a.push(t)})),a}function h(t){var e=function(t){var e={};r.each(t,(function(t){var a=t.coordinateSystem.getBaseAxis();if("time"===a.type||"value"===a.type)for(var r=t.getData(),n=a.dim+"_"+a.index,i=r.getDimensionIndex(r.mapDimension(a.dim)),o=r.getStore(),l=0,s=o.count();l<s;++l){var c=o.get(i,l);e[n]?e[n].push(c):e[n]=[c]}}));var a={};for(var n in e)if(e.hasOwnProperty(n)){var i=e[n];if(i){i.sort((function(t,e){return t-e}));for(var o=null,l=1;l<i.length;++l){var s=i[l]-i[l-1];s>0&&(o=null===o?s:Math.min(o,s))}a[n]=o}}return a}(t),a=[];return r.each(t,(function(t){var r,i=t.coordinateSystem.getBaseAxis(),o=i.getExtent();if("category"===i.type)r=i.getBandWidth();else if("value"===i.type||"time"===i.type){var l=i.dim+"_"+i.index,s=e[l],d=Math.abs(o[1]-o[0]),f=i.scale.getExtent(),h=Math.abs(f[1]-f[0]);r=s?d/h*s:d}else{var g=t.getData();r=Math.abs(o[1]-o[0])/g.count()}var v=Object(n.p)(t.get("barWidth"),r),b=Object(n.p)(t.get("barMaxWidth"),r),y=Object(n.p)(t.get("barMinWidth")||1,r),p=t.get("barGap"),m=t.get("barCategoryGap");a.push({bandWidth:r,barWidth:v,barMaxWidth:b,barMinWidth:y,barGap:p,barCategoryGap:m,axisKey:u(i),stackId:c(t)})})),g(a)}function g(t){var e={};r.each(t,(function(t,a){var r=t.axisKey,n=t.bandWidth,i=e[r]||{bandWidth:n,remainedWidth:n,autoWidthCount:0,categoryGap:null,gap:"20%",stacks:{}},o=i.stacks;e[r]=i;var l=t.stackId;o[l]||i.autoWidthCount++,o[l]=o[l]||{width:0,maxWidth:0};var s=t.barWidth;s&&!o[l].width&&(o[l].width=s,s=Math.min(i.remainedWidth,s),i.remainedWidth-=s);var c=t.barMaxWidth;c&&(o[l].maxWidth=c);var u=t.barMinWidth;u&&(o[l].minWidth=u);var d=t.barGap;null!=d&&(i.gap=d);var f=t.barCategoryGap;null!=f&&(i.categoryGap=f)}));var a={};return r.each(e,(function(t,e){a[e]={};var i=t.stacks,o=t.bandWidth,l=t.categoryGap;if(null==l){var s=r.keys(i).length;l=Math.max(35-4*s,15)+"%"}var c=Object(n.p)(l,o),u=Object(n.p)(t.gap,1),d=t.remainedWidth,f=t.autoWidthCount,h=(d-c)/(f+(f-1)*u);h=Math.max(h,0),r.each(i,(function(t){var e=t.maxWidth,a=t.minWidth;if(t.width){r=t.width;e&&(r=Math.min(r,e)),a&&(r=Math.max(r,a)),t.width=r,d-=r+u*r,f--}else{var r=h;e&&e<r&&(r=Math.min(e,d)),a&&a>r&&(r=a),r!==h&&(t.width=r,d-=r+u*r,f--)}})),h=(d-c)/(f+(f-1)*u),h=Math.max(h,0);var g,v=0;r.each(i,(function(t,e){t.width||(t.width=h),g=t,v+=t.width*(1+u)})),g&&(v-=g.width*u);var b=-v/2;r.each(i,(function(t,r){a[e][r]=a[e][r]||{bandWidth:o,offset:b,width:t.width},b+=t.width*(1+u)}))})),a}function v(t,e,a){if(t&&e){var r=t[u(e)];return null!=r&&null!=a?r[c(a)]:r}}function b(t,e){var a=f(t,e),n=h(a),o={};r.each(a,(function(t){var e=t.getData(),a=t.coordinateSystem,r=a.getBaseAxis(),l=c(t),s=n[u(r)][l],d=s.offset,f=s.width,h=a.getOtherAxis(r),g=t.get("barMinHeight")||0;o[l]=o[l]||[],e.setLayout({bandWidth:s.bandWidth,offset:d,size:f});for(var v=e.mapDimension(h.dim),b=e.mapDimension(r.dim),y=Object(i.c)(e,v),p=h.isHorizontal(),m=x(r,h,y),w=e.getStore(),O=e.getDimensionIndex(v),M=e.getDimensionIndex(b),S=0,A=w.count();S<A;S++){var L=w.get(O,S),j=w.get(M,S),T=L>=0?"p":"n",C=m;y&&(o[l][j]||(o[l][j]={p:m,n:m}),C=o[l][j][T]);var k,W=void 0,I=void 0,P=void 0,D=void 0;if(p)W=C,I=(k=a.dataToPoint([L,j]))[1]+d,P=k[0]-m,D=f,Math.abs(P)<g&&(P=(P<0?-1:1)*g),isNaN(P)||y&&(o[l][j][T]+=P);else W=(k=a.dataToPoint([j,L]))[0]+d,I=C,P=f,D=k[1]-m,Math.abs(D)<g&&(D=(D<=0?-1:1)*g),isNaN(D)||y&&(o[l][j][T]+=D);e.setItemLayout(S,{x:W,y:I,width:P,height:D})}}))}var y={seriesType:"bar",plan:Object(o.a)(),reset:function(t){if(p(t)&&m(t)){var e=t.getData(),a=t.coordinateSystem,r=a.master.getRect(),n=a.getBaseAxis(),i=a.getOtherAxis(n),o=e.getDimensionIndex(e.mapDimension(i.dim)),l=e.getDimensionIndex(e.mapDimension(n.dim)),c=i.isHorizontal(),u=c?0:1,d=v(h([t]),n,t).width;return d>.5||(d=.5),{progress:function(t,e){for(var f,h=t.count,g=new s(2*h),v=new s(2*h),b=new s(h),y=[],p=[],m=0,w=0,O=e.getStore();null!=(f=t.next());)p[u]=O.get(o,f),p[1-u]=O.get(l,f),y=a.dataToPoint(p,null),v[m]=c?r.x+r.width:y[0],g[m++]=y[0],v[m]=c?y[1]:r.y+r.height,g[m++]=y[1],b[w++]=f;e.setLayout({largePoints:g,largeDataIndices:b,largeBackgroundPoints:v,barWidth:d,valueAxisStart:x(n,i,!1),backgroundStart:c?r.x:r.y,valueAxisHorizontal:c})}}}}};function p(t){return t.coordinateSystem&&"cartesian2d"===t.coordinateSystem.type}function m(t){return t.pipelineContext&&t.pipelineContext.large}function x(t,e,a){return e.toGlobalCoord(e.dataToCoord("log"===e.type?1:0))}},261:function(t,e,a){"use strict";a.d(e,"a",(function(){return l}));var r=a(1),n=a(216),i=a(128),o=a(298);function l(t,e){return{seriesType:t,plan:Object(n.a)(),reset:function(t){var a=t.getData(),n=t.coordinateSystem,l=t.pipelineContext,s=e||l.large;if(n){var c=Object(r.map)(n.dimensions,(function(t){return a.mapDimension(t)})).slice(0,2),u=c.length,d=a.getCalculationInfo("stackResultDimension");Object(i.c)(a,c[0])&&(c[0]=d),Object(i.c)(a,c[1])&&(c[1]=d);var f=a.getStore(),h=a.getDimensionIndex(c[0]),g=a.getDimensionIndex(c[1]);return u&&{progress:function(t,e){for(var a=t.end-t.start,r=s&&Object(o.a)(a*u),i=[],l=[],c=t.start,d=0;c<t.end;c++){var v=void 0;if(1===u){var b=f.get(h,c);v=n.dataToPoint(b,null,l)}else i[0]=f.get(h,c),i[1]=f.get(g,c),v=n.dataToPoint(i,null,l);s?(r[d++]=v[0],r[d++]=v[1]):e.setItemLayout(c,v.slice())}s&&e.setLayout("points",r)}}}}}}},27:function(t,e,a){"use strict";a.d(e,"g",(function(){return d})),a.d(e,"e",(function(){return f})),a.d(e,"c",(function(){return h})),a.d(e,"b",(function(){return g})),a.d(e,"d",(function(){return m})),a.d(e,"f",(function(){return x})),a.d(e,"h",(function(){return w})),a.d(e,"a",(function(){return O}));var r=a(122),n=a(1),i=a(14),o=a(9),l=a(74),s={};function c(t,e){for(var a=0;a<i.g.length;a++){var r=i.g[a],n=e[r],o=t.ensureState(r);o.style=o.style||{},o.style.text=n}var l=t.currentStates.slice();t.clearStates(!0),t.setStyle({text:e.normal}),t.useStates(l,!0)}function u(t,e,a){var r,o=t.labelFetcher,l=t.labelDataIndex,s=t.labelDimIndex,c=e.normal;o&&(r=o.getFormattedLabel(l,"normal",null,s,c&&c.get("formatter"),null!=a?{interpolatedValue:a}:null)),null==r&&(r=Object(n.isFunction)(t.defaultText)?t.defaultText(l,t,a):t.defaultText);for(var u={normal:r},d=0;d<i.g.length;d++){var f=i.g[d],h=e[f];u[f]=Object(n.retrieve2)(o?o.getFormattedLabel(l,f,null,s,h&&h.get("formatter")):null,r)}return u}function d(t,e,a,o){a=a||s;for(var l=t instanceof r.a,d=!1,f=0;f<i.a.length;f++){if((w=e[i.a[f]])&&w.getShallow("show")){d=!0;break}}var v=l?t:t.getTextContent();if(d){l||(v||(v=new r.a,t.setTextContent(v)),t.stateProxy&&(v.stateProxy=t.stateProxy));var b=u(a,e),y=e.normal,p=!!y.getShallow("show"),m=h(y,o&&o.normal,a,!1,!l);m.text=b.normal,l||t.setTextConfig(g(y,a,!1));for(f=0;f<i.g.length;f++){var w,O=i.g[f];if(w=e[O]){var M=v.ensureState(O),S=!!Object(n.retrieve2)(w.getShallow("show"),p);if(S!==p&&(M.ignore=!S),M.style=h(w,o&&o[O],a,!0,!l),M.style.text=b[O],!l)t.ensureState(O).textConfig=g(w,a,!0)}}v.silent=!!y.getShallow("silent"),null!=v.style.x&&(m.x=v.style.x),null!=v.style.y&&(m.y=v.style.y),v.ignore=!p,v.useStyle(m),v.dirty(),a.enableTextSetter&&(x(v).setLabelText=function(t){var r=u(a,e,t);c(v,r)})}else v&&(v.ignore=!0);t.dirty()}function f(t,e){e=e||"label";for(var a={normal:t.getModel(e)},r=0;r<i.g.length;r++){var n=i.g[r];a[n]=t.getModel([n,e])}return a}function h(t,e,a,r,i){var o={};return function(t,e,a,r,i){a=a||s;var o,l=e.ecModel,c=l&&l.option.textStyle,u=function(t){var e;for(;t&&t!==t.ecModel;){var a=(t.option||s).rich;if(a){e=e||{};for(var r=Object(n.keys)(a),i=0;i<r.length;i++){e[r[i]]=1}}t=t.parentModel}return e}(e);if(u)for(var d in o={},u)if(u.hasOwnProperty(d)){var f=e.getModel(["rich",d]);p(o[d]={},f,c,a,r,i,!1,!0)}o&&(t.rich=o);var h=e.get("overflow");h&&(t.overflow=h);var g=e.get("minMargin");null!=g&&(t.margin=g);p(t,e,c,a,r,i,!0,!1)}(o,t,a,r,i),e&&Object(n.extend)(o,e),o}function g(t,e,a){e=e||{};var r,i={},o=t.getShallow("rotate"),l=Object(n.retrieve2)(t.getShallow("distance"),a?null:5),s=t.getShallow("offset");return"outside"===(r=t.getShallow("position")||(a?null:"inside"))&&(r=e.defaultOutsidePosition||"top"),null!=r&&(i.position=r),null!=s&&(i.offset=s),null!=o&&(o*=Math.PI/180,i.rotation=o),null!=l&&(i.distance=l),i.outsideFill="inherit"===t.get("color")?e.inheritColor||null:"auto",i}var v=["fontStyle","fontWeight","fontSize","fontFamily","textShadowColor","textShadowBlur","textShadowOffsetX","textShadowOffsetY"],b=["align","lineHeight","width","height","tag","verticalAlign"],y=["padding","borderWidth","borderRadius","borderDashOffset","backgroundColor","borderColor","shadowColor","shadowBlur","shadowOffsetX","shadowOffsetY"];function p(t,e,a,r,i,o,l,c){a=!i&&a||s;var u=r&&r.inheritColor,d=e.getShallow("color"),f=e.getShallow("textBorderColor"),h=Object(n.retrieve2)(e.getShallow("opacity"),a.opacity);"inherit"!==d&&"auto"!==d||(d=u||null),"inherit"!==f&&"auto"!==f||(f=u||null),o||(d=d||a.color,f=f||a.textBorderColor),null!=d&&(t.fill=d),null!=f&&(t.stroke=f);var g=Object(n.retrieve2)(e.getShallow("textBorderWidth"),a.textBorderWidth);null!=g&&(t.lineWidth=g);var p=Object(n.retrieve2)(e.getShallow("textBorderType"),a.textBorderType);null!=p&&(t.lineDash=p);var m=Object(n.retrieve2)(e.getShallow("textBorderDashOffset"),a.textBorderDashOffset);null!=m&&(t.lineDashOffset=m),i||null!=h||c||(h=r&&r.defaultOpacity),null!=h&&(t.opacity=h),i||o||null==t.fill&&r.inheritColor&&(t.fill=r.inheritColor);for(var x=0;x<v.length;x++){var w=v[x];null!=(M=Object(n.retrieve2)(e.getShallow(w),a[w]))&&(t[w]=M)}for(x=0;x<b.length;x++){w=b[x];null!=(M=e.getShallow(w))&&(t[w]=M)}if(null==t.verticalAlign){var O=e.getShallow("baseline");null!=O&&(t.verticalAlign=O)}if(!l||!r.disableBox){for(x=0;x<y.length;x++){var M;w=y[x];null!=(M=e.getShallow(w))&&(t[w]=M)}var S=e.getShallow("borderType");null!=S&&(t.borderDash=S),"auto"!==t.backgroundColor&&"inherit"!==t.backgroundColor||!u||(t.backgroundColor=u),"auto"!==t.borderColor&&"inherit"!==t.borderColor||!u||(t.borderColor=u)}}function m(t,e){var a=e&&e.getModel("textStyle");return Object(n.trim)([t.fontStyle||a&&a.getShallow("fontStyle")||"",t.fontWeight||a&&a.getShallow("fontWeight")||"",(t.fontSize||a&&a.getShallow("fontSize")||12)+"px",t.fontFamily||a&&a.getShallow("fontFamily")||"sans-serif"].join(" "))}var x=Object(o.o)();function w(t,e,a,r){if(t){var n=x(t);n.prevValue=n.value,n.value=a;var i=e.normal;n.valueAnimation=i.get("valueAnimation"),n.valueAnimation&&(n.precision=i.get("precision"),n.defaultInterpolatedText=r,n.statesModels=e)}}function O(t,e,a,r,i){var s=x(t);if(s.valueAnimation){var d=s.defaultInterpolatedText,f=Object(n.retrieve2)(s.interpolatedValue,s.prevValue),h=s.value;(null==s.prevValue?l.c:l.h)(t,{},r,e,null,(function(r){var n=Object(o.k)(a,s.precision,f,h,r);s.interpolatedValue=1===r?null:n;var l=u({labelDataIndex:e,labelFetcher:i,defaultText:d?d(n):n+""},s.statesModels,n);c(t,l)}))}}},274:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return l})),a.d(e,"d",(function(){return s})),a.d(e,"a",(function(){return c}));var r=a(488),n=a(40);function i(t){for(var e=[],a=0;a<t.length;a++){var n=t[a];if(!n.defaultAttr.ignore){var i=n.label,o=i.getComputedTransform(),l=i.getBoundingRect(),s=!o||o[1]<1e-5&&o[2]<1e-5,c=i.style.margin||0,u=l.clone();u.applyTransform(o),u.x-=c/2,u.y-=c/2,u.width+=c,u.height+=c;var d=s?new r.a(l,o):null;e.push({label:i,labelLine:n.labelLine,rect:u,localRect:l,obb:d,priority:n.priority,defaultAttr:n.defaultAttr,layoutOption:n.computedLayoutOption,axisAligned:s,transform:o})}}return e}function o(t,e,a,r,n,i){var o=t.length;if(!(o<2)){t.sort((function(t,a){return t.rect[e]-a.rect[e]}));for(var l,s=0,c=!1,u=[],d=0,f=0;f<o;f++){var h=t[f],g=h.rect;(l=g[e]-s)<0&&(g[e]-=l,h.label[e]-=l,c=!0);var v=Math.max(-l,0);u.push(v),d+=v,s=g[e]+g[a]}d>0&&i&&O(-d/o,0,o);var b,y,p=t[0],m=t[o-1];return x(),b<0&&M(-b,.8),y<0&&M(y,.8),x(),w(b,y,1),w(y,b,-1),x(),b<0&&S(-b),y<0&&S(y),c}function x(){b=p.rect[e]-r,y=n-m.rect[e]-m.rect[a]}function w(t,e,a){if(t<0){var r=Math.min(e,-t);if(r>0){O(r*a,0,o);var n=r+t;n<0&&M(-n*a,1)}else M(-t*a,1)}}function O(a,r,n){0!==a&&(c=!0);for(var i=r;i<n;i++){var o=t[i];o.rect[e]+=a,o.label[e]+=a}}function M(r,n){for(var i=[],l=0,s=1;s<o;s++){var c=t[s-1].rect,u=Math.max(t[s].rect[e]-c[e]-c[a],0);i.push(u),l+=u}if(l){var d=Math.min(Math.abs(r)/l,n);if(r>0)for(s=0;s<o-1;s++){O(i[s]*d,0,s+1)}else for(s=o-1;s>0;s--){O(-(i[s-1]*d),s,o)}}}function S(t){var e=t<0?-1:1;t=Math.abs(t);for(var a=Math.ceil(t/(o-1)),r=0;r<o-1;r++)if(e>0?O(a,0,r+1):O(-a,o-r-1,o),(t-=a)<=0)return}}function l(t,e,a,r){return o(t,"x","width",e,a,r)}function s(t,e,a,r){return o(t,"y","height",e,a,r)}function c(t){var e=[];t.sort((function(t,e){return e.priority-t.priority}));var a=new n.a(0,0,0,0);function i(t){if(!t.ignore){var e=t.ensureState("emphasis");null==e.ignore&&(e.ignore=!1)}t.ignore=!0}for(var o=0;o<t.length;o++){var l=t[o],s=l.axisAligned,c=l.localRect,u=l.transform,d=l.label,f=l.labelLine;a.copy(l.rect),a.width-=.1,a.height-=.1,a.x+=.05,a.y+=.05;for(var h=l.obb,g=!1,v=0;v<e.length;v++){var b=e[v];if(a.intersect(b.rect)){if(s&&b.axisAligned){g=!0;break}if(b.obb||(b.obb=new r.a(b.localRect,b.transform)),h||(h=new r.a(c,u)),h.intersect(b.obb)){g=!0;break}}}g?(i(d),f&&i(f)):(d.attr("ignore",l.defaultAttr.ignore),f&&f.attr("ignore",l.defaultAttr.labelGuideIgnore),e.push(l))}}},735:function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return o}));var r=a(55),n=a(1);function i(t,e){var a=(e=e||{}).isRoundCap;return function(e,n,i){var o=n.position;if(!o||o instanceof Array)return Object(r.d)(e,n,i);var c=t(o),u=null!=n.distance?n.distance:5,d=this.shape,f=d.cx,h=d.cy,g=d.r,v=d.r0,b=(g+v)/2,y=d.startAngle,p=d.endAngle,m=(y+p)/2,x=a?Math.abs(g-v)/2:0,w=Math.cos,O=Math.sin,M=f+g*w(y),S=h+g*O(y),A="left",L="top";switch(c){case"startArc":M=f+(v-u)*w(m),S=h+(v-u)*O(m),A="center",L="top";break;case"insideStartArc":M=f+(v+u)*w(m),S=h+(v+u)*O(m),A="center",L="bottom";break;case"startAngle":M=f+b*w(y)+l(y,u+x,!1),S=h+b*O(y)+s(y,u+x,!1),A="right",L="middle";break;case"insideStartAngle":M=f+b*w(y)+l(y,-u+x,!1),S=h+b*O(y)+s(y,-u+x,!1),A="left",L="middle";break;case"middle":M=f+b*w(m),S=h+b*O(m),A="center",L="middle";break;case"endArc":M=f+(g+u)*w(m),S=h+(g+u)*O(m),A="center",L="bottom";break;case"insideEndArc":M=f+(g-u)*w(m),S=h+(g-u)*O(m),A="center",L="top";break;case"endAngle":M=f+b*w(p)+l(p,u+x,!0),S=h+b*O(p)+s(p,u+x,!0),A="left",L="middle";break;case"insideEndAngle":M=f+b*w(p)+l(p,-u+x,!0),S=h+b*O(p)+s(p,-u+x,!0),A="right",L="middle";break;default:return Object(r.d)(e,n,i)}return(e=e||{}).x=M,e.y=S,e.align=A,e.verticalAlign=L,e}}function o(t,e,a,r){if("number"!==typeof r)if(Object(n.isArray)(e))t.setTextConfig({rotation:0});else{var i,o=t.shape,l=o.clockwise?o.startAngle:o.endAngle,s=o.clockwise?o.endAngle:o.startAngle,c=(l+s)/2,u=a(e);switch(u){case"startArc":case"insideStartArc":case"middle":case"insideEndArc":case"endArc":i=c;break;case"startAngle":case"insideStartAngle":i=l;break;case"endAngle":case"insideEndAngle":i=s;break;default:return void t.setTextConfig({rotation:0})}var d=1.5*Math.PI-i;"middle"===u&&d>Math.PI/2&&d<1.5*Math.PI&&(d-=Math.PI),t.setTextConfig({rotation:d})}else t.setTextConfig({rotation:r})}function l(t,e,a){return e*Math.sin(t)*(a?-1:1)}function s(t,e,a){return e*Math.cos(t)*(a?1:-1)}},769:function(t,e,a){"use strict";a.d(e,"a",(function(){return M}));var r=a(9),n=a(40),i=a(74),o=a(31),l=a(7),s=a(194),c=a(197),u=a(1),d=a(274),f=a(27);function h(t){if(t){for(var e=[],a=0;a<t.length;a++)e.push(t[a].slice());return e}}function g(t,e){var a=t.label,r=e&&e.getTextGuideLine();return{dataIndex:t.dataIndex,dataType:t.dataType,seriesIndex:t.seriesModel.seriesIndex,text:t.label.style.text,rect:t.hostRect,labelRect:t.rect,align:a.style.align,verticalAlign:a.style.verticalAlign,labelLinePoints:h(r&&r.shape.points)}}var v=["align","verticalAlign","width","height","fontSize"],b=new s.a,y=Object(r.o)(),p=Object(r.o)();function m(t,e,a){for(var r=0;r<a.length;r++){var n=a[r];null!=e[n]&&(t[n]=e[n])}}var x=["x","y","rotation"],w=function(){function t(){this._labelList=[],this._chartViewList=[]}return t.prototype.clearLabels=function(){this._labelList=[],this._chartViewList=[]},t.prototype._addLabel=function(t,e,a,r,i){var o=r.style,l=r.__hostTarget.textConfig||{},s=r.getComputedTransform(),c=r.getBoundingRect().plain();n.a.applyTransform(c,c,s),s?b.setLocalTransform(s):(b.x=b.y=b.rotation=b.originX=b.originY=0,b.scaleX=b.scaleY=1);var u,d=r.__hostTarget;if(d){u=d.getBoundingRect().plain();var f=d.getComputedTransform();n.a.applyTransform(u,u,f)}var h=u&&d.getTextGuideLine();this._labelList.push({label:r,labelLine:h,seriesModel:a,dataIndex:t,dataType:e,layoutOption:i,computedLayoutOption:null,rect:c,hostRect:u,priority:u?u.width*u.height:0,defaultAttr:{ignore:r.ignore,labelGuideIgnore:h&&h.ignore,x:b.x,y:b.y,scaleX:b.scaleX,scaleY:b.scaleY,rotation:b.rotation,style:{x:o.x,y:o.y,align:o.align,verticalAlign:o.verticalAlign,width:o.width,height:o.height,fontSize:o.fontSize},cursor:r.cursor,attachedPos:l.position,attachedRot:l.rotation}})},t.prototype.addLabelsOfSeries=function(t){var e=this;this._chartViewList.push(t);var a=t.__model,r=a.get("labelLayout");(Object(u.isFunction)(r)||Object(u.keys)(r).length)&&t.group.traverse((function(t){if(t.ignore)return!0;var n=t.getTextContent(),i=Object(o.a)(t);n&&!n.disableLabelLayout&&e._addLabel(i.dataIndex,i.dataType,a,n,r)}))},t.prototype.updateLayoutConfig=function(t){var e=t.getWidth(),a=t.getHeight();function r(t,e){return function(){Object(c.e)(t,e)}}for(var n=0;n<this._labelList.length;n++){var i=this._labelList[n],o=i.label,s=o.__hostTarget,u=i.defaultAttr,d=void 0;d=(d="function"===typeof i.layoutOption?i.layoutOption(g(i,s)):i.layoutOption)||{},i.computedLayoutOption=d;var f=Math.PI/180;s&&s.setTextConfig({local:!1,position:null!=d.x||null!=d.y?null:u.attachedPos,rotation:null!=d.rotate?d.rotate*f:u.attachedRot,offset:[d.dx||0,d.dy||0]});var h=!1;if(null!=d.x?(o.x=Object(l.p)(d.x,e),o.setStyle("x",0),h=!0):(o.x=u.x,o.setStyle("x",u.style.x)),null!=d.y?(o.y=Object(l.p)(d.y,a),o.setStyle("y",0),h=!0):(o.y=u.y,o.setStyle("y",u.style.y)),d.labelLinePoints){var b=s.getTextGuideLine();b&&(b.setShape({points:d.labelLinePoints}),h=!1)}y(o).needsUpdateLabelLine=h,o.rotation=null!=d.rotate?d.rotate*f:u.rotation,o.scaleX=u.scaleX,o.scaleY=u.scaleY;for(var p=0;p<v.length;p++){var m=v[p];o.setStyle(m,null!=d[m]?d[m]:u.style[m])}if(d.draggable){if(o.draggable=!0,o.cursor="move",s){var x=i.seriesModel;if(null!=i.dataIndex)x=i.seriesModel.getData(i.dataType).getItemModel(i.dataIndex);o.on("drag",r(s,x.getModel("labelLine")))}}else o.off("drag"),o.cursor=u.cursor}},t.prototype.layout=function(t){var e=t.getWidth(),a=t.getHeight(),r=Object(d.b)(this._labelList),n=Object(u.filter)(r,(function(t){return"shiftX"===t.layoutOption.moveOverlap})),i=Object(u.filter)(r,(function(t){return"shiftY"===t.layoutOption.moveOverlap}));Object(d.c)(n,0,e),Object(d.d)(i,0,a);var o=Object(u.filter)(r,(function(t){return t.layoutOption.hideOverlap}));Object(d.a)(o)},t.prototype.processLabelsOverall=function(){var t=this;Object(u.each)(this._chartViewList,(function(e){var a=e.__model,r=e.ignoreLabelLineUpdate,n=a.isAnimationEnabled();e.group.traverse((function(e){if(e.ignore)return!0;var i=!r,o=e.getTextContent();!i&&o&&(i=y(o).needsUpdateLabelLine),i&&t._updateLabelLine(e,a),n&&t._animateLabels(e,a)}))}))},t.prototype._updateLabelLine=function(t,e){var a=t.getTextContent(),r=Object(o.a)(t),n=r.dataIndex;if(a&&null!=n){var i=e.getData(r.dataType),l=i.getItemModel(n),s={},u=i.getItemVisual(n,"style"),d=i.getVisual("drawType");s.stroke=u[d];var f=l.getModel("labelLine");Object(c.d)(t,Object(c.a)(l),s),Object(c.e)(t,f)}},t.prototype._animateLabels=function(t,e){var a=t.getTextContent(),r=t.getTextGuideLine();if(a&&!a.ignore&&!a.invisible&&!t.disableLabelAnimation&&!Object(i.d)(t)){var n=(w=y(a)).oldLayout,l=Object(o.a)(t),s=l.dataIndex,c={x:a.x,y:a.y,rotation:a.rotation},d=e.getData(l.dataType);if(n){a.attr(n);var h=t.prevStates;h&&(Object(u.indexOf)(h,"select")>=0&&a.attr(w.oldLayoutSelect),Object(u.indexOf)(h,"emphasis")>=0&&a.attr(w.oldLayoutEmphasis)),Object(i.h)(a,c,e,s)}else if(a.attr(c),!Object(f.f)(a).valueAnimation){var g=Object(u.retrieve2)(a.style.opacity,1);a.style.opacity=0,Object(i.c)(a,{style:{opacity:g}},e,s)}if(w.oldLayout=c,a.states.select){var v=w.oldLayoutSelect={};m(v,c,x),m(v,a.states.select,x)}if(a.states.emphasis){var b=w.oldLayoutEmphasis={};m(b,c,x),m(b,a.states.emphasis,x)}Object(f.a)(a,s,d,e,e)}if(r&&!r.ignore&&!r.invisible){n=(w=p(r)).oldLayout;var w,O={points:r.shape.points};n?(r.attr({shape:n}),Object(i.h)(r,{shape:O},e)):(r.setShape(O),r.style.strokePercent=0,Object(i.c)(r,{style:{strokePercent:1}},e)),w.oldLayout=O}},t}(),O=Object(r.o)();function M(t){t.registerUpdateLifecycle("series:beforeupdate",(function(t,e,a){var r=O(e).labelManager;r||(r=O(e).labelManager=new w),r.clearLabels()})),t.registerUpdateLifecycle("series:layoutlabels",(function(t,e,a){var r=O(e).labelManager;a.updatedSeries.forEach((function(t){r.addLabelsOfSeries(e.getViewOfSeriesModel(t))})),r.updateLayoutConfig(e),r.layout(e),r.processLabelsOverall()}))}},934:function(t,e,a){"use strict";var r=a(1),n=a(7),i=a(128);function o(t){return t.get("stack")||"__ec_stack_"+t.seriesIndex}function l(t,e){return e.dim+t.model.componentIndex}e.a=function(t,e,a){var s={},c=function(t){var e={};r.each(t,(function(t,a){var r=t.getData(),i=t.coordinateSystem,s=i.getBaseAxis(),c=l(i,s),u=s.getExtent(),d="category"===s.type?s.getBandWidth():Math.abs(u[1]-u[0])/r.count(),f=e[c]||{bandWidth:d,remainedWidth:d,autoWidthCount:0,categoryGap:"20%",gap:"30%",stacks:{}},h=f.stacks;e[c]=f;var g=o(t);h[g]||f.autoWidthCount++,h[g]=h[g]||{width:0,maxWidth:0};var v=Object(n.p)(t.get("barWidth"),d),b=Object(n.p)(t.get("barMaxWidth"),d),y=t.get("barGap"),p=t.get("barCategoryGap");v&&!h[g].width&&(v=Math.min(f.remainedWidth,v),h[g].width=v,f.remainedWidth-=v),b&&(h[g].maxWidth=b),null!=y&&(f.gap=y),null!=p&&(f.categoryGap=p)}));var a={};return r.each(e,(function(t,e){a[e]={};var i=t.stacks,o=t.bandWidth,l=Object(n.p)(t.categoryGap,o),s=Object(n.p)(t.gap,1),c=t.remainedWidth,u=t.autoWidthCount,d=(c-l)/(u+(u-1)*s);d=Math.max(d,0),r.each(i,(function(t,e){var a=t.maxWidth;a&&a<d&&(a=Math.min(a,c),t.width&&(a=Math.min(a,t.width)),c-=a,t.width=a,u--)})),d=(c-l)/(u+(u-1)*s),d=Math.max(d,0);var f,h=0;r.each(i,(function(t,e){t.width||(t.width=d),f=t,h+=t.width*(1+s)})),f&&(h-=f.width*s);var g=-h/2;r.each(i,(function(t,r){a[e][r]=a[e][r]||{offset:g,width:t.width},g+=t.width*(1+s)}))})),a}(r.filter(e.getSeriesByType(t),(function(t){return!e.isSeriesFiltered(t)&&t.coordinateSystem&&"polar"===t.coordinateSystem.type})));e.eachSeriesByType(t,(function(t){if("polar"===t.coordinateSystem.type){var e=t.getData(),a=t.coordinateSystem,r=a.getBaseAxis(),n=l(a,r),u=o(t),d=c[n][u],f=d.offset,h=d.width,g=a.getOtherAxis(r),v=t.coordinateSystem.cx,b=t.coordinateSystem.cy,y=t.get("barMinHeight")||0,p=t.get("barMinAngle")||0;s[u]=s[u]||[];for(var m=e.mapDimension(g.dim),x=e.mapDimension(r.dim),w=Object(i.c)(e,m),O="radius"!==r.dim||!t.get("roundCap",!0),M=g.dataToCoord(0),S=0,A=e.count();S<A;S++){var L=e.get(m,S),j=e.get(x,S),T=L>=0?"p":"n",C=M;w&&(s[u][j]||(s[u][j]={p:M,n:M}),C=s[u][j][T]);var k=void 0,W=void 0,I=void 0,P=void 0;if("radius"===g.dim){var D=g.dataToCoord(L)-M,_=r.dataToCoord(j);Math.abs(D)<y&&(D=(D<0?-1:1)*y),k=C,W=C+D,P=(I=_-f)-h,w&&(s[u][j][T]=W)}else{var B=g.dataToCoord(L,O)-M,G=r.dataToCoord(j);Math.abs(B)<p&&(B=(B<0?-1:1)*p),W=(k=G+f)+h,I=C,P=C+B,w&&(s[u][j][T]=P)}e.setItemLayout(S,{cx:v,cy:b,r0:k,r:W,startAngle:-I*Math.PI/180,endAngle:-P*Math.PI/180,clockwise:I>=P})}}}))}}}]);