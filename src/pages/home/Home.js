import Card from "../../components/card/Card";
import Slider from "../../components/slider/Slider";

function Home () {
    return (
        <div>
            <Slider/>

            <div className="home-wrapper" style={{paddingTop:'30px', paddingBottom:'30px'}}>
                <div className="row">
                    <Card/>
                </div>
                {/* /.row */}
            </div>
            {/* /.home-wrapper */} 

        </div>
    )
}

export default Home