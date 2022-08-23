import Body from './Body';
import Slider from './slider/Slider';

function Home({bodyInformation}) {

    return (
        <div>
            <Slider />
            <Body priority={bodyInformation.priority} productions={bodyInformation.productions}/>
        </div>
    )
}

export default Home;