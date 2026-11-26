---
title: "PlatformLaunchType"
description: "How the game was launched on the platform: normal, invite, coordinated or deep link."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlatformLaunchType

An **enum** in `Root.Township`, the global namespace.

How the game was launched on the platform: normal, invite, coordinated or deep link. Set by Oculus launch details.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)

## Values

| Member |
| --- |
| <Link id="m-coordinated" /><code>{"Coordinated = 3"}</code> |
| <Link id="m-deeplink" /><code>{"Deeplink = 4"}</code> |
| <Link id="m-invite" /><code>{"Invite = 2"}</code> |
| <Link id="m-normal" /><code>{"Normal = 1"}</code> |
| <Link id="m-unknown" /><code>{"Unknown = 0"}</code> |

## Used in

Members of other types that take, return or hold a `PlatformLaunchType`:

[`PlatformLaunchDetails.LaunchType`](/mod/game-api/types/alta-menus/platformlaunchdetails#m-launchtype), [`IOculusWrapper.GetPlatformLaunchType`](/mod/game-api/types/game-other-namespaces/ioculuswrapper#m-getplatformlaunchtype).
