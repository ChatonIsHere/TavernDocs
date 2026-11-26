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
| <Link id="m-ctor" /><code>{"LiquidContainerTrigger()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-handledliquidcontainers" /><code>{"private Dictionary<Rigidbody, "}<Link to="/mod/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{"> handledLiquidContainers"}</code> | Liquid containers inside the trigger, by rigidbody. |
| <Link id="m-handledpickups" /><code>{"private Dictionary<Rigidbody, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{"> handledPickups"}</code> | Pickups inside the trigger, by rigidbody. |
| <Link id="m-handledpourableliquidcontainers" /><code>{"private Dictionary<Rigidbody, "}<Link to="/mod/game-api/types/alta-stats-effects/ipourablecontainer">{"IPourableContainer"}</Link>{"> handledPourableLiquidContainers"}</code> | Pourable containers marked as submerged, by rigidbody. |
| <Link id="m-handledrigidbodies" /><code>{"private Dictionary<Rigidbody, int> handledRigidbodies"}</code> | Rigidbodies inside the trigger and how many of their colliders are in. |
| <Link id="m-isplayingsplashparticles" /><code>{"private bool isPlayingSplashParticles"}</code> | Whether to play splash effects (default true). |
| <Link id="m-issurfacestatic" /><code>{"private bool isSurfaceStatic"}</code> | For still water like the river: uses a simpler way to place splashes. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-surfacetransform" /><code>{"private Transform surfaceTransform"}</code> | The liquid surface: the cooking liquid's surface if there is one, else the trigger's parent. |
| <Link id="m-thiscontainer" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" thisContainer"}</code> | The liquid container this trigger belongs to. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-ontriggerenter" /><code>{"void OnTriggerEnter(Collider other)"}</code> | Tracks a rigidbody entering; marks lower-priority pourable containers as submerged, and plays a splash for pickups and containers. |
| <Link id="m-ontriggerexit" /><code>{"void OnTriggerExit(Collider other)"}</code> | When the last collider of a rigidbody leaves, stops tracking it. |

<details>
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Finds the parent liquid container and its surface, and turns the trigger on or off by whether it holds liquid. |
| <Link id="m-containercontentlevelchanged" /><code>{"private void ContainerContentLevelChanged("}<Link to="/mod/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" container, int oldLevel, int newLevel)"}</code> | Turns the trigger off and forgets tracked objects when the container is empty, and back on when it has liquid. |
| <Link id="m-fillothercontainer" /><code>{"private void FillOtherContainer("}<Link to="/mod/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" otherContainer)"}</code> | Server: fills a lower-priority container that left the liquid with as much as fits and is available. |
| <Link id="m-playliquidsplashparticles" /><code>{"private void PlayLiquidSplashParticles(Collider otherObj)"}</code> | Plays a splash in the liquid's colours, and the splash sound, where the object meets the surface. |
| <Link id="m-removedockedpickupfromliquidtrigger" /><code>{"private void RemoveDockedPickupFromLiquidTrigger("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg1, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" arg3)"}</code> | Stops tracking a pickup that got docked while in the liquid. |
| <Link id="m-removerigidbodyfromliquidtriggerarea" /><code>{"private void RemoveRigidbodyFromLiquidTriggerArea(Rigidbody attachedRigidbody)"}</code> | Stops tracking a rigidbody, clears its submerged flag and, on the server, fills it if it is a container. |

</details>

## Used in

Members of other types that take, return or hold a `LiquidContainerTrigger`:

[`RiverCollision.liquidContainer`](/mod/game-api/types/alta-world-generation/rivercollision#m-liquidcontainer).
