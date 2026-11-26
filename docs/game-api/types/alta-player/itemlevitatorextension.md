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

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected ItemLevitatorExtension()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-levitator" /><code>{"protected "}<Link to="/game-api/types/alta-player/itemlevitator">{"ItemLevitator"}</Link>{" levitator"}</code> | The `ItemLevitator` on the same object. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-isvalid" /><code>{"protected abstract bool IsValid()"}</code> | Subclasses return whether the item may hover now. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Finds the `ItemLevitator` and hooks its `CheckHover` event. |
| <Link id="m-checkhover" /><code>{"private void CheckHover(ref bool isValid)"}</code> | Handler for the levitator's check: clears the valid flag if `IsValid` is false. |

</details>
