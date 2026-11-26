---
title: "KilledData"
description: "What killed a player, built from the killing hit: the tool, who held it and the killing player if there was one."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# KilledData

A **class** in `Root.Township`, `Alta.PlayerStates`.

What killed a player, built from the killing hit: the tool, who held it and the killing player if there was one.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Derived types** [`ObjectKilledData`](/game-api/types/alta-player/objectkilleddata), [`PlayerKilledData`](/game-api/types/alta-player/playerkilleddata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"KilledData("}<Link to="/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" killingHit)"}</code> | Creates a `KilledData` from `killingHit`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-killerplayer" /><code><Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" killerPlayer"}</code> | API user info of the player who held the weapon, or null if no player did. |
| <Link id="m-source" /><code><Link to="/game-api/types/alta-items/damagesource">{"DamageSource"}</Link>{" source"}</code> | The hit's damage source, or `Unknown` if there was no hit. |
| <Link id="m-toolwielder" /><code>{"string toolWielder"}</code> | Name of the object that wielded the tool, for impact hits with a wielder. |
| <Link id="m-usedtool" /><code>{"string usedTool"}</code> | Name of the tool used, for hits made with a tool. |
