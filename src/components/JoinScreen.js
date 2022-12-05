function JoinScreen ({start}) {    
    return(
        <section  className="join-screen">
                    <h1 className="">Join Quiz</h1>
                    <p className="">Technological Question Test</p>
                    <div className="">
                        <button className="btn btn-dark shadow rounded" onClick={start}>Start</button>
                    </div>
        </section>
    )
}
export default JoinScreen;