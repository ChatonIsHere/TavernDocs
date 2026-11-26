---
title: "PlayerHealthVisualEffectsSettings.NightmareEffectController"
description: "Client: drives the nightmare status effect for the local player, a particle effect at their feet and extra fog, from the nightmare stat."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerHealthVisualEffectsSettings.NightmareEffectController

A **private class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Client: drives the nightmare status effect for the local player, a particle effect at their feet and extra fog, from the nightmare stat.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Nested in** [`PlayerHealthVisualEffectsSettings`](/mod/game-api/types/global-p/playerhealthvisualeffectssettings)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NightmareEffectController("}<Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" nightmareStatDefinition, AnimationCurve fogDensityOverValue, "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" nightmareEffectDefinition)"}</code> | <span className="api-desc">Creates a `PlayerHealthVisualEffectsSettings.NightmareEffectController` from `nightmareStatDefinition`, `fogDensityOverValue` and `nightmareEffectDefinition`.</span> |

## Fields

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activenightmareeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" activeNightMareEffect"}</code> | <span className="api-desc">The spawned nightmare effect, or null.</span> |
| <Link id="m-fogdensityovervalue" /><code>{"private AnimationCurve fogDensityOverValue"}</code> | <span className="api-desc">Curve from stat value to fog density.</span> |
| <Link id="m-nightmareeffectdefinition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" nightmareEffectDefinition"}</code> | <span className="api-desc">Pooled effect spawned for the nightmare.</span> |
| <Link id="m-nightmarestat" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" nightmareStat"}</code> | <span className="api-desc">The local player's nightmare stat.</span> |
| <Link id="m-nightmarestatdefinition" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" nightmareStatDefinition"}</code> | <span className="api-desc">Which stat is the nightmare stat.</span> |
| <Link id="m-updateeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateEffect"}</code> | <span className="api-desc">Handle for the per frame `UpdateEffect` registration.</span> |
| <Link id="m-valueoperator" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/valueoperatedparticlesystem">{"ValueOperatedParticleSystem"}</Link>{" valueOperator"}</code> | <span className="api-desc">Particle system on the effect that is fed the stat value.</span> |
| <Link id="m-wasnightmareactive" /><code>{"private bool wasNightmareActive"}</code> | <span className="api-desc">Unused flag.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setupnightmare" /><code>{"void SetupNightmare("}<Link to="/mod/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" manager)"}</code> | <span className="api-desc">Finds the nightmare stat in a stat manager and listens for it changing.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-updateeffect-2" /><code>{"private void UpdateEffect()"}</code> | <span className="api-desc">Each frame, keeps the effect at the player's feet, or releases it once the stat drops to 0.11 or the player dies.</span> |
| <Link id="m-updatefog" /><code>{"private void UpdateFog("}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat)"}</code> | <span className="api-desc">Spawns the effect when the stat goes above 0.11 and sets or releases fog density from the stat's value.</span> |

</details>

## Used in

Members of other types that take, return or hold a `NightmareEffectController`:

<div className="api-used-in">

[`PlayerHealthVisualEffectsSettings.nightmareEffectController`](/mod/game-api/types/global-p/playerhealthvisualeffectssettings#m-nightmareeffectcontroller).

</div>
