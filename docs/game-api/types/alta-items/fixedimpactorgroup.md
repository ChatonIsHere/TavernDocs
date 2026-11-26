---
title: "FixedImpactorGroup"
description: "A group of FixedImpactor components that can be charged or reset together."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FixedImpactorGroup

A **class** in `Root.Township`, `Alta.Impact`.

A group of `FixedImpactor` components that can be charged or reset together.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`ComponentGroup<FixedImpactor>`](/game-api/types/global-c-d/componentgroup-t)
- **Documented in** [Combat, damage and death](/game-api/creatures/combat-and-damage)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"FixedImpactorGroup()"}</code> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-charge" /><code>{"void Charge()"}</code> | Calls `Charge` on every impactor in the group. |
| <Link id="m-reset" /><code>{"void Reset()"}</code> | Calls `Reset` on every impactor in the group. |
