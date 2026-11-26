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

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`INetworkTransportResult`](/game-api/types/assembly-other/inetworktransportresult)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NetworkTransportResult()"}</code> | Creates a `NetworkTransportResult` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-error" /><code>{"string Error { get; private set; }"}</code> | The error message; null on success. |
| <Link id="m-issuccess" /><code>{"bool IsSuccess { get; private set; }"}</code> | True when the call worked. |
| <Link id="m-noresources" /><code>{"static "}<Link to="/game-api/types/assembly-other/networktransportresult">{"NetworkTransportResult"}</Link>{" NoResources { get; }"}</code> | Shared failed result with the message "No resources". |
| <Link id="m-success" /><code>{"static "}<Link to="/game-api/types/assembly-other/networktransportresult">{"NetworkTransportResult"}</Link>{" Success { get; }"}</code> | Shared successful result, returned by most transport calls. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-fromerror" /><code>{"static "}<Link to="/game-api/types/assembly-other/networktransportresult">{"NetworkTransportResult"}</Link>{" FromError(string error)"}</code> | Makes a failed result with the given message. |
