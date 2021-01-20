<template>
  <highcharts :constructorType="'stockChart'" class="hc" :options="chartOptions" :updateArgs="updateArgs" :deepCopyOnUpdate=true ></highcharts>
</template>


<script>
import Highcharts from "highcharts";

export default {
  props: ["data", "title"],
  data: function() {
    return {
      chartOptions: {
        series: [
          {
            name : 'first',
            data: []
          }
        ],
        title: {
          text: "Stock Demo"
        }, 
        chart: {
          zoomType: "x",
          type: "line",
          height: 500
        },
        xAxis: {
          type: "datetime",
			    // x 轴日期格式化
			    labels: {
				    //formatter :function() {
            //  console.log(this);
					  //  return Highcharts.dateFormat('%Y-%m-%d', this.value);
            //}
            // 1、dateTimeLabelFormats 
            dateTimeLabelFormats: {
              day: '%Y-%m-%d',
              month :'%Y-%m',
              year: '%Y'
            },            
			    }          
        },
        // 提示框
        tooltip: {
          // 1、dateTimeLabelFormats 
          //dateTimeLabelFormats: {
          //  day: '%Y-%m-%d'
          //},
          // 2、xDateFormat
          //xDateFormat: '%Y-%m-%d',
          // 3、formatter 函数
          formatter: function() {
            //console.log(this);
            let retStr = '';
            for (let obj of this.points) {
              retStr = retStr + '<b>' + Highcharts.dateFormat('%Y-%m-%d', obj.x) + '</b><br>' + obj.series.name + ' : ' +obj.y;
            }
            return retStr;
          }
        },	                       
      },
      updateArgs: [true, true, { duration: 1000 }]
    };
  },
  watch: {
    title(newValue) {
      this.chartOptions.title.text = newValue;
    },
    data(newValue) {
      this.chartOptions.series[0].data = newValue
      //console.log(this.chartOptions.series[0].data) 
 
    }
  },
  mounted() {
    colsole.log(this.title);
    if (typeof this.title !== "undefined") {
        this.chartOptions.title.text = this.title;
    }
  }  
};

</script>

<style>
</style>