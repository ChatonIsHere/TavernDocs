---
title: "Target"
description: "A networked thing that AI creatures can sense and attack, with optional health and interactable links."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Target

A **class** in `Root.Township`, `Alta.Intelligence`.

A networked thing that AI creatures can sense and attack, with optional health and interactable links. Only active on the server: on clients it disables itself (and by default its GameObject).

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ITarget`](/game-api/types/alta-intelligence/itarget), [`ITargetPointer`](/game-api/types/alta-intelligence/itargetpointer)
- **Derived types** [`Agent`](/game-api/types/alta-intelligence/agent), [`PlayerCharacterTarget`](/game-api/types/alta-intelligence/playercharactertarget)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Target()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-healthobject" /><code>{"private "}<Link to="/game-api/types/global-e-h/healthobject">{"HealthObject"}</Link>{" healthObject"}</code> | The target's health; when it is destroyed the target is marked dead. |
| <Link id="m-initialsenses" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/sensesetup">{"SenseSetup"}</Link>{"[] initialSenses"}</code> | Senses applied when the target initializes on the server. |
| <Link id="m-interactable" /><code>{"private "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable"}</code> | The target's `Interactable`, if any. |
| <Link id="m-isobjectdisabledonclient" /><code>{"private bool isObjectDisabledOnClient"}</code> | When true (the default), clients turn the whole object off. Targets only run on the server. |
| <Link id="m-senses" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/basicsenseset">{"BasicSenseSet"}</Link>{" senses"}</code> | Server: the sense set built from `initialSenses`, exposed as `Senses`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-groundposition" /><code>{"virtual Vector3 GroundPosition { get; }"}</code> | The position used for distance checks. The transform position unless a subclass overrides it. |
| <Link id="m-healthobject-2" /><code><Link to="/game-api/types/global-e-h/healthobject">{"HealthObject"}</Link>{" "}<Link to="/game-api/types/global-e-h/healthobject">{"HealthObject"}</Link>{" { get; }"}</code> | The `HealthObject` set in the inspector, if any. Its destruction marks the target dead. |
| <Link id="m-interactable-2" /><code><Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" { get; }"}</code> | The `Interactable` set in the inspector, if any. |
| <Link id="m-isalive" /><code>{"virtual bool IsAlive { get; private set; }"}</code> | True until the linked health object is destroyed. |
| <Link id="m-isinitialized" /><code>{"bool IsInitialized { get; private set; }"}</code> | True once server-side initialization has run. Stays false on clients. |
| <Link id="m-name" /><code>{"string Name { get; }"}</code> | The entity's identifier and original name, joined with a dash, for logs. |
| <Link id="m-position" /><code>{"virtual Vector3 Position { get; }"}</code> | The target's world position. The transform position unless a subclass overrides it. |
| <Link id="m-senses-2" /><code><Link to="/game-api/types/alta-intelligence/basicsenseset">{"BasicSenseSet"}</Link>{" Senses { get; }"}</code> | Server: the sense set built from the inspector's initial senses. Null on clients. |
| <Link id="m-statmanager" /><code><Link to="/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" "}<Link to="/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" { get; }"}</code> | The health object's stat manager, or null if there is no health object. |
| <Link id="m-transform" /><code>{"virtual Transform Transform { get; }"}</code> | The transform AI should aim at. This object's own transform unless overridden. |

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alta-intelligence-itargetpointer-target" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" Alta.Intelligence.ITargetPointer.Target { get; }"}</code> | Returns this target itself. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-attacks" /><code>{"virtual IEnumerable<"}<Link to="/game-api/types/alta-intelligence/attackparameters">{"AttackParameters"}</Link>{"> Attacks() (iterator)"}</code> | The attacks this target can make. Empty in the base class; subclasses override it. |
| <Link id="m-getdistance" /><code>{"float GetDistance("}<Link to="/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" other, float yFlexibility = 0)"}</code> | Distance between ground positions, ignoring up to `yFlexibility` of height difference. |
| <Link id="m-getsquaredistance" /><code>{"float GetSquareDistance("}<Link to="/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" other, float yFlexibility = 0)"}</code> | Squared distance between ground positions, with height difference reduced by `yFlexibility` (never below zero). |
| <Link id="m-getvelocity" /><code>{"virtual float GetVelocity()"}</code> | The target's speed. Always 0 in the base class; subclasses override it. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Hooks the health object's death. Server: sets up senses and registers with `TargetCollectorManager`. Client: disables the component. |
| <Link id="m-killed" /><code>{"protected virtual void Killed("}<Link to="/game-api/types/global-e-h/healthobject">{"HealthObject"}</Link>{" healthobject)"}</code> | Called when the health object is destroyed; sets `IsAlive` to false. Override to add death handling. |
| <Link id="m-onvalidate" /><code>{"protected virtual void OnValidate()"}</code> | Editor: fixes up the initial sense setups. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Server: removes the target from `TargetCollectorManager`. |

</details>

## Used in

Members of other types that take, return or hold a `Target`:

[`TargetPointer.target`](/game-api/types/alta-intelligence/targetpointer#m-target), [`FlyCamLocomotionController.target`](/game-api/types/global-e-h/flycamlocomotioncontroller#m-target), [`PlayerController.target`](/game-api/types/global-p/playercontroller#m-target), [`PlayerController.Target`](/game-api/types/global-p/playercontroller#m-target-2).
