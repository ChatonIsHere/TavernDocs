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

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Inherits or implements** [`INetworkScene`](/mod/game-api/types/alta-networking/inetworkscene), [`IEntityManager`](/mod/game-api/types/alta-networking/ientitymanager)
- **Derived types** [`NetworkScene`](/mod/game-api/types/alta-networking/networkscene), [`LocalNetworkScene`](/mod/game-api/types/global-i-l/localnetworkscene)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-connections" /><code>{"HashSet<"}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{"> Connections { get; }"}</code> | <span className="api-desc">All current connections.</span> |
| <Link id="m-playerfolder" /><code>{"Transform PlayerFolder { get; }"}</code> | <span className="api-desc">The `Players` child transform that player objects go under.</span> |
| <Link id="m-sceneserializer" /><code><Link to="/mod/game-api/types/alta-networking/sceneserializer">{"SceneSerializer"}</Link>{" "}<Link to="/mod/game-api/types/alta-networking/sceneserializer">{"SceneSerializer"}</Link>{" { get; }"}</code> | <span className="api-desc">Serializes and sends entity updates each interval.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addconnection" /><code>{"void AddConnection("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection)"}</code> | <span className="api-desc">Adds a connection and removes it again when it disconnects.</span> |
| <Link id="m-forceregisterentity" /><code>{"uint ForceRegisterEntity("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | <span className="api-desc">Registers an entity with the scene, with a new identifier or a given one.</span> |
| <Link id="m-forceregisterentity-2" /><code>{"void ForceRegisterEntity("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, uint identifier)"}</code> | <span className="api-desc">Registers an entity with the scene, with a new identifier or a given one.</span> |
| <Link id="m-handlesync" /><code>{"void HandleSync(uint embeddedIndex, uint identifier, uint[] embedded)"}</code> | <span className="api-desc">Applies a scene entity sync message (probably on the joining client). The last embedded entity marks the scene sync finished.</span> |
| <Link id="m-initialize" /><code>{"Task Initialize("}<Link to="/mod/game-api/types/alta-networking/isocket">{"ISocket"}</Link>{" socket, Action<string> statusCallback)"}</code> | <span className="api-desc">Starts the scene on a socket, reporting status through the callback.</span> |

## Used in

Members of other types that take, return or hold a `INetworkSceneInternal`:

<div className="api-used-in">

[`SceneSerializer.networkScene`](/mod/game-api/types/alta-networking/sceneserializer#m-networkscene), [`SceneSerializer.SceneSerializer`](/mod/game-api/types/alta-networking/sceneserializer#m-ctor), [`NetworkSceneManager.CurrentInternal`](/mod/game-api/types/global-m-o/networkscenemanager#m-currentinternal).

</div>
