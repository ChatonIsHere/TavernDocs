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
| <Link id="m-ctor" /><code>{"NightmareEffectController("}<Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" nightmareStatDefinition, AnimationCurve fogDensityOverValue, "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" nightmareEffectDefinition)"}</code> | Creates a `PlayerHealthVisualEffectsSettings.NightmareEffectController` from `nightmareStatDefinition`, `fogDensityOverValue` and `nightmareEffectDefinition`. |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activenightmareeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" activeNightMareEffect"}</code> | The spawned nightmare effect, or null. |
| <Link id="m-fogdensityovervalue" /><code>{"private AnimationCurve fogDensityOverValue"}</code> | Curve from stat value to fog density. |
| <Link id="m-nightmareeffectdefinition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" nightmareEffectDefinition"}</code> | Pooled effect spawned for the nightmare. |
| <Link id="m-nightmarestat" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" nightmareStat"}</code> | The local player's nightmare stat. |
| <Link id="m-nightmarestatdefinition" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" nightmareStatDefinition"}</code> | Which stat is the nightmare stat. |
| <Link id="m-updateeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateEffect"}</code> | Handle for the per frame `UpdateEffect` registration. |
| <Link id="m-valueoperator" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/valueoperatedparticlesystem">{"ValueOperatedParticleSystem"}</Link>{" valueOperator"}</code> | Particle system on the effect that is fed the stat value. |
| <Link id="m-wasnightmareactive" /><code>{"private bool wasNightmareActive"}</code> | Unused flag. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setupnightmare" /><code>{"void SetupNightmare("}<Link to="/mod/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" manager)"}</code> | Finds the nightmare stat in a stat manager and listens for it changing. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-updateeffect-2" /><code>{"private void UpdateEffect()"}</code> | Each frame, keeps the effect at the player's feet, or releases it once the stat drops to 0.11 or the player dies. |
| <Link id="m-updatefog" /><code>{"private void UpdateFog("}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat)"}</code> | Spawns the effect when the stat goes above 0.11 and sets or releases fog density from the stat's value. |

</details>

## Used in

Members of other types that take, return or hold a `NightmareEffectController`:

[`PlayerHealthVisualEffectsSettings.nightmareEffectController`](/mod/game-api/types/global-p/playerhealthvisualeffectssettings#m-nightmareeffectcontroller).
