---
title: "PlayerHealthVisualEffectsSettings.NightmareEffectController"
description: "class PlayerHealthVisualEffectsSettings.NightmareEffectController in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerHealthVisualEffectsSettings.NightmareEffectController

A **private class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Nested in** [`PlayerHealthVisualEffectsSettings`](/game-api/types/global-p/playerhealthvisualeffectssettings)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NightmareEffectController("}<Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" nightmareStatDefinition, AnimationCurve fogDensityOverValue, "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" nightmareEffectDefinition)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-activenightmareeffect" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" activeNightMareEffect"}</code> |  |
| <Link id="m-fogdensityovervalue" /><code>{"private AnimationCurve fogDensityOverValue"}</code> |  |
| <Link id="m-nightmareeffectdefinition" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" nightmareEffectDefinition"}</code> |  |
| <Link id="m-nightmarestat" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" nightmareStat"}</code> |  |
| <Link id="m-nightmarestatdefinition" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" nightmareStatDefinition"}</code> |  |
| <Link id="m-updateeffect" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateEffect"}</code> |  |
| <Link id="m-valueoperator" /><code>{"private "}<Link to="/game-api/types/global-t-x/valueoperatedparticlesystem">{"ValueOperatedParticleSystem"}</Link>{" valueOperator"}</code> |  |
| <Link id="m-wasnightmareactive" /><code>{"private bool wasNightmareActive"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setupnightmare" /><code>{"void SetupNightmare("}<Link to="/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" manager)"}</code> |  |
| <Link id="m-updateeffect-2" /><code>{"private void UpdateEffect()"}</code> |  |
| <Link id="m-updatefog" /><code>{"private void UpdateFog("}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat)"}</code> |  |

## Used in

Members of other types that take, return or hold a `NightmareEffectController`:

[`PlayerHealthVisualEffectsSettings.nightmareEffectController`](/game-api/types/global-p/playerhealthvisualeffectssettings#m-nightmareeffectcontroller).
