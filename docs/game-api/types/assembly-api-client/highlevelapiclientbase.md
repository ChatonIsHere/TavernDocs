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

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)
- **Derived types** [`AccountClient`](/game-api/types/assembly-api-client/accountclient), [`AchievementApiClient`](/game-api/types/assembly-api-client/achievementapiclient), [`AnalyticsClient`](/game-api/types/assembly-api-client/analyticsclient), [`FutureUserActionsClient`](/game-api/types/assembly-api-client/futureuseractionsclient), [`GroupsClient`](/game-api/types/assembly-api-client/groupsclient), [`InstancesClient`](/game-api/types/assembly-api-client/instancesclient), [`LauncherApiClient`](/game-api/types/assembly-api-client/launcherapiclient), [`MatchMakingClient`](/game-api/types/assembly-api-client/matchmakingclient), [`OculusClient`](/game-api/types/assembly-api-client/oculusclient), [`PicoClient`](/game-api/types/assembly-api-client/picoclient), [`PlayerReportsClient`](/game-api/types/assembly-api-client/playerreportsclient), [`RecentPlayersClient`](/game-api/types/assembly-api-client/recentplayersclient), [`SecurityApiClient`](/game-api/types/assembly-api-client/securityapiclient), [`ServerApiClient`](/game-api/types/assembly-api-client/serverapiclient), [`ServicesApiClient`](/game-api/types/assembly-api-client/servicesapiclient), [`SettingsClient`](/game-api/types/assembly-api-client/settingsclient), [`ShopApiClient`](/game-api/types/assembly-api-client/shopapiclient), [`SocialClient`](/game-api/types/assembly-api-client/socialclient), [`UserApiClient`](/game-api/types/assembly-api-client/userapiclient), [`VoiceApiClient`](/game-api/types/assembly-api-client/voiceapiclient)

## Constructors

<details>
<summary>1 private and internal constructor</summary>

| Member |
| --- |
| <Link id="m-ctor" /><code>{"internal HighLevelApiClientBase("}<Link to="/game-api/types/assembly-api-client/ihighlevelapiclientmanager">{"IHighLevelApiClientManager"}</Link>{" clientManager)"}</code> |

</details>

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-lowlevel" /><code>{"internal "}<Link to="/game-api/types/assembly-api-client/ihighlevelapiclientmanager">{"IHighLevelApiClientManager"}</Link>{" lowLevel"}</code> | The client manager that owns this client; subclasses send requests through its `ApiClient`. |

</details>
