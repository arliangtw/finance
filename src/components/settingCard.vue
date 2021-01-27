<template>
  <b-card class="mt-5">
    <template #header>
      <b-button variant="primary" @click="show = !show">
        <b-iconstack font-scale="1" animation="spin">
          <b-icon stacked icon="tools" scale="0.75" shift-v="-0.25" /> 
        </b-iconstack>  
        設定投資範圍
        <b-icon icon="arrows-collapse" font-scale="1" v-if="show" variant="white" />
        <b-icon icon="arrows-expand"   font-scale="1" v-else variant="white" />        
      </b-button>
      <b-button class="ml-4 btn-light" 
                @click="show = !show" >
      </b-button>
    </template>
    <template #default v-if="show">
      <b-container fluid>
        <b-row class="mb-2 " align-v="center" >
          <b-col cols="2" class="pr-0 text-right" >
            <label class="h5 mb-0" :for="inputIncome">投資金額:</label>
          </b-col>
          <b-col cols="2">
            <b-form-input type="number" ref="inputIncome" :id="inputIncome" v-model="income" @change="changeIncome" />
          </b-col>
          <b-col cols="1" class="pl-0">
            <label class="h5 mb-0">萬</label>
          </b-col>
        </b-row>
        <b-row  class="mb-2" align-v="center">
          <b-col cols="2" class="pr-0  text-right">
            <label class="h5 mb-0" :for="InputDate_A">投資時間(開始):</label>
          </b-col>
          <b-col cols="2">
            <b-form-input type="date" ref="InputDate_A" :id="InputDate_A" v-model="InputDate_A" @change="changeDate"></b-form-input>
          </b-col>
          <b-col cols="2" class="pr-0 text-right">  
            <label class="h5 mb-0" :for="InputDate_B">投資時間(結束):</label>
          </b-col>
          <b-col cols="2">
            <b-form-input type="date" ref="InputDate_B" :id="InputDate_B" v-model="InputDate_B" @change="changeDate"></b-form-input>
          </b-col>
        </b-row>
      </b-container>      
    </template>
  </b-card>
</template>


<script>
export default {
  props: ["value"],
  data() {
    return {
      show: true,
      income: 0,
      InputDate_A:"",
      InputDate_B:"",
    };
  },
  watch: {
    value(newValue) {
      // console.log(newValue)
      this.income = newValue.settingCard.income;
    }
  },
  mounted() {
    this.init()
  },  
  methods: {
    init:function(){
      // console.log('lineChart init')
      // console.log(this.communication)
      this.income = this.value.settingCard.income;
    },
    changeIncome:function() {
      // const regex = new RegExp(/[0-9]*/);
      // let match = regex.test(this.income)
      // console.log('change:%s',match)
      if (this.$refs.inputIncome.validity.badInput) {
        this.makeToast('warning','金額不要亂打，好嗎',true)
      }else{
        this.value.settingCard.income = this.income
        $emit('value',this.value) //好像這行可以不用
        
      }
    },
    changeDate(){
      if (this.$refs.InputDate_A.validity.badInput || this.$refs.InputDate_B.validity.badInput) {
        this.makeToast('warning','日期不要亂打，好嗎',true)
      }else if (this.InputDate_A !='' && this.InputDate_B != ''){
        const date_A = this.InputDate_A.split('-');
        const date_B = this.InputDate_B.split('-');
        const InputDate_A = new Date(date_A[0], date_A[1] - 1, date_A[2]);
        const InputDate_B = new Date(date_B[0], date_B[1] - 1, date_B[2]);
        if (InputDate_A < InputDate_B) {

          this.value.settingCard.InputDate[0] = this.InputDate_A
          this.value.settingCard.InputDate[1] = this.InputDate_B
          $emit('value',this.value)  //好像這行可以不用
        }else{
          this.makeToast('warning','結束日期不能小等於開始日期，好嗎',true)
        }

      }
    },
    makeToast(variant = 'error' , msg ='hi', append=true) {
      this.$bvToast.toast( msg, {
        title: variant=='alarm'?'警告':'錯誤',
        variant: variant=='alarm'?'warning':'danger',  
        autoHideDelay: 5000,
        appendToast: append
      })
    },    
  }
};

</script>

<style>
</style>