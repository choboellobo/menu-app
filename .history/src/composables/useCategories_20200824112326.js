import useFirestoreDatabase from './useFirestoreDatabase';
import { ref } from '@vue/composition-api'
export default function () {
    const {connection} = useFirestoreDatabase();
    const getAll = () => {
        const data = ref(null)
        connection()
            .collection('locales')
            .doc('eZn3sMW1O6dEgfL3DAcu')
            .collection('categorias').orderBy('index', 'asc')
            .onSnapshot( snap => {
                const categorias = []
                snap.docs.forEach( doc => {
                    categorias.push({id: doc.id, ...doc.data() })
                });
                data.value = categorias;
            })
            return data;
    };
    const getCategory = (id) => {
        const data = ref(null)
        connection()
        .collection('locales')
        .doc('eZn3sMW1O6dEgfL3DAcu')
        .collection('categorias')
        .doc(id)
        .onSnapshot( snap => {
            data.value = snap.data()
        })
        return data;
    }
    return {getAll, getCategory};
}