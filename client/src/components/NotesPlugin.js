
import React, { useState }                       from "react";

import { useMutation }                           from "@apollo/client";
import { REMOVE_NOTE }                           from "../utils/mutations";
import { ADD_NOTE }                              from "../utils/mutations";


const NotesPlugin = ( index ) => {

    const [showTxtArea, setShowTxtArea ]        = useState(false);
    const [noteText, setNoteText]               = useState("");
    const [characterCount, setCharacterCount]   = useState(0);


    const [ removeNote ] = useMutation( REMOVE_NOTE );
    const [ addNote    ] = useMutation( ADD_NOTE );


    const handleDelete = async ( questionId, noteId ) => {    

        // eslint-disable-next-line no-restricted-globals
        if (confirm(`note ID: ${noteId}\n\nProceed with deleting your note?`))
        {
    
            try {
                // eslint-disable-next-line
                const { data } = await removeNote({ 
                    variables: {
                        questionId: questionId,
                        noteId: noteId,
                    },      
                });
        
            } catch (err) {
                console.error(err);
            }
        } else return;

    };


    const handleSave = async ( questionId ) => {

        try {
            // eslint-disable-next-line no-unused-vars
            const { data } = await addNote({
                variables: {  questionId, noteText },
            });

            setNoteText("");
            // window.location.reload();

            } catch (err) {
            console.error(err);
            }
        };


    const handleChange = (event) => {
            const { name, value } = event.target;
        
            if (name === 'noteText' && value.length <= 280) {

            setNoteText(value);
            setCharacterCount(value.length);
            }
        };



    const generateKey = (prefix ) => {
        return `${ prefix }_${ new Date().getTime() }`;
    };


    return (
        <>
            <div> 
                <h6>Notes:</h6>

                    <div 
                        onClick={ () => setShowTxtArea( showTxtArea => ! showTxtArea ) } 
                        data-value={index} className = "icon-file-plus" 
                        style={{color:"green", cursor: "pointer", fontSize:"1.75rem"}}
                    >
                        { showTxtArea 
                        ? 
                            <span 
                                onClick={() => handleSave(index.results[index.index]._id)} 
                                className = "icon-save" 
                                style={{display:"inline-block", color:"green", marginLeft:"1rem"}}
                            /> 
                        : null } 
                    </div>

                    
                        { showTxtArea 
                        ? 
                            <p 
                                style={{color: "white", fontSize: "0.85rem" }} 
                            > 
                                Character Count: {characterCount}/280 
                            </p> 
                        : null }
                        
                        { showTxtArea 
                        ? 
                            <textarea 
                                name="noteText" 
                                value={index.values.noteText} 
                                onChange={handleChange} 
                                style = {{ width:"93%", margin:"1rem"}} 
                            /> 
                        : null }

                    {
                        index.values[index.index].map( (notes, i ) =>{ 
                            return ( 
                                    <div key={ generateKey(i) } >
                                        <p style={{fontSize:"0.8rem", paddingTop:"1rem"}}
                                        > 
                                            {notes.createdAt}: 
                                        </p> 
                                        <textarea  
                                            style={{width:"100%"}} 
                                            defaultValue = { notes.noteText }   
                                        />

                                        <span 
                                            style={{color:"red", cursor: "pointer" }} 
                                            className="icon-trash" 
                                            onClick={ ()=> handleDelete(index.results[index.index]._id, notes._id )} 
                                        /> 
                                    </div>
                                ) 
                        })
                    }
                
            </div>
        </>

    );
};

export default NotesPlugin;