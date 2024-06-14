<template> 
   <HeaderText></HeaderText>
   <Header></Header>
   <SecaoFotos></SecaoFotos>
   <ProcurandoPor></ProcurandoPor>
   <OculosGrau></OculosGrau>
</template>
  
  <script>
import HeaderText from './components/layout/HeaderText.vue';
import Header from './components/layout/Header.vue'
import SecaoFotos from './components/layout/SecaoFotos.vue';
import ProcurandoPor from './components/layout/ProcurandoPor.vue';
import OculosGrau from './components/layout/OculosGrau.vue';

  export default {
    name: 'App',
    components: {
      HeaderText,
      Header,
      SecaoFotos,
      ProcurandoPor,
      OculosGrau
    }
  };
  </script>
  
  <style>
  
  </style>