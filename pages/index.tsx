import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import FeaturedPost from '../components/FeaturedPost'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <FeaturedPost
          postSummary={{
            id: 42,
            slug: "como-fazer-x-coisas-com-react-js",
            title: "Como fazer X coisas com React.js",
            imageUrls: {
              default:
                "/laptop.jpeg",
              small:
                "/laptop.jpeg",
              medium:
                "/laptop.jpeg",
              large:
                "/laptop.jpeg",
            },
            editor: {
              id: 29,
              name: "Daniel Bonifacio",
              avatarUrls: {
                default:
                  "https://storage.googleapis.com/alganews-files/posts/avatar-joao.jpeg",
                small:
                  "https://storage.googleapis.com/alganews-files/posts/avatar-joao-small.jpeg",
                medium:
                  "https://storage.googleapis.com/alganews-files/posts/avatar-joao-medium.jpeg",
                large:
                  "https://storage.googleapis.com/alganews-files/posts/avatar-joao-large.jpeg",
              },
              createdAt: "2017-03-04T00:12:45Z",
            },
            createdAt: "2020-12-04T00:12:45-03:00",
            updatedAt: "2020-12-05T00:12:45-03:00",
            published: true,
            tags: ["JavaScript", "react"],
            canBePublished: true,
            canBeUnpublished: true,
            canBeDeleted: true,
            canBeEdited: true,
          }}
        />

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>      
    </div>
  )
}

export default Home
