---
title: "LiquidContainerTrigger"
description: "Trigger inside a liquid container (a bucket, a pot, the river) that tracks objects dipped into the liquid, plays splashes, and on the server fills a dipped..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LiquidContainerTrigger

A **class** in `Root.Township`, `Alta.Liquid`.

Trigger inside a liquid container (a bucket, a pot, the river) that tracks objects dipped into the liquid, plays splashes, and on the server fills a dipped container when it is pulled out.

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** `MonoBehaviour`
- **Documented in** [Liquids](/mod/game-api/game-systems/liquids#dipping-liquidcontainertrigger)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LiquidContainerTrigger()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-handledliquidcontainers" /><code>{"private Dictionary<Rigidbody, "}<Link to="/mod/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{"> handledLiquidContainers"}</code> | <span className="api-desc">Liquid containers inside the trigger, by rigidbody.</span> |
| <Link id="m-handledpickups" /><code>{"private Dictionary<Rigidbody, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{"> handledPickups"}</code> | <span className="api-desc">Pickups inside the trigger, by rigidbody.</span> |
| <Link id="m-handledpourableliquidcontainers" /><code>{"private Dictionary<Rigidbody, "}<Link to="/mod/game-api/types/alta-stats-effects/ipourablecontainer">{"IPourableContainer"}</Link>{"> handledPourableLiquidContainers"}</code> | <span className="api-desc">Pourable containers marked as submerged, by rigidbody.</span> |
| <Link id="m-handledrigidbodies" /><code>{"private Dictionary<Rigidbody, int> handledRigidbodies"}</code> | <span className="api-desc">Rigidbodies inside the trigger and how many of their colliders are in.</span> |
| <Link id="m-isplayingsplashparticles" /><code>{"private bool isPlayingSplashParticles"}</code> | <span className="api-desc">Whether to play splash effects (default true).</span> |
| <Link id="m-issurfacestatic" /><code>{"private bool isSurfaceStatic"}</code> | <span className="api-desc">For still water like the river: uses a simpler way to place splashes.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-surfacetransform" /><code>{"private Transform surfaceTransform"}</code> | <span className="api-desc">The liquid surface: the cooking liquid's surface if there is one, else the trigger's parent.</span> |
| <Link id="m-thiscontainer" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" thisContainer"}</code> | <span className="api-desc">The liquid container this trigger belongs to.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-ontriggerenter" /><code>{"void OnTriggerEnter(Collider other)"}</code> | <span className="api-desc">Tracks a rigidbody entering; marks lower-priority pourable containers as submerged, and plays a splash for pickups and containers.</span> |
| <Link id="m-ontriggerexit" /><code>{"void OnTriggerExit(Collider other)"}</code> | <span className="api-desc">When the last collider of a rigidbody leaves, stops tracking it.</span> |

<details className="api-private">
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Finds the parent liquid container and its surface, and turns the trigger on or off by whether it holds liquid.</span> |
| <Link id="m-containercontentlevelchanged" /><code>{"private void ContainerContentLevelChanged("}<Link to="/mod/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" container, int oldLevel, int newLevel)"}</code> | <span className="api-desc">Turns the trigger off and forgets tracked objects when the container is empty, and back on when it has liquid.</span> |
| <Link id="m-fillothercontainer" /><code>{"private void FillOtherContainer("}<Link to="/mod/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" otherContainer)"}</code> | <span className="api-desc">Server: fills a lower-priority container that left the liquid with as much as fits and is available.</span> |
| <Link id="m-playliquidsplashparticles" /><code>{"private void PlayLiquidSplashParticles(Collider otherObj)"}</code> | <span className="api-desc">Plays a splash in the liquid's colours, and the splash sound, where the object meets the surface.</span> |
| <Link id="m-removedockedpickupfromliquidtrigger" /><code>{"private void RemoveDockedPickupFromLiquidTrigger("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg1, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" arg3)"}</code> | <span className="api-desc">Stops tracking a pickup that got docked while in the liquid.</span> |
| <Link id="m-removerigidbodyfromliquidtriggerarea" /><code>{"private void RemoveRigidbodyFromLiquidTriggerArea(Rigidbody attachedRigidbody)"}</code> | <span className="api-desc">Stops tracking a rigidbody, clears its submerged flag and, on the server, fills it if it is a container.</span> |

</details>

## Used in

Members of other types that take, return or hold a `LiquidContainerTrigger`:

<div className="api-used-in">

[`RiverCollision.liquidContainer`](/mod/game-api/types/alta-world-generation/rivercollision#m-liquidcontainer).

</div>
