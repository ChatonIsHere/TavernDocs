---
title: "DeathFern"
description: "Creature class for the death ferns and for some creature-less hazards and spawners (geysers, ash bombs)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DeathFern

A **class** in `Root.Township`, `Alta.Intelligence`.

Creature class for the death ferns and for some creature-less hazards and spawners (geysers, ash bombs). It only has a body and a passive action set, and turns off its collision on death. Server AI; `Killed` runs on both sides.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`Agent<DeathFern>`](/mod/game-api/types/alta-intelligence/agent-tthis)
- **Derived types** [`DeathFern`](/mod/game-api/types/alta-intelligence/deathfern)
- **Documented in** [Other creatures](/mod/game-api/creatures/other-creatures#babu-dragonfly-deathfern), [Creature data](/mod/game-api/creatures/creature-data), [Creatures and AI](/mod/game-api/creatures/overview)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DeathFern()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-body" /><code>{"private Transform body"}</code> | <span className="api-desc">Transform whose position is the creature's `Position`.</span> |
| <Link id="m-passiveactions" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/actioncomponentset">{"ActionComponentSet"}</Link>{" passiveActions"}</code> | <span className="api-desc">The action set the creature starts with.</span> |
| <Link id="m-passiveactionsetmap" /><code>{"private static Dictionary<"}<Link to="/mod/game-api/types/alta-intelligence/actioncomponentset">{"ActionComponentSet"}</Link>{", "}<Link to="/mod/game-api/types/alta-intelligence/actionset-tagent">{"ActionSet"}</Link>{"<"}<Link to="/mod/game-api/types/alta-intelligence/deathfern">{"DeathFern"}</Link>{">> passiveActionSetMap"}</code> | <span className="api-desc">Static cache of the action set built from each passive set asset.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-position" /><code>{"override Vector3 Position { get; }"}</code> | <span className="api-desc">The body transform's position.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeai" /><code>{"protected override void InitializeAi()"}</code> | <span className="api-desc">Server: picks the passive set as the starting choices, building it once per set asset.</span> |
| <Link id="m-initializestatic" /><code>{"protected override void InitializeStatic()"}</code> | <span className="api-desc">Creates the shared set cache, once per class.</span> |
| <Link id="m-killed" /><code>{"protected override void Killed("}<Link to="/mod/game-api/types/global-e-h/healthobject">{"HealthObject"}</Link>{" healthobject)"}</code> | <span className="api-desc">Turns off the creature's collision after the base death handling.</span> |
