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

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Nested in** [`AtmosphereManager`](/game-api/types/alta-world/atmospheremanager)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ResolveAtmosphere(object object, IntPtr method)"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke(ref "}<Link to="/game-api/types/alta-world/atmosphereset">{"AtmosphereSet"}</Link>{" set, AsyncCallback callback, object object)"}</code> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(ref "}<Link to="/game-api/types/alta-world/atmosphereset">{"AtmosphereSet"}</Link>{" set, IAsyncResult result)"}</code> |
| <Link id="m-invoke" /><code>{"virtual void Invoke(ref "}<Link to="/game-api/types/alta-world/atmosphereset">{"AtmosphereSet"}</Link>{" set)"}</code> |

## Used in

Members of other types that take, return or hold a `ResolveAtmosphere`:

[`AtmosphereManager.Resolve`](/game-api/types/alta-world/atmospheremanager#m-resolve).
