---
title: "GenericCraftingRecipePageProvider"
description: "Page provider (ID 2) that draws a generic crafting recipe as a page: result item glyph plus one glyph and count per material."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GenericCraftingRecipePageProvider

A **class** in `Root.Township`, the global namespace.

Page provider (ID 2) that draws a generic crafting recipe as a page: result item glyph plus one glyph and count per material. Get it with `Instance`.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** [`GeneratedPageProvider<GenericCraftingRecipe>`](/mod/game-api/types/global-e-h/generatedpageprovider-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GenericCraftingRecipePageProvider()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-testrecipe" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/genericcraftingrecipe">{"GenericCraftingRecipe"}</Link>{" testRecipe"}</code> | <span className="api-desc">Recipe used by `Test`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-identifier" /><code>{"override int Identifier { get; }"}</code> | <span className="api-desc">Provider ID, 2.</span> |
| <Link id="m-instance" /><code>{"static "}<Link to="/mod/game-api/types/global-e-h/genericcraftingrecipepageprovider">{"GenericCraftingRecipePageProvider"}</Link>{" Instance { get; }"}</code> | <span className="api-desc">The registered provider from `PageProvider.Providers[2]`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-generatepage" /><code>{"override "}<Link to="/mod/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" GeneratePage("}<Link to="/mod/game-api/types/alta-crafting/genericcraftingrecipe">{"GenericCraftingRecipe"}</Link>{" recipe)"}</code> | <span className="api-desc">Builds the page from the template, the result item's glyph, the recipe's unique glyphs and a counted glyph per material.</span> |
| <Link id="m-getrandom" /><code>{"override "}<Link to="/mod/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" GetRandom()"}</code> | <span className="api-desc">Picks a random recipe (from the simple list on a simple server) and returns its page if not yet found, else null.</span> |
| <Link id="m-serialize" /><code>{"override void Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, ref "}<Link to="/mod/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" page)"}</code> | <span className="api-desc">Syncs the page as the recipe hash; the reader rebuilds the page from it.</span> |
| <Link id="m-test" /><code>{"protected override void Test()"}</code> | <span className="api-desc">Editor test: renders `testRecipe` on the test renderer.</span> |
