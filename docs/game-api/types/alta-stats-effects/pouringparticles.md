---
title: "PouringParticles"
description: "class PouringParticles in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PouringParticles

A **class** in `Root.Township`, `Alta.Liquid`.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** [`PooledObject`](/game-api/types/global-p/pooledobject)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PouringParticles()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-coneradius" /><code>{"private float coneRadius"}</code> |  |
| <Link id="m-isfullypouring" /><code>{"private bool isFullyPouring"}</code> |  |
| <Link id="m-maxpouringparticleemission" /><code>{"private float maxPouringParticleEmission"}</code> |  |
| <Link id="m-openingradius" /><code>{"private float openingRadius"}</code> |  |
| <Link id="m-particlesparent" /><code>{"private Transform particlesParent"}</code> |  |
| <Link id="m-particlesystemrenderercolorer" /><code>{"private "}<Link to="/game-api/types/global-i-l/liquidparticlesrenderercolorer">{"LiquidParticlesRendererColorer"}</Link>{" particleSystemRendererColorer"}</code> |  |
| <Link id="m-pouringparticlemainmodule" /><code>{"private ParticleSystem.MainModule pouringParticleMainModule"}</code> |  |
| <Link id="m-pouringparticlesemissionmodule" /><code>{"private ParticleSystem.EmissionModule pouringParticlesEmissionModule"}</code> |  |
| <Link id="m-pouringparticlesystem" /><code>{"private ParticleSystem pouringParticleSystem"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-pourablecontainer" /><code><Link to="/game-api/types/alta-stats-effects/ipourablecontainer">{"IPourableContainer"}</Link>{" PourableContainer { get; private set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-placepouringparticlesonlip" /><code>{"void PlacePouringParticlesOnLip(float containerLipRadius)"}</code> |  |
| <Link id="m-pourfully" /><code>{"void PourFully(float pouringStrength)"}</code> |  |
| <Link id="m-release" /><code>{"override void Release()"}</code> |  |
| <Link id="m-resettonormalpouringmode" /><code>{"void ResetToNormalPouringMode()"}</code> |  |
| <Link id="m-setupforpourablecontainer" /><code>{"void SetupForPourableContainer("}<Link to="/game-api/types/alta-stats-effects/ipourablecontainer">{"IPourableContainer"}</Link>{" liquidContainer, Transform particlesParent, float openingRadius)"}</code> |  |
| <Link id="m-updatepouringstrength" /><code>{"void UpdatePouringStrength(float currentPouringStrength)"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-containerliquidtypechanged" /><code>{"private void ContainerLiquidTypeChanged("}<Link to="/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" oldType, "}<Link to="/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" newType)"}</code> |  |
| <Link id="m-resetbeforerelease" /><code>{"private void ResetBeforeRelease()"}</code> |  |
| <Link id="m-setuppouringparticles" /><code>{"private void SetupPouringParticles()"}</code> |  |
| <Link id="m-setuptofullypour" /><code>{"private void SetupToFullyPour()"}</code> |  |
| <Link id="m-startparticlesagain" /><code>{"private void StartParticlesAgain("}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject)"}</code> |  |
| <Link id="m-waitforparticlesystemtorelease" /><code>{"private IEnumerator WaitForParticleSystemToRelease() (iterator)"}</code> |  |

## Used in

Members of other types that take, return or hold a `PouringParticles`:

[`LiquidPouringParticlesMarker.pouringParticles`](/game-api/types/alta-stats-effects/liquidpouringparticlesmarker#m-pouringparticles), [`PourableContainer.pouringParticles`](/game-api/types/alta-stats-effects/pourablecontainer#m-pouringparticles).
