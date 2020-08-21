import useFirestoreDatabase from './useFirestoreDatabase';
export default function (categoryId) {
    const {connection} = useFirestoreDatabase();
    const getAll = async () => {
        return await connection()
        .collection('locales')
        .doc('eZn3sMW1O6dEgfL3DAcu')
        .collection('categorias')
        .doc(categoryId)
        .collection('productos').where('activo', '==', true).orderBy('index', 'asc')
        .get().then( snap => {
            const productos = []
            snap.docs.forEach( doc => productos.push(doc.data()))
            return productos
        })
    }
    return {getAll}
}