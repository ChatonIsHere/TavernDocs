---
title: "PageProvider"
description: "Base for a kind of page content (for books and notes)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PageProvider

An **abstract class** in `Root.Township`, the global namespace.

Base for a kind of page content (for books and notes). Each provider registers itself by `Identifier` on Awake and makes, saves and syncs its own page data.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`GeneratedPageProvider<T>`](/mod/game-api/types/global-e-h/generatedpageprovider-t), [`StaticPageProvider`](/mod/game-api/types/global-s/staticpageprovider)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected PageProvider()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-testrenderer" /><code>{"protected "}<Link to="/mod/game-api/types/alta-items/pagerenderer">{"PageRenderer"}</Link>{" testRenderer"}</code> | <span className="api-desc">A page renderer used by the editor test buttons.</span> |

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-btnrandomtest" /><code>{"private bool btnRandomTest"}</code> | <span className="api-desc">Inspector button that runs `TestRandom`.</span> |
| <Link id="m-btntest" /><code>{"private bool btnTest"}</code> | <span className="api-desc">Inspector button that runs `Test`.</span> |
| <Link id="m-providers" /><code>{"private static Dictionary<int, "}<Link to="/mod/game-api/types/global-p/pageprovider">{"PageProvider"}</Link>{"> providers"}</code> | <span className="api-desc">Backing field for `Providers`: all registered providers by identifier.</span> |
| <Link id="m-spawnweight" /><code>{"private float spawnWeight"}</code> | <span className="api-desc">How likely this provider's pages are picked by `GetRandomSpawn`.</span> |
| <Link id="m-totalspawnweight" /><code>{"private static float totalSpawnWeight"}</code> | <span className="api-desc">Sum of all providers' spawn weights.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-identifier" /><code>{"abstract int Identifier { get; }"}</code> | <span className="api-desc">The provider's ID, stored with page data to find the provider again.</span> |
| <Link id="m-providers-2" /><code>{"static Dictionary<int, "}<Link to="/mod/game-api/types/global-p/pageprovider">{"PageProvider"}</Link>{"> Providers { get; }"}</code> | <span className="api-desc">All registered providers, keyed by `Identifier`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-findproviders" /><code>{"static void FindProviders()"}</code> | <span className="api-desc">Editor only: finds every provider in the scene and registers it. Does nothing in play mode.</span> |
| <Link id="m-getrandom" /><code>{"abstract "}<Link to="/mod/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" GetRandom()"}</code> | <span className="api-desc">Makes a random page of this provider's kind. May return null.</span> |
| <Link id="m-getrandomspawn" /><code>{"static "}<Link to="/mod/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" GetRandomSpawn()"}</code> | <span className="api-desc">Picks a provider by spawn weight and returns a random page from it, retrying a few times. Used when a page spawns with no content.</span> |
| <Link id="m-load" /><code>{"abstract "}<Link to="/mod/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" Load("}<Link to="/mod/game-api/types/alta-items/pageinstancesavedata">{"PageInstanceSaveData"}</Link>{" saveData)"}</code> | <span className="api-desc">Rebuilds page data from saved page data.</span> |
| <Link id="m-save" /><code>{"abstract void Save("}<Link to="/mod/game-api/types/alta-items/pageinstancesavedata">{"PageInstanceSaveData"}</Link>{" saveData, "}<Link to="/mod/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" page)"}</code> | <span className="api-desc">Writes page data into saved page data.</span> |
| <Link id="m-serialize" /><code>{"abstract void Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, ref "}<Link to="/mod/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" page)"}</code> | <span className="api-desc">Reads or writes page data on a stream, for network sync.</span> |
| <Link id="m-test" /><code>{"protected abstract void Test()"}</code> | <span className="api-desc">Editor test button: shows sample content on `testRenderer`.</span> |
| <Link id="m-testrandom" /><code>{"protected void TestRandom()"}</code> | <span className="api-desc">Editor test button: loads a random page onto `testRenderer`.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Registers this provider by `Identifier` and recalculates the total spawn weight.</span> |

</details>

## Used in

Members of other types that take, return or hold a `PageProvider`:

<div className="api-used-in">

[`PageData.PageData`](/mod/game-api/types/alta-items/pagedata#m-ctor), [`PageData.Provider`](/mod/game-api/types/alta-items/pagedata#m-provider).

</div>
