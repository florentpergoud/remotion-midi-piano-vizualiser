import { FunctionComponent } from 'react';

interface Props {
    className?: string;
    filled?: boolean;
}

export const icon09n: FunctionComponent<Props> = ({ className, filled }) => {
    return filled ? (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className={className}>
            <defs>
                <clipPath id="a">
                    <path fill="none" d="M42 64l2.85-17h-23.8L17 64" />
                </clipPath>
            </defs>
            <g clipPath="url(#a)">
                <g>
                    <path
                        fill="none"
                        stroke="#2885c7"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                        d="M24.52 49.05l-1.04 5.9"
                    />
                    {/* <animateTransform
                        attributeName="transform"
                        dur="0.5s"
                        repeatCount="indefinite"
                        type="translate"
                        values="2 -10; -2 10"
                    />
                    <animate attributeName="opacity" dur="0.5s" repeatCount="indefinite" values="1;1;0" /> */}
                </g>
                <g>
                    <path
                        fill="none"
                        stroke="#2885c7"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                        d="M31.52 49.05l-1.04 5.9"
                    />
                    <animateTransform
                        attributeName="transform"
                        begin="-0.3s"
                        dur="0.5s"
                        repeatCount="indefinite"
                        type="translate"
                        values="2 -10; -2 10"
                    />
                    <animate attributeName="opacity" begin="-0.3s" dur="0.5s" repeatCount="indefinite" values="1;1;0" />
                </g>
                <g>
                    <path
                        fill="none"
                        stroke="#2885c7"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                        d="M38.52 49.05l-1.04 5.9"
                    />
                    <animateTransform
                        attributeName="transform"
                        begin="-0.1s"
                        dur="0.5s"
                        repeatCount="indefinite"
                        type="translate"
                        values="2 -10; -2 10"
                    />
                    <animate attributeName="opacity" begin="-0.1s" dur="0.5s" repeatCount="indefinite" values="1;1;0" />
                </g>
            </g>
            <path
                fill="#efefef"
                stroke="#efefef"
                strokeMiterlimit="10"
                strokeWidth="3"
                d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"
            />
        </svg>
    ) : (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className={className}>
            <path
                fill="none"
                stroke="#e5e7eb"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M43.67 45.5h2.83a7 7 0 000-14h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0"
            />
            <g>
                <path
                    fill="none"
                    stroke="#2885c7"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                    d="M24.39 43.03l-.78 4.94"
                />
                <animateTransform
                    attributeName="transform"
                    dur="0.7s"
                    repeatCount="indefinite"
                    type="translate"
                    values="1 -5; -2 10"
                />
                <animate attributeName="opacity" dur="0.7s" repeatCount="indefinite" values="0;1;1;0" />
            </g>
            <g>
                <path
                    fill="none"
                    stroke="#2885c7"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                    d="M31.39 43.03l-.78 4.94"
                />
                <animateTransform
                    attributeName="transform"
                    begin="-0.4s"
                    dur="0.7s"
                    repeatCount="indefinite"
                    type="translate"
                    values="1 -5; -2 10"
                />
                <animate attributeName="opacity" begin="-0.4s" dur="0.7s" repeatCount="indefinite" values="0;1;1;0" />
            </g>
            <g>
                <path
                    fill="none"
                    stroke="#2885c7"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                    d="M38.39 43.03l-.78 4.94"
                />
                <animateTransform
                    attributeName="transform"
                    begin="-0.2s"
                    dur="0.7s"
                    repeatCount="indefinite"
                    type="translate"
                    values="1 -5; -2 10"
                />
                <animate attributeName="opacity" begin="-0.2s" dur="0.7s" repeatCount="indefinite" values="0;1;1;0" />
            </g>
        </svg>
    );
};
