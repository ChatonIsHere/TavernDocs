---
title: "MiningSettings"
description: "Global settings for mining rocks and ore."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MiningSettings

A **class** in `Root.Township`, `Alta.Impact`.

Global settings for mining rocks and ore. In this build only the haptics, strike sound RTPC and drop speed are read.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`GlobalSettings<MiningSettings>`](/mod/game-api/types/assembly-other/globalsettings-t)
- **Derived types** [`MiningSettings`](/mod/game-api/types/alta-items/miningsettings), [`MiningSettings.Create`](/mod/game-api/types/alta-items/miningsettings-create)
- **Nested types** [`Create`](/mod/game-api/types/alta-items/miningsettings-create)
- **Attributes** `GlobalSettings`
- **Documented in** [Impacts and hit detection](/mod/game-api/items/impacts)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MiningSettings()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>14 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isonehitdestroy" /><code>{"private bool isOneHitDestroy"}</code> | <span className="api-desc">Backing field for `IsOneHitDestroy`. Not read anywhere else in this build.</span> |
| <Link id="m-maxrespawntime" /><code>{"private float maxRespawnTime"}</code> | <span className="api-desc">Backing field for `MaxRespawnTime`. Not read anywhere else in this build.</span> |
| <Link id="m-maxswingdistance" /><code>{"private float maxSwingDistance"}</code> | <span className="api-desc">Backing field for `MaxSwingDistance`. Not read anywhere else in this build.</span> |
| <Link id="m-minimpactmultiplier" /><code>{"private float minImpactMultiplier"}</code> | <span className="api-desc">Backing field for `MinImpactMultiplier`, a 0 to 1 value. Not read anywhere else in this build.</span> |
| <Link id="m-minrespawntime" /><code>{"private float minRespawnTime"}</code> | <span className="api-desc">Backing field for `MinRespawnTime`. Not read anywhere else in this build.</span> |
| <Link id="m-minstrikedamage" /><code>{"private int minStrikeDamage"}</code> | <span className="api-desc">Backing field for `MinStrikeDamage`. Not read anywhere else in this build.</span> |
| <Link id="m-minswingdistance" /><code>{"private float minSwingDistance"}</code> | <span className="api-desc">Backing field for `MinSwingDistance`. Not read anywhere else in this build.</span> |
| <Link id="m-resourcedrophapticfeedback" /><code>{"private AnimationCurve resourceDropHapticFeedback"}</code> | <span className="api-desc">Backing field for `ResourceDropHapticFeedback`, the haptic curve `Rock` plays when it drops a resource.</span> |
| <Link id="m-resourcedropspeedmultiplier" /><code>{"private float resourceDropSpeedMultiplier"}</code> | <span className="api-desc">Backing field for `ResourceDropSpeedMultiplier`, which `Rock` multiplies a dropped resource's launch direction by.</span> |
| <Link id="m-strikecooldowntime" /><code>{"private float strikeCoolDownTime"}</code> | <span className="api-desc">Backing field for `StrikeCoolDownTime`. Not read anywhere else in this build.</span> |
| <Link id="m-strikestrengthrtpc" /><code>{"private RTPC strikeStrengthRTPC"}</code> | <span className="api-desc">Backing field for `StrikeStrengthRTPC`, the audio parameter `ImpactTool` sets from strike strength on hit sounds.</span> |
| <Link id="m-successfulhapticfeedback" /><code>{"private AnimationCurve successfulHapticFeedback"}</code> | <span className="api-desc">Backing field for `SuccessfulHapticFeedback`, the haptic curve `ImpactTool` plays on a damaging hit.</span> |
| <Link id="m-tooldamageperstrike" /><code>{"private float toolDamagePerStrike"}</code> | <span className="api-desc">Backing field for `ToolDamagePerStrike`. Not read anywhere else in this build.</span> |
| <Link id="m-unsuccessfulhapticfeedback" /><code>{"private AnimationCurve unsuccessfulHapticFeedback"}</code> | <span className="api-desc">Backing field for `UnsuccessfulHapticFeedback`, the haptic curve `ImpactTool` plays on a hit that does nothing.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isonehitdestroy-2" /><code>{"bool IsOneHitDestroy { get; }"}</code> | <span className="api-desc">Not read anywhere in this build.</span> |
| <Link id="m-maxrespawntime-2" /><code>{"float MaxRespawnTime { get; }"}</code> | <span className="api-desc">Not read anywhere in this build.</span> |
| <Link id="m-maxswingdistance-2" /><code>{"float MaxSwingDistance { get; }"}</code> | <span className="api-desc">Not read anywhere in this build.</span> |
| <Link id="m-minimpactmultiplier-2" /><code>{"float MinImpactMultiplier { get; }"}</code> | <span className="api-desc">Not read anywhere in this build.</span> |
| <Link id="m-minrespawntime-2" /><code>{"float MinRespawnTime { get; }"}</code> | <span className="api-desc">Not read anywhere in this build.</span> |
| <Link id="m-minstrikedamage-2" /><code>{"int MinStrikeDamage { get; }"}</code> | <span className="api-desc">Not read anywhere in this build.</span> |
| <Link id="m-minswingdistance-2" /><code>{"float MinSwingDistance { get; }"}</code> | <span className="api-desc">Not read anywhere in this build.</span> |
| <Link id="m-resourcedrophapticfeedback-2" /><code>{"AnimationCurve ResourceDropHapticFeedback { get; }"}</code> | <span className="api-desc">Controller vibration when a rock drops a resource.</span> |
| <Link id="m-resourcedropspeedmultiplier-2" /><code>{"float ResourceDropSpeedMultiplier { get; set; }"}</code> | <span className="api-desc">Speed a resource is thrown out of a rock at.</span> |
| <Link id="m-strikecooldowntime-2" /><code>{"float StrikeCoolDownTime { get; }"}</code> | <span className="api-desc">Not read anywhere in this build.</span> |
| <Link id="m-strikestrengthrtpc-2" /><code>{"RTPC StrikeStrengthRTPC { get; }"}</code> | <span className="api-desc">Wwise value set from the hit strength when an impact tool plays its sound.</span> |
| <Link id="m-successfulhapticfeedback-2" /><code>{"AnimationCurve SuccessfulHapticFeedback { get; }"}</code> | <span className="api-desc">Controller vibration for a good tool hit.</span> |
| <Link id="m-tooldamageperstrike-2" /><code>{"float ToolDamagePerStrike { get; }"}</code> | <span className="api-desc">Not read anywhere in this build.</span> |
| <Link id="m-unsuccessfulhapticfeedback-2" /><code>{"AnimationCurve UnsuccessfulHapticFeedback { get; }"}</code> | <span className="api-desc">Controller vibration for a bad tool hit.</span> |
