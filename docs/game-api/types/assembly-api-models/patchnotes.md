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

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PatchNotes()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-url" /><code>{"string Url { get; set; }"}</code> | Address of the patch notes page. |
| <Link id="m-version" /><code><Link to="/game-api/types/assembly-api-models/gameversion">{"GameVersion"}</Link>{" Version { get; set; }"}</code> | The game version the notes are for. |

## Used in

Members of other types that take, return or hold a `PatchNotes`:

[`LauncherGameInfoFull.PatchNotes`](/game-api/types/assembly-api-models/launchergameinfofull#m-patchnotes).
