<template>
  <div class="header-img">
    <img 
      src="./assets/Rick_and_Morty_logo.png" 
      alt="Rick and morty"
    />
  </div>
  <div class="scoreboard">
    <img src="./assets/morty.png" alt="morty">
    <span>SCORE : {{ score }} Level: {{ level }}</span>
  </div>
  <div class="welcome-text">
    CLICK <span @click="startGame">PLAY</span> TO START PLAYING 
  </div>

  <div class="playgrid" >
    <RickMorty 
      @wtf="handleClick" 
      v-for="n in 9" 
      :key="n"
    />
  </div>
</template>

<script>
import RickMorty from './components/RickMorty.vue';

export default {
  name: 'App',
  components: {
    RickMorty
  },
  data (){
    return {
      score: 0,
      level: 1
    }
  },  
  methods: {
    handleClick(classList){
      classList.forEach(cl => {
        if(cl === 'up') this.score++
        // console.log(cl)
      }) 
      
    },
    startGame() {
      console.log(this)
      let timeUp = 11
      const gameboard = this.$.appContext.app._container
      const playgrid = gameboard.getElementsByClassName('hole')
      let timer, delay
      timer = 1000 - this.level*100 //10 levels
      delay = timer + 300
      const timeOut = setInterval(() => {
       
        if(timeUp > 0 ){
          const ricky = this.pickRandom(playgrid)
          this.showHead(ricky, timer) 
          timeUp--
        }
        if (timeUp <= 0) {
          clearInterval(timeOut)
        }
        if(timer <= 0) clearInterval(timeOut)
      }, delay)
    },

    showHead(headToShow, timer){
      headToShow.classList.add('up')
      setTimeout(() => {
        headToShow.classList.remove('up')
      }, timer)
      
    },
    
    pickRandom(grid) {
      return grid[ Math.floor(Math.random() * 9) ]
    }
  }
}
</script>

<style lang="scss">
#app{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .header-img img{
    width:300px;
    height:auto;
    margin: 10px auto;
  }
  .scoreboard {
    margin: 0 auto;
    display: flex;
    font-size: 2rem;
    flex-direction: column;
    img {
      height:auto;
      margin: 0 auto;
      max-width:120px;
    }
  }
  .playgrid {
    display: grid;
    grid-template-columns: repeat(3, 150px);
    grid-template-rows:  repeat(3, 130px);
    gap:10px;
  }
  .welcome-text{
    font-size: 2.3rem;
    color: #5b9d47;
    span {
      color: #02a2b7;
      opacity: .6;
      cursor:pointer;
      text-decoration: underline;
      transition: .3s;
      &:hover {
        opacity: 1;
      }
    }
  }
}

</style>

