---
title: "PouringParticles"
description: "Pooled particle effect for liquid pouring out of a container, coloured to the liquid."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PouringParticles

A **class** in `Root.Township`, `Alta.Liquid`.

Pooled particle effect for liquid pouring out of a container, coloured to the liquid. Client side visual.

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** [`PooledObject`](/mod/game-api/types/global-p/pooledobject)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PouringParticles()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-coneradius" /><code>{"private float coneRadius"}</code> | Original cone radius of the particle shape. |
| <Link id="m-isfullypouring" /><code>{"private bool isFullyPouring"}</code> | True while in full pour (circle) mode. |
| <Link id="m-maxpouringparticleemission" /><code>{"private float maxPouringParticleEmission"}</code> | Original emission rate, the maximum for pouring. |
| <Link id="m-openingradius" /><code>{"private float openingRadius"}</code> | Radius of the container opening, used for full pour. |
| <Link id="m-particlesparent" /><code>{"private Transform particlesParent"}</code> | Transform on the container the particles are placed relative to. |
| <Link id="m-particlesystemrenderercolorer" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/liquidparticlesrenderercolorer">{"LiquidParticlesRendererColorer"}</Link>{" particleSystemRendererColorer"}</code> | Colours the particle renderer to match the liquid. |
| <Link id="m-pouringparticlemainmodule" /><code>{"private ParticleSystem.MainModule pouringParticleMainModule"}</code> | Cached main module of the particle system. |
| <Link id="m-pouringparticlesemissionmodule" /><code>{"private ParticleSystem.EmissionModule pouringParticlesEmissionModule"}</code> | Cached emission module of the particle system. |
| <Link id="m-pouringparticlesystem" /><code>{"private ParticleSystem pouringParticleSystem"}</code> | The particle system. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-pourablecontainer" /><code><Link to="/mod/game-api/types/alta-stats-effects/ipourablecontainer">{"IPourableContainer"}</Link>{" PourableContainer { get; private set; }"}</code> | The container these particles are pouring from, or null when free. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-placepouringparticlesonlip" /><code>{"void PlacePouringParticlesOnLip(float containerLipRadius)"}</code> | Moves the effect to the lowest point of the container lip. |
| <Link id="m-pourfully" /><code>{"void PourFully(float pouringStrength)"}</code> | Switches to a circle shape over the whole opening and sets emission by strength. |
| <Link id="m-release" /><code>{"override void Release()"}</code> | Unparents, stops the particles and returns to the pool once they finish. |
| <Link id="m-resettonormalpouringmode" /><code>{"void ResetToNormalPouringMode()"}</code> | Restores the cone shape and radius. |
| <Link id="m-setupforpourablecontainer" /><code>{"void SetupForPourableContainer("}<Link to="/mod/game-api/types/alta-stats-effects/ipourablecontainer">{"IPourableContainer"}</Link>{" liquidContainer, Transform particlesParent, float openingRadius)"}</code> | Claims the particles for a container, colours them and listens for liquid changes. Logs an error if already claimed. |
| <Link id="m-updatepouringstrength" /><code>{"void UpdatePouringStrength(float currentPouringStrength)"}</code> | Sets emission to the maximum times the strength, leaving full pour mode if needed. |

<details>
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Caches the particle modules and restarts the particles each time the object is taken from the pool. |
| <Link id="m-containerliquidtypechanged" /><code>{"private void ContainerLiquidTypeChanged("}<Link to="/mod/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" oldType, "}<Link to="/mod/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" newType)"}</code> | Recolours the particles when the container's liquid changes. |
| <Link id="m-resetbeforerelease" /><code>{"private void ResetBeforeRelease()"}</code> | Unhooks from the container and resets shape and emission. |
| <Link id="m-setuppouringparticles" /><code>{"private void SetupPouringParticles()"}</code> | Caches the emission and main modules, maximum emission and cone radius. |
| <Link id="m-setuptofullypour" /><code>{"private void SetupToFullyPour()"}</code> | Sets the shape to a circle the size of the opening at the parent position. |
| <Link id="m-startparticlesagain" /><code>{"private void StartParticlesAgain("}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject)"}</code> | Plays the particle system again after being taken from the pool. |
| <Link id="m-waitforparticlesystemtorelease" /><code>{"private IEnumerator WaitForParticleSystemToRelease() (iterator)"}</code> | Stops emitting, waits the particle duration, then resets and releases to the pool. |

</details>

## Used in

Members of other types that take, return or hold a `PouringParticles`:

[`LiquidPouringParticlesMarker.pouringParticles`](/mod/game-api/types/alta-stats-effects/liquidpouringparticlesmarker#m-pouringparticles), [`PourableContainer.pouringParticles`](/mod/game-api/types/alta-stats-effects/pourablecontainer#m-pouringparticles).
