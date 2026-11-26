---
title: "PlayerDockDropper"
description: "Empties a dock on the player's body whenever the player's scale changes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerDockDropper

A **class** in `Root.Township`, the global namespace.

Empties a dock on the player's body whenever the player's scale changes.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `RequireComponent`
- **Documented in** [Player inventory](/mod/game-api/items/player-inventory)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerDockDropper()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-dock" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock"}</code> | <span className="api-desc">The dock on the same object.</span> |
| <Link id="m-player" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" player"}</code> | <span className="api-desc">The player character this dock belongs to.</span> |

</details>

## Methods

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Hooks the player's `ScaleChanged`.</span> |
| <Link id="m-scalechanged" /><code>{"private void ScaleChanged("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, float oldScale, float newScale)"}</code> | <span className="api-desc">Undocks everything from the dock when the scale actually changes.</span> |

</details>
