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

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`GlobalSettings<MiningSettings>`](/game-api/types/assembly-other/globalsettings-t)
- **Derived types** [`MiningSettings`](/game-api/types/alta-items/miningsettings), [`MiningSettings.Create`](/game-api/types/alta-items/miningsettings-create)
- **Nested types** [`Create`](/game-api/types/alta-items/miningsettings-create)
- **Attributes** `GlobalSettings`
- **Documented in** [Impacts and hit detection](/game-api/items/impacts)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"MiningSettings()"}</code> |

## Fields

<details>
<summary>14 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-isonehitdestroy" /><code>{"private bool isOneHitDestroy"}</code> |
| <Link id="m-maxrespawntime" /><code>{"private float maxRespawnTime"}</code> |
| <Link id="m-maxswingdistance" /><code>{"private float maxSwingDistance"}</code> |
| <Link id="m-minimpactmultiplier" /><code>{"private float minImpactMultiplier"}</code> |
| <Link id="m-minrespawntime" /><code>{"private float minRespawnTime"}</code> |
| <Link id="m-minstrikedamage" /><code>{"private int minStrikeDamage"}</code> |
| <Link id="m-minswingdistance" /><code>{"private float minSwingDistance"}</code> |
| <Link id="m-resourcedrophapticfeedback" /><code>{"private AnimationCurve resourceDropHapticFeedback"}</code> |
| <Link id="m-resourcedropspeedmultiplier" /><code>{"private float resourceDropSpeedMultiplier"}</code> |
| <Link id="m-strikecooldowntime" /><code>{"private float strikeCoolDownTime"}</code> |
| <Link id="m-strikestrengthrtpc" /><code>{"private RTPC strikeStrengthRTPC"}</code> |
| <Link id="m-successfulhapticfeedback" /><code>{"private AnimationCurve successfulHapticFeedback"}</code> |
| <Link id="m-tooldamageperstrike" /><code>{"private float toolDamagePerStrike"}</code> |
| <Link id="m-unsuccessfulhapticfeedback" /><code>{"private AnimationCurve unsuccessfulHapticFeedback"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isonehitdestroy-2" /><code>{"bool IsOneHitDestroy { get; }"}</code> | Not read anywhere in this build. |
| <Link id="m-maxrespawntime-2" /><code>{"float MaxRespawnTime { get; }"}</code> | Not read anywhere in this build. |
| <Link id="m-maxswingdistance-2" /><code>{"float MaxSwingDistance { get; }"}</code> | Not read anywhere in this build. |
| <Link id="m-minimpactmultiplier-2" /><code>{"float MinImpactMultiplier { get; }"}</code> | Not read anywhere in this build. |
| <Link id="m-minrespawntime-2" /><code>{"float MinRespawnTime { get; }"}</code> | Not read anywhere in this build. |
| <Link id="m-minstrikedamage-2" /><code>{"int MinStrikeDamage { get; }"}</code> | Not read anywhere in this build. |
| <Link id="m-minswingdistance-2" /><code>{"float MinSwingDistance { get; }"}</code> | Not read anywhere in this build. |
| <Link id="m-resourcedrophapticfeedback-2" /><code>{"AnimationCurve ResourceDropHapticFeedback { get; }"}</code> | Controller vibration when a rock drops a resource. |
| <Link id="m-resourcedropspeedmultiplier-2" /><code>{"float ResourceDropSpeedMultiplier { get; set; }"}</code> | Speed a resource is thrown out of a rock at. |
| <Link id="m-strikecooldowntime-2" /><code>{"float StrikeCoolDownTime { get; }"}</code> | Not read anywhere in this build. |
| <Link id="m-strikestrengthrtpc-2" /><code>{"RTPC StrikeStrengthRTPC { get; }"}</code> | Wwise value set from the hit strength when an impact tool plays its sound. |
| <Link id="m-successfulhapticfeedback-2" /><code>{"AnimationCurve SuccessfulHapticFeedback { get; }"}</code> | Controller vibration for a good tool hit. |
| <Link id="m-tooldamageperstrike-2" /><code>{"float ToolDamagePerStrike { get; }"}</code> | Not read anywhere in this build. |
| <Link id="m-unsuccessfulhapticfeedback-2" /><code>{"AnimationCurve UnsuccessfulHapticFeedback { get; }"}</code> | Controller vibration for a bad tool hit. |
