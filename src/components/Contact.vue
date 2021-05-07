<template>
  <div class="contact">
    <!-- <link rel="stylesheet" 
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" 
    integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" 
    crossorigin="anonymous"> -->
        <link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@1,300&display=swap" rel="stylesheet">

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
            <!-- <li><a href=""><i class="fa fa-linkedin-square" aria-hidden="true"></i></a></li> -->
            <li><a href="https://www.facebook.com/UtvecklingscentrumForAkvaponi"><i class="fa fa-facebook-official" aria-hidden="true"></i></a></li>
            <li><a href="https://www.youtube.com/channel/UCbehk0HaxHY38xG6QlTmbIQ"><i class="fa fa-youtube-play" aria-hidden="true"></i></a></li>
          </ul>
        </div>
      </section>
          <img src="../assets/UCV.png" class="logo">
          <img class="logo" src="../assets/euro.jpg" alt="image">


      </footer>
      <p>
      &copy; {{ new Date().getFullYear() }} | Vattencentrum
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
font-style: oblique;
font-family: 'Open Sans', sans-serif;

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
  font-style: oblique;
  font-family: 'Open Sans', sans-serif;
}
li{
  list-style: none;
  display:inline-block;
  padding:10px;
  font-size: 40px;
  font-style: oblique;
}
 .logo{
 height: 7.2rem;
 width: 17rem;
 margin-left:6rem;
 margin-bottom: 1rem;
  }
  i{
    color: black;
  }
</style>