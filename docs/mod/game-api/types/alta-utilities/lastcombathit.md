---
title: "LastCombatHit"
description: "Placeholder debug readout for the last combat hit."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LastCombatHit

A **class** in `Root.Township`, `Alta.Utilities.Profiling`.

Placeholder debug readout for the last combat hit. `IsValid` always returns false, so it never shows.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Inherits or implements** [`LiveDataDisplayBase`](/mod/game-api/types/alta-utilities/livedatadisplaybase)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LastCombatHit()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-lasthit" /><code>{"private float lastHit"}</code> | Last hit value. Never set in this build. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-title" /><code>{"protected override string Title { get; }"}</code> | Label `Last Combat Hit`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-internalupdate" /><code>{"override void InternalUpdate("}<Link to="/mod/game-api/types/alta-utilities/livedatadisplayview">{"LiveDataDisplayView"}</Link>{" _)"}</code> | Empty in this build. |
| <Link id="m-isvalid" /><code>{"override bool IsValid()"}</code> | Always false. |
| <Link id="m-getdata" /><code>{"protected override string GetData()"}</code> | The stored last hit value as text. |
