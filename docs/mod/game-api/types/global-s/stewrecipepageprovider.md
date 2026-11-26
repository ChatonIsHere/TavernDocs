---
title: "StewRecipePageProvider"
description: "Page provider (identifier 3) that builds recipe pages for stews from glyphs: ingredients, extra effects and effect modifiers."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StewRecipePageProvider

A **class** in `Root.Township`, the global namespace.

Page provider (identifier 3) that builds recipe pages for stews from glyphs: ingredients, extra effects and effect modifiers. Get it through `Instance`.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`GeneratedPageProvider<StewRecipe>`](/mod/game-api/types/global-e-h/generatedpageprovider-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StewRecipePageProvider()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-testrecipe" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/stewrecipe">{"StewRecipe"}</Link>{" testRecipe"}</code> | <span className="api-desc">Recipe shown by `Test`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-identifier" /><code>{"override int Identifier { get; }"}</code> | <span className="api-desc">Always 3.</span> |
| <Link id="m-instance" /><code>{"static "}<Link to="/mod/game-api/types/global-s/stewrecipepageprovider">{"StewRecipePageProvider"}</Link>{" Instance { get; }"}</code> | <span className="api-desc">The registered provider with identifier 3.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-generatepage" /><code>{"override "}<Link to="/mod/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" GeneratePage("}<Link to="/mod/game-api/types/alta-crafting/stewrecipe">{"StewRecipe"}</Link>{" stewRecipe)"}</code> | <span className="api-desc">Builds the page from the stew page template, adding an ingredient glyph for each ingredient and an effect glyph with circle segments for each effect.</span> |
| <Link id="m-getrandom" /><code>{"override "}<Link to="/mod/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" GetRandom()"}</code> | <span className="api-desc">Picks a random stew recipe and returns its page, or null if the player already has it.</span> |
| <Link id="m-serialize" /><code>{"override void Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, ref "}<Link to="/mod/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" page)"}</code> | <span className="api-desc">Sends the recipe as a hashed reference and rebuilds the page on read.</span> |
| <Link id="m-test" /><code>{"protected override void Test()"}</code> | <span className="api-desc">Editor test: shows the page for `testRecipe`.</span> |
