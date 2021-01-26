<template>
  <div class="header-img">
    <img 
      src="./assets/Rick_and_Morty_logo.png" 
      alt="Rick and morty"
    />
  </div>

  <div class="scoreboard">
    <img 
      src="./assets/morty.png" 
      alt="morty"
    />
    <span>SCORE : {{ score }} <br> Level: {{ level }}</span>
  </div>

  <div class="welcome-text">
    CLICK <span @click="startGame">PLAY</span> TO START PLAYING 
  </div>
  <GameResult 
    @restart="startGame"
    :score="score" 
    v-if="showModal"
  />
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
import GameResult from './components/GameResult.vue';

export default {
  name: 'App',
  components: {
    RickMorty,
    GameResult
  },
  data (){
    return {
      score: 0,
      level: 1,
      showModal: true
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
      this.showModal = false
      let timeUp = 11
      const gameboard = this.$.appContext.app._container
      const playgrid = gameboard.getElementsByClassName('hole')
      let timer, delay
      timer = 1100 - this.level*100 //10 levels
      delay = timer + 300
      const timeOut = setInterval(() => {
       
        if(timeUp > 0 ){
          const ricky = this.pickRandom(playgrid)
          this.showHead(ricky, timer) 
          timeUp--
        }
        if (timeUp <= 0) {
          clearInterval(timeOut)
          return this.upLevel()
        }
        if(timer <= 0) clearInterval(timeOut)
      }, delay)
    },

    upLevel() {
      if(this.level !== 10){
        this.level++
        this.startGame()
      }
      else {
        setTimeout(() => {
          this.showResult()
        }, 500)
      }
      
    },
    showResult() {
      return this.showModal = true;
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
  max-width:1000px;
  height: 100vh;
  padding-top: 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;

  .header-img img{
    width:300px;
    height:auto;
    margin: 0 auto;
  }

  .scoreboard {
    margin: 0 auto;
    display: flex;
    align-items: center;
    span {
      padding-left: 20px;
    }
    img {
      height:auto;
      margin: 0 auto;
      max-width:100px;
    }
  }

  .playgrid {
    display: grid;
    grid-template-columns: repeat(3, 250px);
    grid-template-rows:  repeat(3, 200px);
    gap:5px;
  }

  .welcome-text{
    font-size: 1.7rem;
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

@media only screen and (max-width:775px) {
  #app {
    .playgrid {
      grid-template-columns: repeat(3, 200px);
      grid-template-rows:  repeat(3, 150px);
      gap:5px;
    }
  }
}

@media only screen and (max-width:500px) {
  #app {
    .playgrid {
      grid-template-columns: repeat(3, 135px);
      grid-template-rows:  repeat(3, 120px);
      gap:5px;
    }
    .welcome-text {
      font-size: 1.5rem;
    }
  }
}
</style>

