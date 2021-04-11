import { FunctionComponent } from 'react';

interface Props {
    className?: string;
    filled?: boolean;
}

export const icon13n: FunctionComponent<Props> = ({ className, filled }) => {
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
                    <path fill="none" d="M21.17 46.81L18 64h24l2.75-17.19H21.17z" />
                </clipPath>
            </defs>
            <g clipPath="url(#a)">
                <g>
                    <circle cx="19.22" cy="24.29" r="5.95" fill="#f4a71d" />
                    <path
                        fill="none"
                        stroke="#f4a71d"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                        d="M19.22 15.97v-3.18M19.22 35.79v-3.17M25.11 18.4l2.24-2.24M11.09 32.42l2.24-2.24M13.33 18.4l-2.24-2.24M27.35 32.42l-2.24-2.24M10.89 24.29H7.72M30.72 24.29h-3.17"
                    />
                    {/* <animateTransform
                        attributeName="transform"
                        dur="45s"
                        from="0 19.22 24.293"
                        repeatCount="indefinite"
                        to="360 19.22 24.293"
                        type="rotate"
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
                    <g>
                        <g>
                            <path
                                fill="#72b8d4"
                                d="M32.29 47.2l.29.82a.29.29 0 00.41.17l.79-.37a.3.3 0 01.4.4l-.37.79a.29.29 0 00.17.41l.82.29a.31.31 0 010 .58l-.82.29a.29.29 0 00-.17.41l.37.79a.3.3 0 01-.4.4l-.78-.37a.29.29 0 00-.41.17l-.29.82a.31.31 0 01-.58 0l-.3-.8a.29.29 0 00-.41-.17l-.79.37a.3.3 0 01-.4-.4l.37-.79a.29.29 0 00-.17-.41l-.82-.29a.31.31 0 010-.58l.82-.29a.29.29 0 00.17-.41l-.37-.79a.3.3 0 01.4-.4l.79.37a.29.29 0 00.41-.17l.29-.82a.31.31 0 01.58-.02z"
                            />
                            <animateTransform
                                attributeName="transform"
                                dur="9s"
                                repeatCount="indefinite"
                                type="rotate"
                                values="0 32 50; 180 32 50; 360 32 50"
                            />
                        </g>
                        <animateTransform
                            attributeName="transform"
                            dur="3s"
                            repeatCount="indefinite"
                            type="translate"
                            values="-3 0; 3 0"
                        />
                    </g>
                    <animateTransform
                        attributeName="transform"
                        dur="3s"
                        repeatCount="indefinite"
                        type="translate"
                        values="2 -6; -2 12"
                    />
                    <animate attributeName="opacity" dur="3s" repeatCount="indefinite" values="1;1;1;0" />
                </g>
                <g>
                    <g>
                        <g>
                            <path
                                fill="#72b8d4"
                                d="M39.29 47.2l.29.82a.29.29 0 00.41.17l.79-.37a.3.3 0 01.4.4l-.37.79a.29.29 0 00.17.41l.82.29a.31.31 0 010 .58l-.82.29a.29.29 0 00-.17.41l.37.79a.3.3 0 01-.4.4l-.78-.37a.29.29 0 00-.41.17l-.29.82a.31.31 0 01-.58 0l-.3-.8a.29.29 0 00-.41-.17l-.79.37a.3.3 0 01-.4-.4l.37-.79a.29.29 0 00-.17-.41l-.82-.29a.31.31 0 010-.58l.82-.29a.29.29 0 00.17-.41l-.37-.79a.3.3 0 01.4-.4l.79.37a.29.29 0 00.41-.17l.29-.82a.31.31 0 01.58-.02z"
                            />
                            <animateTransform
                                attributeName="transform"
                                dur="6s"
                                repeatCount="indefinite"
                                type="rotate"
                                values="0 39 50; 180 39 50; 360 39 50"
                            />
                        </g>
                        <animateTransform
                            attributeName="transform"
                            begin="-1s"
                            dur="3s"
                            repeatCount="indefinite"
                            type="translate"
                            values="0 0; 3 0"
                        />
                    </g>
                    <animateTransform
                        attributeName="transform"
                        begin="-1s"
                        dur="3s"
                        repeatCount="indefinite"
                        type="translate"
                        values="2 -6; -2 12"
                    />
                    <animate attributeName="opacity" begin="-1s" dur="3s" repeatCount="indefinite" values="1;1;1;0" />
                </g>
                <g>
                    <g>
                        <g>
                            <path
                                fill="#72b8d4"
                                d="M25.29 47.2l.29.82a.29.29 0 00.41.17l.79-.37a.3.3 0 01.4.4l-.37.79a.29.29 0 00.17.41l.82.29a.31.31 0 010 .58l-.82.29a.29.29 0 00-.17.41l.37.79a.3.3 0 01-.4.4l-.78-.37a.29.29 0 00-.41.17l-.29.82a.31.31 0 01-.58 0l-.3-.8a.29.29 0 00-.41-.17l-.79.37a.3.3 0 01-.4-.4l.37-.79a.29.29 0 00-.17-.41l-.82-.29a.31.31 0 010-.58l.82-.29a.29.29 0 00.17-.41l-.37-.79a.3.3 0 01.4-.4l.79.37a.29.29 0 00.41-.17l.29-.82a.31.31 0 01.58-.02z"
                            />
                            <animateTransform
                                attributeName="transform"
                                dur="6s"
                                repeatCount="indefinite"
                                type="rotate"
                                values="0 25 50; 180 25 50; 360 25 50"
                            />
                        </g>
                        <animateTransform
                            attributeName="transform"
                            begin="-1.5s"
                            dur="3s"
                            repeatCount="indefinite"
                            type="translate"
                            values="-3 0; 2 0"
                        />
                    </g>
                    <animateTransform
                        attributeName="transform"
                        begin="-1.5s"
                        dur="3s"
                        repeatCount="indefinite"
                        type="translate"
                        values="2 -6; -2 12"
                    />
                    <animate attributeName="opacity" begin="-1.5s" dur="3s" repeatCount="indefinite" values="1;1;1;0" />
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
                        fill="#f59e0b"
                        d="M19 20.05A3.95 3.95 0 1115.05 24 4 4 0 0119 20.05m0-2A5.95 5.95 0 1025 24a5.95 5.95 0 00-6-5.95z"
                    />
                    <path
                        fill="none"
                        stroke="#f59e0b"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                        d="M19 15.67V12.5M19 35.5v-3.17M24.89 18.11l2.24-2.24M10.87 32.13l2.24-2.24M13.11 18.11l-2.24-2.24M27.13 32.13l-2.24-2.24M10.67 24H7.5M30.5 24h-3.17"
                    />
                    <animateTransform
                        attributeName="transform"
                        dur="45s"
                        from="0 19.22 24.293"
                        repeatCount="indefinite"
                        to="360 19.22 24.293"
                        type="rotate"
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
                <g>
                    <g>
                        <path
                            fill="#72b8d4"
                            d="M24.24 42.67l.24.68a.25.25 0 00.35.14l.65-.31a.26.26 0 01.34.34l-.31.65a.25.25 0 00.14.35l.68.24a.25.25 0 010 .48l-.68.24a.25.25 0 00-.14.35l.31.65a.26.26 0 01-.34.34l-.65-.31a.25.25 0 00-.35.14l-.24.68a.25.25 0 01-.48 0l-.24-.68a.25.25 0 00-.35-.14l-.65.31a.26.26 0 01-.34-.34l.31-.65a.25.25 0 00-.14-.35l-.68-.24a.25.25 0 010-.48l.68-.24a.25.25 0 00.14-.35l-.31-.65a.26.26 0 01.34-.34l.65.31a.25.25 0 00.35-.14l.24-.68a.25.25 0 01.48 0z"
                        />
                        <animateTransform
                            attributeName="transform"
                            dur="9s"
                            repeatCount="indefinite"
                            type="rotate"
                            values="0 24 45; 360 24 45"
                        />
                    </g>
                    <animateTransform
                        attributeName="transform"
                        dur="4s"
                        repeatCount="indefinite"
                        type="translate"
                        values="-3 0; 3 0"
                    />
                </g>
                <animateTransform
                    attributeName="transform"
                    dur="4s"
                    repeatCount="indefinite"
                    type="translate"
                    values="2 -6; -2 12"
                />
                <animate attributeName="opacity" dur="4s" repeatCount="indefinite" values="0;1;1;1;0" />
            </g>
            <g>
                <g>
                    <g>
                        <path
                            fill="#72b8d4"
                            d="M31.24 42.67l.24.68a.25.25 0 00.35.14l.65-.31a.26.26 0 01.34.34l-.31.65a.25.25 0 00.14.35l.68.24a.25.25 0 010 .48l-.68.24a.25.25 0 00-.14.35l.31.65a.26.26 0 01-.34.34l-.65-.31a.25.25 0 00-.35.14l-.24.68a.25.25 0 01-.48 0l-.24-.68a.25.25 0 00-.35-.14l-.65.31a.26.26 0 01-.34-.34l.31-.65a.25.25 0 00-.14-.35l-.68-.24a.25.25 0 010-.48l.68-.24a.25.25 0 00.14-.35l-.31-.65a.26.26 0 01.34-.34l.65.31a.25.25 0 00.35-.14l.24-.68a.25.25 0 01.48 0z"
                        />
                        <animateTransform
                            attributeName="transform"
                            dur="9s"
                            repeatCount="indefinite"
                            type="rotate"
                            values="0 31 45; 360 31 45"
                        />
                    </g>
                    <animateTransform
                        attributeName="transform"
                        begin="-2s"
                        dur="4s"
                        repeatCount="indefinite"
                        type="translate"
                        values="-3 0; 3 0"
                    />
                </g>
                <animateTransform
                    attributeName="transform"
                    begin="-2s"
                    dur="4s"
                    repeatCount="indefinite"
                    type="translate"
                    values="2 -6; -2 12"
                />
                <animate attributeName="opacity" begin="-2s" dur="4s" repeatCount="indefinite" values="0;1;1;1;0" />
            </g>
            <g>
                <g>
                    <g>
                        <path
                            fill="#72b8d4"
                            d="M38.24 42.67l.24.68a.25.25 0 00.35.14l.65-.31a.26.26 0 01.34.34l-.31.65a.25.25 0 00.14.35l.68.24a.25.25 0 010 .48l-.68.24a.25.25 0 00-.14.35l.31.65a.26.26 0 01-.34.34l-.65-.31a.25.25 0 00-.35.14l-.24.68a.25.25 0 01-.48 0l-.24-.68a.25.25 0 00-.35-.14l-.65.31a.26.26 0 01-.34-.34l.31-.65a.25.25 0 00-.14-.35l-.68-.24a.25.25 0 010-.48l.68-.24a.25.25 0 00.14-.35l-.31-.65a.26.26 0 01.34-.34l.65.31a.25.25 0 00.35-.14l.24-.68a.25.25 0 01.48 0z"
                        />
                        <animateTransform
                            attributeName="transform"
                            dur="9s"
                            repeatCount="indefinite"
                            type="rotate"
                            values="0 38 45; 360 38 45"
                        />
                    </g>
                    <animateTransform
                        attributeName="transform"
                        begin="-1s"
                        dur="4s"
                        repeatCount="indefinite"
                        type="translate"
                        values="-3 0; 3 0"
                    />
                </g>
                <animateTransform
                    attributeName="transform"
                    begin="-1s"
                    dur="4s"
                    repeatCount="indefinite"
                    type="translate"
                    values="2 -6; -2 12"
                />
                <animate attributeName="opacity" begin="-1s" dur="4s" repeatCount="indefinite" values="0;1;1;1;0" />
            </g>
        </svg>
    );
};
