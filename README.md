# TP TypeScript Octogone

A TypeScript-based combat simulation project where characters with different classes (Warrior, Mage) battle each other in a turn-based system. The project demonstrates the usage of Object-Oriented Programming (OOP) principles, inheritance, and TypeScript features.

## Features

- **Character Classes**: Different classes like `Warrior` and `Mage` with unique attributes.
- **Turn-Based Combat**: A battle loop where characters take turns attacking each other.
- **Attack Order**: Logic to determine which character attacks first based on stats (e.g., speed).
- **Item System**: Characters can equip items (e.g., weapons, power-ups) that modify their stats.
- **Console Output**: Real-time battle log displayed in the console.

## Project Structure

```
src/
├── constants/       # Game constants (e.g., item definitions)
├── helpers/         # Utility functions (e.g., attack order logic)
├── models/          # Character class definitions (Warrior, Mage, etc.)
├── types/           # TypeScript type definitions
└── index.ts         # Entry point and main battle loop
```

## Getting Started

### Prerequisites

- **Node.js**: Ensure you have Node.js installed.
- **TypeScript**: The project uses TypeScript.

### Installation

1. **Navigate to the project directory**:
   ```bash
   cd TP_TypeScript_octogone
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

### Running the Battle

To start the simulation, run the following command:

```bash
npm run dev
```

or directly using `ts-node`:

```bash
npx ts-node src/index.ts
```

## Example Usage

The default simulation (`src/index.ts`) sets up a fight between:
- **Booba (Warrior)** equipped with an *Épée de Brodard*.
- **Kaaris (Mage)** equipped with a *Mise à jour Windows*.

The console will output the progress of the fight until a winner is declared.

## Tech Stack

- **Language**: TypeScript
- **Runtime**: Node.js
- **Tooling**: `ts-node` for execution.
