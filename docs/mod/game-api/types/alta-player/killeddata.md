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

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Derived types** [`ObjectKilledData`](/mod/game-api/types/alta-player/objectkilleddata), [`PlayerKilledData`](/mod/game-api/types/alta-player/playerkilleddata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"KilledData("}<Link to="/mod/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" killingHit)"}</code> | <span className="api-desc">Creates a `KilledData` from `killingHit`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-killerplayer" /><code><Link to="/mod/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" killerPlayer"}</code> | <span className="api-desc">API user info of the player who held the weapon, or null if no player did.</span> |
| <Link id="m-source" /><code><Link to="/mod/game-api/types/alta-items/damagesource">{"DamageSource"}</Link>{" source"}</code> | <span className="api-desc">The hit's damage source, or `Unknown` if there was no hit.</span> |
| <Link id="m-toolwielder" /><code>{"string toolWielder"}</code> | <span className="api-desc">Name of the object that wielded the tool, for impact hits with a wielder.</span> |
| <Link id="m-usedtool" /><code>{"string usedTool"}</code> | <span className="api-desc">Name of the tool used, for hits made with a tool.</span> |
