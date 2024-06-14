<template>
    <div class="header-text">
      <h1 class="">{{ currentText }}</h1>
    </div>
  </template>
  
  <script>
  import  {ref} from 'vue'
  
  export default {
    data() {
      return {
        texts: [
          "5% de desconto na compra no pix",
          "Entrega grátis para todo o estado do Rio de Janeiro"
        ],
        currentIndex: 0
      };
    },
    computed: {
      currentText() {
        return this.texts[this.currentIndex];
      }
    },
    mounted() {
      setInterval(this.switchText, 3000);
    },
    methods: {
      switchText() {
        this.currentIndex = (this.currentIndex + 1) % this.texts.length;
      }
    }
  };
  </script>
  
  <style scoped>
  .header-text {
    text-align: center;
    background-color: rgb(173, 173, 173);
    padding: 5px 0;
  }
  </style>