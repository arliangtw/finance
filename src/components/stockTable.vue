<template>
  <b-card class="mt-5">
    <template #header>
      <b-button variant="primary">
        <b-iconstack font-scale="1" animation="spin">
          <b-icon stacked icon="check-square" scale="0.75" shift-v="-0.25" /> 
        </b-iconstack>  
        設定投資方向
      </b-button>      
    </template>
    <template #default>
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
        :table-variant="tableVariant"
        
      ></b-table>
    </template>
  </b-card>
<!-- :thead-tr-class="headClass" -->
</template>


<script>
export default {
  props: ["stockList"],
  data() {
    return {
      fields: [
        { key: 'display', label: '顯示' },
        { key: 'name', label: '名稱' },
        { key: 'percent', label: '比例' },
        { key: 'amount', label: '金額' },
        { key: 'income', label: '獲利' },
        { key: 'lineChart', label: '漲幅' }
      ],
      items: [
        {'name': 'VGT', 'percent':'30', 'amount': '3000', 'income':'100', 'lineChart':'component'},
        {'name': 'VTI', 'percent':'20', 'amount': '2000', 'income':'200', 'lineChart':'component'},
        {'name': 'SPY', 'percent':'50', 'amount': '5000', 'income':'300', 'lineChart':'component'}
      ],
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
      noCollapse: true
    }
  },
  mounted() {
    console.log('stockTable')
    //this.init()
  },
  // methods:{
  //   init:function(){
  //     console.log('stockTable init')
  //   },
  //   headClass:function(item, type) {
  //     debugger
  //     return 'table-success'
  //   }
  // }



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