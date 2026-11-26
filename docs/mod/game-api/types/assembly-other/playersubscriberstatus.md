---
title: "PlayerSubscriberStatus"
description: "A player's account tier as the Alta API reports it: none, subscriber, developer or Alta mod."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerSubscriberStatus

An **enum** in `Alta.Authentication`, the global namespace.

A player's account tier as the Alta API reports it: none, subscriber, developer or Alta mod.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Documented in** [Player](/mod/game-api/networking/player#playersubscriberstatus), [Alta assemblies](/mod/game-api/console-and-utilities/alta-assemblies)

## Values

| Member |
| --- |
| <Link id="m-altamod" /><code>{"AltaMod = 3"}</code> |
| <Link id="m-developer" /><code>{"Developer = 2"}</code> |
| <Link id="m-none" /><code>{"None = 0"}</code> |
| <Link id="m-subscriber" /><code>{"Subscriber = 1"}</code> |

## Used in

Members of other types that take, return or hold a `PlayerSubscriberStatus`:

[`CosmeticOwnershipManager.LoadFor`](/mod/game-api/types/alta-customization/cosmeticownershipmanager#m-loadfor-2), [`PurchasedList.GetForPlayer`](/mod/game-api/types/alta-customization/purchasedlist#m-getforplayer-2), [`PurchasedList.PurchasedList`](/mod/game-api/types/alta-customization/purchasedlist#m-ctor), [`PurchasedList.status`](/mod/game-api/types/alta-customization/purchasedlist#m-status), [`PlayerProxy.status`](/mod/game-api/types/alta-player/playerproxy#m-status), [`PlayerProxy.Status`](/mod/game-api/types/alta-player/playerproxy#m-status-2), [`PlayerProxyData.status`](/mod/game-api/types/alta-player/playerproxydata#m-status), [`UserInfoAndRole.MemberStatus`](/mod/game-api/types/global-t-x/userinfoandrole#m-memberstatus), [`UserInfoAndRole.UserInfoAndRole`](/mod/game-api/types/global-t-x/userinfoandrole#m-ctor-2), [`UserPermissions.GetPlayerSubscriberStatus`](/mod/game-api/types/assembly-other/userpermissions#m-getplayersubscriberstatus).
