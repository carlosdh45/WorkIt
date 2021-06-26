<template>
  <div>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="" style="background: hsla(211, 58%, 33%, 0.714)">
        <b-navbar-brand href="#"><img width="130px" height="50px" src="../img/imagenes/Logo.svg" alt=""></b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <em>User</em>
              </template>
              <b-dropdown-item @click="goToLogin" >Profile</b-dropdown-item>
              <b-dropdown-item @click="goToRegister" href="#">Registro</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>

      <div class="categories">
        <h4 style="margin-left:2%; margin-right:2%">Categorias Populares:</h4>
        <div class="categories-options">
          <b-button @click="goToDesign()" pill variant="outline-secondary">Diseño Grafico</b-button>
          <b-button @click="goToPrograming()" pill variant="outline-secondary">Programacion</b-button>
          <b-button @click="goToMarketing()" pill variant="outline-secondary">Marketing</b-button>
          <b-button @click="goToCall()" pill variant="outline-secondary">Call Center</b-button>
          <b-button @click="goToJobs()" pill variant="outline-secondary">Trabajos disponibles</b-button>
          <b-button @click="goToWorkers()" pill variant="outline-secondary">Trabajadores</b-button>
        </div>
      </div>
      <hr>
    </div>

    <div class="title-section">
      <div class="title-container">
        <h1 class="home-title">Encuentra los servicios independientes ideales para tus necesidades</h1>

        <div class="input-container">
          <b-form-input class="input-search" id="input-1" type="email" placeholder="Busca lo que necesitas ">
          </b-form-input>

          <b-button @click="goToLogin" pill variant="primary">Search</b-button>
        </div>

      </div>
    </div>
    <div class="our-services">
      <h3 class="services-title">Servicios mas Populares</h3>
      <div class="services-container">
        <img class="service" @click="goToDesign" src="../img/imagenes/DiseñoLogo.jpg" alt="">
        <img class="service" src="../img/imagenes/Edicion.jpg" alt="">
        <img class="service" src="../img/imagenes/Clase.jpg" alt="">
        <img class="service" src="../img/imagenes/Construccion.jpg" alt="">
      </div>
    </div>

     <section class="welcome" >
          <h2 class="section__title">Welcome to<span class="color-span" style="margin-left: 10px;">Work It Hn</span></h2>
          <p class="welcome__txt">Our expertise and high end technology with the best software development team, the strength that allows us to reach even the most critical media markets around the world with the best high performance systems</p>
          <a href="" class="welcome__btn">READ MORE</a>
    </section>

    <div class="main-footer">
        <div class="container">
          <div class="column column--50-25">
            <h2 class="footer__title">Workit Hn</h2>
            <p class="footer__txt">The important thing is not your process. The important thing is the process for<span class="color-span"> Improving your process.</span></p>
            <cite class="footer__author">- A brilliant mind</cite>
          </div>
          <div class="column column--50-25">
            <h2 class="footer__title">Tweets</h2>
            <p class="footer__txt"><i class="fab fa-twitter"></i>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accus.</p>
            <a href="" class="footer__link">http//example.com</a>
            <p class="footer__date">About 15 minutes ago</p>
            <p class="footer__txt"><i class="fab fa-twitter"></i>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accus.</p>
            <a href="" class="footer__link">http//example.com</a>
            <p class="footer__date">About 15 minutes ago</p>
          </div>
          <div class="column column--50-25">
            <h2 class="footer__title">Contact</h2>
            <div class="contact-icon">
              <i class="fas fa-map-marker-alt"></i>
              <p class="contact__txt">Work it</p>
            </div>
            <div class="contact-icon">
              <i class="fas fa-phone-alt"></i>
              <p class="contact__txt">+504 31750453</p>
            </div>
            <div class="contact-icon">
              <i class="fas fa-envelope"></i>
              <p class="contact__txt">workithn@gmail.com</p>
            </div>
          </div>
        </div>
          <p class="copy">© 2021 WorkitHn S. de R.L All Rights Reserved | Design by the <span class="color-span">Brightest minds</span></p>
      </div>
  </div>
</template>

<script>
  export default {
    data: () => {

    },
    methods: {
      goToLogin(){
        this.$router.push({
          path : '/login'
        })
      },
      goToRegister(){
        this.$router.push({
          path : '/registro'
        })
      },
      goToDesign(){
        this.$router.push({
           path: '/diseñoGrafico/usuarios',
           
        })

      },
      goToPrograming(){
        this.$router.push({
          path : '/programacion/usuarios'
        })
      },
      goToMarketing(){
        this.$router.push({
          path : '/marketing/usuarios'
        })
      },
      goToCall(){
        this.$router.push({
          path : '/callCenter/usuarios'
        })
      },
      goToJobs(){
        this.$router.push({
          path : '/trabajos/usuarios'
        })
      },
      goToWorkers(){
        this.$router.push({
          path : '/trabajadores/usuarios'
        })
      },
    },
    
  }
</script>


<style>
  .categories {
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: 10px;

  }

  .title-section {
    width: 100%;
    height: 550px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

 h1, h2, h3, h4, h5, h6 {
  font-family: "Bitter";
}
img {
  display: block;
  max-width: 100%;
}
p {
  line-height: 25px;
}
.container--flex{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

  .title-container {
    width: 80%;
    height: 100%;
    background: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


  }

  .home-title {
    text-align: center;
    font-size: 60px;
    width: 80%;
    display: flex;
    justify-content: center;
  }

  .input-container {
    width: 65%;
    display: flex;
    justify-content: space-around;
    margin-top: 2%;
  }

  .input-search {
    border-radius: 30px;
  }

  .our-services{
    width:100%;
    height: 350px;
    background-color: hsla(211, 58%, 33%, 0.714);
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    
  }

  .services-title{
    width: 100%;
    text-align: center;
    color: #ffffff;
    padding-top: 1%;
  }

  .services-container{
    width: 95%;
    display: flex;
    height: 80%;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  .service{
    width: 20%;
    height: 200px;
    margin: 10px;
    
  }

  .service:hover {
  transform: scale(1.1);
}


.welcome{
  text-align: center;
  padding: 20px;
  max-width: 750px;
  margin: auto;
}
.welcome__txt{
  font-size: 1.2em;
  color: #777;
}
.welcome__btn {
  display: block;
  border: 2px solid #EEAD33;
  width: 200px;
  margin: auto;
  padding: 10px;
  text-decoration: none;
  color: #EEAD33;
  font-size: 1.2em;
  font-weight: bold;
  margin-top: 30px;
  transition: all 0.5s;
}
.welcome__btn:hover {
  background: #EEAD33;
  color: white;
}
.container-design {
  margin: 20px 0;
}
.design__item{
  position: relative;
}
.design__item:before {
  content: "";
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.4);
  position: absolute;
  top: 0;
  left: 0;
}
.design__title{
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  color: white;
  font-size: 1.8em;
  width: 100%;
  text-align: center;
}
.design__title:before {
  content: "";
  width: 200px;
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  height: 3px;
  background: #EEAD33;
}
.design__title:after {
  content: "";
  width: 200px;
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
  height: 3px;
  background: #EEAD33;
}

.container-testimonials {
  flex-wrap: wrap;
  max-width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.testimonials{
    width: 550px;
}

.testimonials__img{
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin: auto;
}
.testimonials__txt{
  text-align: center;
  padding: 20px;
}
.testimonials__name{
  text-align: center;
  font-size: 1.2em;
  color: #EEAD33;
  font-weight: bold;
}

.box{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin: 30px 0;
}
.box__content{
  width: 70%;
}
.box__icon{
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  color: #EEAD33;
}
.box__icon:hover{
  color: black;
}
.box__title{
  color: #EEAD33;
  margin: 0;
}
.box__txt {
  color: #999;
}
.newsletter{
  margin: 50px 0;
}
.form{
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  max-width: 600px;
}
.form__mail{
  display: block;
  background: #ddd;
  padding: 15px;
  width: 75%;
  border: none;
  font-size: 1em;
}


.main-footer{
  background: #282828;
  color: #828282;
}
.main-footer .container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.footer__title{
  font-size: 1.8em;
  color: white;
  text-transform: uppercase;
}
.column--50-25 {
  width: 49%;
  padding: 20px;
}
.footer__author{
  text-align: right;
  color: #EEAD33;
  display: block;
}
.footer__txt .fa-twitter{
  color: #3bbef5;
  margin-right: 5px;
}
.footer__link{
  color: #EEAD33;
}
.footer__date{
  font-size: .8em;
  border-bottom: 1px solid #888;
  padding-bottom: 10px;
  color: white;
}
.social-icon{
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.social-icon i {
  margin-right: 10px;
  width: 35px;
  height: 35px;
  text-align: center;
  color: white;
  padding: 10px;
  border-radius: 50%;
  
}
.social-icon .fa-facebook-f{
  background: #3b5998;
}
.social-icon .fa-twitter{
  background: #3bbef5;
}
.social-icon .fa-dribbble{
  background: #f7659b;
}
.social-icon .fa-pinterest{
  background: #e23139;
}

.social__link{
  display: block;
  text-decoration: none;
  color: #828282;
}
.contact-icon{
  display: flex;
  align-items: center;
}
.contact-icon .fas{
  color: white;
  display: block;
  margin-right: 10px;
}
.copy{
  background: #211E1E;
  padding: 20px;
  color: white;
  text-align: center;
  width: 100%;
}

</style>


