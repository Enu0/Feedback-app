import Card from './shared/Card'
import Button from './shared/Button'
import { useState } from 'react'


function FeebackForm() {
    // hook text state to our input
    const [text, setText] = useState('')
    const [btnDisabled, setbtnDisabled] = useState(true)
    const [message, setMessage] = useState('')
    // bug fix: should be checking input value not state, as state won't be rendered until 
    // the next render of the component. 
    const handleTextChange = ( {target: {value}} ) => {
        setText(value)
        if (value.length === 0){
            setbtnDisabled(true)
            setMessage(null)
        }else if(value.trim().length < 10){
            setbtnDisabled(true)
            setMessage('Review must be at least 10 characters.')
        }else{
            setbtnDisabled(false)
            setMessage(null)
        }
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
                <Button type = 'submit' version = 'secondary' isDisabled = {btnDisabled}> Send </Button>
            </div>
                <div className = 'message'> {message} </div>
        </form>
    </Card>
  )
}

export default FeebackForm