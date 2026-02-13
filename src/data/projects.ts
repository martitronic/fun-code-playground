export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  language: string;
  code: string;
  emoji: string;
  pinned?: boolean;
}

export const categories = [
  { name: "Games", emoji: "🎮", count: 3 },
  { name: "Creative Coding", emoji: "🎨", count: 3 },
  { name: "Utilities", emoji: "🔧", count: 3 },
  { name: "Animations", emoji: "✨", count: 2 },
  { name: "Data Fun", emoji: "📊", count: 2 },
];

export const languages = ["JavaScript", "Python", "C++", "HTML/CSS"];

export const projects: Project[] = [
  {
    id: "snake-game",
    title: "Snake Game",
    description: "Classic snake game with keyboard controls and score tracking",
    category: "Games",
    language: "JavaScript",
    emoji: "🐍",
    pinned: true,
    code: `const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
let snake = [{x: 10, y: 10}];
let food = {x: 15, y: 15};
let dir = {x: 1, y: 0};
let score = 0;

function gameLoop() {
  const head = {
    x: snake[0].x + dir.x,
    y: snake[0].y + dir.y
  };
  snake.unshift(head);
  
  if (head.x === food.x && head.y === food.y) {
    score += 10;
    food = {
      x: Math.floor(Math.random() * 20),
      y: Math.floor(Math.random() * 20)
    };
  } else {
    snake.pop();
  }
  
  draw();
}

setInterval(gameLoop, 150);`,
  },
  {
    id: "color-palette",
    title: "Random Color Palette Generator",
    description: "Generates beautiful random color palettes with hex codes",
    category: "Creative Coding",
    language: "Python",
    emoji: "🎨",
    pinned: true,
    code: `import random

def generate_palette(n=5):
    palette = []
    for _ in range(n):
        color = "#{:06x}".format(
            random.randint(0, 0xFFFFFF)
        )
        palette.append(color)
    return palette

def display_palette(colors):
    for i, color in enumerate(colors):
        print(f"  Color {i+1}: {color}")
    print()

if __name__ == "__main__":
    print("🎨 Random Color Palette")
    print("-" * 25)
    colors = generate_palette()
    display_palette(colors)`,
  },
  {
    id: "ascii-spinner",
    title: "ASCII Art Spinner",
    description: "Terminal-based loading spinner with multiple animation styles",
    category: "Animations",
    language: "Python",
    emoji: "🌀",
    code: `import time
import sys

def spinner(duration=5):
    frames = ["⠋","⠙","⠹","⠸","⠼","⠴","⠦","⠧","⠇","⠏"]
    end_time = time.time() + duration
    i = 0
    
    while time.time() < end_time:
        sys.stdout.write(f"\\r{frames[i]} Loading...")
        sys.stdout.flush()
        time.sleep(0.1)
        i = (i + 1) % len(frames)
    
    sys.stdout.write("\\r✓ Done!        \\n")

spinner()`,
  },
  {
    id: "dice-roller",
    title: "Dice Roller Simulator",
    description: "Roll any number of dice with customizable sides",
    category: "Games",
    language: "JavaScript",
    emoji: "🎲",
    code: `function rollDice(count = 2, sides = 6) {
  const rolls = [];
  for (let i = 0; i < count; i++) {
    rolls.push(
      Math.floor(Math.random() * sides) + 1
    );
  }
  return {
    rolls,
    total: rolls.reduce((a, b) => a + b, 0),
    highest: Math.max(...rolls),
    lowest: Math.min(...rolls)
  };
}

// Roll 3 six-sided dice
const result = rollDice(3, 6);
console.log("🎲 Rolls:", result.rolls);
console.log("📊 Total:", result.total);
console.log("⬆️  High:", result.highest);
console.log("⬇️  Low:", result.lowest);`,
  },
  {
    id: "sorting-visualizer",
    title: "Sorting Algorithm Visualizer",
    description: "Visual bubble sort with step-by-step array state logging",
    category: "Data Fun",
    language: "JavaScript",
    emoji: "📊",
    pinned: true,
    code: `function bubbleSort(arr) {
  const steps = [];
  const a = [...arr];
  
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length - i - 1; j++) {
      if (a[j] > a[j + 1]) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
        steps.push([...a]);
      }
    }
  }
  return { sorted: a, steps };
}

const data = [64, 34, 25, 12, 22, 11, 90];
console.log("Input:", data);

const { sorted, steps } = bubbleSort(data);
steps.forEach((step, i) => {
  console.log(\`Step \${i + 1}:\`, step);
});
console.log("Sorted:", sorted);`,
  },
  {
    id: "caesar-cipher",
    title: "Caesar Cipher Encoder/Decoder",
    description: "Encrypt and decrypt messages with a shift cipher",
    category: "Utilities",
    language: "Python",
    emoji: "🔤",
    code: `def caesar(text, shift, decrypt=False):
    if decrypt:
        shift = -shift
    result = ""
    for char in text:
        if char.isalpha():
            base = ord('A') if char.isupper() else ord('a')
            shifted = (ord(char) - base + shift) % 26
            result += chr(base + shifted)
        else:
            result += char
    return result

message = "Hello World"
shift = 3

encrypted = caesar(message, shift)
print(f"🔒 Encrypted: {encrypted}")

decrypted = caesar(encrypted, shift, decrypt=True)
print(f"🔓 Decrypted: {decrypted}")`,
  },
  {
    id: "tone-generator",
    title: "Tone Generator",
    description: "Generate audio tones at any frequency using the Web Audio API",
    category: "Creative Coding",
    language: "JavaScript",
    emoji: "🎵",
    code: `function playTone(freq = 440, duration = 1) {
  const ctx = new AudioContext();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = "sine";
  osc.frequency.value = freq;
  gain.gain.value = 0.3;

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start();
  gain.gain.exponentialRampToValueAtTime(
    0.001, ctx.currentTime + duration
  );
  osc.stop(ctx.currentTime + duration);
}

// Play a C major chord
playTone(261.63, 2); // C4
playTone(329.63, 2); // E4
playTone(392.00, 2); // G4`,
  },
  {
    id: "rock-paper-scissors",
    title: "Rock Paper Scissors",
    description: "Classic RPS game with computer opponent and win tracking",
    category: "Games",
    language: "C++",
    emoji: "🕹️",
    code: `#include <iostream>
#include <cstdlib>
#include <ctime>
using namespace std;

int main() {
    srand(time(0));
    string choices[] = {"Rock","Paper","Scissors"};
    int wins = 0, losses = 0;

    for (int i = 0; i < 5; i++) {
        int player = rand() % 3;
        int cpu = rand() % 3;
        
        cout << "You: " << choices[player] 
             << " vs CPU: " << choices[cpu];
        
        if (player == cpu) cout << " → Draw\\n";
        else if ((player+1)%3 == cpu) {
            cout << " → You lose\\n";
            losses++;
        } else {
            cout << " → You win!\\n";
            wins++;
        }
    }
    cout << "\\nScore: " << wins << "W-" 
         << losses << "L\\n";
    return 0;
}`,
  },
  {
    id: "css-gradient",
    title: "CSS Gradient Generator",
    description: "Generate random beautiful CSS gradient code snippets",
    category: "Creative Coding",
    language: "HTML/CSS",
    emoji: "🌈",
    code: `<!DOCTYPE html>
<style>
  .gradient-box {
    width: 300px;
    height: 200px;
    border-radius: 16px;
    background: linear-gradient(
      135deg,
      #667eea 0%,
      #764ba2 50%,
      #f093fb 100%
    );
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-family: sans-serif;
    font-size: 1.2em;
    text-shadow: 0 2px 4px rgba(0,0,0,0.3);
  }
</style>

<div class="gradient-box">
  ✨ Beautiful Gradient
</div>`,
  },
  {
    id: "quote-generator",
    title: "Random Quote Generator",
    description: "Display random inspirational quotes with author attribution",
    category: "Utilities",
    language: "JavaScript",
    emoji: "💬",
    code: `const quotes = [
  { text: "Code is poetry.", author: "WordPress" },
  { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
  { text: "Talk is cheap. Show me the code.", author: "Linus Torvalds" },
  { text: "Any fool can write code that a computer can understand.", author: "Martin Fowler" },
  { text: "Programming isn't about what you know; it's about what you can figure out.", author: "Chris Pine" },
];

function getRandomQuote() {
  const idx = Math.floor(Math.random() * quotes.length);
  return quotes[idx];
}

const quote = getRandomQuote();
console.log(\`💬 "\${quote.text}"\`);
console.log(\`   — \${quote.author}\`);`,
  },
  {
    id: "fizzbuzz-art",
    title: "FizzBuzz ASCII Art",
    description: "A creative twist on the classic FizzBuzz with colorful output",
    category: "Data Fun",
    language: "Python",
    emoji: "🎯",
    code: `def fizzbuzz_art(n):
    icons = {
        "fizz": "🟢",
        "buzz": "🔵",
        "fizzbuzz": "🟣",
        "num": "⚪"
    }
    
    for i in range(1, n + 1):
        if i % 15 == 0:
            print(f"{icons['fizzbuzz']} FizzBuzz!", end=" ")
        elif i % 3 == 0:
            print(f"{icons['fizz']} Fizz", end=" ")
        elif i % 5 == 0:
            print(f"{icons['buzz']} Buzz", end=" ")
        else:
            print(f"{icons['num']} {i}", end=" ")
        
        if i % 5 == 0:
            print()

fizzbuzz_art(30)`,
  },
  {
    id: "password-generator",
    title: "Secure Password Generator",
    description: "Generate cryptographically strong passwords with custom rules",
    category: "Utilities",
    language: "JavaScript",
    emoji: "🔐",
    code: `function generatePassword(length = 16) {
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const nums = "0123456789";
  const symbols = "!@#$%^&*()_+-=[]{}";
  const all = upper + lower + nums + symbols;

  let password = [
    upper[Math.floor(Math.random() * upper.length)],
    lower[Math.floor(Math.random() * lower.length)],
    nums[Math.floor(Math.random() * nums.length)],
    symbols[Math.floor(Math.random() * symbols.length)],
  ];

  for (let i = password.length; i < length; i++) {
    password.push(
      all[Math.floor(Math.random() * all.length)]
    );
  }

  return password
    .sort(() => Math.random() - 0.5)
    .join("");
}

console.log("🔐 Generated passwords:");
for (let i = 0; i < 3; i++) {
  console.log(\`  \${generatePassword()}\`);
}`,
  },
  {
    id: "matrix-rain",
    title: "Matrix Rain Effect",
    description: "The iconic Matrix digital rain animation for the terminal",
    category: "Animations",
    language: "Python",
    emoji: "🟩",
    code: `import random
import time
import os

COLS = 40
ROWS = 15
chars = "abcdefghijklmnopqrstuvwxyz0123456789@#$%"

drops = [random.randint(-ROWS, 0) for _ in range(COLS)]

def render():
    screen = []
    for y in range(ROWS):
        row = ""
        for x in range(COLS):
            if drops[x] == y:
                row += random.choice(chars)
            elif drops[x] - 1 == y:
                row += random.choice(chars)
            else:
                row += " "
        screen.append(row)
    return "\\n".join(screen)

for _ in range(50):
    os.system('clear')
    print(render())
    for i in range(COLS):
        drops[i] += 1
        if drops[i] > ROWS:
            drops[i] = random.randint(-5, 0)
    time.sleep(0.1)`,
  },
];
