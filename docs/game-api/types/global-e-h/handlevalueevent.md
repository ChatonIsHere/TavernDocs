---
title: "HandleValueEvent"
description: "Serializable event with a float value and the HandleHandler that raised it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HandleValueEvent

A **class** in `Root.Township`, no namespace.

Serializable event with a float value and the `HandleHandler` that raised it. Used by `FaucetHandle` for value changes.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`AltaEvent<float, HandleHandler>`](/game-api/types/global-a-b/altaevent-t-unityeventt)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HandleValueEvent()"}</code> | Creates a `HandleValueEvent` with default values. |

## Used in

Members of other types that take, return or hold a `HandleValueEvent`:

[`FaucetHandle.onValueChanged`](/game-api/types/global-e-h/faucethandle#m-onvaluechanged).
