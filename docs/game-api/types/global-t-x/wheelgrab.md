---
title: "WheelGrab"
description: "Turns a wheel's rotation into a saved 0 to 1 progress value."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WheelGrab

A **class** in `Root.Township`, no namespace.

Turns a wheel's rotation into a saved 0 to 1 progress value. Runs every frame on both sides; progress, rate and direction are saved.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`, [`ISavable<WheelGrabSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<WheelGrabSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`WheelGrabSaveData`](/game-api/types/global-t-x/wheelgrabsavedata)
- **Documented in** [Items, interaction and damage](/game-api/items/overview)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"WheelGrab()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentangle" /><code>{"private float currentAngle"}</code> | Wheel angle last frame, in degrees, used to measure the change. |
| <Link id="m-direction" /><code>{"private float direction"}</code> | Multiplier on the progress change; a negative value makes the opposite turn add progress. Saved. |
| <Link id="m-progress" /><code>{"private float progress"}</code> | Backing field for `Progress`. |
| <Link id="m-progresschanged" /><code>{"private "}<Link to="/game-api/types/global-e-h/floatevent">{"FloatEvent"}</Link>{" progressChanged"}</code> | Serialized event fired with the new progress, and on load. |
| <Link id="m-progressperrevolution" /><code>{"private float progressPerRevolution"}</code> | Progress gained per full turn. Saved. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-progress-2" /><code>{"float Progress { get; }"}</code> | Current progress from 0 to 1. Saved. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-progresschanged-2" /><code>{"event Action<float, float> ProgressChanged"}</code> | Raised with the old and new progress when it changes. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setprogress" /><code>{"void SetProgress(float newValue)"}</code> | Sets progress and fires both `ProgressChanged` and the serialized `progressChanged` event. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> | Calls `UpdateProgress` every frame. |
| <Link id="m-updateprogress" /><code>{"private void UpdateProgress()"}</code> | Measures how far the wheel turned since last frame and adds it to progress, clamped to 0 to 1. |

</details>

## Used in

Members of other types that take, return or hold a `WheelGrab`:

[`RotatePickup.wheelGrab`](/game-api/types/global-q-r/rotatepickup#m-wheelgrab).
