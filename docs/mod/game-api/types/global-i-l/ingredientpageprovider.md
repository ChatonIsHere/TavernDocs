---
title: "IngredientPageProvider"
description: "Page provider (identifier 6) that generates ingredient pages: an item's glyph, its cooking stage and the effects it gives when eaten."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IngredientPageProvider

A **class** in `Root.Township`, the global namespace.

Page provider (identifier 6) that generates ingredient pages: an item's glyph, its cooking stage and the effects it gives when eaten. Get it through `Instance`.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** [`GeneratedPageProvider<Item>`](/mod/game-api/types/global-e-h/generatedpageprovider-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"IngredientPageProvider()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">Logger for this provider.</span> |
| <Link id="m-testitem" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{" testItem"}</code> | <span className="api-desc">Item used by `Test`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-identifier" /><code>{"override int Identifier { get; }"}</code> | <span className="api-desc">Always 6, this provider's slot in `PageProvider.Providers`.</span> |
| <Link id="m-instance" /><code>{"static "}<Link to="/mod/game-api/types/global-i-l/ingredientpageprovider">{"IngredientPageProvider"}</Link>{" Instance { get; }"}</code> | <span className="api-desc">The registered ingredient page provider.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-generatepage" /><code>{"override "}<Link to="/mod/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" GeneratePage("}<Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{" item)"}</code> | <span className="api-desc">Builds the page from the settings template, the item glyph, a cooking stage glyph and one glyph with segments per non-zero effect.</span> |
| <Link id="m-getrandom" /><code>{"override "}<Link to="/mod/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" GetRandom()"}</code> | <span className="api-desc">Picks a random cookable item with a prefab. Returns its page if not yet discovered, otherwise null.</span> |
| <Link id="m-serialize" /><code>{"override void Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, ref "}<Link to="/mod/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" page)"}</code> | <span className="api-desc">Sends the page's item as a hash. The reading side rebuilds the page with `GeneratePage`.</span> |
| <Link id="m-test" /><code>{"protected override void Test()"}</code> | <span className="api-desc">Editor test: renders the page for `testItem`.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkifcookable" /><code>{"private bool CheckIfCookable("}<Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{" item)"}</code> | <span className="api-desc">True when the item has a `CookableItem` component.</span> |

</details>
