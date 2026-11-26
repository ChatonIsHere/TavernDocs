---
title: "ControlledAnimation"
description: "Sets one float parameter on an Animator, for driving an animation from an event."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ControlledAnimation

A **class** in `Root.Township`, no namespace.

Sets one float parameter on an `Animator`, for driving an animation from an event.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ControlledAnimation()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animator" /><code>{"private Animator animator"}</code> | Animator to drive. |
| <Link id="m-property" /><code>{"private string property"}</code> | Float parameter name. |
| <Link id="m-propertyhash" /><code>{"private int propertyHash"}</code> | Hash of `property`. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-set" /><code>{"void Set(float progress)"}</code> | Sets the parameter to the given value. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hashes the parameter name. |

</details>
