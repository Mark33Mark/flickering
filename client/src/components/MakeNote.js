
import React, { useState }          from "react";
import { useMutation }              from "@apollo/client";
import { Link }                     from "react-router-dom";

import { ADD_NOTE }                 from "../utils/mutations";
import Auth                         from '../utils/auth';

const MakeNote = ( tests ) => {

    const [noteText, setNoteText]               = useState("");
    const [characterCount, setCharacterCount]   = useState(0);


    // const [ addNote, {error} ] = useMutation( ADD_NOTE );

    const currentTestData = tests.tests[tests.tests.length-1];
    const questionId = currentTestData._id;

    const [addNote, { error }] = useMutation( ADD_NOTE );

    
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        
        try {
            // eslint-disable-next-line no-unused-vars
            const { data } = await addNote({
                variables: {  questionId, noteText },
            });

            setNoteText("");
            // using this method as <Redirect> was not working
            window.location.href= window.location.origin +  "/notes";

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

    return (

            <div style={{ maxWidth: "450px", margin: "0 auto"}}>
                <h3 style={{color: "white"}}>
                    Make a note?
                </h3>

                {Auth.loggedIn() ? (
                <>
                <p
                    style={{color: "white", fontSize: "0.85rem" }}
                    className={`m-0 ${characterCount === 280 || error ? 'text-danger' : ""
                    }`}
                >
                    Character Count: {characterCount}/280
                </p>
                <form
                    style={{width:"100%"}}
                    onSubmit={handleFormSubmit}
                >
                    <div className="col-12 col-lg-12">
                        <textarea
                            name="noteText"
                            placeholder="...write a note on your emotions for the day."
                            value={noteText}
                            className="form-input w-100"
                            style={{ minHeight: "7rem", lineHeight: '1.5', resize: 'vertical' }}
                            onChange={handleChange}
                        ></textarea>
                    </div>

                    <div className="col-12 col-lg-12">
                        <button className="button py-2" style={{margin:"2rem 1rem 0 0"}} type="submit"
                                disabled={(characterCount===0)} >
                            Save your note?
                        </button>
                    </div>

                    {error && (
                    <div className="col-6 my-3 bg-danger text-white p-3">
                        {error.message}
                    </div>
                    )}

                </form>

                <p style={{color: "white", marginTop:"2rem"}}>
                    Click here to go to: <br />
                    <Link to="/notes">My Notes Page</Link>
                </p>
                </>
            ) : (
                <p>
                Please log in to save a note. <br />
                <Link to="/login">login</Link>
                </p>
            )}

            </div>
    );
};


export default MakeNote;