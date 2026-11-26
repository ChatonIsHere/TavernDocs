---
title: "WheelGrab"
description: "Turns a wheel's rotation into a saved 0 to 1 progress value."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WheelGrab

A **class** in `Root.Township`, the global namespace.

Turns a wheel's rotation into a saved 0 to 1 progress value. Runs every frame on both sides; progress, rate and direction are saved.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`, [`ISavable<WheelGrabSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<WheelGrabSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`WheelGrabSaveData`](/mod/game-api/types/global-t-x/wheelgrabsavedata)
- **Documented in** [Items, interaction and damage](/mod/game-api/items/overview)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"WheelGrab()"}</code> | <span className="api-desc">Creates a `WheelGrab` with default values.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentangle" /><code>{"private float currentAngle"}</code> | <span className="api-desc">Wheel angle last frame, in degrees, used to measure the change.</span> |
| <Link id="m-direction" /><code>{"private float direction"}</code> | <span className="api-desc">Multiplier on the progress change; a negative value makes the opposite turn add progress. Saved.</span> |
| <Link id="m-progress" /><code>{"private float progress"}</code> | <span className="api-desc">Backing field for `Progress`.</span> |
| <Link id="m-progresschanged" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/floatevent">{"FloatEvent"}</Link>{" progressChanged"}</code> | <span className="api-desc">Serialized event fired with the new progress, and on load.</span> |
| <Link id="m-progressperrevolution" /><code>{"private float progressPerRevolution"}</code> | <span className="api-desc">Progress gained per full turn. Saved.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-progress-2" /><code>{"float Progress { get; }"}</code> | <span className="api-desc">Current progress from 0 to 1. Saved.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-progresschanged-2" /><code>{"event Action<float, float> ProgressChanged"}</code> | <span className="api-desc">Raised with the old and new progress when it changes.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setprogress" /><code>{"void SetProgress(float newValue)"}</code> | <span className="api-desc">Sets progress and fires both `ProgressChanged` and the serialized `progressChanged` event.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> | <span className="api-desc">Calls `UpdateProgress` every frame.</span> |
| <Link id="m-updateprogress" /><code>{"private void UpdateProgress()"}</code> | <span className="api-desc">Measures how far the wheel turned since last frame and adds it to progress, clamped to 0 to 1.</span> |

</details>

## Used in

Members of other types that take, return or hold a `WheelGrab`:

<div className="api-used-in">

[`RotatePickup.wheelGrab`](/mod/game-api/types/global-q-r/rotatepickup#m-wheelgrab).

</div>
