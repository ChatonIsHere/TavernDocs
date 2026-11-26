---
title: "APIStatusNotification"
description: "A notification list entry for a status message from the Alta API."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# APIStatusNotification

A **class** in `Root.Township`, `Alta.Meta.UI.ServerManagement`.

A notification list entry for a status message from the Alta API. Has no accept or decline buttons.

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Inherits or implements** [`UINotification`](/mod/game-api/types/alta-menus/uinotification), `IEquatable<APIStatusNotification>`
- **Derived types** [`APIStatusNotification`](/mod/game-api/types/alta-menus/apistatusnotification)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"APIStatusNotification("}<Link to="/mod/game-api/types/assembly-api-client/status">{"Status"}</Link>{" status, "}<Link to="/mod/game-api/types/alta-menus/panel">{"Panel"}</Link>{" panel)"}</code> | <span className="api-desc">Creates an `APIStatusNotification` from `status` and `panel`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-status" /><code>{"private readonly "}<Link to="/mod/game-api/types/assembly-api-client/status">{"Status"}</Link>{" status"}</code> | <span className="api-desc">The status this entry shows.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isusingaccept" /><code>{"override bool IsUsingAccept { get; }"}</code> | <span className="api-desc">Always false.</span> |
| <Link id="m-isusingdecline" /><code>{"override bool IsUsingDecline { get; }"}</code> | <span className="api-desc">Always false.</span> |
| <Link id="m-message" /><code>{"override string Message { get; }"}</code> | <span className="api-desc">The status message text.</span> |
| <Link id="m-shortmessage" /><code>{"override string ShortMessage { get; }"}</code> | <span className="api-desc">The status title.</span> |
| <Link id="m-time" /><code>{"override DateTime Time { get; }"}</code> | <span className="api-desc">When the status was last updated.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-equals" /><code>{"override bool Equals(object obj)"}</code> | <span className="api-desc">Two entries are equal if their statuses have the same ID (the typed overload compares the status objects).</span> |
| <Link id="m-equals-2" /><code>{"bool Equals("}<Link to="/mod/game-api/types/alta-menus/apistatusnotification">{"APIStatusNotification"}</Link>{" other)"}</code> | <span className="api-desc">Two entries are equal if their statuses have the same ID (the typed overload compares the status objects).</span> |
| <Link id="m-gethashcode" /><code>{"override int GetHashCode()"}</code> | <span className="api-desc">Hash of the status object.</span> |
