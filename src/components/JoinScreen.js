function JoinScreen ({start}) {    
    return(
        <section  className="join-screen">
                    <h1 className="">Join Quiz</h1>
                    <p className="">Technological Question Test</p>
                    <div className="">
                        <button onClick={start} className="">Start</button>
                    </div>
        </section>
    )
}
export default JoinScreen;