---
title: "VersionMarker"
description: "A named game version shown in the launcher, part of LauncherGameInfoFull.VersionMarkers."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# VersionMarker

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

A named game version shown in the launcher, part of `LauncherGameInfoFull.VersionMarkers`.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"VersionMarker()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-name" /><code>{"string Name { get; set; }"}</code> | The marker's name. |
| <Link id="m-version" /><code><Link to="/game-api/types/assembly-api-models/gameversion">{"GameVersion"}</Link>{" Version { get; set; }"}</code> | The game version it marks. |

## Used in

Members of other types that take, return or hold a `VersionMarker`:

[`LauncherGameInfoFull.VersionMarkers`](/game-api/types/assembly-api-models/launchergameinfofull#m-versionmarkers).
