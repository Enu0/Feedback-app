import Card from './shared/Card'
import Button from './shared/Button'
import { useState } from 'react'


function FeebackForm() {
    // hook text state to our input
    const [text, setText] = useState('')
    const handleTextChange = (e) => {
        setText(e.target.value)
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
                <Button type = 'submit' version = 'secondary'> Send </Button>
            </div>
        </form>
    </Card>
  )
}

export default FeebackForm