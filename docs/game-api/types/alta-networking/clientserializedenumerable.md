---
title: "ClientSerializedEnumerable"
description: "class ClientSerializedEnumerable in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ClientSerializedEnumerable

A **class** in `Root.Township`, `Alta.Networking.Internal`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** [`SerializedEnumerable`](/game-api/types/alta-networking/serializedenumerable)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ClientSerializedEnumerable(SortedList<uint, "}<Link to="/game-api/types/alta-networking/networkentitylink">{"NetworkEntityLink"}</Link>{"> pairs)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isstarted" /><code>{"private bool isStarted"}</code> |  |
| <Link id="m-pairenumerator" /><code>{"private IEnumerator<KeyValuePair<uint, "}<Link to="/game-api/types/alta-networking/networkentitylink">{"NetworkEntityLink"}</Link>{">> pairEnumerator"}</code> |  |
| <Link id="m-pairs" /><code>{"private SortedList<uint, "}<Link to="/game-api/types/alta-networking/networkentitylink">{"NetworkEntityLink"}</Link>{"> pairs"}</code> |  |
| <Link id="m-tempemptyentities" /><code>{"private List<uint> tempEmptyEntities"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-movenext" /><code>{"override bool MoveNext()"}</code> |  |
| <Link id="m-reset" /><code>{"override void Reset()"}</code> |  |

## Used in

Members of other types that take, return or hold a `ClientSerializedEnumerable`:

[`EntityManager.clientSerializedEnumerable`](/game-api/types/alta-networking/entitymanager#m-clientserializedenumerable).
