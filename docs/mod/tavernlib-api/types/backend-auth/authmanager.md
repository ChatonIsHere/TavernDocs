---
title: "AuthManager"
description: "Internal: TavernLib's login server on the auth port (1762 by default)."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AuthManager

A **internal class** in `TavernLib`, `TavernLib.Backend.Auth`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Internal: TavernLib's login server on the auth port (1762 by default). Answers pings, mod lists, `set_mods`, whitelist applications and joins, registering new players in `users.json`. Server; not run with `/launcherauth`.

- **Listed in** [TavernLib.Backend.Auth](/mod/tavernlib-api/types/backend-auth)
- **Documented in** [AuthManager](/mod/tavernlib-api/types/backend-auth/authmanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AuthManager("}<Link to="/mod/tavernlib-api/types/backend-api/tavernmanager">{"TavernManager"}</Link>{" manager)"}</code> | Reads the auth port and starts listening. |

## Fields

<details>
<summary>14 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-limits" /><code>{"private readonly "}<Link to="/mod/tavernlib-api/types/backend-auth/authlimits">{"AuthLimits"}</Link>{" _limits"}</code> | Per-address connection and failure limits. |
| <Link id="m-listener" /><code>{"private TcpListener _listener"}</code> | The TCP listener on the auth port. |
| <Link id="m-manager" /><code>{"private readonly "}<Link to="/mod/tavernlib-api/types/backend-api/tavernmanager">{"TavernManager"}</Link>{" _manager"}</code> | The `TavernManager` that supplies the configs. |
| <Link id="m-port" /><code>{"private readonly int _port"}</code> | The auth port the server listens on. |
| <Link id="m-stopping" /><code>{"private bool _stopping"}</code> | Set when the game is quitting, which ends the accept loop. |
| <Link id="m-accountsperaddress" /><code>{"private const int AccountsPerAddress"}</code> | Most accounts that may be registered from one address when the IP limit is on. |
| <Link id="m-applicationsmax" /><code>{"private const int ApplicationsMax"}</code> | Most whitelist applications kept in all. |
| <Link id="m-applicationsperaddress" /><code>{"private const int ApplicationsPerAddress"}</code> | Most whitelist applications kept from one address. |
| <Link id="m-connectiontimeout" /><code>{"private static readonly TimeSpan ConnectionTimeout"}</code> | How long a connection to the auth port may take before it is closed (5 seconds). |
| <Link id="m-firstuserid" /><code>{"private const ulong FirstUserId"}</code> | The first user id handed out (1000000000). |
| <Link id="m-maxmodfield" /><code>{"private const int MaxModField"}</code> | Longest mod id or version in a `set_mods` list. |
| <Link id="m-maxmods" /><code>{"private const int MaxMods"}</code> | Most mods a `set_mods` list may hold. |
| <Link id="m-maxpayload" /><code>{"private const int MaxPayload"}</code> | Largest request, in bytes, the auth port reads. |
| <Link id="m-maxtokenlength" /><code>{"private const int MaxTokenLength"}</code> | Longest join token accepted for a new account. |

</details>

## Properties

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ports" /><code>{"private "}<Link to="/mod/tavernlib-api/types/backend-server-configs/tavernserver">{"TavernServer"}</Link>{" Ports { get; }"}</code> | The server's port settings from `tavern_server.json`. |

</details>

## Methods

<details>
<summary>17 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-applicationrefusal" /><code>{"private string ApplicationRefusal(string username, string ip)"}</code> | Returns why a whitelist application is refused, or null if it can be filed. |
| <Link id="m-checkifpermitted" /><code>{"private object CheckIfPermitted("}<Link to="/mod/tavernlib-api/types/backend-server-configs/userconfig">{"UserConfig"}</Link>{" config, "}<Link to="/mod/tavernlib-api/types/backend-server-configs/serversettings">{"ServerSettings"}</Link>{" settings, string joinerIp, "}<Link to="/mod/tavernlib-api/types/backend-auth/authpayloads-authenticaterequest">{"AuthPayloads.AuthenticateRequest"}</Link>{" payload)"}</code> | Checks blacklist, password and whitelist in that order; returns the refusal to send, or null if the player may join. |
| <Link id="m-interprettcpstream" /><code>{"private async Task InterpretTcpStream(TcpClient client)"}</code> | Handles one connection: applies limits, reads the request and routes it by its keys (ping, whitelist application, mods list, `set_mods`, join). |
| <Link id="m-manageauthrequest" /><code>{"private async Task ManageAuthRequest(Stream stream, JObject payload, string address)"}</code> | Handles a join request: checks the fields are present, then replies with the result of `ResolveJoin`. |
| <Link id="m-managesetmodsrequest" /><code>{"private async Task ManageSetModsRequest(Stream stream, JObject payload, string ip)"}</code> | Stores the mod list a player's game will load on their account, after checking their token. |
| <Link id="m-managewhitelistapplicationrequest" /><code>{"private async Task ManageWhitelistApplicationRequest(Stream stream, JObject payload, string joinerIp)"}</code> | Handles a whitelist application and files it in the requests file unless it is refused. |
| <Link id="m-nextuserid" /><code>{"private static ulong NextUserId("}<Link to="/mod/tavernlib-api/types/backend-server-configs/userconfig">{"UserConfig"}</Link>{" config)"}</code> | Returns one more than the highest user id in the file, and never below `FirstUserId`. |
| <Link id="m-readfullpayload" /><code>{"private async Task<string> ReadFullPayload(Stream stream, CancellationToken token)"}</code> | Reads from the stream until it holds a complete JSON object, or throws if it never does. |
| <Link id="m-readmodlist" /><code>{"private static Dictionary<string, string> ReadModList(JToken token)"}</code> | Parses a `set_mods` object into a dictionary, or returns null if any entry is too long or not a string. |
| <Link id="m-readsettings" /><code>{"private "}<Link to="/mod/tavernlib-api/types/backend-server-configs/serversettings">{"ServerSettings"}</Link>{" ReadSettings()"}</code> | Reads `server_settings.json` afresh; returns null if it can't be read. |
| <Link id="m-register" /><code>{"private bool Register("}<Link to="/mod/tavernlib-api/types/backend-server-configs/userconfig">{"UserConfig"}</Link>{" config, "}<Link to="/mod/tavernlib-api/types/backend-server-configs/serversettings">{"ServerSettings"}</Link>{" settings, "}<Link to="/mod/tavernlib-api/types/backend-auth/authpayloads-authenticaterequest">{"AuthPayloads.AuthenticateRequest"}</Link>{" payload, string ip, out object response)"}</code> | Creates or checks the player's account and returns whether `users.json` changed; the response is the join result. |
| <Link id="m-resolvejoin" /><code>{"private object ResolveJoin("}<Link to="/mod/tavernlib-api/types/backend-auth/authpayloads-authenticaterequest">{"AuthPayloads.AuthenticateRequest"}</Link>{" payload, string ip)"}</code> | Checks permission and registers the player under the user file's lock; returns the response to send. |
| <Link id="m-startauthcycle" /><code>{"private async Task StartAuthCycle()"}</code> | Starts the TCP listener and accepts connections until the game quits. |
| <Link id="m-stoplistening" /><code>{"private void StopListening()"}</code> | Stops the listener; runs when the game quits. |
| <Link id="m-writemodslistresponse" /><code>{"private async Task WriteModsListResponse(Stream stream)"}</code> | Sends the enabled server mods and untracked mods, prefixed with a 4 byte big-endian length. |
| <Link id="m-writepongresponse" /><code>{"private async Task WritePongResponse(Stream stream)"}</code> | Answers a ping with the server name, ports, password and whitelist flags, and the mod hash and count. |
| <Link id="m-writeresponse" /><code>{"private async Task WriteResponse(Stream stream, object response)"}</code> | Serializes a response object to JSON and writes it to the stream. |

</details>

## Used in

Members of other types that take, return or hold a `AuthManager`:

[`TavernManager.AuthManager`](/mod/tavernlib-api/types/backend-api/tavernmanager#m-authmanager).
