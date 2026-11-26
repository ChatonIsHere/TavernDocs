---
title: "IPerPlayerContent<TSaveFormat>"
description: "Server: data kept for one player and saved to its own file, managed by a PerPlayerManager."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IPerPlayerContent&lt;TSaveFormat&gt;

An **interface** in `Root.Township`, the global namespace.

Server: data kept for one player and saved to its own file, managed by a `PerPlayerManager`.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Derived types** [`PerPlayerContent<TSaveFormat>`](/mod/game-api/types/global-p/perplayercontent-tsaveformat)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-targetplayer" /><code><Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" TargetPlayer { get; }"}</code> | <span className="api-desc">The player this content belongs to.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-loadasync" /><code>{"Task LoadAsync(int playerIdentifier, "}<Link to="/mod/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{" file, "}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" currentPlayer = null)"}</code> | <span className="api-desc">Loads the content for a player from the given file.</span> |
| <Link id="m-save" /><code>{"void Save(bool isUnloading)"}</code> | <span className="api-desc">Saves the content; the flag says it is being unloaded.</span> |
