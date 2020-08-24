<template>
  <main>
    <h1>Nuestro menú</h1>
    <div class="categories">
    <router-link v-for="(c, index) in categorias" :key="index" class="category"  :to="{ name: 'Productos', params: { category_id: c.id }}" >
      <img :src="c.icono" alt="" />
      <p>{{ c.descripcion }}</p>
    </router-link>
  </div>
  </main>
</template>
<script>
import useCategories from "../composables/useCategories";
export default {
  name: "Categorias",
  setup() {
    const { getAll } = useCategories();
    const categorias = getAll()
    return { categorias };
  },
};
</script>
<style lang="scss" scoped>
.categories{
  display: flex;
  flex-wrap: wrap;
  max-width: 90%;
  margin: 0 auto;
}
.category {
  margin-right: 5px;
  text-decoration: none;
  box-sizing: border-box;
  flex: 1 0 calc(50% - 10px);
  background: #ffffff;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  border-radius: 5px;
  padding: 10px;
  padding-top: 15px;
  padding-bottom: 15px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  img {
    width: 60px;
    height: 60px;
  }
  p {
    font-size: 16px;
    margin-bottom: 0px;
    color: #999999;
    margin-top: 10px;
    text-align: center;
  }
}
</style>
