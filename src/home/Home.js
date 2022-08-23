import Body from './Body';
import Slider from './slider/Slider';

function Home({bodyInformation}) {

    return (
        <div>
            <Slider />
            <Body productions={bodyInformation.productions}/>
        </div>
    )
}

export default Home;