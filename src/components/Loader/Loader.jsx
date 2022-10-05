import './Loader.scss';

function Loader(){

    return(
        <div className='loaderContainer flexible--row'>
            <div className="pinwheel">
                <div className="pinwheel__line"></div>
                <div className="pinwheel__line"></div>
                <div className="pinwheel__line"></div>
                <div className="pinwheel__line"></div>
                <div className="pinwheel__line"></div>
                <div className="pinwheel__line"></div>  
            </div> 
        </div>
    )
}

export default Loader;