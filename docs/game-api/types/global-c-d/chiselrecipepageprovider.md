---
title: "ChiselRecipePageProvider"
description: "Page provider (id 4) that makes recipe pages for chisel shapes, built from ChiselRecipePageSettings."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ChiselRecipePageProvider

A **class** in `Root.Township`, no namespace.

Page provider (id 4) that makes recipe pages for chisel shapes, built from `ChiselRecipePageSettings`. Get it with `Instance`.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`GeneratedPageProvider<ChiselDefinition>`](/game-api/types/global-e-h/generatedpageprovider-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ChiselRecipePageProvider()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-testrecipe" /><code>{"private "}<Link to="/game-api/types/alta-crafting/chiseldefinition">{"ChiselDefinition"}</Link>{" testRecipe"}</code> | Recipe used by `Test`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-identifier" /><code>{"override int Identifier { get; }"}</code> | Provider id, always 4. |
| <Link id="m-instance" /><code>{"static "}<Link to="/game-api/types/global-c-d/chiselrecipepageprovider">{"ChiselRecipePageProvider"}</Link>{" Instance { get; }"}</code> | The registered provider with id 4. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-generatepage" /><code>{"override "}<Link to="/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" GeneratePage("}<Link to="/game-api/types/alta-crafting/chiseldefinition">{"ChiselDefinition"}</Link>{" chiselDefinition)"}</code> | Builds a page from the template, one wood block and size bracket glyph per size step, and the recipe's icon. |
| <Link id="m-getrandom" /><code>{"override "}<Link to="/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" GetRandom()"}</code> | Picks a random chisel recipe and returns its page if the server hasn't handed it out yet, otherwise null. |
| <Link id="m-serialize" /><code>{"override void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, ref "}<Link to="/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" page)"}</code> | Writes the page's chisel definition by hash, or reads one and regenerates the page. |
| <Link id="m-test" /><code>{"protected override void Test()"}</code> | Editor test: shows the page for `testRecipe` on the test renderer. |
