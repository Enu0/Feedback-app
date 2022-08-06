import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import FeedbackData from "./data/FeedbackData"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeebackForm"


function App(){
    // FeedbackData is the default data
    const [feedback, setFeedback] = useState(FeedbackData) 
    // Prop drilling this function to FeedbackItem component in order to delete feedback
    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')){
            setFeedback(feedback.filter((item) => item.id != id))
        }
    }

    const handleAdd = (newFeedback) => {
        // using uuid to distinguish each newly added review
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    return (
        <>
            <Header />
            <FeedbackForm handleAdd = {handleAdd}/>
            <FeedbackStats feedback = {feedback}/>
            <div className="container">
                <FeedbackList feedback = {feedback} handleDelete = {deleteFeedback}/>
                
            </div>
        </>
        
    )
}

export default App