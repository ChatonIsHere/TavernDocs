---
title: "ChiselRecipePageProvider"
description: "Page provider (id 4) that makes recipe pages for chisel shapes, built from ChiselRecipePageSettings."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ChiselRecipePageProvider

A **class** in `Root.Township`, the global namespace.

Page provider (id 4) that makes recipe pages for chisel shapes, built from `ChiselRecipePageSettings`. Get it with `Instance`.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`GeneratedPageProvider<ChiselDefinition>`](/mod/game-api/types/global-e-h/generatedpageprovider-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ChiselRecipePageProvider()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-testrecipe" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/chiseldefinition">{"ChiselDefinition"}</Link>{" testRecipe"}</code> | <span className="api-desc">Recipe used by `Test`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-identifier" /><code>{"override int Identifier { get; }"}</code> | <span className="api-desc">Provider id, always 4.</span> |
| <Link id="m-instance" /><code>{"static "}<Link to="/mod/game-api/types/global-c-d/chiselrecipepageprovider">{"ChiselRecipePageProvider"}</Link>{" Instance { get; }"}</code> | <span className="api-desc">The registered provider with id 4.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-generatepage" /><code>{"override "}<Link to="/mod/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" GeneratePage("}<Link to="/mod/game-api/types/alta-crafting/chiseldefinition">{"ChiselDefinition"}</Link>{" chiselDefinition)"}</code> | <span className="api-desc">Builds a page from the template, one wood block and size bracket glyph per size step, and the recipe's icon.</span> |
| <Link id="m-getrandom" /><code>{"override "}<Link to="/mod/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" GetRandom()"}</code> | <span className="api-desc">Picks a random chisel recipe and returns its page if the server hasn't handed it out yet, otherwise null.</span> |
| <Link id="m-serialize" /><code>{"override void Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, ref "}<Link to="/mod/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" page)"}</code> | <span className="api-desc">Writes the page's chisel definition by hash, or reads one and regenerates the page.</span> |
| <Link id="m-test" /><code>{"protected override void Test()"}</code> | <span className="api-desc">Editor test: shows the page for `testRecipe` on the test renderer.</span> |
