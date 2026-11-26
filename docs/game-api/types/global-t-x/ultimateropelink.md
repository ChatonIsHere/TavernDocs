---
title: "UltimateRopeLink"
description: "Marker component on a rope segment link, recording whether it is a kinematic link held back for rope extension."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# UltimateRopeLink

A **class** in `Root.Township`, no namespace.

Marker component on a rope segment link, recording whether it is a kinematic link held back for rope extension.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"UltimateRopeLink()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-extensiblekinematic" /><code>{"bool ExtensibleKinematic"}</code> | True while the link is parked as kinematic waiting to be extended out. Set by `UltimateRope` and recorded by `RopePersistManager`. |
