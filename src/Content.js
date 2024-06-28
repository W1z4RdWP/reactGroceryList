import ItemList from './ItemList';

const Content = ({items, handleCheck, handleDelete}) => {

    // const [get, set] = useState("name")
    // const handleNameChange = () => {
    //     const names = ['Vlad', 'Dave', 'Arthure'];
    //     const int = Math.floor(Math.random() * 3);
    //     set(names[int]);
    // }
 
  

    return (
        <main>
            {items.length ? (
                <ItemList
                    items={items}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                ></ItemList>
            ) : (
                <p style={{marginTop: '2rem' }}>Your list empty</p>
            )}
        </main>
    )
}

export default Content