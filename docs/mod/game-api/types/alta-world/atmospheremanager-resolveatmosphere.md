---
title: "AtmosphereManager.ResolveAtmosphere"
description: "Handler for AtmosphereManager.Resolve."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AtmosphereManager.ResolveAtmosphere

A **delegate** in `Root.Township`, `Alta.Environmental.Atmosphere`.

Handler for `AtmosphereManager.Resolve`. Gets the chunk's atmosphere set by reference and can replace it before it is applied.

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Nested in** [`AtmosphereManager`](/mod/game-api/types/alta-world/atmospheremanager)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ResolveAtmosphere(object object, IntPtr method)"}</code> | Made by the compiler when you assign a method to this delegate; you don't call it directly. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke(ref "}<Link to="/mod/game-api/types/alta-world/atmosphereset">{"AtmosphereSet"}</Link>{" set, AsyncCallback callback, object object)"}</code> | Starts the call on another thread; not supported in Unity, so use `Invoke`. |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(ref "}<Link to="/mod/game-api/types/alta-world/atmosphereset">{"AtmosphereSet"}</Link>{" set, IAsyncResult result)"}</code> | Waits for a call started with `BeginInvoke`; not supported in Unity. |
| <Link id="m-invoke" /><code>{"virtual void Invoke(ref "}<Link to="/mod/game-api/types/alta-world/atmosphereset">{"AtmosphereSet"}</Link>{" set)"}</code> | Calls every method on this delegate with these arguments. |

## Used in

Members of other types that take, return or hold a `ResolveAtmosphere`:

[`AtmosphereManager.Resolve`](/mod/game-api/types/alta-world/atmospheremanager#m-resolve).
