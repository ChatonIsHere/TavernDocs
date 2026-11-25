---
title: "ConfirmJoinMessage"
description: "struct ConfirmJoinMessage in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ConfirmJoinMessage

A **internal struct** in `Root.Township`, `Alta.Networking`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ConfirmJoinMessage(bool isAllowed, bool isDoingPrerequisites, "}<Link to="/game-api/types/global-c-d/clientjoinresult">{"ClientJoinResult"}</Link>{" joinResult, "}<Link to="/game-api/types/alta-networking/joinedserverinfo">{"JoinedServerInfo"}</Link>{" serverInfo = null, string error = null)"}</code> |
| <Link id="m-ctor-2" /><code>{"ConfirmJoinMessage(bool isAllowed, bool isDoingPrerequisites, "}<Link to="/game-api/types/alta-networking/joinedserverinfo">{"JoinedServerInfo"}</Link>{" serverInfo = null, string error = null)"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-error" /><code>{"private string error"}</code> |
| <Link id="m-isallowed" /><code>{"private bool isAllowed"}</code> |
| <Link id="m-isdoingprerequisites" /><code>{"private bool isDoingPrerequisites"}</code> |
| <Link id="m-joinresult" /><code>{"private int joinResult"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-error-2" /><code>{"string Error { get; }"}</code> |
| <Link id="m-isallowed-2" /><code>{"bool IsAllowed { get; }"}</code> |
| <Link id="m-isdoingprerequisites-2" /><code>{"bool IsDoingPrerequisites { get; }"}</code> |
| <Link id="m-joinedserverinfo" /><code><Link to="/game-api/types/alta-networking/joinedserverinfo">{"JoinedServerInfo"}</Link>{" "}<Link to="/game-api/types/alta-networking/joinedserverinfo">{"JoinedServerInfo"}</Link>{" { get; set; }"}</code> |
| <Link id="m-joinresult-2" /><code><Link to="/game-api/types/global-c-d/clientjoinresult">{"ClientJoinResult"}</Link>{" JoinResult { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |

## Used in

Members of other types that take, return or hold a `ConfirmJoinMessage`:

[`JoinServerPipeline.OnServerRejectedRequest`](/game-api/types/global-i-l/joinserverpipeline#m-onserverrejectedrequest).
