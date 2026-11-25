---
title: "BoilingParticles"
description: "class BoilingParticles in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BoilingParticles

A **class** in `Root.Township`, `Alta.Liquid`.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** [`PooledObject`](/game-api/types/global-p/pooledobject)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BoilingParticles()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-boilingparticles" /><code>{"private ParticleSystem[] boilingParticles"}</code> |  |
| <Link id="m-boilingparticlesbaseemissionvalues" /><code>{"private float[] boilingParticlesBaseEmissionValues"}</code> |  |
| <Link id="m-container" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" container"}</code> |  |
| <Link id="m-entity" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity"}</code> |  |
| <Link id="m-materialcreator" /><code>{"private static "}<Link to="/game-api/types/alta-stats-effects/boilingparticlesmaterialcreator">{"BoilingParticlesMaterialCreator"}</Link>{" materialCreator"}</code> |  |
| <Link id="m-materialtemplates" /><code>{"private Dictionary<ParticleSystem, Material> materialTemplates"}</code> |  |
| <Link id="m-propertyblock" /><code>{"private MaterialPropertyBlock propertyBlock"}</code> |  |
| <Link id="m-stagesettings" /><code>{"private "}<Link to="/game-api/types/alta-crafting/cookingliquidvisual-boilingparticlesstagesetting">{"CookingLiquidVisual.BoilingParticlesStageSetting"}</Link>{"[] stageSettings"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clearparticles" /><code>{"void ClearParticles()"}</code> |  |
| <Link id="m-release" /><code>{"override void Release()"}</code> |  |
| <Link id="m-setupforcontainer" /><code>{"void SetupForContainer("}<Link to="/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" container, "}<Link to="/game-api/types/alta-crafting/cookingliquidvisual-boilingparticlesstagesetting">{"CookingLiquidVisual.BoilingParticlesStageSetting"}</Link>{"[] stageSettings)"}</code> |  |
| <Link id="m-setupforliquid" /><code>{"void SetupForLiquid("}<Link to="/game-api/types/alta-stats-effects/liquiddata">{"LiquidData"}</Link>{" liquid)"}</code> |  |
| <Link id="m-updateemissionbasedontemperature" /><code>{"void UpdateEmissionBasedOnTemperature(float temperature, float emissionMultiplier)"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-releaseondestroy" /><code>{"private void ReleaseOnDestroy("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> |  |
| <Link id="m-setupboilingparticles" /><code>{"private void SetupBoilingParticles()"}</code> |  |
| <Link id="m-updateparticlelifetimesbaseoncontentlevel" /><code>{"private void UpdateParticleLifetimesBaseOnContentLevel("}<Link to="/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" container, int oldLevel, int newLevel)"}</code> |  |

## Used in

Members of other types that take, return or hold a `BoilingParticles`:

[`CookingLiquidVisual.boilingParticles`](/game-api/types/alta-crafting/cookingliquidvisual#m-boilingparticles).
