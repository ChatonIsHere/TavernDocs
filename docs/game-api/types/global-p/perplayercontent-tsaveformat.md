---
title: "PerPlayerContent<TSaveFormat>"
description: "Server: a save file that belongs to one player (by user ID), loaded whether or not they're online."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PerPlayerContent&lt;TSaveFormat&gt;

A **class** in `Root.Township`, no namespace.

Server: a save file that belongs to one player (by user ID), loaded whether or not they're online. Tracks the player while they're in the server. Base of `PlayerPostboxStorage`.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`IPerPlayerContent<TSaveFormat>`](/game-api/types/global-i-l/iperplayercontent-tsaveformat)
- **Derived types** [`ClimbingTowerTeleporterSave`](/game-api/types/game-other-namespaces/climbingtowerteleportersave), [`PlayerGoldBankAccount`](/game-api/types/global-p/playergoldbankaccount), [`PlayerPostboxStorage`](/game-api/types/global-p/playerpostboxstorage)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PerPlayerContent()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-content" /><code>{"TSaveFormat Content { get; private set; }"}</code> | The loaded file contents. |
| <Link id="m-file" /><code><Link to="/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{" File { get; private set; }"}</code> | The save file the content is read from and written to. |
| <Link id="m-issavingpaused" /><code>{"bool IsSavingPaused { get; private set; }"}</code> | True between `PauseSaving` and `ResumeSaving`. |
| <Link id="m-playeridentifier" /><code>{"int PlayerIdentifier { get; private set; }"}</code> | The user ID of the player this content belongs to. |
| <Link id="m-targetplayer" /><code><Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" TargetPlayer { get; private set; }"}</code> | The player while they're in the server, otherwise null. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-loadasync" /><code>{"virtual async Task LoadAsync(int playerIdentifier, "}<Link to="/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{" file, "}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" currentPlayer = null)"}</code> | Reads the file, finds the player if they're online, and starts watching for them to join. |
| <Link id="m-pausesaving" /><code>{"void PauseSaving()"}</code> | Stops `SaveIfNoPlayer` from writing, for batches of changes. |
| <Link id="m-resumesaving" /><code>{"void ResumeSaving(bool isUnloading)"}</code> | Ends a pause and saves straight away, optionally unloading the file. |
| <Link id="m-save" /><code>{"void Save(bool isUnloading)"}</code> | Writes the file if the server has save files, and optionally queues it to unload. |
| <Link id="m-saveifnoplayer" /><code>{"void SaveIfNoPlayer()"}</code> | Saves now if the player is offline and saving isn't paused. |

<details>
<summary>2 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-loseplayer" /><code>{"private void LosePlayer("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> |
| <Link id="m-playerjoined" /><code>{"private void PlayerJoined("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" newPlayer)"}</code> |

</details>
