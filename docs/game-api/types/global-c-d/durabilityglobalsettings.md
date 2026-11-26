---
title: "DurabilityGlobalSettings"
description: "Global settings for item durability feedback: break effects, damage popups and how hit effectiveness turns into durability loss."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DurabilityGlobalSettings

A **class** in `Root.Township`, no namespace.

Global settings for item durability feedback: break effects, damage popups and how hit effectiveness turns into durability loss.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`GlobalSettings<DurabilityGlobalSettings>`](/game-api/types/assembly-other/globalsettings-t)
- **Derived types** [`DurabilityGlobalSettings`](/game-api/types/global-c-d/durabilityglobalsettings), [`DurabilityGlobalSettings.Create`](/game-api/types/global-c-d/durabilityglobalsettings-create)
- **Nested types** [`Create`](/game-api/types/global-c-d/durabilityglobalsettings-create)
- **Attributes** `GlobalSettings`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"DurabilityGlobalSettings()"}</code> |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-breakitemhapticcurve" /><code>{"private AnimationCurve breakItemHapticCurve"}</code> | Haptic curve played when an item breaks. |
| <Link id="m-defaultstatechangesound" /><code>{"private "}<Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" defaultStateChangeSound"}</code> | Sound played on a durability state change when none is set elsewhere. |
| <Link id="m-effectivenesstodurabilitydamage" /><code>{"private AnimationCurve effectivenessToDurabilityDamage"}</code> | Curve from hit effectiveness to durability damage, used by `EvaluateEfectivenessDamage`. |
| <Link id="m-popupcolorbydurability" /><code>{"private Gradient popupColorByDurability"}</code> | Gradient that colours the popup by durability, used by `GetPopupColor`. |
| <Link id="m-popupdefinition" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" popUpDefinition"}</code> | Pooled text popup shown for durability, used by `GetPopup`. |
| <Link id="m-statechangeeffectdefinition" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" stateChangeEffectDefinition"}</code> | Pooled `DurabilityStateChangeEffect` spawned by `GetEffect`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-breakitemhapticcurve-2" /><code>{"AnimationCurve BreakItemHapticCurve { get; }"}</code> | Haptic curve played on the holding hand when an item breaks. |
| <Link id="m-defaultstatechangesound-2" /><code><Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" DefaultStateChangeSound { get; }"}</code> | Sound played when an item's durability state changes. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-evaluateefectivenessdamage" /><code>{"float EvaluateEfectivenessDamage(float effectiveness)"}</code> | Durability loss for a hit's effectiveness. `ImpactTool` multiplies it by the hit's durability multiplier. |
| <Link id="m-geteffect" /><code><Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" GetEffect(Renderer renderer)"}</code> | Spawns the state change effect shaped to a renderer's mesh. |
| <Link id="m-getpopup" /><code><Link to="/game-api/types/alta-utilities/textpopup">{"TextPopup"}</Link>{" GetPopup(Transform parent)"}</code> | Gets a pooled text popup under a parent. |
| <Link id="m-getpopupcolor" /><code>{"Color GetPopupColor(float durability)"}</code> | Popup colour for a durability value. |
