<template>
  <div class="hole">
    <div class="cloud">
        <img src="../assets/cloud.png" alt="cloud">
    </div>
    <div class="rick">
        <img src="../assets/rick.png" alt="rick">
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
.hole {
    position: relative;
    overflow: hidden;
    img{
        height:auto;
        max-width:150px;
        min-width: 75px;
        position: absolute;
    }
    .cloud img{
        bottom:-20px;
        z-index:50; 
    }
    .rick img{
        transform:translateY(80%);
        left: 15px;
        min-width: 50px;
        max-width:100px;
    }
    &.up .rick img {
        transition: .1s;
        transform:translateY(0);
    }
}


</style>