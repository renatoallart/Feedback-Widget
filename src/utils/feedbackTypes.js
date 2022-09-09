import Bug from '../images/button-card/bug.png'
import Idea from '../images/button-card/idea.png'
import Thought from '../images/button-card/thought.png'

export const feedbackTypes = {
    BUG:{
        title:'Problem',
        image: {
            source: Bug,
            alt:'bug'
        }
    },
    IDEA:{
        title:'Idea',
        image: {
            source: Idea,
            alt:'Lamp'
        }
    },
    OTHER:{
        title:'other',
        image: {
            source: Thought,
            alt:'cloud'
        }
    }
}