---
title: "KcpErrorConverter"
description: "Maps kcp2k error codes to the game's own AltaNetworkError values."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# KcpErrorConverter

A **static class** in `Alta.NetworkTransport.Runtime`, `Alta.NetworkingTransport.Kcp`.

Maps kcp2k error codes to the game's own `AltaNetworkError` values. Used by the KCP client and server wrappers.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-convertkcperrortoaltaerror" /><code>{"static "}<Link to="/game-api/types/assembly-other/altanetworkerror">{"AltaNetworkError"}</Link>{" ConvertKcpErrorToAltaError(ErrorCode error)"}</code> | Returns the matching `AltaNetworkError` for a kcp2k `ErrorCode`, or `Unexpected` for anything unknown. |
