---
title: "GestureMap.GestureMapping"
description: "One serialized D-pad direction and gesture pair in a GestureMap."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GestureMap.GestureMapping

A **private class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

One serialized D-pad direction and gesture pair in a `GestureMap`.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Nested in** [`GestureMap`](/game-api/types/global-e-h/gesturemap)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"GestureMapping()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-dpaddirection" /><code>{"private int dPadDirection"}</code> | Backing field for `DPadDirection`. |
| <Link id="m-gesture" /><code>{"private "}<Link to="/game-api/types/global-e-h/handgesturedefinition">{"HandGestureDefinition"}</Link>{" gesture"}</code> | Backing field for `Gesture`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-dpaddirection-2" /><code>{"int DPadDirection { get; }"}</code> | The D-pad direction index. |
| <Link id="m-gesture-2" /><code><Link to="/game-api/types/global-e-h/handgesturedefinition">{"HandGestureDefinition"}</Link>{" Gesture { get; }"}</code> | The hand gesture for that direction. |

## Used in

Members of other types that take, return or hold a `GestureMapping`:

[`GestureMap.gestureMappings`](/game-api/types/global-e-h/gesturemap#m-gesturemappings).
