<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El Sistema Nacional de Áreas Protegidas de Colombia (SINAP) se sustenta en un marco normativo robusto que integra principios internacionales y disposiciones nacionales orientadas a la conservación de la biodiversidad. Esta estructura jurídica y técnica permite articular acciones estratégicas para la protección ambiental, apoyándose en políticas, leyes y sistemas institucionales que garantizan el uso sostenible de los recursos naturales y el respeto por los ecosistemas.
 
    .row.justify-content-center.mb-0
      .col-lg-12.mb-5.bgs.p-5
        img(src="@/assets/curso/sintesis.svg", alt="La síntesis organiza el origen y la aplicación del marco normativo del SINAP. Parte de referentes internacionales como el Informe Brundtland y la Cumbre de Río de Janeiro, adaptados a través de la Constitución de 1991. Esta adaptación se concreta mediante las leyes 99 de 1993 y 165 de 1994. A su vez, se indican dos rutas complementarias: una relacionada con las estrategias de conservación, representadas por políticas nacionales; y otra con los instrumentos de conservación, entre los que se destacan el SINAP y el sistema de parques nacionales.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
