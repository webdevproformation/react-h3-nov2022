const Event = () => {
    const actionBtn2 = () => {
        const a = 10;
        alert(a * 2);
    }
    const data = [{id:1},{id:3}];
    const actionBtn3 = ({id}) => { console.log(id) }
    return ( 
        <div className="col-3">
            <h2>les événements avec React</h2>
            <button 
                className="btn btn-danger mt-3" 
                onClick={() => {alert("btn 1")}}>cliquer</button>
            <button 
                className="btn btn-success mt-3 ms-2" 
                onClick={ actionBtn2 }>cliquer</button>
            {data.map((d) => {
                return <button 
                    className="btn btn-dark" 
                    key={d.id}
                    onClick={ () => actionBtn3(d) }>action</button>
            })}
        </div>
     );
}
 
export default Event;