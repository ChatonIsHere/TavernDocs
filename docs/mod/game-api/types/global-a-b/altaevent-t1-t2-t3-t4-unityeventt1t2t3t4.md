---
title: "AltaEvent<T1, T2, T3, T4, UnityEventT1T2T3T4>"
description: "Event with four arguments that runs both an inspector UnityEvent and a C# event, logging handler errors instead of throwing."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AltaEvent&lt;T1, T2, T3, T4, UnityEventT1T2T3T4&gt;

A **class** in `Root.Township`, the global namespace.

Event with four arguments that runs both an inspector `UnityEvent` and a C# event, logging handler errors instead of throwing. Unlike the other `AltaEvent` types it uses `Trigger` and `Triggered`.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** [`IAltaEvent<T1, T2, T3, T4>`](/mod/game-api/types/global-i-l/ialtaevent-t1-t2-t3-t4), [`IAltaEventValidation`](/mod/game-api/types/global-i-l/ialtaeventvalidation)
- **Derived types** [`ChiselableEvent`](/mod/game-api/types/alta-crafting/chiselableevent)

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
| <Link id="m-triggered" /><code>{"private UnityEventT1T2T3T4 triggered"}</code> | <span className="api-desc">The serialized inspector `UnityEvent`. Not created by default, so it is null unless Unity serialized it.</span> |

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
| <Link id="m-triggered-2" /><code>{"event Action<T1, T2, T3, T4> Triggered"}</code> | <span className="api-desc">C# event raised by `Trigger`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-op-addition" /><code>{"static "}<Link to="/mod/game-api/types/global-a-b/altaevent-t1-t2-t3-t4-unityeventt1t2t3t4">{"AltaEvent"}</Link>{"<T1, T2, T3, T4, UnityEventT1T2T3T4> op_Addition("}<Link to="/mod/game-api/types/global-a-b/altaevent-t1-t2-t3-t4-unityeventt1t2t3t4">{"AltaEvent"}</Link>{"<T1, T2, T3, T4, UnityEventT1T2T3T4> altaEvent, Action<T1, T2, T3, T4> eventHandler)"}</code> | <span className="api-desc">`+` adds a handler to `Triggered`.</span> |
| <Link id="m-op-subtraction" /><code>{"static "}<Link to="/mod/game-api/types/global-a-b/altaevent-t1-t2-t3-t4-unityeventt1t2t3t4">{"AltaEvent"}</Link>{"<T1, T2, T3, T4, UnityEventT1T2T3T4> op_Subtraction("}<Link to="/mod/game-api/types/global-a-b/altaevent-t1-t2-t3-t4-unityeventt1t2t3t4">{"AltaEvent"}</Link>{"<T1, T2, T3, T4, UnityEventT1T2T3T4> altaEvent, Action<T1, T2, T3, T4> eventHandler)"}</code> | <span className="api-desc">`-` removes a handler from `Triggered`.</span> |
| <Link id="m-trigger" /><code>{"void Trigger(T1 argument1, T2 argument2, T3 argument3, T4 argument4)"}</code> | <span className="api-desc">Runs the inspector event, then the C# `Triggered` event, catching and logging errors from each.</span> |
