"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

type QuizAnswer = {
  livingSpace: string;
  activityLevel: string;
  experience: string;
  exerciseTime: string;
  familySituation: string;
  groomingCommitment: string;
  sizePreference: string;
  barkingTolerance: string;
};

type DogBreed = {
  name: string;
  size: string;
  energy: string;
  grooming: string;
  experience: string;
  family: string;
  space: string;
  exercise: string;
  barking: string;
  description: string;
  traits: string[];
};

const dogBreeds: DogBreed[] = [
  // Small Breeds
  {
    name: "French Bulldog",
    size: "small",
    energy: "low",
    grooming: "low",
    experience: "beginner",
    family: "excellent",
    space: "apartment",
    exercise: "30min",
    barking: "low",
    description: "Affectionate, playful, and adaptable companion perfect for city living.",
    traits: ["Low maintenance", "Great for apartments", "Good with kids", "Minimal exercise needs"]
  },
  {
    name: "Cavalier King Charles Spaniel",
    size: "small",
    energy: "moderate",
    grooming: "moderate",
    experience: "beginner",
    family: "excellent",
    space: "apartment",
    exercise: "45min",
    barking: "low",
    description: "Gentle, affectionate lap dog that loves everyone.",
    traits: ["Extremely friendly", "Good with children", "Adaptable", "Eager to please"]
  },
  {
    name: "Pug",
    size: "small",
    energy: "low",
    grooming: "low",
    experience: "beginner",
    family: "excellent",
    space: "apartment",
    exercise: "30min",
    barking: "moderate",
    description: "Charming, mischievous, and loving companion with a big personality.",
    traits: ["Low exercise needs", "Great with kids", "Adaptable", "Comical personality"]
  },
  {
    name: "Chihuahua",
    size: "small",
    energy: "moderate",
    grooming: "low",
    experience: "beginner",
    family: "singles",
    space: "apartment",
    exercise: "30min",
    barking: "high",
    description: "Tiny, sassy, and loyal companion with huge personality.",
    traits: ["Very portable", "Long lifespan", "Loyal", "Alert watchdog"]
  },
  {
    name: "Shih Tzu",
    size: "small",
    energy: "low",
    grooming: "high",
    experience: "beginner",
    family: "excellent",
    space: "apartment",
    exercise: "30min",
    barking: "moderate",
    description: "Friendly, affectionate lap dog bred to be a companion.",
    traits: ["Great for apartments", "Good with children", "Friendly", "Requires regular grooming"]
  },
  {
    name: "Pomeranian",
    size: "small",
    energy: "moderate",
    grooming: "high",
    experience: "beginner",
    family: "singles",
    space: "apartment",
    exercise: "30min",
    barking: "high",
    description: "Fluffy, bold, and lively little companion with fox-like features.",
    traits: ["Portable size", "Alert", "Intelligent", "High grooming needs"]
  },
  {
    name: "Yorkshire Terrier",
    size: "small",
    energy: "moderate",
    grooming: "high",
    experience: "beginner",
    family: "singles",
    space: "apartment",
    exercise: "30min",
    barking: "high",
    description: "Feisty, brave, and affectionate toy breed with silky coat.",
    traits: ["Portable", "Hypoallergenic coat", "Bold personality", "Good watchdog"]
  },
  {
    name: "Boston Terrier",
    size: "small",
    energy: "moderate",
    grooming: "low",
    experience: "beginner",
    family: "excellent",
    space: "apartment",
    exercise: "45min",
    barking: "low",
    description: "Friendly, intelligent 'American Gentleman' with tuxedo markings.",
    traits: ["Low maintenance", "Good with kids", "Friendly", "Adaptable"]
  },
  {
    name: "Dachshund",
    size: "small",
    energy: "moderate",
    grooming: "low",
    experience: "beginner",
    family: "good",
    space: "apartment",
    exercise: "45min",
    barking: "high",
    description: "Clever, stubborn, and courageous with elongated body.",
    traits: ["Unique appearance", "Loyal", "Good watchdog", "Independent"]
  },
  {
    name: "Maltese",
    size: "small",
    energy: "low",
    grooming: "high",
    experience: "beginner",
    family: "good",
    space: "apartment",
    exercise: "30min",
    barking: "moderate",
    description: "Gentle, playful lap dog with long white coat.",
    traits: ["Hypoallergenic", "Great for apartments", "Affectionate", "Good with gentle children"]
  },
  
  // Medium Breeds
  {
    name: "Golden Retriever",
    size: "large",
    energy: "high",
    grooming: "moderate",
    experience: "beginner",
    family: "excellent",
    space: "house",
    exercise: "90min",
    barking: "low",
    description: "Friendly, intelligent, and devoted family dog.",
    traits: ["Great with kids", "Highly trainable", "Gentle temperament", "Active lifestyle"]
  },
  {
    name: "Labrador Retriever",
    size: "large",
    energy: "high",
    grooming: "low",
    experience: "beginner",
    family: "excellent",
    space: "house",
    exercise: "90min",
    barking: "low",
    description: "Outgoing, active, and friendly companion perfect for families.",
    traits: ["Versatile", "Great with children", "Easy to train", "Athletic"]
  },
  {
    name: "Cocker Spaniel",
    size: "medium",
    energy: "moderate",
    grooming: "high",
    experience: "beginner",
    family: "excellent",
    space: "house",
    exercise: "60min",
    barking: "moderate",
    description: "Gentle, happy, and affectionate sporting dog.",
    traits: ["Friendly", "Good with kids", "Adaptable", "Beautiful coat"]
  },
  {
    name: "Bulldog",
    size: "medium",
    energy: "low",
    grooming: "low",
    experience: "beginner",
    family: "excellent",
    space: "apartment",
    exercise: "30min",
    barking: "low",
    description: "Calm, friendly, and courageous with distinctive wrinkled face.",
    traits: ["Low energy", "Good with kids", "Gentle", "Minimal exercise"]
  },
  {
    name: "Beagle",
    size: "medium",
    energy: "high",
    grooming: "low",
    experience: "beginner",
    family: "excellent",
    space: "house",
    exercise: "60min",
    barking: "high",
    description: "Merry, friendly, and curious hound with excellent nose.",
    traits: ["Great with kids", "Social", "Active", "Vocal"]
  },
  {
    name: "Pembroke Welsh Corgi",
    size: "medium",
    energy: "moderate",
    grooming: "moderate",
    experience: "beginner",
    family: "excellent",
    space: "apartment",
    exercise: "60min",
    barking: "moderate",
    description: "Smart, affectionate herding dog with short legs.",
    traits: ["Intelligent", "Good with kids", "Adaptable", "Alert"]
  },
  {
    name: "Poodle (Miniature)",
    size: "medium",
    energy: "moderate",
    grooming: "high",
    experience: "beginner",
    family: "excellent",
    space: "apartment",
    exercise: "60min",
    barking: "low",
    description: "Intelligent, elegant, and hypoallergenic companion.",
    traits: ["Hypoallergenic", "Highly trainable", "Active", "Requires grooming"]
  },
  {
    name: "Shetland Sheepdog",
    size: "medium",
    energy: "high",
    grooming: "high",
    experience: "beginner",
    family: "excellent",
    space: "house",
    exercise: "60min",
    barking: "high",
    description: "Intelligent, playful, and energetic herding dog.",
    traits: ["Highly trainable", "Great with kids", "Active", "Vocal"]
  },
  {
    name: "Whippet",
    size: "medium",
    energy: "moderate",
    grooming: "low",
    experience: "beginner",
    family: "good",
    space: "apartment",
    exercise: "60min",
    barking: "low",
    description: "Gentle, affectionate sighthound that loves to run.",
    traits: ["Low maintenance", "Quiet", "Athletic", "Good apartment dog"]
  },
  {
    name: "Basset Hound",
    size: "medium",
    energy: "low",
    grooming: "low",
    experience: "beginner",
    family: "excellent",
    space: "house",
    exercise: "45min",
    barking: "moderate",
    description: "Patient, low-key hound with long ears and sad expression.",
    traits: ["Gentle", "Good with kids", "Laid-back", "Easygoing"]
  },
  {
    name: "Australian Shepherd",
    size: "medium",
    energy: "high",
    grooming: "moderate",
    experience: "experienced",
    family: "excellent",
    space: "house",
    exercise: "120min",
    barking: "moderate",
    description: "Smart, work-oriented herding dog with high energy.",
    traits: ["Extremely intelligent", "Athletic", "Loyal", "Needs mental stimulation"]
  },
  {
    name: "Border Collie",
    size: "medium",
    energy: "high",
    grooming: "moderate",
    experience: "experienced",
    family: "good",
    space: "house",
    exercise: "120min",
    barking: "moderate",
    description: "Remarkably smart, energetic herding dog.",
    traits: ["Most intelligent breed", "High energy", "Needs jobs", "Excellent trainability"]
  },
  {
    name: "Brittany",
    size: "medium",
    energy: "high",
    grooming: "low",
    experience: "beginner",
    family: "excellent",
    space: "house",
    exercise: "90min",
    barking: "low",
    description: "Upbeat, athletic bird dog with happy disposition.",
    traits: ["Friendly", "Athletic", "Eager to please", "Great family dog"]
  },
  {
    name: "Staffordshire Bull Terrier",
    size: "medium",
    energy: "moderate",
    grooming: "low",
    experience: "beginner",
    family: "excellent",
    space: "house",
    exercise: "60min",
    barking: "low",
    description: "Courageous, intelligent, and affectionate 'nanny dog'.",
    traits: ["Great with kids", "Loyal", "Playful", "Muscular build"]
  },
  
  // Large Breeds
  {
    name: "German Shepherd",
    size: "large",
    energy: "high",
    grooming: "moderate",
    experience: "experienced",
    family: "excellent",
    space: "house",
    exercise: "90min",
    barking: "moderate",
    description: "Confident, courageous, and smart working dog.",
    traits: ["Highly trainable", "Protective", "Loyal", "Versatile"]
  },
  {
    name: "Boxer",
    size: "large",
    energy: "high",
    grooming: "low",
    experience: "beginner",
    family: "excellent",
    space: "house",
    exercise: "90min",
    barking: "moderate",
    description: "Fun-loving, bright, and active guardian.",
    traits: ["Great with kids", "Playful", "Protective", "Energetic"]
  },
  {
    name: "Rottweiler",
    size: "large",
    energy: "moderate",
    grooming: "low",
    experience: "experienced",
    family: "good",
    space: "house",
    exercise: "60min",
    barking: "low",
    description: "Loyal, loving, and confident guardian.",
    traits: ["Protective", "Strong", "Trainable", "Devoted"]
  },
  {
    name: "Doberman Pinscher",
    size: "large",
    energy: "high",
    grooming: "low",
    experience: "experienced",
    family: "good",
    space: "house",
    exercise: "90min",
    barking: "moderate",
    description: "Loyal, fearless, and alert guardian.",
    traits: ["Highly trainable", "Athletic", "Protective", "Intelligent"]
  },
  {
    name: "Siberian Husky",
    size: "large",
    energy: "high",
    grooming: "high",
    experience: "experienced",
    family: "good",
    space: "house",
    exercise: "120min",
    barking: "high",
    description: "Outgoing, mischievous sled dog with striking appearance.",
    traits: ["High energy", "Independent", "Vocal", "Needs lots of exercise"]
  },
  {
    name: "Great Dane",
    size: "giant",
    energy: "moderate",
    grooming: "low",
    experience: "beginner",
    family: "excellent",
    space: "house",
    exercise: "60min",
    barking: "low",
    description: "Friendly, patient, and dependable gentle giant.",
    traits: ["Gentle giant", "Good with kids", "Noble", "Needs space"]
  },
  {
    name: "Bernese Mountain Dog",
    size: "giant",
    energy: "moderate",
    grooming: "high",
    experience: "beginner",
    family: "excellent",
    space: "house",
    exercise: "60min",
    barking: "low",
    description: "Good-natured, calm, and strong working dog.",
    traits: ["Gentle", "Great with kids", "Affectionate", "Beautiful coat"]
  },
  {
    name: "Saint Bernard",
    size: "giant",
    energy: "low",
    grooming: "moderate",
    experience: "beginner",
    family: "excellent",
    space: "house",
    exercise: "45min",
    barking: "low",
    description: "Playful, charming, and inquisitive rescue dog.",
    traits: ["Gentle giant", "Patient", "Good with kids", "Drools"]
  },
  {
    name: "Weimaraner",
    size: "large",
    energy: "high",
    grooming: "low",
    experience: "experienced",
    family: "good",
    space: "house",
    exercise: "120min",
    barking: "moderate",
    description: "Friendly, fearless, and athletic hunting dog.",
    traits: ["High energy", "Needs lots of exercise", "Intelligent", "Separation anxiety prone"]
  },
  {
    name: "Vizsla",
    size: "large",
    energy: "high",
    grooming: "low",
    experience: "experienced",
    family: "excellent",
    space: "house",
    exercise: "120min",
    barking: "low",
    description: "Affectionate, gentle, and energetic pointer.",
    traits: ["Velcro dog", "Athletic", "Needs activity", "Great with active families"]
  },
  {
    name: "Rhodesian Ridgeback",
    size: "large",
    energy: "moderate",
    grooming: "low",
    experience: "experienced",
    family: "good",
    space: "house",
    exercise: "90min",
    barking: "low",
    description: "Strong-willed, dignified, and loyal guardian.",
    traits: ["Independent", "Athletic", "Protective", "Low maintenance"]
  },
  {
    name: "Alaskan Malamute",
    size: "large",
    energy: "high",
    grooming: "high",
    experience: "experienced",
    family: "good",
    space: "house",
    exercise: "120min",
    barking: "high",
    description: "Affectionate, loyal, and playful sled dog.",
    traits: ["High energy", "Strong", "Independent", "Heavy shedding"]
  },
  {
    name: "Newfoundland",
    size: "giant",
    energy: "low",
    grooming: "high",
    experience: "beginner",
    family: "excellent",
    space: "house",
    exercise: "45min",
    barking: "low",
    description: "Sweet-tempered, devoted gentle giant and water rescue dog.",
    traits: ["Gentle", "Great with kids", "Loves water", "Drools"]
  },
  {
    name: "Irish Setter",
    size: "large",
    energy: "high",
    grooming: "high",
    experience: "beginner",
    family: "excellent",
    space: "house",
    exercise: "90min",
    barking: "low",
    description: "Outgoing, sweet-natured, and active bird dog.",
    traits: ["Friendly", "Beautiful coat", "Athletic", "Great with kids"]
  },
  {
    name: "Collie",
    size: "large",
    energy: "moderate",
    grooming: "high",
    experience: "beginner",
    family: "excellent",
    space: "house",
    exercise: "60min",
    barking: "moderate",
    description: "Devoted, graceful, and proud herding dog.",
    traits: ["Gentle", "Good with kids", "Intelligent", "Beautiful coat"]
  },
  {
    name: "Akita",
    size: "large",
    energy: "moderate",
    grooming: "high",
    experience: "experienced",
    family: "singles",
    space: "house",
    exercise: "60min",
    barking: "low",
    description: "Courageous, dignified, and profoundly loyal.",
    traits: ["Independent", "Protective", "Reserved", "Needs experienced handler"]
  },
  {
    name: "English Springer Spaniel",
    size: "medium",
    energy: "high",
    grooming: "moderate",
    experience: "beginner",
    family: "excellent",
    space: "house",
    exercise: "90min",
    barking: "moderate",
    description: "Friendly, playful, and obedient bird dog.",
    traits: ["Great with kids", "Athletic", "Eager to please", "Versatile"]
  },
  {
    name: "Poodle (Standard)",
    size: "large",
    energy: "moderate",
    grooming: "high",
    experience: "beginner",
    family: "excellent",
    space: "house",
    exercise: "60min",
    barking: "low",
    description: "Intelligent, elegant, and athletic companion.",
    traits: ["Hypoallergenic", "Highly trainable", "Active", "Requires grooming"]
  },
  
  // Additional Popular Breeds
  {
    name: "Bichon Frise",
    size: "small",
    energy: "moderate",
    grooming: "high",
    experience: "beginner",
    family: "excellent",
    space: "apartment",
    exercise: "45min",
    barking: "moderate",
    description: "Playful, curious, and peppy companion.",
    traits: ["Hypoallergenic", "Good with kids", "Friendly", "Cheerful"]
  },
  {
    name: "Havanese",
    size: "small",
    energy: "moderate",
    grooming: "high",
    experience: "beginner",
    family: "excellent",
    space: "apartment",
    exercise: "30min",
    barking: "low",
    description: "Intelligent, outgoing, and funny companion.",
    traits: ["Hypoallergenic", "Great for apartments", "Adaptable", "Social"]
  },
  {
    name: "Miniature Schnauzer",
    size: "small",
    energy: "moderate",
    grooming: "high",
    experience: "beginner",
    family: "excellent",
    space: "apartment",
    exercise: "45min",
    barking: "high",
    description: "Friendly, smart, and obedient terrier.",
    traits: ["Good watchdog", "Hypoallergenic", "Trainable", "Alert"]
  },
  {
    name: "Papillon",
    size: "small",
    energy: "moderate",
    grooming: "moderate",
    experience: "beginner",
    family: "good",
    space: "apartment",
    exercise: "45min",
    barking: "moderate",
    description: "Happy, alert, and friendly toy spaniel.",
    traits: ["Highly trainable", "Athletic for size", "Intelligent", "Elegant"]
  },
  {
    name: "Italian Greyhound",
    size: "small",
    energy: "moderate",
    grooming: "low",
    experience: "beginner",
    family: "singles",
    space: "apartment",
    exercise: "45min",
    barking: "low",
    description: "Playful, sensitive miniature sighthound.",
    traits: ["Low maintenance", "Quiet", "Elegant", "Good apartment dog"]
  },
  {
    name: "Jack Russell Terrier",
    size: "small",
    energy: "high",
    grooming: "low",
    experience: "experienced",
    family: "good",
    space: "house",
    exercise: "90min",
    barking: "high",
    description: "Energetic, clever, and vocal terrier.",
    traits: ["Very active", "Intelligent", "Bold", "Needs mental stimulation"]
  },
  {
    name: "Dalmatian",
    size: "large",
    energy: "high",
    grooming: "low",
    experience: "experienced",
    family: "good",
    space: "house",
    exercise: "120min",
    barking: "moderate",
    description: "Outgoing, playful, and energetic coach dog.",
    traits: ["High energy", "Athletic", "Unique spots", "Needs lots of exercise"]
  },
  {
    name: "Shiba Inu",
    size: "medium",
    energy: "moderate",
    grooming: "moderate",
    experience: "experienced",
    family: "singles",
    space: "house",
    exercise: "60min",
    barking: "moderate",
    description: "Alert, confident, and independent Japanese breed.",
    traits: ["Cat-like", "Independent", "Clean", "Strong-willed"]
  },
  {
    name: "Soft Coated Wheaten Terrier",
    size: "medium",
    energy: "high",
    grooming: "high",
    experience: "beginner",
    family: "excellent",
    space: "house",
    exercise: "60min",
    barking: "moderate",
    description: "Happy, friendly, and deeply devoted terrier.",
    traits: ["Hypoallergenic", "Great with kids", "Playful", "Soft silky coat"]
  },
  {
    name: "Portuguese Water Dog",
    size: "medium",
    energy: "high",
    grooming: "high",
    experience: "beginner",
    family: "excellent",
    space: "house",
    exercise: "90min",
    barking: "low",
    description: "Athletic, adventurous water dog.",
    traits: ["Hypoallergenic", "Loves water", "Athletic", "Intelligent"]
  },
  {
    name: "Samoyed",
    size: "large",
    energy: "high",
    grooming: "high",
    experience: "beginner",
    family: "excellent",
    space: "house",
    exercise: "90min",
    barking: "high",
    description: "Gentle, adaptable, and friendly sled dog with permanent smile.",
    traits: ["Friendly", "Great with kids", "Beautiful coat", "Heavy shedding"]
  },
  {
    name: "Mastiff",
    size: "giant",
    energy: "low",
    grooming: "low",
    experience: "experienced",
    family: "good",
    space: "house",
    exercise: "45min",
    barking: "low",
    description: "Good-natured, courageous, and dignified giant.",
    traits: ["Gentle giant", "Protective", "Calm", "Drools"]
  }
];

const questions = [
  {
    id: "livingSpace",
    question: "What type of living space do you have?",
    options: [
      { value: "apartment", label: "Apartment or small space" },
      { value: "house", label: "House with yard" },
      { value: "large", label: "Large property/farm" }
    ]
  },
  {
    id: "activityLevel",
    question: "How would you describe your lifestyle?",
    options: [
      { value: "low", label: "Sedentary - I prefer relaxing at home" },
      { value: "moderate", label: "Moderate - I enjoy regular walks and some activities" },
      { value: "high", label: "Very active - I love hiking, running, and outdoor adventures" }
    ]
  },
  {
    id: "experience",
    question: "What's your dog ownership experience?",
    options: [
      { value: "beginner", label: "First-time dog owner" },
      { value: "some", label: "I've had dogs before but not recently" },
      { value: "experienced", label: "Experienced with training and handling dogs" }
    ]
  },
  {
    id: "exerciseTime",
    question: "How much time can you dedicate to daily exercise?",
    options: [
      { value: "30min", label: "30 minutes or less" },
      { value: "60min", label: "45-60 minutes" },
      { value: "90min", label: "1-2 hours" },
      { value: "120min", label: "2+ hours" }
    ]
  },
  {
    id: "familySituation",
    question: "What's your household situation?",
    options: [
      { value: "singles", label: "Single adult or couple without children" },
      { value: "good", label: "Adults with older children (10+)" },
      { value: "excellent", label: "Family with young children" },
      { value: "elderly", label: "Seniors or low-activity household" }
    ]
  },
  {
    id: "groomingCommitment",
    question: "How much time can you spend on grooming?",
    options: [
      { value: "low", label: "Minimal - basic brushing only" },
      { value: "moderate", label: "Moderate - regular brushing and occasional professional grooming" },
      { value: "high", label: "High - I'm committed to regular professional grooming" }
    ]
  },
  {
    id: "sizePreference",
    question: "What size dog do you prefer?",
    options: [
      { value: "small", label: "Small (under 25 lbs)" },
      { value: "medium", label: "Medium (25-60 lbs)" },
      { value: "large", label: "Large (60-100 lbs)" },
      { value: "giant", label: "Giant (100+ lbs)" },
      { value: "any", label: "I'm open to any size" }
    ]
  },
  {
    id: "barkingTolerance",
    question: "How do you feel about barking?",
    options: [
      { value: "low", label: "I need a quiet dog" },
      { value: "moderate", label: "Some barking is okay" },
      { value: "high", label: "I don't mind vocal dogs" }
    ]
  }
];

export default function DogBreedQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Partial<QuizAnswer>>({});
  const [showResults, setShowResults] = useState(false);
  const [recommendations, setRecommendations] = useState<DogBreed[]>([]);

  const handleAnswer = (questionId: string, value: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResults();
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateResults = () => {
    const scored = dogBreeds.map(breed => {
      let score = 0;
      const maxScore = 100; // Maximum possible score

      // Size match (18 points max)
      if (answers.sizePreference === "any" || breed.size === answers.sizePreference) {
        score += 18;
      } else if (
        (answers.sizePreference === "medium" && (breed.size === "small" || breed.size === "large")) ||
        (answers.sizePreference === "large" && breed.size === "medium")
      ) {
        score += 9;
      }

      // Living space match (14 points max)
      if (answers.livingSpace === "apartment" && breed.space === "apartment") {
        score += 14;
      } else if (answers.livingSpace === "house" && breed.space === "house") {
        score += 14;
      } else if (answers.livingSpace === "large") {
        score += 14; // All breeds work for large properties
      }

      // Activity/energy match (18 points max)
      if (breed.energy === answers.activityLevel) {
        score += 18;
      } else if (
        (answers.activityLevel === "moderate" && (breed.energy === "low" || breed.energy === "high")) ||
        (breed.energy === "moderate" && (answers.activityLevel === "low" || answers.activityLevel === "high"))
      ) {
        score += 9;
      }

      // Experience match (14 points max)
      if (answers.experience === "beginner" && breed.experience === "beginner") {
        score += 14;
      } else if (answers.experience === "experienced") {
        score += 14; // Experienced owners can handle any dog
      } else if (answers.experience === "some" && breed.experience === "beginner") {
        score += 11;
      }

      // Exercise time match (14 points max)
      if (breed.exercise === answers.exerciseTime) {
        score += 14;
      } else {
        const exerciseMinutes: Record<string, number> = {
          "30min": 30,
          "45min": 45,
          "60min": 60,
          "90min": 90,
          "120min": 120
        };
        const diff = Math.abs(
          exerciseMinutes[breed.exercise] - exerciseMinutes[answers.exerciseTime || "60min"]
        );
        if (diff <= 30) score += 7;
      }

      // Family situation match (9 points max)
      if (answers.familySituation === "excellent" && breed.family === "excellent") {
        score += 9;
      } else if (answers.familySituation === "good" && (breed.family === "good" || breed.family === "excellent")) {
        score += 9;
      } else if (answers.familySituation === "singles") {
        score += 9; // Singles can handle most dogs
      } else if (answers.familySituation === "elderly" && breed.energy === "low") {
        score += 9;
      }

      // Grooming match (9 points max)
      if (breed.grooming === answers.groomingCommitment) {
        score += 9;
      } else if (
        (answers.groomingCommitment === "moderate" && (breed.grooming === "low" || breed.grooming === "high"))
      ) {
        score += 4;
      }

      // Barking tolerance match (4 points max)
      if (breed.barking === answers.barkingTolerance) {
        score += 4;
      }

      return { ...breed, score };
    });

    // Sort by score and get top 6 recommendations
    const topBreeds = scored.sort((a, b) => b.score - a.score).slice(0, 6);
    setRecommendations(topBreeds);
    setShowResults(true);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setRecommendations([]);
  };

  const currentQuestionData = questions[currentQuestion];
  const currentAnswer = answers[currentQuestionData?.id as keyof QuizAnswer];
  const isAnswered = currentAnswer !== undefined;

  if (showResults) {
    return (
      <section className="mx-auto max-w-6xl px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle2 className="h-6 w-6 text-green-600" />
              Your Perfect Dog Breed Matches
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              Based on your lifestyle and preferences, here are the breeds that would be the best fit for you:
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            {recommendations.map((breed, index) => (
              <Card key={breed.name} className="border-l-4 border-l-primary">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">
                        {index + 1}. {breed.name}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">{breed.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{breed.score}%</div>
                      <div className="text-xs text-muted-foreground">Match</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {breed.traits.map(trait => (
                      <span
                        key={trait}
                        className="px-3 py-1 bg-muted rounded-full text-xs"
                      >
                        {trait}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                    <div>
                      <span className="font-medium">Size:</span> {breed.size}
                    </div>
                    <div>
                      <span className="font-medium">Energy:</span> {breed.energy}
                    </div>
                    <div>
                      <span className="font-medium">Grooming:</span> {breed.grooming}
                    </div>
                    <div>
                      <span className="font-medium">Exercise:</span> {breed.exercise}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <div className="flex gap-2 pt-4">
              <Button onClick={resetQuiz} variant="outline" className="flex-1">
                Retake Quiz
              </Button>
            </div>

            <p className="text-xs text-muted-foreground text-center pt-4">
              Remember: Every dog is an individual. Meet potential dogs in person and consider adoption from shelters or rescues.
              Always research thoroughly and ensure you can commit to a dog for their entire lifetime (10-15+ years).
            </p>
          </CardContent>
        </Card>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>Dog Breed Quiz</CardTitle>
          <p className="text-sm text-muted-foreground">
            Answer a few questions about your lifestyle to find your perfect dog match
          </p>
          <div className="mt-4">
            <div className="flex justify-between text-sm mb-2">
              <span>Question {currentQuestion + 1} of {questions.length}</span>
              <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div
                className="bg-primary rounded-full h-2 transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-4">{currentQuestionData.question}</h3>
            <RadioGroup value={currentAnswer} onValueChange={(value) => handleAnswer(currentQuestionData.id, value)}>
              <div className="space-y-3">
                {currentQuestionData.options.map(option => (
                  <div key={option.value} className="flex items-center space-x-2">
                    <RadioGroupItem value={option.value} id={option.value} />
                    <Label
                      htmlFor={option.value}
                      className="flex-1 cursor-pointer p-3 rounded-lg border border-border hover:bg-accent transition-colors"
                    >
                      {option.label}
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </div>

          <div className="flex gap-2 pt-4">
            <Button
              onClick={handlePrevious}
              variant="outline"
              disabled={currentQuestion === 0}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Previous
            </Button>
            <Button
              onClick={handleNext}
              disabled={!isAnswered}
              className="flex-1 flex items-center justify-center gap-2"
            >
              {currentQuestion === questions.length - 1 ? "See Results" : "Next"}
              {currentQuestion < questions.length - 1 && <ArrowRight className="h-4 w-4" />}
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}