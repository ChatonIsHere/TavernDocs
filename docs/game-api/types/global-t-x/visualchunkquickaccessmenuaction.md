---
title: "VisualChunkQuickAccessMenuAction"
description: "Quick access menu action that cycles the Feature Test Gymnasium's ChunkDisplayTool chunk view mode."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# VisualChunkQuickAccessMenuAction

A **class** in `Root.Township`, no namespace.

Quick access menu action that cycles the Feature Test Gymnasium's `ChunkDisplayTool` chunk view mode. Hidden when that tool doesn't exist.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** [`QuickAccessMenuAction`](/game-api/types/alta-player/quickaccessmenuaction)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"VisualChunkQuickAccessMenuAction()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isactive" /><code>{"override bool IsActive { get; }"}</code> | True when the chunk display mode isn't `None`, or when there's no tool. |
| <Link id="m-isignored" /><code>{"override bool IsIgnored { get; }"}</code> | Hidden when the base says so or when there's no `ChunkDisplayTool`. |
| <Link id="m-isvalid" /><code>{"override bool IsValid { get; }"}</code> | True when a `ChunkDisplayTool` instance exists. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-run" /><code>{"override void Run("}<Link to="/game-api/types/global-c-d/controller">{"Controller"}</Link>{" controller)"}</code> | Moves the chunk display tool to its next mode. |
