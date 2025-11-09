# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Tauri v2 desktop application with a React + TypeScript frontend. Tauri is a framework for building desktop applications using web technologies for the frontend and Rust for the backend.

## Architecture

**Dual Runtime Model:**
- **Frontend (React + Vite)**: Located in `src/`, runs in a WebView. Handles UI rendering and user interactions.
- **Backend (Rust)**: Located in `src-tauri/`, runs as a native process. Handles system-level operations and provides commands to the frontend.

**Communication Pattern:**
- Frontend calls Rust functions using `invoke()` from `@tauri-apps/api/core`
- Rust functions are exposed via `#[tauri::command]` macro
- Commands are registered in `src-tauri/src/lib.rs` via `invoke_handler`
- Example: `App.tsx:12` calls `greet` command defined in `src-tauri/src/lib.rs:3`

**Key Files:**
- `src-tauri/src/lib.rs`: Main Tauri application setup and command handlers
- `src-tauri/src/main.rs`: Entry point (just calls `lib.rs`)
- `src-tauri/Cargo.toml`: Rust dependencies and build configuration
- `src-tauri/tauri.conf.json`: Tauri app configuration (window settings, dev server, build commands)
- `src/App.tsx`: Main React component
- `package.json`: Frontend dependencies and npm scripts
- `vite.config.ts`: Vite dev server configuration (port 1420 for Tauri)

**Library Structure:**
- The Rust project uses a library crate (`hello_tauri_lib`) with multiple output types (`staticlib`, `cdylib`, `rlib`) to support Tauri's mobile and desktop targets
- The binary just calls the library's `run()` function

## Development Commands

### Starting Development
```bash
pnpm tauri dev
```
This runs both the Vite dev server and the Tauri app. The app will hot-reload on frontend changes and restart on Rust changes.

### Building for Production
```bash
# Frontend build (TypeScript compilation + Vite build)
pnpm build

# Full Tauri build (creates installer/bundles)
pnpm tauri build

# Build for specific target
pnpm tauri build --target aarch64-apple-darwin
```

### Frontend Only
```bash
# Run Vite dev server (without Tauri)
pnpm dev

# TypeScript type checking
tsc --noEmit
```

### Rust Development
```bash
# Navigate to Rust directory
cd src-tauri

# Build Rust code
cargo build

# Run Rust tests
cargo test

# Check for errors without building
cargo check
```

## Adding New Tauri Commands

1. Define command in `src-tauri/src/lib.rs`:
   ```rust
   #[tauri::command]
   fn my_command(param: String) -> Result<String, String> {
       // implementation
   }
   ```

2. Register in `invoke_handler`:
   ```rust
   .invoke_handler(tauri::generate_handler![greet, my_command])
   ```

3. Call from frontend:
   ```typescript
   import { invoke } from "@tauri-apps/api/core";
   const result = await invoke("my_command", { param: "value" });
   ```

## CI/CD

GitHub Actions workflow (`.github/workflows/build.yml`) builds for:
- macOS (Apple Silicon: aarch64-apple-darwin)
- Windows (x86_64-pc-windows-msvc)
- Linux builds are commented out but available

The workflow uses pnpm for package management and produces platform-specific installers (DMG, MSI, NSIS, AppImage).

## Package Manager

This project uses **pnpm** (v9). Use `pnpm install` for dependencies, not npm or yarn.
- always use pnpm to install or execute npm packages