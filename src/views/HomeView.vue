<template>
  <div class="home">
    <div>
      <b-carousel
        id="carousel-fade"
        style="text-shadow: 0px 0px 2px #000"
        fade
        indicators
        img-width="1024"
        img-height="480"
      >
        <b-carousel-slide
          img-src="https://www.informatics.buu.ac.th/2020/wp-content/uploads/2019/04/620413_banner-songkran.jpg"
        ></b-carousel-slide>
        <b-carousel-slide
          img-src="https://www.informatics.buu.ac.th/2020/wp-content/uploads/2022/03/covid.png"
        ></b-carousel-slide>
        <b-carousel-slide
          img-src="https://www.informatics.buu.ac.th/2020/wp-content/uploads/2021/11/corona-web.png"
        ></b-carousel-slide>
      </b-carousel>

      <h1>
        วิสัยทัศน์“คณะหนึ่งในห้าของประเทศที่มุ่งสร้างอารยะบัณฑิตด้านเทคโนโลยีดิจิทัลและระบบอัจฉริยะเพื่อขับเคลื่อน
        EEC และภาคตะวันออก”
      </h1>
      <center class="mb-3">
        <img
          class="mr-5"
          src="https://www.informatics.buu.ac.th/2020/wp-content/uploads/2020/09/head-1.jpg"
          alt=""
        />
      </center>
      <center>
        <img
          src="https://www.informatics.buu.ac.th/2020/wp-content/uploads/2020/06/QRCode-01-768x543.jpg"
          alt=""
        />
      </center>
    </div>
    <footer
      class="text-center text-white fixed-bottom"
      style="background-color: rgba(214, 181, 86, 0.3)"
    >
      <!-- Grid container -->
      <div class="container p-4"></div>
      <!-- Grid container -->

      <!-- Copyright -->
      <div class="text-center p-3" style="font-size: 20px">
        CADS developer:
        <a class="text-white" href="https://mdbootstrap.com/">CADS.com</a>
      </div>
      <!-- Copyright -->
    </footer>
  </div>
</template>

<script>
export default {}
</script>

<style>
.home {
  padding: 50px 0px 50px 0px;
}
</style>
