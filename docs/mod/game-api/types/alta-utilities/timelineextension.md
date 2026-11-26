---
title: "TimelineExtension"
description: "Extension methods for running an Action later through Timeline.Instance."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TimelineExtension

A **static class** in `Root.Township`, `Alta.Utilities`.

Extension methods for running an `Action` later through `Timeline.Instance`.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Attributes** `Extension`

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-delay" /><code>{"static void Delay(Action callback, float duration)"}</code> | Runs the callback after the given number of seconds. |
| <Link id="m-runat" /><code>{"static void RunAt(Action callback, float time)"}</code> | Meant to run at a time, but also calls `CallAfterDuration`, so the value is treated as a delay. |
