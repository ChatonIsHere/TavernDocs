---
title: "RandomYRotation"
description: "Generated positioning module that spins the placed object by a random angle around world up."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RandomYRotation

A **class** in `Root.Township`, the global namespace.

Generated positioning module that spins the placed object by a random angle around world up.

- **Listed in** [Global namespace: Q to R](/mod/game-api/types/global-q-r)
- **Inherits or implements** [`GeneratedPositioning.Module`](/mod/game-api/types/global-e-h/generatedpositioning-module)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RandomYRotation()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-modify" /><code>{"override void Modify(ref Vector3 position, ref Quaternion rotation)"}</code> | <span className="api-desc">Adds a random 0 to 360 degree rotation around the up axis.</span> |
