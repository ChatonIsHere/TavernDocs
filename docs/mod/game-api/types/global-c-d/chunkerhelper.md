---
title: "ChunkerHelper"
description: "Extension methods for IChunker that run a full spawn or despawn for one player in one call."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ChunkerHelper

A **static class** in `Root.Township`, the global namespace.

Extension methods for `IChunker` that run a full spawn or despawn for one player in one call.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Attributes** `Extension`

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-despawnfor" /><code>{"static void DespawnFor("}<Link to="/mod/game-api/types/global-i-l/ichunker">{"IChunker"}</Link>{" chunker, "}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player, bool isUnload)"}</code> | <span className="api-desc">Starts and, if allowed, ends a despawn of the chunker for a player, not as part of a chunk move or sync.</span> |
| <Link id="m-spawnfor" /><code>{"static void SpawnFor("}<Link to="/mod/game-api/types/global-i-l/ichunker">{"IChunker"}</Link>{" chunker, "}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Starts and, if allowed, ends a spawn of the chunker for a player, not as part of a chunk move or sync.</span> |
