import useFirestoreDatabase from './useFirestoreDatabase';
export default function () {
    const {connection} = useFirestoreDatabase();
    const getAll = async () => {
        await connection()
        .collection('categorias')
        .onSnapshot((snapshot) => {
            const data = snapshot.data();
        })
    }
}