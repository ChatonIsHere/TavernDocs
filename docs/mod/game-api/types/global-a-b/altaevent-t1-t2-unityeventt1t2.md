---
title: "AltaEvent<T1, T2, UnityEventT1T2>"
description: "Two-argument event that runs both inspector-set UnityEvent listeners and C# listeners, logging errors from either instead of throwing."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AltaEvent&lt;T1, T2, UnityEventT1T2&gt;

A **class** in `Root.Township`, the global namespace.

Two-argument event that runs both inspector-set UnityEvent listeners and C# listeners, logging errors from either instead of throwing.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** [`IAltaEvent<T1, T2>`](/mod/game-api/types/global-i-l/ialtaevent-t1-t2), [`IAltaEventValidation`](/mod/game-api/types/global-i-l/ialtaeventvalidation)
- **Derived types** [`InteractableEvent`](/mod/game-api/types/global-i-l/interactableevent), [`PositionRotationEvent`](/mod/game-api/types/global-p/positionrotationevent), [`TransformScaledEvent`](/mod/game-api/types/global-t-x/transformscaledevent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AltaEvent()"}</code> | Creates an `AltaEvent` with default values. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | Shared `AltaEvent` logger, used when a handler throws. |
| <Link id="m-triggered" /><code>{"private UnityEventT1T2 triggered"}</code> | The serialized inspector `UnityEvent`, invoked before the C# `Invoked` event. |

</details>

## Properties

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ialtaeventvalidation-eventbase" /><code>{"private UnityEventBase IAltaEventValidation.EventBase { get; }"}</code> | Exposes the inspector `UnityEvent` so `Validate` can clean it. |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-invoked" /><code>{"event Action<T1, T2> Invoked"}</code> | C# listeners. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-invoke" /><code>{"void Invoke(T1 argument1, T2 argument2)"}</code> | Runs the inspector listeners, then `Invoked`. Exceptions are logged. |
| <Link id="m-op-addition" /><code>{"static "}<Link to="/mod/game-api/types/global-a-b/altaevent-t1-t2-unityeventt1t2">{"AltaEvent"}</Link>{"<T1, T2, UnityEventT1T2> op_Addition("}<Link to="/mod/game-api/types/global-a-b/altaevent-t1-t2-unityeventt1t2">{"AltaEvent"}</Link>{"<T1, T2, UnityEventT1T2> altaEvent, Action<T1, T2> eventHandler)"}</code> | Adds a C# listener. |
| <Link id="m-op-subtraction" /><code>{"static "}<Link to="/mod/game-api/types/global-a-b/altaevent-t1-t2-unityeventt1t2">{"AltaEvent"}</Link>{"<T1, T2, UnityEventT1T2> op_Subtraction("}<Link to="/mod/game-api/types/global-a-b/altaevent-t1-t2-unityeventt1t2">{"AltaEvent"}</Link>{"<T1, T2, UnityEventT1T2> altaEvent, Action<T1, T2> eventHandler)"}</code> | Removes a C# listener. |
