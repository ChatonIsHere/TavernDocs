---
title: "SerializedEnumerable"
description: "class SerializedEnumerable in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SerializedEnumerable

A **class** in `Root.Township`, `Alta.Networking.Internal`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** `IEnumerable<EntitySerializer>`, `IEnumerable`, `IEnumerator<EntitySerializer>`, `IEnumerator`, `IDisposable`
- **Derived types** [`ClientSerializedEnumerable`](/game-api/types/alta-networking/clientserializedenumerable)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SerializedEnumerable("}<Link to="/game-api/types/alta-networking/networkentitylink">{"NetworkEntityLink"}</Link>{"[] links)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-current" /><code>{"protected "}<Link to="/game-api/types/alta-networking/networkentitylink">{"NetworkEntityLink"}</Link>{" current"}</code> |  |
| <Link id="m-iterationindex" /><code>{"private int iterationIndex"}</code> |  |
| <Link id="m-links" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentitylink">{"NetworkEntityLink"}</Link>{"[] links"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-next" /><code>{"protected "}<Link to="/game-api/types/alta-networking/networkentitylink">{"NetworkEntityLink"}</Link>{" next"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-current-2" /><code><Link to="/game-api/types/alta-networking/entityserializer">{"EntitySerializer"}</Link>{" Current { get; }"}</code> |  |
| <Link id="m-start" /><code>{"int Start { get; set; }"}</code> |  |
| <Link id="m-system-collections-ienumerator-current" /><code>{"private object System.Collections.IEnumerator.Current { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-dispose" /><code>{"void Dispose()"}</code> |  |
| <Link id="m-getenumerator" /><code>{"IEnumerator<"}<Link to="/game-api/types/alta-networking/entityserializer">{"EntitySerializer"}</Link>{"> GetEnumerator()"}</code> |  |
| <Link id="m-movenext" /><code>{"virtual bool MoveNext()"}</code> |  |
| <Link id="m-reset" /><code>{"virtual void Reset()"}</code> |  |
| <Link id="m-getenumerator-2" /><code>{"private IEnumerator System.Collections.IEnumerable.GetEnumerator()"}</code> |  |

## Used in

Members of other types that take, return or hold a `SerializedEnumerable`:

[`EntityManager.serializedEnumerables`](/game-api/types/alta-networking/entitymanager#m-serializedenumerables).
