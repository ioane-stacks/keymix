import { defaultContent } from '../data/defaultContent.js';

function Body() {

    const {productionName, priority, productions } = defaultContent.bodyInformation; 

    return (
        <div className="container">
            <section className="priority">
                {priority.map((prior, i) => {
                    const { priorityIcon, priorityDescription } = prior;
                    return (
                        <article key={i}><span>{ priorityIcon }</span> { priorityDescription }</article>
                    )
                })}
            </section>
            <div className="productions-container">
                <h1>{productionName}</h1>
                <section className='productions'>

                    {productions.map((product, i) => {
                        const { productName, productIcon, productDescription, more} = product;
                        return (
                            <article key={i}>
                                <div className="pa-name"><h3>{productName}</h3></div>
                                <div className="pa-icon">{productIcon}</div>
                                <div className="pa-description">
                                    <p>{productDescription}</p>
                                </div>
                                <button className='pa-btn'>{more}</button>
                            </article>
                        )
                    })}
                    
                </section>
            </div>
        </div>
    );
}

export default Body;