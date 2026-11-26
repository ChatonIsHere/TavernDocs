---
title: "DurabilityGlobalSettings"
description: "Global settings for item durability feedback: break effects, damage popups and how hit effectiveness turns into durability loss."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DurabilityGlobalSettings

A **class** in `Root.Township`, the global namespace.

Global settings for item durability feedback: break effects, damage popups and how hit effectiveness turns into durability loss.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`GlobalSettings<DurabilityGlobalSettings>`](/mod/game-api/types/assembly-other/globalsettings-t)
- **Derived types** [`DurabilityGlobalSettings`](/mod/game-api/types/global-c-d/durabilityglobalsettings), [`DurabilityGlobalSettings.Create`](/mod/game-api/types/global-c-d/durabilityglobalsettings-create)
- **Nested types** [`Create`](/mod/game-api/types/global-c-d/durabilityglobalsettings-create)
- **Attributes** `GlobalSettings`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DurabilityGlobalSettings()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-breakitemhapticcurve" /><code>{"private AnimationCurve breakItemHapticCurve"}</code> | <span className="api-desc">Haptic curve played when an item breaks.</span> |
| <Link id="m-defaultstatechangesound" /><code>{"private "}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" defaultStateChangeSound"}</code> | <span className="api-desc">Sound played on a durability state change when none is set elsewhere.</span> |
| <Link id="m-effectivenesstodurabilitydamage" /><code>{"private AnimationCurve effectivenessToDurabilityDamage"}</code> | <span className="api-desc">Curve from hit effectiveness to durability damage, used by `EvaluateEfectivenessDamage`.</span> |
| <Link id="m-popupcolorbydurability" /><code>{"private Gradient popupColorByDurability"}</code> | <span className="api-desc">Gradient that colours the popup by durability, used by `GetPopupColor`.</span> |
| <Link id="m-popupdefinition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" popUpDefinition"}</code> | <span className="api-desc">Pooled text popup shown for durability, used by `GetPopup`.</span> |
| <Link id="m-statechangeeffectdefinition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" stateChangeEffectDefinition"}</code> | <span className="api-desc">Pooled `DurabilityStateChangeEffect` spawned by `GetEffect`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-breakitemhapticcurve-2" /><code>{"AnimationCurve BreakItemHapticCurve { get; }"}</code> | <span className="api-desc">Haptic curve played on the holding hand when an item breaks.</span> |
| <Link id="m-defaultstatechangesound-2" /><code><Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" DefaultStateChangeSound { get; }"}</code> | <span className="api-desc">Sound played when an item's durability state changes.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-evaluateefectivenessdamage" /><code>{"float EvaluateEfectivenessDamage(float effectiveness)"}</code> | <span className="api-desc">Durability loss for a hit's effectiveness. `ImpactTool` multiplies it by the hit's durability multiplier.</span> |
| <Link id="m-geteffect" /><code><Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" GetEffect(Renderer renderer)"}</code> | <span className="api-desc">Spawns the state change effect shaped to a renderer's mesh.</span> |
| <Link id="m-getpopup" /><code><Link to="/mod/game-api/types/alta-utilities/textpopup">{"TextPopup"}</Link>{" GetPopup(Transform parent)"}</code> | <span className="api-desc">Gets a pooled text popup under a parent.</span> |
| <Link id="m-getpopupcolor" /><code>{"Color GetPopupColor(float durability)"}</code> | <span className="api-desc">Popup colour for a durability value.</span> |
