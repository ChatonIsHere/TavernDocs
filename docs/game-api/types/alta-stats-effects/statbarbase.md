---
title: "StatBarBase"
description: "Base for a bar that shows one stat (such as on the player's wrist)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StatBarBase

A **class** in `Root.Township`, `Alta.StatSystem`.

Base for a bar that shows one stat (such as on the player's wrist). Hides itself while the hand camera takes a photo. Client side.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`DiscreteStatBar`](/game-api/types/alta-stats-effects/discretestatbar), [`StatBarSimple`](/game-api/types/alta-stats-effects/statbarsimple)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"StatBarBase()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-istakingphoto" /><code>{"protected bool isTakingPhoto"}</code> | True while the hand camera is rendering a photo. |
| <Link id="m-trackedstat" /><code>{"protected "}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" trackedStat"}</code> | The stat instance being shown. |
| <Link id="m-trackedstatdefinition" /><code>{"protected "}<Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" trackedStatDefinition"}</code> | The stat to look up and show. |
| <Link id="m-visibilitygroup" /><code>{"protected "}<Link to="/game-api/types/alta-stats-effects/statbarvisibilitygroup">{"StatBarVisibilityGroup"}</Link>{" visibilityGroup"}</code> | The group that holds the stat manager and controls visibility. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-stat" /><code><Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" "}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" { get; }"}</code> | The stat being shown. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-updatedvisibility" /><code>{"event Action<bool> UpdatedVisibility"}</code> | Raised when the bar becomes visible or hidden. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disable" /><code>{"void Disable()"}</code> | Stops listening to the stat and the camera. |
| <Link id="m-initialize" /><code>{"virtual void Initialize()"}</code> | Finds the tracked stat in the visibility group's stat manager and listens for changes. Hides the bar if the stat is missing. |
| <Link id="m-ping" /><code>{"virtual void Ping(float duration)"}</code> | Asks the bar to draw attention for a duration. Empty in the base class. |
| <Link id="m-setalpha" /><code>{"virtual void SetAlpha(float alphaMultiplier)"}</code> | Fades the bar. Empty in the base class. |
| <Link id="m-onbecamevisiblechanged" /><code>{"protected void OnBecameVisibleChanged(bool isVisible)"}</code> | Raises `UpdatedVisibility` for subclasses. |
| <Link id="m-ondestroy" /><code>{"protected virtual void OnDestroy()"}</code> | Stops listening to the hand camera. |
| <Link id="m-onstatchanged" /><code>{"protected virtual void OnStatChanged("}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat)"}</code> | Called when the stat changes, and once after initialising. Empty in the base class. |
| <Link id="m-setrenderersenabled" /><code>{"protected virtual void SetRenderersEnabled(bool isEnabled)"}</code> | Shows or hides the bar's renderers. Empty in the base class. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-delayinitialize" /><code>{"private void DelayInitialize()"}</code> | Runs one frame later to show the tracked stat's starting value. |
| <Link id="m-ontakingphoto" /><code>{"private void OnTakingPhoto("}<Link to="/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" handCamera, "}<Link to="/game-api/types/alta-customization/handcameraevent">{"HandCameraEvent"}</Link>{" cameraEvent)"}</code> | Hides the bar while a hand camera photo is rendered. |
| <Link id="m-ontookphoto" /><code>{"private void OnTookPhoto("}<Link to="/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" handCamera, "}<Link to="/game-api/types/alta-customization/handcameraevent">{"HandCameraEvent"}</Link>{" cameraEvent)"}</code> | Shows the bar again after the photo, if its visibility group is on. |

</details>

## Used in

Members of other types that take, return or hold a `StatBarBase`:

[`StaminaBarVisibility.leftStamina`](/game-api/types/alta-stats-effects/staminabarvisibility#m-leftstamina), [`StaminaBarVisibility.rightStamina`](/game-api/types/alta-stats-effects/staminabarvisibility#m-rightstamina), [`StaminaBarVisibility.HandStaminaView.HandStaminaView`](/game-api/types/alta-stats-effects/staminabarvisibility-handstaminaview#m-ctor), [`StaminaBarVisibility.HandStaminaView.staminaStatBars`](/game-api/types/alta-stats-effects/staminabarvisibility-handstaminaview#m-staminastatbars), [`StatBarVisibilityGroup.bars`](/game-api/types/alta-stats-effects/statbarvisibilitygroup#m-bars).
