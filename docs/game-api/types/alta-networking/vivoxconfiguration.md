---
title: "VivoxConfiguration"
description: "class VivoxConfiguration in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# VivoxConfiguration

A **class** in `Root.Township`, `Alta.Voice`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"VivoxConfiguration(string issuer, string domain, string endPoint, bool isUsingSandbox = false)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isusingsandbox" /><code>{"private bool isUsingSandbox"}</code> |  |
| <Link id="m-sandboxkey" /><code>{"private const string SandboxKey"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-domain" /><code>{"string Domain { get; }"}</code> |  |
| <Link id="m-endpoint" /><code>{"string EndPoint { get; }"}</code> |  |
| <Link id="m-issuer" /><code>{"string Issuer { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getconnecttokenasync" /><code>{"async Task<string> GetConnectTokenAsync(IChannelSession session)"}</code> |  |
| <Link id="m-getloginasync" /><code>{"async Task<string> GetLoginAsync(ILoginSession session)"}</code> |  |

## Used in

Members of other types that take, return or hold a `VivoxConfiguration`:

[`VivoxUtility.config`](/game-api/types/alta-networking/vivoxutility#m-config), [`VivoxUtility.Config`](/game-api/types/alta-networking/vivoxutility#m-config-2).
