import React from 'react';

type ImageAndTextProps = {
    image: string,
    alt: string,
    children: React.ReactNode,
};

export function ImageAndText({children, image, alt}: ImageAndTextProps) {
    return (
        <div className="flex flex-col gap-8 md:flex-row justify-center items-center mb-8">
            <img src={image} alt={alt} className="w-1/2 max-w-[260px] aspect-square"/>
            <div className="flex flex-col">{children}</div>
        </div>
    );
}