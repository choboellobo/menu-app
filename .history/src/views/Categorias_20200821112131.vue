<template>
  <div class="categories">
    <a v-for="(c, index) in categorias" :key="index" class="category">
      <img :src="c.icono" alt="" />
      <h1>{{ c.nombre }}</h1>
    </a>
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
<style lang="scss" scoped>
.category {
  background: #ffffff;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  border-radius: 5px;
  padding: 10px;
  padding-top: 15px;
  padding-bottom: 15px;
  transition: all 0.3s ease-out;
  cursor: pointer;
  margin: 0 auto;
  display: block;
}
</style>
