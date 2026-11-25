---
title: "Gotera"
description: "Gotera; Gotera Ash, Birch, Redwood and Walnut Variant"
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Gotera

A **class** in `Root.Township`, `Alta.Intelligence`.

Gotera; Gotera Ash, Birch, Redwood and Walnut Variant

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`Agent<Gotera>`](/game-api/types/alta-intelligence/agent-tthis), [`IHasViewCone`](/game-api/types/alta-intelligence/ihasviewcone)
- **Derived types** [`Gotera`](/game-api/types/alta-intelligence/gotera)
- **Documented in** [Common creatures](/game-api/creatures/common-creatures#gotera-and-greatergotera), [Creature data](/game-api/creatures/creature-data), [Creatures and AI](/game-api/creatures/overview)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Gotera()"}</code> |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-body" /><code>{"private Transform body"}</code> |
| <Link id="m-killedanimatorboolean" /><code>{"private string killedAnimatorBoolean"}</code> |
| <Link id="m-passiveactions" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/actioncomponentset">{"ActionComponentSet"}</Link>{" passiveActions"}</code> |
| <Link id="m-passiveactionsetmap" /><code>{"private static Dictionary<"}<Link to="/game-api/types/alta-intelligence/actioncomponentset">{"ActionComponentSet"}</Link>{", "}<Link to="/game-api/types/alta-intelligence/actionset-tagent">{"ActionSet"}</Link>{"<"}<Link to="/game-api/types/alta-intelligence/gotera">{"Gotera"}</Link>{">> passiveActionSetMap"}</code> |
| <Link id="m-stunnedaction" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/actioncomponent">{"ActionComponent"}</Link>{" stunnedAction"}</code> |
| <Link id="m-stunnedactionmap" /><code>{"private static Dictionary<"}<Link to="/game-api/types/alta-intelligence/actioncomponent">{"ActionComponent"}</Link>{", "}<Link to="/game-api/types/alta-intelligence/actiontarget-tagent">{"ActionTarget"}</Link>{"<"}<Link to="/game-api/types/alta-intelligence/gotera">{"Gotera"}</Link>{">> stunnedActionMap"}</code> |
| <Link id="m-viewcone" /><code>{"private "}<Link to="/game-api/types/global-t-x/viewcone">{"ViewCone"}</Link>{" viewCone"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-position" /><code>{"override Vector3 Position { get; }"}</code> |
| <Link id="m-stunned" /><code><Link to="/game-api/types/alta-intelligence/actiontarget-tagent">{"ActionTarget"}</Link>{"<"}<Link to="/game-api/types/alta-intelligence/gotera">{"Gotera"}</Link>{"> Stunned { get; private set; }"}</code> |
| <Link id="m-viewcone-2" /><code><Link to="/game-api/types/global-t-x/viewcone">{"ViewCone"}</Link>{" "}<Link to="/game-api/types/global-t-x/viewcone">{"ViewCone"}</Link>{" { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-stun" /><code>{"void Stun(float strength)"}</code> |
| <Link id="m-initializeai" /><code>{"protected override void InitializeAi()"}</code> |
| <Link id="m-initializestatic" /><code>{"protected override void InitializeStatic()"}</code> |
| <Link id="m-killed" /><code>{"protected override void Killed("}<Link to="/game-api/types/global-e-h/healthobject">{"HealthObject"}</Link>{" healthobject)"}</code> |
