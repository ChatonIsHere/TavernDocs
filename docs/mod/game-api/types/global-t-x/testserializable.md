---
title: "TestSerializable"
description: "Network serialization test behaviour that sends a single 32-bit number, with profiling timers."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TestSerializable

A **class** in `Root.Township`, the global namespace.

Network serialization test behaviour that sends a single 32-bit number, with profiling timers.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`INetworkSerialized`](/mod/game-api/types/alta-networking/inetworkserialized)
- **Attributes** `ProfileNetworkSerialized`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TestSerializable()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-prepareforwritetimer" /><code>{"static "}<Link to="/mod/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" prepareForWriteTimer"}</code> | Static profiling timer for `PrepareForWrite`. |
| <Link id="m-serializetimer" /><code>{"static "}<Link to="/mod/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" serializeTimer"}</code> | Static profiling timer for `Serialize`. |

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-foo" /><code>{"private uint foo"}</code> | Test value, 42. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-maximumbits" /><code>{"int MaximumBits { get; }"}</code> | Always 32. |

<details>
<summary>2 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alta-networking-inetworkserialized-prepareforwritetimer" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" Alta.Networking.INetworkSerialized.PrepareForWriteTimer { get; }"}</code> | Returns the shared `prepareForWriteTimer`. |
| <Link id="m-alta-networking-inetworkserialized-serializetimer" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" Alta.Networking.INetworkSerialized.SerializeTimer { get; }"}</code> | Returns the shared `serializeTimer`. |

</details>

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-prepareforwrite" /><code>{"private bool Alta.Networking.INetworkSerialized.PrepareForWrite(bool isWriteFull)"}</code> | Always returns true, so it writes every time. |
| <Link id="m-serialize" /><code>{"private void Alta.Networking.INetworkSerialized.Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isWriteFull)"}</code> | Reads or writes `foo` as 32 bits. |

</details>
