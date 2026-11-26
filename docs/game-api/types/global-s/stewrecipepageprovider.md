---
title: "StewRecipePageProvider"
description: "Page provider (identifier 3) that builds recipe pages for stews from glyphs: ingredients, extra effects and effect modifiers."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StewRecipePageProvider

A **class** in `Root.Township`, no namespace.

Page provider (identifier 3) that builds recipe pages for stews from glyphs: ingredients, extra effects and effect modifiers. Get it through `Instance`.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`GeneratedPageProvider<StewRecipe>`](/game-api/types/global-e-h/generatedpageprovider-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StewRecipePageProvider()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-testrecipe" /><code>{"private "}<Link to="/game-api/types/alta-crafting/stewrecipe">{"StewRecipe"}</Link>{" testRecipe"}</code> | Recipe shown by `Test`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-identifier" /><code>{"override int Identifier { get; }"}</code> | Always 3. |
| <Link id="m-instance" /><code>{"static "}<Link to="/game-api/types/global-s/stewrecipepageprovider">{"StewRecipePageProvider"}</Link>{" Instance { get; }"}</code> | The registered provider with identifier 3. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-generatepage" /><code>{"override "}<Link to="/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" GeneratePage("}<Link to="/game-api/types/alta-crafting/stewrecipe">{"StewRecipe"}</Link>{" stewRecipe)"}</code> | Builds the page from the stew page template, adding an ingredient glyph for each ingredient and an effect glyph with circle segments for each effect. |
| <Link id="m-getrandom" /><code>{"override "}<Link to="/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" GetRandom()"}</code> | Picks a random stew recipe and returns its page, or null if the player already has it. |
| <Link id="m-serialize" /><code>{"override void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, ref "}<Link to="/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" page)"}</code> | Sends the recipe as a hashed reference and rebuilds the page on read. |
| <Link id="m-test" /><code>{"protected override void Test()"}</code> | Editor test: shows the page for `testRecipe`. |
