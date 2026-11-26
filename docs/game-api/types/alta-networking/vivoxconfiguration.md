---
title: "VivoxConfiguration"
description: "Client: Vivox voice settings (issuer, domain, endpoint) and how to get login and channel tokens, either from the Alta API or signed locally with the sandbox..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# VivoxConfiguration

A **class** in `Root.Township`, `Alta.Voice`.

Client: Vivox voice settings (issuer, domain, endpoint) and how to get login and channel tokens, either from the Alta API or signed locally with the sandbox key.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"VivoxConfiguration(string issuer, string domain, string endPoint, bool isUsingSandbox = false)"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isusingsandbox" /><code>{"private bool isUsingSandbox"}</code> | When true, tokens are signed locally instead of fetched from the API. |
| <Link id="m-sandboxkey" /><code>{"private const string SandboxKey"}</code> | Hard-coded Vivox sandbox signing key used only in sandbox mode. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-domain" /><code>{"string Domain { get; }"}</code> | Vivox domain. |
| <Link id="m-endpoint" /><code>{"string EndPoint { get; }"}</code> | Vivox server endpoint URL. |
| <Link id="m-issuer" /><code>{"string Issuer { get; }"}</code> | Vivox token issuer. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getconnecttokenasync" /><code>{"async Task<string> GetConnectTokenAsync(IChannelSession session)"}</code> | Gets a token to join the voice channel for the joined server, from the API or signed locally in sandbox mode. |
| <Link id="m-getloginasync" /><code>{"async Task<string> GetLoginAsync(ILoginSession session)"}</code> | Gets a Vivox login token from the API, or signs one locally with the sandbox key in sandbox mode. |

## Used in

Members of other types that take, return or hold a `VivoxConfiguration`:

[`VivoxUtility.config`](/game-api/types/alta-networking/vivoxutility#m-config), [`VivoxUtility.Config`](/game-api/types/alta-networking/vivoxutility#m-config-2).
