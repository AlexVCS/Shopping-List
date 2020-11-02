import React from 'react';

const AddItem = () => {
    return (
        <div className="addItemContainer">
            <input className="itemField" type="text"/>
            <button onClick={console.log(document.getElementsByClassName('itemField').textContent)} className="addButton">Add New Item</button>
        </div>
    )
}

export default AddItem