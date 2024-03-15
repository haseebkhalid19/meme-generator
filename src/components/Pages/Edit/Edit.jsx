import { useState } from "react";
import { useSearchParams } from "react-router-dom"
import Text from "../Text";
import Button from 'react-bootstrap/Button';

const Edit = () => {

    const [params] = useSearchParams();
    const [count, setCount] = useState(0);

    const addText = () => {
        setCount(count + 1)
    }

    return (
        <>
            <div>
                <img src={params.get("url")} alt="image" width={500} />
                {
                    Array(count).fill(0).map(() => {
                        <Text />
                    })
                }
            </div>
            <Button onClick={addText}>Add Text</Button>
        </>
    )
}

export default Edit