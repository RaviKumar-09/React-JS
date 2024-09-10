function List(){
    const fruits = ["apple", "Banana", "orange", "pineapple"];

    //fruits.sort()

    const listItems = fruits.map(fruit => <li>{fruit}</li>);
    
    return(<ol>{listItems}</ol>);
}

export default List