<template>
<div class="slider">
<h1>Image slider</h1>
<button @click="prev" type="button" class="btn btn-left">
  <h3>Left</h3>
</button>
<div class="container-slides" :style="{transform: `translateX(${index}px)` , transition: `${transition}` }">
  <img src="../assets/5.jpg" alt="image " class="img-slider">
   <img src="../assets/10.jpg" alt="image " class="img-slider">
    <img src="../assets/13.jpg" alt="image " class="img-slider">
     <img src="../assets/4.jpg" alt="image " class="img-slider">
</div>
<button @click="next" type="button" class="btn btn-right">
  <h3>Right</h3>
</button>

</div>
  
</template>

<script>
export default {
  name: 'Slider',
  data: function(){
    return {
      index:0,
      transition: "transform 0.2s ease"
    }
  },
  methods: {
    next(){
      if(this.index === -1500){
        this.transition = "none";
        this.index = 0;
      } else {
        this.transition = "transform 0.2s ease";
        this.index -= 500;
      }
    },
    prev(){
      if(this.index === 0){
        this.transition = "none";
        this.index = -1500;
      } else {
        this.transition = "transform 0.2s ease";
        this.index +=500;
      }
    }
  }

}
 
</script>

<style scoped>
.slider{
  width:500px;
  height:300px;
  margin: 100px auto 0;
  /* background: black; */
  overflow:hidden;
  position:relative;

}
.container-slides{
  display:flex;
}
.img-slider{
  width:100%;
  height:auto;
}
.btn{
  outline:none;
  border:none;
  width:50px;
  height:50px;
  border-radius: 50%;
  display:block;
  position:absolute;
  z-index:1000;
  cursor: pointer;
  /* font-size: 20px; */
  display:flex;
  justify-content:center;
  align-items:center;
}
.btn-left{
  top:50%;
  left:5px;
  transform: translateY(-50%);
}
.btn-right{
  top:50%;
  right:5px;
  transform: translateY(-50%);
}
</style>



