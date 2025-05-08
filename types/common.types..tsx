export interface SectionIntroProps{
    tag: string;
    title?: string;
    href?: string
    buttonText?: string;
    // onClick: ()=> void;
}

export interface CategoryItem{
    id?: number;
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

export interface SocialMidiaItem{
    icon: string;
    href?: string;
}