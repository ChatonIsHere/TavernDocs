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
| <Link id="m-modulename" /><code>{"const string ModuleName"}</code> | <span className="api-desc">The module's name, `token`. Named tokens can never be given anything under it except `token whoami`.</span> |

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-idalphabet" /><code>{"private const string IdAlphabet"}</code> | <span className="api-desc">Characters a token id is made from; it has no `o`, so no id can be `owner`.</span> |
| <Link id="m-maxdays" /><code>{"private const int MaxDays"}</code> | <span className="api-desc">Longest allowed token lifetime, 3650 days.</span> |
| <Link id="m-namemaxlength" /><code>{"private const int NameMaxLength"}</code> | <span className="api-desc">Longest allowed token name, 32 characters.</span> |
| <Link id="m-ownerid" /><code>{"private const string OwnerId"}</code> | <span className="api-desc">The id `owner`, which names the owner token in `token rotate`.</span> |
| <Link id="m-presetmaxlength" /><code>{"private const int PresetMaxLength"}</code> | <span className="api-desc">Longest allowed preset label, 16 characters.</span> |

</details>

## Methods

<details className="api-private">
<summary>18 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-callertokenid" /><code>{"private static string CallerTokenId()"}</code> | <span className="api-desc">The named token id the calling console logged in with, or null for the owner.</span> |
| <Link id="m-create" /><code>{"private static string Create(string name, string access, int days = 0, string preset = \"custom\")"}</code> | <span className="api-desc">`token create`: owner token only, makes a named token with a name, access list, lifetime and preset, and shows its text.</span> |
| <Link id="m-date" /><code>{"private static string Date(DateTime? value, string none)"}</code> | <span className="api-desc">Formats a date as `yyyy-MM-dd HH:mm`, or returns the given text when there is none.</span> |
| <Link id="m-edit" /><code>{"private static string Edit(string id, string access, int days = -1, string preset = null)"}</code> | <span className="api-desc">`token edit`: owner token only, changes a named token's access, expiry or preset.</span> |
| <Link id="m-info" /><code>{"private static "}<Link to="/mod/tavernlib-api/types/moduleports/tokencommandmodule-tokeninfo">{"TokenCommandModule.TokenInfo"}</Link>{" Info("}<Link to="/mod/tavernlib-api/types/backend-remoteconsole/consoletoken">{"ConsoleToken"}</Link>{" token)"}</code> | <span className="api-desc">Builds the `TokenInfo` shown for a token.</span> |
| <Link id="m-knownpaths" /><code>{"private static HashSet<string> KnownPaths()"}</code> | <span className="api-desc">Collects the paths of every module and command this server has.</span> |
| <Link id="m-list" /><code>{"private static object List()"}</code> | <span className="api-desc">`token list`: owner token only, lists every named token.</span> |
| <Link id="m-log" /><code>{"private static object Log(string id = \"\", int count = 50)"}</code> | <span className="api-desc">`token log`: owner token only, returns the newest console log lines, for one token or all, up to 500.</span> |
| <Link id="m-newid" /><code>{"private static string NewId(List<"}<Link to="/mod/tavernlib-api/types/backend-remoteconsole/consoletoken">{"ConsoleToken"}</Link>{"> existing)"}</code> | <span className="api-desc">Makes a random 8 character token id not used by an existing token.</span> |
| <Link id="m-owneronly" /><code>{"private static string OwnerOnly()"}</code> | <span className="api-desc">Returns a refusal text if the caller is a named token, else null.</span> |
| <Link id="m-parseaccess" /><code>{"private static string ParseAccess(string access, string preset, out string label, out List<string> paths)"}</code> | <span className="api-desc">Checks an access string and preset and returns an error text, or null with the preset label and path list filled in.</span> |
| <Link id="m-revoke" /><code>{"private static string Revoke(string id)"}</code> | <span className="api-desc">`token revoke`: owner token only, stops a named token for good and closes its sessions.</span> |
| <Link id="m-rotate" /><code>{"private static string Rotate(string id)"}</code> | <span className="api-desc">`token rotate`: owner token only, gives a named token or the owner token new text and closes its sessions.</span> |
| <Link id="m-rotateowner" /><code>{"private static string RotateOwner()"}</code> | <span className="api-desc">Rotates the owner token, writes it to `console_token.txt` and closes the other owner sessions.</span> |
| <Link id="m-show" /><code>{"private static string Show(string id)"}</code> | <span className="api-desc">`token show`: owner token only, shows a named token's text again.</span> |
| <Link id="m-store" /><code>{"private static string Store(Func<"}<Link to="/mod/tavernlib-api/types/backend-remoteconsole/consoletokenlist">{"ConsoleTokenList"}</Link>{", bool> change)"}</code> | <span className="api-desc">Runs a change to `console_tokens.json` and returns a refusal text if it can't be read or written, else null.</span> |
| <Link id="m-validname" /><code>{"private static bool ValidName(string name, int maxLength)"}</code> | <span className="api-desc">True for a non-empty name of letters, digits, spaces, hyphens and underscores within the length limit.</span> |
| <Link id="m-whoami" /><code>{"private static object WhoAmI()"}</code> | <span className="api-desc">`token whoami`: returns which token this console logged in with and what it may run.</span> |

</details>
