/*! For license information please see 411.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([[411],{2976:function(e,t,r){e.exports=function(e){"use strict";var t=function(){return(t=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},r={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8};function n(e){this.mode=r.MODE_8BIT_BYTE,this.data=e}n.prototype={getLength:function(e){return this.data.length},write:function(e){for(var t=0;t<this.data.length;t++)e.put(this.data.charCodeAt(t),8)}};var o=n,i={L:1,M:0,Q:3,H:2};function a(e,t){this.totalCount=e,this.dataCount=t}a.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],a.getRSBlocks=function(e,t){var r=a.getRsBlockTable(e,t);if(null==r)throw new Error("bad rs block @ typeNumber:"+e+"/errorCorrectLevel:"+t);for(var n=r.length/3,o=new Array,i=0;i<n;i++)for(var l=r[3*i+0],s=r[3*i+1],u=r[3*i+2],c=0;c<l;c++)o.push(new a(s,u));return o},a.getRsBlockTable=function(e,t){switch(t){case i.L:return a.RS_BLOCK_TABLE[4*(e-1)+0];case i.M:return a.RS_BLOCK_TABLE[4*(e-1)+1];case i.Q:return a.RS_BLOCK_TABLE[4*(e-1)+2];case i.H:return a.RS_BLOCK_TABLE[4*(e-1)+3];default:return}};var l=a;function s(){this.buffer=new Array,this.length=0}s.prototype={get:function(e){var t=Math.floor(e/8);return 1==(this.buffer[t]>>>7-e%8&1)},put:function(e,t){for(var r=0;r<t;r++)this.putBit(1==(e>>>t-r-1&1))},getLengthInBits:function(){return this.length},putBit:function(e){var t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}};for(var u=s,c={glog:function(e){if(e<1)throw new Error("glog("+e+")");return c.LOG_TABLE[e]},gexp:function(e){for(;e<0;)e+=255;for(;e>=256;)e-=255;return c.EXP_TABLE[e]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},h=0;h<8;h++)c.EXP_TABLE[h]=1<<h;for(h=8;h<256;h++)c.EXP_TABLE[h]=c.EXP_TABLE[h-4]^c.EXP_TABLE[h-5]^c.EXP_TABLE[h-6]^c.EXP_TABLE[h-8];for(h=0;h<255;h++)c.LOG_TABLE[c.EXP_TABLE[h]]=h;var d=c;function f(e,t){if(null==e.length)throw new Error(e.length+"/"+t);for(var r=0;r<e.length&&0==e[r];)r++;this.num=new Array(e.length-r+t);for(var n=0;n<e.length-r;n++)this.num[n]=e[n+r]}f.prototype={get:function(e){return this.num[e]},getLength:function(){return this.num.length},multiply:function(e){for(var t=new Array(this.getLength()+e.getLength()-1),r=0;r<this.getLength();r++)for(var n=0;n<e.getLength();n++)t[r+n]^=d.gexp(d.glog(this.get(r))+d.glog(e.get(n)));return new f(t,0)},mod:function(e){if(this.getLength()-e.getLength()<0)return this;for(var t=d.glog(this.get(0))-d.glog(e.get(0)),r=new Array(this.getLength()),n=0;n<this.getLength();n++)r[n]=this.get(n);for(n=0;n<e.getLength();n++)r[n]^=d.gexp(d.glog(e.get(n))+t);return new f(r,0).mod(e)}};var g=f,p={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},m={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(e){for(var t=e<<10;m.getBCHDigit(t)-m.getBCHDigit(m.G15)>=0;)t^=m.G15<<m.getBCHDigit(t)-m.getBCHDigit(m.G15);return(e<<10|t)^m.G15_MASK},getBCHTypeNumber:function(e){for(var t=e<<12;m.getBCHDigit(t)-m.getBCHDigit(m.G18)>=0;)t^=m.G18<<m.getBCHDigit(t)-m.getBCHDigit(m.G18);return e<<12|t},getBCHDigit:function(e){for(var t=0;0!=e;)t++,e>>>=1;return t},getPatternPosition:function(e){return m.PATTERN_POSITION_TABLE[e-1]},getMask:function(e,t,r){switch(e){case p.PATTERN000:return(t+r)%2==0;case p.PATTERN001:return t%2==0;case p.PATTERN010:return r%3==0;case p.PATTERN011:return(t+r)%3==0;case p.PATTERN100:return(Math.floor(t/2)+Math.floor(r/3))%2==0;case p.PATTERN101:return t*r%2+t*r%3==0;case p.PATTERN110:return(t*r%2+t*r%3)%2==0;case p.PATTERN111:return(t*r%3+(t+r)%2)%2==0;default:throw new Error("bad maskPattern:"+e)}},getErrorCorrectPolynomial:function(e){for(var t=new g([1],0),r=0;r<e;r++)t=t.multiply(new g([1,d.gexp(r)],0));return t},getLengthInBits:function(e,t){if(1<=t&&t<10)switch(e){case r.MODE_NUMBER:return 10;case r.MODE_ALPHA_NUM:return 9;case r.MODE_8BIT_BYTE:case r.MODE_KANJI:return 8;default:throw new Error("mode:"+e)}else if(t<27)switch(e){case r.MODE_NUMBER:return 12;case r.MODE_ALPHA_NUM:return 11;case r.MODE_8BIT_BYTE:return 16;case r.MODE_KANJI:return 10;default:throw new Error("mode:"+e)}else{if(!(t<41))throw new Error("type:"+t);switch(e){case r.MODE_NUMBER:return 14;case r.MODE_ALPHA_NUM:return 13;case r.MODE_8BIT_BYTE:return 16;case r.MODE_KANJI:return 12;default:throw new Error("mode:"+e)}}},getLostPoint:function(e){for(var t=e.getModuleCount(),r=0,n=0;n<t;n++)for(var o=0;o<t;o++){for(var i=0,a=e.isDark(n,o),l=-1;l<=1;l++)if(!(n+l<0||t<=n+l))for(var s=-1;s<=1;s++)o+s<0||t<=o+s||0==l&&0==s||a==e.isDark(n+l,o+s)&&i++;i>5&&(r+=3+i-5)}for(n=0;n<t-1;n++)for(o=0;o<t-1;o++){var u=0;e.isDark(n,o)&&u++,e.isDark(n+1,o)&&u++,e.isDark(n,o+1)&&u++,e.isDark(n+1,o+1)&&u++,0!=u&&4!=u||(r+=3)}for(n=0;n<t;n++)for(o=0;o<t-6;o++)e.isDark(n,o)&&!e.isDark(n,o+1)&&e.isDark(n,o+2)&&e.isDark(n,o+3)&&e.isDark(n,o+4)&&!e.isDark(n,o+5)&&e.isDark(n,o+6)&&(r+=40);for(o=0;o<t;o++)for(n=0;n<t-6;n++)e.isDark(n,o)&&!e.isDark(n+1,o)&&e.isDark(n+2,o)&&e.isDark(n+3,o)&&e.isDark(n+4,o)&&!e.isDark(n+5,o)&&e.isDark(n+6,o)&&(r+=40);var c=0;for(o=0;o<t;o++)for(n=0;n<t;n++)e.isDark(n,o)&&c++;return r+=Math.abs(100*c/t/t-50)/5*10}},v=m;function C(e,t){this.typeNumber=e,this.errorCorrectLevel=t,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}var B=C.prototype;B.addData=function(e){var t=new o(e);this.dataList.push(t),this.dataCache=null},B.isDark=function(e,t){if(e<0||this.moduleCount<=e||t<0||this.moduleCount<=t)throw new Error(e+","+t);return this.modules[e][t]},B.getModuleCount=function(){return this.moduleCount},B.make=function(){if(this.typeNumber<1){var e=1;for(e=1;e<40;e++){for(var t=l.getRSBlocks(e,this.errorCorrectLevel),r=new u,n=0,o=0;o<t.length;o++)n+=t[o].dataCount;for(o=0;o<this.dataList.length;o++){var i=this.dataList[o];r.put(i.mode,4),r.put(i.getLength(),v.getLengthInBits(i.mode,e)),i.write(r)}if(r.getLengthInBits()<=8*n)break}this.typeNumber=e}this.makeImpl(!1,this.getBestMaskPattern())},B.makeImpl=function(e,t){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var r=0;r<this.moduleCount;r++){this.modules[r]=new Array(this.moduleCount);for(var n=0;n<this.moduleCount;n++)this.modules[r][n]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(e,t),this.typeNumber>=7&&this.setupTypeNumber(e),null==this.dataCache&&(this.dataCache=C.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,t)},B.setupPositionProbePattern=function(e,t){for(var r=-1;r<=7;r++)if(!(e+r<=-1||this.moduleCount<=e+r))for(var n=-1;n<=7;n++)t+n<=-1||this.moduleCount<=t+n||(this.modules[e+r][t+n]=0<=r&&r<=6&&(0==n||6==n)||0<=n&&n<=6&&(0==r||6==r)||2<=r&&r<=4&&2<=n&&n<=4)},B.getBestMaskPattern=function(){for(var e=0,t=0,r=0;r<8;r++){this.makeImpl(!0,r);var n=v.getLostPoint(this);(0==r||e>n)&&(e=n,t=r)}return t},B.createMovieClip=function(e,t,r){var n=e.createEmptyMovieClip(t,r),o=1;this.make();for(var i=0;i<this.modules.length;i++)for(var a=i*o,l=0;l<this.modules[i].length;l++){var s=l*o;this.modules[i][l]&&(n.beginFill(0,100),n.moveTo(s,a),n.lineTo(s+o,a),n.lineTo(s+o,a+o),n.lineTo(s,a+o),n.endFill())}return n},B.setupTimingPattern=function(){for(var e=8;e<this.moduleCount-8;e++)null==this.modules[e][6]&&(this.modules[e][6]=e%2==0);for(var t=8;t<this.moduleCount-8;t++)null==this.modules[6][t]&&(this.modules[6][t]=t%2==0)},B.setupPositionAdjustPattern=function(){for(var e=v.getPatternPosition(this.typeNumber),t=0;t<e.length;t++)for(var r=0;r<e.length;r++){var n=e[t],o=e[r];if(null==this.modules[n][o])for(var i=-2;i<=2;i++)for(var a=-2;a<=2;a++)this.modules[n+i][o+a]=-2==i||2==i||-2==a||2==a||0==i&&0==a}},B.setupTypeNumber=function(e){for(var t=v.getBCHTypeNumber(this.typeNumber),r=0;r<18;r++){var n=!e&&1==(t>>r&1);this.modules[Math.floor(r/3)][r%3+this.moduleCount-8-3]=n}for(r=0;r<18;r++)n=!e&&1==(t>>r&1),this.modules[r%3+this.moduleCount-8-3][Math.floor(r/3)]=n},B.setupTypeInfo=function(e,t){for(var r=this.errorCorrectLevel<<3|t,n=v.getBCHTypeInfo(r),o=0;o<15;o++){var i=!e&&1==(n>>o&1);o<6?this.modules[o][8]=i:o<8?this.modules[o+1][8]=i:this.modules[this.moduleCount-15+o][8]=i}for(o=0;o<15;o++)i=!e&&1==(n>>o&1),o<8?this.modules[8][this.moduleCount-o-1]=i:o<9?this.modules[8][15-o-1+1]=i:this.modules[8][15-o-1]=i;this.modules[this.moduleCount-8][8]=!e},B.mapData=function(e,t){for(var r=-1,n=this.moduleCount-1,o=7,i=0,a=this.moduleCount-1;a>0;a-=2)for(6==a&&a--;;){for(var l=0;l<2;l++)if(null==this.modules[n][a-l]){var s=!1;i<e.length&&(s=1==(e[i]>>>o&1)),v.getMask(t,n,a-l)&&(s=!s),this.modules[n][a-l]=s,-1==--o&&(i++,o=7)}if((n+=r)<0||this.moduleCount<=n){n-=r,r=-r;break}}},C.PAD0=236,C.PAD1=17,C.createData=function(e,t,r){for(var n=l.getRSBlocks(e,t),o=new u,i=0;i<r.length;i++){var a=r[i];o.put(a.mode,4),o.put(a.getLength(),v.getLengthInBits(a.mode,e)),a.write(o)}var s=0;for(i=0;i<n.length;i++)s+=n[i].dataCount;if(o.getLengthInBits()>8*s)throw new Error("code length overflow. ("+o.getLengthInBits()+">"+8*s+")");for(o.getLengthInBits()+4<=8*s&&o.put(0,4);o.getLengthInBits()%8!=0;)o.putBit(!1);for(;!(o.getLengthInBits()>=8*s||(o.put(C.PAD0,8),o.getLengthInBits()>=8*s));)o.put(C.PAD1,8);return C.createBytes(o,n)},C.createBytes=function(e,t){for(var r=0,n=0,o=0,i=new Array(t.length),a=new Array(t.length),l=0;l<t.length;l++){var s=t[l].dataCount,u=t[l].totalCount-s;n=Math.max(n,s),o=Math.max(o,u),i[l]=new Array(s);for(var c=0;c<i[l].length;c++)i[l][c]=255&e.buffer[c+r];r+=s;var h=v.getErrorCorrectPolynomial(u),d=new g(i[l],h.getLength()-1).mod(h);for(a[l]=new Array(h.getLength()-1),c=0;c<a[l].length;c++){var f=c+d.getLength()-a[l].length;a[l][c]=f>=0?d.get(f):0}}var p=0;for(c=0;c<t.length;c++)p+=t[c].totalCount;var m=new Array(p),C=0;for(c=0;c<n;c++)for(l=0;l<t.length;l++)c<i[l].length&&(m[C++]=i[l][c]);for(c=0;c<o;c++)for(l=0;l<t.length;l++)c<a[l].length&&(m[C++]=a[l][c]);return m};var k=C,w={L:1,M:0,Q:3,H:2},T=function(e,t){var r=new k((t=t||{}).typeNumber||-1,t.errorCorrectLevel||w.H);return r.addData(e),r.make(),r};T.ErrorCorrectLevel=w;var y=T,E="H",L=function(){try{(new Path2D).addPath(new Path2D)}catch(e){return!1}return!0}();function b(e,t){return new y(e,{typeNumber:-1,errorCorrectLevel:t})}function A(e){return e in y.ErrorCorrectLevel}function P(e){for(var t="",r=0;r<e.length;r++){var n=e.charCodeAt(r);n<128?t+=String.fromCharCode(n):n<2048?(t+=String.fromCharCode(192|n>>6),t+=String.fromCharCode(128|63&n)):n<55296||n>=57344?(t+=String.fromCharCode(224|n>>12),t+=String.fromCharCode(128|n>>6&63),t+=String.fromCharCode(128|63&n)):(r++,n=65536+((1023&n)<<10|1023&e.charCodeAt(r)),t+=String.fromCharCode(240|n>>18),t+=String.fromCharCode(128|n>>12&63),t+=String.fromCharCode(128|n>>6&63),t+=String.fromCharCode(128|63&n))}return t}function N(e,t){void 0===t&&(t=0);var r=[];return e.forEach((function(e,n){var o=null;e.forEach((function(i,a){if(!i&&null!==o)return r.push("M"+(o+t)+" "+(n+t)+"h"+(a-o)+"v1H"+(o+t)+"z"),void(o=null);if(a!==e.length-1)i&&null===o&&(o=a);else{if(!i)return;null===o?r.push("M"+(a+t)+","+(n+t)+" h1v1H"+(a+t)+"z"):r.push("M"+(o+t)+","+(n+t)+" h"+(a+1-o)+"v1H"+(o+t)+"z")}}))})),r.join("")}var x={value:{type:String,required:!0,default:""},size:{type:Number,default:100},level:{type:String,default:E,validator:function(e){return A(e)}},background:{type:String,default:"#fff"},foreground:{type:String,default:"#000"},margin:{type:Number,required:!1,default:0}},D=t(t({},x),{renderAs:{type:String,required:!1,default:"canvas",validator:function(e){return["canvas","svg"].indexOf(e)>-1}}}),M=e.defineComponent({render:function(){var t=this,r=t.size,n=t.background,o=t.foreground,i=t.numCells,a=t.fgPath;return e.h("svg",{width:r,height:r,"shape-rendering":"crispEdges",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 "+i+" "+i},[e.h("path",{fill:n,d:"M0,0 h"+i+"v"+i+"H0z"}),e.h("path",{fill:o,d:a})])},props:x,data:function(){return{numCells:0,fgPath:""}},created:function(){this.generate()},updated:function(){this.generate()},methods:{generate:function(){var e=this,t=e.value,r=e.level,n=e.margin,o=b(P(t),y.ErrorCorrectLevel[r]).modules;this.numCells=o.length+2*n,this.fgPath=N(o,n)}}}),_=e.defineComponent({render:function(){var t=this.size;return e.h("canvas",{style:{width:t+"px",height:t+"px"}})},props:x,mounted:function(){this.generate()},updated:function(){this.generate()},methods:{generate:function(){var e=this,t=e.value,r=e.level,n=e.size,o=e.margin,i=e.background,a=e.foreground,l=b(P(t),y.ErrorCorrectLevel[r]).modules,s=l.length+2*o,u=this.$el;if(u){var c=u.getContext("2d");if(c){var h=window.devicePixelRatio||1,d=n/s*h;u.height=u.width=n*h,c.scale(d,d),c.fillStyle=i,c.fillRect(0,0,s,s),c.fillStyle=a,L?c.fill(new Path2D(N(l,o))):l.forEach((function(e,t){e.forEach((function(e,r){e&&c.fillRect(r+o,t+o,1,1)}))}))}}}}});return e.defineComponent({render:function(){var t=this.$props,r=t.renderAs,n=t.value,o=t.size,i=t.margin,a=t.level,l=t.background,s=t.foreground,u=o>>>0,c=i>>>0,h=A(a)?a:E;return e.h("svg"===r?M:_,{value:n,size:u,margin:c,level:h,background:l,foreground:s})},props:D})}(r(5166))},3411:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>p});var n=r(5166),o=(0,n.createVNode)("div",{class:"flex flex-row justify-center items-center"},[(0,n.createVNode)("img",{src:"storage/images/face.png",class:"shadow rounded-full h-32 align-middle border-none transition duration-1000 transform hover:scale-150"}),(0,n.createVNode)("div",{class:"flex flex-col justify-center items-center m-8 p-4 border border-purple-600 text-center"},[(0,n.createVNode)("p",null," Hey, no pressure, but if you like what you see here, or you use what I built, "),(0,n.createVNode)("p",null," or you just like me, I would love a donation. "),(0,n.createVNode)("p",null," Alternatively, donate to a charity or bail fund noted below or in your area."),(0,n.createVNode)("p",null," Fighting for the working class is our work and this is how we do it. "),(0,n.createVNode)("p",null,"If you can't spare it, no worries! Sharing on socials helps out a ton as well. "),(0,n.createVNode)("p",null," Whatever you choose, I'm glad you read this, and I love you. "),(0,n.createVNode)("p",null," Thank you very much. ")])],-1),i={class:"flex flex-row"},a={class:"flex flex-col justify-center items-center m-8 p-4 border border-purple-600"},l={class:"flex flex-col justify-center items-center m-8 p-4 border border-purple-600"},s={class:"flex flex-col justify-center items-center m-8 p-4 border border-purple-600"};var u=r(2976);const c={props:["codeValue","codeSize","title","description","icon"],data:function(){return{codeIsOpen:!1}},components:{QrcodeVue:r.n(u)()},render:function(e,t,r,o,i,a){var l=(0,n.resolveComponent)("qrcode-vue");return(0,n.openBlock)(),(0,n.createBlock)(n.Fragment,null,[i.codeIsOpen?((0,n.openBlock)(),(0,n.createBlock)(l,{key:0,class:"",value:r.codeValue,size:r.codeSize,level:"H"},null,8,["value","size"])):(0,n.createCommentVNode)("",!0),(0,n.createVNode)("button",{type:"button",onClick:t[1]||(t[1]=function(e){return i.codeIsOpen=!i.codeIsOpen}),title:r.title,class:"inline-flex items-center m-2 px-4 py-2 bg-gray-800 border border-mint rounded-md font-semibold text-xs text-mint uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 transition ease-in-out duration-150"},[(0,n.createTextVNode)((0,n.toDisplayString)(i.codeIsOpen?r.codeValue:r.title)+" ",1),((0,n.openBlock)(),(0,n.createBlock)("svg",{width:"24px",height:"24px",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",color:"#000000",class:"text-purple-600 m-1",innerHTML:r.icon},null,8,["innerHTML"]))],8,["title"])],64)}};const h={props:["link","icon","name","altText"],methods:{goToLink:function(){window.location.href=this.link}},render:function(e,t,r,o,i,a){return(0,n.openBlock)(),(0,n.createBlock)("button",{type:"button",title:r.altText,onClick:t[1]||(t[1]=function(){return a.goToLink&&a.goToLink.apply(a,arguments)}),class:"inline-flex items-center m-2 px-4 py-2 bg-gray-800 border border-mint rounded-md font-semibold text-xs text-mint uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 transition ease-in-out duration-150"},[(0,n.createTextVNode)((0,n.toDisplayString)(r.name)+" ",1),((0,n.openBlock)(),(0,n.createBlock)("svg",{width:"24px",height:"24px",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",color:"#000000",class:"text-purple-600 m-1",innerHTML:r.icon},null,8,["innerHTML"]))],8,["title"])}};var d={class:"p-1"};const f={props:["link","icon","blurb","altText"],methods:{goToLink:function(){window.location.href=this.link}},render:function(e,t,r,o,i,a){return(0,n.openBlock)(),(0,n.createBlock)("button",{type:"button",title:r.blurb,onClick:t[1]||(t[1]=function(){return a.goToLink&&a.goToLink.apply(a,arguments)}),class:"inline-flex flex-col items-center m-2 px-4 py-2 bg-gray-800 border border-mint rounded-md font-semibold text-xs text-mint uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 transition ease-in-out duration-150"},[(0,n.createVNode)("img",{src:r.icon,width:"128"},null,8,["src"]),(0,n.createVNode)("span",d,(0,n.toDisplayString)(r.altText),1)],8,["title"])}},g={components:{CharityButton:f,SocialButton:h,QRCodeElement:c},props:["errors","auth","walletCodes","iconSvgPaths","socials","charities"],data:function(){return{size:75}},render:function(e,t,r,u,c,h){var d=(0,n.resolveComponent)("QRCodeElement"),f=(0,n.resolveComponent)("CharityButton"),g=(0,n.resolveComponent)("SocialButton");return(0,n.openBlock)(),(0,n.createBlock)(n.Fragment,null,[o,(0,n.createVNode)("div",i,[(0,n.createVNode)("div",a,[((0,n.openBlock)(!0),(0,n.createBlock)(n.Fragment,null,(0,n.renderList)(r.walletCodes,(function(e,t){return(0,n.openBlock)(),(0,n.createBlock)(d,{"code-value":e,"code-size":c.size,title:t,icon:r.iconSvgPaths[t],description:"This is a placeholder description"},null,8,["code-value","code-size","title","icon"])})),256))]),(0,n.createVNode)("div",l,[((0,n.openBlock)(!0),(0,n.createBlock)(n.Fragment,null,(0,n.renderList)(r.charities,(function(e,t){return(0,n.openBlock)(),(0,n.createBlock)(f,{link:e.donateLink,icon:e.imageLink,blurb:e.blurb,"alt-text":t},null,8,["link","icon","blurb","alt-text"])})),256))]),(0,n.createVNode)("div",s,[((0,n.openBlock)(!0),(0,n.createBlock)(n.Fragment,null,(0,n.renderList)(r.socials,(function(e,t){return(0,n.openBlock)(),(0,n.createBlock)(g,{link:e.link,icon:e.iconSvg,"alt-text":e.altText,name:t},null,8,["link","icon","alt-text","name"])})),256))])])],64)}},p=g}}]);