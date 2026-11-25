---
title: "DelayedPooledObject"
description: "class DelayedPooledObject in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DelayedPooledObject

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`PooledObject`](/game-api/types/global-p/pooledobject)
- **Derived types** [`ColorFadeRelease`](/game-api/types/global-c-d/colorfaderelease), [`EmissionControl`](/game-api/types/global-e-h/emissioncontrol)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DelayedPooledObject()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-releasedelay" /><code>{"protected float releaseDelay"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-release" /><code>{"override void Release()"}</code> |  |
| <Link id="m-delayrelease" /><code>{"protected virtual IEnumerator DelayRelease() (iterator)"}</code> |  |
| <Link id="m-finalrelease" /><code>{"protected void FinalRelease()"}</code> |  |
