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

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"VersionMarker()"}</code> | <span className="api-desc">Creates a `VersionMarker` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-name" /><code>{"string Name { get; set; }"}</code> | <span className="api-desc">The marker's name.</span> |
| <Link id="m-version" /><code><Link to="/mod/game-api/types/assembly-api-models/gameversion">{"GameVersion"}</Link>{" Version { get; set; }"}</code> | <span className="api-desc">The game version it marks.</span> |

## Used in

Members of other types that take, return or hold a `VersionMarker`:

<div className="api-used-in">

[`LauncherGameInfoFull.VersionMarkers`](/mod/game-api/types/assembly-api-models/launchergameinfofull#m-versionmarkers).

</div>
