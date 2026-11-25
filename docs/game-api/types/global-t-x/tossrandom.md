---
title: "TossRandom"
description: "class TossRandom in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TossRandom

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TossRandom()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-androidparticles" /><code>{"private ParticleSystem androidParticles"}</code> |  |
| <Link id="m-horizontalmaximum" /><code>{"private float horizontalMaximum"}</code> |  |
| <Link id="m-localbasevelocity" /><code>{"private Vector3 localBaseVelocity"}</code> |  |
| <Link id="m-oldmaxangularvelocity" /><code>{"private float oldMaxAngularVelocity"}</code> |  |
| <Link id="m-particles" /><code>{"private ParticleSystem particles"}</code> |  |
| <Link id="m-peakmaximum" /><code>{"private float peakMaximum"}</code> |  |
| <Link id="m-pickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> |  |
| <Link id="m-randomvelocity" /><code>{"private float randomVelocity"}</code> |  |
| <Link id="m-spindelay" /><code>{"private float spinDelay"}</code> |  |
| <Link id="m-spinupboost" /><code>{"private float spinUpBoost"}</code> |  |
| <Link id="m-syncspin" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<Vector3> syncSpin"}</code> |  |
| <Link id="m-targetrigidbody" /><code>{"private Rigidbody targetRigidbody"}</code> |  |
| <Link id="m-tossminimum" /><code>{"private float tossMinimum"}</code> |  |
| <Link id="m-updatetoss" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateToss"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
| <Link id="m-interactionended" /><code>{"private void InteractionEnded("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-interactionstarted" /><code>{"private void InteractionStarted("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-oncollisionenter" /><code>{"private void OnCollisionEnter(Collision collision)"}</code> |  |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> |  |
| <Link id="m-spin" /><code>{"private IEnumerator Spin(Vector3 angularVelocity) (iterator)"}</code> |  |
| <Link id="m-toss" /><code>{"private void Toss("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, Vector3 angularVelocity)"}</code> |  |
| <Link id="m-updatetoss-2" /><code>{"private void UpdateToss()"}</code> |  |
