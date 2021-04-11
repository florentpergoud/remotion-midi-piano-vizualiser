import { FunctionComponent } from 'react';

interface Props {
    className?: string;
    filled?: boolean;
}

export const icon01d: FunctionComponent<Props> = ({ className, filled }) => {
    return filled ? (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className={className}>
            <g>
                <path
                    fill="#72b9d5"
                    stroke="#72b9d5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M46.66 36.2a16.66 16.66 0 01-16.78-16.55 16.29 16.29 0 01.55-4.15A16.56 16.56 0 1048.5 36.1c-.61.06-1.22.1-1.84.1z"
                />
                {/* <animateTransform
                    attributeName="transform"
                    dur="10s"
                    repeatCount="indefinite"
                    type="rotate"
                    values="-5 32 32;15 32 32;-5 32 32"
                /> */}
            </g>
        </svg>
    ) : (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className={className}>
            <g>
                <path
                    fill="none"
                    stroke="#72b9d5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M46.66 36.2a16.66 16.66 0 01-16.78-16.55 16.29 16.29 0 01.55-4.15A16.56 16.56 0 1048.5 36.1c-.61.06-1.22.1-1.84.1z"
                />
                <animateTransform
                    attributeName="transform"
                    dur="10s"
                    repeatCount="indefinite"
                    type="rotate"
                    values="-5 32 32;15 32 32;-5 32 32"
                />
            </g>
        </svg>
    );
};
