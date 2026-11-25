---
title: "PerPlayerContent<TSaveFormat>"
description: "class PerPlayerContent<TSaveFormat> in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PerPlayerContent&lt;TSaveFormat&gt;

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`IPerPlayerContent<TSaveFormat>`](/game-api/types/global-i-l/iperplayercontent-tsaveformat)
- **Derived types** [`ClimbingTowerTeleporterSave`](/game-api/types/game-other-namespaces/climbingtowerteleportersave), [`PlayerGoldBankAccount`](/game-api/types/global-p/playergoldbankaccount), [`PlayerPostboxStorage`](/game-api/types/global-p/playerpostboxstorage)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PerPlayerContent()"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-content" /><code>{"TSaveFormat Content { get; private set; }"}</code> |  |
| <Link id="m-file" /><code><Link to="/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{" File { get; private set; }"}</code> |  |
| <Link id="m-issavingpaused" /><code>{"bool IsSavingPaused { get; private set; }"}</code> |  |
| <Link id="m-playeridentifier" /><code>{"int PlayerIdentifier { get; private set; }"}</code> |  |
| <Link id="m-targetplayer" /><code><Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" TargetPlayer { get; private set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-loadasync" /><code>{"virtual async Task LoadAsync(int playerIdentifier, "}<Link to="/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{" file, "}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" currentPlayer = null)"}</code> |  |
| <Link id="m-pausesaving" /><code>{"void PauseSaving()"}</code> |  |
| <Link id="m-resumesaving" /><code>{"void ResumeSaving(bool isUnloading)"}</code> |  |
| <Link id="m-save" /><code>{"void Save(bool isUnloading)"}</code> |  |
| <Link id="m-saveifnoplayer" /><code>{"void SaveIfNoPlayer()"}</code> |  |
| <Link id="m-loseplayer" /><code>{"private void LosePlayer("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> |  |
| <Link id="m-playerjoined" /><code>{"private void PlayerJoined("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" newPlayer)"}</code> |  |
