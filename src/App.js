import React from "react"
import { useState } from 'react'
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackData from "./data/FeedbackData"


function App(){
    const [feedback, setFeedback] = useState(FeedbackData) //FeedbackData is the default data

    return (
        <>
            <Header />
            <div className="container">
                <FeedbackList feedback={feedback} />
                
            </div>
        </>
        
    )
}

export default App