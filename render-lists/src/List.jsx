function List(){
    const fruits = [{name:"apple" , calories: 95}, 
                    {name:"Banana", calories: 45}, 
                    {name:"orange", calories:105}, 
                    {name:"pineapple", calories:134}];

    //fruits.sort()

    const listItems = fruits.map(fruit => <li key={fruit.name}>{fruit.name}</li>);
    
    return(<ol>{listItems}</ol>);
}

export default List