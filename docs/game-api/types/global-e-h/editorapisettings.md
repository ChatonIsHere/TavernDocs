---
title: "EditorApiSettings"
description: "Global settings for how the editor talks to the web API: offline mode, which endpoint to use, and an optional credentials override file."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EditorApiSettings

A **class** in `Root.Township`, no namespace.

Global settings for how the editor talks to the web API: offline mode, which endpoint to use, and an optional credentials override file. Read through `GlobalSettings<EditorApiSettings>.Instance`.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`GlobalSettings<EditorApiSettings>`](/game-api/types/assembly-other/globalsettings-t)
- **Derived types** [`EditorApiSettings`](/game-api/types/global-e-h/editorapisettings)
- **Attributes** `GlobalSettings`, `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EditorApiSettings()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-credentialoverridefile" /><code>{"private TextAsset credentialOverrideFile"}</code> | Text asset holding the override credentials JSON. |
| <Link id="m-customendpoint" /><code>{"private string customEndpoint"}</code> | Backing field for `CustomEndpoint`. |
| <Link id="m-defaulteditoroverridecredentialsfilename" /><code>{"private const string DefaultEditorOverrideCredentialsFilename"}</code> | Default file name for the override credentials, `MyEditorCredentials.json`. |
| <Link id="m-defaulteditoroverridecredentialspath" /><code>{"private const string DefaultEditorOverrideCredentialsPath"}</code> | Default asset folder for the override credentials file. |
| <Link id="m-endpointineditor" /><code>{"private "}<Link to="/game-api/types/global-a-b/apiendpoint">{"ApiEndpoint"}</Link>{" endpointInEditor"}</code> | Backing field for `EndpointInEditor`. |
| <Link id="m-isignoringinternetoffline" /><code>{"private bool isIgnoringInternetOffline"}</code> | Backing field for `IsIgnoringInternetOffline`. |
| <Link id="m-isoffline" /><code>{"private bool isOffline"}</code> | Backing field for `IsOffline`. |
| <Link id="m-isoverridingcredentialineditor" /><code>{"private bool isOverridingCredentialInEditor"}</code> | Backing field for `IsOverridingCredentialInEditor`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-customendpoint-2" /><code>{"string CustomEndpoint { get; }"}</code> | URL used when the editor endpoint is set to custom. |
| <Link id="m-endpointineditor-2" /><code><Link to="/game-api/types/global-a-b/apiendpoint">{"ApiEndpoint"}</Link>{" EndpointInEditor { get; }"}</code> | Which API endpoint the editor uses. |
| <Link id="m-isignoringinternetoffline-2" /><code>{"bool IsIgnoringInternetOffline { get; }"}</code> | Whether the editor ignores the internet being offline. |
| <Link id="m-isoffline-2" /><code>{"bool IsOffline { get; }"}</code> | Whether the editor runs without the API. |
| <Link id="m-isoverridingcredentialineditor-2" /><code>{"static bool IsOverridingCredentialInEditor { get; }"}</code> | True only in the editor when the override credentials option is on. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getoverridecredentials" /><code>{"static "}<Link to="/game-api/types/global-e-h/editoroverridecredentials">{"EditorOverrideCredentials"}</Link>{" GetOverrideCredentials()"}</code> | Parses the override credentials JSON file, throwing if there is none. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-createdefaultcredentialoverridefile" /><code>{"private static void CreateDefaultCredentialOverrideFile()"}</code> | Empty in this build, so `GetOverrideCredentials` throws when no file is set. |

</details>
