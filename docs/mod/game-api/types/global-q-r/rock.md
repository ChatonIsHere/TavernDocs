---
title: "Rock"
description: "A mineable boulder piece: a HealthObject that drops resources from its BoulderDefinition when killed."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Rock

A **class** in `Root.Township`, the global namespace.

A mineable boulder piece: a `HealthObject` that drops resources from its `BoulderDefinition` when killed. Usually set up by a `RockCluster`; the kill and drops run on the server.

- **Listed in** [Global namespace: Q to R](/mod/game-api/types/global-q-r)
- **Inherits or implements** [`HealthObject`](/mod/game-api/types/global-e-h/healthobject)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Rock()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-disablinghitflag" /><code>{"private Coroutine disablingHitFlag"}</code> | <span className="api-desc">The running `DisableHitFlag` coroutine, if any.</span> |
| <Link id="m-fadetimehitflag" /><code>{"private float fadeTimeHitFlag"}</code> | <span className="api-desc">How long in seconds after a local hit the rock still counts as recently hit. Default 1.</span> |
| <Link id="m-impactdetector" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{" impactDetector"}</code> | <span className="api-desc">The `ImpactDetector` that reports tool hits on this rock.</span> |
| <Link id="m-isinhittime" /><code>{"private bool isInHitTime"}</code> | <span className="api-desc">True for a short time after the local player hit the rock, so destruction effects play on that client.</span> |
| <Link id="m-lasthit" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" lastHit"}</code> | <span className="api-desc">The last tool hit, used for haptics in `OnDestroy`. Never assigned in this code, so it stays null.</span> |
| <Link id="m-ores" /><code>{"private "}<Link to="/mod/game-api/types/global-m-o/materialgroup">{"MaterialGroup"}</Link>{" ores"}</code> | <span className="api-desc">The `MaterialGroup` whose material is swapped to the definition's ore material.</span> |
| <Link id="m-spawnposition" /><code>{"private Transform spawnPosition"}</code> | <span className="api-desc">Where dropped resources spawn.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-definition" /><code><Link to="/mod/game-api/types/alta-items/boulderdefinition">{"BoulderDefinition"}</Link>{" Definition { get; private set; }"}</code> | <span className="api-desc">The `BoulderDefinition` this rock uses for health, drops, ore material and destroyed effect. Set by `Define`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-define" /><code>{"void Define("}<Link to="/mod/game-api/types/alta-items/boulderdefinition">{"BoulderDefinition"}</Link>{" definition)"}</code> | <span className="api-desc">Applies a `BoulderDefinition`: sets maximum and current health, impact settings and the ore material. Does nothing if it's already that definition.</span> |
| <Link id="m-onvalidate2" /><code>{"override void OnValidate2()"}</code> | <span className="api-desc">Defaults `spawnPosition` to the rock's own transform.</span> |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | <span className="api-desc">Hooks `KilledEffects` to `Killed` and `RegisterHit` to the impact detector's `Hit` event.</span> |
| <Link id="m-spawnresources" /><code>{"protected virtual void SpawnResources("}<Link to="/mod/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" rawHit)"}</code> | <span className="api-desc">Picks a drop count from `DropCount`, rolls each drop by weight from `ResourcesDropChances`, spawns them at `spawnPosition` and throws them toward the hitter's head.</span> |

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-disablehitflag" /><code>{"private IEnumerator DisableHitFlag() (iterator)"}</code> | <span className="api-desc">Coroutine that clears `isInHitTime` after `fadeTimeHitFlag` seconds.</span> |
| <Link id="m-executeactionnextframe" /><code>{"private IEnumerator ExecuteActionNextFrame(Action action) (iterator)"}</code> | <span className="api-desc">Coroutine that runs an action one frame later. Used to set the velocity of spawned drops once their rigidbody exists.</span> |
| <Link id="m-killedeffects" /><code>{"private void KilledEffects("}<Link to="/mod/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" swing)"}</code> | <span className="api-desc">Server: on death plays the destroyed effect, triggers haptics for the tool holders, spawns the drops and destroys the entity.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Client: if the local player hit the rock recently, plays the destroyed effect and haptics locally, then unhooks the hit handler.</span> |
| <Link id="m-registerhit" /><code>{"private void RegisterHit("}<Link to="/mod/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" hit)"}</code> | <span className="api-desc">When the local player hits the rock with a tool, sets `isInHitTime` and restarts the timer that clears it.</span> |

</details>
