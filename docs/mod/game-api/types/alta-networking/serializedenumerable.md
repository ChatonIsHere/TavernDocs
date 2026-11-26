---
title: "SerializedEnumerable"
description: "Walks the linked list of serialized entities from a start index, returning each entity's serializer."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SerializedEnumerable

A **class** in `Root.Township`, `Alta.Networking.Internal`.

Walks the linked list of serialized entities from a start index, returning each entity's serializer. Used by `EntityManager`; skips placeholder links.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Inherits or implements** `IEnumerable<EntitySerializer>`, `IEnumerable`, `IEnumerator<EntitySerializer>`, `IEnumerator`, `IDisposable`
- **Derived types** [`ClientSerializedEnumerable`](/mod/game-api/types/alta-networking/clientserializedenumerable)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SerializedEnumerable("}<Link to="/mod/game-api/types/alta-networking/networkentitylink">{"NetworkEntityLink"}</Link>{"[] links)"}</code> | <span className="api-desc">Creates a `SerializedEnumerable` from `links`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-current" /><code>{"protected "}<Link to="/mod/game-api/types/alta-networking/networkentitylink">{"NetworkEntityLink"}</Link>{" current"}</code> | <span className="api-desc">The current link.</span> |
| <Link id="m-next" /><code>{"protected "}<Link to="/mod/game-api/types/alta-networking/networkentitylink">{"NetworkEntityLink"}</Link>{" next"}</code> | <span className="api-desc">The next link to visit.</span> |

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-iterationindex" /><code>{"private int iterationIndex"}</code> | <span className="api-desc">How many links this pass has stepped through; used in error logs.</span> |
| <Link id="m-links" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkentitylink">{"NetworkEntityLink"}</Link>{"[] links"}</code> | <span className="api-desc">The entity link array it walks, following each link's next-serialized pointer.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">Logger for broken serialized-list errors.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-current-2" /><code><Link to="/mod/game-api/types/alta-networking/entityserializer">{"EntitySerializer"}</Link>{" Current { get; }"}</code> | <span className="api-desc">The serializer of the current entity.</span> |
| <Link id="m-start" /><code>{"int Start { get; set; }"}</code> | <span className="api-desc">Index of the link to start from.</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-system-collections-ienumerator-current" /><code>{"private object System.Collections.IEnumerator.Current { get; }"}</code> | <span className="api-desc">Non-generic `Current`; returns the current `EntitySerializer`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-dispose" /><code>{"void Dispose()"}</code> | <span className="api-desc">Does nothing.</span> |
| <Link id="m-getenumerator" /><code>{"IEnumerator<"}<Link to="/mod/game-api/types/alta-networking/entityserializer">{"EntitySerializer"}</Link>{"> GetEnumerator()"}</code> | <span className="api-desc">Resets and returns itself.</span> |
| <Link id="m-movenext" /><code>{"virtual bool MoveNext()"}</code> | <span className="api-desc">Moves to the next real serialized entity. Logs and stops if the list is broken.</span> |
| <Link id="m-reset" /><code>{"virtual void Reset()"}</code> | <span className="api-desc">Goes back to the link at `Start`.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getenumerator-2" /><code>{"private IEnumerator System.Collections.IEnumerable.GetEnumerator()"}</code> | <span className="api-desc">Resets and returns itself.</span> |

</details>

## Used in

Members of other types that take, return or hold a `SerializedEnumerable`:

<div className="api-used-in">

[`EntityManager.serializedEnumerables`](/mod/game-api/types/alta-networking/entitymanager#m-serializedenumerables).

</div>
