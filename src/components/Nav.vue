<template>
  <div class="nav">
    <router-link to="/"><img src="../assets/logo.jpg" class="logo"></router-link>
 <div class="nav-links">
      <router-link to="/Events">Events</router-link> |
      <router-link to="/Literature">Literature</router-link> |
      <router-link to="/News">News</router-link> |
      <router-link to="/About">About</router-link> 
    </div>
  </div>
</template>

<script>
export default {
name: 'Nav',

}
</script>

<style scoped>
.nav{
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-around;
}
a{
   color: black;
    text-decoration: none;
 }
 .logo{
     height: 7rem;
     width: 17rem;
 }
</style>
