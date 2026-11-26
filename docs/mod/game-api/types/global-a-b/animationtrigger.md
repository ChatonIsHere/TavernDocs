---
title: "AnimationTrigger"
description: "Fires inspector events when the object is enabled or disabled."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AnimationTrigger

A **class** in `Root.Township`, the global namespace.

Fires inspector events when the object is enabled or disabled. The disable event is skipped while the game is quitting.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AnimationTrigger()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondisable" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" onDisable"}</code> | Backing field for `Disabled`. |
| <Link id="m-onenable" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" onEnable"}</code> | Backing field for `Enabled`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-disabled" /><code><Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" Disabled { get; }"}</code> | Event fired on disable (not while quitting). |
| <Link id="m-enabled" /><code><Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" Enabled { get; }"}</code> | Event fired on enable. |

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondisable-2" /><code>{"private void OnDisable()"}</code> | Invokes `onDisable` unless the application is quitting. |
| <Link id="m-onenable-2" /><code>{"private void OnEnable()"}</code> | Invokes `onEnable`. |

</details>
