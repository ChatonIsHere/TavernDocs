---
title: "BoilingParticles"
description: "Pooled boiling bubble particles for a cooking liquid container."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BoilingParticles

A **class** in `Root.Township`, `Alta.Liquid`.

Pooled boiling bubble particles for a cooking liquid container. Client visual: tints to the liquid and changes lifetime and height with content level.

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** [`PooledObject`](/mod/game-api/types/global-p/pooledobject)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BoilingParticles()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-boilingparticles" /><code>{"private ParticleSystem[] boilingParticles"}</code> | <span className="api-desc">The particle systems this controls.</span> |
| <Link id="m-boilingparticlesbaseemissionvalues" /><code>{"private float[] boilingParticlesBaseEmissionValues"}</code> | <span className="api-desc">Each particle system's emission rate from the prefab.</span> |
| <Link id="m-container" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" container"}</code> | <span className="api-desc">The liquid container this is attached to.</span> |
| <Link id="m-entity" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity"}</code> | <span className="api-desc">The container's entity.</span> |
| <Link id="m-materialcreator" /><code>{"private static "}<Link to="/mod/game-api/types/alta-stats-effects/boilingparticlesmaterialcreator">{"BoilingParticlesMaterialCreator"}</Link>{" materialCreator"}</code> | <span className="api-desc">Shared creator for the tinted particle materials.</span> |
| <Link id="m-materialtemplates" /><code>{"private Dictionary<ParticleSystem, Material> materialTemplates"}</code> | <span className="api-desc">Original material of each particle system, used as the template.</span> |
| <Link id="m-propertyblock" /><code>{"private MaterialPropertyBlock propertyBlock"}</code> | <span className="api-desc">Property block holding colour and transparency.</span> |
| <Link id="m-stagesettings" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/cookingliquidvisual-boilingparticlesstagesetting">{"CookingLiquidVisual.BoilingParticlesStageSetting"}</Link>{"[] stageSettings"}</code> | <span className="api-desc">Lifetime and height offset per content level.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clearparticles" /><code>{"void ClearParticles()"}</code> | <span className="api-desc">Clears all the particle systems.</span> |
| <Link id="m-release" /><code>{"override void Release()"}</code> | <span className="api-desc">Unhooks from the container and returns to the pool. The entity check is inverted, so the destroy handler is never removed.</span> |
| <Link id="m-setupforcontainer" /><code>{"void SetupForContainer("}<Link to="/mod/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" container, "}<Link to="/mod/game-api/types/alta-crafting/cookingliquidvisual-boilingparticlesstagesetting">{"CookingLiquidVisual.BoilingParticlesStageSetting"}</Link>{"[] stageSettings)"}</code> | <span className="api-desc">Attaches to a liquid container: hooks its destroy and content level events, applies the liquid look and clears particles.</span> |
| <Link id="m-setupforliquid" /><code>{"void SetupForLiquid("}<Link to="/mod/game-api/types/alta-stats-effects/liquiddata">{"LiquidData"}</Link>{" liquid)"}</code> | <span className="api-desc">Applies a liquid's tinted colour and transparency to the particle materials.</span> |
| <Link id="m-updateemissionbasedontemperature" /><code>{"void UpdateEmissionBasedOnTemperature(float temperature, float emissionMultiplier)"}</code> | <span className="api-desc">Sets each emission rate to its base times the multiplier. The temperature argument is not used.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Stores each particle system's material and base emission rate.</span> |
| <Link id="m-releaseondestroy" /><code>{"private void ReleaseOnDestroy("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | <span className="api-desc">Releases the particles when the container's entity is destroyed.</span> |
| <Link id="m-setupboilingparticles" /><code>{"private void SetupBoilingParticles()"}</code> | <span className="api-desc">Records each particle system's base emission rate.</span> |
| <Link id="m-updateparticlelifetimesbaseoncontentlevel" /><code>{"private void UpdateParticleLifetimesBaseOnContentLevel("}<Link to="/mod/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" container, int oldLevel, int newLevel)"}</code> | <span className="api-desc">Picks the stage setting for the content level and sets particle lifetime and parent height from it.</span> |

</details>

## Used in

Members of other types that take, return or hold a `BoilingParticles`:

<div className="api-used-in">

[`CookingLiquidVisual.boilingParticles`](/mod/game-api/types/alta-crafting/cookingliquidvisual#m-boilingparticles).

</div>
