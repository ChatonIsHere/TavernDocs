---
title: "TavernArgs"
description: "The names of TavernLib's own command-line arguments, as constants, so a mod can check for them with the game's CommandLineArguments."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TavernArgs

A **static class** in `TavernLib`, `TavernLib`.

The names of TavernLib's own command-line arguments, as constants, so a mod can check for them with the game's `CommandLineArguments`. Both sides.

- **Listed in** [TavernLib](/mod/tavernlib-api/types/root)
- **Documented in** [TavernArgs](/mod/tavernlib-api/types/root/tavernargs)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-devserverip" /><code>{"const string DevServerIp"}</code> | `/dev_server_ip`: the address `/join_local_server` joins. Defaults to `127.0.0.1`. |
| <Link id="m-devserverport" /><code>{"const string DevServerPort"}</code> | `/dev_server_port`: the game port for `/join_local_server` and local server joins. Defaults to 1757. |
| <Link id="m-devserverwebport" /><code>{"const string DevServerWebPort"}</code> | `/dev_server_web_port`: the server's web port, which the launcher gets from the server's auth reply. Without it the game uses 1761. |
| <Link id="m-dontmanageauth" /><code>{"const string DontManageAuth"}</code> | `/launcherauth`: the launcher runs this server. TavernLib then skips its mod reconcile, log archiving and backups. |
| <Link id="m-joinlocalserver" /><code>{"const string JoinLocalServer"}</code> | `/join_local_server`: Client: skips the game's startup actions and joins a server straight away. |
| <Link id="m-listingapi" /><code>{"const string ListingApi"}</code> | `/listing_api`: where the Community Servers listing is sent, for testing against a local stub. |
| <Link id="m-modslistfile" /><code>{"const string ModsListFile"}</code> | `/modlist`: Server: a modlist file to reconcile `Mods` with before mods load. Ignored with `/launcherauth`. |
| <Link id="m-questscene" /><code>{"const string QuestScene"}</code> | `/questScene`: forces the Quest scene (index 4) when joining, and for the reconcile and listing. |
| <Link id="m-rejoin" /><code>{"const string Rejoin"}</code> | `/tavern_rejoin`: the launcher is rejoining after installing a server's mods, so a refusal doesn't hand over to it again. |
| <Link id="m-tutorialscene" /><code>{"const string TutorialScene"}</code> | `/tutorialScene`: forces the tutorial scene (index 1). Checked before `/questScene`, so it wins. |
