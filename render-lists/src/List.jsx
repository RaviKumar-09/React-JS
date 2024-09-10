function List(){
    const fruits = [{id:1,name:"apple" , calories: 95}, 
                    {nid:2,ame:"Banana", calories: 45}, 
                    {id:3,name:"orange", calories:105}, 
                    {id:4,name:"pineapple", calories:134}];

    //fruits.sort()

    const listItems = fruits.map(fruit => <li key={fruit.id}>{fruit.name}</li>);
    
    return(<ol>{listItems}</ol>);
}

export default List