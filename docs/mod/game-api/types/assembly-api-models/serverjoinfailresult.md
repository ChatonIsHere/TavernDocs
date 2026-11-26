---
title: "ServerJoinFailResult"
description: "Why the API refused a server join, such as not allowed, not online, banned, wrong game version or player limit reached."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerJoinFailResult

An **enum** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

Why the API refused a server join, such as not allowed, not online, banned, wrong game version or player limit reached.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Values

| Member |
| --- |
| <Link id="m-banneduser" /><code>{"BannedUser = 10"}</code> |
| <Link id="m-couldntaccesscluster" /><code>{"CouldntAccessCluster = 5"}</code> |
| <Link id="m-couldntallocate" /><code>{"CouldntAllocate = 7"}</code> |
| <Link id="m-couldntallocatewithmessage" /><code>{"CouldntAllocateWithMessage = 13"}</code> |
| <Link id="m-couldntverifyuser" /><code>{"CouldntVerifyUser = 11"}</code> |
| <Link id="m-lockedserver" /><code>{"LockedServer = 8"}</code> |
| <Link id="m-notallowedtojoinserver" /><code>{"NotAllowedToJoinServer = 2"}</code> |
| <Link id="m-notallowedtoseeserver" /><code>{"NotAllowedToSeeServer = 1"}</code> |
| <Link id="m-nothing" /><code>{"Nothing = 0"}</code> |
| <Link id="m-notlaunched" /><code>{"NotLaunched = 4"}</code> |
| <Link id="m-notonline" /><code>{"NotOnline = 3"}</code> |
| <Link id="m-playerlimitreached" /><code>{"PlayerLimitReached = 12"}</code> |
| <Link id="m-webrequestfailed" /><code>{"WebRequestFailed = 6"}</code> |
| <Link id="m-wrongclientgameversion" /><code>{"WrongClientGameVersion = 9"}</code> |

## Used in

Members of other types that take, return or hold a `ServerJoinFailResult`:

<div className="api-used-in">

[`ServerJoinResult.FailReason`](/mod/game-api/types/assembly-api-models/serverjoinresult#m-failreason), [`ServerJoinResult.SetToFailState`](/mod/game-api/types/assembly-api-models/serverjoinresult#m-settofailstate).

</div>
