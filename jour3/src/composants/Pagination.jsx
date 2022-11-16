import _ from "lodash"

const Pagination = ({total , max, pageEncours , setPageEnCours}) => {
    const nbPage =  Math.ceil(total / max)  
    //let pages = _.range(1, nbPage + 1); // [1, 2]
    // [1,2,3,4,5]
    let pages = []
    for(let i = 1 ; i < nbPage + 1 ; i++){
        pages.push(i)
    }

    if(nbPage > 10){
        pages = [1 , "..." , nbPage  ]
    }
    function click(e){
        e.preventDefault()
        setPageEnCours(parseInt(e.target.innerText));
    }
    return ( 
        <>
            { max > total ? "" : 
                 <nav aria-label="Page navigation example">
                 <ul className="pagination">
                     <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                     { pages.map( (nb , index) => {
                        return  <li className="page-item " key={index}>
                            <a className={nb === pageEncours ? "page-link active" : "page-link"} href="#" onClick={click}>{nb}</a>
                            </li>
                     } ) }
                    
                     <li className="page-item"><a className="page-link" href="#">Next</a></li>
                 </ul>
             </nav>
            }
        </>
   
    );
}
 
export default Pagination;