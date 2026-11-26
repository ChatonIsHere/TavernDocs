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

- **Listed in** [Players and characters](/game-api/types/alta-player)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"BodyTypeSettings()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-pouchbeltdocksdistanceratio" /><code>{"private float pouchBeltDocksDistanceRatio"}</code> | Backing field for `PouchBeltDocksDistanceRatio`. |
| <Link id="m-statbarsdistanceratio" /><code>{"private float statbarsDistanceRatio"}</code> | Backing field for `StatbarsDistanceRatio`. |
| <Link id="m-toolbeltdocksdistanceratio" /><code>{"private float toolBeltDocksDistanceRatio"}</code> | Backing field for `ToolBeltDocksDistanceRatio`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-pouchbeltdocksdistanceratio-2" /><code>{"float PouchBeltDocksDistanceRatio { get; set; }"}</code> | Scale for how far the pouch belt docks sit from the body. |
| <Link id="m-statbarsdistanceratio-2" /><code>{"float StatbarsDistanceRatio { get; set; }"}</code> | Scale for how far the stat bars sit. Setting it raises `OnStatBarDistanceChanged`. |
| <Link id="m-toolbeltdocksdistanceratio-2" /><code>{"float ToolBeltDocksDistanceRatio { get; set; }"}</code> | Scale for how far the tool belt docks sit from the body. Read when the player character sets up its docks. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-onstatbardistancechanged" /><code>{"event Action<float> OnStatBarDistanceChanged"}</code> | Raised with the new ratio when `StatbarsDistanceRatio` is set. |

## Used in

Members of other types that take, return or hold a `BodyTypeSettings`:

[`CharacterDummy.bodyType`](/game-api/types/alta-player/characterdummy#m-bodytype), [`CharacterDummy.BodyType`](/game-api/types/alta-player/characterdummy#m-bodytype-2).
