---
title: "ServerDiagnosticsMessage"
description: "Message the server sends to clients that asked for diagnostics: its frame rate and a text message."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerDiagnosticsMessage

A **static class** in `Root.Township`, `Alta.Networking`.

Message the server sends to clients that asked for diagnostics: its frame rate and a text message.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-serverfps" /><code>{"private static float serverFPS"}</code> | <span className="api-desc">Backing field for `ServerFPS`.</span> |
| <Link id="m-servermessage" /><code>{"private static string serverMessage"}</code> | <span className="api-desc">Backing field for `ServerMessage`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-serverfps-2" /><code>{"static float ServerFPS { get; }"}</code> | <span className="api-desc">Server frame rate from the last message.</span> |
| <Link id="m-servermessage-2" /><code>{"static string ServerMessage { get; }"}</code> | <span className="api-desc">Text from the last message.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serialize" /><code>{"static void Serialize("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Writes or reads the FPS (0 to 200, steps of 0.1) and the message.</span> |
| <Link id="m-set" /><code>{"static void Set()"}</code> | <span className="api-desc">Server: sets the FPS from `FPSCounter.FPS`.</span> |
| <Link id="m-setmessage" /><code>{"static void SetMessage(string message)"}</code> | <span className="api-desc">Sets the text to send.</span> |
