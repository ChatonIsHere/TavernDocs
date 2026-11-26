---
title: "ConfirmJoinMessage"
description: "Internal message the server sends back to a client's join request: allowed or not, whether prerequisites are running, a join result and an error text."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ConfirmJoinMessage

A **internal struct** in `Root.Township`, `Alta.Networking`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Internal message the server sends back to a client's join request: allowed or not, whether prerequisites are running, a join result and an error text. Server writes, client reads.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ConfirmJoinMessage(bool isAllowed, bool isDoingPrerequisites, "}<Link to="/game-api/types/global-c-d/clientjoinresult">{"ClientJoinResult"}</Link>{" joinResult, "}<Link to="/game-api/types/alta-networking/joinedserverinfo">{"JoinedServerInfo"}</Link>{" serverInfo = null, string error = null)"}</code> | Creates a `ConfirmJoinMessage` from `isAllowed`, `isDoingPrerequisites`, `serverInfo` and `error`. |
| <Link id="m-ctor-2" /><code>{"ConfirmJoinMessage(bool isAllowed, bool isDoingPrerequisites, "}<Link to="/game-api/types/alta-networking/joinedserverinfo">{"JoinedServerInfo"}</Link>{" serverInfo = null, string error = null)"}</code> | Creates a `ConfirmJoinMessage` from `isAllowed`, `isDoingPrerequisites`, `serverInfo` and `error`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-error" /><code>{"private string error"}</code> | Backing field for `Error`. |
| <Link id="m-isallowed" /><code>{"private bool isAllowed"}</code> | Backing field for `IsAllowed`. |
| <Link id="m-isdoingprerequisites" /><code>{"private bool isDoingPrerequisites"}</code> | Backing field for `IsDoingPrerequisites`. |
| <Link id="m-joinresult" /><code>{"private int joinResult"}</code> | Backing field for `JoinResult`, stored as an int for serialization. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-error-2" /><code>{"string Error { get; }"}</code> | Why the join was refused. Only sent when `IsAllowed` is false. |
| <Link id="m-isallowed-2" /><code>{"bool IsAllowed { get; }"}</code> | Whether the server accepted the join. |
| <Link id="m-isdoingprerequisites-2" /><code>{"bool IsDoingPrerequisites { get; }"}</code> | True on the first accepted reply, sent while the server runs join prerequisites. A second reply with this false finishes the join. |
| <Link id="m-joinedserverinfo" /><code><Link to="/game-api/types/alta-networking/joinedserverinfo">{"JoinedServerInfo"}</Link>{" "}<Link to="/game-api/types/alta-networking/joinedserverinfo">{"JoinedServerInfo"}</Link>{" { get; set; }"}</code> | Info about the server, only sent when allowed and doing prerequisites. |
| <Link id="m-joinresult-2" /><code><Link to="/game-api/types/global-c-d/clientjoinresult">{"ClientJoinResult"}</Link>{" JoinResult { get; }"}</code> | The `ClientJoinResult` code; defaults to JoinAccepted. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Reads or writes the message. The error is only sent when refused, and server info only during prerequisites. |

## Used in

Members of other types that take, return or hold a `ConfirmJoinMessage`:

[`JoinServerPipeline.OnServerRejectedRequest`](/game-api/types/global-i-l/joinserverpipeline#m-onserverrejectedrequest).
