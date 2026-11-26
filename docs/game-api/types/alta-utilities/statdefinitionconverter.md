---
title: "StatDefinitionConverter"
description: "Type converter that turns a stat name or hash string into a StatDefinition."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StatDefinitionConverter

A **class** in `Root.Township`, `Alta`.

Type converter that turns a stat name or hash string into a `StatDefinition`.

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Inherits or implements** [`HashedGeneralValueConverter<StatDefinition>`](/game-api/types/assembly-other/hashedgeneralvalueconverter-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StatDefinitionConverter()"}</code> | Creates a `StatDefinitionConverter` with default values. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getfromstring" /><code>{"protected override "}<Link to="/game-api/types/assembly-other/hashedgeneralvalue-t">{"HashedGeneralValue"}</Link>{"<"}<Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{"> GetFromString(string input)"}</code> | Finds the stat whose name matches the input, ignoring case. |
