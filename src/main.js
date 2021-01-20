import Highcharts from "highcharts";
import HighchartsVue from "highcharts-vue";
import highchartsMoreInit from "highcharts/highcharts-more";
import exportingInit from "highcharts/modules/exporting";
import solidGaugeInit from "highcharts/modules/solid-gauge";
import Stock from "highcharts/modules/stock";
import Vue from 'vue';
import App from './App.vue';

Stock(Highcharts);
exportingInit(Highcharts);
highchartsMoreInit(Highcharts);
solidGaugeInit(Highcharts);
Vue.use(HighchartsVue);

Highcharts.setOptions({
    lang:{
       contextButtonTitle:"圖表導出菜單",
       decimalPoint:".",
       downloadJPEG:"下載JPEG圖片",
       downloadPDF:"下載PDF文件",
       downloadPNG:"下載PNG文件",
       downloadSVG:"下載SVG文件",
       drillUpText:"返回",
       loading:"載入中",
       months:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],
       noData:"沒有數據",
       numericSymbols: [ 'k','M','G','T','P','E'],
       printChart:"列印圖表",
       resetZoom:"恢復縮放",
       resetZoomTitle:"恢復圖表",
       shortMonths: [ "一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],
       thousandsSep:",",
       weekdays: ["星期一", "星期二", "星期三", "星期四", "星期五", "星期六","星期天"],
       thousandsSep: ','
    }
}); 


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
