---
title: "EntityManager"
description: "One per scene, in a private field of NetworkScene."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EntityManager

A **class** in `Root.Township`, `Alta.Networking.Internal`.

One per scene, in a private field of `NetworkScene`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** [`ILinkProvider`](/game-api/types/alta-networking/ilinkprovider), [`IEntityManager`](/game-api/types/alta-networking/ientitymanager), `IDisposable`
- **Documented in** [Finding entities](/game-api/world/finding-entities#every-entity-entitymanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EntityManager("}<Link to="/game-api/types/alta-networking/inetworkscene">{"INetworkScene"}</Link>{" networkScene, bool isServer)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-maximumentities" /><code>{"const int MaximumEntities"}</code> |  |
| <Link id="m-clientserialized" /><code>{"private readonly SortedList<uint, "}<Link to="/game-api/types/alta-networking/networkentitylink">{"NetworkEntityLink"}</Link>{"> clientSerialized"}</code> |  |
| <Link id="m-clientserializedenumerable" /><code>{"private "}<Link to="/game-api/types/alta-networking/clientserializedenumerable">{"ClientSerializedEnumerable"}</Link>{" clientSerializedEnumerable"}</code> |  |
| <Link id="m-entities" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentitylink">{"NetworkEntityLink"}</Link>{"[] entities"}</code> |  |
| <Link id="m-fakeentitydivision" /><code>{"private const int FakeEntityDivision"}</code> |  |
| <Link id="m-isserver" /><code>{"private readonly bool isServer"}</code> |  |
| <Link id="m-linkedlistiterationcount" /><code>{"private int linkedListIterationCount"}</code> |  |
| <Link id="m-linkprovider" /><code>{"private readonly "}<Link to="/game-api/types/alta-networking/ilinkprovider">{"ILinkProvider"}</Link>{" linkProvider"}</code> |  |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |  |
| <Link id="m-networkscene" /><code>{"private readonly "}<Link to="/game-api/types/alta-networking/inetworkscene">{"INetworkScene"}</Link>{" networkScene"}</code> |  |
| <Link id="m-nextspawn" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentitylink">{"NetworkEntityLink"}</Link>{" nextSpawn"}</code> |  |
| <Link id="m-preparedlinks" /><code>{"private static "}<Link to="/game-api/types/alta-networking/networkentitylink">{"NetworkEntityLink"}</Link>{"[] preparedLinks"}</code> |  |
| <Link id="m-serializedenumerables" /><code>{"private readonly Dictionary<int, "}<Link to="/game-api/types/alta-networking/serializedenumerable">{"SerializedEnumerable"}</Link>{"> serializedEnumerables"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkhealth" /><code>{"void CheckHealth(Logger logger)"}</code> |  |
| <Link id="m-chunkembedded" /><code>{"void ChunkEmbedded(IEnumerable<"}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"> embeddedEntities)"}</code> |  |
| <Link id="m-dispose" /><code>{"void Dispose()"}</code> |  |
| <Link id="m-empty" /><code>{"void Empty("}<Link to="/game-api/types/alta-networking/networkentitylink">{"NetworkEntityLink"}</Link>{" link)"}</code> |  |
| <Link id="m-fill" /><code>{"void Fill("}<Link to="/game-api/types/alta-networking/networkentitylink">{"NetworkEntityLink"}</Link>{" link, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> |  |
| <Link id="m-forceregisterentity" /><code>{"uint ForceRegisterEntity("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> |  |
| <Link id="m-forceregisterentity-2" /><code>{"void ForceRegisterEntity("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, uint identifier)"}</code> |  |
| <Link id="m-getclientserialized" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-networking/entityserializer">{"EntitySerializer"}</Link>{"> GetClientSerialized(int start = 0)"}</code> |  |
| <Link id="m-getentity" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" GetEntity(uint identifier)"}</code> |  |
| <Link id="m-getentitywithserializer" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" GetEntityWithSerializer(uint identifier, out "}<Link to="/game-api/types/alta-networking/entityserializer">{"EntitySerializer"}</Link>{" serializer)"}</code> |  |
| <Link id="m-getserverserialized" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-networking/entityserializer">{"EntitySerializer"}</Link>{"> GetServerSerialized(int connectionId, int start)"}</code> |  |
| <Link id="m-initializeasserver" /><code>{"void InitializeAsServer(IEnumerable<"}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"> embeddedEntities)"}</code> |  |
| <Link id="m-iterateentities" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"> IterateEntities() (iterator)"}</code> |  |
| <Link id="m-markserialized" /><code>{"void MarkSerialized("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, "}<Link to="/game-api/types/alta-networking/entityserializer">{"EntitySerializer"}</Link>{" serializer)"}</code> |  |
| <Link id="m-registerembedded" /><code>{"void RegisterEmbedded(IEnumerable<"}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"> embeddedEntities)"}</code> |  |
| <Link id="m-serializeasclient" /><code>{"void SerializeAsClient("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> |  |
| <Link id="m-syncsceneentity" /><code>{"void SyncSceneEntity(uint embeddedIndex, uint identifier, uint[] embedded)"}</code> |  |
| <Link id="m-getlink" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentitylink">{"NetworkEntityLink"}</Link>{" Alta.Networking.Internal.ILinkProvider.GetLink(uint identifier)"}</code> |  |
| <Link id="m-getnextlink" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentitylink">{"NetworkEntityLink"}</Link>{" Alta.Networking.Internal.ILinkProvider.GetNextLink()"}</code> |  |
| <Link id="m-preparelinkedentitylist" /><code>{"private void PrepareLinkedEntityList()"}</code> |  |

## Used in

Members of other types that take, return or hold a `EntityManager`:

[`SceneSerializer.entityManager`](/game-api/types/alta-networking/sceneserializer#m-entitymanager), [`SceneSerializer.SceneSerializer`](/game-api/types/alta-networking/sceneserializer#m-ctor), [`NetworkScene.entityManager`](/game-api/types/alta-networking/networkscene#m-entitymanager).
