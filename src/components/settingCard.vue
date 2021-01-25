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
            <label class="h5 mb-0"  :for="inputIncomde">投資金額:</label>
          </b-col>
          <b-col cols="2">
            <b-form-input :id="inputIncomde" type="number"/>
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
      </b-container>      
    </template>
  </b-card>
</template>


<script>
export default {
  props: ["data", "title"],
  data: function() {
    return {
      show: true
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
    }
  }
};

</script>

<style>
</style>