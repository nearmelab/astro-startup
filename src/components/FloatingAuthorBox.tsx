import React from 'react';

interface Author {
    id: string;
    name: string;
    avatar: string;
    role: string;
}

interface Props {
    author: Author;
}

const FloatingAuthorBox: React.FC<Props> = ({ author }) => {
    return (
        <div className="text-center mb-8">
            <img src={author.avatar} alt={author.name} className="w-20 h-20 rounded-full mx-auto mb-4" />
            <h4 className="font-bold text-lg">{author.name}</h4>
            <p className="text-sm text-medium-text-light dark:text-medium-text">{author.role}</p>
        </div>
    );
};

export default FloatingAuthorBox;
