<template>
  <div class="modal">
    <div class="result">
      <span class="close-btn" @click="closeModal"></span>
      <div class="score">YOUR SCORE : {{ score }}</div> 
      <div class="record">
          <span v-if="newRecord">New record !!! : {{ record }}</span>
          <span v-else>Your record: {{ record }}</span>          
      </div>
      <span 
        @click="$emit('restart')"
        class="btn-restart"      
        >RESTART
      </span>
    </div>
  </div>
</template>

<script>
import useLocalStorage from '@/composables/useLocalStorage'
export default {
  props: {
    score: {
      type:Number,
      required: true
    }
  },
  setup(props) {
    const { updateRecord } = useLocalStorage()
    const { record, newRecord } = updateRecord(props.score)

    return { record, newRecord }
  },
  mounted() {
        this.modal = this.$el
        this.modal.addEventListener('click', this.onOutsideClick)
    },
    methods: {
        onOutsideClick(e) {
            const result = this.modal.querySelector('.result')
            if (!e.composedPath().includes(result)) {
                this.closeModal()
            }
        },
        closeModal() {
            this.$emit('close')
        }
    }
}
</script>

<style lang="scss">
.modal {
  position: absolute;
  height:100vh;
  width:100%;
  background:rgba(black, 0.5);
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
    position: relative;
    display:grid;
    place-items: center;
    font-size: 4rem;

    .record {
        font-size: 1.8rem;
    }
  }
  
   .btn-restart{
        color: rgb(210, 230, 38);
        cursor: pointer;
        transition: 2s;
        &:hover {
        text-decoration: underline;
        }
    }

    .close-btn {
        &:before,
        &:after {
            left: 0
        }
    }
}


</style>