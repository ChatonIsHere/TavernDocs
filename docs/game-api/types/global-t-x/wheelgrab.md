---
title: "WheelGrab"
description: "class WheelGrab in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WheelGrab

A **class** in `Root.Township`, no namespace.

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

| Member |
| --- |
| <Link id="m-currentangle" /><code>{"private float currentAngle"}</code> |
| <Link id="m-direction" /><code>{"private float direction"}</code> |
| <Link id="m-progress" /><code>{"private float progress"}</code> |
| <Link id="m-progresschanged" /><code>{"private "}<Link to="/game-api/types/global-e-h/floatevent">{"FloatEvent"}</Link>{" progressChanged"}</code> |
| <Link id="m-progressperrevolution" /><code>{"private float progressPerRevolution"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-progress-2" /><code>{"float Progress { get; }"}</code> |

## Events

| Member |
| --- |
| <Link id="m-progresschanged-2" /><code>{"event Action<float, float> ProgressChanged"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-setprogress" /><code>{"void SetProgress(float newValue)"}</code> |

<details>
<summary>2 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> |
| <Link id="m-updateprogress" /><code>{"private void UpdateProgress()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `WheelGrab`:

[`RotatePickup.wheelGrab`](/game-api/types/global-q-r/rotatepickup#m-wheelgrab).
