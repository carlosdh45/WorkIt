<template>
    <div reload()>
        <div v-if="usersStatus == 'loading'"><h1>Loading</h1></div>
        <div v-if="usersStatus == 'success'">
            
            <div>
                <b-navbar toggleable="lg" type="dark" variant="" style="background: hsla(211, 58%, 33%, 0.714)">
                    <b-navbar-brand href="#"><img @click="goToHome()" width="130px" height="50px"
                            src="../../img/imagenes/Logo.svg" alt=""></b-navbar-brand>

                    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                    <b-collapse id="nav-collapse" is-nav>
                        <!-- Right aligned nav items -->
                        <b-navbar-nav class="ml-auto">
                            
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

            <div class="service-box-container" v-if="usersStatus = 'loading'">
                <div class="user-services">
                    <h3 class="title-services">Trabajos disponibles! </h3>
                    <h3 class="title-services">Aplica ya! </h3>
                    <div class="card-container">
                        <div class="card-user-service" v-for="(item ) in  users" :key="item.name">
                            
                            <div class="nameUser-Card">
                                 <h1 style="color: red;" class="nameInCard">{{item.name}}</h1>
                                <b-button @click="goToPlans()" pill variant="outline-secondary">Aplicar</b-button>
                            </div>
                            <div style="margin-left:5%">
                                <p class="nameInCard">Pago: {{item.payment}}</p>
                                <p class="nameInCard">Tipo de trabajo: {{item.type}}</p>
                                <p class="nameInCard">Experiencia: Minima de 1 año </p>

                                <ul style="margin:10px">Habilidades:
                                    <li v-for="responsability in item.responsabilities" :key="responsability"> {{responsability}}</li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    <div class="card-container">
                        <div class="card-user-service" v-for="(item ) in  newJobsusers" :key="item.name">
                            
                            <div class="nameUser-Card">
                                <h1 style="color: red;" class="nameInCard">{{item.name}}</h1>
                                <b-button @click="goToPlans()" pill variant="outline-secondary">Aplicar</b-button>
                            </div>
                            <div style="margin-left:5%">
                                <p style="margin-bottom:10px" class="nameInCard">Pago: {{item.payment}}</p>
                                <p style="margin-bottom:10px" class="nameInCard">Tipo de trabajo: {{item.type}}</p>
                                <p style="margin-bottom:10px" class="nameInCard">Experiencia: Minima de 1 año </p>
                                <p style="margin-bottom:10px" class="nameInCard">Requisitos: {{item.skills}} </p>

                                
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
                users: 'profile/getJobsUsers',
                usersStatus: 'profile/getJobsStatus',
                newJobsusers: 'profile/getNewJobsUsers',
                newJobsusersStatus: 'profile/getNewJobsStatus'
            }),
        },
        methods: {
            ...mapActions({
                jobsProfilesRq: 'profile/jobsProfilesRq',
                newJobsProfilesRq: 'profile/newJobsProfilesRq'
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
            this.jobsProfilesRq()
                .then(res => res),

            this.newJobsProfilesRq()
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