---
title: "AltaEvent<T1, T2, T3, UnityEventT1T2T3>"
description: "Event with three arguments that runs both an inspector UnityEvent and a C# event, logging handler errors instead of throwing."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AltaEvent&lt;T1, T2, T3, UnityEventT1T2T3&gt;

A **class** in `Root.Township`, the global namespace.

Event with three arguments that runs both an inspector `UnityEvent` and a C# event, logging handler errors instead of throwing.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** [`IAltaEvent<T1, T2, T3>`](/mod/game-api/types/global-i-l/ialtaevent-t1-t2-t3), [`IAltaEventValidation`](/mod/game-api/types/global-i-l/ialtaeventvalidation)
- **Derived types** [`PickupDockedEvent`](/mod/game-api/types/global-p/pickupdockedevent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AltaEvent()"}</code> | <span className="api-desc">Creates an `AltaEvent` with default values.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">Shared `AltaEvent` logger, used when a handler throws.</span> |
| <Link id="m-triggered" /><code>{"private UnityEventT1T2T3 triggered"}</code> | <span className="api-desc">The serialized inspector `UnityEvent`, invoked before `Invoked`.</span> |

</details>

## Properties

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ialtaeventvalidation-eventbase" /><code>{"private UnityEventBase IAltaEventValidation.EventBase { get; }"}</code> | <span className="api-desc">Exposes the inspector `UnityEvent` so `Validate` can clean it.</span> |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-invoked" /><code>{"event Action<T1, T2, T3> Invoked"}</code> | <span className="api-desc">C# event raised by `Invoke`, after the inspector event.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-invoke" /><code>{"void Invoke(T1 argument1, T2 argument2, T3 argument3)"}</code> | <span className="api-desc">Fires the Inspector event; a handler that throws is logged and doesn't stop the caller.</span> |
| <Link id="m-op-addition" /><code>{"static "}<Link to="/mod/game-api/types/global-a-b/altaevent-t1-t2-t3-unityeventt1t2t3">{"AltaEvent"}</Link>{"<T1, T2, T3, UnityEventT1T2T3> op_Addition("}<Link to="/mod/game-api/types/global-a-b/altaevent-t1-t2-t3-unityeventt1t2t3">{"AltaEvent"}</Link>{"<T1, T2, T3, UnityEventT1T2T3> altaEvent, Action<T1, T2, T3> eventHandler)"}</code> | <span className="api-desc">`+` adds a handler to `Invoked`.</span> |
| <Link id="m-op-subtraction" /><code>{"static "}<Link to="/mod/game-api/types/global-a-b/altaevent-t1-t2-t3-unityeventt1t2t3">{"AltaEvent"}</Link>{"<T1, T2, T3, UnityEventT1T2T3> op_Subtraction("}<Link to="/mod/game-api/types/global-a-b/altaevent-t1-t2-t3-unityeventt1t2t3">{"AltaEvent"}</Link>{"<T1, T2, T3, UnityEventT1T2T3> altaEvent, Action<T1, T2, T3> eventHandler)"}</code> | <span className="api-desc">`-` removes a handler from `Invoked`.</span> |
