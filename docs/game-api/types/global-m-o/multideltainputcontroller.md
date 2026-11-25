---
title: "MultiDeltaInputController"
description: "class MultiDeltaInputController in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MultiDeltaInputController

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`IDeltaControl`](/game-api/types/global-i-l/ideltacontrol)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"MultiDeltaInputController()"}</code> |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-controls" /><code>{"private Object[] controls"}</code> |
| <Link id="m-deltaprovided" /><code>{"private "}<Link to="/game-api/types/global-e-h/floatunityevent">{"FloatUnityEvent"}</Link>{" deltaProvided"}</code> |
| <Link id="m-isserveronly" /><code>{"private bool isServerOnly"}</code> |
| <Link id="m-lasttime" /><code>{"private float lastTime"}</code> |
| <Link id="m-maxtotal" /><code>{"private float maxTotal"}</code> |
| <Link id="m-mintotal" /><code>{"private float minTotal"}</code> |
| <Link id="m-total" /><code>{"private float total"}</code> |
| <Link id="m-update" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> |

</details>

## Events

| Member |
| --- |
| <Link id="m-deltaprovided-2" /><code>{"event Action<float> DeltaProvided"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |

<details>
<summary>4 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-forward" /><code>{"private void Forward()"}</code> |
| <Link id="m-forwardcheck" /><code>{"private void ForwardCheck()"}</code> |
| <Link id="m-handledelta" /><code>{"private void HandleDelta(float delta)"}</code> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |

</details>
