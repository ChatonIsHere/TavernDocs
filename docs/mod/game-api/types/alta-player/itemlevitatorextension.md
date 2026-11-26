---
title: "ItemLevitatorExtension"
description: "Base component that adds a condition to the ItemLevitator on the same object: hovering is only allowed while IsValid returns true."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ItemLevitatorExtension

An **abstract class** in `Root.Township`, `Alta.Progression.Skills`.

Base component that adds a condition to the `ItemLevitator` on the same object: hovering is only allowed while `IsValid` returns true.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected ItemLevitatorExtension()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-levitator" /><code>{"protected "}<Link to="/mod/game-api/types/alta-player/itemlevitator">{"ItemLevitator"}</Link>{" levitator"}</code> | <span className="api-desc">The `ItemLevitator` on the same object.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-isvalid" /><code>{"protected abstract bool IsValid()"}</code> | <span className="api-desc">Subclasses return whether the item may hover now.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Finds the `ItemLevitator` and hooks its `CheckHover` event.</span> |
| <Link id="m-checkhover" /><code>{"private void CheckHover(ref bool isValid)"}</code> | <span className="api-desc">Handler for the levitator's check: clears the valid flag if `IsValid` is false.</span> |

</details>
