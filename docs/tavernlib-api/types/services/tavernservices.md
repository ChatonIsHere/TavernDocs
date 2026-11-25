---
title: "TavernServices"
description: "A small registry holding one object per type, where TavernLib keeps TavernManager and EntranceMessageHandler and mods can add their own."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TavernServices

A **static class** in `TavernLib`, `TavernLib.Services`.

A small registry holding one object per type, where TavernLib keeps `TavernManager` and `EntranceMessageHandler` and mods can add their own. A plain dictionary with no lock.

- **Listed in** [TavernLib.Services](/tavernlib-api/types/services)
- **Documented in** [TavernServices](/tavernlib-api/types/services/tavernservices), [Services](/tavernlib-api/services#tavernservices)

## Fields

<details>
<summary>1 private and internal field</summary>

| Member |
| --- |
| <Link id="m-serviceentries" /><code>{"private static readonly Dictionary<Type, "}<Link to="/tavernlib-api/types/services/iservice">{"IService"}</Link>{"> ServiceEntries"}</code> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addservice" /><code>{"static void AddService<T>(T instance)"}</code> | Registers an instance under the generic type `T`. Logs a warning and does nothing if `T` is already registered. |
| <Link id="m-getservice" /><code>{"static T GetService<T>()"}</code> | The instance registered under exactly `T`, or `null` with an error logged. On a client `TavernManager` is never there. |
