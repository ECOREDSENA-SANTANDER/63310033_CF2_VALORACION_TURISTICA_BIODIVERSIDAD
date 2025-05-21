<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.fondo1.align-items-center.p-2.mb-0(data-aos="fade-down")
      .col-lg-12.px-lg-5.px-4.mb-0

        .row.justify-content-center.align-items-center.mb-4.my-5
          .col-lg-4.col-7.col-md-6
            img(src='@/assets/curso/intro/1.svg' alt="")
          .col-lg-8
            .bg1.p-4
              p.mb-4.my-0.my-lg-4(data-aos="fade-left") La protección y conservación del medio ambiente se ha consolidado como una prioridad en las agendas de desarrollo de gobiernos y organismos internacionales, al reconocer que el bienestar de las sociedades está estrechamente ligado al estado de la biodiversidad. En respuesta a esta realidad, Colombia ha avanzado en la creación de un marco normativo robusto y en la implementación de mecanismos institucionales que orientan y fortalecen las políticas de conservación.
              p.mb-0.mb-lg-4(data-aos="fade-left") Este componente formativo presenta los fundamentos normativos y el funcionamiento del Sistema Nacional de Áreas Protegidas (SINAP), como elementos clave para comprender la estrategia nacional de conservación de la biodiversidad y su articulación con el desarrollo sostenible del país.
        
        .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")        
          .col-lg-12
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
            figcaption Video. 

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
