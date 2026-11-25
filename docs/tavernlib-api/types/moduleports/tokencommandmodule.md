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

- **Listed in** [TavernLib.ModulePorts](/tavernlib-api/types/moduleports)
- **Nested types** [`LogLines`](/tavernlib-api/types/moduleports/tokencommandmodule-loglines), [`TokenInfo`](/tavernlib-api/types/moduleports/tokencommandmodule-tokeninfo), [`TokenList`](/tavernlib-api/types/moduleports/tokencommandmodule-tokenlist)
- **Attributes** `ServerOnly`, `Module`
- **Documented in** [TokenCommandModule](/tavernlib-api/types/moduleports/tokencommandmodule), [Console](/tavernlib-api/console#tokencommandmodule), [Internals](/tavernlib-api/internals)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-modulename" /><code>{"const string ModuleName"}</code> | The module's name, `token`. Named tokens can never be given anything under it except `token whoami`. |
| <Link id="m-idalphabet" /><code>{"private const string IdAlphabet"}</code> |  |
| <Link id="m-maxdays" /><code>{"private const int MaxDays"}</code> |  |
| <Link id="m-namemaxlength" /><code>{"private const int NameMaxLength"}</code> |  |
| <Link id="m-ownerid" /><code>{"private const string OwnerId"}</code> |  |
| <Link id="m-presetmaxlength" /><code>{"private const int PresetMaxLength"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-callertokenid" /><code>{"private static string CallerTokenId()"}</code> |  |
| <Link id="m-create" /><code>{"private static string Create(string name, string access, int days = 0, string preset = \"custom\")"}</code> |  |
| <Link id="m-date" /><code>{"private static string Date(DateTime? value, string none)"}</code> |  |
| <Link id="m-edit" /><code>{"private static string Edit(string id, string access, int days = -1, string preset = null)"}</code> |  |
| <Link id="m-info" /><code>{"private static "}<Link to="/tavernlib-api/types/moduleports/tokencommandmodule-tokeninfo">{"TokenCommandModule.TokenInfo"}</Link>{" Info("}<Link to="/tavernlib-api/types/backend-remoteconsole/consoletoken">{"ConsoleToken"}</Link>{" token)"}</code> |  |
| <Link id="m-knownpaths" /><code>{"private static HashSet<string> KnownPaths()"}</code> |  |
| <Link id="m-list" /><code>{"private static object List()"}</code> |  |
| <Link id="m-log" /><code>{"private static object Log(string id = \"\", int count = 50)"}</code> |  |
| <Link id="m-newid" /><code>{"private static string NewId(List<"}<Link to="/tavernlib-api/types/backend-remoteconsole/consoletoken">{"ConsoleToken"}</Link>{"> existing)"}</code> |  |
| <Link id="m-owneronly" /><code>{"private static string OwnerOnly()"}</code> |  |
| <Link id="m-parseaccess" /><code>{"private static string ParseAccess(string access, string preset, out string label, out List<string> paths)"}</code> |  |
| <Link id="m-revoke" /><code>{"private static string Revoke(string id)"}</code> |  |
| <Link id="m-rotate" /><code>{"private static string Rotate(string id)"}</code> |  |
| <Link id="m-rotateowner" /><code>{"private static string RotateOwner()"}</code> |  |
| <Link id="m-show" /><code>{"private static string Show(string id)"}</code> |  |
| <Link id="m-store" /><code>{"private static string Store(Func<"}<Link to="/tavernlib-api/types/backend-remoteconsole/consoletokenlist">{"ConsoleTokenList"}</Link>{", bool> change)"}</code> |  |
| <Link id="m-validname" /><code>{"private static bool ValidName(string name, int maxLength)"}</code> |  |
| <Link id="m-whoami" /><code>{"private static object WhoAmI()"}</code> |  |
