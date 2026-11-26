---
title: "IEntityManager"
description: "Part of the network scene that tracks which entities have serialized (streamed) state."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IEntityManager

An **interface** in `Root.Township`, `Alta.Networking.Internal`.

Part of the network scene that tracks which entities have serialized (streamed) state. `NetworkScene` implements it.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Derived types** [`INetworkSceneInternal`](/mod/game-api/types/alta-networking/inetworksceneinternal), [`EntityManager`](/mod/game-api/types/alta-networking/entitymanager), [`NetworkScene`](/mod/game-api/types/alta-networking/networkscene), [`LocalNetworkScene`](/mod/game-api/types/global-i-l/localnetworkscene)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-markserialized" /><code>{"void MarkSerialized("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, "}<Link to="/mod/game-api/types/alta-networking/entityserializer">{"EntitySerializer"}</Link>{" serializer)"}</code> | <span className="api-desc">Registers an entity's serializer. Called when the entity has `INetworkSerialized` behaviours.</span> |
| <Link id="m-serializeasclient" /><code>{"void SerializeAsClient("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | <span className="api-desc">Marks the entity as one the local client streams, after the local player gets authority over it.</span> |
