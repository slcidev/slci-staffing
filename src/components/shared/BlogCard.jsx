import React from "react";
import { Calendar, User, ArrowRight } from "lucide-react";

export default function BlogCard({ post }) {
  return (
    <article className="group bg-white rounded-2xl cursor-pointer overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-teal-100">
      <div className="relative overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            {post.category}
          </span>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-500 transition-colors duration-300 line-clamp-2">
          {post.title}
        </h3>

        <p className="text-slate-600 line-clamp-3 leading-relaxed">
          {post.excerpt}
        </p>

        <div className="flex items-center gap-4 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <User size={16} />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar size={16} />
            <span>{post.date}</span>
          </div>
        </div>

        <button className="group-hover:text-blue-600 text-slate-700 font-semibold flex items-center gap-2 transition-all duration-300">
          Read More
          <ArrowRight
            size={16}
            className="group-hover:translate-x-1 transition-transform duration-300"
          />
        </button>
      </div>
    </article>
  );
}
