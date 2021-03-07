<template>
  <div class="home">
    <link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap" rel="stylesheet">
    <h2>Akvaponi i Roslagen</h2> <br>
    <h4>Project Duration</h4> 
    <h5>Oct 2019 --- Mar2021</h5>
    <h4>Total Budget</h4>
    <h5>1,2M SEK</h5>
  </div>
      <img src="../assets/1.jpeg" alt="home" class="veg">
    <!-- <section class="container">
      <img src="" alt="">
      <h3>Vad är Akvaponi</h3>
    </section>
    <section class="containe">
      <img src="" alt="">
      <h3>Projekt</h3>
    </section> -->
     <section class="webi">
      <img src="../assets/4.jpg" class="bild" alt="">
      <h3>Vad är Akvaponi</h3>
      <p>Akvaponi i Roslagen finansieras av Jordbruksverket <br> och LEADER Stockholmsbygd. Projektet bidrar <br>
       med information om akvaponik, en cirkulär jordbruksmetod <br> som gör det möjligt att spara vatten och ta <br>
        vara på näringsämnen genom att kombinera vattenbruk och <br> hydroponi, och som kan främja övergången till <br>
        mer hållbara system för livsmedelsproduktion. <br> Målet är att fler företag och andra aktörer på <br>
        landsbygden (ekonomiska föreningar, bygdebolag odyl) <br> skall ta till sig idén om att odla i slutet <br>
        system, för att ges möjlighet att växa, diversifiera <br> sin näring, bidra till ett långsiktigt hållbart <br>
        samhälle som inte gör åverkan på miljön samt odling för <br> eget bruk. Projektet vill även ge barn och unga <br>
        möjlighet att lära sig mer om kretslopp, vattnet som resurs <br> och hur man framställer livsmedel på ett hållbart sätt
        </p>
      <router-link to="/Aqua" >Läsa --></router-link> 
      </section>
    <section class="webi">
      <img src="../assets/19.jpg" class="bild" alt="">
      <h3>Projekt</h3>
           <p>Akvaponi i Roslagen finansieras av Jordbruksverket <br> och LEADER Stockholmsbygd. Projektet bidrar <br>
       med information om akvaponik, en cirkulär jordbruksmetod <br> som gör det möjligt att spara vatten och ta <br>
        vara på näringsämnen genom att kombinera vattenbruk och <br> hydroponi, och som kan främja övergången till <br>
         mer hållbara system för livsmedelsproduktion. <br> Målet är att fler företag och andra aktörer på <br>
        landsbygden (ekonomiska föreningar, bygdebolag odyl) <br> skall ta till sig idén om att odla i slutet <br>
        system, för att ges möjlighet att växa, diversifiera <br> sin näring, bidra till ett långsiktigt hållbart <br>
        samhälle som inte gör åverkan på miljön samt odling för <br> eget bruk. Projektet vill även ge barn och unga <br>
        möjlighet att lära sig mer om kretslopp, vattnet som resurs <br> och hur man framställer livsmedel på ett hållbart sätt
        </p>
      <router-link to="/Project" >Läsa --></router-link> 
      </section>
</template>

<script>

export default {
  name: 'Home',
  components: {
    
  }
}
</script>

<style scoped>
.home{
  font-family: 'Playfair Display', serif;
  box-sizing: border-box;
  padding-right:20px;
  background: rgb(235, 235, 235);
  width: 370px;
  height: 480px;
  text-align: center;
  padding:5rem;
  letter-spacing: 3.3px;
  border-radius: 2px;
}
.veg{
height: 30rem;
width: 55rem;
float: right;
border-radius: 2px;
margin-top:-30rem;
}
h3{
  margin-left:9rem;
}
section{
box-sizing: border-box;
display:inline-block;
text-align: center;
}
.bild{
height: 25rem;
width: 23rem;
margin-left:11rem;
margin-top:4rem;
}
p{
  margin-left:10rem;
}
a{
text-decoration: none;
font-weight: 500;
font-size: 0.9rem;
padding:8px;
 }
</style>
