import useFirestoreDatabase from './useFirestoreDatabase';
import { ref } from '@vue/composition-api'
import state from '../store/index';
export default function () {
    const {connection} = useFirestoreDatabase();
    const getAll = () => {
        const data = ref(null)
        connection()
            .collection('locales')
            .doc(state.state.local)
            .collection('categorias').orderBy('index', 'asc')
            .onSnapshot(  snap => {
                const categorias = []
                snap.docs.forEach(async doc => {
                    const data = doc.data()
                    const categoriaRef = await connection().collection('categorias').doc(data.categoria_id).get()
                    const categoria = categoriaRef.data()
                    categorias.push({id: doc.id, ...data, nombre: categoria.nombre, descripcion: categoria.descripcion, icono: categoria.icono })
                });
                data.value = categorias;
            })
            return data;
    };
    const getCategory = (id) => {
        const data = ref(null)
        connection()
        .collection('locales')
        .doc(state.state.local)
        .collection('categorias')
        .doc(id)
        .onSnapshot( async snap => {
            const dataRef = snap.data()
            const categoriaRef = await connection().collection('categorias').doc(dataRef.categoria_id).get()
            const categoria = categoriaRef.data()
            data.value = {...dataRef, ...categoria}
        })
        return data;
    }
    return {getAll, getCategory};
}