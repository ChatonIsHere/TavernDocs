---
title: "GlobalLiquidContainer"
description: "Single scene liquid container used as a source and sink: liquid created from nothing is poured from it, and drunk or emptied liquid is poured into it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GlobalLiquidContainer

A **class** in `Root.Township`, `Alta.Liquid`.

Single scene liquid container used as a source and sink: liquid created from nothing is poured from it, and drunk or emptied liquid is poured into it. Get it with `Instance`.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** [`LiquidContainer`](/game-api/types/alta-stats-effects/liquidcontainer)
- **Attributes** `ExecuteInEditMode`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"GlobalLiquidContainer()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-receivetransitionmultiplier" /><code>{"private float receiveTransitionMultiplier"}</code> | Backing field for `ReceiveTransitionMultiplier`. Defaults to 0.5. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"static "}<Link to="/game-api/types/alta-stats-effects/globalliquidcontainer">{"GlobalLiquidContainer"}</Link>{" Instance { get; protected set; }"}</code> | The one global container. |
| <Link id="m-receivetransitionmultiplier-2" /><code>{"override float ReceiveTransitionMultiplier { get; }"}</code> | How fast it takes in liquid from transitions. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-fillliquidintocontainer" /><code>{"static bool FillLiquidIntoContainer("}<Link to="/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" liquidType, "}<Link to="/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" container, int amount, bool isForced = false)"}</code> | Pours an amount of the given liquid into a container. Used for spawning liquid. |
| <Link id="m-removeliquidfromcontainer" /><code>{"static bool RemoveLiquidFromContainer("}<Link to="/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" container, int amount, bool isForced = false)"}</code> | Pours an amount out of a container into the global one. Used for drinking and emptying. |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | Sets `Instance`, logging an error if one already exists. |
