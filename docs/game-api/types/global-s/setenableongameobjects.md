---
title: "SetEnableOnGameObjects"
description: "Turns a list of GameObjects on when this component is enabled."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SetEnableOnGameObjects

A **class** in `Root.Township`, no namespace.

Turns a list of GameObjects on when this component is enabled. Its `OnDisable` also turns them on, so it never turns them off.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SetEnableOnGameObjects()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-objectstoactivate" /><code>{"private List<GameObject> objectsToActivate"}</code> | The objects to turn on. |

</details>

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Sets every object active (not inactive, as the name suggests). |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Sets every object active. |

</details>
