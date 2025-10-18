import React from "react";
import { FaStar, FaEye, FaShareAlt, FaRegBookmark } from "react-icons/fa";

const NewsCard = ({ news }) => {
    const {
        title,
        image_url,
        author,
        details,
        rating,
        total_view,
    } = news || {};

    // তারিখ সুন্দরভাবে format করা
    const formattedDate = new Date(author?.published_date).toLocaleDateString(
        "en-GB",
        {
            year: "numeric",
            month: "long",
            day: "numeric",
        }
    );

    return (
        <div className="card bg-base-100 shadow-md hover:shadow-lg transition rounded-2xl mb-3 overflow-hidden">
            {/* 🧑‍💼 Author Info */}
            <div className="flex justify-between bg-base-200 items-center px-4 pt-4">
                <div className="flex items-center gap-3">
                    <img
                        src={author?.img}
                        alt={author?.name}
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                        <h3 className="font-semibold text-gray-800">{author?.name}</h3>
                        <p className="text-sm text-gray-500">{formattedDate}</p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <button className="text-gray-500 hover:text-gray-700">
                        <FaRegBookmark />
                    </button>
                    <button className="text-gray-500 hover:text-gray-700">
                        <FaShareAlt />
                    </button>
                </div>
            </div>

            {/* 📰 Title */}
            <div className="px-4 mt-3">
                <h2 className="font-bold text-lg text-gray-900 leading-snug">
                    {title}
                </h2>
            </div>

            {/* 🖼️ Image */}
            <figure className="px-4 py-3">
                <img
                    src={image_url}
                    alt={title}
                    className="rounded-lg w-full h-48 object-cover"
                />
            </figure>

            {/* 📄 Details */}
            <div className="px-4 text-gray-600 text-sm mb-3">
                {details?.slice(0, 180)}...
                <span className="text-primary font-semibold cursor-pointer">
                    Read More
                </span>
            </div>

            {/* ⭐ Rating + 👁 Views */}
            <div className="card-actions border-t flex justify-between items-center px-4 py-3 text-sm text-gray-600">
                <div className="flex items-center gap-2 text-orange-500">
                    <FaStar />
                    <span className="font-medium">{rating?.number.toFixed(1)}</span>
                </div>
                <div className="flex items-center gap-1">
                    <FaEye />
                    <span>{total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
