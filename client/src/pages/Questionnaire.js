
import React,  { useEffect, useState }           from "react";
import { Link }                                  from "react-router-dom";
import Navbar                                    from "../components/Navbar";

import { useMutation }                           from "@apollo/client";
import { ADD_TEST }                              from "../utils/mutations";

import QuestionButtons                           from "../components/QuestionButtons";
import Auth                                      from "../utils/auth";


const answerArray = [0, 0, 0, 0, 0];

// ===========================================================

// I had this set up as a component but struggled to pass the 
// answers array back to the parent (Tracker.js)

const Question = ({ title, subtitle }) => {

  const [selected, setSelected] = useState("");

  useEffect(() => {
      const arrIndex = (title.substr(1,1))-1;
      answerArray[arrIndex] = selected;
      console.log(answerArray);
  });


  return (
      <>
      <div style={{ 
              display: "flex", 
              backgroundColor: "black",
              flexFlow: "column", 
              alignItems: "center",
              color: "white",
      }}>
          
          <h3 style={{fontSize:"1rem", padding:"1rem 0"}}>
              {title}{subtitle}
          </h3>

          <QuestionButtons selected={selected} onClickHandler={setSelected}/>

      </div>

      <hr style={{ height:"4px", color:"white", backgroundColor:"white", maxWidth:"400px", margin:"1rem auto"}} />

      </>
    );
  };


// ===========================================================


const Questionnaire = () => {

  const [ addTest ] = useMutation( ADD_TEST );

  const handleButtonClick = async ( event ) => {
    event.preventDefault();

    const validateQuestionairre = (!answerArray.includes(""))

    if (!validateQuestionairre){ 
      return alert("Please answer all questions before pressing 'submit'.")
    }

    try {
        // eslint-disable-next-line
        const { data } = await addTest({ 
          variables: {
            answers: answerArray,
            user: Auth.getProfile().data.username,
          },      
        });

        // using this method as <Redirect> was not working
        window.location.href= window.location.origin +  "/today";


    } catch (err) {
      console.error(err);
    }
  };

  return ( 

    <>

      {Auth.loggedIn() ? (

        <>
          <Navbar />

          <div style={{height:"85vh", backgroundColor:"black", color: "white", maxWidth:"450px", margin: "0 auto"}}> 
              
              <h3 style={{paddingTop:"1.5rem", color:"orange", textAlign: "center", fontWeight:"600",}}> 
                {Auth.getProfile().data.username}'s Emotion Tracker 
              </h3>

              <div className="Questions" style={{height:"auto"}}>
                <Question title={"Q1"} subtitle={". I'm feeling satisfied with my sleep?"} />
                <Question title={"Q2"} subtitle={". If asked how I'm feeling, I can easily identify my emotions?"} />
                <Question title={"Q3"} subtitle={". Feeling relaxed, not stressed or anxious?"} />
                <Question title={"Q4"} subtitle={". My social relationships are supportive and rewarding?"} />
                <Question title={"Q5"} subtitle={". Feeling close to other people?"} />
              </div>

              <div style={{maxWidth:"450px", margin:"0 auto",}}>
                <button className="button-tracker" onClick={handleButtonClick}>
                    <span>Submit</span>
                </button>
              </div>

          </div>
        </>   

      ) : (
              <p style={{color:"white", margin:"20% 40%"}}>
                  Please log in to do the questionnaire. <br />
                  <Link to="/login">login</Link>
              </p>
          )}
            
    </>
  )
}


export default Questionnaire