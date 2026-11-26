---
title: "UserInfoDetailed"
description: "A UserInfo with a player's body, chunk and head and hand transforms, returned by console commands that report player details."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# UserInfoDetailed

A **class** in `Root.Township`, `Alta.Console.Commands`.

A `UserInfo` with a player's body, chunk and head and hand transforms, returned by console commands that report player details.

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)
- **Inherits or implements** [`UserInfo`](/mod/game-api/types/assembly-api-models/userinfo)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"UserInfoDetailed("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Creates an `UserInfoDetailed` from `player`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-body" /><code><Link to="/mod/game-api/types/alta-console/networkentityinfo">{"NetworkEntityInfo"}</Link>{" Body { get; set; }"}</code> | The player's body entity. |
| <Link id="m-chunk" /><code><Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" "}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" { get; set; }"}</code> | The chunk the player's body is in. |
| <Link id="m-headforward" /><code>{"Vector3? HeadForward { get; set; }"}</code> | World forward direction of the head. |
| <Link id="m-headposition" /><code>{"Vector3? HeadPosition { get; set; }"}</code> | World position of the head. |
| <Link id="m-headup" /><code>{"Vector3? HeadUp { get; set; }"}</code> | World up direction of the head. |
| <Link id="m-lefthandforward" /><code>{"Vector3? LeftHandForward { get; set; }"}</code> | Forward direction of the left hand grip point. |
| <Link id="m-lefthandposition" /><code>{"Vector3? LeftHandPosition { get; set; }"}</code> | World position of the left hand grip point. |
| <Link id="m-lefthandup" /><code>{"Vector3? LeftHandUp { get; set; }"}</code> | Up direction of the left hand grip point. |
| <Link id="m-position" /><code>{"Vector3? Position { get; set; }"}</code> | World position of the player controller, or null with no body. |
| <Link id="m-righthandforward" /><code>{"Vector3? RightHandForward { get; set; }"}</code> | Forward direction of the right hand grip point. |
| <Link id="m-righthandposition" /><code>{"Vector3? RightHandPosition { get; set; }"}</code> | World position of the right hand grip point. |
| <Link id="m-righthandup" /><code>{"Vector3? RightHandUp { get; set; }"}</code> | Up direction of the right hand grip point. |
