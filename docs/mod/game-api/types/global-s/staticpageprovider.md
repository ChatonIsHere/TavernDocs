---
title: "StaticPageProvider"
description: "Page provider (identifier 1) for hand-made Page assets."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StaticPageProvider

A **class** in `Root.Township`, the global namespace.

Page provider (identifier 1) for hand-made `Page` assets. Get it through `Instance`.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`PageProvider`](/mod/game-api/types/global-p/pageprovider)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StaticPageProvider()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-page" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/page">{"Page"}</Link>{" page"}</code> | <span className="api-desc">Page shown by `Test`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-identifier" /><code>{"override int Identifier { get; }"}</code> | <span className="api-desc">Always 1.</span> |
| <Link id="m-instance" /><code>{"static "}<Link to="/mod/game-api/types/global-s/staticpageprovider">{"StaticPageProvider"}</Link>{" Instance { get; }"}</code> | <span className="api-desc">The registered provider with identifier 1.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getrandom" /><code>{"override "}<Link to="/mod/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" GetRandom()"}</code> | <span className="api-desc">Picks a random `Page` (the simple list on a simple server) and returns its data, or null if the player already has that page.</span> |
| <Link id="m-load" /><code>{"override "}<Link to="/mod/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" Load("}<Link to="/mod/game-api/types/alta-items/pageinstancesavedata">{"PageInstanceSaveData"}</Link>{" saveData)"}</code> | <span className="api-desc">Looks the page up by the hash in the save data.</span> |
| <Link id="m-save" /><code>{"override void Save("}<Link to="/mod/game-api/types/alta-items/pageinstancesavedata">{"PageInstanceSaveData"}</Link>{" saveData, "}<Link to="/mod/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" page)"}</code> | <span className="api-desc">Writes this provider's identifier and the page's hash into the save data.</span> |
| <Link id="m-serialize" /><code>{"override void Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, ref "}<Link to="/mod/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" page)"}</code> | <span className="api-desc">Sends the page as a hashed `Page` reference.</span> |
| <Link id="m-test" /><code>{"protected override void Test()"}</code> | <span className="api-desc">Editor test: shows `page` on the test renderer.</span> |
