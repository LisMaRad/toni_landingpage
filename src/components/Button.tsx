import React from 'react';

type ButtonProps = {
    onClick: () => void,
    classes?: string,
    children: React.ReactNode,
};

export function Button({children, classes, onClick}: ButtonProps) {
    return (
        <button
            className={`flex justify-center items-center bg-primary-color-lm px-5 py-2 rounded-button h-fit dark:bg-primary-color-dm ${classes}`}
            onClick={onClick}>{children}</button>
    );
}