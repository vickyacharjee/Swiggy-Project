import { useEffect, useState } from "react";
import Card from "./Card";
import Shimmer from "./Shimmer";

const Grocery = () => {
    useEffect(() => {
        fetchData();
    }, []);

    const [store, setStore] = useState([]); // Initialize as an empty array

    const fetchData = async () => {
        try {
            const response = await fetch('https://672488ea493fac3cf24e8768.mockapi.io/carts');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const json = await response.json();
            setStore(json);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    if (store.length==0) {
        return <Shimmer/>
    }
    return (
        <div>
            <div className="flex flex-wrap">
            {               
                store.map((item) => (
                    <div  key={item.id}> 
                            <Card items={item}/>
                    </div>
                ))
            }
            </div>
        </div>
    );
};

export default Grocery;