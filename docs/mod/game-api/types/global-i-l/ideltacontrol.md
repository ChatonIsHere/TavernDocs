---
title: "IDeltaControl"
description: "An input that reports amounts of movement, such as a Crank."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IDeltaControl

An **interface** in `Root.Township`, the global namespace.

An input that reports amounts of movement, such as a `Crank`.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Derived types** [`Crank`](/mod/game-api/types/global-c-d/crank), [`MultiDeltaInputController`](/mod/game-api/types/global-m-o/multideltainputcontroller)

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-deltaprovided" /><code>{"event Action<float> DeltaProvided"}</code> | Raised with each amount of movement. |
