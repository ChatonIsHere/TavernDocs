---
title: "AltaIO"
description: "Static folder roots the game reads and writes: the storage folder (AppData A Township Tale, or /app_data_path), its data, Servers and Client subfolders, and..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AltaIO

A **class** in `Alta.IO`, `Alta.Utilities`.

Static folder roots the game reads and writes: the storage folder (AppData `A Township Tale`, or `/app_data_path`), its `data`, `Servers` and `Client` subfolders, and the install folder. Set up once in the static constructor.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Documented in** [Settings and files](/mod/game-api/console-and-utilities/settings-and-files#altaio), [Console, utilities and Alta assemblies](/mod/game-api/console-and-utilities/overview), [Startup and app state](/mod/game-api/console-and-utilities/startup-and-app-state)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AltaIO()"}</code> | Creates an `AltaIO` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-gametitle" /><code>{"const string GameTitle"}</code> | "A Township Tale", also the default storage folder name. |

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | Class logger. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-cachefolder" /><code>{"static "}<Link to="/mod/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" CacheFolder { get; private set; }"}</code> | `Client/Cache` under the storage folder. |
| <Link id="m-clientfolder" /><code>{"static "}<Link to="/mod/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" ClientFolder { get; private set; }"}</code> | `Client` under the storage folder. |
| <Link id="m-gamefolder" /><code>{"static "}<Link to="/mod/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" GameFolder { get; private set; }"}</code> | The game's install folder (parent of the Unity data folder). |
| <Link id="m-persistentstoragefolder" /><code>{"static "}<Link to="/mod/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" PersistentStorageFolder { get; private set; }"}</code> | `data` under the storage folder. |
| <Link id="m-serversfolder" /><code>{"static "}<Link to="/mod/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" ServersFolder { get; private set; }"}</code> | `Servers` under the storage folder, where server saves live. |
| <Link id="m-storagefolder" /><code>{"static "}<Link to="/mod/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" StorageFolder { get; private set; }"}</code> | Root storage folder. Can be backed by S3 or another directory through `/remote_saves`. |

## Methods

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-setsavepath" /><code>{"private static void SetSavePath()"}</code> | Picks the storage root from `/app_data_path`, and wraps it in an S3 or remote folder when `/remote_saves` is given. Then builds the subfolders. |

</details>
