---
title: "PlayerDataFileHelper<T>"
description: "Server: reads per-player save files of one format from a save subfolder named after T (for example landmark data)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerDataFileHelper&lt;T&gt;

A **class** in `Root.Township`, `Alta.Map`.

Server: reads per-player save files of one format from a save subfolder named after `T` (for example landmark data). One singleton per format through `Instance`.

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)

## Constructors

<details className="api-private">
<summary>1 private and internal constructor</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"private PlayerDataFileHelper()"}</code> | <span className="api-desc">Creates a `PlayerDataFileHelper` with default values.</span> |

</details>

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"private static "}<Link to="/mod/game-api/types/alta-world/playerdatafilehelper-t">{"PlayerDataFileHelper"}</Link>{"<T> instance"}</code> | <span className="api-desc">Backing field for `Instance`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-datafolder" /><code><Link to="/mod/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" DataFolder { get; }"}</code> | <span className="api-desc">The save subfolder for this format, named after the type `T`.</span> |
| <Link id="m-instance-2" /><code>{"static "}<Link to="/mod/game-api/types/alta-world/playerdatafilehelper-t">{"PlayerDataFileHelper"}</Link>{"<T> Instance { get; }"}</code> | <span className="api-desc">The helper for format `T`, created on first access.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getfileasync" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{"> GetFileAsync("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Gets the file for a player, `<user id>.bytes`, from an `IPlayer` or a user ID.</span> |
| <Link id="m-getfileasync-2" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{"> GetFileAsync(int playerIdentifier)"}</code> | <span className="api-desc">Gets the file for a player, `<user id>.bytes`, from an `IPlayer` or a user ID.</span> |
| <Link id="m-getsharedasync" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{"> GetSharedAsync()"}</code> | <span className="api-desc">Gets the shared file, `Shared.bytes`, for data not tied to one player.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getasync" /><code>{"private async Task<"}<Link to="/mod/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{"> GetAsync(string name)"}</code> | <span className="api-desc">Reads the named file in `DataFolder`, giving it new empty content if it did not exist.</span> |

</details>
