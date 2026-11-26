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

- **Listed in** [TavernLib.Backend.RemoteConsole](/mod/tavernlib-api/types/backend-remoteconsole)
- **Nested types** [`LoginPath`](/mod/tavernlib-api/types/backend-remoteconsole/consoleauth-loginpath)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-tokenpolicy" /><code>{"const string TokenPolicy"}</code> | <span className="api-desc">`tavern_token:`, the policy prefix that marks a named token's login, followed by its id.</span> |

<details className="api-private">
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-secret" /><code>{"private static byte[] _secret"}</code> | <span className="api-desc">The loaded server secret, or null if it can't be read.</span> |
| <Link id="m-secreterrorlogged" /><code>{"private static bool _secretErrorLogged"}</code> | <span className="api-desc">Set once the unreadable-secret error has been logged, so it is logged once.</span> |
| <Link id="m-basepolicies" /><code>{"private static readonly string[] BasePolicies"}</code> | <span className="api-desc">Policies every named token carries.</span> |
| <Link id="m-header" /><code>{"private static readonly string Header"}</code> | <span className="api-desc">The fixed base64url JWT header for HS256.</span> |
| <Link id="m-loginlimits" /><code>{"private static readonly "}<Link to="/mod/tavernlib-api/types/backend-auth/authlimits">{"AuthLimits"}</Link>{" LoginLimits"}</code> | <span className="api-desc">Tracks failed logins per address to hold off repeated failures.</span> |
| <Link id="m-ownertokenpath" /><code>{"private static readonly string OwnerTokenPath"}</code> | <span className="api-desc">Path of `console_token.txt`.</span> |
| <Link id="m-secretpath" /><code>{"private static readonly string SecretPath"}</code> | <span className="api-desc">Path of `server_secret.key`.</span> |
| <Link id="m-secretsync" /><code>{"private static readonly object SecretSync"}</code> | <span className="api-desc">Lock around loading the secret.</span> |
| <Link id="m-tokenids" /><code>{"private static readonly ConditionalWeakTable<"}<Link to="/mod/game-api/types/assembly-api-models/userinfowithpermissions">{"UserInfoWithPermissions"}</Link>{", string> TokenIds"}</code> | <span className="api-desc">Caches the named token id found for each user.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-secret-2" /><code>{"static byte[] Secret { get; }"}</code> | <span className="api-desc">The 32-byte key every console token is signed with, made on first use. `null` while it can't be read; an existing file is never replaced.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-b64url" /><code>{"static string B64Url(byte[] bytes)"}</code> | <span className="api-desc">Base64url text with no padding.</span> |
| <Link id="m-currentownertoken" /><code>{"static string CurrentOwnerToken()"}</code> | <span className="api-desc">The owner token's current text, or `null` while the secret or `console_tokens.json` can't be read.</span> |
| <Link id="m-ensureownertoken" /><code>{"static void EnsureOwnerToken()"}</code> | <span className="api-desc">Writes `console_token.txt` when it's missing or isn't the current owner token. Called at server start.</span> |
| <Link id="m-mint" /><code>{"static string Mint("}<Link to="/mod/tavernlib-api/types/backend-remoteconsole/consoletoken">{"ConsoleToken"}</Link>{" token)"}</code> | <span className="api-desc">A named token's signed text. The same row always gives the same text.</span> |
| <Link id="m-tokenidof" /><code>{"static string TokenIdOf("}<Link to="/mod/game-api/types/assembly-api-models/userinfowithpermissions">{"UserInfoWithPermissions"}</Link>{" user)"}</code> | <span className="api-desc">The named token id a console login carries, or `null` for the owner token and the server itself.</span> |
| <Link id="m-validate" /><code>{"static bool Validate(JwtSecurityToken wrapper, "}<Link to="/mod/tavernlib-api/types/backend-remoteconsole/consoleauth-loginpath">{"ConsoleAuth.LoginPath"}</Link>{" path, string address, out string tokenId, out string reason)"}</code> | <span className="api-desc">Checks a console login's signature, expiry, generation and status. Refuses for a while after too many failures from one address.</span> |
| <Link id="m-writeownertoken" /><code>{"static string WriteOwnerToken(string text)"}</code> | <span className="api-desc">Writes `console_token.txt` through a temp file. Returns `null` once written, otherwise why it couldn't be.</span> |

<details className="api-private">
<summary>15 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-b64" /><code>{"private static string B64(byte[] bytes)"}</code> | <span className="api-desc">Standard base64 with the padding trimmed.</span> |
| <Link id="m-bytestohex" /><code>{"private static string BytesToHex(byte[] bytes)"}</code> | <span className="api-desc">Turns bytes into a lowercase hex string.</span> |
| <Link id="m-check" /><code>{"private static string Check(JwtSecurityToken wrapper, "}<Link to="/mod/tavernlib-api/types/backend-remoteconsole/consoleauth-loginpath">{"ConsoleAuth.LoginPath"}</Link>{" path, string address, ref string tokenId)"}</code> | <span className="api-desc">Returns the reason a console login is refused, or null if it is allowed.</span> |
| <Link id="m-fromb64" /><code>{"private static byte[] FromB64(string text)"}</code> | <span className="api-desc">Reads base64 or base64url, or returns null.</span> |
| <Link id="m-generationof" /><code>{"private static long GenerationOf(JObject claims)"}</code> | <span className="api-desc">Reads the `gen` claim; 0 if absent and -1 if it isn't a number.</span> |
| <Link id="m-hextobytes" /><code>{"private static byte[] HexToBytes(string hex)"}</code> | <span className="api-desc">Reads a hex string into bytes, or returns null.</span> |
| <Link id="m-iscurrentownertoken" /><code>{"private static bool IsCurrentOwnerToken(string raw)"}</code> | <span className="api-desc">True if the text is a validly signed owner token of the current generation.</span> |
| <Link id="m-isloopback" /><code>{"private static bool IsLoopback(string address)"}</code> | <span className="api-desc">True if the address is a loopback address.</span> |
| <Link id="m-loadorcreatesecret" /><code>{"private static byte[] LoadOrCreateSecret()"}</code> | <span className="api-desc">Reads `server_secret.key`, creating it if missing, and retries a few times; returns null if it can't be read.</span> |
| <Link id="m-ownerlocalonly" /><code>{"private static bool OwnerLocalOnly()"}</code> | <span className="api-desc">True if `console_owner_local_only` is set in the server settings.</span> |
| <Link id="m-ownertoken" /><code>{"private static string OwnerToken(byte[] secret, int generation)"}</code> | <span className="api-desc">Builds the signed owner token text for a generation.</span> |
| <Link id="m-policiesof" /><code>{"private static List<string> PoliciesOf(JObject claims)"}</code> | <span className="api-desc">Reads the `Policy` claim into a list, splitting comma separated values.</span> |
| <Link id="m-sign" /><code>{"private static string Sign(string payload, byte[] secret)"}</code> | <span className="api-desc">Signs a payload with HMAC-SHA256 and returns the full token text.</span> |
| <Link id="m-trycreatesecret" /><code>{"private static bool TryCreateSecret(out byte[] secret)"}</code> | <span className="api-desc">Writes a new random 32 byte secret unless the file appeared meanwhile; false if it did.</span> |
| <Link id="m-verify" /><code>{"private static bool Verify(string raw, byte[] secret, out JObject claims)"}</code> | <span className="api-desc">Checks a token's signature in constant time and returns its claims.</span> |

</details>
