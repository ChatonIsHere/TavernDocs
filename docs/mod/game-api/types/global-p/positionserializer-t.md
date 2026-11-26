---
title: "PositionSerializer<T>"
description: "A PositionSerializer that can reparent a target of type T itself, through callbacks it was built with."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PositionSerializer&lt;T&gt;

A **class** in `Root.Township`, the global namespace.

A `PositionSerializer` that can reparent a target of type `T` itself, through callbacks it was built with. `NetworkRigidbody` uses it to parent a body to the platform it rides on.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`PositionSerializer`](/mod/game-api/types/global-p/positionserializer)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PositionSerializer("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, Func<T, bool> isParentNull, Action<T> makeParentNull)"}</code> | Creates a `PositionSerializer` from `entity`, `isParentNull` and `makeParentNull`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isparentnull" /><code>{"private Func<T, bool> isParentNull"}</code> | Callback that tells whether the target currently has no parent. |
| <Link id="m-makeparentnull" /><code>{"private Action<T> makeParentNull"}</code> | Callback that unparents the target. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-fixparent" /><code>{"void FixParent(T target, Transform targetTransform)"}</code> | Parents the target's transform to the current movement context, or clears its parent through `makeParentNull` when the context is gone. |

## Used in

Members of other types that take, return or hold a `PositionSerializer&lt;T>`:

[`NetworkRigidbody.positionSerializer`](/mod/game-api/types/alta-networking/networkrigidbody#m-positionserializer), [`StaticPlatformSupport.positionSerializer`](/mod/game-api/types/alta-networking/staticplatformsupport#m-positionserializer).
