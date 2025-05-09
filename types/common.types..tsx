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

export interface NavLinkItem{
    id: string;
    link: string;
    href: string;
    icon: string;
}

export interface SocialMidiaItem{
    id: string;
    icon: string;
    href?: string;
}

export interface PortfoItem{
    id: string;
    icon: string;
    title: string;
    description: string;
}