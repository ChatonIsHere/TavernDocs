// Links inline code that names a game or TavernLib type or member (`PlayerChunkManager`,
// `Player.AllPlayers`, `ForestGenerator.Wipe()`) to its reference page. Runs on the developer
// sections only; the Play and Host pages use code spans for folder and file names.
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const SECTIONS = /[\\/]docs[\\/](game-api|tavernlib-api|mod)[\\/]/;
const TYPE_PAGES = /[\\/]docs[\\/](game-api|tavernlib-api)[\\/]types[\\/][^\\/]+[\\/]/;
// Game type names that usually mean the .NET or Unity type of the same name in prose.
const STOP = new Set(['Action', 'Func', 'Path', 'Random', 'Debug', 'Object', 'Time', 'Settings', 'Status', 'Logger', 'File',
    'Directory', 'Color', 'Transform', 'Component', 'Camera', 'Light', 'Animation', 'Collider', 'Rigidbody', 'Event', 'Timer',
    'Type', 'Attribute', 'Exception', 'Thread', 'Stream', 'Task', 'Result', 'Message', 'Version', 'Mode', 'State', 'Data', 'Info']);

let index;
function load() {
    if (index) return index;
    index = {};
    const dir = path.join(here, '..', 'api-index');
    for (const f of fs.existsSync(dir) ? fs.readdirSync(dir) : []) {
        if (f.endsWith('.json')) Object.assign(index, JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8')));
    }
    return index;
}

function lookup(raw) {
    let v = raw.trim();
    if (!v || /\s/.test(v.replace(/,\s/g, ','))) return null;
    v = v.replace(/\([^()]*\)$/, '');
    const head = v.split(/[.<]/)[0];
    if (STOP.has(head)) return null;
    const idx = load();
    if (idx[v]) return idx[v];
    let base = v;
    while (/<[^<>]*>/.test(base)) base = base.replace(/<[^<>]*>/g, '');
    return base !== v ? idx[base] || null : null;
}

// A code span with a signature in it (`PlayerChunkManager ChunkManager { get; }`): one <code> with the
// type names inside it linked. Null when nothing in it is a known type.
function splitSignature(value) {
    if (!/\s|[(<,]/.test(value)) return null;
    const idx = load();
    const children = [];
    let pos = 0;
    let linked = 0;
    const re = /(?<![\w.])[A-Z]\w*(?:\.[A-Z]\w*)*/g;
    let m;
    while ((m = re.exec(value))) {
        let name = m[0];
        let url = STOP.has(name.split('.')[0]) ? null : idx[name];
        if (!url && name.includes('.')) {
            // `ServerHandler.Current.PlayerLimit`: link the longest known start
            const bits = name.split('.');
            while (bits.length > 1 && !url) {
                bits.pop();
                const n = bits.join('.');
                if (!STOP.has(bits[0]) && idx[n]) {
                    url = idx[n];
                    name = n;
                }
            }
        }
        if (!url) continue;
        if (m.index > pos) children.push({type: 'text', value: value.slice(pos, m.index)});
        children.push({type: 'link', url, title: null, children: [{type: 'text', value: name}]});
        pos = m.index + name.length;
        re.lastIndex = pos;
        linked++;
    }
    if (!linked) return null;
    if (pos < value.length) children.push({type: 'text', value: value.slice(pos)});
    // A span styled as code (src/css/custom.css): the theme's code component turns a code element with
    // links in it into a code block, which can't sit inside a paragraph.
    return {type: 'apiSignature', data: {hName: 'span', hProperties: {className: ['api-sig']}}, children};
}

export default function apiLinks() {
    return (tree, file) => {
        const p = file.path || (file.history && file.history[0]) || '';
        if (!SECTIONS.test(p) || TYPE_PAGES.test(p)) return;
        const walk = (node, skip) => {
            if (!node.children) return;
            const inSkip = skip || node.type === 'link' || node.type === 'linkReference' || node.type === 'heading';
            node.children = node.children.map((child) => {
                if (!inSkip && child.type === 'inlineCode') {
                    const url = lookup(child.value);
                    if (url) return {type: 'link', url, title: null, children: [child]};
                    const parts = splitSignature(child.value);
                    if (parts) return parts;
                }
                walk(child, inSkip);
                return child;
            });
        };
        walk(tree, false);
    };
}
