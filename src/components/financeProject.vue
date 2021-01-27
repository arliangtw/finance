<template>
    <b-container fluid>
        <b-row>
            <b-col cols="8">
                <line-chart :data="data1" :title="lineChartTitle"></line-chart>
            </b-col>
            <b-col cols="4">
                <pie-chart :data="points2" ></pie-chart>
            </b-col>
        </b-row>
        <b-row>
            <b-col cols="12">
                <setting-card v-model="communication"></setting-card>
            </b-col>
        </b-row>        
        <b-row>
            <b-col cols="12">
                <stock-table :data="stockList" ></stock-table>
            </b-col>
        </b-row>
    </b-container>
</template>


<script>
import LineChart from '@/components/lineChart.vue'
import PieChart from  '@/components/pieChart.vue'
import StockTable from '@/components/stockTable.vue'
import SettingCard from '@/components/settingCard.vue'
import stockTableVue from './stockTable.vue'

export default {
    components:{
        LineChart,
        PieChart,
        StockTable,
        SettingCard     
    },
    data: function() {
        return {
            // 開發時暫時性物件---------------------------
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
            lineChartTitle : "Stock Demo",
            days:0,
            stockList: [],
            // 各種components彼此交換訊息的物件---------------------------
            communication: {
                settingCard : {
                    income : 10000, //投資總金額
                    InputDate : ['',''], //投資日期起訖
                },
                stockTable : [ //投資的項目
                    {
                        itemName : '現金', //項目
                        amount : 0, //投資金額
                        percent : '100%', //比例
                        income : 0, //獲利
                    }
                ],
            }
        }
    },
    beforeDestroy() {
        clearInterval(this.intervalId)
    },    
    mounted() {
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
                //console.log(data1)
                this.data1.push(data1)
                this.days = this.days + 1
                
            },2000)

        },
        communication(value){
            this.communication = value.communication
        }

    },
}
</script>

<style>
    
</style>