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

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Derived types** [`HealthData`](/mod/game-api/types/alta-stats-effects/healthdata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Instance(GameObject prefab, float health)"}</code> | <span className="api-desc">Creates an `Instance` from `prefab` and `health`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-health" /><code>{"private float health"}</code> | <span className="api-desc">Base health value to give the prefab's health stat.</span> |
| <Link id="m-prefab" /><code>{"private GameObject prefab"}</code> | <span className="api-desc">The prefab whose `HealthObject` gets the health value.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-apply" /><code>{"void Apply("}<Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" healthStat, Transform parent)"}</code> | <span className="api-desc">Finds the prefab's `HealthObject`, adds a `StatManager` if missing and sets its base value for the given health stat to `health`.</span> |
| <Link id="m-applyreference" /><code>{"void ApplyReference(FieldInfo field, Transform parent)"}</code> | <span className="api-desc">Sets the given field on the prefab's `HealthObject` to that object's `StatManager`, probably via reflection from editor tooling.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getinstance" /><code>{"private GameObject GetInstance(GameObject prefab, Transform parent)"}</code> | <span className="api-desc">Meant to return the prefab instance under the parent; stubbed to return null in this build, so `Apply` and `ApplyReference` would throw.</span> |

</details>

## Used in

Members of other types that take, return or hold a `Instance`:

<div className="api-used-in">

[`HealthData.Add`](/mod/game-api/types/alta-stats-effects/healthdata#m-add), [`HealthData.Contains`](/mod/game-api/types/alta-stats-effects/healthdata#m-contains), [`HealthData.CopyTo`](/mod/game-api/types/alta-stats-effects/healthdata#m-copyto), [`HealthData.GetEnumerator`](/mod/game-api/types/alta-stats-effects/healthdata#m-getenumerator), [`HealthData.healthInstances`](/mod/game-api/types/alta-stats-effects/healthdata#m-healthinstances), [`HealthData.Remove`](/mod/game-api/types/alta-stats-effects/healthdata#m-remove).

</div>
