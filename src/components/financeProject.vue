<template>
    <b-container fluid>
        <b-row>
            <b-col cols="8">
                <line-chart :data="data1" :title="line-chart-title"></line-chart>
            </b-col>
            <b-col cols="4">
                <pie-chart :data="points2" ></pie-chart>
            </b-col>
        </b-row>
        <b-row>
            <b-col cols="12">2 of 1</b-col>
        </b-row>
    </b-container>
</template>


<script>
import LineChart from '@/components/lineChart.vue'
import PieChart from  '@/components/pieChart.vue'

export default {
    components:{
        LineChart,
        PieChart     
    },
    data: function() {
        return {
            intervalId:null,
            points2: [
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
            ],
            data1: [],
            LineChartTitle : "an Demo",
            days:0
        }
    },
    beforeDestroy() {
        clearInterval(this.intervalId)
    },    
    mounted: function() {
        this.init();
    },
    methods: {
        init:function(){
            console.log('finance Project mounted')

            this.intervalId = setInterval(() => {
                this.points2 = [
                    {
                        name:"test2",
                        y: parseFloat((Math.random() * 100.0).toFixed(2))
                    }
                ]
                const today = new Date();
                const mmsForOneDay = 86400000;
                let data1 = [];

                data1.push(today.getTime()+(mmsForOneDay*this.days))
                data1.push(parseInt((Math.random() * 10.0).toFixed(0)))
                console.log(data1)
                this.data1.push(data1)
                this.days = this.days + 1
            },2000)

        }

    },
}
</script>

<style>
</style>