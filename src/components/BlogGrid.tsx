import React from 'react';
import BlogCard from './BlogCard';

interface Post {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    category: string;
    img: string;
}

interface Props {
    posts: Post[];
    readMoreText: string;
    lang: string; // Add lang prop
}

const BlogGrid: React.FC<Props> = ({ posts, readMoreText, lang }) => {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
                <BlogCard
                    key={post.slug}
                    post={post}
                    readMoreText={readMoreText}
                    lang={lang} // Pass lang prop to BlogCard
                />
            ))}
        </div>
    );
};

export default BlogGrid;
