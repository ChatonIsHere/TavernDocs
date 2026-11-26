---
title: "ErrorTestType"
description: "Test cases for PlatformLaunchDetails, which builds fake Oculus launch details for a banned, private, wrong version or debug launch."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ErrorTestType

An **enum** in `Root.Township`, `Alta.PlatformSpecific.Oculus`.

Test cases for `PlatformLaunchDetails`, which builds fake Oculus launch details for a banned, private, wrong version or debug launch.

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)

## Values

| Member |
| --- |
| <Link id="m-banned" /><code>{"BANNED = 3"}</code> |
| <Link id="m-debug" /><code>{"DEBUG = 1"}</code> |
| <Link id="m-none" /><code>{"NONE = 0"}</code> |
| <Link id="m-private" /><code>{"PRIVATE = 2"}</code> |
| <Link id="m-wrong-version" /><code>{"WRONG_VERSION = 4"}</code> |

## Used in

Members of other types that take, return or hold a `ErrorTestType`:

[`PlatformLaunchDetails.PlatformLaunchDetails`](/game-api/types/alta-menus/platformlaunchdetails#m-ctor).
