---
title: "NetworkEntityLink"
description: "One slot in the entity manager's fixed table of 100,000 entity identifiers."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkEntityLink

A **class** in `Root.Township`, `Alta.Networking`.

One slot in the entity manager's fixed table of 100,000 entity identifiers. On the server, slots are also chained into linked lists of empty, full and serialized slots so free identifiers and synced entities can be walked quickly.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NetworkEntityLink(uint index)"}</code> | <span className="api-desc">Creates a `NetworkEntityLink` from `index`, `previous` and `next`.</span> |
| <Link id="m-ctor-2" /><code><Link to="/mod/game-api/types/alta-networking/networkentitylink">{"NetworkEntityLink"}</Link>{"(uint index, "}<Link to="/mod/game-api/types/alta-networking/networkentitylink">{"NetworkEntityLink"}</Link>{" previous)"}</code> | <span className="api-desc">Creates a `NetworkEntityLink` from `index`, `previous` and `next`.</span> |
| <Link id="m-ctor-3" /><code><Link to="/mod/game-api/types/alta-networking/networkentitylink">{"NetworkEntityLink"}</Link>{"(uint index, "}<Link to="/mod/game-api/types/alta-networking/networkentitylink">{"NetworkEntityLink"}</Link>{" previous, "}<Link to="/mod/game-api/types/alta-networking/networkentitylink">{"NetworkEntityLink"}</Link>{" next)"}</code> | <span className="api-desc">Creates a `NetworkEntityLink` from `index`, `previous` and `next`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-index" /><code>{"uint Index"}</code> | <span className="api-desc">The entity identifier this slot stands for.</span> |
| <Link id="m-isempty" /><code>{"bool IsEmpty"}</code> | <span className="api-desc">True if no entity holds this slot.</span> |
| <Link id="m-isfake" /><code>{"bool IsFake"}</code> | <span className="api-desc">True for the placeholder slots set up every 50 entries, probably so list walks never run long.</span> |
| <Link id="m-isserialized" /><code>{"bool IsSerialized"}</code> | <span className="api-desc">True if the entity in the slot has a serializer and is in the serialized list.</span> |
| <Link id="m-linkswithentities" /><code>{"static int LinksWithEntities"}</code> | <span className="api-desc">Count of slots that hold an entity, across all tables.</span> |
| <Link id="m-networkentity" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link></code> | <span className="api-desc">The entity in the slot, or null.</span> |
| <Link id="m-nextempty" /><code><Link to="/mod/game-api/types/alta-networking/networkentitylink">{"NetworkEntityLink"}</Link>{" NextEmpty"}</code> | <span className="api-desc">Next empty slot (server).</span> |
| <Link id="m-nextfull" /><code><Link to="/mod/game-api/types/alta-networking/networkentitylink">{"NetworkEntityLink"}</Link>{" NextFull"}</code> | <span className="api-desc">Next full slot (server).</span> |
| <Link id="m-nextserialized" /><code><Link to="/mod/game-api/types/alta-networking/networkentitylink">{"NetworkEntityLink"}</Link>{" NextSerialized"}</code> | <span className="api-desc">Next serialized slot (server).</span> |
| <Link id="m-previousempty" /><code><Link to="/mod/game-api/types/alta-networking/networkentitylink">{"NetworkEntityLink"}</Link>{" PreviousEmpty"}</code> | <span className="api-desc">Previous empty slot (server).</span> |
| <Link id="m-previousfull" /><code><Link to="/mod/game-api/types/alta-networking/networkentitylink">{"NetworkEntityLink"}</Link>{" PreviousFull"}</code> | <span className="api-desc">Previous full slot (server).</span> |
| <Link id="m-previousserialized" /><code><Link to="/mod/game-api/types/alta-networking/networkentitylink">{"NetworkEntityLink"}</Link>{" PreviousSerialized"}</code> | <span className="api-desc">Previous serialized slot (server).</span> |
| <Link id="m-serializer" /><code><Link to="/mod/game-api/types/alta-networking/entityserializer">{"EntitySerializer"}</Link>{" Serializer"}</code> | <span className="api-desc">The entity's serializer, once marked serialized.</span> |

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-empty" /><code>{"void Empty(bool isServer, "}<Link to="/mod/game-api/types/alta-networking/networkentitylink">{"NetworkEntityLink"}</Link>{"[] links)"}</code> | <span className="api-desc">Clears the slot. On the server it also unlinks it from the full and serialized lists and adds it to the empty list.</span> |
| <Link id="m-fill" /><code>{"bool Fill(bool isServer, "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, "}<Link to="/mod/game-api/types/alta-networking/networkentitylink">{"NetworkEntityLink"}</Link>{"[] links)"}</code> | <span className="api-desc">Puts an entity in the slot. On the server it moves the slot from the empty list to the full list; refuses if already full.</span> |
| <Link id="m-makefake" /><code>{"void MakeFake(bool isEmpty, "}<Link to="/mod/game-api/types/alta-networking/networkentitylink">{"NetworkEntityLink"}</Link>{"[] links)"}</code> | <span className="api-desc">Turns the slot into a placeholder, empty or full.</span> |
| <Link id="m-markfirstfakeasserialized" /><code>{"void MarkFirstFakeAsSerialized()"}</code> | <span className="api-desc">Marks slot 0 as the head of the serialized list. Only valid on a fake slot.</span> |
| <Link id="m-markserialized" /><code>{"void MarkSerialized(bool isServer, "}<Link to="/mod/game-api/types/alta-networking/entityserializer">{"EntitySerializer"}</Link>{" serializer)"}</code> | <span className="api-desc">Records the entity's serializer. On the server it also links the slot into the serialized list.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-deregisterentity" /><code>{"private static void DeregisterEntity("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | <span className="api-desc">Decrements `LinksWithEntities` when a link is emptied of a real entity.</span> |
| <Link id="m-registerentity" /><code>{"private static void RegisterEntity("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | <span className="api-desc">Increments `LinksWithEntities` when a link is filled with a real entity.</span> |

</details>

## Used in

Members of other types that take, return or hold a `NetworkEntityLink`:

<div className="api-used-in">

[`ClientSerializedEnumerable.ClientSerializedEnumerable`](/mod/game-api/types/alta-networking/clientserializedenumerable#m-ctor), [`ClientSerializedEnumerable.pairEnumerator`](/mod/game-api/types/alta-networking/clientserializedenumerable#m-pairenumerator), [`ClientSerializedEnumerable.pairs`](/mod/game-api/types/alta-networking/clientserializedenumerable#m-pairs), [`EntityManager.clientSerialized`](/mod/game-api/types/alta-networking/entitymanager#m-clientserialized), [`EntityManager.Empty`](/mod/game-api/types/alta-networking/entitymanager#m-empty), [`EntityManager.entities`](/mod/game-api/types/alta-networking/entitymanager#m-entities), [`EntityManager.Fill`](/mod/game-api/types/alta-networking/entitymanager#m-fill), [`EntityManager.GetLink`](/mod/game-api/types/alta-networking/entitymanager#m-getlink), [`EntityManager.GetNextLink`](/mod/game-api/types/alta-networking/entitymanager#m-getnextlink), [`EntityManager.nextSpawn`](/mod/game-api/types/alta-networking/entitymanager#m-nextspawn), [`EntityManager.preparedLinks`](/mod/game-api/types/alta-networking/entitymanager#m-preparedlinks), [`ILinkProvider.Empty`](/mod/game-api/types/alta-networking/ilinkprovider#m-empty), [`ILinkProvider.Fill`](/mod/game-api/types/alta-networking/ilinkprovider#m-fill), [`ILinkProvider.GetLink`](/mod/game-api/types/alta-networking/ilinkprovider#m-getlink), [`ILinkProvider.GetNextLink`](/mod/game-api/types/alta-networking/ilinkprovider#m-getnextlink), [`SerializedEnumerable.current`](/mod/game-api/types/alta-networking/serializedenumerable#m-current), [`SerializedEnumerable.links`](/mod/game-api/types/alta-networking/serializedenumerable#m-links), [`SerializedEnumerable.next`](/mod/game-api/types/alta-networking/serializedenumerable#m-next), [`SerializedEnumerable.SerializedEnumerable`](/mod/game-api/types/alta-networking/serializedenumerable#m-ctor), [`SpawnManager.SpawnExisting`](/mod/game-api/types/alta-networking/spawnmanager#m-spawnexisting), [`SpawnManager.SpawnLocal`](/mod/game-api/types/alta-networking/spawnmanager#m-spawnlocal), [`LocalLinkProvider.Empty`](/mod/game-api/types/global-i-l/locallinkprovider#m-empty), [`LocalLinkProvider.Fill`](/mod/game-api/types/global-i-l/locallinkprovider#m-fill), [`LocalLinkProvider.GetLink`](/mod/game-api/types/global-i-l/locallinkprovider#m-getlink), [`LocalLinkProvider.GetNextLink`](/mod/game-api/types/global-i-l/locallinkprovider#m-getnextlink).

</div>
