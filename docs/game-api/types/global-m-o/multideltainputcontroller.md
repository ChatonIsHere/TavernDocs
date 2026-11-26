---
title: "MultiDeltaInputController"
description: "Combines several IDeltaControl inputs (such as cranks) into one delta, clamped per second and passed on once per frame."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MultiDeltaInputController

A **class** in `Root.Township`, no namespace.

Combines several `IDeltaControl` inputs (such as cranks) into one delta, clamped per second and passed on once per frame. Server only by default.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`IDeltaControl`](/game-api/types/global-i-l/ideltacontrol)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"MultiDeltaInputController()"}</code> |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-controls" /><code>{"private Object[] controls"}</code> | Input controls to combine; each must implement `IDeltaControl`. |
| <Link id="m-deltaprovided" /><code>{"private "}<Link to="/game-api/types/global-e-h/floatunityevent">{"FloatUnityEvent"}</Link>{" deltaProvided"}</code> | Unity event raised with the combined delta. |
| <Link id="m-isserveronly" /><code>{"private bool isServerOnly"}</code> | If true, only the server listens to the controls. |
| <Link id="m-lasttime" /><code>{"private float lastTime"}</code> | Time of the last forwarded input. |
| <Link id="m-maxtotal" /><code>{"private float maxTotal"}</code> | Most the combined delta can be per second. |
| <Link id="m-mintotal" /><code>{"private float minTotal"}</code> | Least the combined delta can be per second. |
| <Link id="m-total" /><code>{"private float total"}</code> | Delta summed so far this frame. |
| <Link id="m-update" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> | Fixed update handle while input is coming in. |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-deltaprovided-2" /><code>{"event Action<float> DeltaProvided"}</code> | Event raised with the combined delta. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Subscribes to every control's delta event, unless server-only and not on the server. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-forward" /><code>{"private void Forward()"}</code> | Clamps the total for this frame, fires both events and resets it. |
| <Link id="m-forwardcheck" /><code>{"private void ForwardCheck()"}</code> | Fixed update that forwards any total left from the last frame and stops after a second with no input. |
| <Link id="m-handledelta" /><code>{"private void HandleDelta(float delta)"}</code> | Adds an input delta to the total, forwarding the previous frame's total first. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Stops the update. |

</details>
