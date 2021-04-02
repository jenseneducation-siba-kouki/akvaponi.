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
            <h3>Utväkling Centrum</h3>
            <p>Utvecklingscentrum för vatten (UCV) är en avdelning av Campus Roslagen AB, ett kommunalt företag i Norrtälje.
               Vi leder och deltar i forsknings- och innovationsprojekt som tar itu med centrala vattenrelaterade utmaningar i Norrtälje,
                såsom grundvattenkvalitet och tillgänglighet och eutrofiering. UCV tillhandahåller också utbildning och 
                kompetensutveckling genom olika aktiviteter, såsom kommunal rådgivning (VA-rådgivning), kurser för entreprenörer, 
                öppet hus och informationsdagar för allmänheten (vattendagarna), workshops och nätverk både för offentliga och för
                 privata aktörer.
                 <router-link to="/About" > <br> Läs mer --></router-link>
                   </p> 
          </div>

        </div>
         <div class="box">
          <div class="icon">
            <i class="fa fa-envira" aria-hidden="true"></i>
          </div>
          <div class="content">
            <h3>Akvaponi Projekt</h3>
            <p>Akvaponi i Roslagen finansieras av Jordbruksverket och LEADER Stockholmsbygd. Projektet bidrar 
       med information om akvaponik, en cirkulär jordbruksmetod som gör det möjligt att spara vatten och ta 
        vara på näringsämnen genom att kombinera vattenbruk och hydroponi, och som kan främja övergången till 
         mer hållbara system för livsmedelsproduktion. Målet är att fler företag och andra aktörer på 
        landsbygden (ekonomiska föreningar, bygdebolag odyl) skall ta till sig idén om att odla i slutet
        system, för att ges möjlighet att växa, diversifiera sin näring, bidra till ett långsiktigt hållbart
        samhälle som inte gör åverkan på miljön samt odling för eget bruk. Projektet vill även ge barn och unga
        möjlighet att lära sig mer om kretslopp, vattnet som resurs och hur man framställer livsmedel på ett hållbart sätt.
        <router-link to="/Project" > <br> Läs mer --></router-link></p>

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
.container{
  position: relative;
  width: 1200px;
  height: 420px;
  margin:30px auto;
}
.container .box{
  position: relative;
  width: calc(550px - 30px);
  height: calc(420px - 30px);
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
}
.container .box:hover .fa{
font-size:40px;
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
}
.container .box .content p{
  margin:0;
  padding: 0;
  color: rgb(95, 110, 95);
  font-family: 'Playfair Display', serif;
  font-size: 13.9px;
}
a{
text-decoration: none;
font-weight: 500;
font-size: 0.9rem;
padding:8px;
color: rgb(95, 110, 95);
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
