---
title: "ServerConfigFileManager"
description: "Loads a server's server_config JSON file, creating an empty ServerConfiguration if there isn't one."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerConfigFileManager

A **class** in `Root.Township`, the global namespace.

Loads a server's `server_config` JSON file, creating an empty `ServerConfiguration` if there isn't one.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ServerConfigFileManager()"}</code> | Creates a `ServerConfigFileManager` with default values. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-configfilename" /><code>{"private static string configFileName"}</code> | Name of the config file: `server_config`. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getconfigfile" /><code>{"static async Task<"}<Link to="/mod/game-api/types/global-s/serverconfiguration">{"ServerConfiguration"}</Link>{"> GetConfigFile("}<Link to="/mod/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" server)"}</code> | Reads the server's config file and returns its `ServerConfiguration`, or a new one set as the file's content. |
