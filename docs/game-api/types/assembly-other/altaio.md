---
title: "AltaIO"
description: "Static folders, set up the first time anything touches the class."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AltaIO

A **class** in `Alta.IO`, `Alta.Utilities`.

Static folders, set up the first time anything touches the class.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Documented in** [Settings and files](/game-api/console-and-utilities/settings-and-files#altaio), [Console, utilities and Alta assemblies](/game-api/console-and-utilities/overview), [Startup and app state](/game-api/console-and-utilities/startup-and-app-state)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AltaIO()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-gametitle" /><code>{"const string GameTitle"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-cachefolder" /><code>{"static "}<Link to="/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" CacheFolder { get; private set; }"}</code> |  |
| <Link id="m-clientfolder" /><code>{"static "}<Link to="/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" ClientFolder { get; private set; }"}</code> |  |
| <Link id="m-gamefolder" /><code>{"static "}<Link to="/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" GameFolder { get; private set; }"}</code> |  |
| <Link id="m-persistentstoragefolder" /><code>{"static "}<Link to="/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" PersistentStorageFolder { get; private set; }"}</code> |  |
| <Link id="m-serversfolder" /><code>{"static "}<Link to="/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" ServersFolder { get; private set; }"}</code> |  |
| <Link id="m-storagefolder" /><code>{"static "}<Link to="/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" StorageFolder { get; private set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setsavepath" /><code>{"private static void SetSavePath()"}</code> |  |
