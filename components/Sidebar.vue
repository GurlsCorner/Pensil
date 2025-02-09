<template>
    <div class="container-fluid ">
        <div class="offcanvas offcanvas-start show" tabindex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
            <div class="offcanvas-header">
            <!-- <div class="card mt-3" style="width: 18rem;">
                <img src="..." class="card-img-top" alt="img-profile">
                <div class="card-body">
                <h5 class="card-title">Admin</h5>
                </div>
            </div>     -->
            </div>
            <div class="offcanvas-body">
                <div class="menu mt-5">
                    <div class="card m-2">
                    <div class="d-flex m-3 mt-4">
                        <i class="bi bi-card-list"></i>
                        <h4 class="mt-4">Isi Peminjaman</h4>
                    </div>
                    </div>
                    <div class="card m-2 mt-4">
                    <div class="d-flex m-3">
                        <i class="bi bi-clock-history"></i>           
                        <h4 class="mt-4">Riwayat Peminjaman</h4>
                    </div>
                    </div>
                    <div class="card m-2 mt-4">
                    <div class="d-flex m-3">
                        <i class="bi bi-folder-fill"></i>            
                        <h4 class="mt-4">Barang ATK</h4>
                    </div>
                    </div>
                    <div class="card m-2 mt-4">
                    <div class="d-flex m-3">
                        <i class="bi bi-scissors"></i>            
                        <h4 class="mt-4">Barang ART</h4>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card {
  margin: auto;
}

i {
  font-size: 3rem;
}

h4 {
  margin-left: 20px;
}

.menu .d-flex {
  margin-left: 15px;

}
</style>