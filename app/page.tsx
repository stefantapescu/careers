"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from 'next/link'

// Remove or comment out the unused import
// import { SpeedInsights } from "@vercel/speed-insights/next"

const questions = [
  {
    question: "What's your dream superpower or TV series that fits your career perspective?",
    answers: [
      { id: 'a', text: "Building gadgets to save the world or \"Silicon Valley\"" },
      { id: 'b', text: "Time traveling to experience epic tales or \"Grey's Anatomy\"" },
      { id: 'c', text: "Connecting with nature and animals or \"Planet Earth\"" },
      { id: 'd', text: "Capturing memories in a movie reel or \"Law & Order\"" },
      { id: 'e', text: "Persuading anyone with a speech or \"The Office\"" },
      { id: 'f', text: "Flying (or sprinting) faster than light" },
    ]
  },
  {
    question: "Which academic field aligns most with your interests and goals?",
    answers: [
      { id: 'a', text: "Computer Science and Artificial Intelligence" },
      { id: 'b', text: "Medicine and Biomedical Sciences" },
      { id: 'c', text: "Environmental Studies and Sustainability" },
      { id: 'd', text: "Law and Political Science" },
      { id: 'e', text: "Business and Entrepreneurship" },
      { id: 'f', text: "Arts and Creative Media" },
    ]
  }
]

export default function AssessmentPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([])

  const handleAnswer = (answerId: string) => {
    const newAnswers = [...selectedAnswers]
    newAnswers[currentQuestion] = answerId
    setSelectedAnswers(newAnswers)
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-purple-800 to-purple-600">
      <header className="bg-purple-900 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">EDUAI</Link>
          <nav className="hidden md:flex space-x-4">
            <Link href="#" className="hover:underline">Programs</Link>
            <Link href="#" className="hover:underline">Our Services</Link>
            <Link href="#" className="hover:underline">About Us</Link>
          </nav>
          <div className="hidden md:flex space-x-2">
            <Button variant="outline" className="text-white border-white hover:bg-purple-700">Contact Us</Button>
            <Button variant="outline" className="text-white border-white hover:bg-purple-700">Log In</Button>
            <Button className="bg-pink-500 hover:bg-pink-600">Sign Up</Button>
          </div>
        </div>
      </header>
      <main className="flex-grow flex items-center justify-center p-4">
        <Card className="w-full max-w-4xl bg-white bg-opacity-10 backdrop-blur-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"></path>
            </svg>
            <CardTitle className="text-2xl font-bold text-white">EDUAI's Career Assessment</CardTitle>
          </CardHeader>
          <CardContent>
            <h3 className="text-2xl font-semibold text-white mb-8 text-center">
              {questions[currentQuestion].question}
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {questions[currentQuestion].answers.map((answer) => (
                <Button
                  key={answer.id}
                  variant="outline"
                  className={`h-auto justify-start p-4 ${
                    selectedAnswers[currentQuestion] === answer.id
                      ? 'bg-pink-500 text-white hover:bg-pink-600'
                      : 'bg-pink-100 text-purple-800 hover:bg-pink-200'
                  }`}
                  onClick={() => handleAnswer(answer.id)}
                >
                  <span className="font-semibold text-lg mr-2">{answer.id.toUpperCase()})</span>
                  <span className="text-sm">{answer.text}</span>
                </Button>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <Button
                onClick={handleBack}
                disabled={currentQuestion === 0}
                className="bg-pink-500 hover:bg-pink-600 disabled:opacity-50"
              >
                ← Back
              </Button>
              <div className="flex space-x-2">
                {questions.map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full ${
                      index === currentQuestion ? 'bg-pink-500' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              <Button
                onClick={handleNext}
                disabled={currentQuestion === questions.length - 1 || !selectedAnswers[currentQuestion]}
                className="bg-pink-500 hover:bg-pink-600 disabled:opacity-50"
              >
                Next →
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}