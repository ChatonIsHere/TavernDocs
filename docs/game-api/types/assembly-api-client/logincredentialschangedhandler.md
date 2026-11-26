---
title: "LoginCredentialsChangedHandler"
description: "Callback for CredentialsChanged, given the old and the new login credentials."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LoginCredentialsChangedHandler

A **delegate** in `Alta.Api.Client`, `Alta.Api.Client.LowLevel`.

Callback for `CredentialsChanged`, given the old and the new login credentials.

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LoginCredentialsChangedHandler(object object, IntPtr method)"}</code> | Made by the compiler when you assign a method to this delegate; you don't call it directly. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/assembly-api-client/logincredentials">{"LoginCredentials"}</Link>{" oldCredentials, "}<Link to="/game-api/types/assembly-api-client/logincredentials">{"LoginCredentials"}</Link>{" newCredentials, AsyncCallback callback, object object)"}</code> | Starts the call on another thread; not supported in Unity, so use `Invoke`. |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | Waits for a call started with `BeginInvoke`; not supported in Unity. |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/assembly-api-client/logincredentials">{"LoginCredentials"}</Link>{" oldCredentials, "}<Link to="/game-api/types/assembly-api-client/logincredentials">{"LoginCredentials"}</Link>{" newCredentials)"}</code> | Calls every method on this delegate with these arguments. |

## Used in

Members of other types that take, return or hold a `LoginCredentialsChangedHandler`:

[`HighLevelApiClient.CredentialsChanged`](/game-api/types/assembly-api-client/highlevelapiclient#m-credentialschanged), [`IHighLevelApiClient.CredentialsChanged`](/game-api/types/assembly-api-client/ihighlevelapiclient#m-credentialschanged), [`OfflineHighLevelApiClient.CredentialsChanged`](/game-api/types/assembly-api-client/offlinehighlevelapiclient#m-credentialschanged), [`LowLevelApiClient.CredentialsChanged`](/game-api/types/assembly-api-client/lowlevelapiclient#m-credentialschanged).
