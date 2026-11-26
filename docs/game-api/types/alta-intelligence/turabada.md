---
title: "Turabada"
description: "The turabada creature's AI (Agent<Turabada>)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Turabada

A **class** in `Root.Township`, `Alta.Intelligence`.

The turabada creature's AI (`Agent<Turabada>`). Caches action sets per set asset, so ore variants with their own sets work.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`Agent<Turabada>`](/game-api/types/alta-intelligence/agent-tthis), [`IHasViewCone`](/game-api/types/alta-intelligence/ihasviewcone)
- **Derived types** [`Turabada`](/game-api/types/alta-intelligence/turabada)
- **Documented in** [Common creatures](/game-api/creatures/common-creatures#turabada), [Creature data](/game-api/creatures/creature-data), [Creatures and AI](/game-api/creatures/overview)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Turabada()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-passiveactionsetmap" /><code>{"static Dictionary<"}<Link to="/game-api/types/alta-intelligence/actioncomponentset">{"ActionComponentSet"}</Link>{", "}<Link to="/game-api/types/alta-intelligence/actionset-tagent">{"ActionSet"}</Link>{"<"}<Link to="/game-api/types/alta-intelligence/turabada">{"Turabada"}</Link>{">> passiveActionSetMap"}</code> | Built action set for each passive set asset. |
| <Link id="m-stunnedactionmap" /><code>{"static Dictionary<"}<Link to="/game-api/types/alta-intelligence/actioncomponent">{"ActionComponent"}</Link>{", "}<Link to="/game-api/types/alta-intelligence/actiontarget-tagent">{"ActionTarget"}</Link>{"<"}<Link to="/game-api/types/alta-intelligence/turabada">{"Turabada"}</Link>{">> stunnedActionMap"}</code> | Built stunned action for each stunned action component. |

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-body" /><code>{"private Transform body"}</code> | Transform whose position is the turabada's `Position`. |
| <Link id="m-killedanimatorboolean" /><code>{"private string killedAnimatorBoolean"}</code> | Animator bool set on the local animator on death. Default "Killed". |
| <Link id="m-passiveactions" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/actioncomponentset">{"ActionComponentSet"}</Link>{" passiveActions"}</code> | The action set the turabada starts with. |
| <Link id="m-stunnedaction" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/actioncomponent">{"ActionComponent"}</Link>{" stunnedAction"}</code> | The action component for the stunned action. |
| <Link id="m-viewcone" /><code>{"private "}<Link to="/game-api/types/global-t-x/viewcone">{"ViewCone"}</Link>{" viewCone"}</code> | Backing field for `ViewCone`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-position" /><code>{"override Vector3 Position { get; }"}</code> | The body's position. |
| <Link id="m-stunned" /><code><Link to="/game-api/types/alta-intelligence/actiontarget-tagent">{"ActionTarget"}</Link>{"<"}<Link to="/game-api/types/alta-intelligence/turabada">{"Turabada"}</Link>{"> Stunned { get; private set; }"}</code> | This turabada's stunned action. |
| <Link id="m-viewcone-2" /><code><Link to="/game-api/types/global-t-x/viewcone">{"ViewCone"}</Link>{" "}<Link to="/game-api/types/global-t-x/viewcone">{"ViewCone"}</Link>{" { get; }"}</code> | What it can see, read by its view cone sense. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-stun" /><code>{"void Stun(float strength)"}</code> | Cancels the current action and starts the stunned one. `strength` is not used. Called on the server by the prefab's `StatTrigger`. |
| <Link id="m-initializeai" /><code>{"protected override void InitializeAi()"}</code> | Picks the passive set and stunned action from the shared maps, building them on first use. |
| <Link id="m-initializestatic" /><code>{"protected override void InitializeStatic()"}</code> | Creates the empty shared maps, once per class. |
| <Link id="m-killed" /><code>{"protected override void Killed("}<Link to="/game-api/types/global-e-h/healthobject">{"HealthObject"}</Link>{" healthobject)"}</code> | Turns off collision and sets the animator's killed bool. |
