---
title: "AuthManager"
description: "A internal class in TavernLib, TavernLib.Backend.Auth. Reach it through att-stubs' publicized assemblies or Harmony's AccessTools."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AuthManager

A **internal class** in `TavernLib`, `TavernLib.Backend.Auth`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

A **internal class** in `TavernLib`, `TavernLib.Backend.Auth`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

- **Listed in** [TavernLib.Backend.Auth](/tavernlib-api/types/backend-auth)
- **Documented in** [AuthManager](/tavernlib-api/types/backend-auth/authmanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AuthManager("}<Link to="/tavernlib-api/types/backend-api/tavernmanager">{"TavernManager"}</Link>{" manager)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-limits" /><code>{"private readonly "}<Link to="/tavernlib-api/types/backend-auth/authlimits">{"AuthLimits"}</Link>{" _limits"}</code> |  |
| <Link id="m-listener" /><code>{"private TcpListener _listener"}</code> |  |
| <Link id="m-manager" /><code>{"private readonly "}<Link to="/tavernlib-api/types/backend-api/tavernmanager">{"TavernManager"}</Link>{" _manager"}</code> |  |
| <Link id="m-port" /><code>{"private readonly int _port"}</code> |  |
| <Link id="m-stopping" /><code>{"private bool _stopping"}</code> |  |
| <Link id="m-accountsperaddress" /><code>{"private const int AccountsPerAddress"}</code> |  |
| <Link id="m-applicationsmax" /><code>{"private const int ApplicationsMax"}</code> |  |
| <Link id="m-applicationsperaddress" /><code>{"private const int ApplicationsPerAddress"}</code> |  |
| <Link id="m-connectiontimeout" /><code>{"private static readonly TimeSpan ConnectionTimeout"}</code> |  |
| <Link id="m-firstuserid" /><code>{"private const ulong FirstUserId"}</code> |  |
| <Link id="m-maxmodfield" /><code>{"private const int MaxModField"}</code> |  |
| <Link id="m-maxmods" /><code>{"private const int MaxMods"}</code> |  |
| <Link id="m-maxpayload" /><code>{"private const int MaxPayload"}</code> |  |
| <Link id="m-maxtokenlength" /><code>{"private const int MaxTokenLength"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-ports" /><code>{"private "}<Link to="/tavernlib-api/types/backend-server-configs/tavernserver">{"TavernServer"}</Link>{" Ports { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applicationrefusal" /><code>{"private string ApplicationRefusal(string username, string ip)"}</code> |  |
| <Link id="m-checkifpermitted" /><code>{"private object CheckIfPermitted("}<Link to="/tavernlib-api/types/backend-server-configs/userconfig">{"UserConfig"}</Link>{" config, "}<Link to="/tavernlib-api/types/backend-server-configs/serversettings">{"ServerSettings"}</Link>{" settings, string joinerIp, "}<Link to="/tavernlib-api/types/backend-auth/authpayloads-authenticaterequest">{"AuthPayloads.AuthenticateRequest"}</Link>{" payload)"}</code> |  |
| <Link id="m-interprettcpstream" /><code>{"private async Task InterpretTcpStream(TcpClient client)"}</code> |  |
| <Link id="m-manageauthrequest" /><code>{"private async Task ManageAuthRequest(Stream stream, JObject payload, string address)"}</code> |  |
| <Link id="m-managesetmodsrequest" /><code>{"private async Task ManageSetModsRequest(Stream stream, JObject payload, string ip)"}</code> |  |
| <Link id="m-managewhitelistapplicationrequest" /><code>{"private async Task ManageWhitelistApplicationRequest(Stream stream, JObject payload, string joinerIp)"}</code> |  |
| <Link id="m-nextuserid" /><code>{"private static ulong NextUserId("}<Link to="/tavernlib-api/types/backend-server-configs/userconfig">{"UserConfig"}</Link>{" config)"}</code> |  |
| <Link id="m-readfullpayload" /><code>{"private async Task<string> ReadFullPayload(Stream stream, CancellationToken token)"}</code> |  |
| <Link id="m-readmodlist" /><code>{"private static Dictionary<string, string> ReadModList(JToken token)"}</code> |  |
| <Link id="m-readsettings" /><code>{"private "}<Link to="/tavernlib-api/types/backend-server-configs/serversettings">{"ServerSettings"}</Link>{" ReadSettings()"}</code> |  |
| <Link id="m-register" /><code>{"private bool Register("}<Link to="/tavernlib-api/types/backend-server-configs/userconfig">{"UserConfig"}</Link>{" config, "}<Link to="/tavernlib-api/types/backend-server-configs/serversettings">{"ServerSettings"}</Link>{" settings, "}<Link to="/tavernlib-api/types/backend-auth/authpayloads-authenticaterequest">{"AuthPayloads.AuthenticateRequest"}</Link>{" payload, string ip, out object response)"}</code> |  |
| <Link id="m-resolvejoin" /><code>{"private object ResolveJoin("}<Link to="/tavernlib-api/types/backend-auth/authpayloads-authenticaterequest">{"AuthPayloads.AuthenticateRequest"}</Link>{" payload, string ip)"}</code> |  |
| <Link id="m-startauthcycle" /><code>{"private async Task StartAuthCycle()"}</code> |  |
| <Link id="m-stoplistening" /><code>{"private void StopListening()"}</code> |  |
| <Link id="m-writemodslistresponse" /><code>{"private async Task WriteModsListResponse(Stream stream)"}</code> |  |
| <Link id="m-writepongresponse" /><code>{"private async Task WritePongResponse(Stream stream)"}</code> |  |
| <Link id="m-writeresponse" /><code>{"private async Task WriteResponse(Stream stream, object response)"}</code> |  |

## Used in

Members of other types that take, return or hold a `AuthManager`:

[`TavernManager.AuthManager`](/tavernlib-api/types/backend-api/tavernmanager#m-authmanager).
