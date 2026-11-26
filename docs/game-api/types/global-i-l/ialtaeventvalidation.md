---
title: "IAltaEventValidation"
description: "An event wrapper (such as AltaEvent) whose Unity event can be checked for broken persistent listeners with the Validate extension method."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IAltaEventValidation

An **interface** in `Root.Township`, no namespace.

An event wrapper (such as `AltaEvent`) whose Unity event can be checked for broken persistent listeners with the `Validate` extension method.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Derived types** [`AltaEvent`](/game-api/types/global-a-b/altaevent), [`AltaEvent<T, UnityEventT>`](/game-api/types/global-a-b/altaevent-t-unityeventt), [`AltaEvent<T1, T2, T3, T4, UnityEventT1T2T3T4>`](/game-api/types/global-a-b/altaevent-t1-t2-t3-t4-unityeventt1t2t3t4), [`AltaEvent<T1, T2, T3, UnityEventT1T2T3>`](/game-api/types/global-a-b/altaevent-t1-t2-t3-unityeventt1t2t3), [`AltaEvent<T1, T2, UnityEventT1T2>`](/game-api/types/global-a-b/altaevent-t1-t2-unityeventt1t2)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-eventbase" /><code>{"UnityEventBase EventBase { get; }"}</code> | The underlying Unity event. |

## Used in

Members of other types that take, return or hold a `IAltaEventValidation`:

[`AltaEventValidationExtensions.Validate`](/game-api/types/global-a-b/altaeventvalidationextensions#m-validate).
