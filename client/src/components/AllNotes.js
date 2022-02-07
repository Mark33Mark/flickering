
import React, { useState }                       from "react";

import { useMutation }                           from "@apollo/client";
import { REMOVE_NOTE }                           from "../utils/mutations";
import { ADD_NOTE }                              from "../utils/mutations";


const AllNotes = ( testData ) => {

    const [showTxtArea, setShowTxtArea ]        = useState(false);
    const [noteText, setNoteText]               = useState("");
    const [characterCount, setCharacterCount]   = useState(0);


    const [ removeNote ] = useMutation( REMOVE_NOTE );
    const [ addNote    ] = useMutation( ADD_NOTE );


    const handleDelete = async ( questionId, noteId ) => {    

        console.log(questionId, noteId);
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
        
                // using this method as <Redirect> was not working
                window.location.reload();
        
        
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
            window.location.reload();

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

    // const handleShowTxtArea = ( event ) => {
    //     event.preventDefault();

    //     // setShowTxtArea( showTxtArea => ! showTxtArea );
    //     console.log(event.target);

    // };


    const answeredQ1 = testData.testData.map((val)=> val.answers[0] );
    const answeredQ2 = testData.testData.map((val)=> val.answers[1] );
    const answeredQ3 = testData.testData.map((val)=> val.answers[2] );
    const answeredQ4 = testData.testData.map((val)=> val.answers[3] );
    const answeredQ5 = testData.testData.map((val)=> val.answers[4] );
    const questData  = testData.testData.map((val)=> val            );
    const Notes      = testData.testData.map((val)=> val.notes      );



    const answerTxt = ( val ) =>{
        if (val === 1) { return "not at all"; } else
        if (val === 2) { return "rarely"; } else
        if (val === 3) { return "sometimes"; } else
        if (val === 4) { return "often"; } else
        if (val === 5) { return "always"; }
    };


    const generateKey = (pre) => {
        return `${ pre }_${ new Date().getTime() }`;
    };

    return (

        <>
            <div style={{ color:"white", maxWidth: "500px", margin:"0 auto" }} >

            { 
                questData.map((val, index) => { 
                return (
                <div className="flex-row my-4" key={ generateKey(val._id) }> 
                    <div className="col-12 mb-12 pb-12">

                        <div className="p-3 bg-dark text-light" style={{boxShadow:"0px 0px 1rem white"}}>
                            <h6 className="card-header">
                                {val.createdAt}
                            </h6>
                            <div className="card-body">

                                <table className="table" style={{width:"100%", color:"white", fontSize:"0.9rem" }}>
                                    <thead>
                                        <tr>
                                            <th scope="col"> Refreshed </th>
                                            <th scope="col"> Mindful / Self Aware</th>
                                            <th scope="col"> Relaxed / Calm </th>
                                            <th scope="col"> Supported </th>
                                            <th scope="col"> Attached </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td >{ answerTxt(answeredQ1[index]) }</td>
                                            <td >{ answerTxt(answeredQ2[index]) }</td>
                                            <td >{ answerTxt(answeredQ3[index]) }</td>
                                            <td >{ answerTxt(answeredQ4[index]) }</td>
                                            <td >{ answerTxt(answeredQ5[index]) }</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                                <div> 
                                    <h6>Notes:</h6>

                                        <div onClick={ () => setShowTxtArea( showTxtArea => ! showTxtArea ) } data-value={index} className = "icon-file-plus" style={{color:"green", cursor: "pointer", fontSize:"1.75rem"}}>
                                            { showTxtArea ? <span onClick={handleSave(val._id)} className = "icon-save" style={{display:"inline-block", color:"green"}}/> : null }
                                        </div>
                                            { showTxtArea ? <p style={{color: "white", fontSize: "0.85rem" }} > Character Count: {characterCount}/280 </p> : null }
                                            { showTxtArea ? <textarea name="noteText" value={noteText} onChange={handleChange} style = {{ width:"93%", margin:"1rem"}} /> : null }
                                        {
                                            Notes[index].map( (notes, i ) =>{ 
                                                return ( 
                                                        <div key={ generateKey(i) } >
                                                            <p style={{fontSize:"0.8rem", paddingTop:"1rem"}}> {notes.createdAt}: </p> 
                                                            <textarea  style={{width:"100%"}} defaultValue = { notes.noteText }   /> 
                                                            <span style={{color:"red", cursor: "pointer" }} className="icon-trash" onClick={ ()=> handleDelete(val._id, notes._id )} /> 
                                                        </div>
                                                    ) 
                                            })
                                        }
                                        
                                </div>
                        </div>
                    </div>

                </div>
                
            )}
        )}

    </div>
        </>

    );
};

export default AllNotes;