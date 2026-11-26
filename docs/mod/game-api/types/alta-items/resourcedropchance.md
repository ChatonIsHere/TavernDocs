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

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ResourceDropChance()"}</code> | <span className="api-desc">Creates a `ResourceDropChance` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-dropweighting" /><code>{"float dropWeighting"}</code> | <span className="api-desc">Weighting from 0 to 1 for this resource.</span> |
| <Link id="m-resourcedefinition" /><code><Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{" resourceDefinition"}</code> | <span className="api-desc">The item that can drop.</span> |

## Used in

Members of other types that take, return or hold a `ResourceDropChance`:

<div className="api-used-in">

[`BoulderDefinition.resourcesDropChances`](/mod/game-api/types/alta-items/boulderdefinition#m-resourcesdropchances), [`BoulderDefinition.ResourcesDropChances`](/mod/game-api/types/alta-items/boulderdefinition#m-resourcesdropchances-2).

</div>
