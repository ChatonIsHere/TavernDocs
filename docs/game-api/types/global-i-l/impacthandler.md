---
title: "ImpactHandler"
description: "delegate ImpactHandler in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ImpactHandler

A **delegate** in `Root.Township`, no namespace.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ImpactHandler(object object, IntPtr method)"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" impact, AsyncCallback callback, object object)"}</code> |  |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> |  |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" impact)"}</code> |  |

## Used in

Members of other types that take, return or hold a `ImpactHandler`:

[`ImpactDetector.Hit`](/game-api/types/alta-items/impactdetector#m-hit), [`ImpactDetector.ParticleHit`](/game-api/types/alta-items/impactdetector#m-particlehit), [`HealthObject.OnHit`](/game-api/types/global-e-h/healthobject#m-onhit).
