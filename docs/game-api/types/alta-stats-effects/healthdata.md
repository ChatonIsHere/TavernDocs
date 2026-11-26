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

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** `ScriptableObject`, `ICollection<Instance>`, `IEnumerable<Instance>`, `IEnumerable`
- **Documented in** [Stats](/game-api/game-systems/stats)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HealthData()"}</code> | Creates a `HealthData` with default values. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-healthinstances" /><code>{"private List<"}<Link to="/game-api/types/alta-stats-effects/instance">{"Instance"}</Link>{"> healthInstances"}</code> | The stored prefab and health entries. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-count" /><code>{"int Count { get; }"}</code> | Number of entries. |
| <Link id="m-isreadonly" /><code>{"bool IsReadOnly { get; }"}</code> | Always false. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"void Add("}<Link to="/game-api/types/alta-stats-effects/instance">{"Instance"}</Link>{" item)"}</code> | Adds an entry. |
| <Link id="m-clear" /><code>{"void Clear()"}</code> | Removes all entries. |
| <Link id="m-contains" /><code>{"bool Contains("}<Link to="/game-api/types/alta-stats-effects/instance">{"Instance"}</Link>{" item)"}</code> | True if the entry is in the list. |
| <Link id="m-copyto" /><code>{"void CopyTo("}<Link to="/game-api/types/alta-stats-effects/instance">{"Instance"}</Link>{"[] array, int arrayIndex)"}</code> | Copies the entries into an array. |
| <Link id="m-getenumerator" /><code>{"IEnumerator<"}<Link to="/game-api/types/alta-stats-effects/instance">{"Instance"}</Link>{"> GetEnumerator()"}</code> | Enumerates the entries. |
| <Link id="m-remove" /><code>{"bool Remove("}<Link to="/game-api/types/alta-stats-effects/instance">{"Instance"}</Link>{" item)"}</code> | Removes an entry. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getenumerator-2" /><code>{"private IEnumerator System.Collections.IEnumerable.GetEnumerator()"}</code> | Enumerates the entries. |

</details>

## Used in

Members of other types that take, return or hold a `HealthData`:

[`HealthValidation.data`](/game-api/types/alta-stats-effects/healthvalidation#m-data).
