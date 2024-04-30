import Navbar from "../component/home/navbar";
import SlikSlider from "../component/about/slikSlider";

function About(){
    return(
       <div className="div">
        <Navbar/>
         <h1>About Page</h1>
        <SlikSlider/>
       </div>
    )
}
export default About;