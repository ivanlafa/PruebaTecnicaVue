<template>
  <div class="movie-table">
    <table>
      <thead>
        <tr>
          <th>Imagen</th>
          <th>Titulo</th>
          <th>Tipo</th>
          <th>Año</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="movie in filteredMovies" :key="movie.imdbID">
          <td>
            <img :src="movie.Poster" alt="Poster" class="poster-image" />
          </td>
          <td>{{ movie.Title }}</td>
          <td>{{ movie.Type }}</td>
          <td>{{ movie.Year }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
data() {
  return {
    // Arreglo para almacenar todas las películas
    movies: [],
    // Arreglo para almacenar las películas filtradas
    filteredMovies: [],
  };
},
mounted() {
  // Método para obtener las películas al cargar el componente
  this.fetchMovies();
},
watch: {
  filterText() {
    this.filterMovies();
  },
},
methods: {
  // Método para obtener películas desde la API
  async fetchMovies() {
    try {
      const response = await this.$http.get("http://www.omdbapi.com/?s=movie&apikey=747dba8c");
      console.log("API Respondiendo:", response.data);

      // Verifica si la respuesta contiene una lista de películas
      if (Array.isArray(response.data.Search)) {
        this.movies = response.data.Search;
        this.filteredMovies = this.movies;
      } else {
        console.error("La respuesta de la API no contiene una lista de películas.");
      }
    } catch (error) {
      console.error("Error al obtener películas", error);
    }
  },
  // Método para filtrar las películas en función del texto del filtro
  filterMovies() {
    const searchText = this.filterText.trim().toLowerCase();
    if (searchText === "") {
      this.filteredMovies = this.movies;
    } else {
      this.filteredMovies = this.movies.filter((movie) =>
        movie.Title.toLowerCase().includes(searchText)
      );
    }
  },
},
props: {
  // Propiedad para recibir el texto del filtro desde App.vue
  filterText: String,
},
};
</script>
  <!-- estilos -->
  <style scoped>
  .movie-table {
    margin: 20px;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
  }
  
  thead {
    background-color: #f2f2f2;
  }
  
  th,
  td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }
  
  .poster-image {
    width: 50px;
    height: auto;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  </style>
  