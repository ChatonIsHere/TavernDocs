---
title: TavernLib.Backend.Auth
description: Every type in the TavernLib.Backend.Auth namespace.
sidebar_position: 5
---

# TavernLib.Backend.Auth

Every type in `TavernLib.Backend.Auth`, from TavernLib's own assembly. See [the overview](overview.md) for how these pages are made.

| Type | Kind | Public members | What it is |
| --- | --- | --- | --- |
| [`AuthLimits`](/mod/tavernlib-api/types/backend-auth/authlimits) | internal class | 11 | Internal: per-address limits on the auth port and console logins. 8 failures, or 5 wrong passwords, each within 60 seconds of the last, hold an address off until 60 quiet seconds pass. |
| [`AuthLimits.Strikes`](/mod/tavernlib-api/types/backend-auth/authlimits-strikes) | private struct | 2 | Private: one address's failure count and when the last one was. |
| [`AuthManager`](/mod/tavernlib-api/types/backend-auth/authmanager) | internal class | 1 | Internal: TavernLib's login server on the auth port (1762 by default). Answers pings, mod lists, `set_mods`, whitelist applications and joins, registering new players in `users.json`. Server; not run with `/launcherauth`. |
| [`AuthPayloads`](/mod/tavernlib-api/types/backend-auth/authpayloads) | internal static class | 0 | Internal: the JSON shapes the auth port reads and writes. |
| [`AuthPayloads.AuthenticateOk`](/mod/tavernlib-api/types/backend-auth/authpayloads-authenticateok) | struct | 1 | The answer to an accepted join: the player's user id, whether the Quest or tutorial scene is needed, and the game and web ports. |
| [`AuthPayloads.AuthenticateRequest`](/mod/tavernlib-api/types/backend-auth/authpayloads-authenticaterequest) | struct | 3 | A join request on the auth port: the player's name, account token and, if needed, password. |
| [`AuthPayloads.GenericFail`](/mod/tavernlib-api/types/backend-auth/authpayloads-genericfail) | struct | 1 | Status `error` with a message, for every other refusal (blacklisted, name taken, too many attempts and so on). |
| [`AuthPayloads.ModsListResponse`](/mod/tavernlib-api/types/backend-auth/authpayloads-modslistresponse) | struct | 1 | The answer to `mods_list`: the server's mods and enabled untracked mods, sent with a 4-byte big-endian length in front. |
| [`AuthPayloads.NeedsPassword`](/mod/tavernlib-api/types/backend-auth/authpayloads-needspassword) | struct | 0 | Status `needs_password`: the server has a password and the join gave none. |
| [`AuthPayloads.NotWhitelisted`](/mod/tavernlib-api/types/backend-auth/authpayloads-notwhitelisted) | struct | 0 | Status `not_whitelisted`, with the message `Not Whitelisted`. |
| [`AuthPayloads.Ok`](/mod/tavernlib-api/types/backend-auth/authpayloads-ok) | struct | 0 | A plain `ok` status, the answer to an accepted `set_mods`. |
| [`AuthPayloads.PingRequest`](/mod/tavernlib-api/types/backend-auth/authpayloads-pingrequest) | struct | 0 | A `ping` request. Any payload with a `ping` key is answered with a `PingResponse`. |
| [`AuthPayloads.PingResponse`](/mod/tavernlib-api/types/backend-auth/authpayloads-pingresponse) | struct | 1 | The auth port's answer to a ping: status `pong`, the server name, whether a password and the whitelist are on, the game, web and console ports, and the mods hash and count. |
| [`AuthPayloads.WhitelistApplicationReceived`](/mod/tavernlib-api/types/backend-auth/authpayloads-whitelistapplicationreceived) | struct | 1 | Status `whitelist_application_received`, with `already_pending` true when the same name and address had already applied. |
| [`AuthPayloads.WrongPassword`](/mod/tavernlib-api/types/backend-auth/authpayloads-wrongpassword) | struct | 0 | Status `wrong_password`, with the message `Wrong Password`. |
| [`JoinRules`](/mod/tavernlib-api/types/backend-auth/joinrules) | internal static class | 5 | Internal: who may join, checked on the auth port and again at the game port, which a client can reach without the auth port. |
| [`ModParity`](/mod/tavernlib-api/types/backend-auth/modparity) | static class | 6 | Checks a joining player's mods against the server's `parity_required` mods, behind the launcher's own pre-join check. Also builds the refusal the client recognises. |
| [`ModParity.RequiredMod`](/mod/tavernlib-api/types/backend-auth/modparity-requiredmod) | class | 4 | One mod a joining player is missing or has the wrong version of, as sent in the refusal and written to `last_rejection.json`. |
