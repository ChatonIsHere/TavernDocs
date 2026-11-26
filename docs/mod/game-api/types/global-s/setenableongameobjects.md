---
title: "SetEnableOnGameObjects"
description: "Turns a list of GameObjects on when this component is enabled."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SetEnableOnGameObjects

A **class** in `Root.Township`, the global namespace.

Turns a list of GameObjects on when this component is enabled. Its `OnDisable` also turns them on, so it never turns them off.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SetEnableOnGameObjects()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-objectstoactivate" /><code>{"private List<GameObject> objectsToActivate"}</code> | <span className="api-desc">The objects to turn on.</span> |

</details>

## Methods

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Sets every object active (not inactive, as the name suggests).</span> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Sets every object active.</span> |

</details>
