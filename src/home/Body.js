import { AiOutlineCheck, AiFillLike } from 'react-icons/ai';
import { FaGlobeEurope } from 'react-icons/fa';

function Body() {


    return (
        <div className="container">
            <section className="priority">
                <article><span><AiOutlineCheck /></span> 100% ხარისხის გარანტია</article>
                <article><span><AiFillLike /></span> 72 საათის მანძილზე ხელმისაწვდომია</article>
                <article><span><FaGlobeEurope /></span> დამზადებულია საქართველოში</article>
            </section>
        </div>
    );
}

export default Body;