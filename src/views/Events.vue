<template>
  <div class="event">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Lusitana:wght@700&display=swap" rel="stylesheet">
    <div class="text">
    <h1>Tidigare Evenemang</h1>
    <link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@1,300;1,400&display=swap" rel="stylesheet">

    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Text:ital@1&display=swap" rel="stylesheet">
    <h3>Här samlar vi information om våra tidigare evenemang inom projektet Akvaponi i Roslagen.</h3>
    <h4>Föreläsningar och annat material kan laddas ned via länkar under respektive rubrik.</h4>
    </div>
    <link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Merriweather:ital@1&display=swap" rel="stylesheet">
    <section class="web">
      <img src="../assets/3.jpg" class="bild" alt="">
      <h5>Webinar med University of Liege on Zoom:</h5>
    <p> "Smart Aquaponics and the GROOF project" <br> Passcode: ZxLF?Y0 </p>
      </section>
    <section class="webi">
      <img src="../assets/Sallad.jpg" class="bild" alt="">
      <h5>Webinar med Svensk Aquaponik on Zoom:</h5>
    <p> "Grundläggande kriterier för att designa ett akvaponiskt system" <br> Passcode: dYnqgg&6 </p>
      </section>
    <section class="webin">
      <img src="../assets/19.jpg" class="bild" alt="">
      <h5>Webinar med Peckas Naturodlingar on Zoom:</h5>
    <p>  "Industrial aquaponics" <br> Passcode: =%X%1&kT</p>
      </section>
      

      <section class="thom">
        <img src="../assets/vatten.jpg" class="akva" alt="">
        <h3>2020-02-27: Avancerad workshop om akvaponi</h3>
      <p>Föreläsning: <br> Thomas Bjelkeman-Pettersson från Johannas Stadsodlingar 
         pratar om hur man kan designa ett akvaponiskt system</p>
         </section>

      <h3>2019-12-05: Kick-off workshop för Akvaponi i Roslagen</h3>
      <section class="don">
        <img src="../assets/13.jpg" class="aqua" alt="">
      <p>Förläsning 1: <br> Donatella Acquaviva – <br> Introduktion till WS & Akvaponi i Roslagen </p>
      </section>
      <section class="bjorn">
        <img src="../assets/17.jpg" class="aqua" alt="">
      <p> Förläsning 2: <br> Björn Oliviusson <br> (Ej tillgänglig för nedladdning <br> pga.upphovsrättsskyddat material) </p>
      </section>
      <section class="torb">
        <img src="../assets/4.jpg" class="aqua" alt="">
      <p> Förläsning 3: <br> Torbjörn Frisö, <br> Gröna Solberga</p>
      </section>
      <section class="jon">
        <img src="../assets/5.jpg" class="aqua" alt="">
      <p> Förläsning 4: <br> Jonathan Alm, <br> Demoanläggning Vattencentrum</p>
      </section>
         

  </div>
</template>

<script>
export default {
name: 'event',
}
</script>

<style scoped>
.text{
background-image: url(../assets/back1.jpeg);
height: 100%;
border-radius: 5px;
color: white;
padding:0.5px;
text-align: center;

}
h1{
font-family: 'Lusitana', serif;
margin-left:1rem;
margin-top:3rem;

}
h3{
margin-left:1rem;
font-family: 'DM Serif Text', serif;
font-weight: 1;
letter-spacing: 1px;
}
h4{
margin-left:1rem;
font-family: 'DM Serif Text', serif;
font-weight: 1;
font-size: 1.2rem;
letter-spacing: 1px;
}
h5{
  font-family: 'Merriweather', serif;
}
.bild{
height: 20rem;
width: 21rem;
margin:2rem; 
}
section{
box-sizing: border-box;
display:inline-block;
/* margin:1rem; */
text-align: center;
padding: 4px;
}
.aqua{
height: 15rem;
width: 15rem;
margin:1.9rem;

}
.akva{
height: 30rem;
width: 60rem;
margin-left:8.5rem;
}
p{
  text-align: center;
  color: black;
  display: flex;
  height: 20px;
  align-items: center;
  justify-content: center;
  padding-top:0.6rem;
  letter-spacing: 0.5px;
  padding-bottom:3rem;
  font-family: 'Merriweather', serif;
  font-size: 0.8rem;

}
</style>