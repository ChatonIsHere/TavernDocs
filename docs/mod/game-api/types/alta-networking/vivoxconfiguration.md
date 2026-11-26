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

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"VivoxConfiguration(string issuer, string domain, string endPoint, bool isUsingSandbox = false)"}</code> | <span className="api-desc">Creates a `VivoxConfiguration` from `issuer`, `domain`, `endPoint` and `isUsingSandbox`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isusingsandbox" /><code>{"private bool isUsingSandbox"}</code> | <span className="api-desc">When true, tokens are signed locally instead of fetched from the API.</span> |
| <Link id="m-sandboxkey" /><code>{"private const string SandboxKey"}</code> | <span className="api-desc">Hard-coded Vivox sandbox signing key used only in sandbox mode.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-domain" /><code>{"string Domain { get; }"}</code> | <span className="api-desc">Vivox domain.</span> |
| <Link id="m-endpoint" /><code>{"string EndPoint { get; }"}</code> | <span className="api-desc">Vivox server endpoint URL.</span> |
| <Link id="m-issuer" /><code>{"string Issuer { get; }"}</code> | <span className="api-desc">Vivox token issuer.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getconnecttokenasync" /><code>{"async Task<string> GetConnectTokenAsync(IChannelSession session)"}</code> | <span className="api-desc">Gets a token to join the voice channel for the joined server, from the API or signed locally in sandbox mode.</span> |
| <Link id="m-getloginasync" /><code>{"async Task<string> GetLoginAsync(ILoginSession session)"}</code> | <span className="api-desc">Gets a Vivox login token from the API, or signs one locally with the sandbox key in sandbox mode.</span> |

## Used in

Members of other types that take, return or hold a `VivoxConfiguration`:

<div className="api-used-in">

[`VivoxUtility.config`](/mod/game-api/types/alta-networking/vivoxutility#m-config), [`VivoxUtility.Config`](/mod/game-api/types/alta-networking/vivoxutility#m-config-2).

</div>
