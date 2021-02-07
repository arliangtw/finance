<template>
  <b-card class="mt-5">
    <template #header>
      <b class="text-info">設定投資方向</b>
    </template>
    <template #default>
      <b-button variant="primary" class="mb-1" v-if="showInsertButton" @click="insertItem(); showInsertButton=!showInsertButton; ">
        <!-- <b-iconstack font-scale="1" animation="spin"> -->
        <!-- <b-icon stacked icon="check-square" scale="0.75" shift-v="-0.25" />  -->
        <!-- </b-iconstack>   -->
        <b-icon icon="vector-pen" />&nbsp;&nbsp;&nbsp;新增
      </b-button>       
      <b-table 
        :striped="striped"
        :bordered="bordered"
        :borderless="borderless"
        :outlined="outlined"
        :small="small"
        :hover="hover"
        :dark="dark"
        :fixed="fixed"
        :foot-clone="footClone"
        :no-border-collapse="noCollapse"
        :items="items"
        :fields="fields"
        :head-variant="headVariant"
        :table-variant="tableVariant" >

        <template #cell(display)="data">
          {{ data.index + 1 }}
        </template>

        <template #cell(itemName)="data" >
          <b class="text-info" v-if="data.item.status==undefined" >{{ data.value}}</b>
          <b-input type="search" @change="searchStock" ref="inputStockName"
              v-else
              v-model="inputStockName"
              :state="inputStockNameCheck"
              placeholder="輸入股票名稱"/>
        </template> 

        <template #cell(percent)="data">
          <b class="text-info">{{ data.value}}</b>
        </template>

        <template #cell(amount)="data">
          <b class="text-info" v-if="data.item.status==undefined" >{{ data.value}}</b>
          <b-input type="number" @change="inputAmountFinish" 
              ref="inputAmount" 
              v-else
              v-model="inputAmount"
              :state="inputAmountCheck"
              placeholder="輸入投資金額"/>
        </template>

        <template #cell(income)="data">
          <b class="text-info">{{ data.value}}</b>
        </template>
      
      </b-table>
    </template>
  </b-card>
<!-- :thead-tr-class="headClass" -->
</template>


<script>
export default {
  props: ["value"],
  data() {
    return {
      fields: [
        { key: 'display', label: '顯示' },
        { key: 'itemName', label: '名稱' },
        { key: 'percent', label: '比例' },
        { key: 'amount', label: '金額' },
        { key: 'income', label: '獲利' },
        { key: 'lineChart', label: '漲幅' }
      ],
      items: [],
      inputStockName : '',
      inputAmount : 0,
      freeMoney : 0, //現金
      tableVariants: [
        'primary',
        'secondary',
        'info',
        'danger',
        'warning',
        'success',
        'light',
        'dark'
      ],
      striped: false,
      bordered: false,
      borderless: false,
      outlined: true,
      small: false,
      hover: true,
      dark: false,
      fixed: false,
      footClone: false,
      headVariant: null,
      tableVariant: '',
      noCollapse: true,
      showInsertButton: true,
    }
  },
  mounted() {
    this.init()
  },
  computed: {
    inputStockNameCheck:function(){
      const regex_str = new RegExp(/^[a-zA-Z]*$/)
      console.log(regex_str.test(this.inputStockName))
      return this.inputStockName != "" &&
             regex_str.test(this.inputStockName)
    },
    inputAmountCheck:function(){
      const regex_num = new RegExp(/[0-9]*/)
      return this.inputAmount !=0 && this.inputAmount <= this.freeMoney
    },
  },
  methods:{
    init:function(){
      this.items = this.value.stockTable
      this.items.forEach( e => {
        if (e.itemName == "現金") 
          this.freeMoney = e.amount
      })
      
    },
    insertItem:function(){
      console.log('insertItem')
      
      this.items.push({
          itemName : '', //項目
          amount : 0, //投資金額
          percent : '0%', //比例
          income : 0, //獲利
          status : 'edit',
      })
    },

    searchStock:function(){
      this.inputFinish()
    },
    inputAmountFinish:function() {
      this.inputFinish()
    },
    inputFinish:function() {
      //this.makeToast('error','查無該股票名稱',true)

      
      
      if (this.$refs.inputStockName.validity.badInput) {
        this.makeToast('warning','股票名稱錯誤',true)
        return false
      }

      if (this.$refs.inputAmount.validity.badInput) {
        this.makeToast('warning','金額錯誤',true)
        return false
      }

      //if (this.inputAmount > )

      //計算總金額
      const total = 0
      this.items.forEach (e =>{
        if (e.status != 'edit') {
          total = e.income + total 
        }
      })

      // if ((total + this.inputAmount)

      
      //異動table
      this.items.forEach (e => {
        if (e.status == 'edit') {
          e.itemName = this.inputStockName
          e.income = this.inputAmount
        }
      })

      //消除註記
      this.items.forEach (e => {
        if (e.status == 'edit') {
          delete e.status;
        }
      })



      // this.inputStockName
      

    },
    makeToast(variant = 'error' , msg ='hi', append=true) {
      this.$bvToast.toast( msg, {
        title: variant=='alarm'?'警告':'錯誤',
        variant: variant=='alarm'?'warning':'danger',  
        autoHideDelay: 5000,
        appendToast: append
      })
    }    
  }



  //https://bootstrap-vue.org/docs/components/table#custom-data-rendering
  // https://bootstrap-vue.org/docs/components/table#row-details-support
  //https://forum.vuejs.org/t/how-to-pass-cell-templates-to-a-component-with-b-table/106283
  //https://stackoverflow.com/questions/61357560/bootstrapvue-access-b-table-row-data-in-slot-template

  //https://stackoverflow.com/questions/51040281/bootstrapvue-table-template-inside-vue-slot
  //https://stackoverflow.com/questions/65526173/access-parent-component-scope-in-b-table-slot

  
};

</script>

<style>
</style>