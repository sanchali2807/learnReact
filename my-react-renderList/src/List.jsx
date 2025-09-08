function List({ category = "Category", items = [] }){




const listItems = items.map(fruit => <li key={fruit.id}>
    {fruit.name}: &nbsp;
    <b>{fruit.calories}</b>
    </li>);
// react would like unique key for each item so it could easily keep track of items

// fruits.sort((a,b)=> a.name.localeCompare(b.name));
// if we sort it it will be sorted by its name to by id
// fruits.sort((a,b)=> b.name.localeCompare(a.name));

// fruits.sort((a,b) => a.calories-b.calories);
// numerical order


// const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
    // const listItems = lowCalFruits.map(fruit => <li key={fruit.id}>
    // {fruit.name}: &nbsp;
    // <b>{fruit.calories}</b>
    // </li>);


// const highCalFruits = fruits.filter(fruit => fruit.calories >=100);
// const listItems = highCalFruits.map(fruit => <li key={fruit.id}>
//     {fruit.name}: &nbsp;
//     <b>{fruit.calories}</b>
//     </li>);
// const listItems = fruits.map(fruit => <li key={fruit.id}>
//     {fruit.name}: &nbsp;
//     <b>{fruit.calories}</b>
//     </li>);


return (
    <>
    <h3 className="list-category">{category}</h3>
    <ol className="list-items">{listItems}</ol>
    </>
);
}

export default List