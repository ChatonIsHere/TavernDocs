---
title: "BanRole"
description: "Whether a ban came from the server owner or a moderator."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BanRole

An **enum** in `Root.Township`, no namespace.

Whether a ban came from the server owner or a moderator. Returned by `SocialService.BanPlayer` and sent with ban analytics.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)

## Values

| Member |
| --- |
| <Link id="m-moderator" /><code>{"Moderator = 1"}</code> |
| <Link id="m-owner" /><code>{"Owner = 0"}</code> |

## Used in

Members of other types that take, return or hold a `BanRole`:

[`BanPlayerSocialAnalyticsEvent.BanPlayerSocialAnalyticsEvent`](/game-api/types/game-other-namespaces/banplayersocialanalyticsevent#m-ctor), [`SocialService.BanPlayer`](/game-api/types/global-s/socialservice#m-banplayer).
