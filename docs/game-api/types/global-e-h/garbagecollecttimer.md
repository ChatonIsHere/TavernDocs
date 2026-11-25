---
title: "GarbageCollectTimer"
description: "On the scene. Only runs when the process is headless: every interval it asks for a non-blocking, optimized GC.Collect of every generation."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GarbageCollectTimer

A **class** in `Root.Township`, no namespace.

On the scene. Only runs when the process is headless: every interval it asks for a non-blocking, optimized `GC.Collect` of every generation.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`
- **Documented in** [Server lifecycle](/game-api/networking/server-lifecycle)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GarbageCollectTimer()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-interval" /><code>{"private float interval"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-mode" /><code>{"private GCCollectionMode mode"}</code> |  |
| <Link id="m-nexttime" /><code>{"private float nextTime"}</code> |  |
| <Link id="m-rungccollect" /><code>{"private static "}<Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" runGcCollect"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-rungarbagecollect" /><code>{"private IEnumerator RunGarbageCollect() (iterator)"}</code> |  |
| <Link id="m-start" /><code>{"private void Start()"}</code> |  |
