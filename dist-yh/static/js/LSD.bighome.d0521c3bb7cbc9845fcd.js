(window.webpackJsonp=window.webpackJsonp||[]).push([["LSD.bighome"],{1431:function(e,t,a){"use strict";a("719a")},"18d2":function(e,t,a){"use strict";a("da49")},1970:function(e,t,a){},"1a01":function(e,t,a){},"2eba":function(e,t,a){},3874:function(e,t,a){},"452a":function(e,t,a){"use strict";a("1a01")},"4ec3":function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return d})),a.d(t,"c",(function(){return m}));var i=a("bc3a"),o=a.n(i),s={ENC:!1,baseUrl:"http://locolhost:8888",code:401};console.log("yh");var r=s;a("a18c");let n=r.baseUrl;o.a.CancelToken;o.a.interceptors.request.use((function(e){let t=localStorage.getItem("token");return e.headers.common["Content-Type"]="application/json;charset=utf-8",e.headers.common.token=t,e}),(function(e){return console.log(e),Promise.reject(e)})),o.a.interceptors.response.use(e=>200!==e.status?Promise.reject(e):(e.data.code,e.data),e=>Promise.reject({success:!1,msg:"未知异常，请联系管理员！"}));let l={headers:{enc:r.ENC}};const c=async(e,t)=>{try{t=t;return await o.a.get(`${n}${e}`,{params:t,headers:l.headers},l)}catch(e){return e}},d=async(e,t)=>{try{return await o.a.get(e,{params:t})}catch(e){return e}},m=async(e,t)=>{try{t=t;return await o.a.post(`${n}${e}`,t,l)}catch(e){return e}}},6511:function(e,t,a){"use strict";a.r(t);const i={width:"1",height:"1"},o=parseFloat((1920/1080).toFixed(5));var s={data:()=>({drawTiming:null}),computed:{isScale(){return this.$store.state.setting.isScale}},mounted(){this.isScale&&(this.calcRate(),window.addEventListener("resize",this.resize))},beforeDestroy(){window.removeEventListener("resize",this.resize)},methods:{calcRate(){const e=this.$refs.appRef;if(!e)return;const t=parseFloat((window.innerWidth/window.innerHeight).toFixed(5));e&&(t>o?(i.width=(window.innerHeight*o/1920).toFixed(5),i.height=(window.innerHeight/1080).toFixed(5),e.style.transform=`scale(${i.width}, ${i.height}) translate(-50%, -50%)`):(i.height=(window.innerWidth/o/1080).toFixed(5),i.width=(window.innerWidth/1920).toFixed(5),e.style.transform=`scale(${i.width}, ${i.height}) translate(-50%, -50%)`))},resize(){this.isScale&&(clearTimeout(this.drawTiming),this.drawTiming=setTimeout(()=>{this.calcRate()},200))}}};function r(e,t){if(e){const a=new Date(e),i={"M+":a.getMonth()+1,"d+":a.getDate(),"H+":a.getHours(),"m+":a.getMinutes(),"s+":a.getSeconds(),"q+":Math.floor((a.getMonth()+3)/3),S:a.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(a.getFullYear()+"").substr(4-RegExp.$1.length)));for(const e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1===RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}return""}var n={components:{},data:()=>({settingShow:!1,sbtxradio:!0,ssyjradio:!0,isScaleradio:!0}),computed:{},methods:{init(){this.settingShow=!0},radiochange(e,t){this.$store.commit("setting/updateSwiper",{val:e,type:t}),"isScale"===t&&this.$router.go(0)}},created(){this.$store.commit("setting/initSwipers"),this.sbtxradio=this.$store.state.setting.sbtxSwiper,this.ssyjradio=this.$store.state.setting.ssyjSwiper,this.isScaleradio=this.$store.state.setting.isScale},mounted(){document.body.appendChild(this.$el)},beforeDestroy(){},destroyed(){this.$el&&this.$el.parentNode&&this.$el.parentNode.removeChild(this.$el)}},l=a("2877"),c={mixins:[s],components:{Setting:Object(l.a)(n,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("transition",{attrs:{name:"yh-setting-fade"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.settingShow,expression:"settingShow"}],staticClass:"setting",class:{settingShow:e.settingShow}},[a("div",{staticClass:"setting_dislog",on:{click:function(t){e.settingShow=!1}}}),a("div",{staticClass:"setting_inner"},[a("div",{staticClass:"setting_header"},[e._v(" 设置 ")]),a("div",{staticClass:"setting_body"},[a("div",{staticClass:"left_shu"},[e._v(" 全局设置")]),a("div",{staticClass:"setting_item"},[a("span",{staticClass:"setting_label"},[e._v(" 是否进行自动适配"),a("span",{staticClass:"setting_label_tip"},[e._v("(默认分辨率1920*1080)")]),e._v(": ")]),a("div",{staticClass:"setting_content"},[a("el-radio-group",{on:{change:function(t){return e.radiochange(t,"isScale")}},model:{value:e.isScaleradio,callback:function(t){e.isScaleradio=t},expression:"isScaleradio"}},[a("el-radio",{attrs:{label:!0}},[e._v("是")]),a("el-radio",{attrs:{label:!1}},[e._v("否")])],1)],1)]),a("div",{staticClass:"left_shu"},[e._v(" 实时监测")]),a("div",{staticClass:"setting_item"},[a("span",{staticClass:"setting_label"},[e._v(" 设备提醒自动轮询: "),a("span",{staticClass:"setting_label_tip"})]),a("div",{staticClass:"setting_content"},[a("el-radio-group",{on:{change:function(t){return e.radiochange(t,"sbtxSwiper")}},model:{value:e.sbtxradio,callback:function(t){e.sbtxradio=t},expression:"sbtxradio"}},[a("el-radio",{attrs:{label:!0}},[e._v("是")]),a("el-radio",{attrs:{label:!1}},[e._v("否")])],1)],1)]),a("div",{staticClass:"setting_item"},[a("span",{staticClass:"setting_label"},[e._v(" 实时预警轮播: ")]),a("div",{staticClass:"setting_content"},[a("el-radio-group",{on:{change:function(t){return e.radiochange(t,"ssyjSwiper")}},model:{value:e.ssyjradio,callback:function(t){e.ssyjradio=t},expression:"ssyjradio"}},[a("el-radio",{attrs:{label:!0}},[e._v("是")]),a("el-radio",{attrs:{label:!1}},[e._v("否")])],1)],1)]),a("div",{staticClass:"flex justify-center"})])])])])}),[],!1,null,"2be108e4",null).exports},data:()=>({timing:null,loading:!0,dateDay:null,dateYear:null,dateWeek:null,weekday:["周日","周一","周二","周三","周四","周五","周六"]}),filters:{numsFilter:e=>e||0},computed:{},created(){},mounted(){this.timeFn(),this.cancelLoading()},beforeDestroy(){clearInterval(this.timing)},methods:{showSetting(){this.$refs.setting.init()},timeFn(){this.timing=setInterval(()=>{this.dateDay=r(new Date,"HH: mm: ss"),this.dateYear=r(new Date,"yyyy-MM-dd"),this.dateWeek=this.weekday[(new Date).getDay()]},1e3)},cancelLoading(){setTimeout(()=>{this.loading=!1},500)}}},d=(a("a318"),Object(l.a)(c,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{ref:"appRef",staticClass:"index_home",class:{pageisScale:e.isScale},attrs:{id:"index"}},[a("div",{staticClass:"bg"},[e.loading?a("dv-loading",[e._v("Loading...")]):a("div",{staticClass:"host-body"},[a("div",{staticClass:"d-flex jc-center title_wrap"},[a("div",{staticClass:"zuojuxing"}),a("div",{staticClass:"youjuxing"}),a("div",{staticClass:"guang"}),a("div",{staticClass:"d-flex jc-center"},[a("div",{staticClass:"title"},[a("span",{staticClass:"title-text"},[e._v("毕业生就业可视化平台")])])]),a("div",{staticClass:"timers "},[e._v(" "+e._s(e.dateYear)+" "+e._s(e.dateWeek)+" "+e._s(e.dateDay)+" "),a("i",{staticClass:" blq-icon-shezhi02",staticStyle:{"margin-left":"10px"},on:{click:e.showSetting}})])]),a("router-view")],1)],1),a("Setting",{ref:"setting"})],1)}),[],!1,null,null,null));t.default=d.exports},"719a":function(e,t,a){},"896e":function(e,t,a){},a318:function(e,t,a){"use strict";a("2eba")},a533:function(e,t,a){"use strict";a("e726")},a88f:function(e,t,a){"use strict";a("3874")},b6d8:function(module,__webpack_exports__,__webpack_require__){"use strict";var api_modules__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("c270");let style={fontSize:24};__webpack_exports__.a={data:()=>({options:{},userOverview:{alarmNum:0,offlineNum:0,onlineNum:0,totalNum:0},pageflag:!0,config:{number:[100],content:"{nt}",style:{...style,fill:"#00fdfa"}},onlineconfig:{number:[0],content:"{nt}",style:{...style,fill:"#07f7a8"}},offlineconfig:{number:[0],content:"{nt}",style:{...style,fill:"#e3b337"}},laramnumconfig:{number:[0],content:"{nt}",style:{...style,fill:"#f5023d"}}}),filters:{numsFilter:e=>e||0},created(){this.getData()},computed:{rate(){return value=>{if(0!=eval(Object.values(this.userOverview).join("+")))return(value/eval(Object.values(this.userOverview).join("+"))*100).toFixed(2)+"%"}}},mounted(){},beforeDestroy(){},methods:{getData(){this.pageflag=!0,Object(api_modules__WEBPACK_IMPORTED_MODULE_0__.a)("big2").then(e=>{e.success?(console.log("毕业生薪酬分布情况",e),this.userOverview=e.data,this.onlineconfig={...this.onlineconfig,number:[e.data.onlineNum]},this.config={...this.config,number:[e.data.totalNum]},this.offlineconfig={...this.offlineconfig,number:[e.data.offlineNum]},this.laramnumconfig={...this.laramnumconfig,number:[e.data.alarmNum]}):(this.pageflag=!1,this.$Message.warning(e.msg))})}}}},c270:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var i=a("4ec3");const o={big1:"/bigscreen/countUserNum",big2:"/bigscreen/countDeviceNum",big3:"/bigscreen/sbtx",big4:"/bigscreen/alarmNum",big5:"/bigscreen/ssyj",big6:"/bigscreen/installationPlan",big7:"/bigscreen/ranking",big8:"/bigscreen/centermap"},s=(e,t)=>i.a(o[e],t)},d9b4:function(e,t,a){"use strict";a("1970")},da49:function(e,t,a){},df5e:function(e,t,a){"use strict";a.r(t);var i=a("c270"),o={data:()=>({options:{},countUserNumData:{lockNum:0,onlineNum:0,offlineNum:0,totalNum:0},pageflag:!0}),created(){this.getData()},mounted(){},beforeDestroy(){},methods:{getData(){this.pageflag=!0,Object(i.a)("big1").then(e=>{console.log("设备总览",e),e.success?(this.countUserNumData=e.data,this.$nextTick(()=>{this.init()})):(this.pageflag=!1,this.$Message({text:e.msg,type:"warning"}))})},init(){let e=this.countUserNumData.totalNum,t=["#ECA444","#33A1DB","#56B557"],a={name:"苏州大市内外就业占比情况",type:"pie",radius:["42%","65%"],avoidLabelOverlap:!1,itemStyle:{borderRadius:4,borderColor:"rgba(0,0,0,0)",borderWidth:2},color:t,data:[{value:this.countUserNumData.lockNum,name:"市内",label:{shadowColor:t[0]}},{value:this.countUserNumData.offlineNum,name:"市外",label:{shadowColor:t[1]}}]};this.options={title:{text:["{value|"+e+"}","{name|总数}"].join("\n"),top:"center",left:"center",textStyle:{rich:{value:{color:"#ffffff",fontSize:24,fontWeight:"bold",lineHeight:20},name:{color:"#ffffff",lineHeight:20}}}},tooltip:{trigger:"item",backgroundColor:"rgba(0,0,0,.6)",borderColor:"rgba(147, 235, 248, .8)",textStyle:{color:"#FFF"}},legend:{show:!1,top:"5%",left:"center"},series:[{...a,tooltip:{show:!0},label:{formatter:"   {b|{b}}   \n   {c|{c}万个}   {per|{d}%}  ",rich:{b:{color:"#fff",fontSize:12,lineHeight:26},c:{color:"#31ABE3",fontSize:14},per:{color:"#31ABE3",fontSize:14}}},labelLine:{length:20,length2:36,show:!0,emphasis:{show:!0}}},{...a,tooltip:{show:!0},itemStyle:{},label:{backgroundColor:"auto",height:0,width:0,lineHeight:0,borderRadius:2.5,shadowBlur:8,shadowColor:"auto",padding:[2.5,-2.5,2.5,-2.5]},labelLine:{length:20,length2:36,show:!1}}]}}}},s=a("2877"),r=Object(s.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return this.pageflag?t("Echart",{ref:"charts",staticClass:"left_center_inner",attrs:{id:"leftCenter",options:this.options}}):t("Reacquire",{staticStyle:{"line-height":"200px"},on:{onclick:this.getData}},[this._v(" 重新获取 ")])}),[],!1,null,"582ae1ff",null).exports,n={data:()=>({option:{},pageflag:!1,timer:null}),created(){this.getData()},mounted(){},beforeDestroy(){this.clearData()},methods:{clearData(){this.timer&&(clearInterval(this.timer),this.timer=null)},getData(){this.pageflag=!0,Object(i.a)("big4").then(e=>{this.timer||console.log("毕业生薪酬分布情况",e),e.success?(this.countUserNumData=e.data,this.$nextTick(()=>{this.init(e.data.dateList,e.data.numList,e.data.numList2),this.switper()})):(this.pageflag=!1,this.$Message({text:e.msg,type:"warning"}))})},switper(){if(this.timer)return;let e=e=>{this.getData()};this.timer=setInterval(e,this.$store.state.setting.echartsAutoTime);let t=this.$refs.charts.chart;t.on("mouseover",e=>{this.clearData()}),t.on("mouseout",t=>{this.timer=setInterval(e,this.$store.state.setting.echartsAutoTime)})},init(e,t,a){this.option={xAxis:{type:"category",data:e,boundaryGap:!1,splitLine:{show:!0,lineStyle:{color:"rgba(31,99,163,.2)"}},axisLine:{lineStyle:{color:"rgba(31,99,163,.1)"}},axisLabel:{color:"#7EB7FD",fontWeight:"500"}},yAxis:{type:"value",splitLine:{show:!0,lineStyle:{color:"rgba(31,99,163,.2)"}},axisLine:{lineStyle:{color:"rgba(31,99,163,.1)"}},axisLabel:{color:"#7EB7FD",fontWeight:"500"}},tooltip:{trigger:"axis",backgroundColor:"rgba(0,0,0,.6)",borderColor:"rgba(147, 235, 248, .8)",textStyle:{color:"#FFF"}},grid:{show:!0,left:"10px",right:"30px",bottom:"10px",top:"28px",containLabel:!0,borderColor:"#1F63A3"},series:[{data:t,type:"line",smooth:!0,symbol:"none",name:"报警1次数",color:"rgba(252,144,16,.7)",areaStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(252,144,16,.7)"},{offset:1,color:"rgba(252,144,16,.0)"}],!1)}},markPoint:{data:[{name:"最大值",type:"max",valueDim:"y",symbol:"rect",symbolSize:[60,26],symbolOffset:[0,-20],itemStyle:{color:"rgba(0,0,0,0)"},label:{color:"#FC9010",backgroundColor:"rgba(252,144,16,0.1)",borderRadius:6,padding:[7,14],borderWidth:.5,borderColor:"rgba(252,144,16,.5)",formatter:"报警1：{c}"}},{name:"最大值",type:"max",valueDim:"y",symbol:"circle",symbolSize:6,itemStyle:{color:"#FC9010",shadowColor:"#FC9010",shadowBlur:8},label:{formatter:""}}]}},{data:a,type:"line",smooth:!0,symbol:"none",name:"报警2次数",color:"rgba(9,202,243,.7)",areaStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(9,202,243,.7)"},{offset:1,color:"rgba(9,202,243,.0)"}],!1)}},markPoint:{data:[{name:"最大值",type:"max",valueDim:"y",symbol:"rect",symbolSize:[60,26],symbolOffset:[0,-20],itemStyle:{color:"rgba(0,0,0,0)"},label:{color:"#09CAF3",backgroundColor:"rgba(9,202,243,0.1)",borderRadius:6,borderColor:"rgba(9,202,243,.5)",padding:[7,14],formatter:"报警2：{c}",borderWidth:.5}},{name:"最大值",type:"max",valueDim:"y",symbol:"circle",symbolSize:6,itemStyle:{color:"#09CAF3",shadowColor:"#09CAF3",shadowBlur:8},label:{formatter:""}}]}}]}}}},l=(a("a88f"),Object(s.a)(n,(function(){var e=this.$createElement,t=this._self._c||e;return this.pageflag?t("Echart",{ref:"charts",staticClass:"right_top_inner",attrs:{id:"rightTop",options:this.option}}):t("Reacquire",{staticStyle:{"line-height":"200px"},on:{onclick:this.getData}},[this._v(" 重新获取 ")])}),[],!1,null,"d168949a",null).exports),c=a("4ec3"),d={data:()=>({options:{}}),props:{},mounted(){this.getData()},methods:{getData(){this.pageflag=!0,Object(i.a)("big6",{companyName:this.companyName}).then(e=>{console.log("安装计划",e),e.success?this.init(e.data):(this.pageflag=!1,this.$Message({text:e.msg,type:"warning"}))})},init(e){this.options={tooltip:{trigger:"axis",backgroundColor:"rgba(0,0,0,.6)",borderColor:"rgba(147, 235, 248, .8)",textStyle:{color:"#FFF"},formatter:function(e){var t=e[0].name+"<br>";return e.forEach((function(e){e.value?"安装率"==e.seriesName?t+=e.marker+" "+e.seriesName+" : "+e.value+"%</br>":t+=e.marker+" "+e.seriesName+" : "+e.value+"个</br>":t+=e.marker+" "+e.seriesName+" :  - </br>"})),t}},legend:{data:["已安装","计划安装","安装率"],textStyle:{color:"#B4B4B4"},top:"0"},grid:{left:"50px",right:"40px",bottom:"30px",top:"20px"},xAxis:{data:e.category,axisLine:{lineStyle:{color:"#B4B4B4"}},axisTick:{show:!1}},yAxis:[{splitLine:{show:!1},axisLine:{lineStyle:{color:"#B4B4B4"}},axisLabel:{formatter:"{value}"}},{splitLine:{show:!1},axisLine:{lineStyle:{color:"#B4B4B4"}},axisLabel:{formatter:"{value}% "}}],series:[{name:"已安装",type:"bar",barWidth:10,itemStyle:{normal:{barBorderRadius:5,color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#956FD4"},{offset:1,color:"#3EACE5"}])}},data:e.barData},{name:"计划安装",type:"bar",barGap:"-100%",barWidth:10,itemStyle:{normal:{barBorderRadius:5,color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(156,107,211,0.8)"},{offset:.2,color:"rgba(156,107,211,0.5)"},{offset:1,color:"rgba(156,107,211,0.2)"}])}},z:-12,data:e.lineData},{name:"安装率",type:"line",smooth:!0,showAllSymbol:!0,symbol:"emptyCircle",symbolSize:8,yAxisIndex:1,itemStyle:{normal:{color:"#F02FC2"}},data:e.rateData}]}}}},m=(a("18d2"),Object(s.a)(d,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"center_bottom"},[t("Echart",{staticClass:"echarts_bottom",attrs:{options:this.options,id:"bottomLeftChart"}})],1)}),[],!1,null,"76f742ec",null).exports),h={"中国":{adcode:"100000",level:"country",name:"中华人民共和国"},"新疆维吾尔自治区":{adcode:"650000",level:"province",name:"新疆维吾尔自治区"},"湖北省":{adcode:"420000",level:"province",name:"湖北省"},"辽宁省":{adcode:"210000",level:"province",name:"辽宁省"},"广东省":{adcode:"440000",level:"province",name:"广东省"},"内蒙古自治区":{adcode:"150000",level:"province",name:"内蒙古自治区"},"黑龙江省":{adcode:"230000",level:"province",name:"黑龙江省"},"河南省":{adcode:"410000",level:"province",name:"河南省"},"山东省":{adcode:"370000",level:"province",name:"山东省"},"陕西省":{adcode:"610000",level:"province",name:"陕西省"},"贵州省":{adcode:"520000",level:"province",name:"贵州省"},"上海市":{adcode:"310000",level:"province",name:"上海市"},"重庆市":{adcode:"500000",level:"province",name:"重庆市"},"西藏自治区":{adcode:"540000",level:"province",name:"西藏自治区"},"安徽省":{adcode:"340000",level:"province",name:"安徽省"},"福建省":{adcode:"350000",level:"province",name:"福建省"},"湖南省":{adcode:"430000",level:"province",name:"湖南省"},"海南省":{adcode:"460000",level:"province",name:"海南省"},"江苏省":{adcode:"320000",level:"province",name:"江苏省"},"青海省":{adcode:"630000",level:"province",name:"青海省"},"广西壮族自治区":{adcode:"450000",level:"province",name:"广西壮族自治区"},"宁夏回族自治区":{adcode:"640000",level:"province",name:"宁夏回族自治区"},"浙江省":{adcode:"330000",level:"province",name:"浙江省"},"河北省":{adcode:"130000",level:"province",name:"河北省"},"香港特别行政区":{adcode:"810000",level:"province",name:"香港特别行政区"},"台湾省":{adcode:"710000",level:"province",name:"台湾省"},"澳门特别行政区":{adcode:"820000",level:"province",name:"澳门特别行政区"},"甘肃省":{adcode:"620000",level:"province",name:"甘肃省"},"四川省":{adcode:"510000",level:"province",name:"四川省"},"天津市":{adcode:"120000",level:"province",name:"天津市"},"江西省":{adcode:"360000",level:"province",name:"江西省"},"云南省":{adcode:"530000",level:"province",name:"云南省"},"山西省":{adcode:"140000",level:"province",name:"山西省"},"北京市":{adcode:"110000",level:"province",name:"北京市"},"吉林省":{adcode:"220000",level:"province",name:"吉林省"}},g={data:()=>({maptitle:"毕业生分布图",options:{},code:"china",userCode:-1,echartBindClick:!1}),created(){},mounted(){this.getData()},methods:{getData(e){Object(i.a)("big8",{regionCode:e}).then(t=>{t.success?(e||(this.userCode=t.data.regionCode),this.getGeojson(t.data.regionCode,t.data.dataList),this.mapclick()):this.$Message.warning(t.msg)})},getGeojson(e,t){-1==e&&(e="china"),this.code=e,Object(c.b)("./map-geojson/"+e+".json").then(a=>{let i={};a.features.map(e=>{i[e.properties.name]=e.properties.centroid||e.properties.center});let o=[];t.map(e=>{if(i[e.name]){this.getColor(e.value);o.push({name:e.name,value:i[e.name].concat(e.value)})}}),echarts.getMap(e)||echarts.registerMap(e,a),this.init(e,t,o)})},getColor:e=>e>0&&e<9?"#035cf5":e>10&&e<49?"#3375e4":e>50&&e<199?"#6797ef":e>200&&e<499?"#96b5ef":e>500&&e<9999?"#bacae8":e>1e3?"#3FF4FF":"",init(e,t,a){let i=45,o=1.05;"china"==e&&(i=140,o=1.42);let s={backgroundColor:"rgba(0,0,0,0)",tooltip:{show:!1},legend:{show:!1},visualMap:{left:20,bottom:20,pieces:[{gte:1e3,label:"1000个以上"},{gte:600,lte:999,label:"600-999个"},{gte:200,lte:599,label:"200-599个"},{gte:50,lte:199,label:"49-199个"},{gte:10,lte:49,label:"10-49个"},{lte:9,label:"1-9个"}],inRange:{color:["#c3d7df","#5cb3cc","#8abcd1","#66a9c9","#2f90b9","#1781b5"]},textStyle:{color:"#fff"}},geo:{map:e,roam:!1,selectedMode:!1,zoom:o,top:i,aspectScale:.78,tooltip:{show:!1},label:{show:!1},itemStyle:{areaColor:"rgba(0,0,0,0)",borderColor:"rgba(0,0,0,0)"},emphasis:{disabled:!0}},series:[{name:"MAP",type:"map",mapType:e,aspectScale:.78,data:t,selectedMode:!1,zoom:o,geoIndex:1,top:i,tooltip:{show:!0,formatter:function(e){return e.data?e.name+"："+e.data.value:e.name},backgroundColor:"rgba(0,0,0,.6)",borderColor:"rgba(147, 235, 248, .8)",textStyle:{color:"#FFF"}},label:{show:!1,color:"#000",formatter:function(e){return void 0!==e.data?e.name.slice(0,2):""},rich:{},emphasis:{show:!1}},itemStyle:{borderColor:"rgba(147, 235, 248, .8)",borderWidth:1,areaColor:{type:"radial",x:.5,y:.5,r:.8,colorStops:[{offset:0,color:"rgba(147, 235, 248, 0)"},{offset:1,color:"rgba(147, 235, 248, .2)"}],globalCoord:!1},shadowColor:"rgba(128, 217, 248, .3)",shadowOffsetX:-2,shadowOffsetY:2,shadowBlur:10,emphasis:{areaColor:"#389BB7",borderWidth:1}}},{data:a,type:"effectScatter",coordinateSystem:"geo",symbolSize:function(e){return 4},legendHoverLink:!0,showEffectOn:"render",rippleEffect:{scale:6,color:"rgba(255,255,255, 1)",brushType:"fill"},tooltip:{show:!0,formatter:function(e){return e.data?e.name+"："+e.data.value[2]:e.name},backgroundColor:"rgba(0,0,0,.6)",borderColor:"rgba(147, 235, 248, .8)",textStyle:{color:"#FFF"}},label:{formatter:e=>e.name.slice(0,2),fontSize:11,offset:[0,2],position:"bottom",textBorderColor:"#fff",textShadowColor:"#000",textShadowBlur:10,textBorderWidth:0,color:"#FFF",show:!0},itemStyle:{color:"rgba(255,255,255,1)",borderColor:"rgba(2255,255,255,2)",borderWidth:4,shadowColor:"#000",shadowBlur:10}}]};this.options=s},message(e){this.$Message({text:e,type:"warning"})},mapclick(){this.echartBindClick||-1!==this.userCode||(this.$refs.CenterMap.chart.on("click",e=>{let t=h[e.name];t?this.getData(t.adcode):this.message("暂无下级地市!")}),this.echartBindClick=!0)}}},u=(a("452a"),Object(s.a)(g,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"centermap"},[a("div",{staticClass:"maptitle"},[a("div",{staticClass:"zuo"}),a("span",{staticClass:"titletext"},[e._v(e._s(e.maptitle))]),a("div",{staticClass:"you"})]),a("div",{staticClass:"mapwrap"},[a("dv-border-box-13",["china"!==e.code&&-1==e.userCode?a("div",{staticClass:"quanguo",on:{click:function(t){return e.getData(-1)}}},[e._v(" 中国 ")]):e._e(),a("Echart",{ref:"CenterMap",attrs:{id:"CenterMap",options:e.options}})],1)],1)])}),[],!1,null,"b1da3f74",null).exports),p=a("b6d8").a,f=(a("1431"),Object(s.a)(p,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.pageflag?a("ul",{staticClass:"user_Overview flex"},[a("li",{staticClass:"user_Overview-item",staticStyle:{color:"#00fdfa"}},[a("div",{staticClass:"user_Overview_nums allnum "},[a("dv-digital-flop",{staticStyle:{width:"100%",height:"100%"},attrs:{config:e.config}})],1),a("p",[e._v("12000以上")]),a("p",{staticClass:"rate"},[e._v("占比 "+e._s(e.rate(e.userOverview.totalNum)))])]),a("li",{staticClass:"user_Overview-item",staticStyle:{color:"#07f7a8"}},[a("div",{staticClass:"user_Overview_nums online"},[a("dv-digital-flop",{staticStyle:{width:"100%",height:"100%"},attrs:{config:e.onlineconfig}})],1),a("p",[e._v("8000-12000")]),a("p",{staticClass:"rate"},[e._v("占比 "+e._s(e.rate(e.userOverview.onlineNum)))])]),a("li",{staticClass:"user_Overview-item",staticStyle:{color:"#e3b337"}},[a("div",{staticClass:"user_Overview_nums offline"},[a("dv-digital-flop",{staticStyle:{width:"100%",height:"100%"},attrs:{config:e.offlineconfig}})],1),a("p",[e._v("5000-8000")]),a("p",{staticClass:"rate"},[e._v("占比 "+e._s(e.rate(e.userOverview.offlineNum)))])]),a("li",{staticClass:"user_Overview-item",staticStyle:{color:"#f5023d"}},[a("div",{staticClass:"user_Overview_nums laramnum"},[a("dv-digital-flop",{staticStyle:{width:"100%",height:"100%"},attrs:{config:e.laramnumconfig}})],1),a("p",[e._v("5000以下")]),a("p",{staticClass:"rate"},[e._v("占比 "+e._s(e.rate(e.userOverview.alarmNum)))])])]):a("Reacquire",{attrs:{"line-height":"200px"},on:{onclick:e.getData}},[e._v(" 重新获取 ")])}),[],!1,null,"78915c80",null).exports),b={data:()=>({gatewayno:"",config:{showValue:!0,unit:"人",data:[]}}),created(){this.getData()},computed:{},mounted(){},beforeDestroy(){},methods:{getData(){this.pageflag=!0,Object(i.a)("big7",{gatewayno:this.gatewayno}).then(e=>{console.log("毕业生就业人数排名",e),e.success?this.config={...this.config,data:e.data}:(this.pageflag=!1,this.srcList=[],this.$Message({text:e.msg,type:"warning"}))})}}},v=(a("e6838"),Object(s.a)(b,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"right_bottom"},[t("dv-capsule-chart",{staticStyle:{width:"100%",height:"260px"},attrs:{config:this.config}})],1)}),[],!1,null,"fddd9248",null).exports),y={data:()=>({options:{}}),props:{},mounted(){this.getData()},methods:{getData(){this.pageflag=!0,Object(i.a)("big6",{companyName:this.companyName}).then(e=>{console.log("2021、2022年7月-9月就业人数对比",e),e.success?this.init(e.data):(this.pageflag=!1,this.$Message({text:e.msg,type:"warning"}))})},init(e){this.options={tooltip:{trigger:"axis",backgroundColor:"rgba(0,0,0,.6)",borderColor:"rgba(147, 235, 248, .8)",textStyle:{color:"#FFF"},formatter:function(e){var t=e[0].name+"<br>";return e.forEach((function(e){e.value?"增长率"==e.seriesName?t+=e.marker+" "+e.seriesName+" : "+e.value+"%</br>":t+=e.marker+" "+e.seriesName+" : "+e.value+"个</br>":t+=e.marker+" "+e.seriesName+" :  - </br>"})),t}},legend:{data:["2021","2022","增长率"],textStyle:{color:"#B4B4B4"},top:"0"},grid:{left:"50px",right:"40px",bottom:"30px",top:"20px"},xAxis:{data:e.category,axisLine:{lineStyle:{color:"#B4B4B4"}},axisTick:{show:!1}},yAxis:[{splitLine:{show:!1},axisLine:{lineStyle:{color:"#B4B4B4"}},axisLabel:{formatter:"{value}"}},{splitLine:{show:!1},axisLine:{lineStyle:{color:"#B4B4B4"}},axisLabel:{formatter:"{value}% "}}],series:[{name:"2021",type:"bar",barWidth:10,itemStyle:{normal:{barBorderRadius:5,color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#956FD4"},{offset:1,color:"#3EACE5"}])}},data:e.barData},{name:"2022",type:"bar",barGap:"-100%",barWidth:10,itemStyle:{normal:{barBorderRadius:5,color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(156,107,211,0.8)"},{offset:.2,color:"rgba(156,107,211,0.5)"},{offset:1,color:"rgba(156,107,211,0.2)"}])}},z:-12,data:e.lineData},{name:"增长率",type:"line",smooth:!0,showAllSymbol:!0,symbol:"emptyCircle",symbolSize:8,yAxisIndex:1,itemStyle:{normal:{color:"#F02FC2"}},data:e.rateData}]}}}},_=(a("a533"),{components:{LeftTop:r,LeftCenter:l,LeftBottom:m,CenterMap:u,RightTop:f,RightCenter:v,RightBottom:Object(s.a)(y,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"center_bottom"},[t("Echart",{staticClass:"echarts_bottom",attrs:{options:this.options,id:"bottomLeftChart"}})],1)}),[],!1,null,"1fce9734",null).exports},data:()=>({}),filters:{numsFilter:e=>e||0},created(){},mounted(){},methods:{}}),w=(a("d9b4"),Object(s.a)(_,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"contents"},[t("div",{staticClass:"contetn_left"},[t("div",{staticClass:"pagetab"}),t("ItemWrap",{staticClass:"contetn_left-top contetn_lr-item",attrs:{title:"苏州大市内外就业占比情况"}},[t("LeftTop")],1),t("ItemWrap",{staticClass:"contetn_left-center contetn_lr-item",attrs:{title:"设备总览"}},[t("LeftCenter")],1),t("ItemWrap",{staticClass:"contetn_left-bottom contetn_lr-item",staticStyle:{padding:"0 10px 16px 10px"},attrs:{title:"设备提醒"}},[t("LeftBottom")],1)],1),t("div",{staticClass:"contetn_center"},[t("CenterMap",{staticClass:"contetn_center_top"})],1),t("div",{staticClass:"contetn_right"},[t("ItemWrap",{staticClass:"contetn_left-bottom contetn_lr-item",attrs:{title:"毕业生薪酬分布情况"}},[t("RightTop")],1),t("ItemWrap",{staticClass:"contetn_left-bottom contetn_lr-item",staticStyle:{padding:"0 10px 16px 10px"},attrs:{title:"毕业生就业人数排名(TOP10)"}},[t("RightCenter")],1),t("ItemWrap",{staticClass:"contetn_left-bottom contetn_lr-item",attrs:{title:"2021、2022年7月-9月就业人数对比"}},[t("RightBottom")],1)],1)])}),[],!1,null,"f1347838",null));t.default=w.exports},e6838:function(e,t,a){"use strict";a("896e")},e726:function(e,t,a){}}]);