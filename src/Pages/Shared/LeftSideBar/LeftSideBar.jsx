import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftSideBar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])


    return (
        <div>
            <h3 className="text-3xl">National News</h3>
            <div>
                {
                    categories.map(category => <Link 
                        className="block ml-4 py-3 font-semibold"
                        key={category.id}
                        to={`category/${category.id}`}
                        > {category.name}</Link>)
                }
            </div>
        </div>
    );
};

export default LeftSideBar;