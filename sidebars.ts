import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// Four separate sections, one per navbar tab. A page only ever shows its own section's sidebar.
const sidebars: SidebarsConfig = {
    play: [
        'play/welcome',
        {
            type: 'category',
            label: 'Getting started',
            collapsed: false,
            items: [
                'play/getting-started/what-you-need',
                'play/getting-started/back-up-your-game',
                'play/getting-started/install-the-launcher',
                'play/getting-started/set-up-the-game',
                'play/getting-started/name-and-headset',
            ],
        },
        {
            type: 'category',
            label: 'Joining a server',
            collapsed: false,
            items: [
                'play/joining/community-servers',
                'play/joining/address-or-name',
                'play/joining/saved-and-recent',
                'play/joining/servers-with-mods',
            ],
        },
        {
            type: 'category',
            label: 'Mods',
            items: ['play/mods/getting-mods', 'play/mods/managing-mods', 'play/mods/modlists', 'play/mods/mod-sources'],
        },
        'play/staying-up-to-date',
        'play/troubleshooting',
    ],

    host: [
        'host/before-you-host',
        'host/ports',
        'host/pick-how-to-host',
        {
            type: 'category',
            label: 'Windows: Server launcher',
            items: ['host/windows/set-up-and-start', 'host/windows/settings', 'host/windows/players', 'host/windows/saves-and-backups'],
        },
        {
            type: 'category',
            label: 'Docker: a-township-container',
            items: ['host/docker/own-machine', 'host/docker/vps', 'host/docker/settings-and-updates', 'host/docker/game-panels'],
        },
        'host/wine',
        'host/mods-on-your-server',
        'host/getting-listed',
        'host/srv-records',
        'host/console-and-tokens',
        'host/config-reference',
        'host/troubleshooting',
    ],

    mod: [
        'mod/welcome',
        {
            type: 'category',
            label: 'Game mods',
            items: ['mod/game-mods/your-first-mod', 'mod/game-mods/game-files-or-stubs', 'mod/game-mods/building-on-github', 'mod/game-mods/mod-settings'],
        },
        {
            type: 'category',
            label: 'TavernLib',
            items: [
                'mod/tavernlib/what-tavernlib-does',
                'mod/tavernlib/client-server-or-both',
                'mod/tavernlib/roles',
                'mod/tavernlib/events-and-services',
                'mod/tavernlib/console-commands',
                'mod/tavernlib/folders-and-files',
            ],
        },
        {
            type: 'category',
            label: 'Launcher addons',
            items: ['mod/addons/how-addons-work', 'mod/addons/your-first-addon', 'mod/addons/hooks-reference', 'mod/addons/sharing-an-addon'],
        },
        {
            type: 'category',
            label: 'Publishing to TavernMods',
            items: ['mod/publishing/submitting', 'mod/publishing/manifest-reference', 'mod/publishing/your-own-source', 'mod/publishing/maintainers'],
        },
        'mod/troubleshooting',
    ],

    help: ['help/where-files-live', 'help/general-troubleshooting', 'help/getting-help', 'help/faq'],
};

export default sidebars;
