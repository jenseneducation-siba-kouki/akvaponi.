<template>
  <div class="nav">
    <router-link to="/"><img src="../assets/logo.jpg" class="logo"></router-link>
 <div class="nav-links">
      <!-- <Dropdown title="Akvaponi i Roslagen" :items="Akvaponi" /> | -->
      <router-link to="/Events" >Events</router-link> |
      <router-link to="/Literature">Literature</router-link> |
      <router-link to="/News" >News</router-link> |
      <router-link to="/About" >About</router-link> |
        <router-link to="/Project" >Project</router-link> 

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
  height: 60px;
  display: flex;
  justify-content: space-around;
}
.nav-links{
margin-top:2rem;
letter-spacing: 3px;
margin-left:10rem;
}
a{
color: rgb(72, 140, 185);
text-decoration: none;
font-weight: 500;
font-size: 1.2rem;
 }
/* nav .menu-item {
  color: #FFF;
  padding: 10px 20px;
  position: relative;
  text-align: center;
  border-bottom: 3px solid transparent;
  display: flex;
  transition: 0.4s;
}
nav .menu-item a {
  color: inherit;
} */
 .logo{
     height: 7rem;
     width: 17rem;
     margin:0 2rem;
 }
</style>
