(this.webpackJsonpyugong=this.webpackJsonpyugong||[]).push([[61],{1024:function(t,e,i){"use strict";var r=i(142),n=i(1),a=i(57),s=i(118),o=i(327),l=i(206),h=i(40),u=i(93);function c(){return!1}function d(t,e,i){var r=n.createCanvas(),a=e.getWidth(),s=e.getHeight(),o=r.style;return o&&(o.position="absolute",o.left="0",o.top="0",o.width=a+"px",o.height=s+"px",r.setAttribute("data-zr-dom-id",t)),r.width=a*i,r.height=s*i,r}var p=function(t){function e(e,i,a){var s,o=t.call(this)||this;o.motionBlur=!1,o.lastFrameAlpha=.7,o.dpr=1,o.virtual=!1,o.config={},o.incremental=!1,o.zlevel=0,o.maxRepaintRectCount=5,o.__dirty=!0,o.__firstTimePaint=!0,o.__used=!1,o.__drawIndex=0,o.__startIndex=0,o.__endIndex=0,o.__prevStartIndex=null,o.__prevEndIndex=null,a=a||r.e,"string"===typeof e?s=d(e,i,a):n.isObject(e)&&(e=(s=e).id),o.id=e,o.dom=s;var l=s.style;return l&&(s.onselectstart=c,l.webkitUserSelect="none",l.userSelect="none",l.webkitTapHighlightColor="rgba(0,0,0,0)",l["-webkit-touch-callout"]="none",l.padding="0",l.margin="0",l.borderWidth="0"),o.domBack=null,o.ctxBack=null,o.painter=i,o.config=null,o.dpr=a,o}return Object(a.a)(e,t),e.prototype.getElementCount=function(){return this.__endIndex-this.__startIndex},e.prototype.afterBrush=function(){this.__prevStartIndex=this.__startIndex,this.__prevEndIndex=this.__endIndex},e.prototype.initContext=function(){this.ctx=this.dom.getContext("2d"),this.ctx.dpr=this.dpr},e.prototype.setUnpainted=function(){this.__firstTimePaint=!0},e.prototype.createBackBuffer=function(){var t=this.dpr;this.domBack=d("back-"+this.id,this.painter,t),this.ctxBack=this.domBack.getContext("2d"),1!==t&&this.ctxBack.scale(t,t)},e.prototype.createRepaintRects=function(t,e,i,r){if(this.__firstTimePaint)return this.__firstTimePaint=!1,null;var n,a=[],s=this.maxRepaintRectCount,o=!1,l=new h.a(0,0,0,0);function c(t){if(t.isFinite()&&!t.isZero())if(0===a.length){(e=new h.a(0,0,0,0)).copy(t),a.push(e)}else{for(var e,i=!1,r=1/0,n=0,u=0;u<a.length;++u){var c=a[u];if(c.intersect(t)){var d=new h.a(0,0,0,0);d.copy(c),d.union(t),a[u]=d,i=!0;break}if(o){l.copy(t),l.union(c);var p=t.width*t.height,f=c.width*c.height,_=l.width*l.height-p-f;_<r&&(r=_,n=u)}}if(o&&(a[n].union(t),i=!0),!i)(e=new h.a(0,0,0,0)).copy(t),a.push(e);o||(o=a.length>=s)}}for(var d=this.__startIndex;d<this.__endIndex;++d){if(_=t[d]){var p=_.shouldBePainted(i,r,!0,!0);(v=_.__isRendered&&(_.__dirty&u.a||!p)?_.getPrevPaintRect():null)&&c(v);var f=p&&(_.__dirty&u.a||!_.__isRendered)?_.getPaintRect():null;f&&c(f)}}for(d=this.__prevStartIndex;d<this.__prevEndIndex;++d){var _,v;p=(_=e[d]).shouldBePainted(i,r,!0,!0);if(_&&(!p||!_.__zr)&&_.__isRendered)(v=_.getPrevPaintRect())&&c(v)}do{n=!1;for(d=0;d<a.length;)if(a[d].isZero())a.splice(d,1);else{for(var y=d+1;y<a.length;)a[d].intersect(a[y])?(n=!0,a[d].union(a[y]),a.splice(y,1)):y++;d++}}while(n);return this._paintRects=a,a},e.prototype.debugGetPaintRects=function(){return(this._paintRects||[]).slice()},e.prototype.resize=function(t,e){var i=this.dpr,r=this.dom,n=r.style,a=this.domBack;n&&(n.width=t+"px",n.height=e+"px"),r.width=t*i,r.height=e*i,a&&(a.width=t*i,a.height=e*i,1!==i&&this.ctxBack.scale(i,i))},e.prototype.clear=function(t,e,i){var r=this.dom,a=this.ctx,s=r.width,h=r.height;e=e||this.clearColor;var u=this.motionBlur&&!t,c=this.lastFrameAlpha,d=this.dpr,p=this;u&&(this.domBack||this.createBackBuffer(),this.ctxBack.globalCompositeOperation="copy",this.ctxBack.drawImage(r,0,0,s/d,h/d));var f=this.domBack;function _(t,i,r,s){if(a.clearRect(t,i,r,s),e&&"transparent"!==e){var h=void 0;n.isGradientObject(e)?(h=e.__canvasGradient||Object(o.a)(a,e,{x:0,y:0,width:r,height:s}),e.__canvasGradient=h):n.isImagePatternObject(e)&&(h=Object(l.c)(a,e,{dirty:function(){p.setUnpainted(),p.__painter.refresh()}})),a.save(),a.fillStyle=h||e,a.fillRect(t,i,r,s),a.restore()}u&&(a.save(),a.globalAlpha=c,a.drawImage(f,t,i,r,s),a.restore())}!i||u?_(0,0,s,h):i.length&&n.each(i,(function(t){_(t.x*d,t.y*d,t.width*d,t.height*d)}))},e}(s.a),f=i(487),_=i(99),v=i(46),y=1e5,g=314159,m=.01;function b(t){return parseInt(t,10)}var w=function(){function t(t,e,i,a){this.type="canvas",this._zlevelList=[],this._prevDisplayList=[],this._layers={},this._layerConfig={},this._needsManuallyCompositing=!1,this.type="canvas";var s=!t.nodeName||"CANVAS"===t.nodeName.toUpperCase();this._opts=i=n.extend({},i||{}),this.dpr=i.devicePixelRatio||r.e,this._singleCanvas=s,this.root=t;var o=t.style;o&&(o.webkitTapHighlightColor="transparent",o.webkitUserSelect="none",o.userSelect="none",o["-webkit-touch-callout"]="none",t.innerHTML=""),this.storage=e;var l=this._zlevelList;this._prevDisplayList=[];var h=this._layers;if(s){var u=t,c=u.width,d=u.height;null!=i.width&&(c=i.width),null!=i.height&&(d=i.height),this.dpr=i.devicePixelRatio||1,u.width=c*this.dpr,u.height=d*this.dpr,this._width=c,this._height=d;var f=new p(u,this,this.dpr);f.__builtin__=!0,f.initContext(),h[314159]=f,f.zlevel=g,l.push(g),this._domRoot=t}else{this._width=this._getSize(0),this._height=this._getSize(1);var _=this._domRoot=function(t,e){var i=document.createElement("div");return i.style.cssText=["position:relative","width:"+t+"px","height:"+e+"px","padding:0","margin:0","border-width:0"].join(";")+";",i}(this._width,this._height);t.appendChild(_)}}return t.prototype.getType=function(){return"canvas"},t.prototype.isSingleCanvas=function(){return this._singleCanvas},t.prototype.getViewportRoot=function(){return this._domRoot},t.prototype.getViewportRootOffset=function(){var t=this.getViewportRoot();if(t)return{offsetLeft:t.offsetLeft||0,offsetTop:t.offsetTop||0}},t.prototype.refresh=function(t){var e=this.storage.getDisplayList(!0),i=this._prevDisplayList,r=this._zlevelList;this._redrawId=Math.random(),this._paintList(e,i,t,this._redrawId);for(var n=0;n<r.length;n++){var a=r[n],s=this._layers[a];if(!s.__builtin__&&s.refresh){var o=0===n?this._backgroundColor:null;s.refresh(o)}}return this._opts.useDirtyRect&&(this._prevDisplayList=e.slice()),this},t.prototype.refreshHover=function(){this._paintHoverList(this.storage.getDisplayList(!1))},t.prototype._paintHoverList=function(t){var e=t.length,i=this._hoverlayer;if(i&&i.clear(),e){for(var r,n={inHover:!0,viewWidth:this._width,viewHeight:this._height},a=0;a<e;a++){var s=t[a];s.__inHover&&(i||(i=this._hoverlayer=this.getLayer(y)),r||(r=i.ctx).save(),Object(l.a)(r,s,n,a===e-1))}r&&r.restore()}},t.prototype.getHoverLayer=function(){return this.getLayer(y)},t.prototype.paintOne=function(t,e){Object(l.b)(t,e)},t.prototype._paintList=function(t,e,i,r){if(this._redrawId===r){i=i||!1,this._updateLayerStatus(t);var n=this._doPaintList(t,e,i),a=n.finished,s=n.needsRefreshHover;if(this._needsManuallyCompositing&&this._compositeManually(),s&&this._paintHoverList(t),a)this.eachLayer((function(t){t.afterBrush&&t.afterBrush()}));else{var o=this;Object(f.a)((function(){o._paintList(t,e,i,r)}))}}},t.prototype._compositeManually=function(){var t=this.getLayer(g).ctx,e=this._domRoot.width,i=this._domRoot.height;t.clearRect(0,0,e,i),this.eachBuiltinLayer((function(r){r.virtual&&t.drawImage(r.dom,0,0,e,i)}))},t.prototype._doPaintList=function(t,e,i){for(var r=this,a=[],s=this._opts.useDirtyRect,o=0;o<this._zlevelList.length;o++){var l=this._zlevelList[o],h=this._layers[l];h.__builtin__&&h!==this._hoverlayer&&(h.__dirty||i)&&a.push(h)}for(var u=!0,c=!1,d=function(n){var o,l=a[n],h=l.ctx,d=s&&l.createRepaintRects(t,e,p._width,p._height),f=i?l.__startIndex:l.__drawIndex,_=!i&&l.incremental&&Date.now,v=_&&Date.now(),y=l.zlevel===p._zlevelList[0]?p._backgroundColor:null;if(l.__startIndex===l.__endIndex)l.clear(!1,y,d);else if(f===l.__startIndex){var g=t[f];g.incremental&&g.notClear&&!i||l.clear(!1,y,d)}-1===f&&(console.error("For some unknown reason. drawIndex is -1"),f=l.__startIndex);var m=function(e){var i={inHover:!1,allClipped:!1,prevEl:null,viewWidth:r._width,viewHeight:r._height};for(o=f;o<l.__endIndex;o++){var n=t[o];if(n.__inHover&&(c=!0),r._doPaintEl(n,l,s,e,i,o===l.__endIndex-1),_)if(Date.now()-v>15)break}i.prevElClipPaths&&h.restore()};if(d)if(0===d.length)o=l.__endIndex;else for(var b=p.dpr,w=0;w<d.length;++w){var x=d[w];h.save(),h.beginPath(),h.rect(x.x*b,x.y*b,x.width*b,x.height*b),h.clip(),m(x),h.restore()}else h.save(),m(),h.restore();l.__drawIndex=o,l.__drawIndex<l.__endIndex&&(u=!1)},p=this,f=0;f<a.length;f++)d(f);return v.a.wxa&&n.each(this._layers,(function(t){t&&t.ctx&&t.ctx.draw&&t.ctx.draw()})),{finished:u,needsRefreshHover:c}},t.prototype._doPaintEl=function(t,e,i,r,n,a){var s=e.ctx;if(i){var o=t.getPaintRect();(!r||o&&o.intersect(r))&&(Object(l.a)(s,t,n,a),t.setPrevPaintRect(o))}else Object(l.a)(s,t,n,a)},t.prototype.getLayer=function(t,e){this._singleCanvas&&!this._needsManuallyCompositing&&(t=g);var i=this._layers[t];return i||((i=new p("zr_"+t,this,this.dpr)).zlevel=t,i.__builtin__=!0,this._layerConfig[t]?n.merge(i,this._layerConfig[t],!0):this._layerConfig[t-m]&&n.merge(i,this._layerConfig[t-m],!0),e&&(i.virtual=e),this.insertLayer(t,i),i.initContext()),i},t.prototype.insertLayer=function(t,e){var i=this._layers,r=this._zlevelList,a=r.length,s=this._domRoot,o=null,l=-1;if(i[t])n.logError("ZLevel "+t+" has been used already");else if(function(t){return!!t&&(!!t.__builtin__||"function"===typeof t.resize&&"function"===typeof t.refresh)}(e)){if(a>0&&t>r[0]){for(l=0;l<a-1&&!(r[l]<t&&r[l+1]>t);l++);o=i[r[l]]}if(r.splice(l+1,0,t),i[t]=e,!e.virtual)if(o){var h=o.dom;h.nextSibling?s.insertBefore(e.dom,h.nextSibling):s.appendChild(e.dom)}else s.firstChild?s.insertBefore(e.dom,s.firstChild):s.appendChild(e.dom);e.__painter=this}else n.logError("Layer of zlevel "+t+" is not valid")},t.prototype.eachLayer=function(t,e){for(var i=this._zlevelList,r=0;r<i.length;r++){var n=i[r];t.call(e,this._layers[n],n)}},t.prototype.eachBuiltinLayer=function(t,e){for(var i=this._zlevelList,r=0;r<i.length;r++){var n=i[r],a=this._layers[n];a.__builtin__&&t.call(e,a,n)}},t.prototype.eachOtherLayer=function(t,e){for(var i=this._zlevelList,r=0;r<i.length;r++){var n=i[r],a=this._layers[n];a.__builtin__||t.call(e,a,n)}},t.prototype.getLayers=function(){return this._layers},t.prototype._updateLayerStatus=function(t){function e(t){s&&(s.__endIndex!==t&&(s.__dirty=!0),s.__endIndex=t)}if(this.eachBuiltinLayer((function(t,e){t.__dirty=t.__used=!1})),this._singleCanvas)for(var i=1;i<t.length;i++){if((l=t[i]).zlevel!==t[i-1].zlevel||l.incremental){this._needsManuallyCompositing=!0;break}}var r,a,s=null,o=0;for(a=0;a<t.length;a++){var l,h=(l=t[a]).zlevel,c=void 0;r!==h&&(r=h,o=0),l.incremental?((c=this.getLayer(h+.001,this._needsManuallyCompositing)).incremental=!0,o=1):c=this.getLayer(h+(o>0?m:0),this._needsManuallyCompositing),c.__builtin__||n.logError("ZLevel "+h+" has been used by unkown layer "+c.id),c!==s&&(c.__used=!0,c.__startIndex!==a&&(c.__dirty=!0),c.__startIndex=a,c.incremental?c.__drawIndex=-1:c.__drawIndex=a,e(a),s=c),l.__dirty&u.a&&!l.__inHover&&(c.__dirty=!0,c.incremental&&c.__drawIndex<0&&(c.__drawIndex=a))}e(a),this.eachBuiltinLayer((function(t,e){!t.__used&&t.getElementCount()>0&&(t.__dirty=!0,t.__startIndex=t.__endIndex=t.__drawIndex=0),t.__dirty&&t.__drawIndex<0&&(t.__drawIndex=t.__startIndex)}))},t.prototype.clear=function(){return this.eachBuiltinLayer(this._clearLayer),this},t.prototype._clearLayer=function(t){t.clear()},t.prototype.setBackgroundColor=function(t){this._backgroundColor=t,n.each(this._layers,(function(t){t.setUnpainted()}))},t.prototype.configLayer=function(t,e){if(e){var i=this._layerConfig;i[t]?n.merge(i[t],e,!0):i[t]=e;for(var r=0;r<this._zlevelList.length;r++){var a=this._zlevelList[r];if(a===t||a===t+m){var s=this._layers[a];n.merge(s,i[t],!0)}}}},t.prototype.delLayer=function(t){var e=this._layers,i=this._zlevelList,r=e[t];r&&(r.dom.parentNode.removeChild(r.dom),delete e[t],i.splice(n.indexOf(i,t),1))},t.prototype.resize=function(t,e){if(this._domRoot.style){var i=this._domRoot;i.style.display="none";var r=this._opts;if(null!=t&&(r.width=t),null!=e&&(r.height=e),t=this._getSize(0),e=this._getSize(1),i.style.display="",this._width!==t||e!==this._height){for(var n in i.style.width=t+"px",i.style.height=e+"px",this._layers)this._layers.hasOwnProperty(n)&&this._layers[n].resize(t,e);this.refresh(!0)}this._width=t,this._height=e}else{if(null==t||null==e)return;this._width=t,this._height=e,this.getLayer(g).resize(t,e)}return this},t.prototype.clearLayer=function(t){var e=this._layers[t];e&&e.clear()},t.prototype.dispose=function(){this.root.innerHTML="",this.root=this.storage=this._domRoot=this._layers=null},t.prototype.getRenderedCanvas=function(t){if(t=t||{},this._singleCanvas&&!this._compositeManually)return this._layers[314159].dom;var e=new p("image",this,t.pixelRatio||this.dpr);e.initContext(),e.clear(!1,t.backgroundColor||this._backgroundColor);var i=e.ctx;if(t.pixelRatio<=this.dpr){this.refresh();var r=e.dom.width,n=e.dom.height;this.eachLayer((function(t){t.__builtin__?i.drawImage(t.dom,0,0,r,n):t.renderToCanvas&&(i.save(),t.renderToCanvas(i),i.restore())}))}else for(var a={inHover:!1,viewWidth:this._width,viewHeight:this._height},s=this.storage.getDisplayList(!0),o=0,h=s.length;o<h;o++){var u=s[o];Object(l.a)(i,u,a,o===h-1)}return e.dom},t.prototype.getWidth=function(){return this._width},t.prototype.getHeight=function(){return this._height},t.prototype._getSize=function(t){var e=this._opts,i=["width","height"][t],r=["clientWidth","clientHeight"][t],n=["paddingLeft","paddingTop"][t],a=["paddingRight","paddingBottom"][t];if(null!=e[i]&&"auto"!==e[i])return parseFloat(e[i]);var s=this.root,o=document.defaultView.getComputedStyle(s);return(s[r]||b(o[i])||b(s.style[i]))-(b(o[n])||0)-(b(o[a])||0)|0},t.prototype.pathToImage=function(t,e){e=e||this.dpr;var i=document.createElement("canvas"),r=i.getContext("2d"),a=t.getBoundingRect(),s=t.style,o=s.shadowBlur*e,h=s.shadowOffsetX*e,u=s.shadowOffsetY*e,c=t.hasStroke()?s.lineWidth:0,d=Math.max(c/2,-h+o),p=Math.max(c/2,h+o),f=Math.max(c/2,-u+o),v=Math.max(c/2,u+o),y=a.width+d+p,g=a.height+f+v;i.width=y*e,i.height=g*e,r.scale(e,e),r.clearRect(0,0,y,g),r.dpr=e;var m={x:t.x,y:t.y,scaleX:t.scaleX,scaleY:t.scaleY,rotation:t.rotation,originX:t.originX,originY:t.originY};t.x=d-a.x,t.y=f-a.y,t.rotation=0,t.scaleX=1,t.scaleY=1,t.updateTransform(),t&&Object(l.a)(r,t,{inHover:!1,viewWidth:this._width,viewHeight:this._height},!0);var b=new _.a({style:{x:0,y:0,image:i}});return n.extend(t,m),b},t}();e.a=w},206:function(t,e,i){"use strict";i.d(e,"c",(function(){return w})),i.d(e,"b",(function(){return M})),i.d(e,"a",(function(){return S}));var r=i(100),n=i(147),a=i(273),s=i(327),o=i(43),l=i(99),h=i(236),u=i(55),c=i(1),d=i(489),p=i(309),f=i(93),_=new n.a(!0);function v(t){var e=t.stroke;return!(null==e||"none"===e||!(t.lineWidth>0))}function y(t){return"string"===typeof t&&"none"!==t}function g(t){var e=t.fill;return null!=e&&"none"!==e}function m(t,e){if(null!=e.fillOpacity&&1!==e.fillOpacity){var i=t.globalAlpha;t.globalAlpha=e.fillOpacity*e.opacity,t.fill(),t.globalAlpha=i}else t.fill()}function b(t,e){if(null!=e.strokeOpacity&&1!==e.strokeOpacity){var i=t.globalAlpha;t.globalAlpha=e.strokeOpacity*e.opacity,t.stroke(),t.globalAlpha=i}else t.stroke()}function w(t,e,i){var r=Object(a.a)(e.image,e.__image,i);if(Object(a.c)(r)){var n=t.createPattern(r,e.repeat||"repeat");if("function"===typeof DOMMatrix&&n.setTransform){var s=new DOMMatrix;s.rotateSelf(0,0,(e.rotation||0)/Math.PI*180),s.scaleSelf(e.scaleX||1,e.scaleY||1),s.translateSelf(e.x||0,e.y||0),n.setTransform(s)}return n}}var x=["shadowBlur","shadowOffsetX","shadowOffsetY"],k=[["lineCap","butt"],["lineJoin","miter"],["miterLimit",10]];function C(t,e,i,n,a){var s=!1;if(!n&&e===(i=i||{}))return!1;if(n||e.opacity!==i.opacity){s||(L(t,a),s=!0);var o=Math.max(Math.min(e.opacity,1),0);t.globalAlpha=isNaN(o)?r.b.opacity:o}(n||e.blend!==i.blend)&&(s||(L(t,a),s=!0),t.globalCompositeOperation=e.blend||r.b.blend);for(var l=0;l<x.length;l++){var h=x[l];(n||e[h]!==i[h])&&(s||(L(t,a),s=!0),t[h]=t.dpr*(e[h]||0))}return(n||e.shadowColor!==i.shadowColor)&&(s||(L(t,a),s=!0),t.shadowColor=e.shadowColor||r.b.shadowColor),s}function T(t,e,i,r,n){var a=O(e,n.inHover),s=r?null:i&&O(i,n.inHover)||{};if(a===s)return!1;var o=C(t,a,s,r,n);if((r||a.fill!==s.fill)&&(o||(L(t,n),o=!0),y(a.fill)&&(t.fillStyle=a.fill)),(r||a.stroke!==s.stroke)&&(o||(L(t,n),o=!0),y(a.stroke)&&(t.strokeStyle=a.stroke)),(r||a.opacity!==s.opacity)&&(o||(L(t,n),o=!0),t.globalAlpha=null==a.opacity?1:a.opacity),e.hasStroke()){var l=a.lineWidth/(a.strokeNoScale&&e&&e.getLineScale?e.getLineScale():1);t.lineWidth!==l&&(o||(L(t,n),o=!0),t.lineWidth=l)}for(var h=0;h<k.length;h++){var u=k[h],c=u[0];(r||a[c]!==s[c])&&(o||(L(t,n),o=!0),t[c]=a[c]||u[1])}return o}function I(t,e){var i=e.transform,r=t.dpr||1;i?t.setTransform(r*i[0],r*i[1],r*i[2],r*i[3],r*i[4],r*i[5]):t.setTransform(r,0,0,r,0,0)}function L(t,e){e.batchFill&&t.fill(),e.batchStroke&&t.stroke(),e.batchFill="",e.batchStroke=""}function O(t,e){return e&&t.__hoverStyle||t.style}function M(t,e){S(t,e,{inHover:!1,viewWidth:0,viewHeight:0},!0)}function S(t,e,i,r){var n=e.transform;if(!e.shouldBePainted(i.viewWidth,i.viewHeight,!1,!1))return e.__dirty&=~f.a,void(e.__isRendered=!1);var y=e.__clipPaths,x=i.prevElClipPaths,k=!1,M=!1;if(x&&!Object(s.b)(y,x)||(x&&x.length&&(L(t,i),t.restore(),M=k=!0,i.prevElClipPaths=null,i.allClipped=!1,i.prevEl=null),y&&y.length&&(L(t,i),t.save(),function(t,e,i){for(var r=!1,n=0;n<t.length;n++){var a=t[n];r=r||a.isZeroArea(),I(e,a),e.beginPath(),a.buildPath(e,a.shape),e.clip()}i.allClipped=r}(y,t,i),k=!0),i.prevElClipPaths=y),i.allClipped)e.__isRendered=!1;else{e.beforeBrush&&e.beforeBrush(),e.innerBeforeBrush();var P=i.prevEl;P||(M=k=!0);var B,R,D=e instanceof o.b&&e.autoBatch&&function(t){var e=g(t),i=v(t);return!(t.lineDash||!(+e^+i)||e&&"string"!==typeof t.fill||i&&"string"!==typeof t.stroke||t.strokePercent<1||t.strokeOpacity<1||t.fillOpacity<1)}(e.style);k||(B=n,R=P.transform,B&&R?B[0]!==R[0]||B[1]!==R[1]||B[2]!==R[2]||B[3]!==R[3]||B[4]!==R[4]||B[5]!==R[5]:B||R)?(L(t,i),I(t,e)):D||L(t,i);var A=O(e,i.inHover);e instanceof o.b?(1!==i.lastDrawType&&(M=!0,i.lastDrawType=1),T(t,e,P,M,i),D&&(i.batchFill||i.batchStroke)||t.beginPath(),function(t,e,i,r){var n=v(i),a=g(i),o=i.strokePercent,l=o<1,h=!e.path;e.silent&&!l||!h||e.createPathProxy();var u=e.path||_;if(!r){var p=i.fill,y=i.stroke,x=a&&!!p.colorStops,k=n&&!!y.colorStops,C=a&&!!p.image,T=n&&!!y.image,I=void 0,L=void 0,O=void 0,M=void 0,S=void 0;(x||k)&&(S=e.getBoundingRect()),x&&(I=e.__dirty?Object(s.a)(t,p,S):e.__canvasFillGradient,e.__canvasFillGradient=I),k&&(L=e.__dirty?Object(s.a)(t,y,S):e.__canvasStrokeGradient,e.__canvasStrokeGradient=L),C&&(O=e.__dirty||!e.__canvasFillPattern?w(t,p,e):e.__canvasFillPattern,e.__canvasFillPattern=O),T&&(M=e.__dirty||!e.__canvasStrokePattern?w(t,y,e):e.__canvasStrokePattern,e.__canvasStrokePattern=O),x?t.fillStyle=I:C&&(O?t.fillStyle=O:a=!1),k?t.strokeStyle=L:T&&(M?t.strokeStyle=M:n=!1)}var P=i.lineDash&&i.lineWidth>0&&Object(d.a)(i.lineDash,i.lineWidth),B=i.lineDashOffset,R=!!t.setLineDash,D=e.getGlobalScale();if(u.setScale(D[0],D[1],e.segmentIgnoreThreshold),P){var A=i.strokeNoScale&&e.getLineScale?e.getLineScale():1;A&&1!==A&&(P=Object(c.map)(P,(function(t){return t/A})),B/=A)}var H=!0;(h||e.__dirty&f.b||P&&!R&&n)&&(u.setDPR(t.dpr),l?u.setContext(null):(u.setContext(t),H=!1),u.reset(),P&&!R&&(u.setLineDash(P),u.setLineDashOffset(B)),e.buildPath(u,e.shape,r),u.toStatic(),e.pathUpdated()),H&&u.rebuildPath(t,l?o:1),P&&R&&(t.setLineDash(P),t.lineDashOffset=B),r||(i.strokeFirst?(n&&b(t,i),a&&m(t,i)):(a&&m(t,i),n&&b(t,i))),P&&R&&t.setLineDash([])}(t,e,A,D),D&&(i.batchFill=A.fill||"",i.batchStroke=A.stroke||"")):e instanceof h.a?(3!==i.lastDrawType&&(M=!0,i.lastDrawType=3),T(t,e,P,M,i),function(t,e,i){var r=i.text;if(null!=r&&(r+=""),r){t.font=i.font||u.a,t.textAlign=i.textAlign,t.textBaseline=i.textBaseline;var n=void 0;if(t.setLineDash){var a=i.lineDash&&i.lineWidth>0&&Object(d.a)(i.lineDash,i.lineWidth),s=i.lineDashOffset;if(a){var o=i.strokeNoScale&&e.getLineScale?e.getLineScale():1;o&&1!==o&&(a=Object(c.map)(a,(function(t){return t/o})),s/=o),t.setLineDash(a),t.lineDashOffset=s,n=!0}}i.strokeFirst?(v(i)&&t.strokeText(r,i.x,i.y),g(i)&&t.fillText(r,i.x,i.y)):(g(i)&&t.fillText(r,i.x,i.y),v(i)&&t.strokeText(r,i.x,i.y)),n&&t.setLineDash([])}}(t,e,A)):e instanceof l.a?(2!==i.lastDrawType&&(M=!0,i.lastDrawType=2),function(t,e,i,r,n){C(t,O(e,n.inHover),i&&O(i,n.inHover),r,n)}(t,e,P,M,i),function(t,e,i){var r=e.__image=Object(a.a)(i.image,e.__image,e,e.onload);if(r&&Object(a.c)(r)){var n=i.x||0,s=i.y||0,o=e.getWidth(),l=e.getHeight(),h=r.width/r.height;if(null==o&&null!=l?o=l*h:null==l&&null!=o?l=o/h:null==o&&null==l&&(o=r.width,l=r.height),i.sWidth&&i.sHeight){var u=i.sx||0,c=i.sy||0;t.drawImage(r,u,c,i.sWidth,i.sHeight,n,s,o,l)}else if(i.sx&&i.sy){var d=o-(u=i.sx),p=l-(c=i.sy);t.drawImage(r,u,c,d,p,n,s,o,l)}else t.drawImage(r,n,s,o,l)}}(t,e,A)):e instanceof p.a&&(4!==i.lastDrawType&&(M=!0,i.lastDrawType=4),function(t,e,i){var r=e.getDisplayables(),n=e.getTemporalDisplayables();t.save();var a,s,o={prevElClipPaths:null,prevEl:null,allClipped:!1,viewWidth:i.viewWidth,viewHeight:i.viewHeight,inHover:i.inHover};for(a=e.getCursor(),s=r.length;a<s;a++){(u=r[a]).beforeBrush&&u.beforeBrush(),u.innerBeforeBrush(),S(t,u,o,a===s-1),u.innerAfterBrush(),u.afterBrush&&u.afterBrush(),o.prevEl=u}for(var l=0,h=n.length;l<h;l++){var u;(u=n[l]).beforeBrush&&u.beforeBrush(),u.innerBeforeBrush(),S(t,u,o,l===h-1),u.innerAfterBrush(),u.afterBrush&&u.afterBrush(),o.prevEl=u}e.clearTemporalDisplayables(),e.notClear=!0,t.restore()}(t,e,i)),D&&r&&L(t,i),e.innerAfterBrush(),e.afterBrush&&e.afterBrush(),i.prevEl=e,e.__dirty=0,e.__isRendered=!0}}},246:function(t,e,i){"use strict";i.d(e,"c",(function(){return h})),i.d(e,"a",(function(){return y}));var r={linear:function(t){return t},quadraticIn:function(t){return t*t},quadraticOut:function(t){return t*(2-t)},quadraticInOut:function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)},cubicIn:function(t){return t*t*t},cubicOut:function(t){return--t*t*t+1},cubicInOut:function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},quarticIn:function(t){return t*t*t*t},quarticOut:function(t){return 1- --t*t*t*t},quarticInOut:function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)},quinticIn:function(t){return t*t*t*t*t},quinticOut:function(t){return--t*t*t*t*t+1},quinticInOut:function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},sinusoidalIn:function(t){return 1-Math.cos(t*Math.PI/2)},sinusoidalOut:function(t){return Math.sin(t*Math.PI/2)},sinusoidalInOut:function(t){return.5*(1-Math.cos(Math.PI*t))},exponentialIn:function(t){return 0===t?0:Math.pow(1024,t-1)},exponentialOut:function(t){return 1===t?1:1-Math.pow(2,-10*t)},exponentialInOut:function(t){return 0===t?0:1===t?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(2-Math.pow(2,-10*(t-1)))},circularIn:function(t){return 1-Math.sqrt(1-t*t)},circularOut:function(t){return Math.sqrt(1- --t*t)},circularInOut:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},elasticIn:function(t){var e,i=.1;return 0===t?0:1===t?1:(!i||i<1?(i=1,e=.1):e=.4*Math.asin(1/i)/(2*Math.PI),-i*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/.4))},elasticOut:function(t){var e,i=.1;return 0===t?0:1===t?1:(!i||i<1?(i=1,e=.1):e=.4*Math.asin(1/i)/(2*Math.PI),i*Math.pow(2,-10*t)*Math.sin((t-e)*(2*Math.PI)/.4)+1)},elasticInOut:function(t){var e,i=.1,r=.4;return 0===t?0:1===t?1:(!i||i<1?(i=1,e=.1):e=r*Math.asin(1/i)/(2*Math.PI),(t*=2)<1?i*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/r)*-.5:i*Math.pow(2,-10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/r)*.5+1)},backIn:function(t){var e=1.70158;return t*t*((e+1)*t-e)},backOut:function(t){var e=1.70158;return--t*t*((e+1)*t+e)+1},backInOut:function(t){var e=2.5949095;return(t*=2)<1?t*t*((e+1)*t-e)*.5:.5*((t-=2)*t*((e+1)*t+e)+2)},bounceIn:function(t){return 1-r.bounceOut(1-t)},bounceOut:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},bounceInOut:function(t){return t<.5?.5*r.bounceIn(2*t):.5*r.bounceOut(2*t-1)+.5}},n=r,a=function(){function t(t){this._initialized=!1,this._startTime=0,this._pausedTime=0,this._paused=!1,this._life=t.life||1e3,this._delay=t.delay||0,this.loop=null!=t.loop&&t.loop,this.gap=t.gap||0,this.easing=t.easing||"linear",this.onframe=t.onframe,this.ondestroy=t.ondestroy,this.onrestart=t.onrestart}return t.prototype.step=function(t,e){if(this._initialized||(this._startTime=t+this._delay,this._initialized=!0),!this._paused){var i=(t-this._startTime-this._pausedTime)/this._life;i<0&&(i=0),i=Math.min(i,1);var r=this.easing,a="string"===typeof r?n[r]:r,s="function"===typeof a?a(i):i;if(this.onframe&&this.onframe(s),1===i){if(!this.loop)return!0;this._restart(t),this.onrestart&&this.onrestart()}return!1}this._pausedTime+=e},t.prototype._restart=function(t){var e=(t-this._startTime-this._pausedTime)%this._life;this._startTime=t-e+this.gap,this._pausedTime=0},t.prototype.pause=function(){this._paused=!0},t.prototype.resume=function(){this._paused=!1},t}(),s=i(66),o=i(1),l=Array.prototype.slice;function h(t,e,i){return(e-t)*i+t}function u(t,e,i,r){for(var n=e.length,a=0;a<n;a++)t[a]=h(e[a],i[a],r)}function c(t,e,i,r){for(var n=e.length,a=0;a<n;a++)t[a]=e[a]+i[a]*r;return t}function d(t,e,i,r){for(var n=e.length,a=n&&e[0].length,s=0;s<n;s++){t[s]||(t[s]=[]);for(var o=0;o<a;o++)t[s][o]=e[s][o]+i[s][o]*r}return t}function p(t,e,i){var r=t,n=e;if(r.push&&n.push){var a=r.length,s=n.length;if(a!==s)if(a>s)r.length=s;else for(var o=a;o<s;o++)r.push(1===i?n[o]:l.call(n[o]));var h=r[0]&&r[0].length;for(o=0;o<r.length;o++)if(1===i)isNaN(r[o])&&(r[o]=n[o]);else for(var u=0;u<h;u++)isNaN(r[o][u])&&(r[o][u]=n[o][u])}}function f(t,e){var i=t.length;if(i!==e.length)return!1;for(var r=0;r<i;r++)if(t[r]!==e[r])return!1;return!0}function _(t,e,i,r,n,a,s){var o=.5*(i-t),l=.5*(r-e);return(2*(e-i)+o+l)*s+(-3*(e-i)-2*o-l)*a+o*n+e}function v(t,e,i,r,n,a,s,o){for(var l=e.length,h=0;h<l;h++)t[h]=_(e[h],i[h],r[h],n[h],a,s,o)}function y(t){if(Object(o.isArrayLike)(t)){var e=t.length;if(Object(o.isArrayLike)(t[0])){for(var i=[],r=0;r<e;r++)i.push(l.call(t[r]));return i}return l.call(t)}return t}function g(t){return t[0]=Math.floor(t[0]),t[1]=Math.floor(t[1]),t[2]=Math.floor(t[2]),"rgba("+t.join(",")+")"}var m=[0,0,0,0],b=function(){function t(t){this.keyframes=[],this.maxTime=0,this.arrDim=0,this.interpolable=!0,this._needsSort=!1,this._isAllValueEqual=!0,this._lastFrame=0,this._lastFramePercent=0,this.propName=t}return t.prototype.isFinished=function(){return this._finished},t.prototype.setFinished=function(){this._finished=!0,this._additiveTrack&&this._additiveTrack.setFinished()},t.prototype.needsAnimate=function(){return!this._isAllValueEqual&&this.keyframes.length>=2&&this.interpolable&&this.maxTime>0},t.prototype.getAdditiveTrack=function(){return this._additiveTrack},t.prototype.addKeyframe=function(t,e){t>=this.maxTime?this.maxTime=t:this._needsSort=!0;var i=this.keyframes,r=i.length;if(this.interpolable)if(Object(o.isArrayLike)(e)){var n=function(t){return Object(o.isArrayLike)(t&&t[0])?2:1}(e);if(r>0&&this.arrDim!==n)return void(this.interpolable=!1);if(1===n&&"number"!==typeof e[0]||2===n&&"number"!==typeof e[0][0])return void(this.interpolable=!1);if(r>0){var a=i[r-1];this._isAllValueEqual&&(1===n&&f(e,a.value)||(this._isAllValueEqual=!1))}this.arrDim=n}else{if(this.arrDim>0)return void(this.interpolable=!1);if("string"===typeof e){var l=s.parse(e);l?(e=l,this.isValueColor=!0):this.interpolable=!1}else if("number"!==typeof e||isNaN(e))return void(this.interpolable=!1);if(this._isAllValueEqual&&r>0){a=i[r-1];(this.isValueColor&&!f(a.value,e)||a.value!==e)&&(this._isAllValueEqual=!1)}}var h={time:t,value:e,percent:0};return this.keyframes.push(h),h},t.prototype.prepare=function(t){var e=this.keyframes;this._needsSort&&e.sort((function(t,e){return t.time-e.time}));for(var i=this.arrDim,r=e.length,n=e[r-1],a=0;a<r;a++)e[a].percent=e[a].time/this.maxTime,i>0&&a!==r-1&&p(e[a].value,n.value,i);if(t&&this.needsAnimate()&&t.needsAnimate()&&i===t.arrDim&&this.isValueColor===t.isValueColor&&!t._finished){this._additiveTrack=t;var s=e[0].value;for(a=0;a<r;a++)0===i?this.isValueColor?e[a].additiveValue=c([],e[a].value,s,-1):e[a].additiveValue=e[a].value-s:1===i?e[a].additiveValue=c([],e[a].value,s,-1):2===i&&(e[a].additiveValue=d([],e[a].value,s,-1))}},t.prototype.step=function(t,e){if(!this._finished){this._additiveTrack&&this._additiveTrack._finished&&(this._additiveTrack=null);var i,r=null!=this._additiveTrack,n=r?"additiveValue":"value",a=this.keyframes,s=this.keyframes.length,o=this.propName,l=this.arrDim,c=this.isValueColor;if(e<0)i=0;else if(e<this._lastFramePercent){for(i=Math.min(this._lastFrame+1,s-1);i>=0&&!(a[i].percent<=e);i--);i=Math.min(i,s-2)}else{for(i=this._lastFrame;i<s&&!(a[i].percent>e);i++);i=Math.min(i-1,s-2)}var d=a[i+1],p=a[i];if(p&&d){this._lastFrame=i,this._lastFramePercent=e;var f=d.percent-p.percent;if(0!==f){var y=(e-p.percent)/f,b=r?this._additiveValue:c?m:t[o];if((l>0||c)&&!b&&(b=this._additiveValue=[]),this.useSpline){var w=a[i][n],x=a[0===i?i:i-1][n],k=a[i>s-2?s-1:i+1][n],C=a[i>s-3?s-1:i+2][n];if(l>0)1===l?v(b,x,w,k,C,y,y*y,y*y*y):function(t,e,i,r,n,a,s,o){for(var l=e.length,h=e[0].length,u=0;u<l;u++){t[u]||(t[1]=[]);for(var c=0;c<h;c++)t[u][c]=_(e[u][c],i[u][c],r[u][c],n[u][c],a,s,o)}}(b,x,w,k,C,y,y*y,y*y*y);else if(c)v(b,x,w,k,C,y,y*y,y*y*y),r||(t[o]=g(b));else{var T=void 0;T=this.interpolable?_(x,w,k,C,y,y*y,y*y*y):k,r?this._additiveValue=T:t[o]=T}}else if(l>0)1===l?u(b,p[n],d[n],y):function(t,e,i,r){for(var n=e.length,a=n&&e[0].length,s=0;s<n;s++){t[s]||(t[s]=[]);for(var o=0;o<a;o++)t[s][o]=h(e[s][o],i[s][o],r)}}(b,p[n],d[n],y);else if(c)u(b,p[n],d[n],y),r||(t[o]=g(b));else{T=void 0;T=this.interpolable?h(p[n],d[n],y):function(t,e,i){return i>.5?e:t}(p[n],d[n],y),r?this._additiveValue=T:t[o]=T}r&&this._addToTarget(t)}}}},t.prototype._addToTarget=function(t){var e=this.arrDim,i=this.propName,r=this._additiveValue;0===e?this.isValueColor?(s.parse(t[i],m),c(m,m,r,1),t[i]=g(m)):t[i]=t[i]+r:1===e?c(t[i],t[i],r,1):2===e&&d(t[i],t[i],r,1)},t}(),w=function(){function t(t,e,i){this._tracks={},this._trackKeys=[],this._delay=0,this._maxTime=0,this._paused=!1,this._started=0,this._clip=null,this._target=t,this._loop=e,e&&i?Object(o.logError)("Can' use additive animation on looped animation."):this._additiveAnimators=i}return t.prototype.getTarget=function(){return this._target},t.prototype.changeTarget=function(t){this._target=t},t.prototype.when=function(t,e){return this.whenWithKeys(t,e,Object(o.keys)(e))},t.prototype.whenWithKeys=function(t,e,i){for(var r=this._tracks,n=0;n<i.length;n++){var a=i[n],s=r[a];if(!s){s=r[a]=new b(a);var o=void 0,l=this._getAdditiveTrack(a);if(l){var h=l.keyframes[l.keyframes.length-1];o=h&&h.value,l.isValueColor&&o&&(o=g(o))}else o=this._target[a];if(null==o)continue;0!==t&&s.addKeyframe(0,y(o)),this._trackKeys.push(a)}s.addKeyframe(t,y(e[a]))}return this._maxTime=Math.max(this._maxTime,t),this},t.prototype.pause=function(){this._clip.pause(),this._paused=!0},t.prototype.resume=function(){this._clip.resume(),this._paused=!1},t.prototype.isPaused=function(){return!!this._paused},t.prototype._doneCallback=function(){this._setTracksFinished(),this._clip=null;var t=this._doneCbs;if(t)for(var e=t.length,i=0;i<e;i++)t[i].call(this)},t.prototype._abortedCallback=function(){this._setTracksFinished();var t=this.animation,e=this._abortedCbs;if(t&&t.removeClip(this._clip),this._clip=null,e)for(var i=0;i<e.length;i++)e[i].call(this)},t.prototype._setTracksFinished=function(){for(var t=this._tracks,e=this._trackKeys,i=0;i<e.length;i++)t[e[i]].setFinished()},t.prototype._getAdditiveTrack=function(t){var e,i=this._additiveAnimators;if(i)for(var r=0;r<i.length;r++){var n=i[r].getTrack(t);n&&(e=n)}return e},t.prototype.start=function(t,e){if(!(this._started>0)){this._started=1;for(var i=this,r=[],n=0;n<this._trackKeys.length;n++){var s=this._trackKeys[n],o=this._tracks[s],l=this._getAdditiveTrack(s),h=o.keyframes;if(o.prepare(l),o.needsAnimate())r.push(o);else if(!o.interpolable){var u=h[h.length-1];u&&(i._target[o.propName]=u.value)}}if(r.length||e){var c=new a({life:this._maxTime,loop:this._loop,delay:this._delay,onframe:function(t){i._started=2;var e=i._additiveAnimators;if(e){for(var n=!1,a=0;a<e.length;a++)if(e[a]._clip){n=!0;break}n||(i._additiveAnimators=null)}for(a=0;a<r.length;a++)r[a].step(i._target,t);var s=i._onframeCbs;if(s)for(a=0;a<s.length;a++)s[a](i._target,t)},ondestroy:function(){i._doneCallback()}});this._clip=c,this.animation&&this.animation.addClip(c),t&&"spline"!==t&&(c.easing=t)}else this._doneCallback();return this}},t.prototype.stop=function(t){if(this._clip){var e=this._clip;t&&e.onframe(1),this._abortedCallback()}},t.prototype.delay=function(t){return this._delay=t,this},t.prototype.during=function(t){return t&&(this._onframeCbs||(this._onframeCbs=[]),this._onframeCbs.push(t)),this},t.prototype.done=function(t){return t&&(this._doneCbs||(this._doneCbs=[]),this._doneCbs.push(t)),this},t.prototype.aborted=function(t){return t&&(this._abortedCbs||(this._abortedCbs=[]),this._abortedCbs.push(t)),this},t.prototype.getClip=function(){return this._clip},t.prototype.getTrack=function(t){return this._tracks[t]},t.prototype.stopTracks=function(t,e){if(!t.length||!this._clip)return!0;for(var i=this._tracks,r=this._trackKeys,n=0;n<t.length;n++){var a=i[t[n]];a&&(e?a.step(this._target,1):1===this._started&&a.step(this._target,0),a.setFinished())}var s=!0;for(n=0;n<r.length;n++)if(!i[r[n]].isFinished()){s=!1;break}return s&&this._abortedCallback(),s},t.prototype.saveFinalToTarget=function(t,e){if(t){e=e||this._trackKeys;for(var i=0;i<e.length;i++){var r=e[i],n=this._tracks[r];if(n&&!n.isFinished()){var a=n.keyframes,s=a[a.length-1];if(s){var o=y(s.value);n.isValueColor&&(o=g(o)),t[r]=o}}}}},t.prototype.__changeFinalValue=function(t,e){e=e||Object(o.keys)(t);for(var i=0;i<e.length;i++){var r=e[i],n=this._tracks[r];if(n){var a=n.keyframes;if(a.length>1){var s=a.pop();n.addKeyframe(s.time,t[r]),n.prepare(n.getAdditiveTrack())}}}},t}();e.b=w},327:function(t,e,i){"use strict";function r(t,e,i){for(var r="radial"===e.type?function(t,e,i){var r=i.width,n=i.height,a=Math.min(r,n),s=null==e.x?.5:e.x,o=null==e.y?.5:e.y,l=null==e.r?.5:e.r;return e.global||(s=s*r+i.x,o=o*n+i.y,l*=a),t.createRadialGradient(s,o,0,s,o,l)}(t,e,i):function(t,e,i){var r=null==e.x?0:e.x,n=null==e.x2?1:e.x2,a=null==e.y?0:e.y,s=null==e.y2?0:e.y2;return e.global||(r=r*i.width+i.x,n=n*i.width+i.x,a=a*i.height+i.y,s=s*i.height+i.y),r=isNaN(r)?0:r,n=isNaN(n)?1:n,a=isNaN(a)?0:a,s=isNaN(s)?0:s,t.createLinearGradient(r,a,n,s)}(t,e,i),n=e.colorStops,a=0;a<n.length;a++)r.addColorStop(n[a].offset,n[a].color);return r}function n(t,e){if(t===e||!t&&!e)return!1;if(!t||!e||t.length!==e.length)return!0;for(var i=0;i<t.length;i++)if(t[i]!==e[i])return!0;return!1}i.d(e,"a",(function(){return r})),i.d(e,"b",(function(){return n}))},487:function(t,e,i){"use strict";var r;r="undefined"!==typeof window&&(window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.msRequestAnimationFrame&&window.msRequestAnimationFrame.bind(window)||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame)||function(t){return setTimeout(t,16)},e.a=r},901:function(t,e,i){"use strict";var r=i(57),n=i(118),a=i(487),s=i(246),o=function(t){function e(e){var i=t.call(this)||this;return i._running=!1,i._time=0,i._pausedTime=0,i._pauseStart=0,i._paused=!1,e=e||{},i.stage=e.stage||{},i.onframe=e.onframe||function(){},i}return Object(r.a)(e,t),e.prototype.addClip=function(t){t.animation&&this.removeClip(t),this._clipsHead?(this._clipsTail.next=t,t.prev=this._clipsTail,t.next=null,this._clipsTail=t):this._clipsHead=this._clipsTail=t,t.animation=this},e.prototype.addAnimator=function(t){t.animation=this;var e=t.getClip();e&&this.addClip(e)},e.prototype.removeClip=function(t){if(t.animation){var e=t.prev,i=t.next;e?e.next=i:this._clipsHead=i,i?i.prev=e:this._clipsTail=e,t.next=t.prev=t.animation=null}},e.prototype.removeAnimator=function(t){var e=t.getClip();e&&this.removeClip(e),t.animation=null},e.prototype.update=function(t){for(var e=(new Date).getTime()-this._pausedTime,i=e-this._time,r=this._clipsHead;r;){var n=r.next;r.step(e,i)?(r.ondestroy&&r.ondestroy(),this.removeClip(r),r=n):r=n}this._time=e,t||(this.onframe(i),this.trigger("frame",i),this.stage.update&&this.stage.update())},e.prototype._startLoop=function(){var t=this;this._running=!0,Object(a.a)((function e(){t._running&&(Object(a.a)(e),!t._paused&&t.update())}))},e.prototype.start=function(){this._running||(this._time=(new Date).getTime(),this._pausedTime=0,this._startLoop())},e.prototype.stop=function(){this._running=!1},e.prototype.pause=function(){this._paused||(this._pauseStart=(new Date).getTime(),this._paused=!0)},e.prototype.resume=function(){this._paused&&(this._pausedTime+=(new Date).getTime()-this._pauseStart,this._paused=!1)},e.prototype.clear=function(){for(var t=this._clipsHead;t;){var e=t.next;t.prev=t.next=t.animation=null,t=e}this._clipsHead=this._clipsTail=null},e.prototype.isFinished=function(){return null==this._clipsHead},e.prototype.animate=function(t,e){e=e||{},this.start();var i=new s.b(t,e.loop);return this.addAnimator(i),i},e}(n.a);e.a=o}}]);