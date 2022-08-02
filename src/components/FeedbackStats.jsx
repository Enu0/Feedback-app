import PropTypes  from 'prop-types'

function FeedbackStats({feedback}){
    const initialValue = 0
    let average = feedback.reduce((acc, cur) => {
        return acc + cur.rating
    }, initialValue) / feedback.length
    average = average.toFixed(1).replace(/[.]0$/, '')

    return (
        <div className = 'feedback-stats'>
            <h4>{feedback.length} Reviews</h4>
            <h4>Average: {isNaN(average) ? 0 : average}</h4>
        </div>
    )
}

FeedbackStats.propTypes = {
    feedback: PropTypes.array.isRequired, 
}
export default FeedbackStats