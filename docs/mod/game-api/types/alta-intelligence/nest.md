---
title: "Nest"
description: "A spot creatures can claim as a nest."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Nest

A **class** in `Root.Township`, `Alta.Creatures`.

A spot creatures can claim as a nest. Enabled nests are free and listed by type, and `ActiveNest` AI finds and claims them.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Nest()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-nests" /><code>{"private static Dictionary<"}<Link to="/mod/game-api/types/alta-intelligence/nesttype">{"NestType"}</Link>{", HashSet<"}<Link to="/mod/game-api/types/alta-intelligence/nest">{"Nest"}</Link>{">> nests"}</code> | <span className="api-desc">Free nests, by nest type.</span> |
| <Link id="m-type" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/nesttype">{"NestType"}</Link>{" type"}</code> | <span className="api-desc">The kind of nest this is.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isfree" /><code>{"bool IsFree { get; set; }"}</code> | <span className="api-desc">Whether the nest is free. It is the component's `enabled` flag, so claiming a nest disables it.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-findclosest" /><code>{"static "}<Link to="/mod/game-api/types/alta-intelligence/nest">{"Nest"}</Link>{" FindClosest("}<Link to="/mod/game-api/types/alta-intelligence/nesttype">{"NestType"}</Link>{" type, Vector3 position, float maximumDistance)"}</code> | <span className="api-desc">Returns the closest free nest of a type within the given distance, or null.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Removes the nest from the free list.</span> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Adds the nest to the free list for its type.</span> |

</details>

## Used in

Members of other types that take, return or hold a `Nest`:

<div className="api-used-in">

[`ActiveNest.nest`](/mod/game-api/types/alta-intelligence/activenest#m-nest).

</div>
