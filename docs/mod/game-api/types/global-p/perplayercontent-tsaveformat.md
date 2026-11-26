---
title: "PerPlayerContent<TSaveFormat>"
description: "Server: a save file that belongs to one player (by user ID), loaded whether or not they're online."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PerPlayerContent&lt;TSaveFormat&gt;

A **class** in `Root.Township`, the global namespace.

Server: a save file that belongs to one player (by user ID), loaded whether or not they're online. Tracks the player while they're in the server. Base of `PlayerPostboxStorage`.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`IPerPlayerContent<TSaveFormat>`](/mod/game-api/types/global-i-l/iperplayercontent-tsaveformat)
- **Derived types** [`ClimbingTowerTeleporterSave`](/mod/game-api/types/game-other-namespaces/climbingtowerteleportersave), [`PlayerGoldBankAccount`](/mod/game-api/types/global-p/playergoldbankaccount), [`PlayerPostboxStorage`](/mod/game-api/types/global-p/playerpostboxstorage)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PerPlayerContent()"}</code> | <span className="api-desc">Creates a `PerPlayerContent` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-content" /><code>{"TSaveFormat Content { get; private set; }"}</code> | <span className="api-desc">The loaded file contents.</span> |
| <Link id="m-file" /><code><Link to="/mod/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{" File { get; private set; }"}</code> | <span className="api-desc">The save file the content is read from and written to.</span> |
| <Link id="m-issavingpaused" /><code>{"bool IsSavingPaused { get; private set; }"}</code> | <span className="api-desc">True between `PauseSaving` and `ResumeSaving`.</span> |
| <Link id="m-playeridentifier" /><code>{"int PlayerIdentifier { get; private set; }"}</code> | <span className="api-desc">The user ID of the player this content belongs to.</span> |
| <Link id="m-targetplayer" /><code><Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" TargetPlayer { get; private set; }"}</code> | <span className="api-desc">The player while they're in the server, otherwise null.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-loadasync" /><code>{"virtual async Task LoadAsync(int playerIdentifier, "}<Link to="/mod/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{" file, "}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" currentPlayer = null)"}</code> | <span className="api-desc">Reads the file, finds the player if they're online, and starts watching for them to join.</span> |
| <Link id="m-pausesaving" /><code>{"void PauseSaving()"}</code> | <span className="api-desc">Stops `SaveIfNoPlayer` from writing, for batches of changes.</span> |
| <Link id="m-resumesaving" /><code>{"void ResumeSaving(bool isUnloading)"}</code> | <span className="api-desc">Ends a pause and saves straight away, optionally unloading the file.</span> |
| <Link id="m-save" /><code>{"void Save(bool isUnloading)"}</code> | <span className="api-desc">Writes the file if the server has save files, and optionally queues it to unload.</span> |
| <Link id="m-saveifnoplayer" /><code>{"void SaveIfNoPlayer()"}</code> | <span className="api-desc">Saves now if the player is offline and saving isn't paused.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-loseplayer" /><code>{"private void LosePlayer("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | <span className="api-desc">Clears `TargetPlayer` when the player's entity is destroyed.</span> |
| <Link id="m-playerjoined" /><code>{"private void PlayerJoined("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" newPlayer)"}</code> | <span className="api-desc">Sets `TargetPlayer` when the player with this content's ID joins, and watches for them leaving.</span> |

</details>
