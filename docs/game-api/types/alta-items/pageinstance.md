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

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`GeneratedNetworkEntityBehaviour`](/game-api/types/alta-networking/generatednetworkentitybehaviour), [`ISavable<PageInstanceSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<PageInstanceSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`BookPageInstance`](/game-api/types/alta-items/bookpageinstance), [`PageInstanceSaveData`](/game-api/types/alta-items/pageinstancesavedata), [`PaperPageInstance`](/game-api/types/alta-items/paperpageinstance)
- **Documented in** [Pages and books](/game-api/items/pages-and-books)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PageInstance()"}</code> |

## Fields

<details>
<summary>11 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animator" /><code>{"private Animator animator"}</code> | Backing field for `Animator`. |
| <Link id="m-colliders" /><code>{"private Collider[] colliders"}</code> | Colliders turned off while the page is in a book. |
| <Link id="m-data" /><code>{"private "}<Link to="/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" data"}</code> | Backing field for `Data`: the glyphs and provider of the page. |
| <Link id="m-isloaded" /><code>{"private bool isLoaded"}</code> | Whether the page is currently rendered. |
| <Link id="m-loadisduplicate" /><code>{"private bool loadIsDuplicate"}</code> | Set from the save so `InitializeAsServer` can mark the page a duplicate. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-predefinedpage" /><code>{"private Object predefinedPage"}</code> | A page object shown read-only in the inspector. Not used by this class. |
| <Link id="m-rendereddata" /><code>{"private "}<Link to="/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" renderedData"}</code> | The page data the current render was made from, released on unload. |
| <Link id="m-renderer" /><code>{"private Renderer renderer"}</code> | Renderer that shows the rendered page material. |
| <Link id="m-sync" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" sync"}</code> | Method sync for `Sync`, sent on connect and by `ForceSync`. |
| <Link id="m-visibilitydetector" /><code>{"private "}<Link to="/game-api/types/global-t-x/visibilitydetector">{"VisibilityDetector"}</Link>{" visibilityDetector"}</code> | Tells the page when it becomes visible or invisible so it loads and unloads its render. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-animator-2" /><code>{"Animator Animator { get; }"}</code> | The page's animator. |
| <Link id="m-book" /><code><Link to="/game-api/types/alta-items/book">{"Book"}</Link>{" "}<Link to="/game-api/types/alta-items/book">{"Book"}</Link>{" { get; private set; }"}</code> | The book this page is in, or null when loose. |
| <Link id="m-data-2" /><code><Link to="/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" Data { get; }"}</code> | The page's contents. |
| <Link id="m-isduplicate" /><code>{"protected virtual bool IsDuplicate { get; set; }"}</code> | Whether this page is a copy; saved with the page. Subclasses decide what it means. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-onchangedpage" /><code>{"event Action<"}<Link to="/game-api/types/alta-items/pageinstance">{"PageInstance"}</Link>{"> OnChangedPage"}</code> | Raised when page data is read from the network. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-forcesync" /><code>{"void ForceSync()"}</code> | Sends the page data to everyone in the chunks. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the synced data message and hooks rendering to visibility. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: restores the duplicate flag loaded from the save. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: sends the page data to a new player. |
| <Link id="m-reload" /><code>{"void Reload()"}</code> | Re-renders the page if it is visible. |
| <Link id="m-set" /><code>{"void Set("}<Link to="/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" data)"}</code> | Sets the page data and syncs it. |
| <Link id="m-setinbook" /><code>{"void SetInBook("}<Link to="/game-api/types/alta-items/book">{"Book"}</Link>{" book)"}</code> | Puts the page in a book (turning off its physics and colliders) or takes it out with null. |
| <Link id="m-generate" /><code>{"protected override void Generate("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: gives a newly generated page a random spawnable page, or destroys it if there is none. |
| <Link id="m-serialize" /><code>{"protected virtual void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Writes or reads the page data and raises `OnChangedPage` when reading. |

<details>
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-delayrender" /><code>{"private IEnumerator DelayRender("}<Link to="/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" data) (iterator)"}</code> | Client: renders the page data onto the page material a frame after it becomes visible. The overload with no arguments is empty. |
| <Link id="m-delayrender-2" /><code>{"private void DelayRender()"}</code> | Client: renders the page data onto the page material a frame after it becomes visible. The overload with no arguments is empty. |
| <Link id="m-load" /><code>{"private void Load()"}</code> | Starts rendering the page when it becomes visible. The explicit `ISavable` overload restores the page data and duplicate flag from a save. |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Releases the rendered page. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Empty. |
| <Link id="m-sync-2" /><code>{"private void Sync("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Syncs the page data; clients re-render it if visible. |
| <Link id="m-unload" /><code>{"private void Unload()"}</code> | Releases the rendered page material when the page goes out of view. |

</details>

## Used in

Members of other types that take, return or hold a `PageInstance`:

[`RecipePlacer.UpdatePage`](/game-api/types/alta-crafting/recipeplacer#m-updatepage), [`Book.SpawnPage`](/game-api/types/alta-items/book#m-spawnpage), [`Book.turning`](/game-api/types/alta-items/book#m-turning), [`BookSpawner.pagePrefab`](/game-api/types/alta-items/bookspawner#m-pageprefab), [`NewPageArguments.NewPageArguments`](/game-api/types/alta-items/newpagearguments#m-ctor-2), [`Pinboard.AddPage`](/game-api/types/alta-items/pinboard#m-addpage), [`Pinboard.pages`](/game-api/types/alta-items/pinboard#m-pages).
