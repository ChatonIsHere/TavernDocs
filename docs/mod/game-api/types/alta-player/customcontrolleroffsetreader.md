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

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** `IDisposable`, `IInitializable`, `IIsolate`
- **Attributes** `UsedImplicitly`, `Preserve`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CustomControllerOffsetReader()"}</code> | <span className="api-desc">Creates a `CustomControllerOffsetReader` with default values.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-filename" /><code>{"private const string FileName"}</code> | <span className="api-desc">The offsets file name, `custom_controller_offsets.json`.</span> |
| <Link id="m-filesystemwatcher" /><code>{"private readonly FileSystemWatcher fileSystemWatcher"}</code> | <span className="api-desc">Watches the offsets file for writes.</span> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-projectroot" /><code>{"private static readonly string projectRoot"}</code> | <span className="api-desc">Folder above `Application.dataPath`, where the offsets file lives. The file is created with defaults if missing.</span> |
| <Link id="m-settings" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/customcontrolleroffset">{"CustomControllerOffset"}</Link>{" settings"}</code> | <span className="api-desc">The last offsets read from the file. Null until the file changes.</span> |

</details>

## Properties

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isdisposed" /><code>{"private bool IsDisposed { get; set; }"}</code> | <span className="api-desc">True after the reader has been disposed.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-dispose" /><code>{"void Dispose()"}</code> | <span className="api-desc">Disposes the file watcher.</span> |
| <Link id="m-initialize" /><code>{"void Initialize()"}</code> | <span className="api-desc">VContainer entry point: applies the offsets. Settings are only loaded once the file changes, so this usually does nothing at start.</span> |
| <Link id="m-finalize" /><code>{"protected override void Finalize()"}</code> | <span className="api-desc">Finalizer that disposes without touching managed objects.</span> |

<details className="api-private">
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-applyoffsets" /><code>{"private void ApplyOffsets()"}</code> | <span className="api-desc">Clamps the offsets and applies them to both hands of `PlayerController.Current`, if settings are loaded and a local player exists.</span> |
| <Link id="m-canapplyoffsets" /><code>{"private bool CanApplyOffsets()"}</code> | <span className="api-desc">True when settings are loaded and a local player exists. If there is no player yet, it waits for `LocalPlayerSet`.</span> |
| <Link id="m-clampscale" /><code>{"private static Vector3 ClampScale(Vector3 scale)"}</code> | <span className="api-desc">Clamps a scale to 0.5 to 1.5. Note: Y and Z are set from the clamped X, so the scale ends up uniform.</span> |
| <Link id="m-dispose-2" /><code>{"private void Dispose(bool disposing)"}</code> | <span className="api-desc">Disposes the file watcher.</span> |
| <Link id="m-enforceoffsetlimits" /><code>{"private void EnforceOffsetLimits()"}</code> | <span className="api-desc">Limits each hand's position offset to 0.5 m and clamps its scale.</span> |
| <Link id="m-onfilechanged" /><code>{"private void OnFileChanged(object sender, FileSystemEventArgs e)"}</code> | <span className="api-desc">Reloads the settings from the file when it is written and applies them on the main thread.</span> |
| <Link id="m-onlocalplayerset" /><code>{"private void OnLocalPlayerSet("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController)"}</code> | <span className="api-desc">Applies the offsets once the local player appears, then unsubscribes.</span> |

</details>
