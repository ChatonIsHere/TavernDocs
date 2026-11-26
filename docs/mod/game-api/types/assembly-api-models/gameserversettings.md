---
title: "GameServerSettings"
description: "Constants about game servers shared with the Alta API: ping timing, default port and, probably, how servers are ranked for players."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GameServerSettings

A **static class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Settings`.

Constants about game servers shared with the Alta API: ping timing, default port and, probably, how servers are ranked for players.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-abovepenalty" /><code>{"const float AbovePenalty"}</code> | <span className="api-desc">Ranking penalty (2) per player above `IdealPlayerCount`, probably.</span> |
| <Link id="m-belowpenalty" /><code>{"const float BelowPenalty"}</code> | <span className="api-desc">Ranking penalty (1) per player below `IdealPlayerCount`, probably.</span> |
| <Link id="m-defaultport" /><code>{"const int DefaultPort"}</code> | <span className="api-desc">Default game server port, 1757.</span> |
| <Link id="m-idealplayercount" /><code>{"const int IdealPlayerCount"}</code> | <span className="api-desc">Player count (12) treated as ideal when ranking servers, probably.</span> |
| <Link id="m-isrankingzerolowest" /><code>{"const bool IsRankingZeroLowest"}</code> | <span className="api-desc">Ranking flag, true; probably means a rank of 0 is the worst.</span> |
| <Link id="m-maxplayability" /><code>{"const float MaxPlayability"}</code> | <span className="api-desc">Top playability score, 36, probably used in ranking.</span> |
| <Link id="m-onlinepingtime" /><code>{"const int OnlinePingTime"}</code> | <span className="api-desc">Seconds (30) between a server's online pings, probably.</span> |
| <Link id="m-timetoappearonlinesincelastping" /><code>{"static int TimeToAppearOnlineSinceLastPing"}</code> | <span className="api-desc">Seconds (40) since the last ping for which a server still counts as online, probably.</span> |
