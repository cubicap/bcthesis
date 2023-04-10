# Jaculus: Approachable Programming of Embedded Devices via Javascript

## Motivation
- problems of programming using C/C++
- event-centered nature of many embedded systems
- use cases

## Proposed solution
- use Javascript/Typescript
- QuickJS Javascript engine

## Approach
- develop multiple standalone libraries/tools which form a complete solution for programming embedded devices using Javascript
- Jaculus-machine - standalone, embeddable, C++ centered JavaScript runtime based on QuickJS
- Jaculus-link - standalone communication library for multiplexing multiple channels on a single stream connection
- Jaculus - JavaScript runtime for embedded devices
- Jaculus-tools - tools for controlling and monitoring Jaculus devices
- support for ESP32, ESP32-S3 boards


## Jaculus-machine

### Features
- minimal feature set, easy extensibility
- event loop is available in both C++ and Javascript
- conversion between C++ and Javascript types
- wrapper API for C++ classes

### Architecture
- *Machine* is defined using stack inheritance from *MachineBase* and *Feature* classes
- features provide export functionality to JavaScript
- lower-level features vs. higher-level features

### Implementation
- ISO C++ 20
- EventLoop, EventQueue
- single context

### Usage
- JS value wrapping, conversion
- class wrapping
- function wrapping
- exceptions

## Jaculus-link

### Features
- multiplexing multiple channels on a single stream connection
- routing multiple channelized connections to a single consumer

### Architecture
- *Mux* - multiplexing multiple channels on a single stream connection
- *Router* - routing multiple channelized connections to a single consumer
- *Consumer* - interface for receiving data from a channel

### Implementation
- ISO C++ 20
- no connection bindings

### Usage
- defining a Stream
- configuring Mux
- configuring Router
- creating Consumer


## Jaculus

### Features
- Jaculus-machine runtime
- communication via Jaculus-link
- control protocol for controlling and monitoring Jaculus-machine runtime
- uploader protocol for uploading code/data to Jaculus device

### Architecture
- *Controller* - entry point for defining a Jaculus device and service for controlling it
- *Uploader* - service for uploading code/data to Jaculus device
- *Machine* - Jaculus-machine runtime
- central locking mechanism with a timeout to prevent multiple clients from accessing the device at the same time

### Implementation
- ISO C++ 20
- Uploader, Controller protocols

### Usage
- defining a Jaculus device
- controlling a Jaculus device


## Jaculus-tools

### Features
- access to Jaculus devices via Uploader and Controller protocols
- command-line tool
- Node.js library
- transpile TypeScript code

### Implementation
- TypeScript
- access to Jaculus device services via JacDevice class

### Usage
- command-line tool
- Node.js library


## Pitfalls
- unhandled promise rejections not working - QuickJS bug
- single context - more difficult to implement features like REPL
- no debugger - QuickJS does not support debugging


## Comparison with existing solutions
- Minimum C/C++ (e.g. ESP-IDF)
- Arduino (C/C++)
- NodeMCU (Lua)
- CircuitPython (Python)
- Espruino (Javascript)

- performance
- memory usage
- extensibility
- usability
- features


## Future work
- Web IDE
- REPL
- debugger?
- add more features
- support more platforms (e.g. STM32, RPi)
