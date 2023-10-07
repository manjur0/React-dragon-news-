import { Link } from "react-router-dom";


const NewsCard = ({ news }) => {
    const { title, image_url, details, author, category_id, _id } = news
    return (
        <div className="border">
            {/* author info */}
            <div className="flex justify-start items-center  gap-2 bg-slate-100 rounded-t-lg py-2 pl-5 " >
                <div className="avatar">
                    <div className="w-8 rounded-full ring  ring-offset-base-100 ring-offset-2">
                        <img src={author.img} />
                    </div>
                </div>
                <div>
                    <h4 className="text-lg font-semibold ">{author.name}</h4>
                    <span>
                        <h4 className="text-sm">{author.published_date}</h4></span>
                </div>
            </div>

            {/* single post */}
            <div className="card  bg-base-100 shadow-sm mb-16">
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                </div>
                <figure className="mb-4"><img src={image_url} alt="Shoes" /></figure>

                {
                    details.length > 200 ? <p>{details.slice(0, 200)} <Link className="text-blue-600 font-semibold"
                        to={`/news/${_id}`}
                    >Read More...</Link></p> :
                        <p>{details}</p>
                }

                {/* raging and viwe */}
                <div>
                    <h4 className="text-lg font-semibold ">{category_id.rating}</h4>
                    <span>
                        <h4 className="text-sm">{category_id.total_view}</h4></span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;