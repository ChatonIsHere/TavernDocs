---
title: "EdiblePageProvider"
description: "Generated page provider (identifier 5) that builds a glyph page for an edible item, showing its glyph, cooking stage and consumption effects."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EdiblePageProvider

A **class** in `Root.Township`, no namespace.

Generated page provider (identifier 5) that builds a glyph page for an edible item, showing its glyph, cooking stage and consumption effects. Get it with `EdiblePageProvider.Instance`.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`GeneratedPageProvider<Item>`](/game-api/types/global-e-h/generatedpageprovider-t)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"EdiblePageProvider()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-testitem" /><code>{"private "}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{" testItem"}</code> | Item used by `Test`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-identifier" /><code>{"override int Identifier { get; }"}</code> | Always 5, this provider's slot in `PageProvider.Providers`. |
| <Link id="m-instance" /><code>{"static "}<Link to="/game-api/types/global-e-h/ediblepageprovider">{"EdiblePageProvider"}</Link>{" Instance { get; }"}</code> | The registered edible page provider. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-generatepage" /><code>{"override "}<Link to="/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" GeneratePage("}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{" item)"}</code> | Builds the page from `EdiblePageSettings`: item glyph, a cooking stage glyph, and a bordered effect glyph with strength segments per non-zero effect. Returns null if the prefab has no `EdibleObject`. |
| <Link id="m-getrandom" /><code>{"override "}<Link to="/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" GetRandom()"}</code> | Picks random items until one has an `EdibleObject` prefab, and returns its page only if that page is new to the global pages manager, otherwise null. |
| <Link id="m-serialize" /><code>{"override void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, ref "}<Link to="/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" page)"}</code> | Writes the page's item as a hash, or reads one and regenerates the page from it. |
| <Link id="m-test" /><code>{"protected override void Test()"}</code> | Loads the page for `testItem` into the test renderer. |
