import { defaultContent } from "../data/defaultContent.js";

function ProductionSection() {
    const { productionName, productions } = defaultContent.bodyInformation;

    return (
        <div className="productions-container">
            <h1>{productionName}</h1>
            <section className="productions">
                {productions.map((product, i) => {
                    const { productName, productIcon, productDescription, more } = product;
                    return (
                        <article key={i}>
                            <div className="pa-name">
                                <h3>{productName}</h3>
                            </div>
                            <div className="pa-icon">{productIcon}</div>
                            <div className="pa-description">
                                <p>{productDescription}</p>
                            </div>
                            <button className="pa-btn">{more}</button>
                        </article>
                    );
                })}
            </section>
        </div>
    );
}

export default ProductionSection;
