import MemeCard from "../../Card";
import { useEffect, useState } from "react";
import { getAllMemes } from "../../../api/memes";
import './Home.css'

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllMemes().then((memes) => {
      setData(memes.data.memes);
      console.log(memes);
    });
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="gallery">
          {data.map((el, index) => (
            <MemeCard
              img={el.url}
              title={el.name}
              box_count={el.box_count}
              id={el.id}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
