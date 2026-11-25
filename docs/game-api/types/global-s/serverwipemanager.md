---
title: "ServerWipeManager"
description: "IsWiping stops saves."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerWipeManager

A **static class** in `Root.Township`, no namespace.

`IsWiping` stops saves.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Documented in** [Saving](/game-api/networking/saving)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-hadissues" /><code>{"private static bool hadIssues"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-iswiping" /><code>{"static bool IsWiping { get; set; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-cavewipe" /><code>{"static event Action CaveWipe"}</code> |  |
| <Link id="m-wipeoperationsfinished" /><code>{"static event Action WipeOperationsFinished"}</code> |  |
| <Link id="m-wipestarting" /><code>{"static event Action WipeStarting"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-deletechunksandcache" /><code>{"static async Task DeleteChunksAndCache()"}</code> |  |
| <Link id="m-deleteentiresavefolder" /><code>{"static async Task DeleteEntireSaveFolder()"}</code> |  |
| <Link id="m-fullwipe" /><code>{"static async Task FullWipe()"}</code> |  |
| <Link id="m-wipecaves" /><code>{"static async Task WipeCaves()"}</code> |  |
| <Link id="m-wipeserver" /><code>{"static async Task WipeServer(bool isSettingOffline = false)"}</code> |  |
| <Link id="m-fastwipeoperations" /><code>{"private static async Task FastWipeOperations()"}</code> |  |
| <Link id="m-migratelockboxes" /><code>{"private static void MigrateLockboxes()"}</code> |  |
| <Link id="m-moveplayeroutofcaves" /><code>{"private static async Task<bool> MovePlayerOutOfCaves("}<Link to="/game-api/types/alta-utilities/playersave">{"PlayerSave"}</Link>{" save)"}</code> |  |
| <Link id="m-runthroughallplayers" /><code>{"private static async Task RunThroughAllPlayers(Func<"}<Link to="/game-api/types/alta-utilities/playersave">{"PlayerSave"}</Link>{", Task<bool>> saveAction)"}</code> |  |
| <Link id="m-sanitizeplayerssaves" /><code>{"private static async Task<bool> SanitizePlayersSaves("}<Link to="/game-api/types/alta-utilities/playersave">{"PlayerSave"}</Link>{" save)"}</code> |  |
| <Link id="m-wipechunk" /><code>{"private static async Task WipeChunk("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> |  |
| <Link id="m-wipeoperations" /><code>{"private static async Task WipeOperations()"}</code> |  |
