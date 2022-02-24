import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import {useState} from 'react'


const FeedbackForm = ({handleAdd}) => {
    const [text, setText] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(false)
    const [message, setMessage] = useState('')
    const [rating, setRating] = useState(10)

    const handleTextChange = (e) => {    
        if(text === ' ' ){
            setBtnDisabled(true)
            setMessage(null)
        }
        else if( text !== '' && text.length <= 10 ){
            setBtnDisabled(true)
            setMessage("You must input at least 10 characters")
        }
        else{
            setBtnDisabled(false)
            setMessage(null)
        }

        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(text.trim().length > 10){
            const newFeedback = {
                text,
                rating,
            }

            handleAdd(newFeedback)
            setText('')
        }

    }
    return (
        <Card>
            <form onSubmit = {handleSubmit}>
                <h2> How would you rate your service with us?</h2>
                <RatingSelect select = {(rating) => setRating(rating)} />
                <div className="input-group">
                    <input onChange = {handleTextChange} type="text" placeholder='write a review' value = {text}/>
                    <Button type = 'submit' isDisabled = {btnDisabled}>Send</Button>
                </div>
                {message && (<div>{message}</div>) }
            </form>
        </Card>
    )
}

export default FeedbackForm
