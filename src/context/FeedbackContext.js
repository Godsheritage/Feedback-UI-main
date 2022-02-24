import {createContext, useState} from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState

    return(
        <feedbackContext.Provider value = {{}} >

            {children}
        </feedbackContext.Provider>

    )
}