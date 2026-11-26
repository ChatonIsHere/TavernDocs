---
title: "IParallelPacketProcessor"
description: "An IPacketProcessor that may handle packets in parallel and can say how many it has not finished yet."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IParallelPacketProcessor

An **interface** in `Alta.NetworkTransport.Runtime`, `Alta.NetworkingTransport`.

An `IPacketProcessor` that may handle packets in parallel and can say how many it has not finished yet. Nothing implements it in this build.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** [`IPacketProcessor`](/mod/game-api/types/assembly-other/ipacketprocessor)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-unresolvedpackets" /><code>{"int UnResolvedPackets { get; }"}</code> | <span className="api-desc">Number of packets still being handled.</span> |
