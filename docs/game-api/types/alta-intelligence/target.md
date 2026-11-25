---
title: "Target"
description: "class Target in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Target

A **class** in `Root.Township`, `Alta.Intelligence`.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ITarget`](/game-api/types/alta-intelligence/itarget), [`ITargetPointer`](/game-api/types/alta-intelligence/itargetpointer)
- **Derived types** [`Agent`](/game-api/types/alta-intelligence/agent), [`PlayerCharacterTarget`](/game-api/types/alta-intelligence/playercharactertarget)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Target()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-healthobject" /><code>{"private "}<Link to="/game-api/types/global-e-h/healthobject">{"HealthObject"}</Link>{" healthObject"}</code> |  |
| <Link id="m-initialsenses" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/sensesetup">{"SenseSetup"}</Link>{"[] initialSenses"}</code> |  |
| <Link id="m-interactable" /><code>{"private "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable"}</code> |  |
| <Link id="m-isobjectdisabledonclient" /><code>{"private bool isObjectDisabledOnClient"}</code> |  |
| <Link id="m-senses" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/basicsenseset">{"BasicSenseSet"}</Link>{" senses"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-groundposition" /><code>{"virtual Vector3 GroundPosition { get; }"}</code> |  |
| <Link id="m-healthobject-2" /><code><Link to="/game-api/types/global-e-h/healthobject">{"HealthObject"}</Link>{" "}<Link to="/game-api/types/global-e-h/healthobject">{"HealthObject"}</Link>{" { get; }"}</code> |  |
| <Link id="m-interactable-2" /><code><Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" { get; }"}</code> |  |
| <Link id="m-isalive" /><code>{"virtual bool IsAlive { get; private set; }"}</code> |  |
| <Link id="m-isinitialized" /><code>{"bool IsInitialized { get; private set; }"}</code> |  |
| <Link id="m-name" /><code>{"string Name { get; }"}</code> |  |
| <Link id="m-position" /><code>{"virtual Vector3 Position { get; }"}</code> |  |
| <Link id="m-senses-2" /><code><Link to="/game-api/types/alta-intelligence/basicsenseset">{"BasicSenseSet"}</Link>{" Senses { get; }"}</code> |  |
| <Link id="m-statmanager" /><code><Link to="/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" "}<Link to="/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" { get; }"}</code> |  |
| <Link id="m-transform" /><code>{"virtual Transform Transform { get; }"}</code> |  |
| <Link id="m-alta-intelligence-itargetpointer-target" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" Alta.Intelligence.ITargetPointer.Target { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-attacks" /><code>{"virtual IEnumerable<"}<Link to="/game-api/types/alta-intelligence/attackparameters">{"AttackParameters"}</Link>{"> Attacks() (iterator)"}</code> |  |
| <Link id="m-getdistance" /><code>{"float GetDistance("}<Link to="/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" other, float yFlexibility = 0)"}</code> |  |
| <Link id="m-getsquaredistance" /><code>{"float GetSquareDistance("}<Link to="/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" other, float yFlexibility = 0)"}</code> |  |
| <Link id="m-getvelocity" /><code>{"virtual float GetVelocity()"}</code> |  |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-killed" /><code>{"protected virtual void Killed("}<Link to="/game-api/types/global-e-h/healthobject">{"HealthObject"}</Link>{" healthobject)"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-onvalidate" /><code>{"protected virtual void OnValidate()"}</code> |  |

## Used in

Members of other types that take, return or hold a `Target`:

[`TargetPointer.target`](/game-api/types/alta-intelligence/targetpointer#m-target), [`FlyCamLocomotionController.target`](/game-api/types/global-e-h/flycamlocomotioncontroller#m-target), [`PlayerController.target`](/game-api/types/global-p/playercontroller#m-target), [`PlayerController.Target`](/game-api/types/global-p/playercontroller#m-target-2).
