---
title: "PlayerRoleProvider"
description: "Server: gives a player a fixed account role through the Alta web API when called, for example from a UnityEvent."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerRoleProvider

A **class** in `Root.Township`, the global namespace.

Server: gives a player a fixed account role through the Alta web API when called, for example from a UnityEvent.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerRoleProvider()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-roletoprovide" /><code>{"private "}<Link to="/mod/game-api/types/assembly-api-models/assignableroles">{"AssignableRoles"}</Link>{" roleToProvide"}</code> | The role to give. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-giveroletoplayer" /><code>{"void GiveRoleToPlayer("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Asks the API to give `roleToProvide` to the player's account. Does not wait for the result. |
