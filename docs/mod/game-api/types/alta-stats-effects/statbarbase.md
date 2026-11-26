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

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`DiscreteStatBar`](/mod/game-api/types/alta-stats-effects/discretestatbar), [`StatBarSimple`](/mod/game-api/types/alta-stats-effects/statbarsimple)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StatBarBase()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-istakingphoto" /><code>{"protected bool isTakingPhoto"}</code> | <span className="api-desc">True while the hand camera is rendering a photo.</span> |
| <Link id="m-trackedstat" /><code>{"protected "}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" trackedStat"}</code> | <span className="api-desc">The stat instance being shown.</span> |
| <Link id="m-trackedstatdefinition" /><code>{"protected "}<Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" trackedStatDefinition"}</code> | <span className="api-desc">The stat to look up and show.</span> |
| <Link id="m-visibilitygroup" /><code>{"protected "}<Link to="/mod/game-api/types/alta-stats-effects/statbarvisibilitygroup">{"StatBarVisibilityGroup"}</Link>{" visibilityGroup"}</code> | <span className="api-desc">The group that holds the stat manager and controls visibility.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-stat" /><code><Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" "}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" { get; }"}</code> | <span className="api-desc">The stat being shown.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-updatedvisibility" /><code>{"event Action<bool> UpdatedVisibility"}</code> | <span className="api-desc">Raised when the bar becomes visible or hidden.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disable" /><code>{"void Disable()"}</code> | <span className="api-desc">Stops listening to the stat and the camera.</span> |
| <Link id="m-initialize" /><code>{"virtual void Initialize()"}</code> | <span className="api-desc">Finds the tracked stat in the visibility group's stat manager and listens for changes. Hides the bar if the stat is missing.</span> |
| <Link id="m-ping" /><code>{"virtual void Ping(float duration)"}</code> | <span className="api-desc">Asks the bar to draw attention for a duration. Empty in the base class.</span> |
| <Link id="m-setalpha" /><code>{"virtual void SetAlpha(float alphaMultiplier)"}</code> | <span className="api-desc">Fades the bar. Empty in the base class.</span> |
| <Link id="m-onbecamevisiblechanged" /><code>{"protected void OnBecameVisibleChanged(bool isVisible)"}</code> | <span className="api-desc">Raises `UpdatedVisibility` for subclasses.</span> |
| <Link id="m-ondestroy" /><code>{"protected virtual void OnDestroy()"}</code> | <span className="api-desc">Stops listening to the hand camera.</span> |
| <Link id="m-onstatchanged" /><code>{"protected virtual void OnStatChanged("}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat)"}</code> | <span className="api-desc">Called when the stat changes, and once after initialising. Empty in the base class.</span> |
| <Link id="m-setrenderersenabled" /><code>{"protected virtual void SetRenderersEnabled(bool isEnabled)"}</code> | <span className="api-desc">Shows or hides the bar's renderers. Empty in the base class.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-delayinitialize" /><code>{"private void DelayInitialize()"}</code> | <span className="api-desc">Runs one frame later to show the tracked stat's starting value.</span> |
| <Link id="m-ontakingphoto" /><code>{"private void OnTakingPhoto("}<Link to="/mod/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" handCamera, "}<Link to="/mod/game-api/types/alta-customization/handcameraevent">{"HandCameraEvent"}</Link>{" cameraEvent)"}</code> | <span className="api-desc">Hides the bar while a hand camera photo is rendered.</span> |
| <Link id="m-ontookphoto" /><code>{"private void OnTookPhoto("}<Link to="/mod/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" handCamera, "}<Link to="/mod/game-api/types/alta-customization/handcameraevent">{"HandCameraEvent"}</Link>{" cameraEvent)"}</code> | <span className="api-desc">Shows the bar again after the photo, if its visibility group is on.</span> |

</details>

## Used in

Members of other types that take, return or hold a `StatBarBase`:

<div className="api-used-in">

[`StaminaBarVisibility.leftStamina`](/mod/game-api/types/alta-stats-effects/staminabarvisibility#m-leftstamina), [`StaminaBarVisibility.rightStamina`](/mod/game-api/types/alta-stats-effects/staminabarvisibility#m-rightstamina), [`StaminaBarVisibility.HandStaminaView.HandStaminaView`](/mod/game-api/types/alta-stats-effects/staminabarvisibility-handstaminaview#m-ctor), [`StaminaBarVisibility.HandStaminaView.staminaStatBars`](/mod/game-api/types/alta-stats-effects/staminabarvisibility-handstaminaview#m-staminastatbars), [`StatBarVisibilityGroup.bars`](/mod/game-api/types/alta-stats-effects/statbarvisibilitygroup#m-bars).

</div>
