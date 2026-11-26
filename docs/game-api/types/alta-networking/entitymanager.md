---
title: "EntityManager"
description: "Owns the table of network entity ids for a scene: hands out free ids, maps ids to entities and lists what needs serializing."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EntityManager

A **class** in `Root.Township`, `Alta.Networking.Internal`.

Owns the table of network entity ids for a scene: hands out free ids, maps ids to entities and lists what needs serializing. One per network scene.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** [`ILinkProvider`](/game-api/types/alta-networking/ilinkprovider), [`IEntityManager`](/game-api/types/alta-networking/ientitymanager), `IDisposable`
- **Documented in** [Finding entities](/game-api/world/finding-entities#every-entity-entitymanager)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"EntityManager("}<Link to="/game-api/types/alta-networking/inetworkscene">{"INetworkScene"}</Link>{" networkScene, bool isServer)"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-maximumentities" /><code>{"const int MaximumEntities"}</code> | Size of the id table: 100000. Two ids in every 50 are reserved as markers, so fewer are usable. |

<details>
<summary>12 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clientserialized" /><code>{"private readonly SortedList<uint, "}<Link to="/game-api/types/alta-networking/networkentitylink">{"NetworkEntityLink"}</Link>{"> clientSerialized"}</code> | Private: client side list of entities this client serializes to the server, by identifier. |
| <Link id="m-clientserializedenumerable" /><code>{"private "}<Link to="/game-api/types/alta-networking/clientserializedenumerable">{"ClientSerializedEnumerable"}</Link>{" clientSerializedEnumerable"}</code> | Private: reusable enumerator over `clientSerialized` for `GetClientSerialized`. |
| <Link id="m-entities" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentitylink">{"NetworkEntityLink"}</Link>{"[] entities"}</code> | Private: every link slot, indexed by entity identifier. |
| <Link id="m-fakeentitydivision" /><code>{"private const int FakeEntityDivision"}</code> | Private constant 50: every 50th pair of link slots is a fake placeholder that never holds a real entity. |
| <Link id="m-isserver" /><code>{"private readonly bool isServer"}</code> | Private: whether this manager runs on the server. |
| <Link id="m-linkedlistiterationcount" /><code>{"private int linkedListIterationCount"}</code> | Private: how many times link allocation has wrapped round the free list. |
| <Link id="m-linkprovider" /><code>{"private readonly "}<Link to="/game-api/types/alta-networking/ilinkprovider">{"ILinkProvider"}</Link>{" linkProvider"}</code> | Private: where links come from. Always this manager. |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | Private: logger for allocation and health messages. |
| <Link id="m-networkscene" /><code>{"private readonly "}<Link to="/game-api/types/alta-networking/inetworkscene">{"INetworkScene"}</Link>{" networkScene"}</code> | Private: the scene these entities belong to. |
| <Link id="m-nextspawn" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentitylink">{"NetworkEntityLink"}</Link>{" nextSpawn"}</code> | Private: the next free link to hand out. |
| <Link id="m-preparedlinks" /><code>{"private static "}<Link to="/game-api/types/alta-networking/networkentitylink">{"NetworkEntityLink"}</Link>{"[] preparedLinks"}</code> | Private static: a link array kept from a disposed manager so the next one can reuse it. |
| <Link id="m-serializedenumerables" /><code>{"private readonly Dictionary<int, "}<Link to="/game-api/types/alta-networking/serializedenumerable">{"SerializedEnumerable"}</Link>{"> serializedEnumerables"}</code> | Private: a reusable serialized entity enumerator per connection, for `GetServerSerialized`. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkhealth" /><code>{"void CheckHealth(Logger logger)"}</code> | Logs counts of used, empty, reserved and broken id slots. |
| <Link id="m-chunkembedded" /><code>{"void ChunkEmbedded(IEnumerable<"}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"> embeddedEntities)"}</code> | Puts embedded entities in the scene's global chunk. |
| <Link id="m-dispose" /><code>{"void Dispose()"}</code> | Frees every slot and keeps the table for the next scene to reuse. |
| <Link id="m-empty" /><code>{"void Empty("}<Link to="/game-api/types/alta-networking/networkentitylink">{"NetworkEntityLink"}</Link>{" link)"}</code> | Frees an id slot. |
| <Link id="m-fill" /><code>{"void Fill("}<Link to="/game-api/types/alta-networking/networkentitylink">{"NetworkEntityLink"}</Link>{" link, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | Puts an entity in an id slot. |
| <Link id="m-forceregisterentity" /><code>{"uint ForceRegisterEntity("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | Puts an entity in the next free id slot (returns the id, 0 on failure) or in a given id slot. |
| <Link id="m-forceregisterentity-2" /><code>{"void ForceRegisterEntity("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, uint identifier)"}</code> | Puts an entity in the next free id slot (returns the id, 0 on failure) or in a given id slot. |
| <Link id="m-getclientserialized" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-networking/entityserializer">{"EntitySerializer"}</Link>{"> GetClientSerialized(int start = 0)"}</code> | Client: the serializers of entities the client sends, starting at an index. |
| <Link id="m-getentity" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" GetEntity(uint identifier)"}</code> | Finds an entity by id, or null. |
| <Link id="m-getentitywithserializer" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" GetEntityWithSerializer(uint identifier, out "}<Link to="/game-api/types/alta-networking/entityserializer">{"EntitySerializer"}</Link>{" serializer)"}</code> | Finds an entity by id and also gives its serializer. |
| <Link id="m-getserverserialized" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-networking/entityserializer">{"EntitySerializer"}</Link>{"> GetServerSerialized(int connectionId, int start)"}</code> | Server: the serializers to visit for one connection, starting at an index. |
| <Link id="m-initializeasserver" /><code>{"void InitializeAsServer(IEnumerable<"}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"> embeddedEntities)"}</code> | Server: initializes each embedded entity with default spawn data. |
| <Link id="m-iterateentities" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"> IterateEntities() (iterator)"}</code> | Every live entity in id order. |
| <Link id="m-markserialized" /><code>{"void MarkSerialized("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, "}<Link to="/game-api/types/alta-networking/entityserializer">{"EntitySerializer"}</Link>{" serializer)"}</code> | Marks an entity as having a serializer, so it is included in sync passes. |
| <Link id="m-registerembedded" /><code>{"void RegisterEmbedded(IEnumerable<"}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"> embeddedEntities)"}</code> | Gives each embedded scene entity without an id a new one and initializes it. |
| <Link id="m-serializeasclient" /><code>{"void SerializeAsClient("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | Adds an entity to the list the client sends to the server, until it's destroyed. |
| <Link id="m-syncsceneentity" /><code>{"void SyncSceneEntity(uint embeddedIndex, uint identifier, uint[] embedded)"}</code> | Client: gives an embedded scene entity the id the server uses for it. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getlink" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentitylink">{"NetworkEntityLink"}</Link>{" Alta.Networking.Internal.ILinkProvider.GetLink(uint identifier)"}</code> | Returns the link slot for an identifier, straight from the array. |
| <Link id="m-getnextlink" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentitylink">{"NetworkEntityLink"}</Link>{" Alta.Networking.Internal.ILinkProvider.GetNextLink()"}</code> | Walks the free list to the next empty, non fake link. A full link found there counts as corruption and quits the server. |
| <Link id="m-preparelinkedentitylist" /><code>{"private void PrepareLinkedEntityList()"}</code> | Private: builds the 100000 link slots and their free list, or reuses the array kept by the last `Dispose`. |

</details>

## Used in

Members of other types that take, return or hold a `EntityManager`:

[`SceneSerializer.entityManager`](/game-api/types/alta-networking/sceneserializer#m-entitymanager), [`SceneSerializer.SceneSerializer`](/game-api/types/alta-networking/sceneserializer#m-ctor), [`NetworkScene.entityManager`](/game-api/types/alta-networking/networkscene#m-entitymanager).
