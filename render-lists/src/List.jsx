function List(){
    const fruits = [{id:1,name:"apple" , calories: 95}, 
                    {id:2,name:"Banana", calories: 45}, 
                    {id:3,name:"orange", calories:105}, 
                    {id:4,name:"pineapple", calories:134}];

    //fruits.sort()

    const listItems = fruits.map(fruit => <li key={fruit.id}>
                                            {fruit.name}: &nbsp;
                                            <b>{fruit.calories}</b></li>);
    
    return(<ol>{listItems}</ol>);
}

export default List