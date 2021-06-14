<template>
    <div>
        <div>
            <b-navbar toggleable="lg" type="dark" variant="" style="background: hsla(211, 58%, 33%, 0.714)">
                <b-navbar-brand href="#">Workit</b-navbar-brand>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                <b-collapse id="nav-collapse" is-nav>
                    <!-- Right aligned nav items -->
                    <b-navbar-nav class="ml-auto">
                        <b-nav-form>
                            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                        </b-nav-form>

                        <b-nav-item-dropdown text="Lang" right>
                            <b-dropdown-item href="#">EN</b-dropdown-item>
                            <b-dropdown-item href="#">ES</b-dropdown-item>
                            <b-dropdown-item href="#">RU</b-dropdown-item>
                            <b-dropdown-item href="#">FA</b-dropdown-item>
                        </b-nav-item-dropdown>

                        <b-nav-item-dropdown right>
                            <!-- Using 'button-content' slot -->
                            <template #button-content>
                                <em>User</em>
                            </template>
                        </b-nav-item-dropdown>
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>

            <div class="categories">
                <h4 style="margin-left:2%; margin-right:2%">Categorias Populares:</h4>
                <div class="categories-options">
                    <b-button pill variant="outline-secondary">Diseño Grafico</b-button>
                    <b-button pill variant="outline-secondary">Edicion de Video</b-button>
                    <b-button pill variant="outline-secondary">Educacion</b-button>
                    <b-button pill variant="outline-secondary">Contruccion</b-button>
                    <b-button pill variant="outline-secondary">Musica y Audio</b-button>
                </div>
            </div>

            <hr>
        </div>

        <div class="service-box-container">
            <div class="user-services">
                <h3 class="title-services">Servicios de "Nombre del usuario" </h3>
                <div class="card-container">
                    <div class="card-user-service" v-for="(item ) in  profile" :key="item">
                       <div class="img-service">
                           <img src="../img/imagenes/DiseñoLogo.jpg" alt="">
                       </div>
                       <div class="nameUser-Card">
                           <div class="circle">
                           </div>
                           <p class="nameInCard">{{item.name}}</p>
                       </div>

                        <div class="services-options">
                            <p class="user-abilities">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, molestias?</p>
                            <hr>
                           
                        </div>
                        
                        
                        

                        <!-- <div class="rating">
                            <img src="" alt="">
                            <h3>5.0</h3>

                            <div>
                                <h4>Precio: $10</h4>
                            </div>
                        </div> -->

                    </div>
                    
                </div>
                
            </div>
            <div></div>
        </div>

        
            {{profile[1].name}}

    </div>
</template>



<script>
import { mapGetters , mapActions } from 'vuex'

export default {
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters({
      profile: 'profile/getProfileDetail',
      categories: 'home/getcategories'
    }),
  },
  methods: {
    ...mapActions({
      profileFB: 'profile/profileRq',
      categoriesRq: 'home/categoriesRq'
    }),
  
  },

  mounted() {
    this.profileFB()
    .then(res=>res)
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
    flex-wrap: wrap;

  }

  

  .categories-options {
    
  }

  .service-box-container{
      display: flex;
      flex-direction: row;
      width: 100%;
  }

  .title-services{
      width: 100%;
      text-align: left;
      margin: 10px;
      margin: 10px 10px 10px 10% ;
  }

  .user-services{
      display: flex;
      flex-direction: column;
      width: 70%;
      justify-content: center;
      align-items: center;
     
  }

  .card-container{
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-content: center;
      overflow: y;
      flex-wrap: wrap;
  }

  .card-user-service{
      width: 280px;
      height: 350px;
      border: black 2px solid;
      border-radius: 20px;
      margin: 10px;
  }

  .img-service{
      width: 100%;
      border: black 1px solid;
      border-radius: 15px;
      height: 40%;
      display: flex;
      justify-content: center;
      align-content: center;
      margin: 0;
      
  }


  .circle{
      width: 30px;
      height: 30px;
      border-radius:50% ;
      background: chocolate;
  }

  .nameUser-Card{
      display: flex;
      flex-direction: row;
      width: 100%;
      justify-content: space-around;
      align-content: center;
      margin: 10px 0 10px 0;
      
  }

  .nameInCard{
      font-size: 15px;
      margin: 0;
      text-align: left;
      width: 60%;
      padding-top: 1% ;
      height: auto;
     
  }

  .services-options{
      display: flex;
      justify-content: center;
      align-items: center ;
      height: 40%;
      flex-direction: column ;
      
  }

  .services-options hr{
      width : 100%;
      height: 1px;
      background: black;


  }
  .user-abilities{
      font-weight: 14px;
      text-align: center;
      width: 100%;
      height: 30%;
  }

  .rating{
      height: 20%;
  }



  @media only screen and( max-width: 600px){
       .categories {
            margin: 15%;

        }
  }
</style>



