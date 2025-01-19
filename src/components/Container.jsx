const Container = ({children}) => {
    return (
        <center>
            <div className="card cardBorder" style= {{width: "30rem"}}>
                <div className="card-body">
                    {children}
                </div>
            </div>
        </center>
    );
}

export default Container;