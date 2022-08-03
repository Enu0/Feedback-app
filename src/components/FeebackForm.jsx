import Card from './shared/Card'
import { useState } from 'react'

function FeebackForm() {
    // hook text state to our input
    const [text, setText] = useState('')
    const handleTextChange = (e) => {
        setText(e.target.value)
        console.log(text.length)
    }

  return (
    <Card>
        <form>
            <h2> How would you rate your service with us today? </h2>
            <div className = 'input-group'>
                <input 
                type = 'text' 
                placeholder = 'Write a review' 
                onChange = {handleTextChange}
                value = {text}
                />
                <button type = 'submit'> Submit </button>
            </div>
        </form>
    </Card>
  )
}

export default FeebackForm