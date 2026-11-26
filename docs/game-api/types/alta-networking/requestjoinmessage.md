---
title: "RequestJoinMessage"
description: "The message a client sends to ask to join a server: player id, credentials, player mode, platform and game version."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RequestJoinMessage

A **internal class** in `Root.Township`, `Alta.Networking`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

The message a client sends to ask to join a server: player id, credentials, player mode, platform and game version. Built by `JoinServerPipeline` and read by the server's connection handler.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"RequestJoinMessage()"}</code> |
| <Link id="m-ctor-2" /><code>{"RequestJoinMessage(int playerId, string userCredentials, "}<Link to="/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" playerMode, "}<Link to="/game-api/types/assembly-other/platformtarget">{"PlatformTarget"}</Link>{" platformTarget, string version)"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-platformtarget" /><code>{"private "}<Link to="/game-api/types/assembly-other/platformtarget">{"PlatformTarget"}</Link>{" platformTarget"}</code> | Backing field for `PlatformTarget`. |
| <Link id="m-playerid" /><code>{"private int playerId"}</code> | Backing field for `PlayerId`. |
| <Link id="m-playermode" /><code>{"private "}<Link to="/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" playerMode"}</code> | Backing field for `PlayerMode`. |
| <Link id="m-usercredentials" /><code>{"private string userCredentials"}</code> | Backing field for `UserCredentials`. |
| <Link id="m-version" /><code>{"private string version"}</code> | Backing field for `Version`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-platformtarget-2" /><code><Link to="/game-api/types/assembly-other/platformtarget">{"PlatformTarget"}</Link>{" "}<Link to="/game-api/types/assembly-other/platformtarget">{"PlatformTarget"}</Link>{" { get; }"}</code> | The platform the player is on. |
| <Link id="m-playerid-2" /><code>{"int PlayerId { get; }"}</code> | The player's user id. |
| <Link id="m-playermode-2" /><code><Link to="/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" "}<Link to="/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" { get; }"}</code> | The player mode requested. |
| <Link id="m-usercredentials-2" /><code>{"string UserCredentials { get; }"}</code> | The credentials string the server checks to let the player in. |
| <Link id="m-version-2" /><code>{"string Version { get; }"}</code> | The client's game version string. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Writes or reads all fields; the player mode takes 7 bits and the platform 4. |
