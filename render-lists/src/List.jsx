function List(){
    const fruits = ["apple", "Banana", "orange", "pineapple"];

    const listItems = fruits.map(fruit => <li>{fruit}</li>);
    
    return(<ul>{listItems}</ul>);
}

export default List