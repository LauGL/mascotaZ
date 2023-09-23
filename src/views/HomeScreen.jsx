import CardApp from "../components/CardApp"
import Carousel from "../components/Carousel"
import {detailsPets} from "../data/pets"

const HomeScreen = () => {
  return (
    <>
    <Carousel/>
        <div className="container">
          <div className="row mt-5 pb-5">
            {
            detailsPets.map((item, index)=>(
                <CardApp key={index} item={item}/>
              ))
            }
            </div>
        </div>
    </>
  )
}

export default HomeScreen