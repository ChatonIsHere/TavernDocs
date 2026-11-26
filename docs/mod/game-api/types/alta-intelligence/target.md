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

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`ITarget`](/mod/game-api/types/alta-intelligence/itarget), [`ITargetPointer`](/mod/game-api/types/alta-intelligence/itargetpointer)
- **Derived types** [`Agent`](/mod/game-api/types/alta-intelligence/agent), [`PlayerCharacterTarget`](/mod/game-api/types/alta-intelligence/playercharactertarget)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Target()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-healthobject" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/healthobject">{"HealthObject"}</Link>{" healthObject"}</code> | <span className="api-desc">The target's health; when it is destroyed the target is marked dead.</span> |
| <Link id="m-initialsenses" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/sensesetup">{"SenseSetup"}</Link>{"[] initialSenses"}</code> | <span className="api-desc">Senses applied when the target initializes on the server.</span> |
| <Link id="m-interactable" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable"}</code> | <span className="api-desc">The target's `Interactable`, if any.</span> |
| <Link id="m-isobjectdisabledonclient" /><code>{"private bool isObjectDisabledOnClient"}</code> | <span className="api-desc">When true (the default), clients turn the whole object off. Targets only run on the server.</span> |
| <Link id="m-senses" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/basicsenseset">{"BasicSenseSet"}</Link>{" senses"}</code> | <span className="api-desc">Server: the sense set built from `initialSenses`, exposed as `Senses`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-groundposition" /><code>{"virtual Vector3 GroundPosition { get; }"}</code> | <span className="api-desc">The position used for distance checks. The transform position unless a subclass overrides it.</span> |
| <Link id="m-healthobject-2" /><code><Link to="/mod/game-api/types/global-e-h/healthobject">{"HealthObject"}</Link>{" "}<Link to="/mod/game-api/types/global-e-h/healthobject">{"HealthObject"}</Link>{" { get; }"}</code> | <span className="api-desc">The `HealthObject` set in the inspector, if any. Its destruction marks the target dead.</span> |
| <Link id="m-interactable-2" /><code><Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" { get; }"}</code> | <span className="api-desc">The `Interactable` set in the inspector, if any.</span> |
| <Link id="m-isalive" /><code>{"virtual bool IsAlive { get; private set; }"}</code> | <span className="api-desc">True until the linked health object is destroyed.</span> |
| <Link id="m-isinitialized" /><code>{"bool IsInitialized { get; private set; }"}</code> | <span className="api-desc">True once server-side initialization has run. Stays false on clients.</span> |
| <Link id="m-name" /><code>{"string Name { get; }"}</code> | <span className="api-desc">The entity's identifier and original name, joined with a dash, for logs.</span> |
| <Link id="m-position" /><code>{"virtual Vector3 Position { get; }"}</code> | <span className="api-desc">The target's world position. The transform position unless a subclass overrides it.</span> |
| <Link id="m-senses-2" /><code><Link to="/mod/game-api/types/alta-intelligence/basicsenseset">{"BasicSenseSet"}</Link>{" Senses { get; }"}</code> | <span className="api-desc">Server: the sense set built from the inspector's initial senses. Null on clients.</span> |
| <Link id="m-statmanager" /><code><Link to="/mod/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" "}<Link to="/mod/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" { get; }"}</code> | <span className="api-desc">The health object's stat manager, or null if there is no health object.</span> |
| <Link id="m-transform" /><code>{"virtual Transform Transform { get; }"}</code> | <span className="api-desc">The transform AI should aim at. This object's own transform unless overridden.</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alta-intelligence-itargetpointer-target" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" Alta.Intelligence.ITargetPointer.Target { get; }"}</code> | <span className="api-desc">Returns this target itself.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-attacks" /><code>{"virtual IEnumerable<"}<Link to="/mod/game-api/types/alta-intelligence/attackparameters">{"AttackParameters"}</Link>{"> Attacks() (iterator)"}</code> | <span className="api-desc">The attacks this target can make. Empty in the base class; subclasses override it.</span> |
| <Link id="m-getdistance" /><code>{"float GetDistance("}<Link to="/mod/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" other, float yFlexibility = 0)"}</code> | <span className="api-desc">Distance between ground positions, ignoring up to `yFlexibility` of height difference.</span> |
| <Link id="m-getsquaredistance" /><code>{"float GetSquareDistance("}<Link to="/mod/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" other, float yFlexibility = 0)"}</code> | <span className="api-desc">Squared distance between ground positions, with height difference reduced by `yFlexibility` (never below zero).</span> |
| <Link id="m-getvelocity" /><code>{"virtual float GetVelocity()"}</code> | <span className="api-desc">The target's speed. Always 0 in the base class; subclasses override it.</span> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Hooks the health object's death. Server: sets up senses and registers with `TargetCollectorManager`. Client: disables the component.</span> |
| <Link id="m-killed" /><code>{"protected virtual void Killed("}<Link to="/mod/game-api/types/global-e-h/healthobject">{"HealthObject"}</Link>{" healthobject)"}</code> | <span className="api-desc">Called when the health object is destroyed; sets `IsAlive` to false. Override to add death handling.</span> |
| <Link id="m-onvalidate" /><code>{"protected virtual void OnValidate()"}</code> | <span className="api-desc">Editor: fixes up the initial sense setups.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Server: removes the target from `TargetCollectorManager`.</span> |

</details>

## Used in

Members of other types that take, return or hold a `Target`:

<div className="api-used-in">

[`TargetPointer.target`](/mod/game-api/types/alta-intelligence/targetpointer#m-target), [`FlyCamLocomotionController.target`](/mod/game-api/types/global-e-h/flycamlocomotioncontroller#m-target), [`PlayerController.target`](/mod/game-api/types/global-p/playercontroller#m-target), [`PlayerController.Target`](/mod/game-api/types/global-p/playercontroller#m-target-2).

</div>
