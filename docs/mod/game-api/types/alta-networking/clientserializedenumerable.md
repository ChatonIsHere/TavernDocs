---
title: "ClientSerializedEnumerable"
description: "Client-side enumerator over the entities the client serializes, in identifier order from a sorted list."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ClientSerializedEnumerable

A **class** in `Root.Township`, `Alta.Networking.Internal`.

Client-side enumerator over the entities the client serializes, in identifier order from a sorted list. `EntityManager.GetClientSerialized` returns its single instance.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Inherits or implements** [`SerializedEnumerable`](/mod/game-api/types/alta-networking/serializedenumerable)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ClientSerializedEnumerable(SortedList<uint, "}<Link to="/mod/game-api/types/alta-networking/networkentitylink">{"NetworkEntityLink"}</Link>{"> pairs)"}</code> | Creates a `ClientSerializedEnumerable` from `pairs`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isstarted" /><code>{"private bool isStarted"}</code> | Whether iteration has reached the entity whose identifier is `Start`. |
| <Link id="m-pairenumerator" /><code>{"private IEnumerator<KeyValuePair<uint, "}<Link to="/mod/game-api/types/alta-networking/networkentitylink">{"NetworkEntityLink"}</Link>{">> pairEnumerator"}</code> | Enumerator over `pairs` for the current pass. |
| <Link id="m-pairs" /><code>{"private SortedList<uint, "}<Link to="/mod/game-api/types/alta-networking/networkentitylink">{"NetworkEntityLink"}</Link>{"> pairs"}</code> | The sorted list of identifier to entity link that it walks (shared with `EntityManager`). |
| <Link id="m-tempemptyentities" /><code>{"private List<uint> tempEmptyEntities"}</code> | Identifiers of links found without an entity, removed on the next `Reset`. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-movenext" /><code>{"override bool MoveNext()"}</code> | Moves to the next entity from `Start` onwards, skipping and noting links whose entity has gone. |
| <Link id="m-reset" /><code>{"override void Reset()"}</code> | Removes the noted empty links from the list and starts again from the beginning. |

## Used in

Members of other types that take, return or hold a `ClientSerializedEnumerable`:

[`EntityManager.clientSerializedEnumerable`](/mod/game-api/types/alta-networking/entitymanager#m-clientserializedenumerable).
