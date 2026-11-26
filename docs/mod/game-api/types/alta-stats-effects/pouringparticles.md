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
| <Link id="m-ctor" /><code>{"PouringParticles()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-coneradius" /><code>{"private float coneRadius"}</code> | <span className="api-desc">Original cone radius of the particle shape.</span> |
| <Link id="m-isfullypouring" /><code>{"private bool isFullyPouring"}</code> | <span className="api-desc">True while in full pour (circle) mode.</span> |
| <Link id="m-maxpouringparticleemission" /><code>{"private float maxPouringParticleEmission"}</code> | <span className="api-desc">Original emission rate, the maximum for pouring.</span> |
| <Link id="m-openingradius" /><code>{"private float openingRadius"}</code> | <span className="api-desc">Radius of the container opening, used for full pour.</span> |
| <Link id="m-particlesparent" /><code>{"private Transform particlesParent"}</code> | <span className="api-desc">Transform on the container the particles are placed relative to.</span> |
| <Link id="m-particlesystemrenderercolorer" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/liquidparticlesrenderercolorer">{"LiquidParticlesRendererColorer"}</Link>{" particleSystemRendererColorer"}</code> | <span className="api-desc">Colours the particle renderer to match the liquid.</span> |
| <Link id="m-pouringparticlemainmodule" /><code>{"private ParticleSystem.MainModule pouringParticleMainModule"}</code> | <span className="api-desc">Cached main module of the particle system.</span> |
| <Link id="m-pouringparticlesemissionmodule" /><code>{"private ParticleSystem.EmissionModule pouringParticlesEmissionModule"}</code> | <span className="api-desc">Cached emission module of the particle system.</span> |
| <Link id="m-pouringparticlesystem" /><code>{"private ParticleSystem pouringParticleSystem"}</code> | <span className="api-desc">The particle system.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-pourablecontainer" /><code><Link to="/mod/game-api/types/alta-stats-effects/ipourablecontainer">{"IPourableContainer"}</Link>{" PourableContainer { get; private set; }"}</code> | <span className="api-desc">The container these particles are pouring from, or null when free.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-placepouringparticlesonlip" /><code>{"void PlacePouringParticlesOnLip(float containerLipRadius)"}</code> | <span className="api-desc">Moves the effect to the lowest point of the container lip.</span> |
| <Link id="m-pourfully" /><code>{"void PourFully(float pouringStrength)"}</code> | <span className="api-desc">Switches to a circle shape over the whole opening and sets emission by strength.</span> |
| <Link id="m-release" /><code>{"override void Release()"}</code> | <span className="api-desc">Unparents, stops the particles and returns to the pool once they finish.</span> |
| <Link id="m-resettonormalpouringmode" /><code>{"void ResetToNormalPouringMode()"}</code> | <span className="api-desc">Restores the cone shape and radius.</span> |
| <Link id="m-setupforpourablecontainer" /><code>{"void SetupForPourableContainer("}<Link to="/mod/game-api/types/alta-stats-effects/ipourablecontainer">{"IPourableContainer"}</Link>{" liquidContainer, Transform particlesParent, float openingRadius)"}</code> | <span className="api-desc">Claims the particles for a container, colours them and listens for liquid changes. Logs an error if already claimed.</span> |
| <Link id="m-updatepouringstrength" /><code>{"void UpdatePouringStrength(float currentPouringStrength)"}</code> | <span className="api-desc">Sets emission to the maximum times the strength, leaving full pour mode if needed.</span> |

<details className="api-private">
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Caches the particle modules and restarts the particles each time the object is taken from the pool.</span> |
| <Link id="m-containerliquidtypechanged" /><code>{"private void ContainerLiquidTypeChanged("}<Link to="/mod/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" oldType, "}<Link to="/mod/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" newType)"}</code> | <span className="api-desc">Recolours the particles when the container's liquid changes.</span> |
| <Link id="m-resetbeforerelease" /><code>{"private void ResetBeforeRelease()"}</code> | <span className="api-desc">Unhooks from the container and resets shape and emission.</span> |
| <Link id="m-setuppouringparticles" /><code>{"private void SetupPouringParticles()"}</code> | <span className="api-desc">Caches the emission and main modules, maximum emission and cone radius.</span> |
| <Link id="m-setuptofullypour" /><code>{"private void SetupToFullyPour()"}</code> | <span className="api-desc">Sets the shape to a circle the size of the opening at the parent position.</span> |
| <Link id="m-startparticlesagain" /><code>{"private void StartParticlesAgain("}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject)"}</code> | <span className="api-desc">Plays the particle system again after being taken from the pool.</span> |
| <Link id="m-waitforparticlesystemtorelease" /><code>{"private IEnumerator WaitForParticleSystemToRelease() (iterator)"}</code> | <span className="api-desc">Stops emitting, waits the particle duration, then resets and releases to the pool.</span> |

</details>

## Used in

Members of other types that take, return or hold a `PouringParticles`:

<div className="api-used-in">

[`LiquidPouringParticlesMarker.pouringParticles`](/mod/game-api/types/alta-stats-effects/liquidpouringparticlesmarker#m-pouringparticles), [`PourableContainer.pouringParticles`](/mod/game-api/types/alta-stats-effects/pourablecontainer#m-pouringparticles).

</div>
