---
title: "GreaterGotera"
description: "class GreaterGotera in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GreaterGotera

A **class** in `Root.Township`, `Alta.Intelligence`.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`Agent<GreaterGotera>`](/game-api/types/alta-intelligence/agent-tthis), [`IAgent`](/game-api/types/alta-intelligence/iagent), [`ITarget`](/game-api/types/alta-intelligence/itarget), [`ITargetPointer`](/game-api/types/alta-intelligence/itargetpointer), [`INetworkEntityBehaviour`](/game-api/types/alta-networking/inetworkentitybehaviour)
- **Derived types** [`GreaterGotera`](/game-api/types/alta-intelligence/greatergotera)
- **Documented in** [Common creatures](/game-api/creatures/common-creatures#gotera-and-greatergotera), [Creature data](/game-api/creatures/creature-data), [Creatures and AI](/game-api/creatures/overview)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"GreaterGotera()"}</code> |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-body" /><code>{"private Transform body"}</code> |
| <Link id="m-killedanimatorboolean" /><code>{"private string killedAnimatorBoolean"}</code> |
| <Link id="m-passiveactions" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/actioncomponentset">{"ActionComponentSet"}</Link>{" passiveActions"}</code> |
| <Link id="m-passiveactionsetmap" /><code>{"private static Dictionary<"}<Link to="/game-api/types/alta-intelligence/actioncomponentset">{"ActionComponentSet"}</Link>{", "}<Link to="/game-api/types/alta-intelligence/actionset-tagent">{"ActionSet"}</Link>{"<"}<Link to="/game-api/types/alta-intelligence/greatergotera">{"GreaterGotera"}</Link>{">> passiveActionSetMap"}</code> |
| <Link id="m-stunnedaction" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/actioncomponent">{"ActionComponent"}</Link>{" stunnedAction"}</code> |
| <Link id="m-stunnedactionmap" /><code>{"private static Dictionary<"}<Link to="/game-api/types/alta-intelligence/actioncomponent">{"ActionComponent"}</Link>{", "}<Link to="/game-api/types/alta-intelligence/actiontarget-tagent">{"ActionTarget"}</Link>{"<"}<Link to="/game-api/types/alta-intelligence/greatergotera">{"GreaterGotera"}</Link>{">> stunnedActionMap"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-position" /><code>{"override Vector3 Position { get; }"}</code> |
| <Link id="m-stunned" /><code><Link to="/game-api/types/alta-intelligence/actiontarget-tagent">{"ActionTarget"}</Link>{"<"}<Link to="/game-api/types/alta-intelligence/greatergotera">{"GreaterGotera"}</Link>{"> Stunned { get; private set; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-stun" /><code>{"void Stun(float strength)"}</code> |
| <Link id="m-initializeai" /><code>{"protected override void InitializeAi()"}</code> |
| <Link id="m-initializestatic" /><code>{"protected override void InitializeStatic()"}</code> |
| <Link id="m-killed" /><code>{"protected override void Killed("}<Link to="/game-api/types/global-e-h/healthobject">{"HealthObject"}</Link>{" healthobject)"}</code> |
