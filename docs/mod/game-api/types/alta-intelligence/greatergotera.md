---
title: "GreaterGotera"
description: "Creature class for the Greater Gotera boss: a body, a passive set and an optional stunned action, with no view cone."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GreaterGotera

A **class** in `Root.Township`, `Alta.Intelligence`.

Creature class for the Greater Gotera boss: a body, a passive set and an optional stunned action, with no view cone. Server AI; `Killed` runs on both sides.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`Agent<GreaterGotera>`](/mod/game-api/types/alta-intelligence/agent-tthis), [`IAgent`](/mod/game-api/types/alta-intelligence/iagent), [`ITarget`](/mod/game-api/types/alta-intelligence/itarget), [`ITargetPointer`](/mod/game-api/types/alta-intelligence/itargetpointer), [`INetworkEntityBehaviour`](/mod/game-api/types/alta-networking/inetworkentitybehaviour)
- **Derived types** [`GreaterGotera`](/mod/game-api/types/alta-intelligence/greatergotera)
- **Documented in** [Common creatures](/mod/game-api/creatures/common-creatures#gotera-and-greatergotera), [Creature data](/mod/game-api/creatures/creature-data), [Creatures and AI](/mod/game-api/creatures/overview)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GreaterGotera()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-body" /><code>{"private Transform body"}</code> | Transform whose position is the creature's `Position`. |
| <Link id="m-killedanimatorboolean" /><code>{"private string killedAnimatorBoolean"}</code> | Animator bool set on death. Default "Killed". |
| <Link id="m-passiveactions" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/actioncomponentset">{"ActionComponentSet"}</Link>{" passiveActions"}</code> | The action set the creature starts with. |
| <Link id="m-passiveactionsetmap" /><code>{"private static Dictionary<"}<Link to="/mod/game-api/types/alta-intelligence/actioncomponentset">{"ActionComponentSet"}</Link>{", "}<Link to="/mod/game-api/types/alta-intelligence/actionset-tagent">{"ActionSet"}</Link>{"<"}<Link to="/mod/game-api/types/alta-intelligence/greatergotera">{"GreaterGotera"}</Link>{">> passiveActionSetMap"}</code> | Static cache of the action set built from each passive set asset. |
| <Link id="m-stunnedaction" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/actioncomponent">{"ActionComponent"}</Link>{" stunnedAction"}</code> | The action component for the stunned action. May be empty. |
| <Link id="m-stunnedactionmap" /><code>{"private static Dictionary<"}<Link to="/mod/game-api/types/alta-intelligence/actioncomponent">{"ActionComponent"}</Link>{", "}<Link to="/mod/game-api/types/alta-intelligence/actiontarget-tagent">{"ActionTarget"}</Link>{"<"}<Link to="/mod/game-api/types/alta-intelligence/greatergotera">{"GreaterGotera"}</Link>{">> stunnedActionMap"}</code> | Static cache of the stunned action built from each action component. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-position" /><code>{"override Vector3 Position { get; }"}</code> | The body transform's position. |
| <Link id="m-stunned" /><code><Link to="/mod/game-api/types/alta-intelligence/actiontarget-tagent">{"ActionTarget"}</Link>{"<"}<Link to="/mod/game-api/types/alta-intelligence/greatergotera">{"GreaterGotera"}</Link>{"> Stunned { get; private set; }"}</code> | The stunned action, if the prefab has one. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-stun" /><code>{"void Stun(float strength)"}</code> | Server: starts the stunned action. `strength` is ignored. Called by a `StatTrigger` on the prefab. |
| <Link id="m-initializeai" /><code>{"protected override void InitializeAi()"}</code> | Server: picks the passive set and, if set, the stunned action, building each once per asset. |
| <Link id="m-initializestatic" /><code>{"protected override void InitializeStatic()"}</code> | Creates the shared set and stunned action caches, once per class. |
| <Link id="m-killed" /><code>{"protected override void Killed("}<Link to="/mod/game-api/types/global-e-h/healthobject">{"HealthObject"}</Link>{" healthobject)"}</code> | Turns off collision and sets the killed animator bool on the local animator. |
