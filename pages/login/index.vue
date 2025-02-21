<template>
    <div class="container-fluid p-0 mb-0">

        <div class="text-center p-5">
            <h2>Silahkan login, <b>Admin</b></h2>
        </div>

        <div class="row justify-content-center m-0">
            <div class="col-8 col-md-7 col-lg-4">
                <div class="card rounded-4 shadow">
                    <div class="card-body m-3">
                        <div class="text-center">
                            <img src="~/assets/img/logo.png" alt="logo" class="logo">
                            <h3 class="mt-4 fw-medium">CABAPUS</h3>
                            <p>Catatan Barang Perpustakaan Universitas Siliwangi</p>
                        </div>
                        <form>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1">
                            </div>
                            <div class="text-center mt-5">
                              <nuxt-link to="/dashboard">
                                <button type="submit" class="btn rounded-5">Login</button>
                              </nuxt-link>
                            </div>
                        </form> 
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kavoon&family=Miltonian+Tattoo&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Red+Rose:wght@300..700&display=swap');


.container-fluid {
    background: url("~/assets/img/background.jpg") no-repeat center center;
    background-size: cover;
    height: 120vh; /* Full viewport height */
}


h3, .text-center, label {
    font-family: "Josefin Sans", serif;
}

h2 {
    background-color: #9AA6B280;
    width: 50%;
    margin: auto;
    color: #fff;

}

.btn {
    width: 15rem;
    color: #fff;
    background-color: #9AA6B2;
}

.card {
    background-color: #ffffff99;
    border: 3px solid #ffff;
}

img {
    width: 5rem;
}


@media only screen and (max-width: 600px) {
  .logo {
    width: 3rem;
    height: 3rem;
    margin-top: 0 !important;
  }

  h2 {
    font-size: 1.2rem;
  }

  h3 {
    font-size: 1rem;
  }

  p {
    font-size: 0.7rem;
  }

  label {
    font-size: 0.8rem;
  }

  .btn {
    padding-top: 0.4rem;
    width: 7rem;
    height: 1.7rem;
    font-size: 0.7rem;
  }
  
  .login {
    margin-top: 2rem;
  }

  .form-control {
    height: 1.5rem;
  }
}

@media only screen and (min-width: 600px) and (max-width: 890px) {
  .container-fluid {
    background-size: cover;
    height: 100vh; /* Full viewport height */
}
}

</style>