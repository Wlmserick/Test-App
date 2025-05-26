"use client"

import { useState, useEffect } from "react"
import { Search as SearchIcon, Command } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function Search() {
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState("")

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const searchResults = [
    { title: "AI Meeting Notes", type: "Feature", description: "Perfect notes every time" },
    { title: "Enterprise Search", type: "Feature", description: "One search for everything" },
    { title: "Projects", type: "Feature", description: "Keep every plan on track" },
    { title: "Notion Mail", type: "Product", description: "The inbox that thinks like you" },
    { title: "Templates", type: "Resource", description: "Get started faster" },
  ].filter(item =>
    search === "" ||
    item.title.toLowerCase().includes(search.toLowerCase()) ||
    item.description.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
          <SearchIcon className="h-4 w-4 mr-2" />
          <span className="hidden md:inline">Search</span>
          <kbd className="hidden md:inline-flex ml-2 pointer-events-none h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
            <Command className="h-3 w-3" />K
          </kbd>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Search Notion</DialogTitle>
          <DialogDescription>
            Search for features, products, and resources
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <Input
            placeholder="Search features, products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="text-lg"
            autoFocus
          />
          <div className="max-h-96 overflow-auto">
            {searchResults.length > 0 ? (
              <div className="space-y-2">
                {searchResults.map((result, index) => (
                  <div
                    key={index}
                    className="p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">{result.title}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {result.description}
                        </div>
                      </div>
                      <span className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                        {result.type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                No results found for "{search}"
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
