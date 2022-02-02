
import React from "react";

// ======================================================================================


    const QuestionButtons = ({ selected, onClickHandler }) => {
    const btns = [1, 2, 3, 4, 5];

    return (
        <div
        style={{
            display: "flex",
            justifyContent: "center",
            flexFlow: "row wrap",
        }}
        >
        {btns.map((id) => (
            <QuestionButton
            key={id}
            selected={selected}
            btnId={id}
            onClickHandler={onClickHandler}
            />
        ))}
        </div>
    );
    };


    // ======================================================================================

    const QuestionButton = ({ selected, btnId, onClickHandler }) => {

    const icon     = ["icon-crying", "icon-thumbs_down", "icon-sometimes", "icon-thumbs_up", "icon-OK"];
    const response = ["not at all", "rarely", "sometimes", "often", "always"];

    return (
        <>  
            <div
            className={icon[btnId-1]}
            style={{
                height: "80px",
                width: "80px",
                fontSize: "3rem",
                textAlign: "center",
                borderRadius: "none",
                margin: "1rem 0",
                color: `${selected === btnId ? "orange" : "white"}`,
                textShadow: `${selected === btnId ? "0 0 0.75rem orange" : "none"}`,
                cursor: "pointer",
            }}
            onClick={() => onClickHandler(btnId)}
            >
            <p 
                style={{
                fontSize:"0.9rem", 
                fontFamily:"Arial", 
                fontWeight:"500",
                padding: "1rem 0",
                }}
            >
                {response[btnId-1]}
            </p>

            </div>
        </>
    );
};


export default QuestionButtons