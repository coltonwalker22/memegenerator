import React from 'react';


export default function Savedmeme (props){
  const {randomImage, topText, bottomText, setEditMode, editMode, editMeme, deleteMeme, newInput, setNewInput, id} = props
console.log("props:",props)
 
 function onChange(event){
    const {name, value} = event.target
    setNewInput(prevMeme => ({...prevMeme, [name]: value}))
}

console.log("props.id:", props.id)

// used for conditional rendering
// function editingMeme(event){
//     // savedMemes.map((meme, i) => (i === id) ?  setEditMode(true) : )
//     event.preventDefault()
//     setEditMode(true)


// }

function updateMeme(event){
    event.preventDefault()
    editMeme(id, newInput)
    setEditMode(false)
}

// function handleDelete(event){
// event.preventDefault()
// deleteMeme(id)

// }



console.log("newInput:", newInput)
// {editMode} using a ternary to display the edit text input fields when teh edit button is selected.
    return(
        <div className="savedmeme-container">
            <div className="meme">
                <img src={randomImage} className="meme--image" alt="" />
                <h2 className="meme-text top">{topText}</h2>
                <h2 className="meme-text bottom">{bottomText}</h2>
            </div>
                {editMode 
                ? <div className="edit-container">
                <input 
                type="text"
                className="edit-topText"
                placeholder={topText}
                id="topText"
                value={newInput.topText}
                name="topText"
                onChange={onChange}
/> 
                <input
                type="text" 
                className="edit-bottomText"
                placeholder={bottomText}
                id="bottomText"
                value={newInput.bottomText}
                name="bottomText"
                onChange={onChange}
                />
                <div className="edit-savebutton" onClick={updateMeme}>Save</div>
                </div> 
                : null }
        
            <div className="meme-buttons">
                <div onClick={()=>editMeme(id, newInput)} className="savedmeme-edit">Edit</div>
                <div onClick={()=>deleteMeme(id)} className="savedmeme-delete">Delete</div>
            </div>
        
        </div>
    )
}