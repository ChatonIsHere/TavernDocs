---
title: "PourableContainer"
description: "class PourableContainer in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PourableContainer

A **class** in `Root.Township`, `Alta.Liquid`.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** `MonoBehaviour`, [`IPourableContainer`](/game-api/types/alta-stats-effects/ipourablecontainer), [`ILiquidTransitionController`](/game-api/types/alta-stats-effects/iliquidtransitioncontroller)
- **Documented in** [Liquids](/game-api/game-systems/liquids)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PourableContainer()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-container" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" container"}</code> |  |
| <Link id="m-containerlipradius" /><code>{"private float containerLipRadius"}</code> |  |
| <Link id="m-currentpouringstrength" /><code>{"private float currentPouringStrength"}</code> |  |
| <Link id="m-destinationcontainerhitcounts" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{", int> destinationContainerHitCounts"}</code> |  |
| <Link id="m-isfullypouring" /><code>{"private bool isFullyPouring"}</code> |  |
| <Link id="m-ismovingparticlestolowestpointonlip" /><code>{"private bool isMovingParticlesToLowestPointOnLip"}</code> |  |
| <Link id="m-minpouringstrengthtodetect" /><code>{"private float minPouringStrengthToDetect"}</code> |  |
| <Link id="m-overridepouringparticles" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" overridePouringParticles"}</code> |  |
| <Link id="m-pouringcoroutine" /><code>{"private "}<Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" pouringCoroutine"}</code> |  |
| <Link id="m-pouringparticlepouringmultiplier" /><code>{"private float pouringParticlePouringMultiplier"}</code> |  |
| <Link id="m-pouringparticles" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/pouringparticles">{"PouringParticles"}</Link>{" pouringParticles"}</code> |  |
| <Link id="m-pouringparticlesamount" /><code>{"private float pouringParticlesAmount"}</code> |  |
| <Link id="m-pouringparticlesparent" /><code>{"private Transform pouringParticlesParent"}</code> |  |
| <Link id="m-pouringstrengthcontroller" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/pouringstrengthcontroller">{"PouringStrengthController"}</Link>{" pouringStrengthController"}</code> |  |
| <Link id="m-pouringstrengthmultiplierforparticles" /><code>{"private float pouringStrengthMultiplierForParticles"}</code> |  |
| <Link id="m-timetorecheckpouringdestination" /><code>{"private float timeToRecheckPouringDestination"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-internalcontainer" /><code><Link to="/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" InternalContainer { get; }"}</code> |  |
| <Link id="m-isactive" /><code>{"bool IsActive { get; set; }"}</code> |  |
| <Link id="m-issubmergedinothercontainer" /><code>{"bool IsSubmergedInOtherContainer { get; set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-registerpouringparticlehit" /><code>{"void RegisterPouringParticleHit("}<Link to="/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" containerPouringInto)"}</code> |  |
| <Link id="m-setenabled" /><code>{"void SetEnabled(bool isEnabled)"}</code> |  |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> |  |
| <Link id="m-containercontainedliquidchanged" /><code>{"private void ContainerContainedLiquidChanged("}<Link to="/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" oldType, "}<Link to="/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" newType)"}</code> |  |
| <Link id="m-containercontentamountchanged" /><code>{"private void ContainerContentAmountChanged("}<Link to="/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" container, int oldLevel, int newLevel)"}</code> |  |
| <Link id="m-findmostpouredintocontainer" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" FindMostPouredIntoContainer()"}</code> |  |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> |  |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> |  |
| <Link id="m-progressouttransition" /><code>{"private void ProgressOutTransition()"}</code> |  |
| <Link id="m-releasepouringparticles" /><code>{"private void ReleasePouringParticles()"}</code> |  |
| <Link id="m-start" /><code>{"protected virtual void Start()"}</code> |  |
| <Link id="m-startpouring" /><code>{"private void StartPouring()"}</code> |  |
| <Link id="m-stoppouring" /><code>{"private void StopPouring()"}</code> |  |
| <Link id="m-updatepouringparticles" /><code>{"private void UpdatePouringParticles()"}</code> |  |
| <Link id="m-updatepouringtransition" /><code>{"private IEnumerator UpdatePouringTransition() (iterator)"}</code> |  |

## Used in

Members of other types that take, return or hold a `PourableContainer`:

[`PickupLiquidContainerEnabler.pourable`](/game-api/types/alta-stats-effects/pickupliquidcontainerenabler#m-pourable), [`PouringStrengthController.pouringContainer`](/game-api/types/alta-stats-effects/pouringstrengthcontroller#m-pouringcontainer).
