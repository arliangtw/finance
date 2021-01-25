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
          text: "line Demo"
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
  beforeCreate() { 
    /* 1 */
    console.log('beforeCreate') 
  },
  created() { 
    /* 2 */ 
    console.log('created')
  },
  beforeMount() { 
    /* 3 */ 
    console.log('beforeMount')

  },
  mounted() {
    /* 4 */
    console.log('mounted')
    this.init()
  },  
  /* 初始化不會觸發 */
  beforeUpdate() {
    console.log('beforeUpdate')
  },
  updated() { 
    console.log('updated') 
  },
  methods: {
    init:function(){
      console.log('lineChart init')
      if (typeof this.title !== "undefined") {
        this.chartOptions.title.text = this.title;
      }
    }
  }
};

</script>

<style>
</style>