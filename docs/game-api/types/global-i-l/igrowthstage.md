---
title: "IGrowthStage"
description: "An entity that is at some stage of growth, such as a plant (GrowerComponent, GrowthStageComponent)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IGrowthStage

An **interface** in `Root.Township`, no namespace.

An entity that is at some stage of growth, such as a plant (`GrowerComponent`, `GrowthStageComponent`).

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Derived types** [`GrowerComponent`](/game-api/types/global-e-h/growercomponent), [`GrowthStageComponent`](/game-api/types/global-e-h/growthstagecomponent)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentstage" /><code><Link to="/game-api/types/global-e-h/growthstage">{"GrowthStage"}</Link>{" CurrentStage { get; }"}</code> | The growth stage it is at now. |
| <Link id="m-issetup" /><code>{"bool IsSetup { get; }"}</code> | True once the stage has been set up. |
