import Body from './Body';
import Slider from './slider/Slider';

function Home({bodyInformation}) {

    return (
        <div>
            <Slider />
            <Body bodyInformation={bodyInformation} />
        </div>
    )
}

export default Home;