---
title: "DelayedPooledObject"
description: "A PooledObject that waits before returning to its pool, so effects can finish first."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DelayedPooledObject

A **class** in `Root.Township`, no namespace.

A `PooledObject` that waits before returning to its pool, so effects can finish first.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`PooledObject`](/game-api/types/global-p/pooledobject)
- **Derived types** [`ColorFadeRelease`](/game-api/types/global-c-d/colorfaderelease), [`EmissionControl`](/game-api/types/global-e-h/emissioncontrol)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DelayedPooledObject()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-releasedelay" /><code>{"protected float releaseDelay"}</code> | Seconds to wait before releasing. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-release" /><code>{"override void Release()"}</code> | If the component is enabled, releases after the delay; otherwise releases now. |
| <Link id="m-delayrelease" /><code>{"protected virtual IEnumerator DelayRelease() (iterator)"}</code> | Waits `releaseDelay` seconds, then releases. Subclasses can override it to play something first. |
| <Link id="m-finalrelease" /><code>{"protected void FinalRelease()"}</code> | Returns the object to its pool straight away. |
