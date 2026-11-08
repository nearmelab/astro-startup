import React from 'react';
import IconTablerArrowRight from '~icons/tabler/arrow-right';

interface Post {
    slug: string;
    title: string;
    excerpt: string;
    img: string;
}

interface Props {
    posts: Post[];
    readMoreText: string;
}

const RelatedArticles: React.FC<Props> = ({ posts, readMoreText }) => {
    return (
        <div className="grid md:grid-cols-2 gap-8">
            {posts.map(post => (
                <a href={`/blog/${post.slug}`} key={post.slug} className="group block bg-light-card dark:bg-dark-card rounded-lg border border-light-border dark:border-dark-border overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
                    <div className="relative h-52 w-full overflow-hidden">
                        <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <div className="p-6">
                        <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-300">{post.title}</h3>
                        <p className="text-sm text-medium-text-light dark:text-medium-text mb-4 line-clamp-2">{post.excerpt}</p>
                        <div className="flex items-center gap-2 text-xs font-semibold text-primary">
                            {readMoreText}
                            <IconTablerArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </div>
                    </div>
                </a>
            ))}
        </div>
    );
};

export default RelatedArticles;
