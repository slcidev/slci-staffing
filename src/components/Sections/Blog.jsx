import React from "react";
import BlogCard from "../shared/BlogCard";
import SectionHeading from "../shared/SectionHeading";
import HighlightText from "../shared/HighlightText";
import CtaButton from "../shared/CtaButton";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Blog() {
  const blogPosts = [
    {
      title: "The Future of Web Development: Trends to Watch in 2024",
      excerpt:
        "Explore the latest trends shaping the web development landscape, from AI integration to progressive web apps.",
      author: "Sarah Johnson",
      date: "March 15, 2024",
      category: "Technology",
      image:
        "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Building Scalable Mobile Applications: Best Practices",
      excerpt:
        "Learn essential strategies for creating mobile apps that can grow with your business and handle increased user loads.",
      author: "Michael Chen",
      date: "March 12, 2024",
      category: "Mobile",
      image:
        "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Cybersecurity Essentials for Modern Businesses",
      excerpt:
        "Protect your digital assets with these fundamental cybersecurity practices every business should implement.",
      author: "Emma Rodriguez",
      date: "March 10, 2024",
      category: "Security",
      image:
        "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <section
      id="blog"
      className="py-20 bg-gradient-to-br from-teal-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionHeading
            title={
              <>
                Latest <HighlightText text="Insights" />
              </>
            }
            subtitle="  Stay updated with the latest trends, tips, and insights from our team of experts."
            headingLevel="h2"
          />
        
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} post={post} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/about">
                <CtaButton variant="primary" icon={<ArrowRight size={20} />}>
                  View All Posts
                </CtaButton>
              </Link>
        </div>
      </div>
    </section>
  );
}
