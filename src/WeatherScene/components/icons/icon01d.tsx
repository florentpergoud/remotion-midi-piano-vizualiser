import { FunctionComponent } from 'react';

interface Props {
    className?: string;
    filled?: boolean;
}

export const icon01d: FunctionComponent<Props> = ({ className, filled }) => {
    return filled ? (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className={className}>
            <g>
                <circle cx="32" cy="32" r="11.64" fill="#f4a71d" />
                <path
                    fill="none"
                    stroke="#f4a71d"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="3"
                    d="M32 15.71V9.5M32 54.5v-6.21M43.52 20.48l4.39-4.39M16.09 47.91l4.39-4.39M20.48 20.48l-4.39-4.39M47.91 47.91l-4.39-4.39M15.71 32H9.5M54.5 32h-6.21"
                />
                {/* <animateTransform
                    attributeName="transform"
                    dur="45s"
                    from="0 32 32"
                    repeatCount="indefinite"
                    to="360 32 32"
                    type="rotate"
                /> */}
            </g>
        </svg>
    ) : (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className={className}>
            <g>
                <path
                    fill="#f59e0b"
                    d="M32 23.36A8.64 8.64 0 1123.36 32 8.66 8.66 0 0132 23.36m0-3A11.64 11.64 0 1043.64 32 11.64 11.64 0 0032 20.36z"
                />
                <path
                    fill="none"
                    stroke="#f59e0b"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="3"
                    d="M32 15.71V9.5"
                >
                    <animate
                        attributeName="stroke-dasharray"
                        calcMode="spline"
                        dur="5s"
                        keySplines="0.5 0 0.5 1; 0.5 0 0.5 1"
                        keyTimes="0; .5; 1"
                        repeatCount="indefinite"
                        values="3 6; 6 6; 3 6"
                    />
                </path>
                <path
                    fill="none"
                    stroke="#f59e0b"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="3"
                    d="M32 48.29v6.21"
                >
                    <animate
                        attributeName="stroke-dasharray"
                        calcMode="spline"
                        dur="5s"
                        keySplines="0.5 0 0.5 1; 0.5 0 0.5 1"
                        keyTimes="0; .5; 1"
                        repeatCount="indefinite"
                        values="3 6; 6 6; 3 6"
                    />
                </path>
                <path
                    fill="none"
                    stroke="#f59e0b"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="3"
                    d="M43.52 20.48l4.39-4.39"
                >
                    <animate
                        attributeName="stroke-dasharray"
                        calcMode="spline"
                        dur="5s"
                        keySplines="0.5 0 0.5 1; 0.5 0 0.5 1"
                        keyTimes="0; .5; 1"
                        repeatCount="indefinite"
                        values="3 6; 6 6; 3 6"
                    />
                </path>
                <path
                    fill="none"
                    stroke="#f59e0b"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="3"
                    d="M20.48 43.52l-4.39 4.39"
                >
                    <animate
                        attributeName="stroke-dasharray"
                        calcMode="spline"
                        dur="5s"
                        keySplines="0.5 0 0.5 1; 0.5 0 0.5 1"
                        keyTimes="0; .5; 1"
                        repeatCount="indefinite"
                        values="3 6; 6 6; 3 6"
                    />
                </path>
                <path
                    fill="none"
                    stroke="#f59e0b"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="3"
                    d="M20.48 20.48l-4.39-4.39"
                >
                    <animate
                        attributeName="stroke-dasharray"
                        calcMode="spline"
                        dur="5s"
                        keySplines="0.5 0 0.5 1; 0.5 0 0.5 1"
                        keyTimes="0; .5; 1"
                        repeatCount="indefinite"
                        values="3 6; 6 6; 3 6"
                    />
                </path>
                <path
                    fill="none"
                    stroke="#f59e0b"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="3"
                    d="M43.52 43.52l4.39 4.39"
                >
                    <animate
                        attributeName="stroke-dasharray"
                        calcMode="spline"
                        dur="5s"
                        keySplines="0.5 0 0.5 1; 0.5 0 0.5 1"
                        keyTimes="0; .5; 1"
                        repeatCount="indefinite"
                        values="3 6; 6 6; 3 6"
                    />
                </path>
                <path
                    fill="none"
                    stroke="#f59e0b"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="3"
                    d="M15.71 32H9.5"
                >
                    <animate
                        attributeName="stroke-dasharray"
                        calcMode="spline"
                        dur="5s"
                        keySplines="0.5 0 0.5 1; 0.5 0 0.5 1"
                        keyTimes="0; .5; 1"
                        repeatCount="indefinite"
                        values="3 6; 6 6; 3 6"
                    />
                </path>
                <path
                    fill="none"
                    stroke="#f59e0b"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="3"
                    d="M48.29 32h6.21"
                >
                    <animate
                        attributeName="stroke-dasharray"
                        calcMode="spline"
                        dur="5s"
                        keySplines="0.5 0 0.5 1; 0.5 0 0.5 1"
                        keyTimes="0; .5; 1"
                        repeatCount="indefinite"
                        values="3 6; 6 6; 3 6"
                    />
                </path>
                <animateTransform
                    attributeName="transform"
                    dur="45s"
                    from="0 32 32"
                    repeatCount="indefinite"
                    to="360 32 32"
                    type="rotate"
                />
            </g>
        </svg>
    );
};
