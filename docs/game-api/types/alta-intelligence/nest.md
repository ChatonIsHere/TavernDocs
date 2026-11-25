---
title: "Nest"
description: "class Nest in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Nest

A **class** in `Root.Township`, `Alta.Creatures`.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Nest()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-nests" /><code>{"private static Dictionary<"}<Link to="/game-api/types/alta-intelligence/nesttype">{"NestType"}</Link>{", HashSet<"}<Link to="/game-api/types/alta-intelligence/nest">{"Nest"}</Link>{">> nests"}</code> |
| <Link id="m-type" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/nesttype">{"NestType"}</Link>{" type"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-isfree" /><code>{"bool IsFree { get; set; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-findclosest" /><code>{"static "}<Link to="/game-api/types/alta-intelligence/nest">{"Nest"}</Link>{" FindClosest("}<Link to="/game-api/types/alta-intelligence/nesttype">{"NestType"}</Link>{" type, Vector3 position, float maximumDistance)"}</code> |

<details>
<summary>2 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `Nest`:

[`ActiveNest.nest`](/game-api/types/alta-intelligence/activenest#m-nest).
