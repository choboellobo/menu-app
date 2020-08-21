<template>
  <div class="products" >
    <div class="product" v-for="(p, index) in productos" :key="index">
      <p>Lorem</p>
      <p>{{p.precio}} <small>€</small> </p>
    </div>
 
  </div>
</template>

<script>
import useProducts from "../composables/useProducts";
import { ref } from "@vue/composition-api";
export default {
  name: "Productos",
  setup(props, contexto) {
    const category_id = contexto.root.$route.params.category_id
    const { getAll } = useProducts(category_id);
    const productos = ref([]);
    getAll().then((d) => {
      productos.value = d;
      console.log(d);
    });
    return {productos}
  },
};
</script>
<style lang="scss" scoped>
.products{
  display: flex;
  flex-wrap: wrap;
  max-width: 90%;
  margin: 0 auto;
}
.product {
  width: 90%;
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
  p {
    font-size: 16px;
    margin-bottom: 0px;
    color: #999999;
    margin-top: 10px;
    text-align: center;
    &:nth-of-type(2){
      font-weight: bold;
    }
  }
}
</style>