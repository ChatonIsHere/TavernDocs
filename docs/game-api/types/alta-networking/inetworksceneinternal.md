---
title: "INetworkSceneInternal"
description: "Internal side of the network scene used by the networking code: connections, the scene serializer and forced entity registration."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# INetworkSceneInternal

An **interface** in `Root.Township`, `Alta.Networking`.

Internal side of the network scene used by the networking code: connections, the scene serializer and forced entity registration. `NetworkScene` implements it; get it from `NetworkSceneManager.CurrentInternal`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** [`INetworkScene`](/game-api/types/alta-networking/inetworkscene), [`IEntityManager`](/game-api/types/alta-networking/ientitymanager)
- **Derived types** [`NetworkScene`](/game-api/types/alta-networking/networkscene), [`LocalNetworkScene`](/game-api/types/global-i-l/localnetworkscene)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-connections" /><code>{"HashSet<"}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{"> Connections { get; }"}</code> | All current connections. |
| <Link id="m-playerfolder" /><code>{"Transform PlayerFolder { get; }"}</code> | The `Players` child transform that player objects go under. |
| <Link id="m-sceneserializer" /><code><Link to="/game-api/types/alta-networking/sceneserializer">{"SceneSerializer"}</Link>{" "}<Link to="/game-api/types/alta-networking/sceneserializer">{"SceneSerializer"}</Link>{" { get; }"}</code> | Serializes and sends entity updates each interval. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addconnection" /><code>{"void AddConnection("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection)"}</code> | Adds a connection and removes it again when it disconnects. |
| <Link id="m-forceregisterentity" /><code>{"uint ForceRegisterEntity("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | Registers an entity with the scene, with a new identifier or a given one. |
| <Link id="m-forceregisterentity-2" /><code>{"void ForceRegisterEntity("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, uint identifier)"}</code> | Registers an entity with the scene, with a new identifier or a given one. |
| <Link id="m-handlesync" /><code>{"void HandleSync(uint embeddedIndex, uint identifier, uint[] embedded)"}</code> | Applies a scene entity sync message (probably on the joining client). The last embedded entity marks the scene sync finished. |
| <Link id="m-initialize" /><code>{"Task Initialize("}<Link to="/game-api/types/alta-networking/isocket">{"ISocket"}</Link>{" socket, Action<string> statusCallback)"}</code> | Starts the scene on a socket, reporting status through the callback. |

## Used in

Members of other types that take, return or hold a `INetworkSceneInternal`:

[`SceneSerializer.networkScene`](/game-api/types/alta-networking/sceneserializer#m-networkscene), [`SceneSerializer.SceneSerializer`](/game-api/types/alta-networking/sceneserializer#m-ctor), [`NetworkSceneManager.CurrentInternal`](/game-api/types/global-m-o/networkscenemanager#m-currentinternal).
