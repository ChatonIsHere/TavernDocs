---
title: "PlatformHandAlignment"
description: "A hand offset for one platform (player mode), listed per hand in ControllerOffsetSettings."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlatformHandAlignment

A **class** in `Root.Township`, `Alta.Character`.

A hand offset for one platform (player mode), listed per hand in `ControllerOffsetSettings`.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlatformHandAlignment()"}</code> | <span className="api-desc">Creates a `PlatformHandAlignment` with default values.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-platform" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" platform"}</code> | <span className="api-desc">Backing field for `Platform`.</span> |
| <Link id="m-transformalignement" /><code>{"private SerializableTransform transformAlignement"}</code> | <span className="api-desc">Backing field for `TransformAlignement`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-platform-2" /><code><Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" Platform { get; }"}</code> | <span className="api-desc">The platform this offset is for.</span> |
| <Link id="m-transformalignement-2" /><code>{"SerializableTransform TransformAlignement { get; }"}</code> | <span className="api-desc">The offset transform applied to the hand on that platform.</span> |

## Used in

Members of other types that take, return or hold a `PlatformHandAlignment`:

<div className="api-used-in">

[`ControllerOffsetSettings.GetHandAlignmentsForHandIndex`](/mod/game-api/types/global-c-d/controlleroffsetsettings#m-gethandalignmentsforhandindex), [`ControllerOffsetSettings.leftHandAlignment`](/mod/game-api/types/global-c-d/controlleroffsetsettings#m-lefthandalignment), [`ControllerOffsetSettings.OffsetIsOpenXr`](/mod/game-api/types/global-c-d/controlleroffsetsettings#m-offsetisopenxr), [`ControllerOffsetSettings.rightHandAlignment`](/mod/game-api/types/global-c-d/controlleroffsetsettings#m-righthandalignment).

</div>
