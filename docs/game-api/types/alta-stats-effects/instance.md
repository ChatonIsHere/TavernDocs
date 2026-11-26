---
title: "Instance"
description: "One entry in a HealthData asset: a prefab and the base health it should get."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Instance

A **class** in `Root.Township`, `Alta.StatSystem`.

One entry in a `HealthData` asset: a prefab and the base health it should get. Editor and bake tooling; in this build `GetInstance` always returns null.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Derived types** [`HealthData`](/game-api/types/alta-stats-effects/healthdata)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Instance(GameObject prefab, float health)"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-health" /><code>{"private float health"}</code> | Base health value to give the prefab's health stat. |
| <Link id="m-prefab" /><code>{"private GameObject prefab"}</code> | The prefab whose `HealthObject` gets the health value. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-apply" /><code>{"void Apply("}<Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" healthStat, Transform parent)"}</code> | Finds the prefab's `HealthObject`, adds a `StatManager` if missing and sets its base value for the given health stat to `health`. |
| <Link id="m-applyreference" /><code>{"void ApplyReference(FieldInfo field, Transform parent)"}</code> | Sets the given field on the prefab's `HealthObject` to that object's `StatManager`, probably via reflection from editor tooling. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getinstance" /><code>{"private GameObject GetInstance(GameObject prefab, Transform parent)"}</code> | Meant to return the prefab instance under the parent; stubbed to return null in this build, so `Apply` and `ApplyReference` would throw. |

</details>

## Used in

Members of other types that take, return or hold a `Instance`:

[`HealthData.Add`](/game-api/types/alta-stats-effects/healthdata#m-add), [`HealthData.Contains`](/game-api/types/alta-stats-effects/healthdata#m-contains), [`HealthData.CopyTo`](/game-api/types/alta-stats-effects/healthdata#m-copyto), [`HealthData.GetEnumerator`](/game-api/types/alta-stats-effects/healthdata#m-getenumerator), [`HealthData.healthInstances`](/game-api/types/alta-stats-effects/healthdata#m-healthinstances), [`HealthData.Remove`](/game-api/types/alta-stats-effects/healthdata#m-remove).
