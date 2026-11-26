---
title: "MultiDeltaInputController"
description: "Combines several IDeltaControl inputs (such as cranks) into one delta, clamped per second and passed on once per frame."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MultiDeltaInputController

A **class** in `Root.Township`, the global namespace.

Combines several `IDeltaControl` inputs (such as cranks) into one delta, clamped per second and passed on once per frame. Server only by default.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`IDeltaControl`](/mod/game-api/types/global-i-l/ideltacontrol)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MultiDeltaInputController()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-controls" /><code>{"private Object[] controls"}</code> | <span className="api-desc">Input controls to combine; each must implement `IDeltaControl`.</span> |
| <Link id="m-deltaprovided" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/floatunityevent">{"FloatUnityEvent"}</Link>{" deltaProvided"}</code> | <span className="api-desc">Unity event raised with the combined delta.</span> |
| <Link id="m-isserveronly" /><code>{"private bool isServerOnly"}</code> | <span className="api-desc">If true, only the server listens to the controls.</span> |
| <Link id="m-lasttime" /><code>{"private float lastTime"}</code> | <span className="api-desc">Time of the last forwarded input.</span> |
| <Link id="m-maxtotal" /><code>{"private float maxTotal"}</code> | <span className="api-desc">Most the combined delta can be per second.</span> |
| <Link id="m-mintotal" /><code>{"private float minTotal"}</code> | <span className="api-desc">Least the combined delta can be per second.</span> |
| <Link id="m-total" /><code>{"private float total"}</code> | <span className="api-desc">Delta summed so far this frame.</span> |
| <Link id="m-update" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> | <span className="api-desc">Fixed update handle while input is coming in.</span> |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-deltaprovided-2" /><code>{"event Action<float> DeltaProvided"}</code> | <span className="api-desc">Event raised with the combined delta.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Subscribes to every control's delta event, unless server-only and not on the server.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-forward" /><code>{"private void Forward()"}</code> | <span className="api-desc">Clamps the total for this frame, fires both events and resets it.</span> |
| <Link id="m-forwardcheck" /><code>{"private void ForwardCheck()"}</code> | <span className="api-desc">Fixed update that forwards any total left from the last frame and stops after a second with no input.</span> |
| <Link id="m-handledelta" /><code>{"private void HandleDelta(float delta)"}</code> | <span className="api-desc">Adds an input delta to the total, forwarding the previous frame's total first.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Stops the update.</span> |

</details>
