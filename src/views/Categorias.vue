<template>
  <main>
    <div class="categories">
      <template  v-for="(c, index) in categorias">
          <router-link v-if="c.activo" class="category" :key="index" :to="{ name: 'Productos', params: { category_id: c.id }}" >
            <div class="img">
              <img :src="c.icono">
            </div>
            <div class="title">
              <div class="discount" v-if="c.descuento">-{{ c.descuento }}%</div>
              <h2>{{c.nombre}}</h2>
              <p>{{ c.descripcion}}</p>
            </div>
        </router-link>    
      </template>
      
  </div>
  </main>
</template>
<script>
import store from '../store/index';

import useCategories from "../composables/useCategories";
export default {
  name: "Categorias",
  setup(props, context) {
    const local = context.root.$route.query.local
    // Set local vuex
    store.commit('SET_LOCAL', local);
    
    const { getAll } = useCategories();
    const categorias = getAll()
    console.log(categorias)
    return { categorias };
  },
};
</script>
<style lang="scss" scoped>
.categories{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
.category {
  position: relative;
  @media only screen and (max-width: 600px) {
    width: 45%;
  }
  width: 22%;
  text-decoration: none;
  box-sizing: border-box;
  background: #ffffff;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  border-radius: 5px;
  padding-bottom: 15px;
  cursor: pointer;
  margin-bottom: 1rem;
  .title {
    position: relative;
    .discount {
      position: absolute;
      width: 75px;
      height: 75px;
      background: black;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 25px;
      border-radius: 50%;
      top: -75px;
      left: 50%;
      transform: translateX(-50%);
      font-weight: bold;
      &::after {
        content: 'Oferta';
        position: absolute;
        top: 12px;
        font-size: 14px;
      }
    }
  }
  img {
    width: 100%;
  }
  h2 {
    font-size: 25px;
    margin-bottom: 0px;
    color: black;
    margin-top: 10px;
    text-align: center;
    font-family: 'Open Sans', sans-serif;
  }
  p {
        text-align: center;
        color: black;
        font-size: 12px;
        margin: 0;
  }
}
</style>
