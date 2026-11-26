---
title: "Babu"
description: "The babu creature's AI (Agent<Babu>)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Babu

A **class** in `Root.Township`, `Alta.Intelligence`.

The babu creature's AI (`Agent<Babu>`). Has a view cone and an interactor. Its passive set and stunned action are taken from the first babu spawned and shared by all.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`Agent<Babu>`](/mod/game-api/types/alta-intelligence/agent-tthis), [`IHasViewCone`](/mod/game-api/types/alta-intelligence/ihasviewcone), [`IInteractAgent`](/mod/game-api/types/alta-intelligence/iinteractagent), [`IAgent`](/mod/game-api/types/alta-intelligence/iagent), [`ITarget`](/mod/game-api/types/alta-intelligence/itarget), [`ITargetPointer`](/mod/game-api/types/alta-intelligence/itargetpointer), [`INetworkEntityBehaviour`](/mod/game-api/types/alta-networking/inetworkentitybehaviour)
- **Derived types** [`Babu`](/mod/game-api/types/alta-intelligence/babu)
- **Documented in** [Other creatures](/mod/game-api/creatures/other-creatures#babu-dragonfly-deathfern), [Creature data](/mod/game-api/creatures/creature-data), [Creatures and AI](/mod/game-api/creatures/overview)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Babu()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-body" /><code>{"private Transform body"}</code> | <span className="api-desc">Transform whose position is the babu's `Position`.</span> |
| <Link id="m-interactor" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor"}</code> | <span className="api-desc">Backing field for `Interactor`, the interactor the babu eats food with.</span> |
| <Link id="m-killedanimatorboolean" /><code>{"private string killedAnimatorBoolean"}</code> | <span className="api-desc">Animator bool set on the local animator when the babu dies. Default "Killed".</span> |
| <Link id="m-passiveactions" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/actioncomponentset">{"ActionComponentSet"}</Link>{" passiveActions"}</code> | <span className="api-desc">The starting action set. Only the first babu's set is used, stored in the static `PassiveActions`.</span> |
| <Link id="m-stunnedaction" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/actioncomponent">{"ActionComponent"}</Link>{" stunnedAction"}</code> | <span className="api-desc">The stunned action. Only the first babu's is used, stored in the static `Stunned`.</span> |
| <Link id="m-viewcone" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/viewcone">{"ViewCone"}</Link>{" viewCone"}</code> | <span className="api-desc">Backing field for `ViewCone`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-interactor-2" /><code><Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" { get; }"}</code> | <span className="api-desc">The babu's interactor, from `IInteractAgent`, which actions such as `ActiveEat` use.</span> |
| <Link id="m-position" /><code>{"override Vector3 Position { get; }"}</code> | <span className="api-desc">The body's position.</span> |
| <Link id="m-stunned" /><code>{"static "}<Link to="/mod/game-api/types/alta-intelligence/iaction-intagent">{"IAction"}</Link>{"<"}<Link to="/mod/game-api/types/alta-intelligence/babu">{"Babu"}</Link>{"> Stunned { get; private set; }"}</code> | <span className="api-desc">The shared stunned action.</span> |
| <Link id="m-viewcone-2" /><code><Link to="/mod/game-api/types/global-t-x/viewcone">{"ViewCone"}</Link>{" "}<Link to="/mod/game-api/types/global-t-x/viewcone">{"ViewCone"}</Link>{" { get; }"}</code> | <span className="api-desc">What it can see, read by its view cone sense.</span> |
| <Link id="m-passiveactions-2" /><code>{"protected static "}<Link to="/mod/game-api/types/alta-intelligence/actionset-tagent">{"ActionSet"}</Link>{"<"}<Link to="/mod/game-api/types/alta-intelligence/babu">{"Babu"}</Link>{"> PassiveActions { get; private set; }"}</code> | <span className="api-desc">The shared passive action set.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-stun" /><code>{"void Stun(float strength)"}</code> | <span className="api-desc">Starts the stunned action. `strength` is not used. Called on the server by the prefab's `StatTrigger`.</span> |
| <Link id="m-initializeai" /><code>{"protected override void InitializeAi()"}</code> | <span className="api-desc">Starts choosing from the shared passive action set.</span> |
| <Link id="m-initializestatic" /><code>{"protected override void InitializeStatic()"}</code> | <span className="api-desc">Stores the passive set and stunned action in statics, once per class.</span> |
| <Link id="m-killed" /><code>{"protected override void Killed("}<Link to="/mod/game-api/types/global-e-h/healthobject">{"HealthObject"}</Link>{" healthobject)"}</code> | <span className="api-desc">Turns off collision and sets the animator's killed bool.</span> |
