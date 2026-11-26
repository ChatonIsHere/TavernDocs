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

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** `MonoBehaviour`, [`IPourableContainer`](/mod/game-api/types/alta-stats-effects/ipourablecontainer), [`ILiquidTransitionController`](/mod/game-api/types/alta-stats-effects/iliquidtransitioncontroller)
- **Documented in** [Liquids](/mod/game-api/game-systems/liquids)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PourableContainer()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>16 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-container" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" container"}</code> | <span className="api-desc">Backing field for `InternalContainer`.</span> |
| <Link id="m-containerlipradius" /><code>{"private float containerLipRadius"}</code> | <span className="api-desc">Radius of the container's lip, used to place the particles.</span> |
| <Link id="m-currentpouringstrength" /><code>{"private float currentPouringStrength"}</code> | <span className="api-desc">Pouring strength computed this frame.</span> |
| <Link id="m-destinationcontainerhitcounts" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{", int> destinationContainerHitCounts"}</code> | <span className="api-desc">Particle hits per container since the last recheck.</span> |
| <Link id="m-isfullypouring" /><code>{"private bool isFullyPouring"}</code> | <span className="api-desc">Set by the strength controller when the container is fully tipped; particles then pour fully.</span> |
| <Link id="m-ismovingparticlestolowestpointonlip" /><code>{"private bool isMovingParticlesToLowestPointOnLip"}</code> | <span className="api-desc">If true, particles are moved to the lowest point on the lip each frame.</span> |
| <Link id="m-minpouringstrengthtodetect" /><code>{"private float minPouringStrengthToDetect"}</code> | <span className="api-desc">Strength below which nothing pours and particles are released.</span> |
| <Link id="m-overridepouringparticles" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" overridePouringParticles"}</code> | <span className="api-desc">Particles to use instead of the default from `LiquidSettings`.</span> |
| <Link id="m-pouringcoroutine" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" pouringCoroutine"}</code> | <span className="api-desc">The running `UpdatePouringTransition` coroutine, or null.</span> |
| <Link id="m-pouringparticlepouringmultiplier" /><code>{"private float pouringParticlePouringMultiplier"}</code> | <span className="api-desc">Multiplier from pouring strength to particle strength.</span> |
| <Link id="m-pouringparticles" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/pouringparticles">{"PouringParticles"}</Link>{" pouringParticles"}</code> | <span className="api-desc">Current pour particles, or null when not pouring.</span> |
| <Link id="m-pouringparticlesamount" /><code>{"private float pouringParticlesAmount"}</code> | <span className="api-desc">Serialized but not read by this class.</span> |
| <Link id="m-pouringparticlesparent" /><code>{"private Transform pouringParticlesParent"}</code> | <span className="api-desc">Transform the pour particles attach to.</span> |
| <Link id="m-pouringstrengthcontroller" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/pouringstrengthcontroller">{"PouringStrengthController"}</Link>{" pouringStrengthController"}</code> | <span className="api-desc">Works out pouring strength from the container's tilt.</span> |
| <Link id="m-pouringstrengthmultiplierforparticles" /><code>{"private float pouringStrengthMultiplierForParticles"}</code> | <span className="api-desc">Serialized but not read by this class.</span> |
| <Link id="m-timetorecheckpouringdestination" /><code>{"private float timeToRecheckPouringDestination"}</code> | <span className="api-desc">Seconds between retargeting the destination container.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-internalcontainer" /><code><Link to="/mod/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" InternalContainer { get; }"}</code> | <span className="api-desc">The `ILiquidContainer` on the same object.</span> |
| <Link id="m-isactive" /><code>{"bool IsActive { get; set; }"}</code> | <span className="api-desc">When false, pouring strength is zero and no liquid moves. Defaults to true.</span> |
| <Link id="m-issubmergedinothercontainer" /><code>{"bool IsSubmergedInOtherContainer { get; set; }"}</code> | <span className="api-desc">Set by liquid triggers while this container is dunked in another; stops pouring.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-registerpouringparticlehit" /><code>{"void RegisterPouringParticleHit("}<Link to="/mod/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" containerPouringInto)"}</code> | <span className="api-desc">Counts a pour particle hitting a container that can take this liquid. Called by `LiquidPouringParticlesMarker`.</span> |
| <Link id="m-setenabled" /><code>{"void SetEnabled(bool isEnabled)"}</code> | <span className="api-desc">Enables or disables the component; disabling stops pouring and releases particles.</span> |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> | <span className="api-desc">Gets the container, subscribes to its level and liquid changes, and releases particles when the entity is destroyed.</span> |
| <Link id="m-start" /><code>{"protected virtual void Start()"}</code> | <span className="api-desc">Runs the content check once so the component starts enabled or disabled correctly.</span> |

<details className="api-private">
<summary>11 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-containercontainedliquidchanged" /><code>{"private void ContainerContainedLiquidChanged("}<Link to="/mod/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" oldType, "}<Link to="/mod/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" newType)"}</code> | <span className="api-desc">Enables pouring only while the container holds a liquid type.</span> |
| <Link id="m-containercontentamountchanged" /><code>{"private void ContainerContentAmountChanged("}<Link to="/mod/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" container, int oldLevel, int newLevel)"}</code> | <span className="api-desc">Enables pouring only while the container isn't empty.</span> |
| <Link id="m-findmostpouredintocontainer" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" FindMostPouredIntoContainer()"}</code> | <span className="api-desc">Returns the compatible container hit by the most particles since the last recheck, or null.</span> |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> | <span className="api-desc">Reads pouring strength (zero if lidded, inactive or submerged), starts or stops pouring on the server, and updates particles.</span> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Empty.</span> |
| <Link id="m-progressouttransition" /><code>{"private void ProgressOutTransition()"}</code> | <span className="api-desc">Advances the outgoing liquid transfer by strength times frame time.</span> |
| <Link id="m-releasepouringparticles" /><code>{"private void ReleasePouringParticles()"}</code> | <span className="api-desc">Returns the pour particles to the pool.</span> |
| <Link id="m-startpouring" /><code>{"private void StartPouring()"}</code> | <span className="api-desc">Server: starts the pouring coroutine if it isn't running.</span> |
| <Link id="m-stoppouring" /><code>{"private void StopPouring()"}</code> | <span className="api-desc">Stops the pouring coroutine and clears the outgoing transfer's target.</span> |
| <Link id="m-updatepouringparticles" /><code>{"private void UpdatePouringParticles()"}</code> | <span className="api-desc">Spawns, updates or releases the pour particles from current strength and content level.</span> |
| <Link id="m-updatepouringtransition" /><code>{"private IEnumerator UpdatePouringTransition() (iterator)"}</code> | <span className="api-desc">Coroutine: transfers liquid every frame and every recheck interval retargets the most-hit container or the global container.</span> |

</details>

## Used in

Members of other types that take, return or hold a `PourableContainer`:

<div className="api-used-in">

[`PickupLiquidContainerEnabler.pourable`](/mod/game-api/types/alta-stats-effects/pickupliquidcontainerenabler#m-pourable), [`PouringStrengthController.pouringContainer`](/mod/game-api/types/alta-stats-effects/pouringstrengthcontroller#m-pouringcontainer).

</div>
