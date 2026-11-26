---
title: "UltimateRopeLink"
description: "Marker component on a rope segment link, recording whether it is a kinematic link held back for rope extension."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# UltimateRopeLink

A **class** in `Root.Township`, the global namespace.

Marker component on a rope segment link, recording whether it is a kinematic link held back for rope extension.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"UltimateRopeLink()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-extensiblekinematic" /><code>{"bool ExtensibleKinematic"}</code> | <span className="api-desc">True while the link is parked as kinematic waiting to be extended out. Set by `UltimateRope` and recorded by `RopePersistManager`.</span> |
