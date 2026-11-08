import React from 'react';
import IconTablerArrowRight from '~icons/tabler/arrow-right';

interface Post {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    category: string;
    img: string;
}

interface Props {
    post: Post;
    readMoreText: string;
    lang: string;
}

const BlogCard: React.FC<Props> = ({ post, readMoreText, lang }) => {
    return (
        <div className="h-full flex flex-col">
            <a href={`/${lang}/blog/${post.slug}`} className="block mb-4">
                <div className="relative h-60 w-full overflow-hidden">
                    <img src={post.img} alt={post.title} className="w-full h-full object-cover" />
                </div>
            </a>
            <div className="flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-2">
                    <a href={`/${lang}/blog/${post.slug}`}>{post.title}</a>
                </h3>
                <div className="text-sm text-medium-text-light dark:text-medium-text mb-4">
                    <span>{post.date}</span>
                </div>
                <p className="text-medium-text-light dark:text-medium-text mb-4 line-clamp-3 flex-grow">{post.excerpt}</p>
                <a href={`/${lang}/blog/${post.slug}`} className="group flex items-center gap-2 text-sm font-semibold text-primary mt-auto self-start underline hover:no-underline">
                    {readMoreText}
                    <IconTablerArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
            </div>
        </div>
    );
};

export default BlogCard;
