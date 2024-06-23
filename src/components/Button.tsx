import React from 'react';

type ButtonProps = {
    onClick: () => void,
    classes?: string,
    children: React.ReactNode,
};

export function Button({children, classes, onClick}: ButtonProps) {
    return (
        <button
            className={`flex justify-center items-center gap-1 sm:gap-2 md:gap-4 bg-primary-color-lm px-3 py-1 md:px-5 md:py-2 rounded-button h-fit dark:bg-primary-color-dm hover:bg-orange-accent ${classes}`}
            onClick={onClick}>{children}</button>
    );
}