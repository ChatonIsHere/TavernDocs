---
title: "TimeScroller"
description: "Lets a CaptainsWheel scrub the time of day: turning the wheel shifts GameTimeManager's private dayProgress by reflection."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TimeScroller

A **class** in `Root.Township`, the global namespace.

Lets a `CaptainsWheel` scrub the time of day: turning the wheel shifts `GameTimeManager`'s private `dayProgress` by reflection.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TimeScroller()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fieldinfo" /><code>{"private FieldInfo fieldInfo"}</code> | <span className="api-desc">Reflection handle for `GameTimeManager.dayProgress`.</span> |
| <Link id="m-timemanager" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/gametimemanager">{"GameTimeManager"}</Link>{" timeManager"}</code> | <span className="api-desc">The time manager to change.</span> |
| <Link id="m-wheel" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/captainswheel">{"CaptainsWheel"}</Link>{" wheel"}</code> | <span className="api-desc">The wheel that drives it.</span> |

</details>

## Methods

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-settime" /><code>{"private void SetTime(float oldValue, float newValue)"}</code> | <span className="api-desc">Adds the wheel's change to the day progress, wrapped to 0 to 1.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Subscribes to the wheel's value changes.</span> |

</details>
