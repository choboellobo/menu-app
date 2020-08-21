import useFirestoreDatabase from './useFirestoreDatabase';
export default function (categoryId) {
    const {connection} = useFirestoreDatabase();
    const getAll = async () => {
        return await connection()
        .collection('locales')
        .doc('eZn3sMW1O6dEgfL3DAcu')
        .collection('categorias')
        .get().then( snap => {
            const categorias = []
            snap.docs.forEach( doc => categorias.push(doc.data()))
            return categorias
        })
    }
}