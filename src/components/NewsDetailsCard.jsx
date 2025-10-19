import React from "react";
import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {
  const {
    title,
    author,
    thumbnail_url,
    details,
    tags,
    category_id,
  } = news;

  return (
    <div className=" rounded-xl overflow-hidden shadow-md bg-white">
      {/* Image */}
      <img
        src={thumbnail_url}
        alt={title}
        className="w-full h-64 object-cover"
      />

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          {title}
        </h2>

        {/* Author Info */}
        <div className="flex items-center gap-3 text-sm text-gray-600 mb-4">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-medium">{author?.name}</p>
            <p className="text-xs">
              {new Date(author?.published_date).toLocaleDateString("en-GB", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        </div>

        {/* Details */}
        <p className="text-gray-700 text-sm leading-relaxed mb-4">
          {details}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags?.map((tag, i) => (
            <span
              key={i}
              className="bg-gray-200 text-gray-700 text-xs font-medium px-2 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Button */}
        <Link to={`/category/${news.category_id}`} className="mt-2 px-4 py-2 bg-rose-600 text-white text-sm font-semibold rounded hover:bg-rose-700 transition">
          ← All news in this category
        </Link>
      </div>
    </div>
  );
};

export default NewsDetailsCard;
