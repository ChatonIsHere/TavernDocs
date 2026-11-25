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

- **Listed in** [Networking and servers](/game-api/types/alta-networking)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"NetworkEntityLink(uint index)"}</code> |
| <Link id="m-ctor-2" /><code><Link to="/game-api/types/alta-networking/networkentitylink">{"NetworkEntityLink"}</Link>{"(uint index, "}<Link to="/game-api/types/alta-networking/networkentitylink">{"NetworkEntityLink"}</Link>{" previous)"}</code> |
| <Link id="m-ctor-3" /><code><Link to="/game-api/types/alta-networking/networkentitylink">{"NetworkEntityLink"}</Link>{"(uint index, "}<Link to="/game-api/types/alta-networking/networkentitylink">{"NetworkEntityLink"}</Link>{" previous, "}<Link to="/game-api/types/alta-networking/networkentitylink">{"NetworkEntityLink"}</Link>{" next)"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-index" /><code>{"uint Index"}</code> | The entity identifier this slot stands for. |
| <Link id="m-isempty" /><code>{"bool IsEmpty"}</code> | True if no entity holds this slot. |
| <Link id="m-isfake" /><code>{"bool IsFake"}</code> | True for the placeholder slots set up every 50 entries, probably so list walks never run long. |
| <Link id="m-isserialized" /><code>{"bool IsSerialized"}</code> | True if the entity in the slot has a serializer and is in the serialized list. |
| <Link id="m-linkswithentities" /><code>{"static int LinksWithEntities"}</code> | Count of slots that hold an entity, across all tables. |
| <Link id="m-networkentity" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link></code> | The entity in the slot, or null. |
| <Link id="m-nextempty" /><code><Link to="/game-api/types/alta-networking/networkentitylink">{"NetworkEntityLink"}</Link>{" NextEmpty"}</code> | Next empty slot (server). |
| <Link id="m-nextfull" /><code><Link to="/game-api/types/alta-networking/networkentitylink">{"NetworkEntityLink"}</Link>{" NextFull"}</code> | Next full slot (server). |
| <Link id="m-nextserialized" /><code><Link to="/game-api/types/alta-networking/networkentitylink">{"NetworkEntityLink"}</Link>{" NextSerialized"}</code> | Next serialized slot (server). |
| <Link id="m-previousempty" /><code><Link to="/game-api/types/alta-networking/networkentitylink">{"NetworkEntityLink"}</Link>{" PreviousEmpty"}</code> | Previous empty slot (server). |
| <Link id="m-previousfull" /><code><Link to="/game-api/types/alta-networking/networkentitylink">{"NetworkEntityLink"}</Link>{" PreviousFull"}</code> | Previous full slot (server). |
| <Link id="m-previousserialized" /><code><Link to="/game-api/types/alta-networking/networkentitylink">{"NetworkEntityLink"}</Link>{" PreviousSerialized"}</code> | Previous serialized slot (server). |
| <Link id="m-serializer" /><code><Link to="/game-api/types/alta-networking/entityserializer">{"EntitySerializer"}</Link>{" Serializer"}</code> | The entity's serializer, once marked serialized. |

<details>
<summary>1 private and internal field</summary>

| Member |
| --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-empty" /><code>{"void Empty(bool isServer, "}<Link to="/game-api/types/alta-networking/networkentitylink">{"NetworkEntityLink"}</Link>{"[] links)"}</code> | Clears the slot. On the server it also unlinks it from the full and serialized lists and adds it to the empty list. |
| <Link id="m-fill" /><code>{"bool Fill(bool isServer, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, "}<Link to="/game-api/types/alta-networking/networkentitylink">{"NetworkEntityLink"}</Link>{"[] links)"}</code> | Puts an entity in the slot. On the server it moves the slot from the empty list to the full list; refuses if already full. |
| <Link id="m-makefake" /><code>{"void MakeFake(bool isEmpty, "}<Link to="/game-api/types/alta-networking/networkentitylink">{"NetworkEntityLink"}</Link>{"[] links)"}</code> | Turns the slot into a placeholder, empty or full. |
| <Link id="m-markfirstfakeasserialized" /><code>{"void MarkFirstFakeAsSerialized()"}</code> | Marks slot 0 as the head of the serialized list. Only valid on a fake slot. |
| <Link id="m-markserialized" /><code>{"void MarkSerialized(bool isServer, "}<Link to="/game-api/types/alta-networking/entityserializer">{"EntitySerializer"}</Link>{" serializer)"}</code> | Records the entity's serializer. On the server it also links the slot into the serialized list. |

<details>
<summary>2 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-deregisterentity" /><code>{"private static void DeregisterEntity("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> |
| <Link id="m-registerentity" /><code>{"private static void RegisterEntity("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `NetworkEntityLink`:

[`ClientSerializedEnumerable.ClientSerializedEnumerable`](/game-api/types/alta-networking/clientserializedenumerable#m-ctor), [`ClientSerializedEnumerable.pairEnumerator`](/game-api/types/alta-networking/clientserializedenumerable#m-pairenumerator), [`ClientSerializedEnumerable.pairs`](/game-api/types/alta-networking/clientserializedenumerable#m-pairs), [`EntityManager.clientSerialized`](/game-api/types/alta-networking/entitymanager#m-clientserialized), [`EntityManager.Empty`](/game-api/types/alta-networking/entitymanager#m-empty), [`EntityManager.entities`](/game-api/types/alta-networking/entitymanager#m-entities), [`EntityManager.Fill`](/game-api/types/alta-networking/entitymanager#m-fill), [`EntityManager.GetLink`](/game-api/types/alta-networking/entitymanager#m-getlink), [`EntityManager.GetNextLink`](/game-api/types/alta-networking/entitymanager#m-getnextlink), [`EntityManager.nextSpawn`](/game-api/types/alta-networking/entitymanager#m-nextspawn), [`EntityManager.preparedLinks`](/game-api/types/alta-networking/entitymanager#m-preparedlinks), [`ILinkProvider.Empty`](/game-api/types/alta-networking/ilinkprovider#m-empty), [`ILinkProvider.Fill`](/game-api/types/alta-networking/ilinkprovider#m-fill), [`ILinkProvider.GetLink`](/game-api/types/alta-networking/ilinkprovider#m-getlink), [`ILinkProvider.GetNextLink`](/game-api/types/alta-networking/ilinkprovider#m-getnextlink), [`SerializedEnumerable.current`](/game-api/types/alta-networking/serializedenumerable#m-current), [`SerializedEnumerable.links`](/game-api/types/alta-networking/serializedenumerable#m-links), [`SerializedEnumerable.next`](/game-api/types/alta-networking/serializedenumerable#m-next), [`SerializedEnumerable.SerializedEnumerable`](/game-api/types/alta-networking/serializedenumerable#m-ctor), [`SpawnManager.SpawnExisting`](/game-api/types/alta-networking/spawnmanager#m-spawnexisting), [`SpawnManager.SpawnLocal`](/game-api/types/alta-networking/spawnmanager#m-spawnlocal), [`LocalLinkProvider.Empty`](/game-api/types/global-i-l/locallinkprovider#m-empty), [`LocalLinkProvider.Fill`](/game-api/types/global-i-l/locallinkprovider#m-fill), [`LocalLinkProvider.GetLink`](/game-api/types/global-i-l/locallinkprovider#m-getlink), [`LocalLinkProvider.GetNextLink`](/game-api/types/global-i-l/locallinkprovider#m-getnextlink).
