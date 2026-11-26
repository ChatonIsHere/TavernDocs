---
title: "GameTaskManager.ProgressFlagSync"
description: "Private helper on GameTaskManager that sends a player's completed achievements and micro tutorials when they join."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GameTaskManager.ProgressFlagSync

A **private static class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Private helper on `GameTaskManager` that sends a player's completed achievements and micro tutorials when they join. The server writes, the client reads.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Nested in** [`GameTaskManager`](/mod/game-api/types/global-e-h/gametaskmanager)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-completed" /><code>{"static HashSet<"}<Link to="/mod/game-api/types/global-p/playerprogressflag">{"PlayerProgressFlag"}</Link>{"> Completed { get; }"}</code> | <span className="api-desc">Shared set of flags being written or read.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serialize" /><code>{"static void Serialize("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Handler for the task initialize message: writes the player's completed flags, or reads them on a client.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-readprogressflags" /><code>{"private static void ReadProgressFlags("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, int count)"}</code> | <span className="api-desc">Client: reads the flags and marks each achievement or micro tutorial complete for the local player.</span> |
| <Link id="m-updateitemcount" /><code>{"private static int UpdateItemCount("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Server: fills `Completed` from the player's tracker and returns the count.</span> |
| <Link id="m-writeprogressflags" /><code>{"private static void WriteProgressFlags("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, HashSet<"}<Link to="/mod/game-api/types/global-p/playerprogressflag">{"PlayerProgressFlag"}</Link>{"> flags)"}</code> | <span className="api-desc">Writes each flag to the stream, then clears the set.</span> |

</details>
