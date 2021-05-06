<template>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@1,300&display=swap" rel="stylesheet">
  <div class="about">
    <div class="utveckling">
    <h1>-- About Utvecklingentrum För Vatten --</h1>
    <h3>Utvecklingscentrum för vatten är en verksamhet under Campus Roslagen AB med
      målet att sammanställa, utveckla och sprida kunskap samt stödja forskning och 
      innovation om vatten och hjälpa till att lösa vattenutmaningar i vår kommun.
      Vi gör det genom att erbjuda kunskapsutveckling på olika sätt, genom utbildning
      och medverkan i projekt och genom neutral vatten och avloppsrådgivning till 
      privatpersoner. Tveka inte att kontakta oss om du har några frågor eller en idé
      om något som rör vatten. <br>
     | Epost: info@vattencentrum.se | Telefon: 0176 - 28 61 00 | Besöksadress: Kaserngatan 11, Norrtälje |</h3>
      </div>

      <!-- <h3>Vår vision är att skapa ett kunskapscentrum för arbetet med vatten från källa till mottagare, 
      med fokus på känsliga vattenmiljöer.</h3>
      <p>UCV står för Utvecklingscentrum för vatten. Vi är en verksamhet under Campus Roslagen som bland annat
        erbjuder kunskapsutveckling på olika sätt, driver och medverkar i projekt samt erbjuder VA-rådgivning
        till privatpersoner. Tveka inte att kontakta oss om du har några frågor eller en idé om något som rör vatten.</p> -->

      <!-- <section class="utbildning">
        <h2>Inventering av utbildningar inom akvaponi</h2>
        <h3>Utvecklingscentrum för vatten har gjort en inventering av 
          utbildningar och kurser inom akvaponi, främst på eftergymnasial nivå</h3>
          <p>Inom projektet ”Akvaponi i Roslagen” har Utvecklingscentrum för Vatten
             tagit fram ett dokument med aktuella utbildningar inom akvaponi, både svenska och utländska.
             Dokumentet hittar du här: ”Akvaponi i Roslagen”- användbart material</p>
      </section> -->

      <!-- <section class="natur">
        <h2>Roslagens naturvårdspris 2020</h2>
        <h3>Utvecklingscentrum för Vattens Amelia Morey Strömberg är
           nominerad till Roslagens naturvårdspris 2020</h3>
          <p>”För sitt stora engagemang när det gäller dricksvatten och avlopp, 
            såväl strategiska frågor som stora och små utbyggnadsprojekt” lyder motiveringen. 
            Vi är väldigt stolta över Amelia och hennes outtröttliga och inspirerande arbete med vattenfrågor!

            Priset delas ut av Norrtelje Tidning och Roslagens naturskyddsförening.

            Här kan du läsa mer: Artikel i Norrtelje Tidning</p>
      </section> -->

      <section class="vilka">
        <h2>Vilka är vi?</h2>
        <h3>Det vi vill göra är att samla sammanställa och sprida kunskap om vatten utifrån 
          ett centrum och genom det skapa kompetens, innovation och företagande.</h3>
          <p>Utifrån Norrtälje kommuns unika situation med många fritidshus,
             nära till Stockholm och som en port till Östersjön formuleras utmaningar
             relaterade till vatten. Vattenförvaltningsbrist, näringsläckage till Östersjön 
             och permanentning av fritidshus driver behovet av lösningar. Ett sätt att skapa 
             dessa lösningar är att bygga ett kunskapscentrum, vilket är det vi jobbar med.
             Syftet är att attrahera kunskapsintensiva företag som kan introducera innovationer 
             som löser lokala och globala vattenproblem med fokus i lokala problemformuleringar. 
             Vi vill även kunna hjälpa till att skapa fler företag av denna typ. Hos oss ska även
             privatpersoner kunna vända sig för att få råd och kunskap om vatten och avlopp. 
             I samarbete med kommuner och andra organisationer initierar och genomför vi strategiska
             projekt där vi också bjuder in akademin för att utveckla kunskap utifrån ett vetenskapligt synsätt. 
             Vi vill även samla den svenska och internationella kompetensen inom vattenfrågor genom aktivt 
             deltagande och samspel mellan lokala, regionala, nationella och internationella aktörer inom näringsliv,
             forskning och samhälle.</p>
      </section>

        <section class="plats">
           <h2>Platsen Vattencentrum Roslagen</h2>
           <h4>Den fysiska platsen för verksamheter inom vatten.</h4>
           <p> Du hittar oss på Kaserngatan 11 i Norrtälje, här erbjuder vi bland annat <br>
             kvalificerad och neutral rådgivning om lösningar för dina dricksvatten <br>
             och avloppsfrågor. I samma hus hittar du även utställningen Vattenexpo <br>
             där vi även kan visa olika typer av lösningar för hus och båt.</p>
        </section>

      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8039.589358292423!2d18.6748426!3d59.7511521!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8ecae5694acf1405!2sVatteninfo%20AB!5e0!3m2!1sen!2sse!4v1611570061897!5m2!1sen!2sse"
        width="600" 
        height="280"
        frameborder="0"
        style="border:0;"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"></iframe>

        

           <section class="oppet">
        <h2>Öppettider</h2>
        <p>Ordinarie öppettider: <br> <br>
           Måndag - Fredag: 10.00 - 16.00 <br> <br>
           Lunchstängt: 12.00 - 13.00 <br> <br>
           Lördag & Söndag: Stängt</p>
      </section>



  </div>
</template>

<script>
export default {
  name: 'About',
}
</script>

<style scoped>
.about{
  text-align: center;
  background-image: url(../assets/green.jpg);
  background-repeat: no-repeat ;
  background-position: center;
  background-size: cover;
  margin-top:-10px;
  padding:10px;
  font-style: oblique;
    font-family: 'Open Sans', sans-serif;


}
.vilka{
  margin:15px;
  padding:10px;
  font-style: oblique;
  font-size: 16px;
  letter-spacing: 0.5px;
    font-family: 'Open Sans', sans-serif;

}
.plats{
padding:20px;
float:left;
margin-top:100px;
font-style: oblique;
font-size: 16.3px;
background-color: #ffffff;
opacity: 0.7;
border-radius: 10px;
height: 100%;
width: 500px;
margin-left: 20px;
}
iframe{
  margin-top:100px;
  border-radius: 5px;
}
.oppet{
  margin-top:50px;
  font-size: 17px;

}
</style>