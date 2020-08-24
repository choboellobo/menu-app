import useFirestoreDatabase from './useFirestoreDatabase';
import { ref } from '@vue/composition-api'
export default function (categoryId) {
    const {connection} = useFirestoreDatabase();
    const getAll = () => {
        const data = ref(null)
        connection()
        .collection('locales')
        .doc('eZn3sMW1O6dEgfL3DAcu')
        .collection('categorias')
        .doc(categoryId)
        .collection('productos').orderBy('index', 'asc')
        .onSnapshot( snap => {
            let productos = []
            snap.docs.forEach( doc => productos.push(doc.data()))
            productos = productos.filter(item => item.activo);
            productos = productos.map( async p => {
                p.producto = await connection().collection('productos').doc(p.producto).get().then(item => item.data())
                return p;
            })
            Promise.all(productos).then( items => data.value = items)
        })
        return data;
    }
    return {getAll}
}