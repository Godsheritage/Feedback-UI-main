import './index.css'
import {v4 as uuidv4} from 'uuid'
import { useState } from 'react'
import Header from './components/Header'
import feedbackData from './data/feedbackData'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'



const App = () => {

    const [feedback, setFeedback] = useState(feedbackData)
    
    const deleteFeedback = (id) => {
      if (window.confirm("Are you sure you want to delete"
      )){
        setFeedback(feedback.filter((item) => item.id !== id))
      }

    }

   const  addFeedback =  (newFeedback) => {
     newFeedback.id = uuidv4()
     setFeedback([newFeedback,...feedback])
  }
      return (
        <div className = 'container'>
          <Header />
            <Router>   
              <Routes>
                <Route exact path = '/' element = {
                  <>
                      <FeedbackForm handleAdd = {addFeedback} />
                      <FeedbackStats feedback = {feedback}/>
                      <FeedbackList feedback = {feedback} handleDelete = {deleteFeedback} />

                  </>
                }>   
                </Route>
                <Route path = '/about' element = {<AboutPage/>} />
              </Routes>
              <AboutIconLink />
            </Router>
       </div>

    )
}

export default App
