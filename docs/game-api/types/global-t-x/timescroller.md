---
title: "TimeScroller"
description: "Lets a CaptainsWheel scrub the time of day: turning the wheel shifts GameTimeManager's private dayProgress by reflection."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TimeScroller

A **class** in `Root.Township`, no namespace.

Lets a `CaptainsWheel` scrub the time of day: turning the wheel shifts `GameTimeManager`'s private `dayProgress` by reflection.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"TimeScroller()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fieldinfo" /><code>{"private FieldInfo fieldInfo"}</code> | Reflection handle for `GameTimeManager.dayProgress`. |
| <Link id="m-timemanager" /><code>{"private "}<Link to="/game-api/types/global-e-h/gametimemanager">{"GameTimeManager"}</Link>{" timeManager"}</code> | The time manager to change. |
| <Link id="m-wheel" /><code>{"private "}<Link to="/game-api/types/global-c-d/captainswheel">{"CaptainsWheel"}</Link>{" wheel"}</code> | The wheel that drives it. |

</details>

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-settime" /><code>{"private void SetTime(float oldValue, float newValue)"}</code> | Adds the wheel's change to the day progress, wrapped to 0 to 1. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Subscribes to the wheel's value changes. |

</details>
