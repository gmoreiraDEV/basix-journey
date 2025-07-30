import { Playfair_Display, Raleway } from "next/font/google";

import localFont from "next/font/local";

export const cascadiaCode = localFont({
    src: [
        {
            path: "../../public/fonts/Cascadia_Code/CascadiaCode-ExtraLight.ttf",
            weight: "300",
            style: "normal",
        },
        {
            path: "../../public/fonts/Cascadia_Code/CascadiaCode-ExtraLightItalic.ttf",
            weight: "300",
            style: "italic",
        },
        {
            path: "../../public/fonts/Cascadia_Code/CascadiaCode-Light.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../../public/fonts/Cascadia_Code/CascadiaCode-LightItalic.ttf",
            weight: "400",
            style: "italic",
        },
        {
            path: "../../public/fonts/Cascadia_Code/CascadiaCode-Regular.ttf",
            weight: "500",
            style: "normal",
        },
        {
            path: "../../public/fonts/Cascadia_Code/CascadiaCode-Italic.ttf",
            weight: "500",
            style: "italic",
        },
        {
            path: "../../public/fonts/Cascadia_Code/CascadiaCode-Medium.ttf",
            weight: "600",
            style: "normal",
        },
        {
            path: "../../public/fonts/Cascadia_Code/CascadiaCode-MediumItalic.ttf",
            weight: "600",
            style: "italic",
        },
        {
            path: "../../public/fonts/Cascadia_Code/CascadiaCode-SemiBold.ttf",
            weight: "700",
            style: "normal",
        },
        {
            path: "../../public/fonts/Cascadia_Code/CascadiaCode-SemiBoldItalic.ttf",
            weight: "700",
            style: "italic",
        },
        {
            path: "../../public/fonts/Cascadia_Code/CascadiaCode-Bold.ttf",
            weight: "800",
            style: "normal",
        },
        {
            path: "../../public/fonts/Cascadia_Code/CascadiaCode-BoldItalic.ttf",
            weight: "800",
            style: "italic",
        },
    ],
    variable: '--font-cascadia-code',
    display: 'swap',
});

export const playFair = Playfair_Display({
    subsets: ["latin"],
    variable: '--font-playfair'
});

export const raleway = Raleway({
    subsets: ["latin"],
    variable: '--font-raleway'
});
