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

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`Agent<Babu>`](/game-api/types/alta-intelligence/agent-tthis), [`IHasViewCone`](/game-api/types/alta-intelligence/ihasviewcone), [`IInteractAgent`](/game-api/types/alta-intelligence/iinteractagent), [`IAgent`](/game-api/types/alta-intelligence/iagent), [`ITarget`](/game-api/types/alta-intelligence/itarget), [`ITargetPointer`](/game-api/types/alta-intelligence/itargetpointer), [`INetworkEntityBehaviour`](/game-api/types/alta-networking/inetworkentitybehaviour)
- **Derived types** [`Babu`](/game-api/types/alta-intelligence/babu)
- **Documented in** [Other creatures](/game-api/creatures/other-creatures#babu-dragonfly-deathfern), [Creature data](/game-api/creatures/creature-data), [Creatures and AI](/game-api/creatures/overview)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Babu()"}</code> |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-body" /><code>{"private Transform body"}</code> |
| <Link id="m-interactor" /><code>{"private "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor"}</code> |
| <Link id="m-killedanimatorboolean" /><code>{"private string killedAnimatorBoolean"}</code> |
| <Link id="m-passiveactions" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/actioncomponentset">{"ActionComponentSet"}</Link>{" passiveActions"}</code> |
| <Link id="m-stunnedaction" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/actioncomponent">{"ActionComponent"}</Link>{" stunnedAction"}</code> |
| <Link id="m-viewcone" /><code>{"private "}<Link to="/game-api/types/global-t-x/viewcone">{"ViewCone"}</Link>{" viewCone"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-interactor-2" /><code><Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" { get; }"}</code> | The babu's interactor, from `IInteractAgent`, which actions such as `ActiveEat` use. |
| <Link id="m-position" /><code>{"override Vector3 Position { get; }"}</code> | The body's position. |
| <Link id="m-stunned" /><code>{"static "}<Link to="/game-api/types/alta-intelligence/iaction-intagent">{"IAction"}</Link>{"<"}<Link to="/game-api/types/alta-intelligence/babu">{"Babu"}</Link>{"> Stunned { get; private set; }"}</code> | The shared stunned action. |
| <Link id="m-viewcone-2" /><code><Link to="/game-api/types/global-t-x/viewcone">{"ViewCone"}</Link>{" "}<Link to="/game-api/types/global-t-x/viewcone">{"ViewCone"}</Link>{" { get; }"}</code> | What it can see, read by its view cone sense. |
| <Link id="m-passiveactions-2" /><code>{"protected static "}<Link to="/game-api/types/alta-intelligence/actionset-tagent">{"ActionSet"}</Link>{"<"}<Link to="/game-api/types/alta-intelligence/babu">{"Babu"}</Link>{"> PassiveActions { get; private set; }"}</code> | The shared passive action set. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-stun" /><code>{"void Stun(float strength)"}</code> | Starts the stunned action. `strength` is not used. Called on the server by the prefab's `StatTrigger`. |
| <Link id="m-initializeai" /><code>{"protected override void InitializeAi()"}</code> | Starts choosing from the shared passive action set. |
| <Link id="m-initializestatic" /><code>{"protected override void InitializeStatic()"}</code> | Stores the passive set and stunned action in statics, once per class. |
| <Link id="m-killed" /><code>{"protected override void Killed("}<Link to="/game-api/types/global-e-h/healthobject">{"HealthObject"}</Link>{" healthobject)"}</code> | Turns off collision and sets the animator's killed bool. |
