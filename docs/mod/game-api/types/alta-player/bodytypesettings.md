---
title: "BodyTypeSettings"
description: "Per-body-type distances for belt docks and stat bars on a character dummy."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BodyTypeSettings

A **class** in `Root.Township`, `Alta.Character`.

Per-body-type distances for belt docks and stat bars on a character dummy. Set by the chosen `CosmeticBodyType`.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BodyTypeSettings()"}</code> | <span className="api-desc">Creates a `BodyTypeSettings` with default values.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-pouchbeltdocksdistanceratio" /><code>{"private float pouchBeltDocksDistanceRatio"}</code> | <span className="api-desc">Backing field for `PouchBeltDocksDistanceRatio`.</span> |
| <Link id="m-statbarsdistanceratio" /><code>{"private float statbarsDistanceRatio"}</code> | <span className="api-desc">Backing field for `StatbarsDistanceRatio`.</span> |
| <Link id="m-toolbeltdocksdistanceratio" /><code>{"private float toolBeltDocksDistanceRatio"}</code> | <span className="api-desc">Backing field for `ToolBeltDocksDistanceRatio`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-pouchbeltdocksdistanceratio-2" /><code>{"float PouchBeltDocksDistanceRatio { get; set; }"}</code> | <span className="api-desc">Scale for how far the pouch belt docks sit from the body.</span> |
| <Link id="m-statbarsdistanceratio-2" /><code>{"float StatbarsDistanceRatio { get; set; }"}</code> | <span className="api-desc">Scale for how far the stat bars sit. Setting it raises `OnStatBarDistanceChanged`.</span> |
| <Link id="m-toolbeltdocksdistanceratio-2" /><code>{"float ToolBeltDocksDistanceRatio { get; set; }"}</code> | <span className="api-desc">Scale for how far the tool belt docks sit from the body. Read when the player character sets up its docks.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-onstatbardistancechanged" /><code>{"event Action<float> OnStatBarDistanceChanged"}</code> | <span className="api-desc">Raised with the new ratio when `StatbarsDistanceRatio` is set.</span> |

## Used in

Members of other types that take, return or hold a `BodyTypeSettings`:

<div className="api-used-in">

[`CharacterDummy.bodyType`](/mod/game-api/types/alta-player/characterdummy#m-bodytype), [`CharacterDummy.BodyType`](/mod/game-api/types/alta-player/characterdummy#m-bodytype-2).

</div>
