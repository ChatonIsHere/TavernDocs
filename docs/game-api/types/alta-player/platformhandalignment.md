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

- **Listed in** [Players and characters](/game-api/types/alta-player)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PlatformHandAlignment()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-platform" /><code>{"private "}<Link to="/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" platform"}</code> | Backing field for `Platform`. |
| <Link id="m-transformalignement" /><code>{"private SerializableTransform transformAlignement"}</code> | Backing field for `TransformAlignement`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-platform-2" /><code><Link to="/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" Platform { get; }"}</code> | The platform this offset is for. |
| <Link id="m-transformalignement-2" /><code>{"SerializableTransform TransformAlignement { get; }"}</code> | The offset transform applied to the hand on that platform. |

## Used in

Members of other types that take, return or hold a `PlatformHandAlignment`:

[`ControllerOffsetSettings.GetHandAlignmentsForHandIndex`](/game-api/types/global-c-d/controlleroffsetsettings#m-gethandalignmentsforhandindex), [`ControllerOffsetSettings.leftHandAlignment`](/game-api/types/global-c-d/controlleroffsetsettings#m-lefthandalignment), [`ControllerOffsetSettings.OffsetIsOpenXr`](/game-api/types/global-c-d/controlleroffsetsettings#m-offsetisopenxr), [`ControllerOffsetSettings.rightHandAlignment`](/game-api/types/global-c-d/controlleroffsetsettings#m-righthandalignment).
