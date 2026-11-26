---
title: "ConnectionReceiverType"
description: "How a client connection channel processes incoming reliable packets: Normal (all at once), Timed (by time budget) or Counted (by message count)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ConnectionReceiverType

An **enum** in `Root.Township`, `Alta.Networking.Internal`.

How a client connection channel processes incoming reliable packets: Normal (all at once), Timed (by time budget) or Counted (by message count). The server always uses Normal.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)

## Values

| Member |
| --- |
| <Link id="m-counted" /><code>{"Counted = 2"}</code> |
| <Link id="m-normal" /><code>{"Normal = 0"}</code> |
| <Link id="m-timed" /><code>{"Timed = 1"}</code> |

## Used in

Members of other types that take, return or hold a `ConnectionReceiverType`:

[`ConnectionChannel.receiverType`](/game-api/types/alta-networking/connectionchannel#m-receivertype).
