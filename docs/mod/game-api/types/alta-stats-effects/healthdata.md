---
title: "HealthData"
description: "Editor asset that stores the health of every network prefab as a list of Instance entries."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HealthData

A **class** in `Root.Township`, `Alta.StatSystem`.

Editor asset that stores the health of every network prefab as a list of `Instance` entries. `HealthValidation` fills it and loads from it.

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** `ScriptableObject`, `ICollection<Instance>`, `IEnumerable<Instance>`, `IEnumerable`
- **Documented in** [Stats](/mod/game-api/game-systems/stats)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HealthData()"}</code> | <span className="api-desc">Creates a `HealthData` with default values.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-healthinstances" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-stats-effects/instance">{"Instance"}</Link>{"> healthInstances"}</code> | <span className="api-desc">The stored prefab and health entries.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-count" /><code>{"int Count { get; }"}</code> | <span className="api-desc">Number of entries.</span> |
| <Link id="m-isreadonly" /><code>{"bool IsReadOnly { get; }"}</code> | <span className="api-desc">Always false.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"void Add("}<Link to="/mod/game-api/types/alta-stats-effects/instance">{"Instance"}</Link>{" item)"}</code> | <span className="api-desc">Adds an entry.</span> |
| <Link id="m-clear" /><code>{"void Clear()"}</code> | <span className="api-desc">Removes all entries.</span> |
| <Link id="m-contains" /><code>{"bool Contains("}<Link to="/mod/game-api/types/alta-stats-effects/instance">{"Instance"}</Link>{" item)"}</code> | <span className="api-desc">True if the entry is in the list.</span> |
| <Link id="m-copyto" /><code>{"void CopyTo("}<Link to="/mod/game-api/types/alta-stats-effects/instance">{"Instance"}</Link>{"[] array, int arrayIndex)"}</code> | <span className="api-desc">Copies the entries into an array.</span> |
| <Link id="m-getenumerator" /><code>{"IEnumerator<"}<Link to="/mod/game-api/types/alta-stats-effects/instance">{"Instance"}</Link>{"> GetEnumerator()"}</code> | <span className="api-desc">Enumerates the entries.</span> |
| <Link id="m-remove" /><code>{"bool Remove("}<Link to="/mod/game-api/types/alta-stats-effects/instance">{"Instance"}</Link>{" item)"}</code> | <span className="api-desc">Removes an entry.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getenumerator-2" /><code>{"private IEnumerator System.Collections.IEnumerable.GetEnumerator()"}</code> | <span className="api-desc">Enumerates the entries.</span> |

</details>

## Used in

Members of other types that take, return or hold a `HealthData`:

<div className="api-used-in">

[`HealthValidation.data`](/mod/game-api/types/alta-stats-effects/healthvalidation#m-data).

</div>
