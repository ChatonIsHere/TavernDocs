---
title: "PatchNotes"
description: "Web API model for the patch notes of a game version, part of LauncherGameInfoFull."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PatchNotes

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

Web API model for the patch notes of a game version, part of `LauncherGameInfoFull`.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PatchNotes()"}</code> | <span className="api-desc">Creates a `PatchNotes` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-url" /><code>{"string Url { get; set; }"}</code> | <span className="api-desc">Address of the patch notes page.</span> |
| <Link id="m-version" /><code><Link to="/mod/game-api/types/assembly-api-models/gameversion">{"GameVersion"}</Link>{" Version { get; set; }"}</code> | <span className="api-desc">The game version the notes are for.</span> |

## Used in

Members of other types that take, return or hold a `PatchNotes`:

<div className="api-used-in">

[`LauncherGameInfoFull.PatchNotes`](/mod/game-api/types/assembly-api-models/launchergameinfofull#m-patchnotes).

</div>
