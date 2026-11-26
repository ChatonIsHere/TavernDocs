---
title: "PourableContainer"
description: "Lets a liquid container pour when tilted."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PourableContainer

A **class** in `Root.Township`, `Alta.Liquid`.

Lets a liquid container pour when tilted. Each frame it reads pouring strength, drives the pour particles, and on the server moves liquid to whichever container the particles hit most (or spills it into the global container).

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** `MonoBehaviour`, [`IPourableContainer`](/game-api/types/alta-stats-effects/ipourablecontainer), [`ILiquidTransitionController`](/game-api/types/alta-stats-effects/iliquidtransitioncontroller)
- **Documented in** [Liquids](/game-api/game-systems/liquids)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PourableContainer()"}</code> |

## Fields

<details>
<summary>16 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-container" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" container"}</code> | Backing field for `InternalContainer`. |
| <Link id="m-containerlipradius" /><code>{"private float containerLipRadius"}</code> | Radius of the container's lip, used to place the particles. |
| <Link id="m-currentpouringstrength" /><code>{"private float currentPouringStrength"}</code> | Pouring strength computed this frame. |
| <Link id="m-destinationcontainerhitcounts" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{", int> destinationContainerHitCounts"}</code> | Particle hits per container since the last recheck. |
| <Link id="m-isfullypouring" /><code>{"private bool isFullyPouring"}</code> | Set by the strength controller when the container is fully tipped; particles then pour fully. |
| <Link id="m-ismovingparticlestolowestpointonlip" /><code>{"private bool isMovingParticlesToLowestPointOnLip"}</code> | If true, particles are moved to the lowest point on the lip each frame. |
| <Link id="m-minpouringstrengthtodetect" /><code>{"private float minPouringStrengthToDetect"}</code> | Strength below which nothing pours and particles are released. |
| <Link id="m-overridepouringparticles" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" overridePouringParticles"}</code> | Particles to use instead of the default from `LiquidSettings`. |
| <Link id="m-pouringcoroutine" /><code>{"private "}<Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" pouringCoroutine"}</code> | The running `UpdatePouringTransition` coroutine, or null. |
| <Link id="m-pouringparticlepouringmultiplier" /><code>{"private float pouringParticlePouringMultiplier"}</code> | Multiplier from pouring strength to particle strength. |
| <Link id="m-pouringparticles" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/pouringparticles">{"PouringParticles"}</Link>{" pouringParticles"}</code> | Current pour particles, or null when not pouring. |
| <Link id="m-pouringparticlesamount" /><code>{"private float pouringParticlesAmount"}</code> | Serialized but not read by this class. |
| <Link id="m-pouringparticlesparent" /><code>{"private Transform pouringParticlesParent"}</code> | Transform the pour particles attach to. |
| <Link id="m-pouringstrengthcontroller" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/pouringstrengthcontroller">{"PouringStrengthController"}</Link>{" pouringStrengthController"}</code> | Works out pouring strength from the container's tilt. |
| <Link id="m-pouringstrengthmultiplierforparticles" /><code>{"private float pouringStrengthMultiplierForParticles"}</code> | Serialized but not read by this class. |
| <Link id="m-timetorecheckpouringdestination" /><code>{"private float timeToRecheckPouringDestination"}</code> | Seconds between retargeting the destination container. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-internalcontainer" /><code><Link to="/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" InternalContainer { get; }"}</code> | The `ILiquidContainer` on the same object. |
| <Link id="m-isactive" /><code>{"bool IsActive { get; set; }"}</code> | When false, pouring strength is zero and no liquid moves. Defaults to true. |
| <Link id="m-issubmergedinothercontainer" /><code>{"bool IsSubmergedInOtherContainer { get; set; }"}</code> | Set by liquid triggers while this container is dunked in another; stops pouring. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-registerpouringparticlehit" /><code>{"void RegisterPouringParticleHit("}<Link to="/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" containerPouringInto)"}</code> | Counts a pour particle hitting a container that can take this liquid. Called by `LiquidPouringParticlesMarker`. |
| <Link id="m-setenabled" /><code>{"void SetEnabled(bool isEnabled)"}</code> | Enables or disables the component; disabling stops pouring and releases particles. |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> | Gets the container, subscribes to its level and liquid changes, and releases particles when the entity is destroyed. |
| <Link id="m-start" /><code>{"protected virtual void Start()"}</code> | Runs the content check once so the component starts enabled or disabled correctly. |

<details>
<summary>11 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-containercontainedliquidchanged" /><code>{"private void ContainerContainedLiquidChanged("}<Link to="/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" oldType, "}<Link to="/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" newType)"}</code> | Enables pouring only while the container holds a liquid type. |
| <Link id="m-containercontentamountchanged" /><code>{"private void ContainerContentAmountChanged("}<Link to="/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" container, int oldLevel, int newLevel)"}</code> | Enables pouring only while the container isn't empty. |
| <Link id="m-findmostpouredintocontainer" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" FindMostPouredIntoContainer()"}</code> | Returns the compatible container hit by the most particles since the last recheck, or null. |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> | Reads pouring strength (zero if lidded, inactive or submerged), starts or stops pouring on the server, and updates particles. |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Empty. |
| <Link id="m-progressouttransition" /><code>{"private void ProgressOutTransition()"}</code> | Advances the outgoing liquid transfer by strength times frame time. |
| <Link id="m-releasepouringparticles" /><code>{"private void ReleasePouringParticles()"}</code> | Returns the pour particles to the pool. |
| <Link id="m-startpouring" /><code>{"private void StartPouring()"}</code> | Server: starts the pouring coroutine if it isn't running. |
| <Link id="m-stoppouring" /><code>{"private void StopPouring()"}</code> | Stops the pouring coroutine and clears the outgoing transfer's target. |
| <Link id="m-updatepouringparticles" /><code>{"private void UpdatePouringParticles()"}</code> | Spawns, updates or releases the pour particles from current strength and content level. |
| <Link id="m-updatepouringtransition" /><code>{"private IEnumerator UpdatePouringTransition() (iterator)"}</code> | Coroutine: transfers liquid every frame and every recheck interval retargets the most-hit container or the global container. |

</details>

## Used in

Members of other types that take, return or hold a `PourableContainer`:

[`PickupLiquidContainerEnabler.pourable`](/game-api/types/alta-stats-effects/pickupliquidcontainerenabler#m-pourable), [`PouringStrengthController.pouringContainer`](/game-api/types/alta-stats-effects/pouringstrengthcontroller#m-pouringcontainer).
