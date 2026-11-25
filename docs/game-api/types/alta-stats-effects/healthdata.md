---
title: "HealthData"
description: "class HealthData in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HealthData

A **class** in `Root.Township`, `Alta.StatSystem`.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** `ScriptableObject`, `ICollection<Instance>`, `IEnumerable<Instance>`, `IEnumerable`
- **Documented in** [Stats](/game-api/game-systems/stats)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"HealthData()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member |
| --- |
| <Link id="m-healthinstances" /><code>{"private List<"}<Link to="/game-api/types/alta-stats-effects/instance">{"Instance"}</Link>{"> healthInstances"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-count" /><code>{"int Count { get; }"}</code> |
| <Link id="m-isreadonly" /><code>{"bool IsReadOnly { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-add" /><code>{"void Add("}<Link to="/game-api/types/alta-stats-effects/instance">{"Instance"}</Link>{" item)"}</code> |
| <Link id="m-clear" /><code>{"void Clear()"}</code> |
| <Link id="m-contains" /><code>{"bool Contains("}<Link to="/game-api/types/alta-stats-effects/instance">{"Instance"}</Link>{" item)"}</code> |
| <Link id="m-copyto" /><code>{"void CopyTo("}<Link to="/game-api/types/alta-stats-effects/instance">{"Instance"}</Link>{"[] array, int arrayIndex)"}</code> |
| <Link id="m-getenumerator" /><code>{"IEnumerator<"}<Link to="/game-api/types/alta-stats-effects/instance">{"Instance"}</Link>{"> GetEnumerator()"}</code> |
| <Link id="m-remove" /><code>{"bool Remove("}<Link to="/game-api/types/alta-stats-effects/instance">{"Instance"}</Link>{" item)"}</code> |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-getenumerator-2" /><code>{"private IEnumerator System.Collections.IEnumerable.GetEnumerator()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `HealthData`:

[`HealthValidation.data`](/game-api/types/alta-stats-effects/healthvalidation#m-data).
