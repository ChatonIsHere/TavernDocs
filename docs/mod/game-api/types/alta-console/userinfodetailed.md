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
| <Link id="m-ctor" /><code>{"UserInfoDetailed("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Creates an `UserInfoDetailed` from `player`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-body" /><code><Link to="/mod/game-api/types/alta-console/networkentityinfo">{"NetworkEntityInfo"}</Link>{" Body { get; set; }"}</code> | <span className="api-desc">The player's body entity.</span> |
| <Link id="m-chunk" /><code><Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" "}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" { get; set; }"}</code> | <span className="api-desc">The chunk the player's body is in.</span> |
| <Link id="m-headforward" /><code>{"Vector3? HeadForward { get; set; }"}</code> | <span className="api-desc">World forward direction of the head.</span> |
| <Link id="m-headposition" /><code>{"Vector3? HeadPosition { get; set; }"}</code> | <span className="api-desc">World position of the head.</span> |
| <Link id="m-headup" /><code>{"Vector3? HeadUp { get; set; }"}</code> | <span className="api-desc">World up direction of the head.</span> |
| <Link id="m-lefthandforward" /><code>{"Vector3? LeftHandForward { get; set; }"}</code> | <span className="api-desc">Forward direction of the left hand grip point.</span> |
| <Link id="m-lefthandposition" /><code>{"Vector3? LeftHandPosition { get; set; }"}</code> | <span className="api-desc">World position of the left hand grip point.</span> |
| <Link id="m-lefthandup" /><code>{"Vector3? LeftHandUp { get; set; }"}</code> | <span className="api-desc">Up direction of the left hand grip point.</span> |
| <Link id="m-position" /><code>{"Vector3? Position { get; set; }"}</code> | <span className="api-desc">World position of the player controller, or null with no body.</span> |
| <Link id="m-righthandforward" /><code>{"Vector3? RightHandForward { get; set; }"}</code> | <span className="api-desc">Forward direction of the right hand grip point.</span> |
| <Link id="m-righthandposition" /><code>{"Vector3? RightHandPosition { get; set; }"}</code> | <span className="api-desc">World position of the right hand grip point.</span> |
| <Link id="m-righthandup" /><code>{"Vector3? RightHandUp { get; set; }"}</code> | <span className="api-desc">Up direction of the right hand grip point.</span> |
