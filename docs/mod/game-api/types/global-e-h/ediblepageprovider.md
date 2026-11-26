---
title: "EdiblePageProvider"
description: "Generated page provider (identifier 5) that builds a glyph page for an edible item, showing its glyph, cooking stage and consumption effects."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EdiblePageProvider

A **class** in `Root.Township`, the global namespace.

Generated page provider (identifier 5) that builds a glyph page for an edible item, showing its glyph, cooking stage and consumption effects. Get it with `EdiblePageProvider.Instance`.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** [`GeneratedPageProvider<Item>`](/mod/game-api/types/global-e-h/generatedpageprovider-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EdiblePageProvider()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-testitem" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{" testItem"}</code> | <span className="api-desc">Item used by `Test`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-identifier" /><code>{"override int Identifier { get; }"}</code> | <span className="api-desc">Always 5, this provider's slot in `PageProvider.Providers`.</span> |
| <Link id="m-instance" /><code>{"static "}<Link to="/mod/game-api/types/global-e-h/ediblepageprovider">{"EdiblePageProvider"}</Link>{" Instance { get; }"}</code> | <span className="api-desc">The registered edible page provider.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-generatepage" /><code>{"override "}<Link to="/mod/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" GeneratePage("}<Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{" item)"}</code> | <span className="api-desc">Builds the page from `EdiblePageSettings`: item glyph, a cooking stage glyph, and a bordered effect glyph with strength segments per non-zero effect. Returns null if the prefab has no `EdibleObject`.</span> |
| <Link id="m-getrandom" /><code>{"override "}<Link to="/mod/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" GetRandom()"}</code> | <span className="api-desc">Picks random items until one has an `EdibleObject` prefab, and returns its page only if that page is new to the global pages manager, otherwise null.</span> |
| <Link id="m-serialize" /><code>{"override void Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, ref "}<Link to="/mod/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" page)"}</code> | <span className="api-desc">Writes the page's item as a hash, or reads one and regenerates the page from it.</span> |
| <Link id="m-test" /><code>{"protected override void Test()"}</code> | <span className="api-desc">Loads the page for `testItem` into the test renderer.</span> |
