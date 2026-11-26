---
title: "VisualEffectsUtilities"
description: "Helper for visual doubles: pooled copies of an object's meshes that effects can play on."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# VisualEffectsUtilities

A **static class** in `Root.Township`, the global namespace.

Helper for visual doubles: pooled copies of an object's meshes that effects can play on.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getvisualdouble" /><code>{"static "}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" GetVisualDouble(Component component)"}</code> | <span className="api-desc">Takes an `ObjectVisualDouble` from the pickup type settings pool, copies the object's mesh renderers into it and unparents it. Used by `DockedDissolver`.</span> |
| <Link id="m-getvisualdouble-2" /><code>{"static "}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" GetVisualDouble(GameObject gameObject)"}</code> | <span className="api-desc">Takes an `ObjectVisualDouble` from the pickup type settings pool, copies the object's mesh renderers into it and unparents it. Used by `DockedDissolver`.</span> |
