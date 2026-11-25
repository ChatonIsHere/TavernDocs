---
title: "ConsoleAuth"
description: "A internal static class in TavernLib, TavernLib.Backend.RemoteConsole. Reach it through att-stubs' publicized assemblies or Harmony's AccessTools."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ConsoleAuth

A **internal static class** in `TavernLib`, `TavernLib.Backend.RemoteConsole`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

A **internal static class** in `TavernLib`, `TavernLib.Backend.RemoteConsole`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

- **Listed in** [TavernLib.Backend.RemoteConsole](/tavernlib-api/types/backend-remoteconsole)
- **Nested types** [`LoginPath`](/tavernlib-api/types/backend-remoteconsole/consoleauth-loginpath)
- **Documented in** [ConsoleAuth](/tavernlib-api/types/backend-remoteconsole/consoleauth)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-tokenpolicy" /><code>{"const string TokenPolicy"}</code> |  |
| <Link id="m-secret" /><code>{"private static byte[] _secret"}</code> |  |
| <Link id="m-secreterrorlogged" /><code>{"private static bool _secretErrorLogged"}</code> |  |
| <Link id="m-basepolicies" /><code>{"private static readonly string[] BasePolicies"}</code> |  |
| <Link id="m-header" /><code>{"private static readonly string Header"}</code> |  |
| <Link id="m-loginlimits" /><code>{"private static readonly "}<Link to="/tavernlib-api/types/backend-auth/authlimits">{"AuthLimits"}</Link>{" LoginLimits"}</code> |  |
| <Link id="m-ownertokenpath" /><code>{"private static readonly string OwnerTokenPath"}</code> |  |
| <Link id="m-secretpath" /><code>{"private static readonly string SecretPath"}</code> |  |
| <Link id="m-secretsync" /><code>{"private static readonly object SecretSync"}</code> |  |
| <Link id="m-tokenids" /><code>{"private static readonly ConditionalWeakTable<"}<Link to="/game-api/types/assembly-api-models/userinfowithpermissions">{"UserInfoWithPermissions"}</Link>{", string> TokenIds"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-secret-2" /><code>{"static byte[] Secret { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-b64url" /><code>{"static string B64Url(byte[] bytes)"}</code> |  |
| <Link id="m-currentownertoken" /><code>{"static string CurrentOwnerToken()"}</code> |  |
| <Link id="m-ensureownertoken" /><code>{"static void EnsureOwnerToken()"}</code> |  |
| <Link id="m-mint" /><code>{"static string Mint("}<Link to="/tavernlib-api/types/backend-remoteconsole/consoletoken">{"ConsoleToken"}</Link>{" token)"}</code> |  |
| <Link id="m-tokenidof" /><code>{"static string TokenIdOf("}<Link to="/game-api/types/assembly-api-models/userinfowithpermissions">{"UserInfoWithPermissions"}</Link>{" user)"}</code> |  |
| <Link id="m-validate" /><code>{"static bool Validate(JwtSecurityToken wrapper, "}<Link to="/tavernlib-api/types/backend-remoteconsole/consoleauth-loginpath">{"ConsoleAuth.LoginPath"}</Link>{" path, string address, out string tokenId, out string reason)"}</code> |  |
| <Link id="m-writeownertoken" /><code>{"static string WriteOwnerToken(string text)"}</code> |  |
| <Link id="m-b64" /><code>{"private static string B64(byte[] bytes)"}</code> |  |
| <Link id="m-bytestohex" /><code>{"private static string BytesToHex(byte[] bytes)"}</code> |  |
| <Link id="m-check" /><code>{"private static string Check(JwtSecurityToken wrapper, "}<Link to="/tavernlib-api/types/backend-remoteconsole/consoleauth-loginpath">{"ConsoleAuth.LoginPath"}</Link>{" path, string address, ref string tokenId)"}</code> |  |
| <Link id="m-fromb64" /><code>{"private static byte[] FromB64(string text)"}</code> |  |
| <Link id="m-generationof" /><code>{"private static long GenerationOf(JObject claims)"}</code> |  |
| <Link id="m-hextobytes" /><code>{"private static byte[] HexToBytes(string hex)"}</code> |  |
| <Link id="m-iscurrentownertoken" /><code>{"private static bool IsCurrentOwnerToken(string raw)"}</code> |  |
| <Link id="m-isloopback" /><code>{"private static bool IsLoopback(string address)"}</code> |  |
| <Link id="m-loadorcreatesecret" /><code>{"private static byte[] LoadOrCreateSecret()"}</code> |  |
| <Link id="m-ownerlocalonly" /><code>{"private static bool OwnerLocalOnly()"}</code> |  |
| <Link id="m-ownertoken" /><code>{"private static string OwnerToken(byte[] secret, int generation)"}</code> |  |
| <Link id="m-policiesof" /><code>{"private static List<string> PoliciesOf(JObject claims)"}</code> |  |
| <Link id="m-sign" /><code>{"private static string Sign(string payload, byte[] secret)"}</code> |  |
| <Link id="m-trycreatesecret" /><code>{"private static bool TryCreateSecret(out byte[] secret)"}</code> |  |
| <Link id="m-verify" /><code>{"private static bool Verify(string raw, byte[] secret, out JObject claims)"}</code> |  |
