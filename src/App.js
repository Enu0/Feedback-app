import { useState } from 'react'
import FeedbackData from "./data/FeedbackData"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"



function App(){
    // FeedbackData is the default data
    const [feedback, setFeedback] = useState(FeedbackData) 
    // Prop drilling this function to FeedbackItem component in order to delete feedback
    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')){
            setFeedback(feedback.filter((item) => item.id != id))
        }
    }

    return (
        <>
            <Header />
            <FeedbackStats feedback = {feedback}/>
            <div className="container">
                <FeedbackList feedback = {feedback} handleDelete = {deleteFeedback}/>
                
            </div>
        </>
        
    )
}

export default App