<template>
    <highcharts :options="chartOptions" :updateArgs="updateArgs" :deepCopyOnUpdate=true ></highcharts>  
</template>


<script>
export default {
  props: ["data", "title"],
  data() {
    return {
      chartOptions: {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: "pie"
        },
        exporting: {
          enabled: false
        },
        title: {
          text: "demo"
        },
        series: [
          {
            data: [
              {
                name: "test",
                y: 29.9
              },
              {
                name: "test2",
                y: 29.9
              },
              {
                name: "test3",
                y: 29.94
              }
            ]
          }
        ]
      },
      updateArgs: [true, true, { duration: 1000 }]
    };
  },
  watch: {
    title(newValue) {
      this.chartOptions.title.text = newValue;
    },
    data(newValue, oldValue) {
        //console.log("pie watch fired",newValue)
        for (let obj of newValue) {
            let x = this.$children[0].chart.series[0].data.findIndex(
                        s => s.name == obj.name
                    );
            if (x != -1) {
                //console.log("pair found",obj,obj.y)
                this.$children[0].chart.series[0].data[x].update(obj.y);
            } else {
                //New key value pair
            }
        }
    }
  },
  mounted() {
    console.log('pieChart')
    this.init()
    // if (typeof this.title !== "undefined") {
    //     this.chartOptions.title.text = this.title;
    // }
  },
  methods:{
    init:()=>{
      console.log('pieChart init')
    }
  }
};

</script>

<style>
</style>