---
title: "PlayerLandmarkMode"
description: "Whose player markers show on the map: everyone, friends only, or none."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerLandmarkMode

An **enum** in `Root.Township`, `Alta.Map`.

Whose player markers show on the map: everyone, friends only, or none.

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)

## Values

| Member |
| --- |
| <Link id="m-friendsonly" /><code>{"FriendsOnly = 1"}</code> |
| <Link id="m-hidden" /><code>{"Hidden = 2"}</code> |
| <Link id="m-showall" /><code>{"ShowAll = 0"}</code> |

## Used in

Members of other types that take, return or hold a `PlayerLandmarkMode`:

[`ServerSettings.PlayerLandmarkMode`](/mod/game-api/types/alta-utilities/serversettings#m-playerlandmarkmode).
