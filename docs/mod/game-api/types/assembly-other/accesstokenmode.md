---
title: "AccessTokenMode"
description: "Whether a platform's authentication can hand out access tokens: not at all, single use or multi use."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AccessTokenMode

An **enum** in `Alta.Platform`, `Alta.Platform`.

Whether a platform's authentication can hand out access tokens: not at all, single use or multi use. Reported by `IAuthenticationFeatures`.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)

## Values

| Member |
| --- |
| <Link id="m-multiuse" /><code>{"MultiUse = 2"}</code> |
| <Link id="m-notsupported" /><code>{"NotSupported = 0"}</code> |
| <Link id="m-singleuse" /><code>{"SingleUse = 1"}</code> |

## Used in

Members of other types that take, return or hold a `AccessTokenMode`:

<div className="api-used-in">

[`AuthenticationFeatures.AccessTokenMode`](/mod/game-api/types/assembly-other/authenticationfeatures#m-accesstokenmode), [`IAuthenticationFeatures.AccessTokenMode`](/mod/game-api/types/assembly-other/iauthenticationfeatures#m-accesstokenmode).

</div>
