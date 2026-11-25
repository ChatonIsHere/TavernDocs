---
title: "DurabilityGlobalSettings"
description: "class DurabilityGlobalSettings in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DurabilityGlobalSettings

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`GlobalSettings<DurabilityGlobalSettings>`](/game-api/types/assembly-other/globalsettings-t)
- **Derived types** [`DurabilityGlobalSettings`](/game-api/types/global-c-d/durabilityglobalsettings), [`DurabilityGlobalSettings.Create`](/game-api/types/global-c-d/durabilityglobalsettings-create)
- **Nested types** [`Create`](/game-api/types/global-c-d/durabilityglobalsettings-create)
- **Attributes** `GlobalSettings`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DurabilityGlobalSettings()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-breakitemhapticcurve" /><code>{"private AnimationCurve breakItemHapticCurve"}</code> |  |
| <Link id="m-defaultstatechangesound" /><code>{"private "}<Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" defaultStateChangeSound"}</code> |  |
| <Link id="m-effectivenesstodurabilitydamage" /><code>{"private AnimationCurve effectivenessToDurabilityDamage"}</code> |  |
| <Link id="m-popupcolorbydurability" /><code>{"private Gradient popupColorByDurability"}</code> |  |
| <Link id="m-popupdefinition" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" popUpDefinition"}</code> |  |
| <Link id="m-statechangeeffectdefinition" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" stateChangeEffectDefinition"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-breakitemhapticcurve-2" /><code>{"AnimationCurve BreakItemHapticCurve { get; }"}</code> |  |
| <Link id="m-defaultstatechangesound-2" /><code><Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" DefaultStateChangeSound { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-evaluateefectivenessdamage" /><code>{"float EvaluateEfectivenessDamage(float effectiveness)"}</code> |  |
| <Link id="m-geteffect" /><code><Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" GetEffect(Renderer renderer)"}</code> |  |
| <Link id="m-getpopup" /><code><Link to="/game-api/types/alta-utilities/textpopup">{"TextPopup"}</Link>{" GetPopup(Transform parent)"}</code> |  |
| <Link id="m-getpopupcolor" /><code>{"Color GetPopupColor(float durability)"}</code> |  |
