<template>
  <b-card class="mt-5">
    <template #header>
      <b-button variant="primary">
        <b-icon icon="tools"/> 設定目標
      </b-button>
      <b-button class="ml-4 btn-light" 
                @click="show = !show" >
        <b-icon icon="arrows-collapse" 
                font-scale="1" 
                v-if="show" 
                variant="danger" />
        <b-icon icon="arrows-expand"  
                font-scale="1" 
                v-else variant="success" />
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
            <b-form-input :id="InputDate_A" type="date"></b-form-input>
          </b-col>
          <b-col cols="2" class="pr-0 text-right">  
            <label class="h5 mb-0" :for="InputDate_B">投資時間(結束):</label>
          </b-col>
          <b-col cols="2">
            <b-form-input :id="InputDate_B" type="date"></b-form-input>
          </b-col>
        </b-row>
        <b-row>
            <b-col>
              <b-button @click="makeToast('alarm','請不要亂打',true)">通知</b-button>
            </b-col>
        </b-row>
      </b-container>      
    </template>
  </b-card>
</template>


<script>
export default {
  props: ["communication"],
  data() {
    return {
      show: true,
      income: 0,
    };
  },
  watch: {
    communication(newValue) {
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
      this.income = this.communication.settingCard.income;
    },
    changeIncome:function() {
      // const regex = new RegExp(/[0-9]*/);
      // let match = regex.test(this.income)
      // console.log('change:%s',match)
      if (this.$refs.inputIncome.validity.badInput) {
        this.makeToast('warning','請不要亂打',true)
      }else{
        this.communication.settingCard.income = this.income
        this.$emit('update-communication',this.communication)
        
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