---
title: "IPerPlayerContent<TSaveFormat>"
description: "Server: data kept for one player and saved to its own file, managed by a PerPlayerManager."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IPerPlayerContent&lt;TSaveFormat&gt;

An **interface** in `Root.Township`, no namespace.

Server: data kept for one player and saved to its own file, managed by a `PerPlayerManager`.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Derived types** [`PerPlayerContent<TSaveFormat>`](/game-api/types/global-p/perplayercontent-tsaveformat)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-targetplayer" /><code><Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" TargetPlayer { get; }"}</code> | The player this content belongs to. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-loadasync" /><code>{"Task LoadAsync(int playerIdentifier, "}<Link to="/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{" file, "}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" currentPlayer = null)"}</code> | Loads the content for a player from the given file. |
| <Link id="m-save" /><code>{"void Save(bool isUnloading)"}</code> | Saves the content; the flag says it is being unloaded. |
