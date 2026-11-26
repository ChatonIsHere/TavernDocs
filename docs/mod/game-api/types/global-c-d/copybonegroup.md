---
title: "CopyBoneGroup"
description: "Group of CopyBone components that turns them on together, or off after a short delay."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CopyBoneGroup

A **class** in `Root.Township`, the global namespace.

Group of `CopyBone` components that turns them on together, or off after a short delay.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`ComponentGroup<CopyBone>`](/mod/game-api/types/global-c-d/componentgroup-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CopyBoneGroup()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setenable" /><code>{"void SetEnable(bool isEnabled)"}</code> | <span className="api-desc">Enables all at once, or disables them all after 0.5 seconds.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-timeddisable" /><code>{"private IEnumerator TimedDisable() (iterator)"}</code> | <span className="api-desc">Coroutine that waits 0.5 seconds then disables them.</span> |

</details>
