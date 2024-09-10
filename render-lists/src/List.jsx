function List(){
    const fruits = ["apple", "Banana", "orange", "pineapple"];

    const listItems = fruits.map(fruit => <li>{fruit}</li>);
    
    return(<ol>{listItems}</ol>);
}

export default List