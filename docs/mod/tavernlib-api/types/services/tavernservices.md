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

- **Listed in** [TavernLib.Services](/mod/tavernlib-api/types/services)
- **Documented in** [TavernServices](/mod/tavernlib-api/types/services/tavernservices), [Services](/mod/tavernlib-api/services#tavernservices)

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-serviceentries" /><code>{"private static readonly Dictionary<Type, "}<Link to="/mod/tavernlib-api/types/services/iservice">{"IService"}</Link>{"> ServiceEntries"}</code> | <span className="api-desc">The registered services, keyed by their type.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addservice" /><code>{"static void AddService<T>(T instance)"}</code> | <span className="api-desc">Registers an instance under the generic type `T`. Logs a warning and does nothing if `T` is already registered.</span> |
| <Link id="m-getservice" /><code>{"static T GetService<T>()"}</code> | <span className="api-desc">The instance registered under exactly `T`, or `null` with an error logged. On a client `TavernManager` is never there.</span> |
