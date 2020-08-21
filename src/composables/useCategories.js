import useFirestoreDatabase from './useFirestoreDatabase';
export default function () {
    const {connection} = useFirestoreDatabase();
    const getAll = async () => {
        return await connection()
        .collection('categorias')
        .get().then( snap => {
            const categorias = []
            snap.docs.forEach( doc => categorias.push(doc.data()))
            return categorias
        })
    }
    return {getAll};
}