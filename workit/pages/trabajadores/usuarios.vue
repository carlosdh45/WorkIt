<template>
    <div reload()>
        <div v-if="programingusersStatus == 'loading'"><h1>Loading</h1></div>
        <div v-if="programingusersStatus == 'success'">
            
            <div>
                <b-navbar toggleable="lg" type="dark" variant="" style="background: hsla(211, 58%, 33%, 0.714)">
                    <b-navbar-brand href="#"><img @click="goToHome()" width="130px" height="50px"
                            src="../../img/imagenes/Logo.svg" alt=""></b-navbar-brand>

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
                                <b-dropdown-item @click="goToLogin">Profile</b-dropdown-item>
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


            <div class="service-box-container">
                <div class="user-services">
                    
                    <div class="card-container"  v-if="newusersStatus">
                        <div class="card-user-service" v-for="(item ) in  newusers" :key="item.name">
                            <div class="img-service">
                                <img src="../../img/imagenes/imgPerfil.png" alt="">
                            </div>
                            <div class="nameUser-Card">
                                <p class="nameInCard">{{item.name}}</p>
                                <b-button @click="goToPlans()" pill variant="outline-secondary">Contactar</b-button>
                            </div>
                            <div style="margin-left:5%">
                                <p class="nameInCard">Edad: {{item.age}}</p>
                                <p class="nameInCard">Experiencia: {{item.experience}}</p>
                                <p class="nameInCard">Calificacion: {{item.score}} de 5</p>
                                <p class="nameInCard">Calificacion: {{item.skills}} de 5</p>

                                
                            </div>
                        </div>

                    </div>


                    <div class="card-container">
                        <h3 class="title-services">Trabajadores de Programacion</h3>
                        <div class="card-user-service" v-for="(item ) in  designusers" :key="item.name">
                            <div class="img-service">
                                <img src="../../img/imagenes/imgPerfil.png" alt="">
                            </div>
                            <div class="nameUser-Card">
                                <p class="nameInCard">{{item.name}}</p>
                                <b-button @click="goToPlans()" pill variant="outline-secondary">Contactar</b-button>
                            </div>
                            <div style="margin-left:5%">
                                <p class="nameInCard">Edad: {{item.age}}</p>
                                <p class="nameInCard">Experiencia: {{item.experience}}</p>
                                <p class="nameInCard">Calificacion: {{item.score}} de 5</p>

                                <ul style="margin:10px">Habilidades:
                                    <li v-for="skill in item.skills" :key="skill"> {{skill}}</li>
                                </ul>
                            </div>
                        </div>

                    </div>


                    <div class="card-container">
                        <h3 class="title-services">Trabajadores de Diseño Grafico</h3>
                        <div class="card-user-service" v-for="(item ) in  designusers" :key="item.name">
                            <div class="img-service">
                                <img src="../../img/imagenes/imgPerfil.png" alt="">
                            </div>
                            <div class="nameUser-Card">
                                <p class="nameInCard">{{item.name}}</p>
                                <b-button @click="goToPlans()" pill variant="outline-secondary">Contactar</b-button>
                            </div>
                            <div style="margin-left:5%">
                                <p class="nameInCard">Edad: {{item.age}}</p>
                                <p class="nameInCard">Experiencia: {{item.experience}}</p>
                                <p class="nameInCard">Calificacion: {{item.score}} de 5</p>

                                <ul style="margin:10px">Habilidades:
                                    <li v-for="skill in item.skills" :key="skill"> {{skill}}</li>
                                </ul>
                            </div>
                        </div>

                    </div>


                    <div class="card-container">
                        <h3 class="title-services">Trabajadores de Call center</h3>
                        <div class="card-user-service" v-for="(item ) in  callusers" :key="item.name">
                            <div class="img-service">
                                <img src="../../img/imagenes/imgPerfil.png" alt="">
                            </div>
                            <div class="nameUser-Card">
                                <p class="nameInCard">{{item.name}}</p>
                                <b-button @click="goToPlans()" pill variant="outline-secondary">Contactar</b-button>
                            </div>
                            <div style="margin-left:5%">
                                <p class="nameInCard">Edad: {{item.age}}</p>
                                <p class="nameInCard">Experiencia: {{item.experience}}</p>
                                <p class="nameInCard">Calificacion: {{item.score}} de 5</p>

                                <ul style="margin:10px">Habilidades:
                                    <li v-for="skill in item.skills" :key="skill"> {{skill}}</li>
                                </ul>
                            </div>
                        </div>

                    </div>


                    <div class="card-container">
                        <h3 class="title-services">Trabajadores de Marketing</h3>
                        <div class="card-user-service" v-for="(item ) in  marketingusers" :key="item.name">
                            <div class="img-service">
                                <img src="../../img/imagenes/imgPerfil.png" alt="">
                            </div>
                            <div class="nameUser-Card">
                                <p class="nameInCard">{{item.name}}</p>
                                <b-button @click="goToPlans()" pill variant="outline-secondary">Contactar</b-button>
                            </div>
                            <div style="margin-left:5%">
                                <p class="nameInCard">Edad: {{item.age}}</p>
                                <p class="nameInCard">Experiencia: {{item.experience}}</p>
                                <p class="nameInCard">Calificacion: {{item.score}} de 5</p>

                                <ul style="margin:10px">Habilidades:
                                    <li v-for="skill in item.skills" :key="skill"> {{skill}}</li>
                                </ul>
                            </div>
                        </div>

                    </div>


                    

                </div>
                <div></div>
            </div>

        </div>

    </div>
</template>



<script>
    import {
        mapGetters,
        mapActions
    } from 'vuex'

    export default {
        data() {
            return {
    
            }
        },
        computed: {
            ...mapGetters({
                programingusers: 'profile/getProgramingUsers',
                programingusersStatus: 'profile/getProgramingStatus',
                marketingusers: 'profile/getMarketingUsers',
                marketingusersStatus: 'profile/getMarketingStatus',
                designusers: 'profile/getDesignUsers',
                designusersStatus: 'profile/getDesignUsersStatus',
                callusers: 'profile/getCallUsers',
                callusersStatus: 'profile/getCallStatus',
                newusers: 'profile/getNewUsers',
                newusersStatus: 'profile/getNewStatus'

            }),
        },
        methods: {
            ...mapActions({
                programingProfilesRq: 'profile/programingProfilesRq',
                marketingProfilesRq: 'profile/marketingProfilesRq',
                designProfilesRq: 'profile/designProfilesRq',
                callProfilesRq: 'profile/callProfilesRq',
                newProfilesRq: 'profile/newProfilesRq',

            }),
            reload(){
                location.reload();
            },
            goToPlans() {
                this.$router.push({
                    path: '/plans'
                })
            },
            goToHome() {
                this.$router.push({
                    path: '/'
                })
            },
            goToLogin() {
                this.$router.push({
                    path: '/login'
                })
            },
            goToRegister() {
                this.$router.push({
                    path: '/registro'
                })
            },
            goToDesign() {
                this.$router.push({
                    path: '/diseñoGrafico/usuarios'
                })
            },
            goToPrograming() {
                this.$router.push({
                    path: '/programacion/usuarios'
                })
            },
            goToMarketing() {
                this.$router.push({
                    path: '/marketing/usuarios'
                })
            },
            goToCall() {
                this.$router.push({
                    path: '/callCenter/usuarios'
                })
            },
        },

        mounted() {
            this.programingProfilesRq()
                .then(res => res),

            this.callProfilesRq()
                .then(res => res),

            this.designProfilesRq()
                .then(res => res),

            this.marketingProfilesRq()
                .then(res => res),

            this.newProfilesRq()
                .then(res => res)
            
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




    .service-box-container {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: center;
        align-items: center;
    }

    .title-services {
        width: 100%;
        text-align: left;
        margin: 10px;
        margin: 10px 10px 10px 10%;
    }

    .user-services {
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: center;
        align-items: center;

    }

    .card-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-content: center;
        overflow: y;
        flex-wrap: wrap;
        width: 100%;
    }

    .card-user-service {
        width: 280px;
        height: 450px;
        border: black 2px solid;
        border-radius: 20px;
        margin: 10px;
    }

    .img-service {
        width: 100%;
        border: black 1px solid;
        border-radius: 15px;
        height: 40%;
        display: flex;
        justify-content: center;
        align-content: center;
        margin: 0;

    }


    .circle {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background: chocolate;
    }

    .nameUser-Card {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: center;
        align-content: center;
        margin: 10px 0 10px 0;

    }

    .nameInCard {
        font-size: 15px;
        margin: 0;
        text-align: left;
        width: 60%;
        padding-top: 1%;
        height: auto;

    }

    .services-options {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40%;
        flex-direction: column;

    }

    .services-options hr {
        width: 100%;
        height: 1px;
        background: black;


    }

    .user-abilities {
        font-weight: 14px;
        text-align: center;
        width: 100%;
        height: 30%;
    }

    .rating {
        height: 20%;
    }



    @media only screen and(max-width: 600px) {
        .categories {
            margin: 15%;

        }
    }
</style>