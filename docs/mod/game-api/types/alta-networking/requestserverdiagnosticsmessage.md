---
title: "RequestServerDiagnosticsMessage"
description: "Message a client sends to turn server diagnostics on or off for itself."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RequestServerDiagnosticsMessage

A **static class** in `Root.Township`, `Alta.Networking`.

Message a client sends to turn server diagnostics on or off for itself.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isrequesting" /><code>{"private static bool isRequesting"}</code> | <span className="api-desc">Backing field for `IsRequesting`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isrequesting-2" /><code>{"static bool IsRequesting { get; }"}</code> | <span className="api-desc">Whether the last message asked for diagnostics.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-set" /><code>{"static void Set(bool isRequestingServerDiagnostics)"}</code> | <span className="api-desc">Sets whether to ask for diagnostics in the next message.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-serialize" /><code>{"internal static void Serialize("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Writes or reads the flag; on read the server records it in `ServerDiagnosticsManager.PlayersToSendTo`.</span> |

</details>
