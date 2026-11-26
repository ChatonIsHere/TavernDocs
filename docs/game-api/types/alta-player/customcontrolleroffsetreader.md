---
title: "CustomControllerOffsetReader"
description: "Client service (created by VContainer) that reads per-hand position and scale offsets from custom_controller_offsets.json next to the game's data folder,..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CustomControllerOffsetReader

A **class** in `Root.Township`, `Alta.Character`.

Client service (created by VContainer) that reads per-hand position and scale offsets from `custom_controller_offsets.json` next to the game's data folder, watches the file, and applies the offsets to the local player's hands.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** `IDisposable`, `IInitializable`, `IIsolate`
- **Attributes** `UsedImplicitly`, `Preserve`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CustomControllerOffsetReader()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-filename" /><code>{"private const string FileName"}</code> | The offsets file name, `custom_controller_offsets.json`. |
| <Link id="m-filesystemwatcher" /><code>{"private readonly FileSystemWatcher fileSystemWatcher"}</code> | Watches the offsets file for writes. |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-projectroot" /><code>{"private static readonly string projectRoot"}</code> | Folder above `Application.dataPath`, where the offsets file lives. The file is created with defaults if missing. |
| <Link id="m-settings" /><code>{"private "}<Link to="/game-api/types/alta-player/customcontrolleroffset">{"CustomControllerOffset"}</Link>{" settings"}</code> | The last offsets read from the file. Null until the file changes. |

</details>

## Properties

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isdisposed" /><code>{"private bool IsDisposed { get; set; }"}</code> | True after the reader has been disposed. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-dispose" /><code>{"void Dispose()"}</code> | Disposes the file watcher. |
| <Link id="m-initialize" /><code>{"void Initialize()"}</code> | VContainer entry point: applies the offsets. Settings are only loaded once the file changes, so this usually does nothing at start. |
| <Link id="m-finalize" /><code>{"protected override void Finalize()"}</code> | Finalizer that disposes without touching managed objects. |

<details>
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-applyoffsets" /><code>{"private void ApplyOffsets()"}</code> | Clamps the offsets and applies them to both hands of `PlayerController.Current`, if settings are loaded and a local player exists. |
| <Link id="m-canapplyoffsets" /><code>{"private bool CanApplyOffsets()"}</code> | True when settings are loaded and a local player exists. If there is no player yet, it waits for `LocalPlayerSet`. |
| <Link id="m-clampscale" /><code>{"private static Vector3 ClampScale(Vector3 scale)"}</code> | Clamps a scale to 0.5 to 1.5. Note: Y and Z are set from the clamped X, so the scale ends up uniform. |
| <Link id="m-dispose-2" /><code>{"private void Dispose(bool disposing)"}</code> | Disposes the file watcher. |
| <Link id="m-enforceoffsetlimits" /><code>{"private void EnforceOffsetLimits()"}</code> | Limits each hand's position offset to 0.5 m and clamps its scale. |
| <Link id="m-onfilechanged" /><code>{"private void OnFileChanged(object sender, FileSystemEventArgs e)"}</code> | Reloads the settings from the file when it is written and applies them on the main thread. |
| <Link id="m-onlocalplayerset" /><code>{"private void OnLocalPlayerSet("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController)"}</code> | Applies the offsets once the local player appears, then unsubscribes. |

</details>
