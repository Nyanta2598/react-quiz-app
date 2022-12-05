function QuizResult  ({result,retry})  {    
    return(
        <div className="result-screen">
            <h1>Result: {result.percentage} % </h1>
            <p>{result.correct} correct answer out of {result.total} questions.</p>
            <button onClick={retry}>Retry</button>
        </div>
    );
}
export default QuizResult;