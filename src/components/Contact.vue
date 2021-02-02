<template>
  <div class="contact">
    <footer class="container">
      <section class="adress">
      <h3>Kaserngatan 11 </h3>
        <h3>761 46 Norrtälje </h3>
          <h3>Telefon: 0176-28 61 00</h3>
      </section>
      <section class="website">
        <h3>vattencentrum.se</h3>
        <h3>info@vattencentrum.se</h3>
      </section>
      <section class="social">
        <h3>Följ oss på social media</h3>
      </section>
      </footer>
      <p>
      &copy; {{ new Date().getFullYear() }} | Created by | 
    </p>
    

  </div>
</template>

<script>
export default {
name: 'Contact',

}
</script>

<style scoped>
section{
box-sizing: border-box;
display:inline-block;
margin: 0 6.9rem;
text-align: center;
padding: 4px;
}
footer{
  background: rgb(235, 235, 235);
}
p{
  text-align: center;
  color: black;
  display: flex;
  height: 20px;
  align-items: center;
  justify-content: center;
}
</style>