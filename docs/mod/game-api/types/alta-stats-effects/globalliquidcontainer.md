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

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** [`LiquidContainer`](/mod/game-api/types/alta-stats-effects/liquidcontainer)
- **Attributes** `ExecuteInEditMode`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GlobalLiquidContainer()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-receivetransitionmultiplier" /><code>{"private float receiveTransitionMultiplier"}</code> | <span className="api-desc">Backing field for `ReceiveTransitionMultiplier`. Defaults to 0.5.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"static "}<Link to="/mod/game-api/types/alta-stats-effects/globalliquidcontainer">{"GlobalLiquidContainer"}</Link>{" Instance { get; protected set; }"}</code> | <span className="api-desc">The one global container.</span> |
| <Link id="m-receivetransitionmultiplier-2" /><code>{"override float ReceiveTransitionMultiplier { get; }"}</code> | <span className="api-desc">How fast it takes in liquid from transitions.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-fillliquidintocontainer" /><code>{"static bool FillLiquidIntoContainer("}<Link to="/mod/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" liquidType, "}<Link to="/mod/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" container, int amount, bool isForced = false)"}</code> | <span className="api-desc">Pours an amount of the given liquid into a container. Used for spawning liquid.</span> |
| <Link id="m-removeliquidfromcontainer" /><code>{"static bool RemoveLiquidFromContainer("}<Link to="/mod/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" container, int amount, bool isForced = false)"}</code> | <span className="api-desc">Pours an amount out of a container into the global one. Used for drinking and emptying.</span> |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | <span className="api-desc">Sets `Instance`, logging an error if one already exists.</span> |
