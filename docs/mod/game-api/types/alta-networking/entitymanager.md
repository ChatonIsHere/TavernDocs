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

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Inherits or implements** [`ILinkProvider`](/mod/game-api/types/alta-networking/ilinkprovider), [`IEntityManager`](/mod/game-api/types/alta-networking/ientitymanager), `IDisposable`
- **Documented in** [Finding entities](/mod/game-api/world/finding-entities#every-entity-entitymanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EntityManager("}<Link to="/mod/game-api/types/alta-networking/inetworkscene">{"INetworkScene"}</Link>{" networkScene, bool isServer)"}</code> | <span className="api-desc">Creates an `EntityManager` from `networkScene` and `isServer`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-maximumentities" /><code>{"const int MaximumEntities"}</code> | <span className="api-desc">Size of the id table: 100000. Two ids in every 50 are reserved as markers, so fewer are usable.</span> |

<details className="api-private">
<summary>12 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clientserialized" /><code>{"private readonly SortedList<uint, "}<Link to="/mod/game-api/types/alta-networking/networkentitylink">{"NetworkEntityLink"}</Link>{"> clientSerialized"}</code> | <span className="api-desc">Private: client side list of entities this client serializes to the server, by identifier.</span> |
| <Link id="m-clientserializedenumerable" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/clientserializedenumerable">{"ClientSerializedEnumerable"}</Link>{" clientSerializedEnumerable"}</code> | <span className="api-desc">Private: reusable enumerator over `clientSerialized` for `GetClientSerialized`.</span> |
| <Link id="m-entities" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkentitylink">{"NetworkEntityLink"}</Link>{"[] entities"}</code> | <span className="api-desc">Private: every link slot, indexed by entity identifier.</span> |
| <Link id="m-fakeentitydivision" /><code>{"private const int FakeEntityDivision"}</code> | <span className="api-desc">Private constant 50: every 50th pair of link slots is a fake placeholder that never holds a real entity.</span> |
| <Link id="m-isserver" /><code>{"private readonly bool isServer"}</code> | <span className="api-desc">Private: whether this manager runs on the server.</span> |
| <Link id="m-linkedlistiterationcount" /><code>{"private int linkedListIterationCount"}</code> | <span className="api-desc">Private: how many times link allocation has wrapped round the free list.</span> |
| <Link id="m-linkprovider" /><code>{"private readonly "}<Link to="/mod/game-api/types/alta-networking/ilinkprovider">{"ILinkProvider"}</Link>{" linkProvider"}</code> | <span className="api-desc">Private: where links come from. Always this manager.</span> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">Private: logger for allocation and health messages.</span> |
| <Link id="m-networkscene" /><code>{"private readonly "}<Link to="/mod/game-api/types/alta-networking/inetworkscene">{"INetworkScene"}</Link>{" networkScene"}</code> | <span className="api-desc">Private: the scene these entities belong to.</span> |
| <Link id="m-nextspawn" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkentitylink">{"NetworkEntityLink"}</Link>{" nextSpawn"}</code> | <span className="api-desc">Private: the next free link to hand out.</span> |
| <Link id="m-preparedlinks" /><code>{"private static "}<Link to="/mod/game-api/types/alta-networking/networkentitylink">{"NetworkEntityLink"}</Link>{"[] preparedLinks"}</code> | <span className="api-desc">Private static: a link array kept from a disposed manager so the next one can reuse it.</span> |
| <Link id="m-serializedenumerables" /><code>{"private readonly Dictionary<int, "}<Link to="/mod/game-api/types/alta-networking/serializedenumerable">{"SerializedEnumerable"}</Link>{"> serializedEnumerables"}</code> | <span className="api-desc">Private: a reusable serialized entity enumerator per connection, for `GetServerSerialized`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkhealth" /><code>{"void CheckHealth(Logger logger)"}</code> | <span className="api-desc">Logs counts of used, empty, reserved and broken id slots.</span> |
| <Link id="m-chunkembedded" /><code>{"void ChunkEmbedded(IEnumerable<"}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"> embeddedEntities)"}</code> | <span className="api-desc">Puts embedded entities in the scene's global chunk.</span> |
| <Link id="m-dispose" /><code>{"void Dispose()"}</code> | <span className="api-desc">Frees every slot and keeps the table for the next scene to reuse.</span> |
| <Link id="m-empty" /><code>{"void Empty("}<Link to="/mod/game-api/types/alta-networking/networkentitylink">{"NetworkEntityLink"}</Link>{" link)"}</code> | <span className="api-desc">Frees an id slot.</span> |
| <Link id="m-fill" /><code>{"void Fill("}<Link to="/mod/game-api/types/alta-networking/networkentitylink">{"NetworkEntityLink"}</Link>{" link, "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | <span className="api-desc">Puts an entity in an id slot.</span> |
| <Link id="m-forceregisterentity" /><code>{"uint ForceRegisterEntity("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | <span className="api-desc">Puts an entity in the next free id slot (returns the id, 0 on failure) or in a given id slot.</span> |
| <Link id="m-forceregisterentity-2" /><code>{"void ForceRegisterEntity("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, uint identifier)"}</code> | <span className="api-desc">Puts an entity in the next free id slot (returns the id, 0 on failure) or in a given id slot.</span> |
| <Link id="m-getclientserialized" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/alta-networking/entityserializer">{"EntitySerializer"}</Link>{"> GetClientSerialized(int start = 0)"}</code> | <span className="api-desc">Client: the serializers of entities the client sends, starting at an index.</span> |
| <Link id="m-getentity" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" GetEntity(uint identifier)"}</code> | <span className="api-desc">Finds an entity by id, or null.</span> |
| <Link id="m-getentitywithserializer" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" GetEntityWithSerializer(uint identifier, out "}<Link to="/mod/game-api/types/alta-networking/entityserializer">{"EntitySerializer"}</Link>{" serializer)"}</code> | <span className="api-desc">Finds an entity by id and also gives its serializer.</span> |
| <Link id="m-getserverserialized" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/alta-networking/entityserializer">{"EntitySerializer"}</Link>{"> GetServerSerialized(int connectionId, int start)"}</code> | <span className="api-desc">Server: the serializers to visit for one connection, starting at an index.</span> |
| <Link id="m-initializeasserver" /><code>{"void InitializeAsServer(IEnumerable<"}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"> embeddedEntities)"}</code> | <span className="api-desc">Server: initializes each embedded entity with default spawn data.</span> |
| <Link id="m-iterateentities" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"> IterateEntities() (iterator)"}</code> | <span className="api-desc">Every live entity in id order.</span> |
| <Link id="m-markserialized" /><code>{"void MarkSerialized("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, "}<Link to="/mod/game-api/types/alta-networking/entityserializer">{"EntitySerializer"}</Link>{" serializer)"}</code> | <span className="api-desc">Marks an entity as having a serializer, so it is included in sync passes.</span> |
| <Link id="m-registerembedded" /><code>{"void RegisterEmbedded(IEnumerable<"}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"> embeddedEntities)"}</code> | <span className="api-desc">Gives each embedded scene entity without an id a new one and initializes it.</span> |
| <Link id="m-serializeasclient" /><code>{"void SerializeAsClient("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | <span className="api-desc">Adds an entity to the list the client sends to the server, until it's destroyed.</span> |
| <Link id="m-syncsceneentity" /><code>{"void SyncSceneEntity(uint embeddedIndex, uint identifier, uint[] embedded)"}</code> | <span className="api-desc">Client: gives an embedded scene entity the id the server uses for it.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getlink" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkentitylink">{"NetworkEntityLink"}</Link>{" Alta.Networking.Internal.ILinkProvider.GetLink(uint identifier)"}</code> | <span className="api-desc">Returns the link slot for an identifier, straight from the array.</span> |
| <Link id="m-getnextlink" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkentitylink">{"NetworkEntityLink"}</Link>{" Alta.Networking.Internal.ILinkProvider.GetNextLink()"}</code> | <span className="api-desc">Walks the free list to the next empty, non fake link. A full link found there counts as corruption and quits the server.</span> |
| <Link id="m-preparelinkedentitylist" /><code>{"private void PrepareLinkedEntityList()"}</code> | <span className="api-desc">Private: builds the 100000 link slots and their free list, or reuses the array kept by the last `Dispose`.</span> |

</details>

## Used in

Members of other types that take, return or hold a `EntityManager`:

<div className="api-used-in">

[`SceneSerializer.entityManager`](/mod/game-api/types/alta-networking/sceneserializer#m-entitymanager), [`SceneSerializer.SceneSerializer`](/mod/game-api/types/alta-networking/sceneserializer#m-ctor), [`NetworkScene.entityManager`](/mod/game-api/types/alta-networking/networkscene#m-entitymanager).

</div>
