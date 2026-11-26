---
title: "ConsoleAuth"
description: "Internal: console logins."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ConsoleAuth

A **internal static class** in `TavernLib`, `TavernLib.Backend.RemoteConsole`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Internal: console logins. Keeps `server_secret.key` and the owner token in `console_token.txt`, signs named tokens, and checks every console login. Server.

- **Listed in** [TavernLib.Backend.RemoteConsole](/tavernlib-api/types/backend-remoteconsole)
- **Nested types** [`LoginPath`](/tavernlib-api/types/backend-remoteconsole/consoleauth-loginpath)
- **Documented in** [ConsoleAuth](/tavernlib-api/types/backend-remoteconsole/consoleauth)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-tokenpolicy" /><code>{"const string TokenPolicy"}</code> | `tavern_token:`, the policy prefix that marks a named token's login, followed by its id. |

<details>
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-secret" /><code>{"private static byte[] _secret"}</code> | The loaded server secret, or null if it can't be read. |
| <Link id="m-secreterrorlogged" /><code>{"private static bool _secretErrorLogged"}</code> | Set once the unreadable-secret error has been logged, so it is logged once. |
| <Link id="m-basepolicies" /><code>{"private static readonly string[] BasePolicies"}</code> | Policies every named token carries. |
| <Link id="m-header" /><code>{"private static readonly string Header"}</code> | The fixed base64url JWT header for HS256. |
| <Link id="m-loginlimits" /><code>{"private static readonly "}<Link to="/tavernlib-api/types/backend-auth/authlimits">{"AuthLimits"}</Link>{" LoginLimits"}</code> | Tracks failed logins per address to hold off repeated failures. |
| <Link id="m-ownertokenpath" /><code>{"private static readonly string OwnerTokenPath"}</code> | Path of `console_token.txt`. |
| <Link id="m-secretpath" /><code>{"private static readonly string SecretPath"}</code> | Path of `server_secret.key`. |
| <Link id="m-secretsync" /><code>{"private static readonly object SecretSync"}</code> | Lock around loading the secret. |
| <Link id="m-tokenids" /><code>{"private static readonly ConditionalWeakTable<"}<Link to="/game-api/types/assembly-api-models/userinfowithpermissions">{"UserInfoWithPermissions"}</Link>{", string> TokenIds"}</code> | Caches the named token id found for each user. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-secret-2" /><code>{"static byte[] Secret { get; }"}</code> | The 32-byte key every console token is signed with, made on first use. `null` while it can't be read; an existing file is never replaced. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-b64url" /><code>{"static string B64Url(byte[] bytes)"}</code> | Base64url text with no padding. |
| <Link id="m-currentownertoken" /><code>{"static string CurrentOwnerToken()"}</code> | The owner token's current text, or `null` while the secret or `console_tokens.json` can't be read. |
| <Link id="m-ensureownertoken" /><code>{"static void EnsureOwnerToken()"}</code> | Writes `console_token.txt` when it's missing or isn't the current owner token. Called at server start. |
| <Link id="m-mint" /><code>{"static string Mint("}<Link to="/tavernlib-api/types/backend-remoteconsole/consoletoken">{"ConsoleToken"}</Link>{" token)"}</code> | A named token's signed text. The same row always gives the same text. |
| <Link id="m-tokenidof" /><code>{"static string TokenIdOf("}<Link to="/game-api/types/assembly-api-models/userinfowithpermissions">{"UserInfoWithPermissions"}</Link>{" user)"}</code> | The named token id a console login carries, or `null` for the owner token and the server itself. |
| <Link id="m-validate" /><code>{"static bool Validate(JwtSecurityToken wrapper, "}<Link to="/tavernlib-api/types/backend-remoteconsole/consoleauth-loginpath">{"ConsoleAuth.LoginPath"}</Link>{" path, string address, out string tokenId, out string reason)"}</code> | Checks a console login's signature, expiry, generation and status. Refuses for a while after too many failures from one address. |
| <Link id="m-writeownertoken" /><code>{"static string WriteOwnerToken(string text)"}</code> | Writes `console_token.txt` through a temp file. Returns `null` once written, otherwise why it couldn't be. |

<details>
<summary>15 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-b64" /><code>{"private static string B64(byte[] bytes)"}</code> | Standard base64 with the padding trimmed. |
| <Link id="m-bytestohex" /><code>{"private static string BytesToHex(byte[] bytes)"}</code> | Turns bytes into a lowercase hex string. |
| <Link id="m-check" /><code>{"private static string Check(JwtSecurityToken wrapper, "}<Link to="/tavernlib-api/types/backend-remoteconsole/consoleauth-loginpath">{"ConsoleAuth.LoginPath"}</Link>{" path, string address, ref string tokenId)"}</code> | Returns the reason a console login is refused, or null if it is allowed. |
| <Link id="m-fromb64" /><code>{"private static byte[] FromB64(string text)"}</code> | Reads base64 or base64url, or returns null. |
| <Link id="m-generationof" /><code>{"private static long GenerationOf(JObject claims)"}</code> | Reads the `gen` claim; 0 if absent and -1 if it isn't a number. |
| <Link id="m-hextobytes" /><code>{"private static byte[] HexToBytes(string hex)"}</code> | Reads a hex string into bytes, or returns null. |
| <Link id="m-iscurrentownertoken" /><code>{"private static bool IsCurrentOwnerToken(string raw)"}</code> | True if the text is a validly signed owner token of the current generation. |
| <Link id="m-isloopback" /><code>{"private static bool IsLoopback(string address)"}</code> | True if the address is a loopback address. |
| <Link id="m-loadorcreatesecret" /><code>{"private static byte[] LoadOrCreateSecret()"}</code> | Reads `server_secret.key`, creating it if missing, and retries a few times; returns null if it can't be read. |
| <Link id="m-ownerlocalonly" /><code>{"private static bool OwnerLocalOnly()"}</code> | True if `console_owner_local_only` is set in the server settings. |
| <Link id="m-ownertoken" /><code>{"private static string OwnerToken(byte[] secret, int generation)"}</code> | Builds the signed owner token text for a generation. |
| <Link id="m-policiesof" /><code>{"private static List<string> PoliciesOf(JObject claims)"}</code> | Reads the `Policy` claim into a list, splitting comma separated values. |
| <Link id="m-sign" /><code>{"private static string Sign(string payload, byte[] secret)"}</code> | Signs a payload with HMAC-SHA256 and returns the full token text. |
| <Link id="m-trycreatesecret" /><code>{"private static bool TryCreateSecret(out byte[] secret)"}</code> | Writes a new random 32 byte secret unless the file appeared meanwhile; false if it did. |
| <Link id="m-verify" /><code>{"private static bool Verify(string raw, byte[] secret, out JObject claims)"}</code> | Checks a token's signature in constant time and returns its claims. |

</details>
