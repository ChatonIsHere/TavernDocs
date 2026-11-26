---
title: "TokenCommandModule"
description: "TavernLib's token console module for named console tokens: whoami, list, create, edit, revoke, rotate, show and log."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TokenCommandModule

A **static class** in `TavernLib`, `TavernLib.ModulePorts`.

TavernLib's `token` console module for named console tokens: `whoami`, `list`, `create`, `edit`, `revoke`, `rotate`, `show` and `log`. Server; only the owner token manages tokens.

- **Listed in** [TavernLib.ModulePorts](/mod/tavernlib-api/types/moduleports)
- **Nested types** [`LogLines`](/mod/tavernlib-api/types/moduleports/tokencommandmodule-loglines), [`TokenInfo`](/mod/tavernlib-api/types/moduleports/tokencommandmodule-tokeninfo), [`TokenList`](/mod/tavernlib-api/types/moduleports/tokencommandmodule-tokenlist)
- **Attributes** `ServerOnly`, `Module`
- **Documented in** [TokenCommandModule](/mod/tavernlib-api/types/moduleports/tokencommandmodule), [Console](/mod/tavernlib-api/console#tokencommandmodule), [Internals](/mod/tavernlib-api/internals)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-modulename" /><code>{"const string ModuleName"}</code> | The module's name, `token`. Named tokens can never be given anything under it except `token whoami`. |

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-idalphabet" /><code>{"private const string IdAlphabet"}</code> | Characters a token id is made from; it has no `o`, so no id can be `owner`. |
| <Link id="m-maxdays" /><code>{"private const int MaxDays"}</code> | Longest allowed token lifetime, 3650 days. |
| <Link id="m-namemaxlength" /><code>{"private const int NameMaxLength"}</code> | Longest allowed token name, 32 characters. |
| <Link id="m-ownerid" /><code>{"private const string OwnerId"}</code> | The id `owner`, which names the owner token in `token rotate`. |
| <Link id="m-presetmaxlength" /><code>{"private const int PresetMaxLength"}</code> | Longest allowed preset label, 16 characters. |

</details>

## Methods

<details>
<summary>18 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-callertokenid" /><code>{"private static string CallerTokenId()"}</code> | The named token id the calling console logged in with, or null for the owner. |
| <Link id="m-create" /><code>{"private static string Create(string name, string access, int days = 0, string preset = \"custom\")"}</code> | `token create`: owner token only, makes a named token with a name, access list, lifetime and preset, and shows its text. |
| <Link id="m-date" /><code>{"private static string Date(DateTime? value, string none)"}</code> | Formats a date as `yyyy-MM-dd HH:mm`, or returns the given text when there is none. |
| <Link id="m-edit" /><code>{"private static string Edit(string id, string access, int days = -1, string preset = null)"}</code> | `token edit`: owner token only, changes a named token's access, expiry or preset. |
| <Link id="m-info" /><code>{"private static "}<Link to="/mod/tavernlib-api/types/moduleports/tokencommandmodule-tokeninfo">{"TokenCommandModule.TokenInfo"}</Link>{" Info("}<Link to="/mod/tavernlib-api/types/backend-remoteconsole/consoletoken">{"ConsoleToken"}</Link>{" token)"}</code> | Builds the `TokenInfo` shown for a token. |
| <Link id="m-knownpaths" /><code>{"private static HashSet<string> KnownPaths()"}</code> | Collects the paths of every module and command this server has. |
| <Link id="m-list" /><code>{"private static object List()"}</code> | `token list`: owner token only, lists every named token. |
| <Link id="m-log" /><code>{"private static object Log(string id = \"\", int count = 50)"}</code> | `token log`: owner token only, returns the newest console log lines, for one token or all, up to 500. |
| <Link id="m-newid" /><code>{"private static string NewId(List<"}<Link to="/mod/tavernlib-api/types/backend-remoteconsole/consoletoken">{"ConsoleToken"}</Link>{"> existing)"}</code> | Makes a random 8 character token id not used by an existing token. |
| <Link id="m-owneronly" /><code>{"private static string OwnerOnly()"}</code> | Returns a refusal text if the caller is a named token, else null. |
| <Link id="m-parseaccess" /><code>{"private static string ParseAccess(string access, string preset, out string label, out List<string> paths)"}</code> | Checks an access string and preset and returns an error text, or null with the preset label and path list filled in. |
| <Link id="m-revoke" /><code>{"private static string Revoke(string id)"}</code> | `token revoke`: owner token only, stops a named token for good and closes its sessions. |
| <Link id="m-rotate" /><code>{"private static string Rotate(string id)"}</code> | `token rotate`: owner token only, gives a named token or the owner token new text and closes its sessions. |
| <Link id="m-rotateowner" /><code>{"private static string RotateOwner()"}</code> | Rotates the owner token, writes it to `console_token.txt` and closes the other owner sessions. |
| <Link id="m-show" /><code>{"private static string Show(string id)"}</code> | `token show`: owner token only, shows a named token's text again. |
| <Link id="m-store" /><code>{"private static string Store(Func<"}<Link to="/mod/tavernlib-api/types/backend-remoteconsole/consoletokenlist">{"ConsoleTokenList"}</Link>{", bool> change)"}</code> | Runs a change to `console_tokens.json` and returns a refusal text if it can't be read or written, else null. |
| <Link id="m-validname" /><code>{"private static bool ValidName(string name, int maxLength)"}</code> | True for a non-empty name of letters, digits, spaces, hyphens and underscores within the length limit. |
| <Link id="m-whoami" /><code>{"private static object WhoAmI()"}</code> | `token whoami`: returns which token this console logged in with and what it may run. |

</details>
