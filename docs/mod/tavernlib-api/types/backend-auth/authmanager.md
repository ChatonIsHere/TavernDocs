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

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AuthManager("}<Link to="/mod/tavernlib-api/types/backend-api/tavernmanager">{"TavernManager"}</Link>{" manager)"}</code> | <span className="api-desc">Reads the auth port and starts listening.</span> |

## Fields

<details className="api-private">
<summary>14 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-limits" /><code>{"private readonly "}<Link to="/mod/tavernlib-api/types/backend-auth/authlimits">{"AuthLimits"}</Link>{" _limits"}</code> | <span className="api-desc">Per-address connection and failure limits.</span> |
| <Link id="m-listener" /><code>{"private TcpListener _listener"}</code> | <span className="api-desc">The TCP listener on the auth port.</span> |
| <Link id="m-manager" /><code>{"private readonly "}<Link to="/mod/tavernlib-api/types/backend-api/tavernmanager">{"TavernManager"}</Link>{" _manager"}</code> | <span className="api-desc">The `TavernManager` that supplies the configs.</span> |
| <Link id="m-port" /><code>{"private readonly int _port"}</code> | <span className="api-desc">The auth port the server listens on.</span> |
| <Link id="m-stopping" /><code>{"private bool _stopping"}</code> | <span className="api-desc">Set when the game is quitting, which ends the accept loop.</span> |
| <Link id="m-accountsperaddress" /><code>{"private const int AccountsPerAddress"}</code> | <span className="api-desc">Most accounts that may be registered from one address when the IP limit is on.</span> |
| <Link id="m-applicationsmax" /><code>{"private const int ApplicationsMax"}</code> | <span className="api-desc">Most whitelist applications kept in all.</span> |
| <Link id="m-applicationsperaddress" /><code>{"private const int ApplicationsPerAddress"}</code> | <span className="api-desc">Most whitelist applications kept from one address.</span> |
| <Link id="m-connectiontimeout" /><code>{"private static readonly TimeSpan ConnectionTimeout"}</code> | <span className="api-desc">How long a connection to the auth port may take before it is closed (5 seconds).</span> |
| <Link id="m-firstuserid" /><code>{"private const ulong FirstUserId"}</code> | <span className="api-desc">The first user id handed out (1000000000).</span> |
| <Link id="m-maxmodfield" /><code>{"private const int MaxModField"}</code> | <span className="api-desc">Longest mod id or version in a `set_mods` list.</span> |
| <Link id="m-maxmods" /><code>{"private const int MaxMods"}</code> | <span className="api-desc">Most mods a `set_mods` list may hold.</span> |
| <Link id="m-maxpayload" /><code>{"private const int MaxPayload"}</code> | <span className="api-desc">Largest request, in bytes, the auth port reads.</span> |
| <Link id="m-maxtokenlength" /><code>{"private const int MaxTokenLength"}</code> | <span className="api-desc">Longest join token accepted for a new account.</span> |

</details>

## Properties

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ports" /><code>{"private "}<Link to="/mod/tavernlib-api/types/backend-server-configs/tavernserver">{"TavernServer"}</Link>{" Ports { get; }"}</code> | <span className="api-desc">The server's port settings from `tavern_server.json`.</span> |

</details>

## Methods

<details className="api-private">
<summary>17 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-applicationrefusal" /><code>{"private string ApplicationRefusal(string username, string ip)"}</code> | <span className="api-desc">Returns why a whitelist application is refused, or null if it can be filed.</span> |
| <Link id="m-checkifpermitted" /><code>{"private object CheckIfPermitted("}<Link to="/mod/tavernlib-api/types/backend-server-configs/userconfig">{"UserConfig"}</Link>{" config, "}<Link to="/mod/tavernlib-api/types/backend-server-configs/serversettings">{"ServerSettings"}</Link>{" settings, string joinerIp, "}<Link to="/mod/tavernlib-api/types/backend-auth/authpayloads-authenticaterequest">{"AuthPayloads.AuthenticateRequest"}</Link>{" payload)"}</code> | <span className="api-desc">Checks blacklist, password and whitelist in that order; returns the refusal to send, or null if the player may join.</span> |
| <Link id="m-interprettcpstream" /><code>{"private async Task InterpretTcpStream(TcpClient client)"}</code> | <span className="api-desc">Handles one connection: applies limits, reads the request and routes it by its keys (ping, whitelist application, mods list, `set_mods`, join).</span> |
| <Link id="m-manageauthrequest" /><code>{"private async Task ManageAuthRequest(Stream stream, JObject payload, string address)"}</code> | <span className="api-desc">Handles a join request: checks the fields are present, then replies with the result of `ResolveJoin`.</span> |
| <Link id="m-managesetmodsrequest" /><code>{"private async Task ManageSetModsRequest(Stream stream, JObject payload, string ip)"}</code> | <span className="api-desc">Stores the mod list a player's game will load on their account, after checking their token.</span> |
| <Link id="m-managewhitelistapplicationrequest" /><code>{"private async Task ManageWhitelistApplicationRequest(Stream stream, JObject payload, string joinerIp)"}</code> | <span className="api-desc">Handles a whitelist application and files it in the requests file unless it is refused.</span> |
| <Link id="m-nextuserid" /><code>{"private static ulong NextUserId("}<Link to="/mod/tavernlib-api/types/backend-server-configs/userconfig">{"UserConfig"}</Link>{" config)"}</code> | <span className="api-desc">Returns one more than the highest user id in the file, and never below `FirstUserId`.</span> |
| <Link id="m-readfullpayload" /><code>{"private async Task<string> ReadFullPayload(Stream stream, CancellationToken token)"}</code> | <span className="api-desc">Reads from the stream until it holds a complete JSON object, or throws if it never does.</span> |
| <Link id="m-readmodlist" /><code>{"private static Dictionary<string, string> ReadModList(JToken token)"}</code> | <span className="api-desc">Parses a `set_mods` object into a dictionary, or returns null if any entry is too long or not a string.</span> |
| <Link id="m-readsettings" /><code>{"private "}<Link to="/mod/tavernlib-api/types/backend-server-configs/serversettings">{"ServerSettings"}</Link>{" ReadSettings()"}</code> | <span className="api-desc">Reads `server_settings.json` afresh; returns null if it can't be read.</span> |
| <Link id="m-register" /><code>{"private bool Register("}<Link to="/mod/tavernlib-api/types/backend-server-configs/userconfig">{"UserConfig"}</Link>{" config, "}<Link to="/mod/tavernlib-api/types/backend-server-configs/serversettings">{"ServerSettings"}</Link>{" settings, "}<Link to="/mod/tavernlib-api/types/backend-auth/authpayloads-authenticaterequest">{"AuthPayloads.AuthenticateRequest"}</Link>{" payload, string ip, out object response)"}</code> | <span className="api-desc">Creates or checks the player's account and returns whether `users.json` changed; the response is the join result.</span> |
| <Link id="m-resolvejoin" /><code>{"private object ResolveJoin("}<Link to="/mod/tavernlib-api/types/backend-auth/authpayloads-authenticaterequest">{"AuthPayloads.AuthenticateRequest"}</Link>{" payload, string ip)"}</code> | <span className="api-desc">Checks permission and registers the player under the user file's lock; returns the response to send.</span> |
| <Link id="m-startauthcycle" /><code>{"private async Task StartAuthCycle()"}</code> | <span className="api-desc">Starts the TCP listener and accepts connections until the game quits.</span> |
| <Link id="m-stoplistening" /><code>{"private void StopListening()"}</code> | <span className="api-desc">Stops the listener; runs when the game quits.</span> |
| <Link id="m-writemodslistresponse" /><code>{"private async Task WriteModsListResponse(Stream stream)"}</code> | <span className="api-desc">Sends the enabled server mods and untracked mods, prefixed with a 4 byte big-endian length.</span> |
| <Link id="m-writepongresponse" /><code>{"private async Task WritePongResponse(Stream stream)"}</code> | <span className="api-desc">Answers a ping with the server name, ports, password and whitelist flags, and the mod hash and count.</span> |
| <Link id="m-writeresponse" /><code>{"private async Task WriteResponse(Stream stream, object response)"}</code> | <span className="api-desc">Serializes a response object to JSON and writes it to the stream.</span> |

</details>

## Used in

Members of other types that take, return or hold a `AuthManager`:

<div className="api-used-in">

[`TavernManager.AuthManager`](/mod/tavernlib-api/types/backend-api/tavernmanager#m-authmanager).

</div>
