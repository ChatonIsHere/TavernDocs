---
title: "AuthenticationFeatures"
description: "Authentication features for the generic (non-store) platform: no access tokens, no account linking, no platform login."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AuthenticationFeatures

A **class** in `Alta.Platform.Generic`, `Alta.Platform.Generic`.

Authentication features for the generic (non-store) platform: no access tokens, no account linking, no platform login.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`IAuthenticationFeatures`](/game-api/types/assembly-other/iauthenticationfeatures)
- **Attributes** `UsedImplicitly`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AuthenticationFeatures()"}</code> | Creates an `AuthenticationFeatures` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-accesstokenmode" /><code><Link to="/game-api/types/assembly-other/accesstokenmode">{"AccessTokenMode"}</Link>{" "}<Link to="/game-api/types/assembly-other/accesstokenmode">{"AccessTokenMode"}</Link>{" { get; }"}</code> | Always `NotSupported`. |
| <Link id="m-supportsaccountlinking" /><code>{"bool SupportsAccountLinking { get; }"}</code> | Always false. |
| <Link id="m-supportsplatformlogin" /><code>{"bool SupportsPlatformLogin { get; }"}</code> | Always false. |
