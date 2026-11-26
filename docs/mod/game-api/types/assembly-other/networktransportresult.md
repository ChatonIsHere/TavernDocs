---
title: "NetworkTransportResult"
description: "Simple success or error result returned by transport calls such as ProcessIncoming and Terminate."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkTransportResult

A **class** in `Alta.NetworkTransport.Runtime`, `Alta.NetworkingTransport`.

Simple success or error result returned by transport calls such as `ProcessIncoming` and `Terminate`.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** [`INetworkTransportResult`](/mod/game-api/types/assembly-other/inetworktransportresult)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NetworkTransportResult()"}</code> | <span className="api-desc">Creates a `NetworkTransportResult` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-error" /><code>{"string Error { get; private set; }"}</code> | <span className="api-desc">The error message; null on success.</span> |
| <Link id="m-issuccess" /><code>{"bool IsSuccess { get; private set; }"}</code> | <span className="api-desc">True when the call worked.</span> |
| <Link id="m-noresources" /><code>{"static "}<Link to="/mod/game-api/types/assembly-other/networktransportresult">{"NetworkTransportResult"}</Link>{" NoResources { get; }"}</code> | <span className="api-desc">Shared failed result with the message "No resources".</span> |
| <Link id="m-success" /><code>{"static "}<Link to="/mod/game-api/types/assembly-other/networktransportresult">{"NetworkTransportResult"}</Link>{" Success { get; }"}</code> | <span className="api-desc">Shared successful result, returned by most transport calls.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-fromerror" /><code>{"static "}<Link to="/mod/game-api/types/assembly-other/networktransportresult">{"NetworkTransportResult"}</Link>{" FromError(string error)"}</code> | <span className="api-desc">Makes a failed result with the given message.</span> |
