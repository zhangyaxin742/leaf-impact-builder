import { useState } from "react"
import { AppLayout } from "@/components/layout/app-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ProgressBar } from "@/components/ui/progress-bar"
import { Play, CheckCircle, Clock, Book } from "lucide-react"
import { lessonCards } from "@/data/mockData"

export default function Learn() {
  const [selectedLesson, setSelectedLesson] = useState<string | null>(null)

  const completedCount = lessonCards.filter(l => l.completed).length
  const totalLessons = lessonCards.length

  return (
    <AppLayout>
      <div className="container-mobile py-6 space-y-6">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold mb-2">Learn</h1>
          <p className="text-muted-foreground">Bite-sized climate investing education</p>
        </div>

        {/* Progress Overview */}
        <Card variant="impact">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Book className="h-5 w-5" />
              Learning Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span>Lessons completed</span>
                <span>{completedCount} / {totalLessons}</span>
              </div>
              <ProgressBar 
                value={completedCount} 
                max={totalLessons}
                variant="gradient"
              />
              <p className="text-sm opacity-90">
                🔥 Keep your streak going! 2 days in a row
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Lesson Cards */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Available Lessons</h2>
          
          {lessonCards.map((lesson) => (
            <Card 
              key={lesson.id}
              variant={lesson.completed ? "elevated" : "interactive"}
              padding="default"
              onClick={() => setSelectedLesson(lesson.id)}
            >
              <CardContent>
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    lesson.completed 
                      ? 'bg-success/20 text-success'
                      : lesson.progress > 0 
                        ? 'bg-primary/20 text-primary'
                        : 'bg-muted text-muted-foreground'
                  }`}>
                    {lesson.completed ? (
                      <CheckCircle className="h-6 w-6" />
                    ) : lesson.progress > 0 ? (
                      <Play className="h-6 w-6" />
                    ) : (
                      <Book className="h-6 w-6" />
                    )}
                  </div>
                  
                  <div className="flex-1 space-y-2">
                    <div className="flex items-start justify-between">
                      <h3 className="font-semibold">{lesson.title}</h3>
                      <Badge variant="secondary" className="text-xs">
                        {lesson.category}
                      </Badge>
                    </div>
                    
                    <p className="text-sm text-muted-foreground">
                      {lesson.description}
                    </p>
                    
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{lesson.duration} min</span>
                      </div>
                      {lesson.progress > 0 && !lesson.completed && (
                        <div className="flex items-center gap-2">
                          <span>{lesson.progress}% complete</span>
                          <div className="w-12 bg-muted rounded-full h-1">
                            <div 
                              className="bg-primary h-1 rounded-full"
                              style={{ width: `${lesson.progress}%` }}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Glossary Quick Access */}
        <Card variant="gradient" padding="default">
          <CardContent>
            <h3 className="font-semibold mb-3">Quick Glossary</h3>
            <div className="grid grid-cols-2 gap-2">
              {['ESG', 'Impact', 'SDG', 'SRI', 'Green Bond', 'Blended Finance'].map(term => (
                <Button key={term} variant="outline" size="sm" className="text-xs">
                  {term}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Featured Topic */}
        <Card variant="elevated">
          <CardHeader>
            <CardTitle>Featured: Why No Carbon Offsets?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-muted-foreground">
              Learn why Leaf.io focuses on direct project finance rather than traditional carbon offsets.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span>Additionality concerns with offsets</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span>Direct impact through project funding</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span>Transparency and verification</span>
              </div>
            </div>
            <Button variant="outline" size="sm" className="w-full">
              Read Full Article
            </Button>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  )
}