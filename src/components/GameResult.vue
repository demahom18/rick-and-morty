<template>
  <div class="modal">
    <div class="result">
      <span>YOUR SCORE : {{ score }}</span> 
      <span 
        @click="$emit('restart')"
        class="btn-restart"      
      >RESTART</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    score: {
      type:Number,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.modal {
  position: absolute;
  height:100vh;
  width:100%;
  background-attachment: fixed;
  background:rgba(100, 165, 103, 0.3);
  display:grid;
  place-content: center;
  z-index:100;
  
  .result {
    width: 400px;
    height:250px;
    background: rgba(17, 70, 6, 0.82);
    backdrop-filter: blur(2px);
    color: inherit;
    text-align: center;
    line-height: 250px;
    border-radius: 10px;
    display:grid;
    place-content: top;
    grid-template-rows:repeat(2, 100px);
    position: relative;
  }
  span {
    transform: scale(1) translateY(-50px);
  }
   .btn-restart{
     color: rgb(210, 230, 38);
     font-size: 2rem;
     cursor: pointer;
     transition: 2s;
     &:hover {
       text-decoration: underline;
     }
   }
}


</style>