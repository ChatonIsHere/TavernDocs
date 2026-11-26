---
title: "TargetPointer"
description: "Component that points at a Target elsewhere on the prefab, so code looking up an ITargetPointer on this object finds that target."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TargetPointer

A **class** in `Root.Township`, `Alta.Intelligence`.

Component that points at a `Target` elsewhere on the prefab, so code looking up an `ITargetPointer` on this object finds that target.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** `MonoBehaviour`, [`ITargetPointer`](/game-api/types/alta-intelligence/itargetpointer)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"TargetPointer()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-target" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/target">{"Target"}</Link>{" target"}</code> | Serialized backing field for `Target`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-target-2" /><code><Link to="/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" Target { get; }"}</code> | The target pointed at. |

## Methods

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-find" /><code>{"private void Find()"}</code> | Editor context menu "Find in children": sets `target` to the first `Target` in the children. |

</details>
