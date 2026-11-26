---
title: "ImpactHandler"
description: "Callback that receives an ImpactHit."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ImpactHandler

A **delegate** in `Root.Township`, no namespace.

Callback that receives an `ImpactHit`.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ImpactHandler(object object, IntPtr method)"}</code> | Made by the compiler when you assign a method to this delegate; you don't call it directly. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" impact, AsyncCallback callback, object object)"}</code> | Starts the call on another thread; not supported in Unity, so use `Invoke`. |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | Waits for a call started with `BeginInvoke`; not supported in Unity. |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" impact)"}</code> | Calls every method on this delegate with these arguments. |

## Used in

Members of other types that take, return or hold a `ImpactHandler`:

[`ImpactDetector.Hit`](/game-api/types/alta-items/impactdetector#m-hit), [`ImpactDetector.ParticleHit`](/game-api/types/alta-items/impactdetector#m-particlehit), [`HealthObject.OnHit`](/game-api/types/global-e-h/healthobject#m-onhit).
