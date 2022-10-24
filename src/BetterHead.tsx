import Head from 'next/head';
import React, { FC, ReactNode, useContext } from 'react';
import { HelmetContext } from './HeadProvider';
import { HeadType } from './types';

export const BetterHead: FC<HeadType> = (props) => {
    const defaultValues: HeadType | undefined =
        useContext<HeadType>(HelmetContext);

    const getVal = (key: keyof HeadType): string => {
        return props[key] || defaultValues?.[key] || '';
    };

    const renderVal = (key: keyof HeadType): ReactNode => {
        const val = getVal(key);
        if (!val || val === '') return null;
        return <meta name={key} content={val} />;
    };

    return (
        <>
            <Head>
                <title>{getVal('title')}</title>
                <meta name='title' content={getVal('title')} />
                <meta property='og:title' content={getVal('title')} />
                <meta property='twitter:title' content={getVal('title')} />
            </Head>
            {props.description ||
                (defaultValues.description && (
                    <Head>
                        <meta
                            name='description'
                            content={getVal('description')}
                        />
                        <meta
                            property='og:description'
                            content={getVal('description')}
                        />
                        <meta
                            property='twitter:description'
                            content={getVal('description')}
                        />
                    </Head>
                ))}
            <Head>
                {renderVal('keywords')}
                {renderVal('themeColor')}
                {renderVal('subject')}
                {renderVal('language')}
                {renderVal('robots')}
                {renderVal('revised')}
                {renderVal('topic')}
                {renderVal('summary')}
                {renderVal('Classification')}
                {renderVal('author')}
                {renderVal('replyTo')}
                {renderVal('owner')}
                {renderVal('identifierURL')}
                {props.favIcon && (
                    <link rel='icon' type='image/x-icon' href={props.favIcon} />
                )}
                <meta property='og:type' content={props.ogType ?? 'website'} />
                <meta
                    property='twitter:card'
                    content={props.twitterCard ?? 'summary_large_image'}
                />
                {props.children}
            </Head>
            {props.url && (
                <Head>
                    <meta name='url' content={props.url} />
                    <meta property='og:url' content={props.url} />
                    <meta property='twitter:url' content={props.url} />
                </Head>
            )}
            {props.image && (
                <Head>
                    <meta property='og:image' content={props.image} />
                    <meta property='twitter:image' content={props.image} />
                </Head>
            )}
        </>
    );
};
