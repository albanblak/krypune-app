import './home.css'
import Kategorite from "./home-components/kategorite";
import Banner from "./home-components/banner";
import Sifunksionon from "./home-components/sifunksionon";
import Kerkesat from "./home-components/kerkesat";
import Carousel from "./home-components/Carousel";
import GreenLine from "./home-components/greenLine";
import Lastpost from "./home-components/lastpost";
import Footer from "./home-components/footer";


const Home = (props) => {



    return (
        <div className="complete-banner" >
           <Banner/>
           <Kategorite/>
           <Sifunksionon/>
           <Kerkesat/>
           <Carousel/>
           <GreenLine/>
           <Lastpost/>
           <Footer/>
        </div>
    )
}


export default Home;