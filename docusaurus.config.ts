import apiLinks from './src/remark/api-links.mjs';
import botIndex from './src/plugins/bot-index';
import searchIndex from './src/plugins/search-index';
import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const discord = 'https://discord.gg/jNQUUDAYSj';

const config: Config = {
    title: 'The Modding Tavern',
    tagline: 'Play, host and mod A Township Tale',
    titleDelimiter: '-',
    favicon: 'img/favicon.ico',
    headTags: [{tagName: 'link', attributes: {rel: 'apple-touch-icon', href: '/img/apple-touch-icon.png'}}],

    // Served by Cloudflare (wrangler.jsonc). The old GitHub Pages address redirects here (pages-redirect/).
    url: 'https://townshiptale.dev',
    baseUrl: '/',
    organizationName: 'ChatonIsHere',
    projectName: 'TavernDocs',
    trailingSlash: false,

    onBrokenLinks: 'throw',
    onBrokenAnchors: 'throw',
    markdown: {
        hooks: {
            onBrokenMarkdownLinks: 'throw',
            onBrokenMarkdownImages: 'throw',
        },
    },

    future: {
        v4: true,
        faster: true,
    },

    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            {
                docs: {
                    routeBasePath: '/',
                    sidebarPath: './sidebars.ts',
                    remarkPlugins: [apiLinks],
                    // The type reference pages (mod/game-api/types/<group>/<type>) stay out of the sidebar; the
                    // browser tables, the type index and the links in the guides lead to them.
                    async sidebarItemsGenerator({defaultSidebarItemsGenerator, ...args}) {
                        const isTypePage = (id: string) => /^mod\/(game-api|tavernlib-api)\/types\/[^/]+\//.test(id);
                        const prune = (items: any[]): any[] =>
                            items
                                .filter((i) => !(i.type === 'doc' && isTypePage(i.id)))
                                .map((i) => (i.type === 'category' ? {...i, items: prune(i.items)} : i))
                                .filter((i) => !(i.type === 'category' && i.items.length === 0 && !i.link));
                        return prune(await defaultSidebarItemsGenerator(args));
                    },
                    editUrl: 'https://github.com/ChatonIsHere/TavernDocs/edit/main/',
                },
                blog: false,
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],

    // botIndex writes build/bot/*.json for the Discord bot (bot/); searchIndex builds the site search (build/pagefind).
    plugins: [botIndex, searchIndex],

    themeConfig: {
        colorMode: {
            defaultMode: 'dark',
            disableSwitch: true,
            respectPrefersColorScheme: false,
        },
        navbar: {
            title: 'The Modding Tavern',
            logo: {alt: '', src: 'img/logo.png', width: 32, height: 32},
            items: [
                {type: 'docSidebar', sidebarId: 'play', position: 'left', label: 'Play'},
                {type: 'docSidebar', sidebarId: 'host', position: 'left', label: 'Host'},
                {
                    type: 'dropdown',
                    label: 'Mod',
                    position: 'left',
                    items: [
                        {type: 'docSidebar', sidebarId: 'mod', label: 'Guides'},
                        {type: 'docSidebar', sidebarId: 'tavernlib', label: 'TavernLib API'},
                        {type: 'docSidebar', sidebarId: 'game', label: 'Game API'},
                        {type: 'doc', docId: 'mod/tavernlib-api/types/overview', label: 'TavernLib types'},
                        {type: 'doc', docId: 'mod/game-api/types/overview', label: 'Game types'},
                    ],
                },
                {type: 'docSidebar', sidebarId: 'help', position: 'left', label: 'Help'},
                {href: discord, label: 'Discord', position: 'right'},
                {href: 'https://github.com/ModdingTavern', label: 'GitHub', position: 'right'},
                {type: 'search', position: 'right'},
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Docs',
                    items: [
                        {label: 'Play', to: '/play/welcome'},
                        {label: 'Host a server', to: '/host/before-you-host'},
                        {label: 'Make mods', to: '/mod/welcome'},
                        {label: 'TavernLib API', to: '/mod/tavernlib-api/overview'},
                        {label: 'Game API', to: '/mod/game-api/overview'},
                        {label: 'Help', to: '/help/getting-help'},
                    ],
                },
                {
                    title: 'Projects',
                    items: [
                        {label: 'TavernLauncher', href: 'https://github.com/ModdingTavern/TavernLauncher'},
                        {label: 'TavernLib', href: 'https://github.com/ModdingTavern/TavernLib'},
                        {label: 'TavernMods', href: 'https://moddingtavern.github.io/TavernMods/'},
                        {label: 'a-township-container', href: 'https://github.com/ChatonIsHere/a-township-container'},
                    ],
                },
                {
                    title: 'Community',
                    items: [
                        {label: 'Discord', href: discord},
                        {label: 'Discord bot', to: '/help/discord-bot'},
                        {label: 'GitHub', href: 'https://github.com/ModdingTavern'},
                    ],
                },
            ],
            copyright: 'The Modding Tavern. Not affiliated with Alta. Icon: <a href="https://www.flaticon.com/free-icons/scroll" title="scroll icons">Scroll icons created by Magnific - Flaticon</a>',
        },
        prism: {
            theme: prismThemes.vsDark,
            darkTheme: prismThemes.vsDark,
            additionalLanguages: ['bash', 'powershell', 'json', 'ini', 'csharp', 'python', 'docker'],
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
