import React from "react";
import Head from "next/head";

let defaultSettings : any = {}

interface DefaultHelmetProps {
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
    children?: React.ReactNode;
    ogType?: string;
    twitterCard?: string;
    themeColor?: string;
}

export const BetterHead = (props : DefaultHelmetProps) => {

    const _defaultSettings = defaultSettings;

    const keys = Object.keys(props);
    for(var i = 0; i < keys.length; i++) {
        if(keys[i] === "title") _defaultSettings.title = props.title;
        if(keys[i] === "subTitle") _defaultSettings.subTitle = props.subTitle;
        if(keys[i] === "titleDivider") _defaultSettings.titleDivider = props.titleDivider;
    }

    const getTitle = () => {
        const title = props.title ?? _defaultSettings.title;
        let text = "";

        text = text + title;
        if(props.subTitle || _defaultSettings.subTitle) {
            if(props.titleDivider || _defaultSettings.titleDivider) {
                text = text + ` ${props.titleDivider ?? _defaultSettings.titleDivider} `
            }else {
                text = text + ` | `
            }
            text = text + props.subTitle ?? _defaultSettings.subTitle;
        }

        return text;
    }

    return (
        <>
            {(
                (props.title || _defaultSettings.title) ||
                (props.subTitle)
            )&&
                <Head>
                    <title>
                        {getTitle()}
                    </title>
                    <meta name="title" content={getTitle()} />
                    <meta property="og:title" content={getTitle()} />
                    <meta property="twitter:title" content={getTitle()} />
                </Head>
            }
            {props.description &&
                <Head>
                    <meta name="description" content={props.description}/>
                    <meta property="og:description" content={props.description} />
                    <meta property="twitter:description" content={props.description} />
                </Head>
            }
            <Head>
                {props.keywords && <meta name="keywords" content={props.keywords} />}
                {props.subject && <meta name="subject" content={props.subject} />}
                {props.copyright && <meta name="copyright" content={props.copyright} />}
                {props.language && <meta name="language" content={props.language} />}
                {props.robots && <meta name="robots" content={props.robots} />}
                {props.revised && <meta name="revised" content={props.revised} />}
                {props.topic && <meta name="topic" content={props.topic} />}
                {props.summary && <meta name="summary" content={props.summary} />}
                {props.Classification && <meta name="Classification" content={props.Classification} />}
                {props.author && <meta name="author" content={props.author} />}
                {props.replyTo && <meta name="replyTo" content={props.replyTo} />}
                {props.owner && <meta name="owner" content={props.owner} />}
                {props.identifierURL && <meta name="identifierURL" content={props.identifierURL} />}
                {props.favIcon && <link rel="icon" type="image/x-icon" href={props.favIcon} />}
                <meta property="og:type" content={props.ogType ?? "website"} />
                <meta property="twitter:card" content={props.twitterCard ?? "summary_large_image"} />
                {props.children}
                {props.themeColor && <meta name=" theme-color" content={props.themeColor} />}
            </Head>
            {props.url && 
                <Head>
                    <meta name="url" content={props.url} />
                    <meta property="og:url" content={props.url} />
                    <meta property="twitter:url" content={props.url} />
                </Head> 
            }
            {props.image && 
                <Head>
                    <meta property="og:image" content={props.image} />
                    <meta property="twitter:image" content={props.image} />
                </Head>
            }
        </>
    )
}