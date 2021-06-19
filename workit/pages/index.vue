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
        <img class="service" src="../img/imagenes/DiseñoLogo.jpg" alt="">
        <img class="service" src="../img/imagenes/Edicion.jpg" alt="">
        <img class="service" src="../img/imagenes/Clase.jpg" alt="">
        <img class="service" src="../img/imagenes/Construccion.jpg" alt="">
      </div>

    </div>


  </div>
</template>


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

  .categories-options {
    
  }

  .title-section {
    width: 100%;
    height: 550px;
    display: flex;
    justify-content: center;
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
</style>

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
          path : '/diseñoGrafico/usuarios'
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
    }
  }

</script>
