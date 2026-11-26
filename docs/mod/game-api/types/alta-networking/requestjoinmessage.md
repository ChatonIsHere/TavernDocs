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

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RequestJoinMessage()"}</code> | <span className="api-desc">Creates a `RequestJoinMessage` from `playerId`, `userCredentials`, `playerMode`, `platformTarget` and `version`.</span> |
| <Link id="m-ctor-2" /><code>{"RequestJoinMessage(int playerId, string userCredentials, "}<Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" playerMode, "}<Link to="/mod/game-api/types/assembly-other/platformtarget">{"PlatformTarget"}</Link>{" platformTarget, string version)"}</code> | <span className="api-desc">Creates a `RequestJoinMessage` from `playerId`, `userCredentials`, `playerMode`, `platformTarget` and `version`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-platformtarget" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/platformtarget">{"PlatformTarget"}</Link>{" platformTarget"}</code> | <span className="api-desc">Backing field for `PlatformTarget`.</span> |
| <Link id="m-playerid" /><code>{"private int playerId"}</code> | <span className="api-desc">Backing field for `PlayerId`.</span> |
| <Link id="m-playermode" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" playerMode"}</code> | <span className="api-desc">Backing field for `PlayerMode`.</span> |
| <Link id="m-usercredentials" /><code>{"private string userCredentials"}</code> | <span className="api-desc">Backing field for `UserCredentials`.</span> |
| <Link id="m-version" /><code>{"private string version"}</code> | <span className="api-desc">Backing field for `Version`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-platformtarget-2" /><code><Link to="/mod/game-api/types/assembly-other/platformtarget">{"PlatformTarget"}</Link>{" "}<Link to="/mod/game-api/types/assembly-other/platformtarget">{"PlatformTarget"}</Link>{" { get; }"}</code> | <span className="api-desc">The platform the player is on.</span> |
| <Link id="m-playerid-2" /><code>{"int PlayerId { get; }"}</code> | <span className="api-desc">The player's user id.</span> |
| <Link id="m-playermode-2" /><code><Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" "}<Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" { get; }"}</code> | <span className="api-desc">The player mode requested.</span> |
| <Link id="m-usercredentials-2" /><code>{"string UserCredentials { get; }"}</code> | <span className="api-desc">The credentials string the server checks to let the player in.</span> |
| <Link id="m-version-2" /><code>{"string Version { get; }"}</code> | <span className="api-desc">The client's game version string.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Writes or reads all fields; the player mode takes 7 bits and the platform 4.</span> |
