<template>
  <div>
    <div class="login-page">
      <div class="login-form">
        <img class="login-logo" src="../img/imagenes/Logo.png" alt="">
        <h3>Ingresa un trabajo</h3>

        <form class="form-box" @submit.prevent="postdata">
          <b-form-input style="width:100%" class="login-input" type="text" placeholder="Nombre" v-model="name"></b-form-input>
          <b-form-input style="width:100%" class="login-input" type="text" placeholder="Sueldo" v-model="payment"></b-form-input>
          <b-form-input style="width:100%" class="login-input" type="text" placeholder="Tipo" v-model="type"></b-form-input>
          <b-form-input style="width:100%" class="login-input" type="text" placeholder="Experiencia" v-model="experience"></b-form-input>
          <b-form-input style="width:100%; height:100px"  type="text" placeholder="Responsabilidades" v-model="skills"></b-form-input>
          <b-button style="margin-top:5%" pill variant="primary" @click="goToHome()" type="submit">Registrar Trabajo</b-button>
        </form>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        name: "",
        address: "",
        trabajos: ""
      }
    },
    methods: {
      postdata() {
        try {
          this.$fire.firestore.collection("services").
          doc("newJobs").set({
            trabajos: {
              name: this.name,
              payment: this.payment,
              type: this.type,
              experience: this.experience,
              skills: this.skills,
            }
          })
        } catch (err) {
          console.log(err)
        }

      },
      goToHome() {
        this.$router.push({
          path: '/'
        })
      },
    }
  }
</script>




<style>
  .login-page {
    display: flex;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;

  }

  .login-form {
    width: 500px;
    height: 700px;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-style: solid;
    border-color: #c9c9c9;
  }

  .form-box{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .login-logo {
    width: 150px;
    height: 80px;
  }

  .login-input {
    border-radius: 25px;
    width: 40%;
    margin: 10px;


  }

  .box-1 {
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
</style>