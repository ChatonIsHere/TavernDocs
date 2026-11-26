---
title: "IngredientPageProvider"
description: "Page provider (identifier 6) that generates ingredient pages: an item's glyph, its cooking stage and the effects it gives when eaten."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IngredientPageProvider

A **class** in `Root.Township`, no namespace.

Page provider (identifier 6) that generates ingredient pages: an item's glyph, its cooking stage and the effects it gives when eaten. Get it through `Instance`.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** [`GeneratedPageProvider<Item>`](/game-api/types/global-e-h/generatedpageprovider-t)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"IngredientPageProvider()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | Logger for this provider. |
| <Link id="m-testitem" /><code>{"private "}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{" testItem"}</code> | Item used by `Test`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-identifier" /><code>{"override int Identifier { get; }"}</code> | Always 6, this provider's slot in `PageProvider.Providers`. |
| <Link id="m-instance" /><code>{"static "}<Link to="/game-api/types/global-i-l/ingredientpageprovider">{"IngredientPageProvider"}</Link>{" Instance { get; }"}</code> | The registered ingredient page provider. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-generatepage" /><code>{"override "}<Link to="/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" GeneratePage("}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{" item)"}</code> | Builds the page from the settings template, the item glyph, a cooking stage glyph and one glyph with segments per non-zero effect. |
| <Link id="m-getrandom" /><code>{"override "}<Link to="/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" GetRandom()"}</code> | Picks a random cookable item with a prefab. Returns its page if not yet discovered, otherwise null. |
| <Link id="m-serialize" /><code>{"override void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, ref "}<Link to="/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" page)"}</code> | Sends the page's item as a hash. The reading side rebuilds the page with `GeneratePage`. |
| <Link id="m-test" /><code>{"protected override void Test()"}</code> | Editor test: renders the page for `testItem`. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkifcookable" /><code>{"private bool CheckIfCookable("}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{" item)"}</code> | True when the item has a `CookableItem` component. |

</details>
