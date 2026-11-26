---
title: "ThumbPosition"
description: "How the hand's thumb is posed on a grab point: around a Pole or flat on a Plane."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ThumbPosition

An **enum** in `Root.Township`, the global namespace.

How the hand's thumb is posed on a grab point: around a `Pole` or flat on a `Plane`. Picks the thumb configuration in `HandGripConfiguration`.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)

## Values

| Member |
| --- |
| <Link id="m-plane" /><code>{"Plane = 1"}</code> |
| <Link id="m-pole" /><code>{"Pole = 0"}</code> |

## Used in

Members of other types that take, return or hold a `ThumbPosition`:

[`HandGrip.ThumbPosition`](/mod/game-api/types/alta-player/handgrip#m-thumbposition), [`GrabPoint.thumbPosition`](/mod/game-api/types/global-e-h/grabpoint#m-thumbposition).
