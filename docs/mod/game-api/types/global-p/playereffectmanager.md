---
title: "PlayerEffectManager"
description: "Client: shows smoke, burn, light and stat buff or debuff effects on a player's body points from their heat points and stats."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerEffectManager

A **class** in `Root.Township`, the global namespace.

Client: shows smoke, burn, light and stat buff or debuff effects on a player's body points from their heat points and stats. It destroys itself on headless servers.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`EffectApplication`](/mod/game-api/types/global-p/playereffectmanager-effectapplication), [`EffectPointStatus`](/mod/game-api/types/global-p/playereffectmanager-effectpointstatus), [`EffectPosition`](/mod/game-api/types/global-p/playereffectmanager-effectposition), [`LightEffect`](/mod/game-api/types/global-p/playereffectmanager-lighteffect), [`OverrideSettings`](/mod/game-api/types/global-p/playereffectmanager-overridesettings), [`StatEffectApplication`](/mod/game-api/types/global-p/playereffectmanager-stateffectapplication)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerEffectManager()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>15 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-burneffect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" burnEffect"}</code> | <span className="api-desc">Pooled effect shown when a body point is hot enough to burn.</span> |
| <Link id="m-burnminthreshold" /><code>{"private float burnMinThreshold"}</code> | <span className="api-desc">Temperature at which a body point starts burning.</span> |
| <Link id="m-effectpositions" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playereffectmanager-effectposition">{"PlayerEffectManager.EffectPosition"}</Link>{"[] effectPositions"}</code> | <span className="api-desc">The body points that can show effects, each tied to a heat point.</span> |
| <Link id="m-heatpointstatus" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{", "}<Link to="/mod/game-api/types/global-p/playereffectmanager-effectpointstatus">{"PlayerEffectManager.EffectPointStatus"}</Link>{"> heatPointStatus"}</code> | <span className="api-desc">Effect state for each heat point.</span> |
| <Link id="m-levels" /><code>{"private float[] levels"}</code> | <span className="api-desc">The smoke and burn temperature thresholds, in that order.</span> |
| <Link id="m-lighteffect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playereffectmanager-lighteffect">{"PlayerEffectManager.LightEffect"}</Link>{" lightEffect"}</code> | <span className="api-desc">The glow light shown while any body point burns.</span> |
| <Link id="m-lighteffectdefinition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" lightEffectDefinition"}</code> | <span className="api-desc">Pooled light used for the burning glow.</span> |
| <Link id="m-lighteffectparent" /><code>{"private Transform lightEffectParent"}</code> | <span className="api-desc">Transform the glow light is spawned under.</span> |
| <Link id="m-lightintensitybyburningpoints" /><code>{"private AnimationCurve lightIntensityByBurningPoints"}</code> | <span className="api-desc">Curve from the number of burning body points to light intensity.</span> |
| <Link id="m-smokeeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" smokeEffect"}</code> | <span className="api-desc">Pooled effect shown when a body point is hot enough to smoke.</span> |
| <Link id="m-smokeminthreshold" /><code>{"private float smokeMinThreshold"}</code> | <span className="api-desc">Temperature at which a body point starts smoking.</span> |
| <Link id="m-stateffectsdefinition" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/stateffectsdefinition">{"StatEffectsDefinition"}</Link>{" statEffectsDefinition"}</code> | <span className="api-desc">Asset listing the stats that have buff and debuff effects.</span> |
| <Link id="m-statmanager" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" statManager"}</code> | <span className="api-desc">The player's stats, watched for buffs and debuffs.</span> |
| <Link id="m-temperaturetoscalemultiplier" /><code>{"private AnimationCurve temperatureToScaleMultiplier"}</code> | <span className="api-desc">Curve from temperature to burn effect size.</span> |
| <Link id="m-thisplayer" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" thisPlayer"}</code> | <span className="api-desc">The player this manager belongs to.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-stateffects" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/alta-player/stateffectholder">{"StatEffectHolder"}</Link>{"> StatEffects { get; }"}</code> | <span className="api-desc">The stat effects listed in `statEffectsDefinition`.</span> |

## Methods

<details className="api-private">
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activatestateffect" /><code>{"private void ActivateStatEffect("}<Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" definition, bool isBuff, bool isActive)"}</code> | <span className="api-desc">Turns a stat's buff or debuff effect on or off at every body point that shows stat effects.</span> |
| <Link id="m-runstateffectcommand" /><code>{"private void RunStatEffectCommand("}<Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" definition, bool isBuff, Action<"}<Link to="/mod/game-api/types/global-p/playereffectmanager-effectapplication">{"PlayerEffectManager.EffectApplication"}</Link>{"> command)"}</code> | <span className="api-desc">Runs an action on the buff or debuff effect for a stat at every body point that shows stat effects.</span> |
| <Link id="m-setlocalplayer" /><code>{"private void SetLocalPlayer()"}</code> | <span className="api-desc">Sets up each body point and the stat effect watchers once the player is known to be local or remote.</span> |
| <Link id="m-setuplevels" /><code>{"private bool SetupLevels()"}</code> | <span className="api-desc">Inspector helper that keeps `levels` equal to the smoke and burn thresholds.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Destroys the component on headless servers, otherwise sets up now or once linked to a network player.</span> |
| <Link id="m-updatelighteffects" /><code>{"private void UpdateLightEffects()"}</code> | <span className="api-desc">Spawns or updates the glow light based on how many body points are burning, and releases it when none are.</span> |
| <Link id="m-updatestateffect" /><code>{"private void UpdateStatEffect("}<Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" definition, bool isBuff, float size)"}</code> | <span className="api-desc">Resizes a stat's buff or debuff effect at every body point that shows stat effects.</span> |

</details>

## Used in

Members of other types that take, return or hold a `PlayerEffectManager`:

<div className="api-used-in">

[`PlayerEffectManager.EffectPointStatus.EffectPointStatus`](/mod/game-api/types/global-p/playereffectmanager-effectpointstatus#m-ctor).

</div>
