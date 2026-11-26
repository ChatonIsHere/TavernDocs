---
title: "NameBoardsSettings"
description: "Global settings for the name boards shown above players' heads."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NameBoardsSettings

A **class** in `Root.Township`, no namespace.

Global settings for the name boards shown above players' heads. Get it with `GlobalSettings<NameBoardsSettings>.Instance`.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** [`GlobalSettings<NameBoardsSettings>`](/game-api/types/assembly-other/globalsettings-t)
- **Derived types** [`NameBoardsSettings`](/game-api/types/global-m-o/nameboardssettings)
- **Attributes** `GlobalSettings`, `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NameBoardsSettings()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-distancefromhead" /><code>{"private float distanceFromHead"}</code> | Backing field for `DistanceFromHead`. |
| <Link id="m-memberstatusshield" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{"[] memberStatusShield"}</code> | Backing field for `MemberStatusShield`. |
| <Link id="m-nameboarddefinition" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" nameBoardDefinition"}</code> | Backing field for `NameBoardDefinition`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-distancefromhead-2" /><code>{"float DistanceFromHead { get; }"}</code> | How far above the head the name board sits. |
| <Link id="m-memberstatusshield-2" /><code><Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{"[] MemberStatusShield { get; }"}</code> | Pooled shield visuals, one per `PlayerSubscriberStatus` value. |
| <Link id="m-nameboarddefinition-2" /><code><Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" NameBoardDefinition { get; }"}</code> | The pooled object used for a name board. |

## Used in

Members of other types that take, return or hold a `NameBoardsSettings`:

[`ShowNames.nameBoardSettings`](/game-api/types/alta-player/shownames#m-nameboardsettings).
