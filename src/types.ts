
export type HeadType = {
    title?: string;
    subTitle?: string;
    titleDivider?: string;
    keywords?: string;
    description?: string;
    subject?: string;
    copyright?: string;
    language?: string;
    robots?: string;
    revised?: string;
    topic?: string;
    summary?: string;
    Classification?: string;
    author?: string;
    replyTo?: string;
    owner?: string;
    url?: string;
    identifierURL?: string;
    image?: string;
    favIcon?: string;
    ogType?: string;
    twitterCard?: string;
    themeColor?: string;
}

export type HeadProps = HeadType & {
    reverseTitle?: boolean;
}

export type HeadProviderType = {
    children?: React.ReactNode;
} & HeadType;
