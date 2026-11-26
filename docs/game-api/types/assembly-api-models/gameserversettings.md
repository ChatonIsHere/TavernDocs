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

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-abovepenalty" /><code>{"const float AbovePenalty"}</code> | Ranking penalty (2) per player above `IdealPlayerCount`, probably. |
| <Link id="m-belowpenalty" /><code>{"const float BelowPenalty"}</code> | Ranking penalty (1) per player below `IdealPlayerCount`, probably. |
| <Link id="m-defaultport" /><code>{"const int DefaultPort"}</code> | Default game server port, 1757. |
| <Link id="m-idealplayercount" /><code>{"const int IdealPlayerCount"}</code> | Player count (12) treated as ideal when ranking servers, probably. |
| <Link id="m-isrankingzerolowest" /><code>{"const bool IsRankingZeroLowest"}</code> | Ranking flag, true; probably means a rank of 0 is the worst. |
| <Link id="m-maxplayability" /><code>{"const float MaxPlayability"}</code> | Top playability score, 36, probably used in ranking. |
| <Link id="m-onlinepingtime" /><code>{"const int OnlinePingTime"}</code> | Seconds (30) between a server's online pings, probably. |
| <Link id="m-timetoappearonlinesincelastping" /><code>{"static int TimeToAppearOnlineSinceLastPing"}</code> | Seconds (40) since the last ping for which a server still counts as online, probably. |
