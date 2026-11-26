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
| <Link id="m-adminvrmodes" /><code>{"const string AdminVrModes"}</code> | <span className="api-desc">Policy name `admin_vr_modes`.</span> |
| <Link id="m-debugfeatures" /><code>{"const string DebugFeatures"}</code> | <span className="api-desc">Policy name `debug_features`.</span> |
| <Link id="m-developer" /><code>{"const string Developer"}</code> | <span className="api-desc">Policy name `server_owner` (note: not `developer`).</span> |
| <Link id="m-moderator" /><code>{"const string Moderator"}</code> | <span className="api-desc">Policy name `moderator`.</span> |
| <Link id="m-playoffline" /><code>{"const string PlayOffline"}</code> | <span className="api-desc">Policy name `play_offline`.</span> |

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-apiclient" /><code>{"private static readonly Lazy<"}<Link to="/mod/game-api/types/assembly-api-client/ihighlevelapiclient">{"IHighLevelApiClient"}</Link>{"> apiClient"}</code> | <span className="api-desc">Lazily resolved API client used to read the logged-in user.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getplayersubscriberstatus" /><code>{"static "}<Link to="/mod/game-api/types/assembly-other/playersubscriberstatus">{"PlayerSubscriberStatus"}</Link>{" GetPlayerSubscriberStatus()"}</code> | <span className="api-desc">Returns `Developer` if the logged-in user has `debug_features`, otherwise `None`.</span> |
| <Link id="m-haspermission" /><code>{"static bool HasPermission(string permission)"}</code> | <span className="api-desc">Whether the logged-in user's policies include the given name. False when nobody is logged in.</span> |
