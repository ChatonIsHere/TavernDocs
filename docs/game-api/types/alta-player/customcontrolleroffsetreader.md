---
title: "CustomControllerOffsetReader"
description: "class CustomControllerOffsetReader in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CustomControllerOffsetReader

A **class** in `Root.Township`, `Alta.Character`.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** `IDisposable`, `IInitializable`, `IIsolate`
- **Attributes** `UsedImplicitly`, `Preserve`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CustomControllerOffsetReader()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-filename" /><code>{"private const string FileName"}</code> |  |
| <Link id="m-filesystemwatcher" /><code>{"private readonly FileSystemWatcher fileSystemWatcher"}</code> |  |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |  |
| <Link id="m-projectroot" /><code>{"private static readonly string projectRoot"}</code> |  |
| <Link id="m-settings" /><code>{"private "}<Link to="/game-api/types/alta-player/customcontrolleroffset">{"CustomControllerOffset"}</Link>{" settings"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isdisposed" /><code>{"private bool IsDisposed { get; set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-dispose" /><code>{"void Dispose()"}</code> |  |
| <Link id="m-initialize" /><code>{"void Initialize()"}</code> |  |
| <Link id="m-applyoffsets" /><code>{"private void ApplyOffsets()"}</code> |  |
| <Link id="m-canapplyoffsets" /><code>{"private bool CanApplyOffsets()"}</code> |  |
| <Link id="m-clampscale" /><code>{"private static Vector3 ClampScale(Vector3 scale)"}</code> |  |
| <Link id="m-dispose-2" /><code>{"private void Dispose(bool disposing)"}</code> |  |
| <Link id="m-enforceoffsetlimits" /><code>{"private void EnforceOffsetLimits()"}</code> |  |
| <Link id="m-finalize" /><code>{"protected override void Finalize()"}</code> |  |
| <Link id="m-onfilechanged" /><code>{"private void OnFileChanged(object sender, FileSystemEventArgs e)"}</code> |  |
| <Link id="m-onlocalplayerset" /><code>{"private void OnLocalPlayerSet("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController)"}</code> |  |
