import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const sections = [
    {
        title: 'Play',
        to: '/play/welcome',
        text: 'Get the launcher, set up your game and join a server. Start here if you just want to play.',
    },
    {
        title: 'Host a server',
        to: '/host/before-you-host',
        text: 'Run your own server for friends or for everyone, on Windows, Docker or Linux.',
    },
    {
        title: 'Make mods',
        to: '/mod/welcome',
        text: 'Build game mods and launcher addons, and publish them on TavernMods.',
    },
];

export default function Home(): ReactNode {
    return (
        <Layout title="Home" description="Guides for playing, hosting and modding A Township Tale with The Modding Tavern.">
            <header className={styles.hero}>
                <div className="container">
                    <Heading as="h1">The Modding Tavern</Heading>
                    <p className={styles.lead}>
                        A Township Tale's official servers are gone. We keep the game going with our own launcher, servers and mods. These guides show you how to use them.
                    </p>
                </div>
            </header>
            <main className="container">
                <div className={styles.cards}>
                    {sections.map((s) => (
                        <Link key={s.title} to={s.to} className={styles.card}>
                            <Heading as="h2">{s.title}</Heading>
                            <p>{s.text}</p>
                        </Link>
                    ))}
                </div>
                <p className={styles.note}>The Modding Tavern is a fan project. It isn't made by or affiliated with Alta.</p>
            </main>
        </Layout>
    );
}
