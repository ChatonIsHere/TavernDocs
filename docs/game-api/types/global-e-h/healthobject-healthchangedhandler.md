---
title: "HealthObject.HealthChangedHandler"
description: "delegate HealthObject.HealthChangedHandler in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HealthObject.HealthChangedHandler

A **delegate** in `Root.Township`, no namespace.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Nested in** [`HealthObject`](/game-api/types/global-e-h/healthobject)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HealthChangedHandler(object object, IntPtr method)"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/global-e-h/healthobject">{"HealthObject"}</Link>{" healthObject, float changeAmount, "}<Link to="/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" impact, AsyncCallback callback, object object)"}</code> |  |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> |  |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/global-e-h/healthobject">{"HealthObject"}</Link>{" healthObject, float changeAmount, "}<Link to="/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" impact)"}</code> |  |

## Used in

Members of other types that take, return or hold a `HealthChangedHandler`:

[`HealthObject.HealthChanged`](/game-api/types/global-e-h/healthobject#m-healthchanged), [`PlayerEventsManager.HealthChanged`](/game-api/types/global-p/playereventsmanager#m-healthchanged).
