<template>
  <div class="category">
    <div v-for="(c, index) in categorias" :key="index">
      <h1>{{ c.nombre }}</h1>
    </div>
  </div>
</template>
<script>
import useCategories from "../composables/useCategories";
import { ref } from "@vue/composition-api";
export default {
  name: "Categorias",
  setup() {
    const { getAll } = useCategories();
    const categorias = ref([]);
    getAll().then((d) => {
      categorias.value = d;
      console.log(d);
    });
    return { categorias };
  },
};
</script>
