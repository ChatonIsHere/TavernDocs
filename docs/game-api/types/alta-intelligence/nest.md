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

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Nest()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-nests" /><code>{"private static Dictionary<"}<Link to="/game-api/types/alta-intelligence/nesttype">{"NestType"}</Link>{", HashSet<"}<Link to="/game-api/types/alta-intelligence/nest">{"Nest"}</Link>{">> nests"}</code> | Free nests, by nest type. |
| <Link id="m-type" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/nesttype">{"NestType"}</Link>{" type"}</code> | The kind of nest this is. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isfree" /><code>{"bool IsFree { get; set; }"}</code> | Whether the nest is free. It is the component's `enabled` flag, so claiming a nest disables it. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-findclosest" /><code>{"static "}<Link to="/game-api/types/alta-intelligence/nest">{"Nest"}</Link>{" FindClosest("}<Link to="/game-api/types/alta-intelligence/nesttype">{"NestType"}</Link>{" type, Vector3 position, float maximumDistance)"}</code> | Returns the closest free nest of a type within the given distance, or null. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Removes the nest from the free list. |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Adds the nest to the free list for its type. |

</details>

## Used in

Members of other types that take, return or hold a `Nest`:

[`ActiveNest.nest`](/game-api/types/alta-intelligence/activenest#m-nest).
