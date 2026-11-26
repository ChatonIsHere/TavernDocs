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

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** `ScriptableObject`, [`IFillSet`](/mod/game-api/types/alta-world-generation/ifillset)
- **Derived types** [`ForestFillSet`](/mod/game-api/types/alta-world-generation/forestfillset), [`SplatPaintSet`](/mod/game-api/types/alta-world-generation/splatpaintset)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected FillSet()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-maximumfailscore" /><code>{"private float maximumFailScore"}</code> | <span className="api-desc">Backing field for `MaximumFailScore`, default 1.</span> |
| <Link id="m-minimumfailscore" /><code>{"private float minimumFailScore"}</code> | <span className="api-desc">Backing field for `MinimumFailScore`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-maximumfailscore-2" /><code>{"float MaximumFailScore { get; }"}</code> | <span className="api-desc">Highest random fail score (0 to 1) a point can roll.</span> |
| <Link id="m-minimumfailscore-2" /><code>{"float MinimumFailScore { get; }"}</code> | <span className="api-desc">Lowest random fail score (0 to 1) a point can roll. Higher makes spawning rarer.</span> |
| <Link id="m-spawnmodifiers" /><code>{"abstract "}<Link to="/mod/game-api/types/alta-world-generation/spawnmodifiers">{"SpawnModifiers"}</Link>{" "}<Link to="/mod/game-api/types/alta-world-generation/spawnmodifiers">{"SpawnModifiers"}</Link>{" { get; }"}</code> | <span className="api-desc">The modifier chain each candidate point runs through to decide whether, and how, something spawns there.</span> |
