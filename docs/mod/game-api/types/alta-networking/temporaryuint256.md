---
title: "TemporaryUint256"
description: "A shared scratch array of 256 uints, used by spawn and sync messages to hold embedded entity ids."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TemporaryUint256

A **static class** in `Root.Township`, `Alta.Networking`.

A shared scratch array of 256 uints, used by spawn and sync messages to hold embedded entity ids.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-array" /><code>{"static uint[] array"}</code> | <span className="api-desc">The scratch array. Its contents only last until the next message uses it.</span> |
