import { useLoaderData } from "react-router-dom";


const Update = () => {
    const spotInfo = useLoaderData();
    console.log(spotInfo);
    return (
        <div>
            <h2>Update page</h2>
        </div>
    );
};

export default Update;