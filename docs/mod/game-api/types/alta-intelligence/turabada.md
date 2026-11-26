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

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`Agent<Turabada>`](/mod/game-api/types/alta-intelligence/agent-tthis), [`IHasViewCone`](/mod/game-api/types/alta-intelligence/ihasviewcone)
- **Derived types** [`Turabada`](/mod/game-api/types/alta-intelligence/turabada)
- **Documented in** [Common creatures](/mod/game-api/creatures/common-creatures#turabada), [Creature data](/mod/game-api/creatures/creature-data), [Creatures and AI](/mod/game-api/creatures/overview)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Turabada()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-passiveactionsetmap" /><code>{"static Dictionary<"}<Link to="/mod/game-api/types/alta-intelligence/actioncomponentset">{"ActionComponentSet"}</Link>{", "}<Link to="/mod/game-api/types/alta-intelligence/actionset-tagent">{"ActionSet"}</Link>{"<"}<Link to="/mod/game-api/types/alta-intelligence/turabada">{"Turabada"}</Link>{">> passiveActionSetMap"}</code> | <span className="api-desc">Built action set for each passive set asset.</span> |
| <Link id="m-stunnedactionmap" /><code>{"static Dictionary<"}<Link to="/mod/game-api/types/alta-intelligence/actioncomponent">{"ActionComponent"}</Link>{", "}<Link to="/mod/game-api/types/alta-intelligence/actiontarget-tagent">{"ActionTarget"}</Link>{"<"}<Link to="/mod/game-api/types/alta-intelligence/turabada">{"Turabada"}</Link>{">> stunnedActionMap"}</code> | <span className="api-desc">Built stunned action for each stunned action component.</span> |

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-body" /><code>{"private Transform body"}</code> | <span className="api-desc">Transform whose position is the turabada's `Position`.</span> |
| <Link id="m-killedanimatorboolean" /><code>{"private string killedAnimatorBoolean"}</code> | <span className="api-desc">Animator bool set on the local animator on death. Default "Killed".</span> |
| <Link id="m-passiveactions" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/actioncomponentset">{"ActionComponentSet"}</Link>{" passiveActions"}</code> | <span className="api-desc">The action set the turabada starts with.</span> |
| <Link id="m-stunnedaction" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/actioncomponent">{"ActionComponent"}</Link>{" stunnedAction"}</code> | <span className="api-desc">The action component for the stunned action.</span> |
| <Link id="m-viewcone" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/viewcone">{"ViewCone"}</Link>{" viewCone"}</code> | <span className="api-desc">Backing field for `ViewCone`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-position" /><code>{"override Vector3 Position { get; }"}</code> | <span className="api-desc">The body's position.</span> |
| <Link id="m-stunned" /><code><Link to="/mod/game-api/types/alta-intelligence/actiontarget-tagent">{"ActionTarget"}</Link>{"<"}<Link to="/mod/game-api/types/alta-intelligence/turabada">{"Turabada"}</Link>{"> Stunned { get; private set; }"}</code> | <span className="api-desc">This turabada's stunned action.</span> |
| <Link id="m-viewcone-2" /><code><Link to="/mod/game-api/types/global-t-x/viewcone">{"ViewCone"}</Link>{" "}<Link to="/mod/game-api/types/global-t-x/viewcone">{"ViewCone"}</Link>{" { get; }"}</code> | <span className="api-desc">What it can see, read by its view cone sense.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-stun" /><code>{"void Stun(float strength)"}</code> | <span className="api-desc">Cancels the current action and starts the stunned one. `strength` is not used. Called on the server by the prefab's `StatTrigger`.</span> |
| <Link id="m-initializeai" /><code>{"protected override void InitializeAi()"}</code> | <span className="api-desc">Picks the passive set and stunned action from the shared maps, building them on first use.</span> |
| <Link id="m-initializestatic" /><code>{"protected override void InitializeStatic()"}</code> | <span className="api-desc">Creates the empty shared maps, once per class.</span> |
| <Link id="m-killed" /><code>{"protected override void Killed("}<Link to="/mod/game-api/types/global-e-h/healthobject">{"HealthObject"}</Link>{" healthobject)"}</code> | <span className="api-desc">Turns off collision and sets the animator's killed bool.</span> |
