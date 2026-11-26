---
title: "PlatformLaunchResult"
description: "Oculus launch result codes (success, room full, game started, room not found, user declined, other), with the Oculus string in each Description."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlatformLaunchResult

An **enum** in `Root.Township`, `Alta.PlatformSpecific.Oculus`.

Oculus launch result codes (success, room full, game started, room not found, user declined, other), with the Oculus string in each `Description`.

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)

## Values

| Member |
| --- |
| <Link id="m-failedgamealreadystarted" /><code>{"FailedGameAlreadyStarted = 3"}</code> |
| <Link id="m-failedotherreason" /><code>{"FailedOtherReason = 6"}</code> |
| <Link id="m-failedroomfull" /><code>{"FailedRoomFull = 2"}</code> |
| <Link id="m-failedroomnotfound" /><code>{"FailedRoomNotFound = 4"}</code> |
| <Link id="m-faileduserdeclined" /><code>{"FailedUserDeclined = 5"}</code> |
| <Link id="m-success" /><code>{"Success = 1"}</code> |
| <Link id="m-unknown" /><code>{"Unknown = 0"}</code> |

## Used in

Members of other types that take, return or hold a `PlatformLaunchResult`:

[`IOculusWrapper.DeeplinkLogResult`](/game-api/types/game-other-namespaces/ioculuswrapper#m-deeplinklogresult).
