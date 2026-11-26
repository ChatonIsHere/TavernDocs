---
title: "ModParity"
description: "Checks a joining player's mods against the server's parity_required mods, behind the launcher's own pre-join check."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ModParity

A **static class** in `TavernLib`, `TavernLib.Backend.Auth`.

Checks a joining player's mods against the server's `parity_required` mods, behind the launcher's own pre-join check. Also builds the refusal the client recognises.

- **Listed in** [TavernLib.Backend.Auth](/mod/tavernlib-api/types/backend-auth)
- **Nested types** [`RequiredMod`](/mod/tavernlib-api/types/backend-auth/modparity-requiredmod)
- **Documented in** [ModParity](/mod/tavernlib-api/types/backend-auth/modparity), [Versions and parity](/mod/tavernlib-api/mod-manager/versions-and-parity#modparity)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-maxreasonbytes" /><code>{"const int MaxReasonBytes"}</code> | <span className="api-desc">700, the most the refusal's mod list may take, so it fits in one game message.</span> |
| <Link id="m-mismatchreasonprefix" /><code>{"const string MismatchReasonPrefix"}</code> | <span className="api-desc">`Mod mismatch: `, which starts a mod refusal. `JoinRejectionRecorder` looks for it on the client.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-blocksclaimless" /><code>{"static bool BlocksClaimless("}<Link to="/mod/tavernlib-api/types/backend-mods/modhandshake-entry">{"ModHandshake.Entry"}</Link>{" mod)"}</code> | <span className="api-desc">True for a `parity_required` mod with a Windows or Android client build: it refuses a player who sent no mod list.</span> |
| <Link id="m-checkjoin" /><code>{"static List<"}<Link to="/mod/tavernlib-api/types/backend-auth/modparity-requiredmod">{"ModParity.RequiredMod"}</Link>{"> CheckJoin(List<"}<Link to="/mod/tavernlib-api/types/backend-mods/modhandshake-entry">{"ModHandshake.Entry"}</Link>{"> serverMods, Dictionary<string, string> clientMods)"}</code> | <span className="api-desc">The server's parity mods with a Windows build that the player lacks or has another version of. With no list, every `BlocksClaimless` mod.</span> |
| <Link id="m-localmods" /><code>{"static string LocalMods(string gameDir)"}</code> | <span className="api-desc">Client: JSON of id to version for the enabled mods installed for `client_windows`, the list the launcher sends.</span> |
| <Link id="m-refusalreason" /><code>{"static string RefusalReason(List<"}<Link to="/mod/tavernlib-api/types/backend-auth/modparity-requiredmod">{"ModParity.RequiredMod"}</Link>{"> mismatches)"}</code> | <span className="api-desc">The prefix and a JSON list of the mismatched mods, cut to fit 700 bytes but always naming at least one.</span> |
