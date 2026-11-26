---
title: "NetworkSceneManager"
description: "Static entry point to the running network scene and to which side this process is (server, client or local test)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkSceneManager

A **static class** in `Root.Township`, the global namespace.

Static entry point to the running network scene and to which side this process is (server, client or local test).

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Attributes** `Extension`

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-sceneloadwait" /><code>{"static TaskCompletionSource<bool> SceneLoadWait"}</code> | <span className="api-desc">Completes when the network scene has finished starting. The server handler awaits it; it is replaced when the scene shuts down.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-current" /><code>{"static "}<Link to="/mod/game-api/types/alta-networking/inetworkscene">{"INetworkScene"}</Link>{" Current { get; set; }"}</code> | <span className="api-desc">The running network scene.</span> |
| <Link id="m-currentinternal" /><code>{"static "}<Link to="/mod/game-api/types/alta-networking/inetworksceneinternal">{"INetworkSceneInternal"}</Link>{" CurrentInternal { get; set; }"}</code> | <span className="api-desc">Internal interface to the running scene, used by networking code.</span> |
| <Link id="m-islocaltest" /><code>{"static bool IsLocalTest { get; set; }"}</code> | <span className="api-desc">True in local test mode, where the server and a player run in one process.</span> |
| <Link id="m-isremoteserver" /><code>{"static bool IsRemoteServer { get; }"}</code> | <span className="api-desc">True on a real server: `IsServer` and not a local test.</span> |
| <Link id="m-isserver" /><code>{"static bool IsServer { get; set; }"}</code> | <span className="api-desc">True on the server, including local test.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-finishedembeddedsync" /><code>{"static event Action FinishedEmbeddedSync"}</code> | <span className="api-desc">Raised on a client once the last embedded scene entity has synced.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onscenesyncfinished" /><code>{"static void OnSceneSyncFinished()"}</code> | <span className="api-desc">Raises `FinishedEmbeddedSync`. Called by the scene when embedded sync ends.</span> |
| <Link id="m-serversendonly" /><code>{"static void ServerSendOnly("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Stream extension that stops a dedicated server from reading, so the value only flows from server to clients.</span> |
