---
title: "PlayerLandmark"
description: "The map marker for a player."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerLandmark

A **class** in `Root.Township`, `Alta.Map`.

The map marker for a player. Which icon other players see depends on the server's `PlayerLandmarkMode` and friendship.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** [`MovingLandmark`](/game-api/types/alta-world/movinglandmark)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerLandmark()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-friendicon" /><code>{"private "}<Link to="/game-api/types/alta-world/landmarkicon">{"LandmarkIcon"}</Link>{" friendIcon"}</code> | Icon shown to players who are friends with this player. |
| <Link id="m-playercontroller" /><code>{"private "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController"}</code> | The player this marker follows. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-customizeicon" /><code>{"override void CustomizeIcon("}<Link to="/game-api/types/alta-world/markerinfo">{"MarkerInfo"}</Link>{" info, "}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" target)"}</code> | Hides the icon if the mode is Hidden, shows `friendIcon` to friends, hides it from non-friends in FriendsOnly mode, else the normal icon. |
