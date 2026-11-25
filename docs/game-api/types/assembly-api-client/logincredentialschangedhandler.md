---
title: "LoginCredentialsChangedHandler"
description: "delegate LoginCredentialsChangedHandler in Alta.Api.Client."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LoginCredentialsChangedHandler

A **delegate** in `Alta.Api.Client`, `Alta.Api.Client.LowLevel`.

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LoginCredentialsChangedHandler(object object, IntPtr method)"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/assembly-api-client/logincredentials">{"LoginCredentials"}</Link>{" oldCredentials, "}<Link to="/game-api/types/assembly-api-client/logincredentials">{"LoginCredentials"}</Link>{" newCredentials, AsyncCallback callback, object object)"}</code> |  |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> |  |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/assembly-api-client/logincredentials">{"LoginCredentials"}</Link>{" oldCredentials, "}<Link to="/game-api/types/assembly-api-client/logincredentials">{"LoginCredentials"}</Link>{" newCredentials)"}</code> |  |

## Used in

Members of other types that take, return or hold a `LoginCredentialsChangedHandler`:

[`HighLevelApiClient.CredentialsChanged`](/game-api/types/assembly-api-client/highlevelapiclient#m-credentialschanged), [`IHighLevelApiClient.CredentialsChanged`](/game-api/types/assembly-api-client/ihighlevelapiclient#m-credentialschanged), [`OfflineHighLevelApiClient.CredentialsChanged`](/game-api/types/assembly-api-client/offlinehighlevelapiclient#m-credentialschanged), [`LowLevelApiClient.CredentialsChanged`](/game-api/types/assembly-api-client/lowlevelapiclient#m-credentialschanged).
