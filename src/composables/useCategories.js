import useFirestoreDatabase from './useFirestoreDatabase';
export default function () {
    const {connection} = useFirestoreDatabase();
    const getAll = async () => {
        return await connection()
        .collection('locales')
        .doc('eZn3sMW1O6dEgfL3DAcu')
        .collection('categorias').orderBy('index', 'asc')
        .get().then( snap => {
            const categorias = []
            snap.docs.forEach( doc => {
                categorias.push({id: doc.id, ...doc.data() })
            })
            return categorias
        })
    }
    return {getAll};
}