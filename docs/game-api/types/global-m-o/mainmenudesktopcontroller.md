---
title: "MainMenuDesktopController"
description: "Player controller for the desktop (non VR) main menu; only supplies the head transform."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MainMenuDesktopController

A **class** in `Root.Township`, no namespace.

Player controller for the desktop (non VR) main menu; only supplies the head transform.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** [`PlayerController`](/game-api/types/global-p/playercontroller)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MainMenuDesktopController()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-head" /><code>{"private Transform head"}</code> | The camera head transform. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-head-2" /><code>{"override Transform Head { get; }"}</code> | Returns `head`. |
| <Link id="m-headfollow" /><code>{"override Transform HeadFollow { get; }"}</code> | Returns `head`. |
