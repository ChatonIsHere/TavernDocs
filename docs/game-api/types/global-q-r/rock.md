---
title: "Rock"
description: "A mineable boulder piece: a HealthObject that drops resources from its BoulderDefinition when killed."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Rock

A **class** in `Root.Township`, no namespace.

A mineable boulder piece: a `HealthObject` that drops resources from its `BoulderDefinition` when killed. Usually set up by a `RockCluster`; the kill and drops run on the server.

- **Listed in** [No namespace: Q to R](/game-api/types/global-q-r)
- **Inherits or implements** [`HealthObject`](/game-api/types/global-e-h/healthobject)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Rock()"}</code> |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-disablinghitflag" /><code>{"private Coroutine disablingHitFlag"}</code> | The running `DisableHitFlag` coroutine, if any. |
| <Link id="m-fadetimehitflag" /><code>{"private float fadeTimeHitFlag"}</code> | How long in seconds after a local hit the rock still counts as recently hit. Default 1. |
| <Link id="m-impactdetector" /><code>{"private "}<Link to="/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{" impactDetector"}</code> | The `ImpactDetector` that reports tool hits on this rock. |
| <Link id="m-isinhittime" /><code>{"private bool isInHitTime"}</code> | True for a short time after the local player hit the rock, so destruction effects play on that client. |
| <Link id="m-lasthit" /><code>{"private "}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" lastHit"}</code> | The last tool hit, used for haptics in `OnDestroy`. Never assigned in this code, so it stays null. |
| <Link id="m-ores" /><code>{"private "}<Link to="/game-api/types/global-m-o/materialgroup">{"MaterialGroup"}</Link>{" ores"}</code> | The `MaterialGroup` whose material is swapped to the definition's ore material. |
| <Link id="m-spawnposition" /><code>{"private Transform spawnPosition"}</code> | Where dropped resources spawn. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-definition" /><code><Link to="/game-api/types/alta-items/boulderdefinition">{"BoulderDefinition"}</Link>{" Definition { get; private set; }"}</code> | The `BoulderDefinition` this rock uses for health, drops, ore material and destroyed effect. Set by `Define`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-define" /><code>{"void Define("}<Link to="/game-api/types/alta-items/boulderdefinition">{"BoulderDefinition"}</Link>{" definition)"}</code> | Applies a `BoulderDefinition`: sets maximum and current health, impact settings and the ore material. Does nothing if it's already that definition. |
| <Link id="m-onvalidate2" /><code>{"override void OnValidate2()"}</code> | Defaults `spawnPosition` to the rock's own transform. |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | Hooks `KilledEffects` to `Killed` and `RegisterHit` to the impact detector's `Hit` event. |
| <Link id="m-spawnresources" /><code>{"protected virtual void SpawnResources("}<Link to="/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" rawHit)"}</code> | Picks a drop count from `DropCount`, rolls each drop by weight from `ResourcesDropChances`, spawns them at `spawnPosition` and throws them toward the hitter's head. |

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-disablehitflag" /><code>{"private IEnumerator DisableHitFlag() (iterator)"}</code> | Coroutine that clears `isInHitTime` after `fadeTimeHitFlag` seconds. |
| <Link id="m-executeactionnextframe" /><code>{"private IEnumerator ExecuteActionNextFrame(Action action) (iterator)"}</code> | Coroutine that runs an action one frame later. Used to set the velocity of spawned drops once their rigidbody exists. |
| <Link id="m-killedeffects" /><code>{"private void KilledEffects("}<Link to="/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" swing)"}</code> | Server: on death plays the destroyed effect, triggers haptics for the tool holders, spawns the drops and destroys the entity. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Client: if the local player hit the rock recently, plays the destroyed effect and haptics locally, then unhooks the hit handler. |
| <Link id="m-registerhit" /><code>{"private void RegisterHit("}<Link to="/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" hit)"}</code> | When the local player hits the rock with a tool, sets `isInHitTime` and restarts the timer that clears it. |

</details>
