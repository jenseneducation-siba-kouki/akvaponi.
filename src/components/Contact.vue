<template>
  <div class="contact">
    <!-- <link rel="stylesheet" 
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" 
    integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" 
    crossorigin="anonymous"> -->

    <footer class="container">
      <section class="adress">
      <h3>Kaserngatan 11 </h3>
        <h3>761 46 Norrtälje </h3>
          <h3>Telefon: 0176-28 61 00</h3>
      </section>
      <section class="website">
        <h3>Kontaktuppgifter:</h3>
        <h3>vattencentrum.se</h3>
        <h3>info@vattencentrum.se</h3>
      </section>
      <section class="social">
        <h3>Följ oss på social media</h3>
        <div class="media">
          <ul>
            <li><i class="fa fa-linkedin-square" aria-hidden="true"></i></li>
            <li><i class="fa fa-facebook-official" aria-hidden="true"></i></li>
          </ul>
        </div>
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
margin: 0 6rem;
text-align: center;
padding: 10px;

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
li{
  list-style: none;
  display:inline-block;
  padding:20px;
  font-size: 40px;
}
</style>