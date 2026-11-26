---
title: "AltaEvent<T1, T2, T3, UnityEventT1T2T3>"
description: "Event with three arguments that runs both an inspector UnityEvent and a C# event, logging handler errors instead of throwing."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AltaEvent&lt;T1, T2, T3, UnityEventT1T2T3&gt;

A **class** in `Root.Township`, no namespace.

Event with three arguments that runs both an inspector `UnityEvent` and a C# event, logging handler errors instead of throwing.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** [`IAltaEvent<T1, T2, T3>`](/game-api/types/global-i-l/ialtaevent-t1-t2-t3), [`IAltaEventValidation`](/game-api/types/global-i-l/ialtaeventvalidation)
- **Derived types** [`PickupDockedEvent`](/game-api/types/global-p/pickupdockedevent)

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
| <Link id="m-triggered" /><code>{"private UnityEventT1T2T3 triggered"}</code> | The serialized inspector `UnityEvent`, invoked before `Invoked`. |

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
| <Link id="m-invoked" /><code>{"event Action<T1, T2, T3> Invoked"}</code> | C# event raised by `Invoke`, after the inspector event. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-invoke" /><code>{"void Invoke(T1 argument1, T2 argument2, T3 argument3)"}</code> | Fires the Inspector event; a handler that throws is logged and doesn't stop the caller. |
| <Link id="m-op-addition" /><code>{"static "}<Link to="/game-api/types/global-a-b/altaevent-t1-t2-t3-unityeventt1t2t3">{"AltaEvent"}</Link>{"<T1, T2, T3, UnityEventT1T2T3> op_Addition("}<Link to="/game-api/types/global-a-b/altaevent-t1-t2-t3-unityeventt1t2t3">{"AltaEvent"}</Link>{"<T1, T2, T3, UnityEventT1T2T3> altaEvent, Action<T1, T2, T3> eventHandler)"}</code> | `+` adds a handler to `Invoked`. |
| <Link id="m-op-subtraction" /><code>{"static "}<Link to="/game-api/types/global-a-b/altaevent-t1-t2-t3-unityeventt1t2t3">{"AltaEvent"}</Link>{"<T1, T2, T3, UnityEventT1T2T3> op_Subtraction("}<Link to="/game-api/types/global-a-b/altaevent-t1-t2-t3-unityeventt1t2t3">{"AltaEvent"}</Link>{"<T1, T2, T3, UnityEventT1T2T3> altaEvent, Action<T1, T2, T3> eventHandler)"}</code> | `-` removes a handler from `Invoked`. |
