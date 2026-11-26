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

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-serverfps" /><code>{"private static float serverFPS"}</code> | Backing field for `ServerFPS`. |
| <Link id="m-servermessage" /><code>{"private static string serverMessage"}</code> | Backing field for `ServerMessage`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-serverfps-2" /><code>{"static float ServerFPS { get; }"}</code> | Server frame rate from the last message. |
| <Link id="m-servermessage-2" /><code>{"static string ServerMessage { get; }"}</code> | Text from the last message. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serialize" /><code>{"static void Serialize("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Writes or reads the FPS (0 to 200, steps of 0.1) and the message. |
| <Link id="m-set" /><code>{"static void Set()"}</code> | Server: sets the FPS from `FPSCounter.FPS`. |
| <Link id="m-setmessage" /><code>{"static void SetMessage(string message)"}</code> | Sets the text to send. |
