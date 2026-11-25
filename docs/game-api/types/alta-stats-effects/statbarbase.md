---
title: "StatBarBase"
description: "class StatBarBase in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StatBarBase

A **class** in `Root.Township`, `Alta.StatSystem`.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`DiscreteStatBar`](/game-api/types/alta-stats-effects/discretestatbar), [`StatBarSimple`](/game-api/types/alta-stats-effects/statbarsimple)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StatBarBase()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-istakingphoto" /><code>{"protected bool isTakingPhoto"}</code> |  |
| <Link id="m-trackedstat" /><code>{"protected "}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" trackedStat"}</code> |  |
| <Link id="m-trackedstatdefinition" /><code>{"protected "}<Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" trackedStatDefinition"}</code> |  |
| <Link id="m-visibilitygroup" /><code>{"protected "}<Link to="/game-api/types/alta-stats-effects/statbarvisibilitygroup">{"StatBarVisibilityGroup"}</Link>{" visibilityGroup"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-stat" /><code><Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" "}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-updatedvisibility" /><code>{"event Action<bool> UpdatedVisibility"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disable" /><code>{"void Disable()"}</code> |  |
| <Link id="m-initialize" /><code>{"virtual void Initialize()"}</code> |  |
| <Link id="m-ping" /><code>{"virtual void Ping(float duration)"}</code> |  |
| <Link id="m-setalpha" /><code>{"virtual void SetAlpha(float alphaMultiplier)"}</code> |  |
| <Link id="m-delayinitialize" /><code>{"private void DelayInitialize()"}</code> |  |
| <Link id="m-onbecamevisiblechanged" /><code>{"protected void OnBecameVisibleChanged(bool isVisible)"}</code> |  |
| <Link id="m-ondestroy" /><code>{"protected virtual void OnDestroy()"}</code> |  |
| <Link id="m-onstatchanged" /><code>{"protected virtual void OnStatChanged("}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat)"}</code> |  |
| <Link id="m-ontakingphoto" /><code>{"private void OnTakingPhoto("}<Link to="/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" handCamera, "}<Link to="/game-api/types/alta-customization/handcameraevent">{"HandCameraEvent"}</Link>{" cameraEvent)"}</code> |  |
| <Link id="m-ontookphoto" /><code>{"private void OnTookPhoto("}<Link to="/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" handCamera, "}<Link to="/game-api/types/alta-customization/handcameraevent">{"HandCameraEvent"}</Link>{" cameraEvent)"}</code> |  |
| <Link id="m-setrenderersenabled" /><code>{"protected virtual void SetRenderersEnabled(bool isEnabled)"}</code> |  |

## Used in

Members of other types that take, return or hold a `StatBarBase`:

[`StaminaBarVisibility.leftStamina`](/game-api/types/alta-stats-effects/staminabarvisibility#m-leftstamina), [`StaminaBarVisibility.rightStamina`](/game-api/types/alta-stats-effects/staminabarvisibility#m-rightstamina), [`StaminaBarVisibility.HandStaminaView.HandStaminaView`](/game-api/types/alta-stats-effects/staminabarvisibility-handstaminaview#m-ctor), [`StaminaBarVisibility.HandStaminaView.staminaStatBars`](/game-api/types/alta-stats-effects/staminabarvisibility-handstaminaview#m-staminastatbars), [`StatBarVisibilityGroup.bars`](/game-api/types/alta-stats-effects/statbarvisibilitygroup#m-bars).
