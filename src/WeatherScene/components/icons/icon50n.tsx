import { FunctionComponent } from 'react';

interface Props {
    className?: string;
    filled?: boolean;
}

export const icon50n: FunctionComponent<Props> = ({ className, filled }) => {
    return filled ? (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className={className}>
            <g>
                <path
                    fill="none"
                    stroke="#efefef"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="3"
                    d="M17 25h30"
                />
                {/* <animateTransform
                    attributeName="transform"
                    begin="0s"
                    dur="5s"
                    repeatCount="indefinite"
                    type="translate"
                    values="-4 0; 4 0; -4 0"
                /> */}
            </g>
            <g>
                <path
                    fill="none"
                    stroke="#efefef"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="3"
                    d="M17 32h30"
                />
                {/* <animateTransform
                    attributeName="transform"
                    begin="-2s"
                    dur="5s"
                    repeatCount="indefinite"
                    type="translate"
                    values="-3 0; 3 0; -3 0"
                /> */}
            </g>
            <g>
                <path
                    fill="none"
                    stroke="#efefef"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="3"
                    d="M17 39h30"
                />
                {/* <animateTransform
                    attributeName="transform"
                    begin="-4s"
                    dur="5s"
                    repeatCount="indefinite"
                    type="translate"
                    values="-4 0; 4 0; -4 0"
                /> */}
            </g>
        </svg>
    ) : (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className={className}>
            <g>
                <path
                    fill="none"
                    stroke="#e5e7eb"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="3"
                    d="M17 32h30"
                />
                <animateTransform
                    attributeName="transform"
                    begin="0s"
                    dur="5s"
                    repeatCount="indefinite"
                    type="translate"
                    values="-4 0; 4 0; -4 0"
                />
            </g>
            <g>
                <path
                    fill="none"
                    stroke="#e5e7eb"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="3"
                    d="M17 39h30"
                />
                <animateTransform
                    attributeName="transform"
                    begin="-2s"
                    dur="5s"
                    repeatCount="indefinite"
                    type="translate"
                    values="-3 0; 3 0; -3 0"
                />
            </g>
            <g>
                <path
                    fill="none"
                    stroke="#e5e7eb"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="3"
                    d="M17 25h30"
                />
                <animateTransform
                    attributeName="transform"
                    begin="-4s"
                    dur="5s"
                    repeatCount="indefinite"
                    type="translate"
                    values="-4 0; 4 0; -4 0"
                />
            </g>
        </svg>
    );
};
