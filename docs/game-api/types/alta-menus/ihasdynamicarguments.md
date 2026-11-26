---
title: "IHasDynamicArguments"
description: "A multi-button menu command whose arguments are filled in at runtime by name, such as the assisted spawn command's prefab and quantity."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IHasDynamicArguments

An **interface** in `Root.Township`, `Alta.Menu`.

A multi-button menu command whose arguments are filled in at runtime by name, such as the assisted spawn command's `prefab` and `quantity`.

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** [`IUsesMultipleButtons`](/game-api/types/alta-menus/iusesmultiplebuttons)
- **Derived types** [`AssistedSpawnCommandDefinition`](/game-api/types/alta-menus/assistedspawncommanddefinition)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-argumentisvalid" /><code>{"bool ArgumentIsValid(string name)"}</code> | Whether the named argument currently has a valid value. |
| <Link id="m-getargument" /><code>{"string GetArgument(string name)"}</code> | Returns the current value of the named argument. |
| <Link id="m-setargument" /><code>{"void SetArgument(string name, string argument)"}</code> | Sets the named argument to a string value. |
