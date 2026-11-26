---
title: "FillSet"
description: "Base ScriptableObject for a forest fill or paint set: a set of spawn modifiers plus the range the random fail score is picked from."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FillSet

An **abstract class** in `Root.Township`, `Alta.Forests`.

Base ScriptableObject for a forest fill or paint set: a set of spawn modifiers plus the range the random fail score is picked from.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** `ScriptableObject`, [`IFillSet`](/game-api/types/alta-world-generation/ifillset)
- **Derived types** [`ForestFillSet`](/game-api/types/alta-world-generation/forestfillset), [`SplatPaintSet`](/game-api/types/alta-world-generation/splatpaintset)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected FillSet()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-maximumfailscore" /><code>{"private float maximumFailScore"}</code> | Backing field for `MaximumFailScore`, default 1. |
| <Link id="m-minimumfailscore" /><code>{"private float minimumFailScore"}</code> | Backing field for `MinimumFailScore`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-maximumfailscore-2" /><code>{"float MaximumFailScore { get; }"}</code> | Highest random fail score (0 to 1) a point can roll. |
| <Link id="m-minimumfailscore-2" /><code>{"float MinimumFailScore { get; }"}</code> | Lowest random fail score (0 to 1) a point can roll. Higher makes spawning rarer. |
| <Link id="m-spawnmodifiers" /><code>{"abstract "}<Link to="/game-api/types/alta-world-generation/spawnmodifiers">{"SpawnModifiers"}</Link>{" "}<Link to="/game-api/types/alta-world-generation/spawnmodifiers">{"SpawnModifiers"}</Link>{" { get; }"}</code> | The modifier chain each candidate point runs through to decide whether, and how, something spawns there. |
