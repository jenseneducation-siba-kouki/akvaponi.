<template>
  <div class="literature">
    <div class="container">
        <h2>Vill du förstå hur ett akvaponiskt system fungerar <br>
            och hur du kan börja att designa ett eget system? <br>
            Här nedan finner du några användbara böcker och länkar 
    </h2>
    </div>  
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

    <section class="book">
      <div class="box">
        <div class="icon">
          <i class="fa fa-book" aria-hidden="true"></i>
        </div>
        <div class="content">
      <p>Link:</p>
      <a class="center" href="http://www.fao.org/3/a-i4021e.pdf">Small-scale aquaponic food production</a>
      </div> 
      </div>

      <div class="box">
        <div class="icon">
        <i class="fa fa-book" aria-hidden="true"></i>
        </div>
        <div class="content">
      <p>Bok: <br> Commercial aquaponic system, <br> Wilson Lennard</p>
      </div>
      </div>

      <div class="box">
        <div class="icon">
        <i class="fa fa-book" aria-hidden="true"></i>
        </div>
        <div class="content">
      <p>Bok: <br> Recirculating Aquaculture, <br> M.B. Timmons, J.M. Ebeling </p>
      </div>
      </div>

      <div class="box">
        <div class="icon">
         <i class="fa fa-book" aria-hidden="true"></i>
        </div>
        <div class="content">
      <p>Bok: <br> Aquaponics food production Systems </p>
      </div>
      </div>

      <div class="box">
        <div class="icon">
         <i class="fa fa-book" aria-hidden="true"></i>
        </div>
        <div class="content">
      <p>Bok: <br> The Aquaponic Farmer- A Complete Guide
                   to Building and Operating a Commercial 
                   Aquaponic System, Sothern & King </p>
        </div>
         </div>

      <div class="box">
        <div class="icon">
         <i class="fa fa-link" aria-hidden="true"></i>
        </div>
        <div class="content">
      <p>Link: <br></p>
      <a href="https://refarmlinne.se/fisk-i-hus/">FISK I HUS</a>
      </div>
      </div>

      <div class="box">
        <div class="icon">
        <i class="fa fa-link" aria-hidden="true"></i>
        </div>
        <div class="content">
      <p>Link:</p>
      <a href="http://www.aquasol.org/uploads/7/0/7/0/70700977/guidelines_for_12_common_aquaponic_plants.pdf">
      Vegetable production guidelines for 12 common aquaponic plants</a>
      </div>
      </div>

      <div class="box">
        <div class="icon">
         <i class="fa fa-link" aria-hidden="true"></i>
        </div>
        <div class="content">
      <p>Link:</p>
      <a href="https://aquaponics.com/">Aquaponics</a>
      </div>
      </div>
     </section>
  </div>
</template>

<script>
export default {
name: 'Literature',
}
</script>

<style scoped>
.container{
  background-image: url(../assets/back41.jpg);
  height: 10rem;
  width: 70rem;
  margin-left:5rem;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  border-radius: 15px;
}
.center{
  text-align: center;
}
h2{
color:black;
text-align: center;
font-size: 1.8rem;
letter-spacing: 1.5px;
background-color: white;
padding-top:2rem;
font-style: oblique;
opacity: 0.6;
width: 70rem;
height: 20.4rem;
  font-family: 'Open Sans', sans-serif;

}
/* section{
box-sizing: border-box;
display:inline-block;
text-align: center;
} */
a{
text-decoration: none;
color: rgb(144, 172, 144);
text-align: center;
font-style: oblique;
font-family: 'Open Sans', sans-serif;
 }

.book{
  position: relative;
  width: 1200px;
  height: 430px;
  margin:40px auto;
}
.book .box{
  position: relative;
  width: calc(300px - 30px);
  height: calc(220px - 30px);
  background: rgb(235, 235, 235);
  float: left;
  margin:20px 15px;
  box-sizing: border-box;
  overflow: hidden;
  border-radius: 15px;
  font-style: oblique;

}
.book .box .icon{
  position: relative;
  top:2%;
  left:40%;
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  transition: 0.5s;
  z-index: 1;
}
.book .icon{
  top:20px;
  left:calc(50% - 40px);
  width: 80px;
  height: 80px;
}
.book .box .icon .fa{
  position: absolute;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  font-size: 57px;
  transition: 0.5s;
  color: rgb(144, 172, 144);
}
.book .box .content .fa{
  position: absolute;
  top:100%;
  height: calc(100% - 100%);
  text-align: center;
  padding: 20px;
  box-sizing: border-box;
  transition: 0.5s;
  opacity:0;
}
.book .box .content p{
  margin:0;
  padding: 0;
  text-align: center;
  font-family: 'Open Sans', sans-serif;
  font-size: 15px;
  font-style: oblique;
  color: rgb(144, 172, 144);
}
</style>