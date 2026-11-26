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

- **Listed in** [Networking and servers](/game-api/types/alta-networking)

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isrequesting" /><code>{"private static bool isRequesting"}</code> | Backing field for `IsRequesting`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isrequesting-2" /><code>{"static bool IsRequesting { get; }"}</code> | Whether the last message asked for diagnostics. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-set" /><code>{"static void Set(bool isRequestingServerDiagnostics)"}</code> | Sets whether to ask for diagnostics in the next message. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-serialize" /><code>{"internal static void Serialize("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Writes or reads the flag; on read the server records it in `ServerDiagnosticsManager.PlayersToSendTo`. |

</details>
