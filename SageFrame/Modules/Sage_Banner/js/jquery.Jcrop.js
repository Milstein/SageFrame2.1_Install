(function(a){a.Jcrop=function(b,c){function bl(a){e.allowResize?a?H.enableOnly():H.enableHandles():H.disableHandles();I.setCursor(e.allowSelect?"crosshair":"default");H.setCursor(e.allowMove?"move":"default");l.css("backgroundColor",e.bgColor);if("setSelect"in e){bb(c.setSelect);H.done();delete e.setSelect}if("trueSize"in e){x=e.trueSize[0]/j;y=e.trueSize[1]/k}s=e.maxSize[0]||0;t=e.maxSize[1]||0;u=e.minSize[0]||0;v=e.minSize[1]||0;if("outerImage"in e){g.attr("src",e.outerImage);delete e.outerImage}H.refresh()}function bk(){l.remove();f.show()}function bj(){H.done();I.activateHandlers(null,null)}function bi(){e.disabled=false;bl()}function bh(){e.disabled=true;H.disableHandles();H.setCursor("default");I.setCursor("default")}function bg(a){bd(a);bl()}function bf(){return G.getFixed()}function be(){return W(G.getFixed())}function bd(b){if(typeof b!="object")b={};e=a.extend(e,b);if(typeof e.onChange!=="function")e.onChange=function(){};if(typeof e.onSelect!=="function")e.onSelect=function(){}}function bc(a){G.setPressed([a[0],a[1]]);G.setCurrent([a[2],a[3]]);H.update()}function bb(a){bc([a[0]/x,a[1]/y,a[2]/x,a[3]/y])}function ba(a){function t(){window.setTimeout(s,j)}var b=a[0]/x,c=a[1]/y,d=a[2]/x,f=a[3]/y;if(E)return;var g=G.flipCoords(b,c,d,f);var h=G.getFixed();var i=initcr=[h.x,h.y,h.x2,h.y2];var j=e.animationDelay;var k=i[0];var l=i[1];var d=i[2];var f=i[3];var m=g[0]-initcr[0];var n=g[1]-initcr[1];var o=g[2]-initcr[2];var p=g[3]-initcr[3];var q=0;var r=e.swingSpeed;H.animMode(true);var s=function(){return function(){q+=(100-q)/r;i[0]=k+q/100*m;i[1]=l+q/100*n;i[2]=d+q/100*o;i[3]=f+q/100*p;if(q<100)t();else H.done();if(q>=99.8)q=100;bc(i)}}();t()}function _(){var b=a("<div></div>").addClass(M("tracker"));a.browser.msie&&b.css({opacity:0,backgroundColor:"white"});return b}function Z(a){G.setCurrent(a);H.update()}function Y(a){if(e.disabled)return false;if(!e.allowSelect)return false;B=true;A=N(g);H.disableHandles();P("crosshair");var b=O(a);G.setPressed(b);I.activateHandlers(Z,X);J.watchKeys();H.update();a.stopPropagation();a.preventDefault();return false}function X(a){var b=G.getFixed();if(b.w>e.minSelect[0]&&b.h>e.minSelect[1]){H.enableHandles();H.done()}else{H.release()}I.setCursor(e.allowSelect?"crosshair":"default")}function W(a){return{x:parseInt(a.x*x),y:parseInt(a.y*y),x2:parseInt(a.x2*x),y2:parseInt(a.y2*y),w:parseInt(a.w*x),h:parseInt(a.h*y)}}function V(a,b,c){var d=a.width(),e=a.height();if(d>b&&b>0){d=b;e=b/a.width()*a.height()}if(e>c&&c>0){e=c;d=c/a.height()*a.width()}x=a.width()/d;y=a.height()/e;a.width(d).height(e)}function U(a){return function(b){if(e.disabled)return false;if(a=="move"&&!e.allowMove)return false;B=true;Q(a,O(b));b.stopPropagation();b.preventDefault();return false}}function T(a){switch(a){case"n":return"sw";case"s":return"nw";case"e":return"nw";case"w":return"ne";case"ne":return"sw";case"nw":return"se";case"se":return"nw";case"sw":return"ne"}}function S(a){var b=a;J.watchKeys();return function(a){G.moveOffset([a[0]-b[0],a[1]-b[1]]);b=a;H.update()}}function R(a,b){return function(c){if(!e.aspectRatio)switch(a){case"e":c[1]=b.y2;break;case"w":c[1]=b.y2;break;case"n":c[0]=b.x2;break;case"s":c[0]=b.x2;break}else switch(a){case"e":c[1]=b.y+1;break;case"w":c[1]=b.y+1;break;case"n":c[0]=b.x+1;break;case"s":c[0]=b.x+1;break}G.setCurrent(c);H.update()}}function Q(a,b){A=N(g);I.setCursor(a=="move"?a:a+"-resize");if(a=="move")return I.activateHandlers(S(b),X);var c=G.getFixed();var d=T(a);var e=G.getCorner(T(d));G.setPressed(G.getCorner(d));G.setCurrent(e);I.activateHandlers(R(a,c),X)}function P(a){if(a!=C){I.setCursor(a);C=a}}function O(a){return[a.pageX-A[0],a.pageY-A[1]]}function N(b){var c=a(b).offset();return[c.left,c.top]}function M(a){return e.baseClass+"-"+a}function L(a){return""+parseInt(a)+"%"}function K(a){return""+parseInt(a)+"px"}var b=b,c=c;if(typeof b!=="object")b=a(b)[0];if(typeof c!=="object")c={};if(!("trackDocument"in c)){c.trackDocument=a.browser.msie?false:true;if(a.browser.msie&&a.browser.version.split(".")[0]=="8")c.trackDocument=true}if(!("keySupport"in c))c.keySupport=a.browser.msie?false:true;var d={trackDocument:false,baseClass:"jcrop",addClass:null,bgColor:"black",bgOpacity:.6,borderOpacity:.4,handleOpacity:.5,handlePad:5,handleSize:9,handleOffset:5,edgeMargin:14,aspectRatio:0,keySupport:true,cornerHandles:true,sideHandles:true,drawBorders:true,dragEdges:true,boxWidth:0,boxHeight:0,boundary:8,animationDelay:20,swingSpeed:3,allowSelect:true,allowMove:true,allowResize:true,minSelect:[0,0],maxSize:[0,0],minSize:[0,0],onChange:function(){},onSelect:function(){}};var e=d;bd(c);var f=a(b);var g=f.clone().removeAttr("id").css({position:"absolute"});g.width(f.width());g.height(f.height());f.after(g).hide();V(g,e.boxWidth,e.boxHeight);var j=g.width(),k=g.height(),l=a("<div />").width(j).height(k).addClass(M("holder")).css({position:"relative",backgroundColor:e.bgColor}).insertAfter(f).append(g);if(e.addClass)l.addClass(e.addClass);var m=a("<img />").attr("src",g.attr("src")).css("position","absolute").width(j).height(k);var n=a("<div />").width(L(100)).height(L(100)).css({zIndex:310,position:"absolute",overflow:"hidden"}).append(m);var o=a("<div />").width(L(100)).height(L(100)).css("zIndex",320);var p=a("<div />").css({position:"absolute",zIndex:300}).insertBefore(g).append(n,o);var q=e.boundary;var r=_().width(j+q*2).height(k+q*2).css({position:"absolute",top:K(-q),left:K(-q),zIndex:290}).mousedown(Y);var s,t,u,v;var x,y,z=true;var A=N(g),B,C,D,E,F;var G=function(){function A(a){return{x:a[0],y:a[1],x2:a[2],y2:a[3],w:a[2]-a[0],h:a[3]-a[1]}}function z(){var e=c-a;var f=d-b;if(s&&Math.abs(e)>s)c=e>0?a+s:a-s;if(t&&Math.abs(f)>t)d=f>0?b+t:b-t;if(v&&Math.abs(f)<v)d=f>0?b+v:b-v;if(u&&Math.abs(e)<u)c=e>0?a+u:a-u;if(a<0){c-=a;a-=a}if(b<0){d-=b;b-=b}if(c<0){a-=c;c-=c}if(d<0){b-=d;d-=d}if(c>j){var g=c-j;a-=g;c-=g}if(d>k){var g=d-k;b-=g;d-=g}if(a>j){var g=a-k;d-=g;b-=g}if(b>k){var g=b-k;d-=g;b-=g}return A(r(a,b,c,d))}function r(a,b,c,d){var e=a,f=c,g=b,h=d;if(c<a){e=c;f=a}if(d<b){g=d;h=b}return[Math.round(e),Math.round(g),Math.round(f),Math.round(h)]}function q(a){if(a[0]<0)a[0]=0;if(a[1]<0)a[1]=0;if(a[0]>j)a[0]=j;if(a[1]>k)a[1]=k;return[a[0],a[1]]}function p(){if(!e.aspectRatio)return z();var f=e.aspectRatio,g=e.minSize[0]/x,i=e.minSize[1]/y,l=e.maxSize[0]/x,m=e.maxSize[1]/y,n=c-a,o=d-b,p=Math.abs(n),q=Math.abs(o),s=p/q,t,u;if(l==0){l=j*10}if(m==0){m=k*10}if(s<f){u=d;w=q*f;t=n<0?a-w:w+a;if(t<0){t=0;h=Math.abs((t-a)/f);u=o<0?b-h:h+b}else if(t>j){t=j;h=Math.abs((t-a)/f);u=o<0?b-h:h+b}}else{t=c;h=p/f;u=o<0?b-h:b+h;if(u<0){u=0;w=Math.abs((u-b)*f);t=n<0?a-w:w+a}else if(u>k){u=k;w=Math.abs(u-b)*f;t=n<0?a-w:w+a}}if(t>a){if(t-a<g){t=a+g}else if(t-a>l){t=a+l}if(u>b){u=b+(t-a)/f}else{u=b-(t-a)/f}}else if(t<a){if(a-t<g){t=a-g}else if(a-t>l){t=a-l}if(u>b){u=b+(a-t)/f}else{u=b-(a-t)/f}}if(t<0){a-=t;t=0}else if(t>j){a-=t-j;t=j}if(u<0){b-=u;u=0}else if(u>k){b-=u-k;u=k}return last=A(r(a,b,t,u))}function o(a){var b=p();switch(a){case"ne":return[b.x2,b.y];case"nw":return[b.x,b.y];case"se":return[b.x2,b.y2];case"sw":return[b.x,b.y2]}}function n(e){var f=e[0],g=e[1];if(0>a+f)f-=f+a;if(0>b+g)g-=g+b;if(k<d+g)g+=k-(d+g);if(j<c+f)f+=j-(c+f);a+=f;c+=f;b+=g;d+=g}function m(){return[f,g]}function l(a){var a=q(a);f=a[0]-c;g=a[1]-d;c=a[0];d=a[1]}function i(e){var e=q(e);c=a=e[0];d=b=e[1]}var a=0,b=0,c=0,d=0,f,g;return{flipCoords:r,setPressed:i,setCurrent:l,getOffset:m,moveOffset:n,getCorner:o,getFixed:p}}();var H=function(){function N(){J(false);z()}function J(a){(E=a)?I():H()}function I(){l=false;o.hide()}function H(){l=true;if(e.allowResize){w(G.getFixed());o.show();return true}}function F(){if(l){w(G.getFixed());o.show()}}function D(){I();p.hide();g.css("opacity",1);f=false}function C(){p.show();g.css("opacity",e.bgOpacity);f=true}function B(){var a=G.getFixed();y(a.w,a.h);x(a.x,a.y);e.drawBorders&&j["right"].css({left:K(a.w-1)})&&j["bottom"].css({top:K(a.h-1)});l&&w(a);f||C();e.onChange(W(a))}function A(){if(f)return B()}function z(){var a=G.getFixed();G.setPressed([a.x,a.y]);G.setCurrent([a.x2,a.y2]);A()}function y(a,b){p.width(a).height(b)}function x(a,b){m.css({top:K(-b),left:K(-a)});p.css({top:K(b),left:K(a)})}function w(a){var b=Math.round(a.h/2-q),c=Math.round(a.w/2-q),d=west=-q+1,e=a.w-q,f=a.h-q,g,h;"e"in k&&k.e.css({top:K(b),left:K(e)})&&k.w.css({top:K(b)})&&k.s.css({top:K(f),left:K(c)})&&k.n.css({left:K(c)});"ne"in k&&k.ne.css({left:K(e)})&&k.se.css({top:K(f),left:K(e)})&&k.sw.css({top:K(f)});"b"in k&&k.b.css({top:K(f)})&&k.r.css({left:K(e)})}function v(a){for(i in a)k[a[i]]=t(a[i])}function u(a){var b=e.handleSize,c=q,d=b,f=b,g=c,i=c;switch(a){case"n":case"s":f=L(100);break;case"e":case"w":d=L(100);break}return s(a,h++).width(f).height(d).css({top:K(-g+1),left:K(-i+1)})}function t(a){return s(a,h++).css({top:K(-q+1),left:K(-q+1),opacity:e.handleOpacity}).addClass(M("handle"))}function s(b,c){var d=a("<div />").mousedown(U(b)).css({cursor:b+"-resize",position:"absolute",zIndex:c});o.append(d);return d}function r(b){var c=a("<div />").css({position:"absolute",opacity:e.borderOpacity}).addClass(M(b));n.append(c);return c}var b,c,d,f,h=370;var j={};var k={};var l=false;var q=e.handleOffset;if(e.drawBorders){j={top:r("hline").css("top",a.browser.msie?K(-1):K(0)),bottom:r("hline"),left:r("vline"),right:r("vline")}}if(e.dragEdges){k.t=u("n");k.b=u("s");k.r=u("e");k.l=u("w")}e.sideHandles&&v(["n","s","e","w"]);e.cornerHandles&&v(["sw","nw","ne","se"]);var O=_().mousedown(U("move")).css({cursor:"move",position:"absolute",zIndex:360});n.append(O);I();return{updateVisible:A,update:B,release:D,refresh:z,setCursor:function(a){O.css("cursor",a)},enableHandles:H,enableOnly:function(){l=true},showHandles:F,disableHandles:I,animMode:J,done:N}}();var I=function(){function l(a){r.css("cursor",a)}function k(a,d){B=true;b=a;c=d;f();return false}function j(a){a.preventDefault();a.stopPropagation();if(B){B=false;c(O(a));e.onSelect(W(G.getFixed()));h();b=function(){};c=function(){}}return false}function i(a){b(O(a))}function h(){r.css({zIndex:290});if(d){a(document).unbind("mousemove",i).unbind("mouseup",j)}}function f(){r.css({zIndex:450});if(d){a(document).mousemove(i).mouseup(j)}}var b=function(){},c=function(){},d=e.trackDocument;if(!d){r.mousemove(i).mouseup(j).mouseout(j)}g.before(r);return{activateHandlers:k,setCursor:l}}();var J=function(){function i(a){if(a.ctrlKey)return true;F=a.shiftKey?true:false;var b=F?10:1;switch(a.keyCode){case 37:h(a,-b,0);break;case 39:h(a,b,0);break;case 38:h(a,0,-b);break;case 40:h(a,0,b);break;case 27:H.release();break;case 9:return true}return nothing(a)}function h(a,b,c){if(e.allowMove){G.moveOffset([b,c]);H.updateVisible()}a.preventDefault();a.stopPropagation()}function f(a){b.hide()}function d(){if(e.keySupport){b.show();b.focus()}}var b=a('<input type="radio" />').css({position:"absolute",left:"-30px"}).keypress(i).blur(f),c=a("<div />").css({position:"absolute",overflow:"hidden"}).append(b);if(e.keySupport)c.insertBefore(g);return{watchKeys:d}}();o.hide();bl(true);var bm={animateTo:ba,setSelect:bb,setOptions:bg,tellSelect:be,tellScaled:bf,disable:bh,enable:bi,cancel:bj,focus:J.watchKeys,getBounds:function(){return[j*x,k*y]},getWidgetSize:function(){return[j,k]},release:H.release,destroy:bk};f.data("Jcrop",bm);return bm};a.fn.Jcrop=function(b){function c(c){var d=b.useImg||c.src;var e=new Image;e.onload=function(){a.Jcrop(c,b)};e.src=d}if(typeof b!=="object")b={};this.each(function(){if(a(this).data("Jcrop")){if(b=="api")return a(this).data("Jcrop");else a(this).data("Jcrop").setOptions(b)}else c(this)});return this}})(jQuery)