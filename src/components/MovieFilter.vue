<template>
  <div>
    <!-- Input para introducir el texto del filtro -->
    <input v-model="filterText" placeholder="Buscar películas" @input="updateFilter" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Propiedad para almacenar el texto del filtro
      filterText: "",
    };
  },
  methods: {
    // Método para emitir el evento de actualización del filtro
    updateFilter() {
      this.$emit("update-filter", this.filterText);
    },
  },
};
</script>

<!-- Estilos -->
<style scoped>
.movie-filter {
  margin: 10px; 
}

input {
  width: 50%; 
  padding: 10px; 
  font-size: 16px; 
  border: 1px solid #ccc; 
  border-radius: 5px; 
}


input:focus {
  outline: none; 
  border-color: #007BFF; 
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5); 
}
</style>