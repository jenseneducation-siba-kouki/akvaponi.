<template>
  <div class="home">
    <link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@1,300;1,400&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@1,300&display=swap" rel="stylesheet">
    <h2>Akvaponi Roslagen</h2> <br>
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
     <!-- <section class="webi">
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
     
     </section> --> 
    <!-- <section class="webi">
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
        </p> -->
     
      <!-- </section> -->
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
      <div class="container">
        <div class="box">
          <div class="icon">
            <i class="fa fa-pagelines" aria-hidden="true"></i>
          </div>
          <div class="content">
            <h3>Akvaponi</h3>
            <p>Livsmedelssektorn kommer att behöva möta stora utmaningar som en allt större världsbefolkning medför,
               varav 70 procent kommer att leva i städer och bidra till överanvändning av våra resurser
               Jordbruket är mer beroende av väder och klimat än andra sektorer och kommer att påverkas särskilt 
               av klimatförändringarna.Några av dess konsekvenser är jorderosion, torka.
                 <router-link to="/Akvaponi" > <br> Läs mer här</router-link>
                   </p> 
          </div>

        </div>
         <div class="box">
          <div class="icon">
            <i class="fa fa-envira" aria-hidden="true"></i>
          </div>
          <div class="content">
            <h3>Projekt</h3>
            <p>Akvaponi i Roslagen finansieras av Jordbruksverket och LEADER Stockholmsbygd. Projektet bidrar 
       med information om akvaponik, en cirkulär jordbruksmetod som gör det möjligt att spara vatten och ta 
        vara på näringsämnen genom att kombinera vattenbruk och hydroponi, och som kan främja övergången till 
         mer hållbara system för livsmedelsproduktion.
          <!-- Målet är att fler företag och andra aktörer på 
        landsbygden (ekonomiska föreningar, bygdebolag odyl) skall ta till sig idén om att odla i slutet
        system, för att ges möjlighet att växa, diversifiera sin näring, bidra till ett långsiktigt hållbart
        samhälle som inte gör åverkan på miljön samt odling för eget bruk. Projektet vill även ge barn och unga
        möjlighet att lära sig mer om kretslopp, vattnet som resurs och hur man framställer livsmedel på ett hållbart sätt. -->
        <router-link to="/Project" > <br> Läs mer här</router-link></p>

          </div>
        </div>
      </div>
      
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
  font-family: 'Open Sans', sans-serif;
  box-sizing: border-box;
  padding-right:20px;
  background: rgb(235, 235, 235);
  width: 370px;
  height: 480px;
  text-align: center;
  padding:3rem;
  letter-spacing: 3.3px;
  border-radius: 2px;
  font-style: oblique;
  color: rgb(33, 99, 99);
}
h2{
  font-size: 3.7rem;
  margin-top:-1rem;
  color: rgb(33, 99, 99);
}
.veg{
height: 30rem;
width: 55rem;
float: right;
border-radius: 2px;
margin-top:-30rem;
font-style: oblique;

}
.container{
  position: relative;
  width: 1200px;
  height: 420px;
  margin:30px auto;
}
.container .box{
  position: relative;
  width: calc(550px - 30px);
  height: calc(350px - 30px);
  background: rgb(235, 235, 235);
  float: left;
  margin:20px 40px;
  box-sizing: border-box;
  overflow: hidden;
  border-radius: 15px;
}
.container .box .icon{
  position: relative;
  top:2%;
  left:40%;
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  background:  rgb(126, 189, 124);
  transition: 0.5s;
  z-index: 1;
}
.container .box:hover .icon{
  top:20px;
  left:calc(50% - 40px);
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
.container .box .icon .fa{
  position: absolute;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  font-size: 57px;
  transition: 0.5s;
  color: #ffff;
  font-style: oblique;

}
.container .box:hover .fa{
font-size:40px;
font-style: oblique;

}
.container .box .content{
  position: absolute;
  top:100%;
  height: calc(100% - 100%);
  text-align: center;
  padding: 20px;
  box-sizing: border-box;
  transition: 0.5s;
  opacity:0;
}
.container .box .content{
  top:98px;
  opacity: 1;
}
.container .box .content h3{
  margin:0 0 10px;
  padding: 0;
  color: rgb(95, 110, 95);
  font-size: 24px;
  font-style: oblique;
  font-family: 'Open Sans', sans-serif;


}
.container .box .content p{
  margin:0;
  padding: 0;
  color: rgb(95, 110, 95);
  font-family: 'Open Sans', sans-serif;
  font-size: 13.9px;
  font-style: oblique;

}
a{
text-decoration: none;
font-weight: 500;
font-size: 0.9rem;
padding:8px;
color: rgb(126, 189, 124);

 } 

/* section{
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
}  */

</style>
