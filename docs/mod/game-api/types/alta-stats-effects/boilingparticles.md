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
| <Link id="m-ctor" /><code>{"BoilingParticles()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-boilingparticles" /><code>{"private ParticleSystem[] boilingParticles"}</code> | The particle systems this controls. |
| <Link id="m-boilingparticlesbaseemissionvalues" /><code>{"private float[] boilingParticlesBaseEmissionValues"}</code> | Each particle system's emission rate from the prefab. |
| <Link id="m-container" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" container"}</code> | The liquid container this is attached to. |
| <Link id="m-entity" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity"}</code> | The container's entity. |
| <Link id="m-materialcreator" /><code>{"private static "}<Link to="/mod/game-api/types/alta-stats-effects/boilingparticlesmaterialcreator">{"BoilingParticlesMaterialCreator"}</Link>{" materialCreator"}</code> | Shared creator for the tinted particle materials. |
| <Link id="m-materialtemplates" /><code>{"private Dictionary<ParticleSystem, Material> materialTemplates"}</code> | Original material of each particle system, used as the template. |
| <Link id="m-propertyblock" /><code>{"private MaterialPropertyBlock propertyBlock"}</code> | Property block holding colour and transparency. |
| <Link id="m-stagesettings" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/cookingliquidvisual-boilingparticlesstagesetting">{"CookingLiquidVisual.BoilingParticlesStageSetting"}</Link>{"[] stageSettings"}</code> | Lifetime and height offset per content level. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clearparticles" /><code>{"void ClearParticles()"}</code> | Clears all the particle systems. |
| <Link id="m-release" /><code>{"override void Release()"}</code> | Unhooks from the container and returns to the pool. The entity check is inverted, so the destroy handler is never removed. |
| <Link id="m-setupforcontainer" /><code>{"void SetupForContainer("}<Link to="/mod/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" container, "}<Link to="/mod/game-api/types/alta-crafting/cookingliquidvisual-boilingparticlesstagesetting">{"CookingLiquidVisual.BoilingParticlesStageSetting"}</Link>{"[] stageSettings)"}</code> | Attaches to a liquid container: hooks its destroy and content level events, applies the liquid look and clears particles. |
| <Link id="m-setupforliquid" /><code>{"void SetupForLiquid("}<Link to="/mod/game-api/types/alta-stats-effects/liquiddata">{"LiquidData"}</Link>{" liquid)"}</code> | Applies a liquid's tinted colour and transparency to the particle materials. |
| <Link id="m-updateemissionbasedontemperature" /><code>{"void UpdateEmissionBasedOnTemperature(float temperature, float emissionMultiplier)"}</code> | Sets each emission rate to its base times the multiplier. The temperature argument is not used. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Stores each particle system's material and base emission rate. |
| <Link id="m-releaseondestroy" /><code>{"private void ReleaseOnDestroy("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | Releases the particles when the container's entity is destroyed. |
| <Link id="m-setupboilingparticles" /><code>{"private void SetupBoilingParticles()"}</code> | Records each particle system's base emission rate. |
| <Link id="m-updateparticlelifetimesbaseoncontentlevel" /><code>{"private void UpdateParticleLifetimesBaseOnContentLevel("}<Link to="/mod/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" container, int oldLevel, int newLevel)"}</code> | Picks the stage setting for the content level and sets particle lifetime and parent height from it. |

</details>

## Used in

Members of other types that take, return or hold a `BoilingParticles`:

[`CookingLiquidVisual.boilingParticles`](/mod/game-api/types/alta-crafting/cookingliquidvisual#m-boilingparticles).
