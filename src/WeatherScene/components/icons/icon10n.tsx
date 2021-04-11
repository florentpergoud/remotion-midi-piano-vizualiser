import { FunctionComponent } from 'react';

interface Props {
    className?: string;
    filled?: boolean;
}

export const icon10n: FunctionComponent<Props> = ({ className, filled }) => {
    return filled ? (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className={className}>
            <defs>
                <clipPath id="a">
                    <path
                        fill="none"
                        d="M10.55 34.21l-3.83-3.42-2-6 1-7 4-5 5-3h6l5 1 3 3 2.56 4.36-4.56 4.64h-5l-5 5v3l-6.17 3.42z"
                    />
                </clipPath>
                <clipPath id="b">
                    <path fill="none" d="M42 64l2.85-17h-23.8L17 64" />
                </clipPath>
            </defs>
            <g clipPath="url(#a)">
                <g>
                    <path
                        fill="#72b9d5"
                        stroke="#72b9d5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M29.33 27.13A10.6 10.6 0 0118.65 16.6 10.44 10.44 0 0119 14a10.54 10.54 0 1011.5 13.07 11.46 11.46 0 01-1.17.06z"
                    />
                    {/* <animateTransform
                        attributeName="transform"
                        dur="10s"
                        repeatCount="indefinite"
                        type="rotate"
                        values="-10 19.22 24.293;10 19.22 24.293;-10 19.22 24.293"
                    /> */}
                </g>
            </g>
            <path
                fill="#efefef"
                stroke="#efefef"
                strokeMiterlimit="10"
                strokeWidth="3"
                d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"
            />
            <g clipPath="url(#b)">
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
                    {/* <animateTransform
                        attributeName="transform"
                        begin="-0.3s"
                        dur="0.5s"
                        repeatCount="indefinite"
                        type="translate"
                        values="2 -10; -2 10"
                    />
                    <animate attributeName="opacity" begin="-0.3s" dur="0.5s" repeatCount="indefinite" values="1;1;0" /> */}
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
                    {/* <animateTransform
                        attributeName="transform"
                        begin="-0.1s"
                        dur="0.5s"
                        repeatCount="indefinite"
                        type="translate"
                        values="2 -10; -2 10"
                    />
                    <animate attributeName="opacity" begin="-0.1s" dur="0.5s" repeatCount="indefinite" values="1;1;0" /> */}
                </g>
            </g>
        </svg>
    ) : (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className={className}>
            <defs>
                <clipPath id="a">
                    <path fill="none" d="M12 35l-5.28-4.21-2-6 1-7 4-5 5-3h6l5 1 3 3L33 20l-6 4h-6l-3 3v4l-4 2-2 2z" />
                </clipPath>
            </defs>
            <g clipPath="url(#a)">
                <g>
                    <path
                        fill="none"
                        stroke="#72b9d5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M29.33 26.68a10.61 10.61 0 01-10.68-10.54A10.5 10.5 0 0119 13.5a10.54 10.54 0 1011.5 13.11 11.48 11.48 0 01-1.17.07z"
                    />
                    <animateTransform
                        attributeName="transform"
                        dur="10s"
                        repeatCount="indefinite"
                        type="rotate"
                        values="-10 19.22 24.293;10 19.22 24.293;-10 19.22 24.293"
                    />
                </g>
            </g>
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
