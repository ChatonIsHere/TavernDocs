---
title: "ChunkFileHelper"
description: "Server helper for finding chunk save files: shared chunks go in the server's chunks folder, personal chunks in a subfolder of the owner's player folder."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ChunkFileHelper

A **static class** in `Root.Township`, `Alta.Chunks`.

Server helper for finding chunk save files: shared chunks go in the server's chunks folder, personal chunks in a subfolder of the owner's player folder.

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-overridefoldersavepath" /><code>{"static string OverrideFolderSavePath { get; set; }"}</code> | Settable path. Not read by this class. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-cleancavessave" /><code>{"static void CleanCavesSave()"}</code> | Deletes every chunk save file whose name contains `Cave Layer`. Called by `CaveLayerManager`. |
| <Link id="m-getfile" /><code>{"static "}<Link to="/mod/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{" GetFile("}<Link to="/mod/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" folder, string name)"}</code> | Gets a chunk's `.bytes` save file, by folder and name or from a `Chunk` (in its owner's folder if it is a personal chunk). |
| <Link id="m-getfile-2" /><code>{"static "}<Link to="/mod/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{" GetFile("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | Gets a chunk's `.bytes` save file, by folder and name or from a `Chunk` (in its owner's folder if it is a personal chunk). |
| <Link id="m-getfolder" /><code>{"static "}<Link to="/mod/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" GetFolder(int playerIdentifier = 0)"}</code> | The server's chunks folder, or for a non-zero player id, that player's subfolder. |
