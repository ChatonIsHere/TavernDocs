---
title: "TavernEvents"
description: "TavernLib's static events, which mods subscribe to."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TavernEvents

A **static class** in `TavernLib`, `TavernLib.Utils`.

TavernLib's static events, which mods subscribe to. Both sides.

- **Listed in** [TavernLib.Utils](/tavernlib-api/types/utils)
- **Nested types** [`TavernEvent<T>`](/tavernlib-api/types/utils/tavernevents-tavernevent-t)
- **Documented in** [TavernEvents](/tavernlib-api/types/utils/tavernevents), [TavernLib API](/tavernlib-api/overview)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-socketcreated" /><code>{"static readonly "}<Link to="/tavernlib-api/types/utils/tavernevents-tavernevent-t">{"TavernEvents.TavernEvent"}</Link>{"<"}<Link to="/game-api/types/alta-networking/isocket">{"ISocket"}</Link>{"> SocketCreated"}</code> | Raised with the new socket each time the game makes its network socket, from a postfix on the `Socket` constructor. |
