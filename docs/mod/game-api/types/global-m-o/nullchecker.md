---
title: "NullChecker"
description: "Fires one of two events depending on whether a value passed to it is null."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NullChecker

A **class** in `Root.Township`, the global namespace.

Fires one of two events depending on whether a value passed to it is null.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NullChecker()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isnotnull" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" isNotNull"}</code> | Event fired when the value is not null. |
| <Link id="m-isnull" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" isNull"}</code> | Event fired when the value is null. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkvalue" /><code>{"void CheckValue(object toCheck)"}</code> | Fires `isNull` or `isNotNull` for the given value. |
