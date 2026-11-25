---
title: "PlayerDockDropper"
description: "Empties a dock when the player's scale changes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerDockDropper

A **class** in `Root.Township`, no namespace.

Empties a dock when the player's scale changes.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `RequireComponent`
- **Documented in** [Player inventory](/game-api/items/player-inventory)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PlayerDockDropper()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-dock" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock"}</code> |
| <Link id="m-player" /><code>{"private "}<Link to="/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" player"}</code> |

</details>

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |
| <Link id="m-scalechanged" /><code>{"private void ScaleChanged("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, float oldScale, float newScale)"}</code> |

</details>
