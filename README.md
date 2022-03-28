# Next Better SEO
Maintaining good seo in next is not easy in itself. You can always use head to help you but understanding all the meta tags and so on can be hard. Therefore I made a npm package to help with easily maintaining good seo.

## Getting started

```terminal
npm i --save @limeyfy/next-seo
// or
yarn add @limeyfy/next-seo
```

### Example

```jsx
import '../common/styles/globals.scss'
import type { AppProps } from 'next/app'
import { BetterHead } from '@limeyfy/next-seo'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <BetterHead 
        title='Title'
        subTitle='Limeyfy'
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
```

### Test SEO

```jsx
import '../common/styles/globals.scss'
import type { AppProps } from 'next/app'
import { BetterHead, useSeo } from '@limeyfy/next-seo'

function MyApp({ Component, pageProps }: AppProps) {

  const { result } = useSeo();

  console.log(result())

  return (
    <>
      <BetterHead 
        title='Title'
        subTitle='Limeyfy'
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
```

### Another example

```jsx
import '../common/styles/globals.scss'
import type { AppProps } from 'next/app'
import { BetterHead } from '@limeyfy/next-seo'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <BetterHead 
        title='Title'
        subTitle='Limeyfy'
      >
        <meta name='og:country-name' content='NORWAY' />
      </BetterHead>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
```

### Params

- title?: <code>string</code>;
- subTitle?: <code>string</code>;
- title?: <code>string</code>;
- subTitle?: <code>string</code>;
- titleDivider?: <code>string</code>;
- keywords?: <code>string</code>;
- themeColor?: <code>string</code>;
- description?: <code>string</code>;
- subject?: <code>string</code>;
- copyright?: <code>string</code>;
- language?: <code>string</code>;
- robots?: <code>string</code>;
- revised?: <code>string</code>;
- topic?: <code>string</code>;
- summary?: <code>string</code>;
- Classification?: <code>string</code>;
- author?: <code>string</code>;
- replyTo?: <code>string</code>;
- owner?: <code>string</code>;
- url?: <code>string</code>;
- identifierURL?: <code>string</code>;
- image?: <code>string</code>;
- favIcon?: <code>string</code>;
- children?: <code>React.ReactNode</code>;
