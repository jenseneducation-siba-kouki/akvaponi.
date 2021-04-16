<template>
  <div class="nav">
    <router-link to="/"><img src="../assets/logo.jpg" class="logo"></router-link>
 <div class="nav-links">
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap" rel="stylesheet">
      <!-- <Dropdown title="Akvaponi i Roslagen" :items="Akvaponi" /> | -->
      <router-link to="/Akvaponi" >AKVAPONI</router-link> |
      <router-link to="/Project" >PROJECT</router-link> |
      <router-link to="/Events" >EVENTS</router-link> |
      <router-link to="/Literature">LITERATURE</router-link> |
      <router-link to="/News" >NEWS</router-link> |
      <router-link to="/About" >ABOUT</router-link>
    </div>
  </div>
</template>

<script>
// import Dropdown from './Dropdown';

export default {
name: 'Nav',
// components:{
//     Dropdown
// },
// data () {
//     return {
//         Akvaponi : [
//             {
//                 title: 'Projekt',
//                 link:'About'
//             },
//             {
//                 title: 'About',
//                 link: '@/views/About'
//             },
//         ]
//     }
// }
}
</script>

<style scoped>
.nav{
width: 100%;
height: 100%;
display: flex;
justify-content: space-around;
font-family: 'Montserrat', sans-serif;
}
.nav-links{
margin-top:2rem;
letter-spacing: 2px;
margin-left:10rem;
color: rgb(204, 212, 221);
}
a{
color: rgb(72, 140, 185);
text-decoration: none;
font-weight: 500;
font-size: 0.9rem;
padding:8px;
font-style: oblique;

 }
 .logo{
 height: 7rem;
 width: 17rem;
 margin-top:-11px;
  }
</style>