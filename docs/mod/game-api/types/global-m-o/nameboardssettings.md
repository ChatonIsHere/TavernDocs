---
title: "NameBoardsSettings"
description: "Global settings for the name boards shown above players' heads."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NameBoardsSettings

A **class** in `Root.Township`, the global namespace.

Global settings for the name boards shown above players' heads. Get it with `GlobalSettings<NameBoardsSettings>.Instance`.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Inherits or implements** [`GlobalSettings<NameBoardsSettings>`](/mod/game-api/types/assembly-other/globalsettings-t)
- **Derived types** [`NameBoardsSettings`](/mod/game-api/types/global-m-o/nameboardssettings)
- **Attributes** `GlobalSettings`, `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NameBoardsSettings()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-distancefromhead" /><code>{"private float distanceFromHead"}</code> | <span className="api-desc">Backing field for `DistanceFromHead`.</span> |
| <Link id="m-memberstatusshield" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{"[] memberStatusShield"}</code> | <span className="api-desc">Backing field for `MemberStatusShield`.</span> |
| <Link id="m-nameboarddefinition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" nameBoardDefinition"}</code> | <span className="api-desc">Backing field for `NameBoardDefinition`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-distancefromhead-2" /><code>{"float DistanceFromHead { get; }"}</code> | <span className="api-desc">How far above the head the name board sits.</span> |
| <Link id="m-memberstatusshield-2" /><code><Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{"[] MemberStatusShield { get; }"}</code> | <span className="api-desc">Pooled shield visuals, one per `PlayerSubscriberStatus` value.</span> |
| <Link id="m-nameboarddefinition-2" /><code><Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" NameBoardDefinition { get; }"}</code> | <span className="api-desc">The pooled object used for a name board.</span> |

## Used in

Members of other types that take, return or hold a `NameBoardsSettings`:

<div className="api-used-in">

[`ShowNames.nameBoardSettings`](/mod/game-api/types/alta-player/shownames#m-nameboardsettings).

</div>
