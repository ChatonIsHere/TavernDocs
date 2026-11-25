---
title: "Instance"
description: "class Instance in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Instance

A **class** in `Root.Township`, `Alta.StatSystem`.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Derived types** [`HealthData`](/game-api/types/alta-stats-effects/healthdata)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Instance(GameObject prefab, float health)"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-health" /><code>{"private float health"}</code> |
| <Link id="m-prefab" /><code>{"private GameObject prefab"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-apply" /><code>{"void Apply("}<Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" healthStat, Transform parent)"}</code> |
| <Link id="m-applyreference" /><code>{"void ApplyReference(FieldInfo field, Transform parent)"}</code> |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-getinstance" /><code>{"private GameObject GetInstance(GameObject prefab, Transform parent)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `Instance`:

[`HealthData.Add`](/game-api/types/alta-stats-effects/healthdata#m-add), [`HealthData.Contains`](/game-api/types/alta-stats-effects/healthdata#m-contains), [`HealthData.CopyTo`](/game-api/types/alta-stats-effects/healthdata#m-copyto), [`HealthData.GetEnumerator`](/game-api/types/alta-stats-effects/healthdata#m-getenumerator), [`HealthData.healthInstances`](/game-api/types/alta-stats-effects/healthdata#m-healthinstances), [`HealthData.Remove`](/game-api/types/alta-stats-effects/healthdata#m-remove).
