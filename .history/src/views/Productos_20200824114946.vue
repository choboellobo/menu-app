<template>
  <main v-if="categoria">
    <h1>{{ categoria.nombre }}</h1>
    <p class="descuento" v-if="categoria.descuento">
      Todas las ensaladas con <strong>{{ categoria.descuento }} %</strong> de
      descuento
    </p>
    <div class="products">
      <div class="product" v-for="(p, index) in productos" :key="index">
        <div class="bg"></div>
        <h2 class="titulo">{{ p.producto.nombre }}</h2>
        <p class="descripcion" v-if="p.producto.descripcion">
          {{ p.producto.descripcion }}
        </p>
        <div class="precio">
          {{ (p.precio * (100 - categoria.descuento)) / 100 }} <small>€</small>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import useProducts from "../composables/useProducts";
import useCategories from "../composables/useCategories";

export default {
  name: "Productos",
  setup(props, contexto) {
    const category_id = contexto.root.$route.params.category_id;
    const { getCategory } = useCategories();
    const { getAll } = useProducts(category_id);
    const productos = getAll();
    const categoria = getCategory(category_id);
    return { productos, categoria };
  },
};
</script>
<style lang="scss" scoped>
.products {
  display: flex;
  flex-wrap: wrap;
  max-width: 90%;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
}
.product {
  position: relative;
  width: 90%;
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
  .bg {
    background-image: url(https://img.freepik.com/vector-gratis/elementos-comida-dibujados-mano_1411-48.jpg?size=626&ext=jpg);
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    opacity: 0.2;
  }
  &:nth-child(odd) {
    margin-right: 0.5rem;
  }
  .titulo {
    font-family: "Anton", sans-serif;
    margin: 0;
    font-size: 25px;
  }
  .descripcion {
    margin: 0.5em 0;
  }
  .precio {
    margin: 0;
    font-size: 30px;
    width: 100%;
    font-weight: bold;
  }
}
</style>
