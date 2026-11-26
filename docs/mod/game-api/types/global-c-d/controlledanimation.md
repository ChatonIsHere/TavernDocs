---
title: "ControlledAnimation"
description: "Sets one float parameter on an Animator, for driving an animation from an event."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ControlledAnimation

A **class** in `Root.Township`, the global namespace.

Sets one float parameter on an `Animator`, for driving an animation from an event.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ControlledAnimation()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animator" /><code>{"private Animator animator"}</code> | <span className="api-desc">Animator to drive.</span> |
| <Link id="m-property" /><code>{"private string property"}</code> | <span className="api-desc">Float parameter name.</span> |
| <Link id="m-propertyhash" /><code>{"private int propertyHash"}</code> | <span className="api-desc">Hash of `property`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-set" /><code>{"void Set(float progress)"}</code> | <span className="api-desc">Sets the parameter to the given value.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Hashes the parameter name.</span> |

</details>
