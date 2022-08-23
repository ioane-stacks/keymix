import { AiOutlineCheck, AiFillLike } from 'react-icons/ai';
import { FaGlobeEurope } from 'react-icons/fa';

function Body({ productions }) {

    return (
        <div className="container">
            <section className="priority">
                <article><span><AiOutlineCheck /></span> 100% ხარისხის გარანტია</article>
                <article><span><AiFillLike /></span> 72 საათის მანძილზე ხელმისაწვდომია</article>
                <article><span><FaGlobeEurope /></span> დამზადებულია საქართველოში</article>
            </section>
            <div className="productions-container">
                <h1>პროდუქცია</h1>
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