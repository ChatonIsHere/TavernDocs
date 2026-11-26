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

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** `MonoBehaviour`, [`ITargetPointer`](/mod/game-api/types/alta-intelligence/itargetpointer)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TargetPointer()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-target" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/target">{"Target"}</Link>{" target"}</code> | <span className="api-desc">Serialized backing field for `Target`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-target-2" /><code><Link to="/mod/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" Target { get; }"}</code> | <span className="api-desc">The target pointed at.</span> |

## Methods

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-find" /><code>{"private void Find()"}</code> | <span className="api-desc">Editor context menu "Find in children": sets `target` to the first `Target` in the children.</span> |

</details>
