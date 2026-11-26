---
title: "ScrapperArgumentAttribute"
description: "Marks a scrapper behaviour with the component type and fields it sets, so the scrapper tool can find the behaviour for a given set of changes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ScrapperArgumentAttribute

A **class** in `Root.Township`, `Alta.Scrapper`.

Marks a scrapper behaviour with the component type and fields it sets, so the scrapper tool can find the behaviour for a given set of changes. Can be used more than once per class.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** `Attribute`
- **Attributes** `Usage`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ScrapperArgumentAttribute(Type type, "}<Link to="/game-api/types/alta-crafting/applicationtype">{"ApplicationType"}</Link>{" applicationType, params string[] fields)"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-applicationtype" /><code><Link to="/game-api/types/alta-crafting/applicationtype">{"ApplicationType"}</Link>{" "}<Link to="/game-api/types/alta-crafting/applicationtype">{"ApplicationType"}</Link>{" { get; private set; }"}</code> | How the values are applied, such as one target and value or many targets with one value. |
| <Link id="m-fields" /><code>{"string[] Fields { get; private set; }"}</code> | Names of the fields or properties on the component. |
| <Link id="m-type" /><code>{"Type Type { get; private set; }"}</code> | The component type the fields belong to. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-equals" /><code>{"override bool Equals(object obj)"}</code> | Equal if the type, application type and field list match. |
| <Link id="m-find" /><code>{"static Type Find(ICollection<"}<Link to="/game-api/types/alta-crafting/scrapperargumentattribute">{"ScrapperArgumentAttribute"}</Link>{"> desiredAttributes)"}</code> | Returns the type in this assembly whose scrapper attributes match the given set exactly, or null. |
| <Link id="m-gethashcode" /><code>{"override int GetHashCode()"}</code> | Hash from the type and application type. |
