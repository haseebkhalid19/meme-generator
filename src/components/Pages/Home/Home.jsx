import MemeCard from "../../Card"
import { useEffect, useState } from "react";
import { getAllMemes } from "../../../api/memes";

const Home = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        getAllMemes().then(memes => setData(memes.data.memes))
    })

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    {
                        data.map(el => <MemeCard img={el.url} title={el.name} />)
                    }
                </div>
            </div>
        </>
    )
}

export default Home;