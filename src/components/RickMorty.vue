<template>
  <div class="hole" @click="sendClick">
    <div class="cloud">
      <img 
        src="../assets/cloud.png" 
        alt="cloud"
      />
    </div>
    <div class="rick">
      <img 
        src="../assets/rick.png" 
        alt="rick"
      />
    </div>
  </div>
</template>

<script>
import throttle from 'lodash.throttle'
export default {
  methods: {
    //To impeach multiple click on the same element
    //300 ms "reaction time"
    sendClick: throttle(function(){
      this.$emit('clicked', Array.from(this.$el.classList))
    }, 300) 
  }
}
</script>

<style lang="scss" scoped>
.hole {
  position: relative;
  overflow: hidden;
  
  img{
    height:auto;
    width:150px ;
    position: absolute;
  }

  .cloud img{
    width:200px;
    bottom:-20px;
    z-index:50;
    
  } 
  .rick img{
    transform:translateY(100%);
    left: 60px;
    width:80px;
    transition: .03s;
    
    &:active {
        opacity: .8; 
        transition: .08s;
    }
  }

  &.up .rick img {
    transform:translateY(10px);
  }
}

@media only screen and (max-width: 775px) {
    .hole {
        .cloud img{
            width:150px;
        }
        .cloud img{
            bottom:-10px;        
        } 
        .rick img{
            transform:translateY(110%);
            left: 40px;
            max-width: 80px;
        }
        &.up .rick img {
            transform:translateY(20px);
        }
    }
}

@media only screen and (max-width: 500px) {
    .hole {
        .cloud img{
            max-width:130px;
        }
       .rick img {
            max-width:70px;
        }
        .cloud img{
            bottom:-10px;        
        } 
        .rick img{
            left: 30px;
        }
        &.up .rick img {
            transform:translateY(10px);
        }
    }
}

</style>