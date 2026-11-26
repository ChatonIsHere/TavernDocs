---
title: "HighLevelApiClientBase"
description: "Internal base for the high level web API client parts; each holds a reference to the low level client manager."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HighLevelApiClientBase

An **abstract class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

Internal base for the high level web API client parts; each holds a reference to the low level client manager. Not constructible outside the API client assembly.

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)
- **Derived types** [`AccountClient`](/mod/game-api/types/assembly-api-client/accountclient), [`AchievementApiClient`](/mod/game-api/types/assembly-api-client/achievementapiclient), [`AnalyticsClient`](/mod/game-api/types/assembly-api-client/analyticsclient), [`FutureUserActionsClient`](/mod/game-api/types/assembly-api-client/futureuseractionsclient), [`GroupsClient`](/mod/game-api/types/assembly-api-client/groupsclient), [`InstancesClient`](/mod/game-api/types/assembly-api-client/instancesclient), [`LauncherApiClient`](/mod/game-api/types/assembly-api-client/launcherapiclient), [`MatchMakingClient`](/mod/game-api/types/assembly-api-client/matchmakingclient), [`OculusClient`](/mod/game-api/types/assembly-api-client/oculusclient), [`PicoClient`](/mod/game-api/types/assembly-api-client/picoclient), [`PlayerReportsClient`](/mod/game-api/types/assembly-api-client/playerreportsclient), [`RecentPlayersClient`](/mod/game-api/types/assembly-api-client/recentplayersclient), [`SecurityApiClient`](/mod/game-api/types/assembly-api-client/securityapiclient), [`ServerApiClient`](/mod/game-api/types/assembly-api-client/serverapiclient), [`ServicesApiClient`](/mod/game-api/types/assembly-api-client/servicesapiclient), [`SettingsClient`](/mod/game-api/types/assembly-api-client/settingsclient), [`ShopApiClient`](/mod/game-api/types/assembly-api-client/shopapiclient), [`SocialClient`](/mod/game-api/types/assembly-api-client/socialclient), [`UserApiClient`](/mod/game-api/types/assembly-api-client/userapiclient), [`VoiceApiClient`](/mod/game-api/types/assembly-api-client/voiceapiclient)

## Constructors

<details className="api-private">
<summary>1 private and internal constructor</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"internal HighLevelApiClientBase("}<Link to="/mod/game-api/types/assembly-api-client/ihighlevelapiclientmanager">{"IHighLevelApiClientManager"}</Link>{" clientManager)"}</code> | <span className="api-desc">Creates a `HighLevelApiClientBase` from `clientManager`.</span> |

</details>

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-lowlevel" /><code>{"internal "}<Link to="/mod/game-api/types/assembly-api-client/ihighlevelapiclientmanager">{"IHighLevelApiClientManager"}</Link>{" lowLevel"}</code> | <span className="api-desc">The client manager that owns this client; subclasses send requests through its `ApiClient`.</span> |

</details>
