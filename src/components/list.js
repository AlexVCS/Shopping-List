import React from 'react';

// let shoppingList = [];
let item = document.getElementsByTagName("input");
console.log(item.value);

const List = () => {
    return (
        <div>
            <ul className="list">
                <input type="checkbox" name="Done" id="done"/>
                <li className="item">temporary jazz</li>
            </ul>
        </div>
    )
}

export default List