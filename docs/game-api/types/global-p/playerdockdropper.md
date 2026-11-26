---
title: "PlayerDockDropper"
description: "Empties a dock on the player's body whenever the player's scale changes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerDockDropper

A **class** in `Root.Township`, no namespace.

Empties a dock on the player's body whenever the player's scale changes.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `RequireComponent`
- **Documented in** [Player inventory](/game-api/items/player-inventory)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerDockDropper()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-dock" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock"}</code> | The dock on the same object. |
| <Link id="m-player" /><code>{"private "}<Link to="/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" player"}</code> | The player character this dock belongs to. |

</details>

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks the player's `ScaleChanged`. |
| <Link id="m-scalechanged" /><code>{"private void ScaleChanged("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, float oldScale, float newScale)"}</code> | Undocks everything from the dock when the scale actually changes. |

</details>
