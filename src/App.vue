<template>
  <div id="app">
    <!-- Se incluye el componente MovieFilter y MovieTable -->
    <MovieFilter @update-filter="updateFilter" />
    <MovieTable :filterText="filterText" />
  </div>
</template>

<script>
import MovieTable from "@/components/MovieTable.vue";
import MovieFilter from "@/components/MovieFilter.vue";

export default {
  components: {
    MovieTable,
    MovieFilter,
  },
  data() {
    return {
      // Propiedad para almacenar el texto del filtro
      filterText: "",
    };
  },
  methods: {
    // Método para manejar la actualización del filtro
    updateFilter(filter) {
      this.filterText = filter;
    },
  },
};
</script>
