<template>
  <div class="modal">
    <div class="result">
      <span>YOUR SCORE : {{ score }}</span> 
      <span 
        class="rank"
        v-if="rank != 0"
        >You are ranked: {{ rank }}<sup >{{ mySupFormatted }}</sup> 
      </span>
      <span 
        @click="$emit('restart')"
        class="btn-restart"      
        >RESTART
      </span>
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
export default {
  props: {
    score: {
      type:Number,
      required: true
    },
    rank: {
      type: Number,
      required: false,
      default: 0
    }
  },
  setup(props) {
    const mySup = ref('')
    const numb = [...props.rank.toString()].pop() //Easy way to get the last digit
    
    const mySupFormatted = computed(() => {
      if (numb == 1) return mySup.value = 'st'
      if (numb == 2) return mySup.value = 'nd'
      if (numb == 3) return mySup.value = 'rd'
      else return mySup.value = 'th'
    })

    return { mySupFormatted }
    
  }
}
</script>

<style scoped lang="scss">
.modal {
  position: absolute;
  height:100vh;
  width:100%;
  background:rgba(100, 165, 103, 0.3);
  display:grid;
  place-content: center;
  z-index:100;
  
  .result {
    width:auto ;
    height:400px;
    padding:40px;
    line-height: 100px;
    background: rgba(17, 70, 6, 0.82);
    backdrop-filter: blur(2px);
    color: inherit;
    text-align: center;
    border-radius: 10px;
    display:grid;
    place-items: center;
    font-size: 4rem;
  }

  .rank {
    font-size: 1.5rem;
  }
  
   .btn-restart{
     color: rgb(210, 230, 38);
     cursor: pointer;
     transition: 2s;
     &:hover {
       text-decoration: underline;
     }
   }
}


</style>