---
title: "NetworkSceneManager"
description: "static class NetworkSceneManager in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkSceneManager

A **static class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Attributes** `Extension`

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-sceneloadwait" /><code>{"static TaskCompletionSource<bool> SceneLoadWait"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-current" /><code>{"static "}<Link to="/game-api/types/alta-networking/inetworkscene">{"INetworkScene"}</Link>{" Current { get; set; }"}</code> |  |
| <Link id="m-currentinternal" /><code>{"static "}<Link to="/game-api/types/alta-networking/inetworksceneinternal">{"INetworkSceneInternal"}</Link>{" CurrentInternal { get; set; }"}</code> |  |
| <Link id="m-islocaltest" /><code>{"static bool IsLocalTest { get; set; }"}</code> |  |
| <Link id="m-isremoteserver" /><code>{"static bool IsRemoteServer { get; }"}</code> |  |
| <Link id="m-isserver" /><code>{"static bool IsServer { get; set; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-finishedembeddedsync" /><code>{"static event Action FinishedEmbeddedSync"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onscenesyncfinished" /><code>{"static void OnSceneSyncFinished()"}</code> |  |
| <Link id="m-serversendonly" /><code>{"static void ServerSendOnly("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
