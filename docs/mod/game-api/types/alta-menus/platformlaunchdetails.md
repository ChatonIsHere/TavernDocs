---
title: "PlatformLaunchDetails"
description: "Fake Oculus launch details for testing deep link joins."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlatformLaunchDetails

A **class** in `Root.Township`, `Alta.PlatformSpecific.Oculus`.

Fake Oculus launch details for testing deep link joins. The constructor fills in a canned case (banned, private, wrong version, debug) with a fixed server ID.

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlatformLaunchDetails("}<Link to="/mod/game-api/types/alta-menus/errortesttype">{"ErrorTestType"}</Link>{" type)"}</code> | <span className="api-desc">Creates a `PlatformLaunchDetails` from `type`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-deeplinkmessagejson" /><code>{"string DeeplinkMessageJson"}</code> | <span className="api-desc">Deep link JSON, holding the `serverID` to join.</span> |
| <Link id="m-destinationapiname" /><code>{"string DestinationApiName"}</code> | <span className="api-desc">Oculus destination name, such as `town`.</span> |
| <Link id="m-launchsource" /><code>{"string LaunchSource"}</code> | <span className="api-desc">Where the launch came from.</span> |
| <Link id="m-launchtype" /><code><Link to="/mod/game-api/types/global-p/platformlaunchtype">{"PlatformLaunchType"}</Link>{" LaunchType"}</code> | <span className="api-desc">Kind of launch, such as a deep link.</span> |
| <Link id="m-roomid" /><code>{"ulong RoomID"}</code> | <span className="api-desc">Oculus room ID (0 in all test cases).</span> |
| <Link id="m-serverid" /><code>{"int ServerId"}</code> | <span className="api-desc">Server ID, only set for the debug case.</span> |
| <Link id="m-trackingid" /><code>{"string TrackingID"}</code> | <span className="api-desc">Launch tracking ID.</span> |
| <Link id="m-users" /><code><Link to="/mod/game-api/types/global-t-x/userlist">{"UserList"}</Link>{" Users"}</code> | <span className="api-desc">Obsolete; use `UsersOptional`.</span> |
| <Link id="m-usersoptional" /><code><Link to="/mod/game-api/types/global-t-x/userlist">{"UserList"}</Link>{" UsersOptional"}</code> | <span className="api-desc">Users the launch is with (empty in the test cases).</span> |

## Used in

Members of other types that take, return or hold a `PlatformLaunchDetails`:

<div className="api-used-in">

[`IOculusWrapper.GetPlatformAgnosticLaunchDetails`](/mod/game-api/types/game-other-namespaces/ioculuswrapper#m-getplatformagnosticlaunchdetails), [`OculusDeepLinkService.JoinServerViaDeepLink`](/mod/game-api/types/global-m-o/oculusdeeplinkservice#m-joinserverviadeeplink), [`OculusDeepLinkService.TryGetValidLaunchDetails`](/mod/game-api/types/global-m-o/oculusdeeplinkservice#m-trygetvalidlaunchdetails).

</div>
