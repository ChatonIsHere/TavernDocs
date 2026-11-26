---
title: "IImpactEffect"
description: "Something that reacts to an impact hit."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IImpactEffect

An **interface** in `Root.Township`, `Alta.Impact`.

Something that reacts to an impact hit.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Derived types** [`FlintSpark`](/mod/game-api/types/global-e-h/flintspark)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-trigger" /><code>{"void Trigger("}<Link to="/mod/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" hit)"}</code> | Runs the reaction for the given hit. |
