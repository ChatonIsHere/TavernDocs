---
title: "ResourceDropChance"
description: "One possible resource drop with its weighting, used in BoulderDefinition.ResourcesDropChances."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ResourceDropChance

A **class** in `Root.Township`, `Alta.Impact`.

One possible resource drop with its weighting, used in `BoulderDefinition.ResourcesDropChances`.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ResourceDropChance()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-dropweighting" /><code>{"float dropWeighting"}</code> | Weighting from 0 to 1 for this resource. |
| <Link id="m-resourcedefinition" /><code><Link to="/game-api/types/alta-items/item">{"Item"}</Link>{" resourceDefinition"}</code> | The item that can drop. |

## Used in

Members of other types that take, return or hold a `ResourceDropChance`:

[`BoulderDefinition.resourcesDropChances`](/game-api/types/alta-items/boulderdefinition#m-resourcesdropchances), [`BoulderDefinition.ResourcesDropChances`](/game-api/types/alta-items/boulderdefinition#m-resourcesdropchances-2).
