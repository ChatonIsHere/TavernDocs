---
title: "VisualEffectsUtilities"
description: "Helper for visual doubles: pooled copies of an object's meshes that effects can play on."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# VisualEffectsUtilities

A **static class** in `Root.Township`, no namespace.

Helper for visual doubles: pooled copies of an object's meshes that effects can play on.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getvisualdouble" /><code>{"static "}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" GetVisualDouble(Component component)"}</code> | Takes an `ObjectVisualDouble` from the pickup type settings pool, copies the object's mesh renderers into it and unparents it. Used by `DockedDissolver`. |
| <Link id="m-getvisualdouble-2" /><code>{"static "}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" GetVisualDouble(GameObject gameObject)"}</code> | Takes an `ObjectVisualDouble` from the pickup type settings pool, copies the object's mesh renderers into it and unparents it. Used by `DockedDissolver`. |
