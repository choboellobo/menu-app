<template>
  <div class="categories">
    <router-link v-for="(c, index) in categorias" :key="index" class="category"  :to="{ name: 'Productos', params: { category_id: c.category_id }}" >
      <img :src="c.icono" alt="" />
      <p>{{ c.descripcion }}</p>
    </router-link>
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
.categories{
  display: flex;
  flex-wrap: wrap;
  max-width: 90%;
  margin: 0 auto;
}
.category {
  flex: 0 1 40%;
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
  &:nth-child(odd){
   margin-right: .5rem;
  }
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
