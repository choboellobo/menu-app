<template>
  <main v-if="categoria">
    <!-- Categoria -->
    <div class="categoria">
      <h1>{{categoria.nombre}}</h1>
      <p v-if="categoria.descripcion"> {{ categoria.descripcion }}</p>
      <p class="descuento" v-if="categoria.descuento">
        Todos los productos tienen un  <strong>{{ categoria.descuento }} %</strong> de descuento
      </p>
    </div>
    <!-- Productos -->
    <div class="products">
      <div class="product" v-for="(p, index) in productos" :key="index">
        <div class="content">
          <h3 class="titulo">{{ p.producto.nombre}}</h3>
          <p class="descripcion" v-if="p.producto.descripcion">{{ p.producto.descripcion }}</p>
         
          <div class="precio">
            <span>
              <small v-if="p.precio_mitad">Ración</small>
              {{ currency(p.precio *  (100 - categoria.descuento) / 100) }}
            </span>
            <span class="mitad" v-if="p.precio_mitad"> 
              <small>Media</small>
              {{ currency(p.precio_mitad *  (100 - categoria.descuento) / 100) }}
            </span>
          </div>

           <div class="alergicos">
              <span v-for="item in p.producto.alergicos" :key="item">
                <img :src="'https://mfigrupo.com/wp-content/uploads/2020/11/'+item+'.svg'" width="50">
              </span>
          </div>
          
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
    const category_id = contexto.root.$route.params.category_id
    const {getCategory} = useCategories()
    const { getAll } = useProducts(category_id);
    const productos = getAll()
    const categoria = getCategory(category_id)
    const currency = (price) => {
      const formatter = new Intl.NumberFormat('es-ES', {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 2
      })
      return formatter.format(price)
    }
    console.log(productos)
    return {productos, categoria, currency}
  },
};
</script>

<style lang="scss" scoped>
.categoria {
  margin-bottom: 2em;
  text-align: center;
  h1 {
    font-size: 35px;
    font-family: 'Open Sans', sans-serif;
    color: #C85B32;
    margin:0;
  }
  p {
    margin: 5px 0;
  }
}
.products {
  display: flex;
  flex-wrap: wrap;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
}
.product {
  @media only screen and (max-width: 600px) {
    width: 100%;
    margin-right: 0;
  }
  width: 32%;
  box-sizing: border-box;
  display: inline-block;
  margin-right: 5px;
  background-image: url(https://mfigrupo.com/wp-content/uploads/2020/10/fondo-original.png);
  text-align: left;
  padding: 1em;
  padding-bottom: 0;
  box-shadow: 1px 1px 8px rgba(grey, .5);
  margin-bottom: 1em;
  .content {
    .titulo { 
      font-family: 'Open Sans', sans-serif;
      color: #C85B32;
      font-size: 20px; margin: 0; margin-bottom: 5px}
    .descripcion { 
      margin: 0;
      font-size: 12px;
    }
    .precio {
      small { 
        position: absolute;
        bottom: -10px;
        font-size: 14px;
      }
      position: relative;
      display: flex;
      justify-content: space-between;
      font-size: 30px;
      margin-bottom: .5em;
      font-weight: bold;}
    .alergicos { text-align: center;}
  }
}
</style>