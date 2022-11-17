


const Carte = ({carte , handleClick , disable }) => {

    const onClick = () => {
      if( !disable ) handleClick( carte )
    }

    return ( <div className={carte.clique ? "carte actif" : "carte"}  onClick={ onClick  }>
    <article>
      <div className="carte-recto"></div>
     <div className="carte-verso">{carte.img}</div>
    </article> 
  </div> );
}
 
export default Carte;