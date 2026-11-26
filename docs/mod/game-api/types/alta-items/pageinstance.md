---
title: "PageInstance"
description: "A page or sheet of paper entity showing PageData (a recipe or glyphs)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PageInstance

A **class** in `Root.Township`, `Alta.Pages`.

A page or sheet of paper entity showing `PageData` (a recipe or glyphs). It renders only while visible, syncs its data from the server and is saved; freshly generated pages get a random page.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`GeneratedNetworkEntityBehaviour`](/mod/game-api/types/alta-networking/generatednetworkentitybehaviour), [`ISavable<PageInstanceSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<PageInstanceSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`BookPageInstance`](/mod/game-api/types/alta-items/bookpageinstance), [`PageInstanceSaveData`](/mod/game-api/types/alta-items/pageinstancesavedata), [`PaperPageInstance`](/mod/game-api/types/alta-items/paperpageinstance)
- **Documented in** [Pages and books](/mod/game-api/items/pages-and-books)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PageInstance()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>11 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animator" /><code>{"private Animator animator"}</code> | <span className="api-desc">Backing field for `Animator`.</span> |
| <Link id="m-colliders" /><code>{"private Collider[] colliders"}</code> | <span className="api-desc">Colliders turned off while the page is in a book.</span> |
| <Link id="m-data" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" data"}</code> | <span className="api-desc">Backing field for `Data`: the glyphs and provider of the page.</span> |
| <Link id="m-isloaded" /><code>{"private bool isLoaded"}</code> | <span className="api-desc">Whether the page is currently rendered.</span> |
| <Link id="m-loadisduplicate" /><code>{"private bool loadIsDuplicate"}</code> | <span className="api-desc">Set from the save so `InitializeAsServer` can mark the page a duplicate.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-predefinedpage" /><code>{"private Object predefinedPage"}</code> | <span className="api-desc">A page object shown read-only in the inspector. Not used by this class.</span> |
| <Link id="m-rendereddata" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" renderedData"}</code> | <span className="api-desc">The page data the current render was made from, released on unload.</span> |
| <Link id="m-renderer" /><code>{"private Renderer renderer"}</code> | <span className="api-desc">Renderer that shows the rendered page material.</span> |
| <Link id="m-sync" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" sync"}</code> | <span className="api-desc">Method sync for `Sync`, sent on connect and by `ForceSync`.</span> |
| <Link id="m-visibilitydetector" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/visibilitydetector">{"VisibilityDetector"}</Link>{" visibilityDetector"}</code> | <span className="api-desc">Tells the page when it becomes visible or invisible so it loads and unloads its render.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-animator-2" /><code>{"Animator Animator { get; }"}</code> | <span className="api-desc">The page's animator.</span> |
| <Link id="m-book" /><code><Link to="/mod/game-api/types/alta-items/book">{"Book"}</Link>{" "}<Link to="/mod/game-api/types/alta-items/book">{"Book"}</Link>{" { get; private set; }"}</code> | <span className="api-desc">The book this page is in, or null when loose.</span> |
| <Link id="m-data-2" /><code><Link to="/mod/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" Data { get; }"}</code> | <span className="api-desc">The page's contents.</span> |
| <Link id="m-isduplicate" /><code>{"protected virtual bool IsDuplicate { get; set; }"}</code> | <span className="api-desc">Whether this page is a copy; saved with the page. Subclasses decide what it means.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-onchangedpage" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-items/pageinstance">{"PageInstance"}</Link>{"> OnChangedPage"}</code> | <span className="api-desc">Raised when page data is read from the network.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-forcesync" /><code>{"void ForceSync()"}</code> | <span className="api-desc">Sends the page data to everyone in the chunks.</span> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets up the synced data message and hooks rendering to visibility.</span> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: restores the duplicate flag loaded from the save.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Server: sends the page data to a new player.</span> |
| <Link id="m-reload" /><code>{"void Reload()"}</code> | <span className="api-desc">Re-renders the page if it is visible.</span> |
| <Link id="m-set" /><code>{"void Set("}<Link to="/mod/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" data)"}</code> | <span className="api-desc">Sets the page data and syncs it.</span> |
| <Link id="m-setinbook" /><code>{"void SetInBook("}<Link to="/mod/game-api/types/alta-items/book">{"Book"}</Link>{" book)"}</code> | <span className="api-desc">Puts the page in a book (turning off its physics and colliders) or takes it out with null.</span> |
| <Link id="m-generate" /><code>{"protected override void Generate("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: gives a newly generated page a random spawnable page, or destroys it if there is none.</span> |
| <Link id="m-serialize" /><code>{"protected virtual void Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Writes or reads the page data and raises `OnChangedPage` when reading.</span> |

<details className="api-private">
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-delayrender" /><code>{"private IEnumerator DelayRender("}<Link to="/mod/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" data) (iterator)"}</code> | <span className="api-desc">Client: renders the page data onto the page material a frame after it becomes visible. The overload with no arguments is empty.</span> |
| <Link id="m-delayrender-2" /><code>{"private void DelayRender()"}</code> | <span className="api-desc">Client: renders the page data onto the page material a frame after it becomes visible. The overload with no arguments is empty.</span> |
| <Link id="m-load" /><code>{"private void Load()"}</code> | <span className="api-desc">Starts rendering the page when it becomes visible. The explicit `ISavable` overload restores the page data and duplicate flag from a save.</span> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Releases the rendered page.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Empty.</span> |
| <Link id="m-sync-2" /><code>{"private void Sync("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Syncs the page data; clients re-render it if visible.</span> |
| <Link id="m-unload" /><code>{"private void Unload()"}</code> | <span className="api-desc">Releases the rendered page material when the page goes out of view.</span> |

</details>

## Used in

Members of other types that take, return or hold a `PageInstance`:

<div className="api-used-in">

[`RecipePlacer.UpdatePage`](/mod/game-api/types/alta-crafting/recipeplacer#m-updatepage), [`Book.SpawnPage`](/mod/game-api/types/alta-items/book#m-spawnpage), [`Book.turning`](/mod/game-api/types/alta-items/book#m-turning), [`BookSpawner.pagePrefab`](/mod/game-api/types/alta-items/bookspawner#m-pageprefab), [`NewPageArguments.NewPageArguments`](/mod/game-api/types/alta-items/newpagearguments#m-ctor-2), [`Pinboard.AddPage`](/mod/game-api/types/alta-items/pinboard#m-addpage), [`Pinboard.pages`](/mod/game-api/types/alta-items/pinboard#m-pages).

</div>
