---
title: "DeathFern"
description: "Death Fern, Mother Fern, Vine Attack Fern, Targeted Geyser (also inside Chute Gcore Dynamic), Gotera Ash Bomb, Turabada Spawner Reactive"
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DeathFern

A **class** in `Root.Township`, `Alta.Intelligence`.

Death Fern, Mother Fern, Vine Attack Fern, Targeted Geyser (also inside Chute Gcore Dynamic), Gotera Ash Bomb, Turabada Spawner Reactive

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`Agent<DeathFern>`](/game-api/types/alta-intelligence/agent-tthis)
- **Derived types** [`DeathFern`](/game-api/types/alta-intelligence/deathfern)
- **Documented in** [Other creatures](/game-api/creatures/other-creatures#babu-dragonfly-deathfern), [Creature data](/game-api/creatures/creature-data), [Creatures and AI](/game-api/creatures/overview)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DeathFern()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-body" /><code>{"private Transform body"}</code> |  |
| <Link id="m-passiveactions" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/actioncomponentset">{"ActionComponentSet"}</Link>{" passiveActions"}</code> |  |
| <Link id="m-passiveactionsetmap" /><code>{"private static Dictionary<"}<Link to="/game-api/types/alta-intelligence/actioncomponentset">{"ActionComponentSet"}</Link>{", "}<Link to="/game-api/types/alta-intelligence/actionset-tagent">{"ActionSet"}</Link>{"<"}<Link to="/game-api/types/alta-intelligence/deathfern">{"DeathFern"}</Link>{">> passiveActionSetMap"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-position" /><code>{"override Vector3 Position { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeai" /><code>{"protected override void InitializeAi()"}</code> |  |
| <Link id="m-initializestatic" /><code>{"protected override void InitializeStatic()"}</code> |  |
| <Link id="m-killed" /><code>{"protected override void Killed("}<Link to="/game-api/types/global-e-h/healthobject">{"HealthObject"}</Link>{" healthobject)"}</code> |  |
