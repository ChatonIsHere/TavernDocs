---
title: "INetworkSceneInternal"
description: "interface INetworkSceneInternal in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# INetworkSceneInternal

An **interface** in `Root.Township`, `Alta.Networking`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** [`INetworkScene`](/game-api/types/alta-networking/inetworkscene), [`IEntityManager`](/game-api/types/alta-networking/ientitymanager)
- **Derived types** [`NetworkScene`](/game-api/types/alta-networking/networkscene), [`LocalNetworkScene`](/game-api/types/global-i-l/localnetworkscene)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-connections" /><code>{"HashSet<"}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{"> Connections { get; }"}</code> |  |
| <Link id="m-playerfolder" /><code>{"Transform PlayerFolder { get; }"}</code> |  |
| <Link id="m-sceneserializer" /><code><Link to="/game-api/types/alta-networking/sceneserializer">{"SceneSerializer"}</Link>{" "}<Link to="/game-api/types/alta-networking/sceneserializer">{"SceneSerializer"}</Link>{" { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addconnection" /><code>{"void AddConnection("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection)"}</code> |  |
| <Link id="m-forceregisterentity" /><code>{"uint ForceRegisterEntity("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> |  |
| <Link id="m-forceregisterentity-2" /><code>{"void ForceRegisterEntity("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, uint identifier)"}</code> |  |
| <Link id="m-handlesync" /><code>{"void HandleSync(uint embeddedIndex, uint identifier, uint[] embedded)"}</code> |  |
| <Link id="m-initialize" /><code>{"Task Initialize("}<Link to="/game-api/types/alta-networking/isocket">{"ISocket"}</Link>{" socket, Action<string> statusCallback)"}</code> |  |

## Used in

Members of other types that take, return or hold a `INetworkSceneInternal`:

[`SceneSerializer.networkScene`](/game-api/types/alta-networking/sceneserializer#m-networkscene), [`SceneSerializer.SceneSerializer`](/game-api/types/alta-networking/sceneserializer#m-ctor), [`NetworkSceneManager.CurrentInternal`](/game-api/types/global-m-o/networkscenemanager#m-currentinternal).
