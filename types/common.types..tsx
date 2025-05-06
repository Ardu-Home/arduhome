export interface SectionIntroProps{
    tag: string;
    title?: string;
    href?: string
    buttonText?: string;
    // onClick: ()=> void;
}

export interface CategoryCardProps{
    icon: string;
    title: string;
    description: string;
    background?: boolean;
    href?: string;
}

// export interface ClientLogoProps{
//     src: string;
//     alt: string;
// }