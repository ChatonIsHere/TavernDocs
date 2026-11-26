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
| <Link id="m-ctor" /><code>{"PlatformLaunchDetails("}<Link to="/mod/game-api/types/alta-menus/errortesttype">{"ErrorTestType"}</Link>{" type)"}</code> | Creates a `PlatformLaunchDetails` from `type`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-deeplinkmessagejson" /><code>{"string DeeplinkMessageJson"}</code> | Deep link JSON, holding the `serverID` to join. |
| <Link id="m-destinationapiname" /><code>{"string DestinationApiName"}</code> | Oculus destination name, such as `town`. |
| <Link id="m-launchsource" /><code>{"string LaunchSource"}</code> | Where the launch came from. |
| <Link id="m-launchtype" /><code><Link to="/mod/game-api/types/global-p/platformlaunchtype">{"PlatformLaunchType"}</Link>{" LaunchType"}</code> | Kind of launch, such as a deep link. |
| <Link id="m-roomid" /><code>{"ulong RoomID"}</code> | Oculus room ID (0 in all test cases). |
| <Link id="m-serverid" /><code>{"int ServerId"}</code> | Server ID, only set for the debug case. |
| <Link id="m-trackingid" /><code>{"string TrackingID"}</code> | Launch tracking ID. |
| <Link id="m-users" /><code><Link to="/mod/game-api/types/global-t-x/userlist">{"UserList"}</Link>{" Users"}</code> | Obsolete; use `UsersOptional`. |
| <Link id="m-usersoptional" /><code><Link to="/mod/game-api/types/global-t-x/userlist">{"UserList"}</Link>{" UsersOptional"}</code> | Users the launch is with (empty in the test cases). |

## Used in

Members of other types that take, return or hold a `PlatformLaunchDetails`:

[`IOculusWrapper.GetPlatformAgnosticLaunchDetails`](/mod/game-api/types/game-other-namespaces/ioculuswrapper#m-getplatformagnosticlaunchdetails), [`OculusDeepLinkService.JoinServerViaDeepLink`](/mod/game-api/types/global-m-o/oculusdeeplinkservice#m-joinserverviadeeplink), [`OculusDeepLinkService.TryGetValidLaunchDetails`](/mod/game-api/types/global-m-o/oculusdeeplinkservice#m-trygetvalidlaunchdetails).
