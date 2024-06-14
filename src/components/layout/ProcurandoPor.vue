<template>
    <div>
     <h2 class="texto">Oque voce está procurando?</h2>
      <div class="all-quadrados">
        <div class="quadrado">Em Breve...</div>
        <div class="quadrado">Em Breve...</div>
        <div class="quadrado">Em Breve...</div>
        <div class="quadrado">Em Breve...</div>
      </div>
    </div>
</template>

<script>
  export default {
    data() {

    }
  }
</script>

<style scoped>
  .texto {
    font-size: 30px;
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }
  .all-quadrados{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 20px 0;
  }
  .quadrado {
    height: 300px;
    width: 300px;
    background: #cdcccc;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>