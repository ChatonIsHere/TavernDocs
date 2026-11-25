---
title: "PlayerEffectManager"
description: "class PlayerEffectManager in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerEffectManager

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`EffectApplication`](/game-api/types/global-p/playereffectmanager-effectapplication), [`EffectPointStatus`](/game-api/types/global-p/playereffectmanager-effectpointstatus), [`EffectPosition`](/game-api/types/global-p/playereffectmanager-effectposition), [`LightEffect`](/game-api/types/global-p/playereffectmanager-lighteffect), [`OverrideSettings`](/game-api/types/global-p/playereffectmanager-overridesettings), [`StatEffectApplication`](/game-api/types/global-p/playereffectmanager-stateffectapplication)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PlayerEffectManager()"}</code> |

## Fields

<details>
<summary>15 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-burneffect" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" burnEffect"}</code> |
| <Link id="m-burnminthreshold" /><code>{"private float burnMinThreshold"}</code> |
| <Link id="m-effectpositions" /><code>{"private "}<Link to="/game-api/types/global-p/playereffectmanager-effectposition">{"PlayerEffectManager.EffectPosition"}</Link>{"[] effectPositions"}</code> |
| <Link id="m-heatpointstatus" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{", "}<Link to="/game-api/types/global-p/playereffectmanager-effectpointstatus">{"PlayerEffectManager.EffectPointStatus"}</Link>{"> heatPointStatus"}</code> |
| <Link id="m-levels" /><code>{"private float[] levels"}</code> |
| <Link id="m-lighteffect" /><code>{"private "}<Link to="/game-api/types/global-p/playereffectmanager-lighteffect">{"PlayerEffectManager.LightEffect"}</Link>{" lightEffect"}</code> |
| <Link id="m-lighteffectdefinition" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" lightEffectDefinition"}</code> |
| <Link id="m-lighteffectparent" /><code>{"private Transform lightEffectParent"}</code> |
| <Link id="m-lightintensitybyburningpoints" /><code>{"private AnimationCurve lightIntensityByBurningPoints"}</code> |
| <Link id="m-smokeeffect" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" smokeEffect"}</code> |
| <Link id="m-smokeminthreshold" /><code>{"private float smokeMinThreshold"}</code> |
| <Link id="m-stateffectsdefinition" /><code>{"private "}<Link to="/game-api/types/alta-player/stateffectsdefinition">{"StatEffectsDefinition"}</Link>{" statEffectsDefinition"}</code> |
| <Link id="m-statmanager" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" statManager"}</code> |
| <Link id="m-temperaturetoscalemultiplier" /><code>{"private AnimationCurve temperatureToScaleMultiplier"}</code> |
| <Link id="m-thisplayer" /><code>{"private "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" thisPlayer"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-stateffects" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-player/stateffectholder">{"StatEffectHolder"}</Link>{"> StatEffects { get; }"}</code> |

## Methods

<details>
<summary>7 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-activatestateffect" /><code>{"private void ActivateStatEffect("}<Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" definition, bool isBuff, bool isActive)"}</code> |
| <Link id="m-runstateffectcommand" /><code>{"private void RunStatEffectCommand("}<Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" definition, bool isBuff, Action<"}<Link to="/game-api/types/global-p/playereffectmanager-effectapplication">{"PlayerEffectManager.EffectApplication"}</Link>{"> command)"}</code> |
| <Link id="m-setlocalplayer" /><code>{"private void SetLocalPlayer()"}</code> |
| <Link id="m-setuplevels" /><code>{"private bool SetupLevels()"}</code> |
| <Link id="m-start" /><code>{"private void Start()"}</code> |
| <Link id="m-updatelighteffects" /><code>{"private void UpdateLightEffects()"}</code> |
| <Link id="m-updatestateffect" /><code>{"private void UpdateStatEffect("}<Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" definition, bool isBuff, float size)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `PlayerEffectManager`:

[`PlayerEffectManager.EffectPointStatus.EffectPointStatus`](/game-api/types/global-p/playereffectmanager-effectpointstatus#m-ctor).
