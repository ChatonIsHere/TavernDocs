---
title: "UserPermissions"
description: "Permission name constants and checks against the logged-in user's API policies."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# UserPermissions

A **static class** in `Alta.Authentication`, the global namespace.

Permission name constants and checks against the logged-in user's API policies. Checks the local logged-in account, so it is mainly a client thing.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-adminvrmodes" /><code>{"const string AdminVrModes"}</code> | Policy name `admin_vr_modes`. |
| <Link id="m-debugfeatures" /><code>{"const string DebugFeatures"}</code> | Policy name `debug_features`. |
| <Link id="m-developer" /><code>{"const string Developer"}</code> | Policy name `server_owner` (note: not `developer`). |
| <Link id="m-moderator" /><code>{"const string Moderator"}</code> | Policy name `moderator`. |
| <Link id="m-playoffline" /><code>{"const string PlayOffline"}</code> | Policy name `play_offline`. |

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-apiclient" /><code>{"private static readonly Lazy<"}<Link to="/mod/game-api/types/assembly-api-client/ihighlevelapiclient">{"IHighLevelApiClient"}</Link>{"> apiClient"}</code> | Lazily resolved API client used to read the logged-in user. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getplayersubscriberstatus" /><code>{"static "}<Link to="/mod/game-api/types/assembly-other/playersubscriberstatus">{"PlayerSubscriberStatus"}</Link>{" GetPlayerSubscriberStatus()"}</code> | Returns `Developer` if the logged-in user has `debug_features`, otherwise `None`. |
| <Link id="m-haspermission" /><code>{"static bool HasPermission(string permission)"}</code> | Whether the logged-in user's policies include the given name. False when nobody is logged in. |
