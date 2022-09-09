import Bug from '../../images/button-card/bug.png'
import Idea from '../../images/button-card/idea.png'
import Thought from '../../images/button-card/thought.png'
import { useState } from "react";
import { FeedbackTypes } from "./steps/FeedbackTypes";
import { FeedbackContent } from "./steps/FeedbackContent";
import { Success } from "./steps/Success";
export const feedbackTypes = {
    BUG: {
        title: 'Problem',
        image: {
            source: Bug,
            alt: 'bug'
        }
    },
    IDEA: {
        title: 'Idea',
        image: {
            source: Idea,
            alt: 'Lamp'
        }
    },
    OTHER: {
        title: 'other',
        image: {
            source: Thought,
            alt: 'cloud'
        }
    }
}

export type FeedbackType = keyof typeof feedbackTypes
export function WidgetForm() {

    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
    const [feedbackSent, setFeedbackSet] = useState(false)

    function handleRestartFeedback(){
        setFeedbackSet(false)
        setFeedbackType(null)
    }


    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex
     flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            {feedbackSent ? (
                <Success onHandleRestartFeedback={handleRestartFeedback}/>
            ): (
                <>
                {!feedbackType ? (
                <FeedbackTypes onFeedbackTypeChange={setFeedbackType} />)
                : (
                    <FeedbackContent onFeedbackSent={()=>setFeedbackSet(true)} onFeedbackRestartRequested={handleRestartFeedback} feedbackType={feedbackType} />)}
                </>
            )}
            <footer className="text-xs text-neutral-400">
                Feito com 💗
            </footer>

        </div>
    )
}
