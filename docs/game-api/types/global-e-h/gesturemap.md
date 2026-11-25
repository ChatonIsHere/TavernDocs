---
title: "GestureMap"
description: "class GestureMap in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GestureMap

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`GestureMap.Create`](/game-api/types/global-e-h/gesturemap-create)
- **Nested types** [`Create`](/game-api/types/global-e-h/gesturemap-create), [`GestureMapping`](/game-api/types/global-e-h/gesturemap-gesturemapping)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"GestureMap()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-gesturemap" /><code>{"private Dictionary<int, "}<Link to="/game-api/types/global-e-h/handgesturedefinition">{"HandGestureDefinition"}</Link>{"> gestureMap"}</code> |
| <Link id="m-gesturemappings" /><code>{"private "}<Link to="/game-api/types/global-e-h/gesturemap-gesturemapping">{"GestureMap.GestureMapping"}</Link>{"[] gestureMappings"}</code> |
| <Link id="m-idlegesture" /><code>{"private "}<Link to="/game-api/types/global-e-h/handgesturedefinition">{"HandGestureDefinition"}</Link>{" idleGesture"}</code> |
| <Link id="m-isgradualgrip" /><code>{"private bool isGradualGrip"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-idlegesture-2" /><code><Link to="/game-api/types/global-e-h/handgesturedefinition">{"HandGestureDefinition"}</Link>{" IdleGesture { get; }"}</code> |
| <Link id="m-isgradualgrip-2" /><code>{"bool IsGradualGrip { get; }"}</code> |
| <Link id="m-map" /><code>{"Dictionary<int, "}<Link to="/game-api/types/global-e-h/handgesturedefinition">{"HandGestureDefinition"}</Link>{"> Map { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-setupdictionary" /><code>{"void SetupDictionary()"}</code> |

## Used in

Members of other types that take, return or hold a `GestureMap`:

[`HandGestureController.gestureMap`](/game-api/types/global-e-h/handgesturecontroller#m-gesturemap).
