
import React                     from "react";
import NotesPlugin               from "./NotesPlugin";


const AllNotes = ( testData ) => {

    const answeredQ1 = testData.testData.map((val)=> val.answers[0] ).reverse();
    const answeredQ2 = testData.testData.map((val)=> val.answers[1] ).reverse();
    const answeredQ3 = testData.testData.map((val)=> val.answers[2] ).reverse();
    const answeredQ4 = testData.testData.map((val)=> val.answers[3] ).reverse();
    const answeredQ5 = testData.testData.map((val)=> val.answers[4] ).reverse();
    const questData  = testData.testData.map((val)=> val            ).reverse();
    const notesData  = testData.testData.map((val)=> val.notes      ).reverse();


    const answerTxt = ( val ) =>{
        if (val === 1) { return "not at all"; } else
        if (val === 2) { return "rarely"; } else
        if (val === 3) { return "sometimes"; } else
        if (val === 4) { return "often"; } else
        if (val === 5) { return "always"; }
    };


    const generateKey = ( prefix ) => {
        return `${ prefix }_${ new Date().getTime() }`;
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

                                    <NotesPlugin values = {notesData} results={questData}index = { index }  />

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