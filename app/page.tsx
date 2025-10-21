"use client"

import { Star, Search, X, Bell, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import React from "react"

interface Notification {
  id: number
  title: string
  message: string
  timestamp: number // Unix timestamp
}

const notifications: Notification[] = [
  {
    id: 1,
    title: "New Game Added!",
    message: "1v1.lol is now available to play",
    timestamp: Date.now() - 2 * 60 * 60 * 1000, // 2 hours ago
  },
  {
    id: 2,
    title: "New Game Added!",
    message: "Hollow Knight (New) is now available to play",
    timestamp: Date.now() - 2 * 60 * 60 * 1000, // 2 hours ago
  },
  {
    id: 3,
    title: "Update Available",
    message: "Soundboard has been updated with new features",
    timestamp: Date.now() - 24 * 60 * 60 * 1000, // 1 day ago
  },
  {
    id: 4,
    title: "Maintenance Complete",
    message: "All games are now running smoothly",
    timestamp: Date.now() - 3 * 24 * 60 * 60 * 1000, // 3 days ago
  },
]

function getRelativeTime(timestamp: number): string {
  const now = Date.now()
  const diff = now - timestamp
  
  // Handle future timestamps
  if (diff < 0) {
    return "Just now"
  }
  
  const seconds = Math.floor(diff / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)
  const weeks = Math.floor(days / 7)
  const months = Math.floor(days / 30)
  const years = Math.floor(days / 365)

  if (years > 0) return `${years} year${years > 1 ? "s" : ""} ago`
  if (months > 0) return `${months} month${months > 1 ? "s" : ""} ago`
  if (weeks > 0) return `${weeks} week${weeks > 1 ? "s" : ""} ago`
  if (days > 0) return `${days} day${days > 1 ? "s" : ""} ago`
  if (hours > 0) return `${hours} hour${hours > 1 ? "s" : ""} ago`
  if (minutes > 0) return `${minutes} minute${minutes > 1 ? "s" : ""} ago`
  if (seconds > 0) return `${seconds} second${seconds > 1 ? "s" : ""} ago`
  return "Just now"
}

const games = [
  {
    id: 0,
    title: "Random Game",
    plays: 1250,
    description: "Click to play a completely random game! Logo changes every few seconds.",
    tags: ["Random", "Surprise", "Mystery"],
    image: "/placeholder.svg",
    gradient: "from-purple-500/20 to-pink-500/20",
    isNew: false,
    recommended: true,
    isRandom: true,
  },
  {
    id: 1,
    title: "Hollow Knight (New)",
    plays: 787,
    description: "Explore the caves, fighting monsters and collecting loot. Try to win the maidens love!",
    tags: ["Classic", "Exploration", "Skill", "Cave"],
    image: "/hollow-knight-logo.png",
    gradient: "from-yellow-500/20 to-orange-500/20",
    isNew: true,
    recommended: true,
  },
  {
    id: 2,
    title: "Soundboard (New)",
    plays: 487,
    description: "Troll Other Students In Class",
    tags: ["Troll"],
    image: "/179.png",
    gradient: "from-green-500/20 to-teal-500/20",
    isNew: true,
    recommended: true,
  },
  {
    id: 3,
    title: "Escape Road",
    plays: 200700,
    description: "Run away from the cops in this fast paced racing game",
    tags: ["Racing", "Cars", "Jailbreak"],
    image: "/escape-road-logo.png",
    gradient: "from-blue-500/20 to-cyan-500/20",
    isNew: false,
    recommended: true,
  },
  {
    id: 4,
    title: "1v1.lol",
    plays: 94500,
    description: "1v1.lol is a fortnite based shooter game",
    tags: ["Shooting", "Focus", "Battle Royale"],
    image: "/58.png",
    gradient: "from-indigo-500/20 to-purple-500/20",
    isNew: false,
    recommended: true,
  },
  {
    id: 7,
    title: "Retro Bowl",
    plays: 60200,
    description:
      "Retro is an American style football game created by New Star Games. Manage your team's roster, play against rivals, and win...",
    tags: ["Retro", "Football", "Sports"],
    image: "/33.png",
    gradient: "from-green-600/20 to-emerald-700/20",
    isNew: false,
    recommended: true,
  },
  {
    id: 10,
    title: "Granny",
    plays: 48100,
    description: "Run Around, Do Tasks, And Not Let Granny Get You!",
    tags: ["Scary", "Granny", "Horror"],
    image: "/90.png",
    gradient: "from-blue-500/20 to-green-500/20",
    isNew: false,
    recommended: true,
  },
  {
    id: 11,
    title: "Granny 2",
    plays: 50000,
    description: "Run Around, Do Tasks, And Not Let Granny Get You!",
    tags: ["Scary", "Granny", "Horror"],
    image: "/125.png",
    gradient: "from-blue-500/20 to-green-500/20",
    isNew: false,
    recommended: true,
  },
  {
    id: 12,
    title: "Friday Night Funkin",
    plays: 67000,
    description: "Rap Against Other People",
    tags: ["Music", "Rap", "Dancing"],
    image: "/8.png",
    gradient: "from-blue-500/20 to-green-500/20",
    isNew: true,
    recommended: true,
  },
  {
    id: 13,
    title: "Deltrune",
    plays: 1000,
    description: "Some Undertale Remix",
    tags: ["idk"],
    image: "/67.png",
    gradient: "from-blue-500/20 to-green-500/20",
    isNew: true,
    recommended: true,
  },
  {
    id: 14,
    title: "Football Bros",
    plays: 1000,
    description: "idk what to say rlly",
    tags: ["Sport", "Football", "American"],
    image: "/548.png",
    gradient: "from-blue-500/20 to-green-500/20",
    isNew: true,
    recommended: true,
  },
  {
    id: 15,
    title: "Sonic Robo Blast 2",
    plays: 1000,
    description: "idk what to say rlly",
    tags: ["Speed", "Running", "Teamwork"],
    image: "/765.png",
    gradient: "from-blue-500/20 to-green-500/20",
    isNew: true,
    recommended: true,
  },
  {
    id: 16,
    title: "UltraKill",
    plays: 2000,
    description: "idk what to say rlly",
    tags: ["Shooter", "Kill"],
    image: "/196.png",
    gradient: "from-blue-500/20 to-green-500/20",
    isNew: true,
    recommended: true,
  },
  {
    id: 17,
    title: "Geometry Dash",
    plays: 2000,
    description: "idk what to say rlly",
    tags: ["Platformer", "Jump", "Run"],
    image: "/27.png",
    gradient: "from-blue-500/20 to-green-500/20",
    isNew: true,
    recommended: true,
  },
  {
    id: 18,
    title: "Slope",
    plays: 35000,
    description: "idk what to say rlly",
    tags: ["Platformer", "Slope"],
    image: "/76.png",
    gradient: "from-blue-500/20 to-green-500/20",
    isNew: true,
    recommended: true,
  },
]

function formatPlayCount(count: number): string {
  if (count >= 1000000) {
    return `${(count / 1000000).toFixed(1)}M Plays`
  } else if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}K Plays`
  }
  return `${count} Plays`
}

function InteractiveCursor() {
  const canvasRef = React.useRef<HTMLCanvasElement>(null)
  const mousePos = React.useRef({ x: 0, y: 0 })
  const particles = React.useRef<
    Array<{
      x: number
      y: number
      vx: number
      vy: number
      life: number
      maxLife: number
    }>
  >([])

  React.useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY }

      // Create particles at cursor position
      for (let i = 0; i < 2; i++) {
        particles.current.push({
          x: e.clientX,
          y: e.clientY,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          life: 1,
          maxLife: Math.random() * 60 + 40,
        })
      }

      // Limit particle count
      if (particles.current.length > 100) {
        particles.current = particles.current.slice(-100)
      }
    }

    window.addEventListener("mousemove", handleMouseMove)

    // Animation loop
    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw grid
      ctx.strokeStyle = "rgba(128, 128, 128, 0.05)"
      ctx.lineWidth = 1
      const gridSize = 50
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Update and draw particles
      particles.current = particles.current.filter((p) => {
        p.x += p.vx
        p.y += p.vy
        p.life--

        if (p.life <= 0) return false

        const alpha = p.life / p.maxLife
        const size = alpha * 3

        ctx.fillStyle = `rgba(160, 160, 160, ${alpha * 0.6})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2)
        ctx.fill()

        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, size * 4)
        gradient.addColorStop(0, `rgba(160, 160, 160, ${alpha * 0.3})`)
        gradient.addColorStop(1, "rgba(160, 160, 160, 0)")
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(p.x, p.y, size * 4, 0, Math.PI * 2)
        ctx.fill()

        return true
      })

      const glowGradient = ctx.createRadialGradient(
        mousePos.current.x,
        mousePos.current.y,
        0,
        mousePos.current.x,
        mousePos.current.y,
        150,
      )
      glowGradient.addColorStop(0, "rgba(180, 180, 180, 0.15)")
      glowGradient.addColorStop(0.5, "rgba(180, 180, 180, 0.05)")
      glowGradient.addColorStop(1, "rgba(180, 180, 180, 0)")
      ctx.fillStyle = glowGradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />
}

export default function HomePage() {
  const [filter, setFilter] = React.useState<"recommended" | "all">("recommended")
  const [searchQuery, setSearchQuery] = React.useState("")
  const [showSearch, setShowSearch] = React.useState(false)
  const [favorites, setFavorites] = React.useState<Set<number>>(new Set())
  const [showNotifications, setShowNotifications] = React.useState(false)
  const [showMasterDoc, setShowMasterDoc] = React.useState(false)
  const [showAboutUs, setShowAboutUs] = React.useState(false)
  const [tabCloaked, setTabCloaked] = React.useState(false)
  const [showWelcome, setShowWelcome] = React.useState(false)
  const [playCounts, setPlayCounts] = React.useState<Record<number, number>>({})
  const [randomCardLogo, setRandomCardLogo] = React.useState(0)

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(true)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  React.useEffect(() => {
    const savedCounts = localStorage.getItem("binaryGamesPlayCounts")
    if (savedCounts) {
      setPlayCounts(JSON.parse(savedCounts))
    }
  }, [])

  React.useEffect(() => {
    const saved = localStorage.getItem("binaryGamesFavorites")
    if (saved) {
      setFavorites(new Set(JSON.parse(saved)))
    }
  }, [])

  React.useEffect(() => {
    localStorage.setItem("binaryGamesFavorites", JSON.stringify(Array.from(favorites)))
  }, [favorites])

  // Logo cycling effect for random card
  React.useEffect(() => {
    const interval = setInterval(() => {
      setRandomCardLogo((prev) => (prev + 1) % (games.length - 1)) // Exclude the random card itself
    }, 2000) // Change logo every 2 seconds

    return () => clearInterval(interval)
  }, [])

  React.useEffect(() => {
    if (Object.keys(playCounts).length > 0) {
      localStorage.setItem("binaryGamesPlayCounts", JSON.stringify(playCounts))
    }
  }, [playCounts])

  const toggleFavorite = (gameId: number) => {
    setFavorites((prev) => {
      const newFavorites = new Set(prev)
      if (newFavorites.has(gameId)) {
        newFavorites.delete(gameId)
      } else {
        newFavorites.add(gameId)
      }
      return newFavorites
    })
  }


  const handleNotifications = () => {
    setShowNotifications(true)
  }

  const handleTabCloaker = () => {
    const win = window.open("about:blank", "_blank")
    if (win) {
      win.document.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>about:blank</title>
            <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>">
            <style>
              body, html { margin: 0; padding: 0; height: 100%; overflow: hidden; }
              iframe { width: 100%; height: 100%; border: none; }
            </style>
          </head>
          <body>
            <iframe src="${window.location.href}"></iframe>
          </body>
        </html>
      `)
      win.document.close()
    }
  }

  const handleMasterDoc = () => {
    window.open(
      "https://docs.google.com/document/d/1j3jkoHOKYod2JMJM-AnsrF_QrSTPi7RhmjK1tnWXQ9M/edit?usp=sharing",
      "_blank",
    )
  }

  const handleAboutUs = () => {
    setShowAboutUs(true)
  }

  const handleGameClick = (gameId: number, gameTitle: string) => {
    // Increment play count
    setPlayCounts((prev) => ({
      ...prev,
      [gameId]: (prev[gameId] || 0) + 1,
    }))

    // Handle random game card
    if (gameId === 0) {
      // Pick a random game from the actual games (excluding the random card itself)
      const actualGames = games.filter(game => game.id !== 0)
      const randomGame = actualGames[Math.floor(Math.random() * actualGames.length)]
      handleGameClick(randomGame.id, randomGame.title)
      return
    }

    // Navigate to game
    if (gameId === 1) {
      window.location.href = "/games/hollow-knight/index.html"
    } else if (gameId === 2) {
      window.location.href = "/games/soundboard/index.html"
    } else if (gameId === 3) {
      window.location.href = "/games/escape-road/index.html"
    } else if (gameId === 4) {
      window.location.href = "/games/1v1.lol/index.html"
    } else if (gameId === 7) {
      window.location.href = "/games/7/index.html"
    } else if (gameId === 10) {
      window.location.href = "/games/10/index.html"
    } else if (gameId === 11) {
      window.location.href = "/games/11/index.html"
    } else if (gameId === 12) {
      window.location.href = "/games/12/index.html"
    } else if (gameId === 13) {
      window.location.href = "/games/13/index.html"
    } else if (gameId === 14) {
      window.location.href = "/games/14/index.html"
    } else if (gameId === 15) {
      window.location.href = "/games/15/index.html"
      } else if (gameId === 16) {
      window.location.href = "/games/16/index.html"
    } else if (gameId === 17) {
      window.location.href = "/games/17/index.html"
    } else if (gameId === 18) {
      window.location.href = "/games/18/index.html"
    } else {
      window.location.href = `/games/${gameId}/index.html`
    }
  }

  const getPlayCount = (gameId: number, baseCount: number): number => {
    return baseCount + (playCounts[gameId] || 0)
  }

  const filteredGames = games.filter((game) => {
    const matchesFilter = filter === "all" || game.recommended
    const matchesSearch =
      searchQuery === "" ||
      game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      game.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesFilter && matchesSearch
  })

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <InteractiveCursor />

      {showWelcome && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 animate-in fade-in slide-in-from-top-4 duration-500">
          <div className="bg-gradient-to-r from-gray-800 to-gray-700 border border-gray-600 rounded-2xl shadow-2xl px-8 py-4 flex items-center gap-4">
            <div className="text-gray-100 font-bold text-lg">Welcome to pxvoid!</div>
            <button
              onClick={() => setShowWelcome(false)}
              className="text-gray-400 hover:text-gray-200 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}

      <header className="sticky top-4 z-50 mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between rounded-2xl bg-zinc-900/80 backdrop-blur-xl px-6 py-4 shadow-lg shadow-gray-500/10 border border-gray-600/30 pointer-events-auto">
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-bold bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">
              pxvoid
            </h1>
          </div>
          <nav className="flex items-center gap-8">
            <button
              onClick={handleNotifications}
              className="text-sm font-medium text-gray-300 hover:text-gray-100 transition-colors cursor-pointer active:scale-95"
            >
              Notifications
            </button>
            <button
              onClick={handleTabCloaker}
              className="text-sm font-medium text-gray-300 hover:text-gray-100 transition-colors cursor-pointer active:scale-95"
            >
              Tab Cloaker
            </button>
            <button
              onClick={handleMasterDoc}
              className="text-sm font-medium text-gray-300 hover:text-gray-100 transition-colors cursor-pointer active:scale-95"
            >
              Master Doc
            </button>
            <button
              onClick={handleAboutUs}
              className="text-sm font-medium text-gray-300 hover:text-gray-100 transition-colors cursor-pointer active:scale-95"
            >
              About Us
            </button>
          </nav>
        </div>
      </header>

      <main className="relative mx-auto max-w-7xl px-4 py-8 z-10">
        <div className="mb-8 flex items-center justify-center gap-3">
          <Button
            variant={filter === "recommended" ? "secondary" : "ghost"}
            onClick={() => setFilter("recommended")}
            className={
              filter === "recommended"
                ? "rounded-full bg-gray-700/40 hover:bg-gray-600/50 text-gray-100 shadow-sm border border-gray-600/40 backdrop-blur-sm"
                : "rounded-full text-gray-300 hover:bg-gray-700/30 hover:text-gray-100 border border-transparent hover:border-gray-600/30"
            }
          >
            Recommended
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setShowSearch(!showSearch)}
            className="rounded-full hover:bg-gray-700/30 border border-transparent hover:border-gray-600/30"
          >
            <Search className="h-5 w-5 text-gray-300" />
          </Button>
        </div>

        {showSearch && (
          <div className="mb-6 mx-auto max-w-md">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search games..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="rounded-full bg-zinc-900/80 border-gray-600/40 text-gray-100 placeholder:text-gray-400 pr-10"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-200"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
        )}

        {filteredGames.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No games found matching your search.</p>
          </div>
        )}

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredGames.map((game) => (
            <div
              key={game.id}
              onClick={() => handleGameClick(game.id, game.title)}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br shadow-lg shadow-gray-500/10 transition-all hover:shadow-xl hover:shadow-gray-400/20 hover:-translate-y-1 border border-gray-700/40 hover:border-gray-500/60 cursor-pointer"
            >
              <div className="absolute inset-0">
                <img 
                  src={game.isRandom ? games[randomCardLogo + 1]?.image || "/placeholder.svg" : game.image || "/placeholder.svg"} 
                  alt={game.title} 
                  className={`h-full w-full object-cover transition-all duration-500 ${game.isRandom ? 'animate-pulse' : ''}`} 
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${game.gradient}`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-zinc-900/70 to-zinc-800/50" />
                {game.isRandom && (
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 animate-pulse" />
                )}
              </div>

              <div className="relative flex h-full min-h-[320px] flex-col justify-between p-6">
                <div className="flex justify-end">
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleFavorite(game.id)
                    }}
                    className={`rounded-full p-2 backdrop-blur-sm transition-all border ${
                      favorites.has(game.id)
                        ? "bg-gray-400/50 border-gray-300/60"
                        : "bg-gray-600/30 border-gray-500/40 hover:bg-gray-500/50"
                    }`}
                  >
                    <Star
                      className={`h-4 w-4 transition-all ${
                        favorites.has(game.id) ? "text-gray-100 fill-gray-100" : "text-gray-300"
                      }`}
                    />
                  </button>
                </div>

                <div className="space-y-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-100 text-balance flex items-center gap-2">
                      {game.title}
                      {game.isRandom && (
                        <span className="text-xs bg-purple-600/40 text-purple-200 px-2 py-1 rounded-full border border-purple-500/40 animate-pulse">
                          🎲
                        </span>
                      )}
                    </h3>
                    <p className="text-sm text-gray-400">{formatPlayCount(getPlayCount(game.id, game.plays))}</p>
                  </div>
                  <p className="text-sm leading-relaxed text-gray-300 text-pretty">{game.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {game.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="rounded-full bg-gray-700/40 text-gray-200 backdrop-blur-sm hover:bg-gray-600/50 border border-gray-600/40"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Dialog open={showNotifications} onOpenChange={setShowNotifications}>
        <DialogContent className="bg-zinc-900 border-gray-700 text-gray-100">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Notifications
            </DialogTitle>
            <DialogDescription className="text-gray-400">
              Stay updated with the latest game releases and updates
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            {notifications.map((notification) => (
              <div key={notification.id} className="rounded-lg bg-zinc-800 p-4 border border-gray-700">
                <p className="text-sm font-medium text-gray-200">{notification.title}</p>
                <p className="text-sm text-gray-400 mt-1">{notification.message}</p>
                <p className="text-xs text-gray-500 mt-2">{getRelativeTime(notification.timestamp)}</p>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showAboutUs} onOpenChange={setShowAboutUs}>
        <DialogContent className="bg-zinc-900 border-gray-700 text-gray-100 max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Info className="h-5 w-5" />
              About pxvoid
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4 max-h-[60vh] overflow-y-auto">
            <div>
              <h3 className="text-lg font-semibold text-gray-200 mb-2">Why Was This Made</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                pxvoid Was Inspired By CC Ported, We Offer Better UI And More Games Than Ever, Yes We Currently Do
                Not Have Much, But Were Constantly Adding New Games To pxvoid!
              </p>
              <h3 className="text-lg font-semibold text-gray-200 mb-2">Our Goal</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Our Goal At pxvoid Is Having Atleast 500 Games!, We Are Constantly Adding New Games For YOU To Enjoy
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
