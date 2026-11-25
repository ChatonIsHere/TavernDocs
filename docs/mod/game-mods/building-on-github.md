---
title: Building on GitHub
description: Build your mod with GitHub Actions against att-stubs and publish a release on every push.
---

# Building on GitHub

GitHub Actions can build your mod against [att-stubs](game-files-or-stubs.md#att-stubs) and attach the DLL to a release. That release link is what you [submit to TavernMods](../publishing/submitting.md).

## The workflow

Make `.github/workflows/build.yml` in your mod's repo:

```yaml
name: Build

on:
  push:
    paths-ignore: ['**.md']
  pull_request:
  workflow_dispatch:

# One release at a time, so two pushes can't take the same version.
concurrency: build-${{ github.ref }}

jobs:
  build:
    runs-on: windows-latest
    permissions:
      contents: write
    steps:
      - uses: actions/checkout@v4
      - uses: actions/checkout@v4
        with:
          repository: ChatonIsHere/att-stubs
          # ref: full    # if you need assemblies main doesn't have
          path: att-stubs
      - shell: bash
        run: dotnet build -c Release "-p:GameDir=$GITHUB_WORKSPACE/att-stubs"
      - uses: actions/upload-artifact@v4
        with:
          name: HelloTavern
          path: bin/Release/HelloTavern.dll
```

Every push and pull request now builds your mod. The DLL is attached to the run under **Artifacts**, so you can download and test it.

## Releasing

Releases on TavernMods need a GitHub release with your DLL attached, at a tag. You can make one by hand on GitHub (**Releases**, **Draft a new release**, upload the DLL), or let the workflow do it.

To release when you push a version tag, add this step at the end:

```yaml
      - if: startsWith(github.ref, 'refs/tags/v')
        shell: bash
        env:
          GH_TOKEN: ${{ github.token }}
        run: gh release create "$GITHUB_REF_NAME" bin/Release/HelloTavern.dll --title "HelloTavern ${GITHUB_REF_NAME#v}" --generate-notes
```

and run the workflow on tags too:

```yaml
on:
  push:
    tags: ['v*']
    paths-ignore: ['**.md']
```

Then release with:

```powershell
git tag v1.0.0
git push origin v1.0.0
```

Pass the version to the build so the DLL matches the tag: `-p:Version=${GITHUB_REF_NAME#v}`. For `MelonInfo` to pick it up too, have the `.csproj` write the version into a constant. [Canary's project](https://github.com/ChatonIsHere/Canary/blob/main/Canary.csproj) has a `WriteVersion` target that does this, and its workflow releases every push to `main` with a date-based version instead of tags.

:::warning[Never replace a released file]

TavernMods records the hash of every file. If you change a file after it's published, installs of it fail. To fix a build, make a new release with a higher version.

:::

## Depending on TavernLib

TavernLib isn't in att-stubs. If your mod references it, download it in the workflow before building:

```yaml
      - shell: bash
        run: |
          mkdir -p att-stubs/Plugins
          curl -fL -o att-stubs/Plugins/TavernLib.dll https://github.com/ModdingTavern/TavernLib/releases/latest/download/TavernLib.dll
```

and reference it from `$(GameDir)\Plugins\TavernLib.dll`. See [What TavernLib does](../tavernlib/what-tavernlib-does.md#using-it-from-your-mod).
