---
title: "PlayerSaveUtility"
description: "Server: finds and loads per-player save files."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerSaveUtility

A **class** in `Root.Township`, `Alta.Utilities`.

Server: finds and loads per-player save files. `ServerSaveUtility` makes one over the save's `Players` folder; each player has a subfolder and file named after their user ID.

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PlayerSaveUtility("}<Link to="/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" folder)"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-playerfolder" /><code><Link to="/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" PlayerFolder { get; }"}</code> | Folder holding one subfolder per player. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-exists" /><code>{"bool Exists(int userIdentifier)"}</code> | Whether a save file exists for the user ID. |
| <Link id="m-load" /><code>{"async Task<"}<Link to="/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{"> Load(int userIdentifier)"}</code> | Reads the user's save file as a `PlayerSave` and returns the file. |

## Used in

Members of other types that take, return or hold a `PlayerSaveUtility`:

[`ServerSaveUtility.playerSaveUtility`](/game-api/types/alta-utilities/serversaveutility#m-playersaveutility), [`ServerSaveUtility.PlayerSaveUtility`](/game-api/types/alta-utilities/serversaveutility#m-playersaveutility-2).
