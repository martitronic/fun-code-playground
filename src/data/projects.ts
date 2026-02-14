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
  { name: "Games", emoji: "🎮", count: 5 },
  { name: "Creative Coding", emoji: "🎨", count: 5 },
  { name: "Utilities", emoji: "🔧", count: 4 },
  { name: "Animations", emoji: "✨", count: 3 },
  { name: "Data Fun", emoji: "📊", count: 4 },
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
  {
    id: "conway-life",
    title: "Conway's Game of Life",
    description: "Cellular automaton simulation with birth, survival, and death rules on a 2D grid",
    category: "Games",
    language: "JavaScript",
    emoji: "🧬",
    code: `const ROWS = 30, COLS = 30;
let grid = Array.from({ length: ROWS }, () =>
  Array.from({ length: COLS }, () => Math.random() > 0.7 ? 1 : 0)
);

function countNeighbors(g, r, c) {
  let count = 0;
  for (let dr = -1; dr <= 1; dr++) {
    for (let dc = -1; dc <= 1; dc++) {
      if (dr === 0 && dc === 0) continue;
      const nr = (r + dr + ROWS) % ROWS;
      const nc = (c + dc + COLS) % COLS;
      count += g[nr][nc];
    }
  }
  return count;
}

function nextGen(g) {
  return g.map((row, r) =>
    row.map((cell, c) => {
      const n = countNeighbors(g, r, c);
      if (cell && (n === 2 || n === 3)) return 1;
      if (!cell && n === 3) return 1;
      return 0;
    })
  );
}

function render(g) {
  return g.map(row =>
    row.map(c => c ? "█" : "·").join("")
  ).join("\\n");
}

for (let i = 0; i < 10; i++) {
  console.log(\`Generation \${i}:\\n\${render(grid)}\\n\`);
  grid = nextGen(grid);
}`,
  },
  {
    id: "mandelbrot",
    title: "Mandelbrot Set Renderer",
    description: "Generates an ASCII art Mandelbrot fractal with adjustable zoom and iterations",
    category: "Creative Coding",
    language: "Python",
    emoji: "🌌",
    code: `def mandelbrot(width=60, height=30, max_iter=80):
    chars = " .:-=+*#%@"
    x_min, x_max = -2.5, 1.0
    y_min, y_max = -1.25, 1.25

    for row in range(height):
        line = ""
        for col in range(width):
            x0 = x_min + (x_max - x_min) * col / width
            y0 = y_min + (y_max - y_min) * row / height
            x, y, iteration = 0.0, 0.0, 0

            while x*x + y*y <= 4 and iteration < max_iter:
                x, y = x*x - y*y + x0, 2*x*y + y0
                iteration += 1

            idx = int(iteration / max_iter * (len(chars) - 1))
            line += chars[idx]
        print(line)

mandelbrot()`,
  },
  {
    id: "linked-list",
    title: "Linked List with Full Operations",
    description: "Complete linked list implementation with insert, delete, reverse, and cycle detection",
    category: "Data Fun",
    language: "JavaScript",
    emoji: "🔗",
    code: `class Node {
  constructor(val) { this.val = val; this.next = null; }
}

class LinkedList {
  constructor() { this.head = null; this.size = 0; }

  push(val) {
    const node = new Node(val);
    node.next = this.head;
    this.head = node;
    this.size++;
  }

  reverse() {
    let prev = null, curr = this.head;
    while (curr) {
      const next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }

  hasCycle() {
    let slow = this.head, fast = this.head;
    while (fast?.next) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow === fast) return true;
    }
    return false;
  }

  toArray() {
    const arr = [];
    let curr = this.head;
    while (curr) { arr.push(curr.val); curr = curr.next; }
    return arr;
  }
}

const list = new LinkedList();
[5, 4, 3, 2, 1].forEach(v => list.push(v));
console.log("Original:", list.toArray());
list.reverse();
console.log("Reversed:", list.toArray());
console.log("Has cycle:", list.hasCycle());`,
  },
  {
    id: "particle-system",
    title: "Canvas Particle System",
    description: "Physics-based particle engine with gravity, fade-out, and randomized velocities",
    category: "Animations",
    language: "JavaScript",
    emoji: "💫",
    code: `const canvas = document.getElementById('c');
const ctx = canvas.getContext('2d');
canvas.width = 600; canvas.height = 400;

class Particle {
  constructor(x, y) {
    this.x = x; this.y = y;
    this.vx = (Math.random() - 0.5) * 6;
    this.vy = (Math.random() - 0.5) * 6 - 2;
    this.life = 1;
    this.decay = 0.01 + Math.random() * 0.02;
    this.radius = 2 + Math.random() * 3;
    this.hue = Math.random() * 60 + 10;
  }
  update() {
    this.vy += 0.05; // gravity
    this.x += this.vx;
    this.y += this.vy;
    this.life -= this.decay;
  }
  draw(ctx) {
    ctx.globalAlpha = this.life;
    ctx.fillStyle = \`hsl(\${this.hue}, 100%, 60%)\`;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}

let particles = [];

function emit(x, y, count = 30) {
  for (let i = 0; i < count; i++)
    particles.push(new Particle(x, y));
}

function loop() {
  ctx.globalAlpha = 0.15;
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.globalAlpha = 1;

  particles.forEach(p => { p.update(); p.draw(ctx); });
  particles = particles.filter(p => p.life > 0);

  if (Math.random() < 0.1)
    emit(Math.random() * canvas.width, canvas.height * 0.6);

  requestAnimationFrame(loop);
}
loop();`,
  },
  {
    id: "minimax-tictactoe",
    title: "Tic-Tac-Toe AI (Minimax)",
    description: "Unbeatable tic-tac-toe opponent using the minimax algorithm with optimal play",
    category: "Games",
    language: "Python",
    emoji: "🤖",
    code: `def print_board(b):
    for i in range(0, 9, 3):
        print(" | ".join(b[i:i+3]))
        if i < 6: print("-" * 9)

def winner(b):
    lines = [(0,1,2),(3,4,5),(6,7,8),
             (0,3,6),(1,4,7),(2,5,8),
             (0,4,8),(2,4,6)]
    for a, c, d in lines:
        if b[a] == b[c] == b[d] != " ":
            return b[a]
    return None

def minimax(b, is_max):
    w = winner(b)
    if w == "O": return 1
    if w == "X": return -1
    if " " not in b: return 0

    scores = []
    for i in range(9):
        if b[i] == " ":
            b[i] = "O" if is_max else "X"
            scores.append(minimax(b, not is_max))
            b[i] = " "
    return max(scores) if is_max else min(scores)

def best_move(b):
    best, move = -2, 0
    for i in range(9):
        if b[i] == " ":
            b[i] = "O"
            score = minimax(b, False)
            b[i] = " "
            if score > best:
                best, move = score, i
    return move

board = [" "] * 9
board[4] = "X"  # Player goes center
ai = best_move(board)
board[ai] = "O"
print(f"AI chose position {ai}")
print_board(board)`,
  },
  {
    id: "ray-marching",
    title: "Ray Marching Sphere SDF",
    description: "Signed distance field ray marcher rendering a 3D sphere with lighting in the terminal",
    category: "Creative Coding",
    language: "Python",
    emoji: "🔮",
    code: `import math

W, H = 60, 30
LIGHT = (1, -1, -1)
mag = math.sqrt(sum(x*x for x in LIGHT))
LIGHT = tuple(x/mag for x in LIGHT)

def sdf_sphere(p, r=1.0):
    return math.sqrt(sum(x*x for x in p)) - r

def ray_march(ro, rd, steps=64):
    t = 0.0
    for _ in range(steps):
        p = tuple(ro[i] + t * rd[i] for i in range(3))
        d = sdf_sphere(p)
        if d < 0.001:
            return t, p
        t += d
        if t > 20: break
    return None, None

def normal(p, eps=0.001):
    d = sdf_sphere(p)
    n = tuple(
        (sdf_sphere(tuple(
            p[j] + (eps if i == j else 0) for j in range(3)
        )) - d) / eps for i in range(3)
    )
    mag = math.sqrt(sum(x*x for x in n))
    return tuple(x/mag for x in n)

chars = " .:-=+*#%@"
for y in range(H):
    row = ""
    for x in range(W):
        uv = ((x / W) * 2 - 1, (y / H) * 2 - 1)
        rd = (uv[0], -uv[1], -1.5)
        m = math.sqrt(sum(v*v for v in rd))
        rd = tuple(v/m for v in rd)
        ro = (0, 0, 3)
        t, p = ray_march(ro, rd)
        if p:
            n = normal(p)
            diff = max(0, sum(n[i]*LIGHT[i] for i in range(3)))
            row += chars[int(diff * (len(chars)-1))]
        else:
            row += " "
    print(row)`,
  },
  {
    id: "event-emitter",
    title: "Event Emitter System",
    description: "Publish-subscribe pattern implementation with once, on, off, and wildcard support",
    category: "Utilities",
    language: "JavaScript",
    emoji: "📡",
    code: `class EventEmitter {
  constructor() { this.events = {}; }

  on(event, fn) {
    (this.events[event] ??= []).push({ fn, once: false });
    return () => this.off(event, fn);
  }

  once(event, fn) {
    (this.events[event] ??= []).push({ fn, once: true });
  }

  off(event, fn) {
    this.events[event] = (this.events[event] || [])
      .filter(l => l.fn !== fn);
  }

  emit(event, ...args) {
    const listeners = this.events[event] || [];
    const wildcards = this.events["*"] || [];
    [...listeners, ...wildcards].forEach(l => {
      l.fn(event, ...args);
    });
    this.events[event] = listeners.filter(l => !l.once);
  }

  listenerCount(event) {
    return (this.events[event] || []).length;
  }
}

const bus = new EventEmitter();
bus.on("user:login", (evt, user) =>
  console.log(\`✅ \${user} logged in\`)
);
bus.once("user:login", (evt, user) =>
  console.log(\`🎉 Welcome first time, \${user}!\`)
);
bus.on("*", (evt) =>
  console.log(\`📡 Event fired: \${evt}\`)
);

bus.emit("user:login", "Alice");
bus.emit("user:login", "Bob");
console.log("Listeners:", bus.listenerCount("user:login"));`,
  },
  {
    id: "a-star-pathfinding",
    title: "A* Pathfinding Algorithm",
    description: "Grid-based shortest path finder with obstacles, heuristics, and visual path output",
    category: "Data Fun",
    language: "Python",
    emoji: "🗺️",
    code: `import heapq

def a_star(grid, start, end):
    rows, cols = len(grid), len(grid[0])
    open_set = [(0, start)]
    came_from = {}
    g_score = {start: 0}

    def h(pos):
        return abs(pos[0]-end[0]) + abs(pos[1]-end[1])

    while open_set:
        _, current = heapq.heappop(open_set)
        if current == end:
            path = []
            while current in came_from:
                path.append(current)
                current = came_from[current]
            path.append(start)
            return path[::-1]

        for dr, dc in [(-1,0),(1,0),(0,-1),(0,1)]:
            nr, nc = current[0]+dr, current[1]+dc
            neighbor = (nr, nc)
            if 0<=nr<rows and 0<=nc<cols and grid[nr][nc]==0:
                tentative = g_score[current] + 1
                if tentative < g_score.get(neighbor, float('inf')):
                    came_from[neighbor] = current
                    g_score[neighbor] = tentative
                    heapq.heappush(open_set,
                        (tentative + h(neighbor), neighbor))
    return None

grid = [
    [0,0,0,1,0,0,0],
    [0,1,0,1,0,1,0],
    [0,1,0,0,0,1,0],
    [0,0,1,1,0,0,0],
    [1,0,0,0,1,0,0],
]
path = a_star(grid, (0,0), (4,6))
for r in range(len(grid)):
    row = ""
    for c in range(len(grid[0])):
        if (r,c) in path: row += "★ "
        elif grid[r][c]: row += "█ "
        else: row += "· "
    print(row)
print(f"Path length: {len(path)} steps")`,
  },
  {
    id: "brainfuck-interpreter",
    title: "Brainfuck Interpreter",
    description: "Complete interpreter for the esoteric Brainfuck language with loop support and memory tape",
    category: "Data Fun",
    language: "JavaScript",
    emoji: "🧠",
    code: `function brainfuck(code, input = "") {
  const tape = new Uint8Array(30000);
  let ptr = 0, pc = 0, ic = 0;
  let output = "";

  // Pre-compute bracket matches
  const jumps = {};
  const stack = [];
  for (let i = 0; i < code.length; i++) {
    if (code[i] === "[") stack.push(i);
    if (code[i] === "]") {
      const j = stack.pop();
      jumps[j] = i;
      jumps[i] = j;
    }
  }

  while (pc < code.length) {
    switch (code[pc]) {
      case ">": ptr++; break;
      case "<": ptr--; break;
      case "+": tape[ptr]++; break;
      case "-": tape[ptr]--; break;
      case ".": output += String.fromCharCode(tape[ptr]); break;
      case ",": tape[ptr] = input.charCodeAt(ic++) || 0; break;
      case "[": if (!tape[ptr]) pc = jumps[pc]; break;
      case "]": if (tape[ptr]) pc = jumps[pc]; break;
    }
    pc++;
  }
  return output;
}

// "Hello World!" in Brainfuck
const hello = "++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>.>---.+++++++..+++.>>.<-.<.+++.------.--------.>>+.>++.";
console.log("Output:", brainfuck(hello));

// Fibonacci sequence
const fib = "++++++++++>+>>>>++++++++++++++++++++++++++++++++++++++++++++>++++++++++++++++++++++++++++++++<<<<<<[>[>>>>>>+>+<<<<<<<-]>>>>>>>[<<<<<<<+>>>>>>>-]<[>++++++++++[-<-[>>+>+<<<-]>>>[<<<+>>>-]+<[>[-]<[-]]>[<<[>>>+<<<-]>>[-]]<<]>>>+<[-]<<[>+<-]>>[<<+>>-]<<<[>>+>+<<<-]>>>[<<<+>>>-]<[>++++++++++[-<-[>>+>+<<<-]>>>[<<<+>>>-]+<[>[-]<[-]]>[<<[>>>+<<<-]>>[-]]<<]>>>+<[-]<<[>+<-]>>[<<+>>-]<<<[>>+>+<<<-]>>>[<<<+>>>-]<[>+++++[-<.>]<[-]]<[-]]<<<<<<<]";
console.log("Fib:", brainfuck(fib));`,
  },
];
