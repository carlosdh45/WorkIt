<template>
    <div>   

        <div class="login-page">
            <div class="login-form">
                <img class="login-logo" src="../img/imagenes/Logo.png" alt="">
                <h3>Bienvenido</h3>
                <b-form-input class="login-input" id="input-1" type="email" placeholder="Correo Electronica "></b-form-input>
                <b-form-input class="login-input" id="input-1" type="email" placeholder="Contraseña"></b-form-input>
                <a href=""></a>
                <b-button pill variant="primary">Siguiente</b-button>
                <h6></h6>
                <a href=""></a>
            </div>
        </div>






    </div>
</template>




<style >
.login-page{
    display: flex;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center ;
    
}

.login-form{
    width: 500px;
    height: 700px;
    border-radius: 30px ;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-style: solid;
    border-color: #c9c9c9;
}

.login-logo{
    width: 150px;
    height: 80px;
}

.login-input{
    border-radius: 25px;
    width: 40%;
    margin: 10px;
   
    
}
</style>
