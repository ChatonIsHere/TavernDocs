---
title: "LiquidContainerTrigger"
description: "class LiquidContainerTrigger in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LiquidContainerTrigger

A **class** in `Root.Township`, `Alta.Liquid`.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** `MonoBehaviour`
- **Documented in** [Liquids](/game-api/game-systems/liquids#dipping-liquidcontainertrigger)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"LiquidContainerTrigger()"}</code> |

## Fields

<details>
<summary>9 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-handledliquidcontainers" /><code>{"private Dictionary<Rigidbody, "}<Link to="/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{"> handledLiquidContainers"}</code> |
| <Link id="m-handledpickups" /><code>{"private Dictionary<Rigidbody, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{"> handledPickups"}</code> |
| <Link id="m-handledpourableliquidcontainers" /><code>{"private Dictionary<Rigidbody, "}<Link to="/game-api/types/alta-stats-effects/ipourablecontainer">{"IPourableContainer"}</Link>{"> handledPourableLiquidContainers"}</code> |
| <Link id="m-handledrigidbodies" /><code>{"private Dictionary<Rigidbody, int> handledRigidbodies"}</code> |
| <Link id="m-isplayingsplashparticles" /><code>{"private bool isPlayingSplashParticles"}</code> |
| <Link id="m-issurfacestatic" /><code>{"private bool isSurfaceStatic"}</code> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |
| <Link id="m-surfacetransform" /><code>{"private Transform surfaceTransform"}</code> |
| <Link id="m-thiscontainer" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" thisContainer"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-ontriggerenter" /><code>{"void OnTriggerEnter(Collider other)"}</code> |
| <Link id="m-ontriggerexit" /><code>{"void OnTriggerExit(Collider other)"}</code> |

<details>
<summary>6 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |
| <Link id="m-containercontentlevelchanged" /><code>{"private void ContainerContentLevelChanged("}<Link to="/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" container, int oldLevel, int newLevel)"}</code> |
| <Link id="m-fillothercontainer" /><code>{"private void FillOtherContainer("}<Link to="/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" otherContainer)"}</code> |
| <Link id="m-playliquidsplashparticles" /><code>{"private void PlayLiquidSplashParticles(Collider otherObj)"}</code> |
| <Link id="m-removedockedpickupfromliquidtrigger" /><code>{"private void RemoveDockedPickupFromLiquidTrigger("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg1, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" arg3)"}</code> |
| <Link id="m-removerigidbodyfromliquidtriggerarea" /><code>{"private void RemoveRigidbodyFromLiquidTriggerArea(Rigidbody attachedRigidbody)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `LiquidContainerTrigger`:

[`RiverCollision.liquidContainer`](/game-api/types/alta-world-generation/rivercollision#m-liquidcontainer).
