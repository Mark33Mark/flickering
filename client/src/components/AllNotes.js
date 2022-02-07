
import React                        from "react";

const AllNotes = ( testData ) => {

console.log(testData);


const answeredQ1 = testData.testData.map((val)=> val.answers[0] );
const answeredQ2 = testData.testData.map((val)=> val.answers[1] );
const answeredQ3 = testData.testData.map((val)=> val.answers[2] );
const answeredQ4 = testData.testData.map((val)=> val.answers[3] );
const answeredQ5 = testData.testData.map((val)=> val.answers[4] );
const answered   = testData.testData.map((val)=> val.answers    );
const createdAt  = testData.testData.map((val)=> val.createdAt  );
const Notes      = testData.testData.map((val)=> val.notes      );

console.log(answered);
console.log(answeredQ1, answeredQ2, answeredQ3, answeredQ4, answeredQ5);

console.log( Notes );
console.log( Notes[11].length );
console.log( Notes[11][1].noteText );

const answerTxt = ( val ) =>{
    if (val === 1) { return "not at all"; } else
    if (val === 2) { return "rarely"; } else
    if (val === 3) { return "sometimes"; } else
    if (val === 4) { return "often"; } else
    if (val === 5) { return "always"; }
};

    return (
        <>
            <div style={{ color:"white", maxWidth: "500px", margin:"0 auto" }} >
                <h3
                    className="pt-4 display-inline-block"
                    style={{ color:"white" }}
                >
                    Your information
                </h3>

            { 
                createdAt.map((val, index) => { 
                return (
                <div className="flex-row my-4" key={val}> 
                    <div className="col-12 mb-12 pb-12">

                        <div className="p-3 bg-dark text-light" style={{boxShadow:"0px 0px 1rem white"}}>
                            <h6 className="card-header">
                                {val}
                            </h6>
                            <p className="card-body">

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
                                            <td>{ answerTxt(answeredQ1[index]) }</td>
                                            <td>{ answerTxt(answeredQ2[index]) }</td>
                                            <td>{ answerTxt(answeredQ3[index]) }</td>
                                            <td>{ answerTxt(answeredQ4[index]) }</td>
                                            <td>{ answerTxt(answeredQ5[index]) }</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </p>
                                <div> 
                                    <p>Notes:</p>
                                        {
                                            Notes[index].map( notes =>{ return ( 
                                                <>
                                                        <div style={{fontSize:"0.8rem", paddingTop:"1rem"}}> {notes.createdAt}: </div> 
                                                        <textarea  style={{width:"100%"}} defaultValue = { notes.noteText }   /> 
                                                </>
                                                )    
                                        })
                                        }
                                        
                                </div>
                        </div>
                    </div>

                </div>
                
            )}
        )
    }

            </div>
        </>
    );
};

export default AllNotes;