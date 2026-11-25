---
title: "ClientJoinResult"
description: "Enum of join outcomes, 1 to 13 from Alta's API, 30 to 35 from the connection."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ClientJoinResult

An **enum** in `Root.Township`, no namespace.

Enum of join outcomes, 1 to 13 from Alta's API, 30 to 35 from the connection.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Documented in** [Joining a server](/game-api/networking/joining)

## Values

| Member | What it is |
| --- | --- |
| <Link id="m-banneduser" /><code>{"BannedUser = 10"}</code> |  |
| <Link id="m-cancelled" /><code>{"Cancelled = 34"}</code> |  |
| <Link id="m-connectionfailed" /><code>{"ConnectionFailed = 30"}</code> |  |
| <Link id="m-connectionlost" /><code>{"ConnectionLost = 31"}</code> |  |
| <Link id="m-couldntaccesscluster" /><code>{"CouldntAccessCluster = 5"}</code> |  |
| <Link id="m-couldntallocate" /><code>{"CouldntAllocate = 7"}</code> |  |
| <Link id="m-couldntallocatewithmessage" /><code>{"CouldntAllocateWithMessage = 13"}</code> |  |
| <Link id="m-couldntverifyuser" /><code>{"CouldntVerifyUser = 11"}</code> |  |
| <Link id="m-duplicateconnection" /><code>{"DuplicateConnection = 35"}</code> |  |
| <Link id="m-joinaccepted" /><code>{"JoinAccepted = 33"}</code> |  |
| <Link id="m-joinrejected" /><code>{"JoinRejected = 32"}</code> |  |
| <Link id="m-lockedserver" /><code>{"LockedServer = 8"}</code> |  |
| <Link id="m-notallowedtojoinserver" /><code>{"NotAllowedToJoinServer = 2"}</code> |  |
| <Link id="m-notallowedtoseeserver" /><code>{"NotAllowedToSeeServer = 1"}</code> |  |
| <Link id="m-notlaunched" /><code>{"NotLaunched = 4"}</code> |  |
| <Link id="m-notonline" /><code>{"NotOnline = 3"}</code> |  |
| <Link id="m-playerlimitreached" /><code>{"PlayerLimitReached = 12"}</code> |  |
| <Link id="m-webrequestfailed" /><code>{"WebRequestFailed = 6"}</code> |  |
| <Link id="m-wrongclientgameversion" /><code>{"WrongClientGameVersion = 9"}</code> |  |

## Used in

Members of other types that take, return or hold a `ClientJoinResult`:

[`ConfirmJoinMessage.ConfirmJoinMessage`](/game-api/types/alta-networking/confirmjoinmessage#m-ctor), [`ConfirmJoinMessage.JoinResult`](/game-api/types/alta-networking/confirmjoinmessage#m-joinresult-2), [`JoinResult.FailedResult`](/game-api/types/alta-networking/joinresult#m-failedresult), [`JoinResult.Result`](/game-api/types/alta-networking/joinresult#m-result).
