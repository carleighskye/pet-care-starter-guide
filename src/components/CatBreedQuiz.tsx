"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

type QuizAnswer = {
  livingSpace: string;
  indoorOutdoor: string;
  activityLevel: string;
  experience: string;
  interactionLevel: string;
  groomingCommitment: string;
  vocalizationTolerance: string;
  householdSituation: string;
};

type CatBreed = {
  name: string;
  size: string;
  energy: string;
  grooming: string;
  experience: string;
  affection: string;
  indoor: string;
  vocalization: string;
  children: string;
  description: string;
  traits: string[];
  imageUrl: string;
};

const catBreeds: CatBreed[] = [
  {
    name: "Persian",
    size: "medium",
    energy: "low",
    grooming: "high",
    experience: "beginner",
    affection: "moderate",
    indoor: "indoor",
    vocalization: "quiet",
    children: "good",
    description: "Gentle, quiet, and dignified lap cat with luxurious long coat.",
    traits: ["Calm temperament", "Quiet", "Requires daily grooming", "Indoor only"],
    imageUrl: "https://images.unsplash.com/photo-1589883661923-6476cb0ae9f2?w=400&h=400&fit=crop"
  },
  {
    name: "Maine Coon",
    size: "large",
    energy: "moderate",
    grooming: "moderate",
    experience: "beginner",
    affection: "high",
    indoor: "both",
    vocalization: "moderate",
    children: "excellent",
    description: "Gentle giant with dog-like personality and tufted ears.",
    traits: ["Sociable", "Good with kids", "Playful", "Adaptable"],
    imageUrl: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=400&fit=crop"
  },
  {
    name: "Siamese",
    size: "medium",
    energy: "high",
    grooming: "low",
    experience: "beginner",
    affection: "high",
    indoor: "indoor",
    vocalization: "vocal",
    children: "excellent",
    description: "Vocal, social, and intelligent cat that bonds strongly with owners.",
    traits: ["Very vocal", "Highly social", "Intelligent", "Demanding attention"],
    imageUrl: "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=400&h=400&fit=crop"
  },
  {
    name: "Ragdoll",
    size: "large",
    energy: "low",
    grooming: "moderate",
    experience: "beginner",
    affection: "high",
    indoor: "indoor",
    vocalization: "quiet",
    children: "excellent",
    description: "Docile, placid, and affectionate cat that goes limp when held.",
    traits: ["Extremely gentle", "Great with kids", "Relaxed", "Indoor only"],
    imageUrl: "https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?w=400&h=400&fit=crop"
  },
  {
    name: "British Shorthair",
    size: "medium",
    energy: "low",
    grooming: "low",
    experience: "beginner",
    affection: "moderate",
    indoor: "both",
    vocalization: "quiet",
    children: "good",
    description: "Easygoing, dignified, and independent with round face.",
    traits: ["Low maintenance", "Calm", "Independent", "Adaptable"],
    imageUrl: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=400&h=400&fit=crop"
  },
  {
    name: "Abyssinian",
    size: "medium",
    energy: "high",
    grooming: "low",
    experience: "beginner",
    affection: "high",
    indoor: "both",
    vocalization: "moderate",
    children: "excellent",
    description: "Active, playful, and curious cat with ticked coat.",
    traits: ["Very active", "Playful", "Intelligent", "Social"],
    imageUrl: "https://images.unsplash.com/photo-1606214174585-fe31582dc6ee?w=400&h=400&fit=crop"
  },
  {
    name: "Bengal",
    size: "medium",
    energy: "high",
    grooming: "low",
    experience: "experienced",
    affection: "moderate",
    indoor: "both",
    vocalization: "vocal",
    children: "good",
    description: "Wild-looking, athletic, and energetic with spotted coat.",
    traits: ["Extremely active", "Intelligent", "Needs stimulation", "Athletic"],
    imageUrl: "https://images.unsplash.com/photo-1582725461742-67d4b8f82a7f?w=400&h=400&fit=crop"
  },
  {
    name: "Sphynx",
    size: "medium",
    energy: "high",
    grooming: "high",
    experience: "experienced",
    affection: "high",
    indoor: "indoor",
    vocalization: "moderate",
    children: "excellent",
    description: "Hairless, warm, and extremely affectionate attention-seeker.",
    traits: ["Hairless", "Very affectionate", "Warm to touch", "Needs bathing"],
    imageUrl: "https://images.unsplash.com/photo-1577023311546-cdc07a8454d9?w=400&h=400&fit=crop"
  },
  {
    name: "Scottish Fold",
    size: "medium",
    energy: "moderate",
    grooming: "moderate",
    experience: "beginner",
    affection: "high",
    indoor: "indoor",
    vocalization: "quiet",
    children: "excellent",
    description: "Sweet-tempered and adaptable with distinctive folded ears.",
    traits: ["Unique appearance", "Affectionate", "Good with kids", "Adaptable"],
    imageUrl: "https://images.unsplash.com/photo-1615789591457-74a63395c990?w=400&h=400&fit=crop"
  },
  {
    name: "Devon Rex",
    size: "small",
    energy: "high",
    grooming: "low",
    experience: "beginner",
    affection: "high",
    indoor: "indoor",
    vocalization: "moderate",
    children: "excellent",
    description: "Playful, mischievous pixie with wavy coat and large ears.",
    traits: ["Very playful", "Affectionate", "Low shedding", "Social"],
    imageUrl: "https://images.unsplash.com/photo-1573865526739-10c1dd65bc6d?w=400&h=400&fit=crop"
  },
  {
    name: "Russian Blue",
    size: "medium",
    energy: "moderate",
    grooming: "low",
    experience: "beginner",
    affection: "moderate",
    indoor: "both",
    vocalization: "quiet",
    children: "good",
    description: "Reserved, gentle, and loyal with shimmering blue-grey coat.",
    traits: ["Reserved with strangers", "Loyal", "Quiet", "Low maintenance"],
    imageUrl: "https://images.unsplash.com/photo-1611003228941-98852ba62227?w=400&h=400&fit=crop"
  },
  {
    name: "Birman",
    size: "medium",
    energy: "moderate",
    grooming: "moderate",
    experience: "beginner",
    affection: "high",
    indoor: "indoor",
    vocalization: "quiet",
    children: "excellent",
    description: "Gentle, quiet, and sociable with color-point coat and white paws.",
    traits: ["Gentle", "Good with kids", "Quiet", "Affectionate"],
    imageUrl: "https://images.unsplash.com/photo-1609691668260-f1fc9c08e91f?w=400&h=400&fit=crop"
  },
  {
    name: "Oriental Shorthair",
    size: "medium",
    energy: "high",
    grooming: "low",
    experience: "beginner",
    affection: "high",
    indoor: "indoor",
    vocalization: "vocal",
    children: "excellent",
    description: "Vocal, social, and playful with sleek body and large ears.",
    traits: ["Very vocal", "Social", "Playful", "Bonds strongly"],
    imageUrl: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=400&fit=crop"
  },
  {
    name: "Burmese",
    size: "medium",
    energy: "moderate",
    grooming: "low",
    experience: "beginner",
    affection: "high",
    indoor: "both",
    vocalization: "moderate",
    children: "excellent",
    description: "Affectionate, playful, and social lap cat with golden eyes.",
    traits: ["Very affectionate", "Good with kids", "Playful", "Social"],
    imageUrl: "https://images.unsplash.com/photo-1573865526739-10c1dd65bc6d?w=400&h=400&fit=crop"
  },
  {
    name: "American Shorthair",
    size: "medium",
    energy: "moderate",
    grooming: "low",
    experience: "beginner",
    affection: "moderate",
    indoor: "both",
    vocalization: "quiet",
    children: "excellent",
    description: "Easy-going, adaptable working cat with robust build.",
    traits: ["Low maintenance", "Adaptable", "Good mouser", "Healthy breed"],
    imageUrl: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=400&fit=crop"
  },
  {
    name: "Exotic Shorthair",
    size: "medium",
    energy: "low",
    grooming: "low",
    experience: "beginner",
    affection: "high",
    indoor: "indoor",
    vocalization: "quiet",
    children: "excellent",
    description: "Gentle, quiet Persian-type with short plush coat.",
    traits: ["Calm", "Low maintenance", "Affectionate", "Good with kids"],
    imageUrl: "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=400&h=400&fit=crop"
  },
  {
    name: "Manx",
    size: "medium",
    energy: "moderate",
    grooming: "moderate",
    experience: "beginner",
    affection: "high",
    indoor: "both",
    vocalization: "quiet",
    children: "excellent",
    description: "Playful, dog-like cat often without a tail.",
    traits: ["Unique tailless", "Playful", "Dog-like", "Good with kids"],
    imageUrl: "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?w=400&h=400&fit=crop"
  },
  {
    name: "Cornish Rex",
    size: "small",
    energy: "high",
    grooming: "low",
    experience: "beginner",
    affection: "high",
    indoor: "indoor",
    vocalization: "moderate",
    children: "excellent",
    description: "Athletic, playful cat with distinctive curly coat.",
    traits: ["Very playful", "Curly coat", "Active", "Affectionate"],
    imageUrl: "https://images.unsplash.com/photo-1573865526739-10c1dd65bc6d?w=400&h=400&fit=crop"
  },
  {
    name: "Tonkinese",
    size: "medium",
    energy: "high",
    grooming: "low",
    experience: "beginner",
    affection: "high",
    indoor: "indoor",
    vocalization: "moderate",
    children: "excellent",
    description: "Active, playful, and social hybrid of Siamese and Burmese.",
    traits: ["Very social", "Playful", "Intelligent", "Affectionate"],
    imageUrl: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=400&h=400&fit=crop"
  },
  {
    name: "Norwegian Forest Cat",
    size: "large",
    energy: "moderate",
    grooming: "moderate",
    experience: "beginner",
    affection: "moderate",
    indoor: "both",
    vocalization: "quiet",
    children: "good",
    description: "Sturdy, independent forest cat with thick double coat.",
    traits: ["Large size", "Independent", "Good climber", "Cold-tolerant"],
    imageUrl: "https://images.unsplash.com/photo-1568393691622-c7ba131d63b4?w=400&h=400&fit=crop"
  },
  {
    name: "Siberian",
    size: "large",
    energy: "moderate",
    grooming: "moderate",
    experience: "beginner",
    affection: "high",
    indoor: "both",
    vocalization: "moderate",
    children: "excellent",
    description: "Powerful, agile cat with triple coat and dog-like loyalty.",
    traits: ["Hypoallergenic", "Playful", "Loyal", "Good with kids"],
    imageUrl: "https://images.unsplash.com/photo-1606214174585-fe31582dc6ee?w=400&h=400&fit=crop"
  },
  {
    name: "Turkish Angora",
    size: "medium",
    energy: "high",
    grooming: "moderate",
    experience: "beginner",
    affection: "high",
    indoor: "both",
    vocalization: "moderate",
    children: "good",
    description: "Elegant, intelligent, and playful with silky coat.",
    traits: ["Elegant", "Playful", "Intelligent", "Athletic"],
    imageUrl: "https://images.unsplash.com/photo-1573865526739-10c1dd65bc6d?w=400&h=400&fit=crop"
  },
  {
    name: "Himalayan",
    size: "medium",
    energy: "low",
    grooming: "high",
    experience: "beginner",
    affection: "high",
    indoor: "indoor",
    vocalization: "quiet",
    children: "good",
    description: "Gentle, calm Persian-type with Siamese color-point pattern.",
    traits: ["Very calm", "Affectionate", "High grooming needs", "Indoor only"],
    imageUrl: "https://images.unsplash.com/photo-1589883661923-6476cb0ae9f2?w=400&h=400&fit=crop"
  },
  {
    name: "Somali",
    size: "medium",
    energy: "high",
    grooming: "moderate",
    experience: "beginner",
    affection: "high",
    indoor: "both",
    vocalization: "moderate",
    children: "excellent",
    description: "Long-haired Abyssinian with bushy tail and playful nature.",
    traits: ["Very active", "Playful", "Social", "Beautiful coat"],
    imageUrl: "https://images.unsplash.com/photo-1606214174585-fe31582dc6ee?w=400&h=400&fit=crop"
  },
  {
    name: "Turkish Van",
    size: "large",
    energy: "high",
    grooming: "moderate",
    experience: "experienced",
    affection: "moderate",
    indoor: "both",
    vocalization: "moderate",
    children: "good",
    description: "Athletic, energetic cat that loves water and climbing.",
    traits: ["Loves water", "Very active", "Independent", "Athletic"],
    imageUrl: "https://images.unsplash.com/photo-1573865526739-10c1dd65bc6d?w=400&h=400&fit=crop"
  },
  {
    name: "Balinese",
    size: "medium",
    energy: "high",
    grooming: "moderate",
    experience: "beginner",
    affection: "high",
    indoor: "indoor",
    vocalization: "vocal",
    children: "excellent",
    description: "Long-haired Siamese with elegant coat and vocal personality.",
    traits: ["Very vocal", "Affectionate", "Intelligent", "Social"],
    imageUrl: "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=400&h=400&fit=crop"
  },
  {
    name: "Egyptian Mau",
    size: "medium",
    energy: "high",
    grooming: "low",
    experience: "beginner",
    affection: "moderate",
    indoor: "both",
    vocalization: "moderate",
    children: "good",
    description: "Fastest domestic cat with natural spotted coat.",
    traits: ["Very fast", "Athletic", "Loyal", "Spotted coat"],
    imageUrl: "https://images.unsplash.com/photo-1582725461742-67d4b8f82a7f?w=400&h=400&fit=crop"
  },
  {
    name: "Ocicat",
    size: "medium",
    energy: "high",
    grooming: "low",
    experience: "beginner",
    affection: "high",
    indoor: "both",
    vocalization: "moderate",
    children: "excellent",
    description: "Wild-looking but domestic cat with spotted coat and dog-like personality.",
    traits: ["Dog-like", "Social", "Playful", "Good with kids"],
    imageUrl: "https://images.unsplash.com/photo-1582725461742-67d4b8f82a7f?w=400&h=400&fit=crop"
  },
  {
    name: "Chartreux",
    size: "medium",
    energy: "low",
    grooming: "low",
    experience: "beginner",
    affection: "moderate",
    indoor: "both",
    vocalization: "quiet",
    children: "good",
    description: "Quiet, observant, and gentle with blue-grey coat.",
    traits: ["Very quiet", "Calm", "Observant", "Low maintenance"],
    imageUrl: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=400&h=400&fit=crop"
  },
  {
    name: "Havana Brown",
    size: "medium",
    energy: "moderate",
    grooming: "low",
    experience: "beginner",
    affection: "high",
    indoor: "indoor",
    vocalization: "moderate",
    children: "excellent",
    description: "Affectionate, playful cat with rich brown coat.",
    traits: ["Affectionate", "Playful", "Rare breed", "Social"],
    imageUrl: "https://images.unsplash.com/photo-1573865526739-10c1dd65bc6d?w=400&h=400&fit=crop"
  },
  {
    name: "Singapura",
    size: "small",
    energy: "moderate",
    grooming: "low",
    experience: "beginner",
    affection: "high",
    indoor: "indoor",
    vocalization: "quiet",
    children: "good",
    description: "Smallest cat breed with big eyes and playful personality.",
    traits: ["Tiny size", "Playful", "Affectionate", "Low maintenance"],
    imageUrl: "https://images.unsplash.com/photo-1606214174585-fe31582dc6ee?w=400&h=400&fit=crop"
  },
  {
    name: "Ragamuffin",
    size: "large",
    energy: "low",
    grooming: "moderate",
    experience: "beginner",
    affection: "high",
    indoor: "indoor",
    vocalization: "quiet",
    children: "excellent",
    description: "Docile, patient, and extremely affectionate large cat.",
    traits: ["Very gentle", "Great with kids", "Patient", "Calm"],
    imageUrl: "https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?w=400&h=400&fit=crop"
  },
  {
    name: "LaPerm",
    size: "medium",
    energy: "moderate",
    grooming: "low",
    experience: "beginner",
    affection: "high",
    indoor: "both",
    vocalization: "quiet",
    children: "excellent",
    description: "Affectionate, people-oriented cat with curly coat.",
    traits: ["Curly coat", "Affectionate", "Low shedding", "Social"],
    imageUrl: "https://images.unsplash.com/photo-1573865526739-10c1dd65bc6d?w=400&h=400&fit=crop"
  },
  {
    name: "Selkirk Rex",
    size: "medium",
    energy: "moderate",
    grooming: "moderate",
    experience: "beginner",
    affection: "high",
    indoor: "indoor",
    vocalization: "quiet",
    children: "excellent",
    description: "Patient, tolerant cat with plush curly coat.",
    traits: ["Curly coat", "Very patient", "Good with kids", "Affectionate"],
    imageUrl: "https://images.unsplash.com/photo-1573865526739-10c1dd65bc6d?w=400&h=400&fit=crop"
  },
  {
    name: "Bombay",
    size: "medium",
    energy: "moderate",
    grooming: "low",
    experience: "beginner",
    affection: "high",
    indoor: "both",
    vocalization: "moderate",
    children: "excellent",
    description: "Affectionate, social 'mini panther' with copper eyes.",
    traits: ["Panther-like", "Very affectionate", "Social", "Good with kids"],
    imageUrl: "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?w=400&h=400&fit=crop"
  },
  {
    name: "Japanese Bobtail",
    size: "medium",
    energy: "high",
    grooming: "low",
    experience: "beginner",
    affection: "high",
    indoor: "both",
    vocalization: "vocal",
    children: "excellent",
    description: "Playful, vocal cat with distinctive bobbed tail.",
    traits: ["Unique tail", "Very playful", "Vocal", "Social"],
    imageUrl: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=400&h=400&fit=crop"
  },
  {
    name: "Korat",
    size: "medium",
    energy: "moderate",
    grooming: "low",
    experience: "beginner",
    affection: "high",
    indoor: "both",
    vocalization: "quiet",
    children: "good",
    description: "Loyal, observant cat with heart-shaped face and silver-blue coat.",
    traits: ["Very loyal", "Intelligent", "Quiet", "Observant"],
    imageUrl: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=400&h=400&fit=crop"
  },
  {
    name: "Savannah",
    size: "large",
    energy: "high",
    grooming: "low",
    experience: "experienced",
    affection: "moderate",
    indoor: "both",
    vocalization: "vocal",
    children: "good",
    description: "Tall, athletic hybrid with wild appearance and dog-like behavior.",
    traits: ["Very active", "Athletic", "Leash trainable", "Needs space"],
    imageUrl: "https://images.unsplash.com/photo-1582725461742-67d4b8f82a7f?w=400&h=400&fit=crop"
  },
  {
    name: "Snowshoe",
    size: "medium",
    energy: "moderate",
    grooming: "low",
    experience: "beginner",
    affection: "high",
    indoor: "both",
    vocalization: "moderate",
    children: "excellent",
    description: "Social, vocal cat with distinctive white 'boots' on paws.",
    traits: ["Unique markings", "Very social", "Vocal", "Playful"],
    imageUrl: "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=400&h=400&fit=crop"
  },
  {
    name: "Munchkin",
    size: "small",
    energy: "moderate",
    grooming: "low",
    experience: "beginner",
    affection: "high",
    indoor: "indoor",
    vocalization: "quiet",
    children: "excellent",
    description: "Playful, outgoing cat with distinctively short legs.",
    traits: ["Short legs", "Playful", "Affectionate", "Good with kids"],
    imageUrl: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=400&h=400&fit=crop"
  },
  {
    name: "British Longhair",
    size: "medium",
    energy: "low",
    grooming: "moderate",
    experience: "beginner",
    affection: "moderate",
    indoor: "both",
    vocalization: "quiet",
    children: "good",
    description: "Calm, independent, and easygoing with plush coat.",
    traits: ["Very calm", "Independent", "Low energy", "Beautiful coat"],
    imageUrl: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=400&h=400&fit=crop"
  }
];

const questions = [
  {
    id: "livingSpace",
    question: "What type of living space do you have?",
    options: [
      { value: "apartment", label: "Apartment or small space" },
      { value: "house", label: "House with some outdoor access" },
      { value: "large", label: "Large property with safe outdoor space" }
    ]
  },
  {
    id: "indoorOutdoor",
    question: "Are you planning to keep your cat indoors or allow outdoor access?",
    options: [
      { value: "indoor", label: "Strictly indoor" },
      { value: "both", label: "Indoor with supervised outdoor access" },
      { value: "outdoor", label: "Indoor/outdoor freedom" }
    ]
  },
  {
    id: "activityLevel",
    question: "What energy level are you looking for?",
    options: [
      { value: "low", label: "Calm and relaxed - prefers lounging" },
      { value: "moderate", label: "Moderately active - enjoys play sessions" },
      { value: "high", label: "Very active - needs lots of play and stimulation" }
    ]
  },
  {
    id: "experience",
    question: "What's your cat ownership experience?",
    options: [
      { value: "beginner", label: "First-time cat owner" },
      { value: "some", label: "I've had cats before" },
      { value: "experienced", label: "Experienced with various cat breeds and behaviors" }
    ]
  },
  {
    id: "interactionLevel",
    question: "How much interaction do you want with your cat?",
    options: [
      { value: "independent", label: "Independent - does their own thing" },
      { value: "moderate", label: "Moderate - friendly but not clingy" },
      { value: "high", label: "Very affectionate - constant companion" }
    ]
  },
  {
    id: "groomingCommitment",
    question: "How much time can you spend on grooming?",
    options: [
      { value: "low", label: "Minimal - occasional brushing" },
      { value: "moderate", label: "Moderate - regular brushing weekly" },
      { value: "high", label: "High - daily grooming and maintenance" }
    ]
  },
  {
    id: "vocalizationTolerance",
    question: "How do you feel about vocal cats?",
    options: [
      { value: "quiet", label: "I prefer quiet cats" },
      { value: "moderate", label: "Some meowing is fine" },
      { value: "vocal", label: "I enjoy chatty, vocal cats" }
    ]
  },
  {
    id: "householdSituation",
    question: "What's your household situation?",
    options: [
      { value: "singles", label: "Single adult or couple without children" },
      { value: "good", label: "Adults with older children or occasional visitors" },
      { value: "excellent", label: "Family with young children or multiple pets" }
    ]
  }
];

export default function CatBreedQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Partial<QuizAnswer>>({});
  const [showResults, setShowResults] = useState(false);
  const [recommendations, setRecommendations] = useState<CatBreed[]>([]);

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
    const scored = catBreeds.map(breed => {
      let score = 0;

      // Indoor/Outdoor preference match (18 points max)
      if (answers.indoorOutdoor === "indoor" && breed.indoor === "indoor") {
        score += 18;
      } else if (answers.indoorOutdoor === "both" && (breed.indoor === "both" || breed.indoor === "indoor")) {
        score += 18;
      } else if (answers.indoorOutdoor === "outdoor" && breed.indoor === "both") {
        score += 18;
      } else if (answers.indoorOutdoor === "outdoor" && breed.indoor === "indoor") {
        score += 9;
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
        score += 14; // Experienced owners can handle any cat
      } else if (answers.experience === "some" && breed.experience === "beginner") {
        score += 11;
      }

      // Interaction/affection level match (14 points max)
      if (answers.interactionLevel === "high" && breed.affection === "high") {
        score += 14;
      } else if (answers.interactionLevel === "moderate" && (breed.affection === "moderate" || breed.affection === "high")) {
        score += 14;
      } else if (answers.interactionLevel === "independent" && breed.affection === "moderate") {
        score += 14;
      } else if (answers.interactionLevel === "independent" && breed.affection === "high") {
        score += 7;
      }

      // Living space match (14 points max)
      if (answers.livingSpace === "apartment") {
        score += 14; // Most cats work well in apartments
      } else if (answers.livingSpace === "house") {
        score += 14;
      } else if (answers.livingSpace === "large") {
        score += 14; // All cats work for large properties
      }

      // Grooming match (9 points max)
      if (breed.grooming === answers.groomingCommitment) {
        score += 9;
      } else if (
        (answers.groomingCommitment === "moderate" && (breed.grooming === "low" || breed.grooming === "high"))
      ) {
        score += 4;
      }

      // Vocalization tolerance match (9 points max)
      if (breed.vocalization === answers.vocalizationTolerance) {
        score += 9;
      } else if (
        (answers.vocalizationTolerance === "moderate" && (breed.vocalization === "quiet" || breed.vocalization === "vocal"))
      ) {
        score += 4;
      }

      // Household situation match (4 points max)
      if (answers.householdSituation === "excellent" && breed.children === "excellent") {
        score += 4;
      } else if (answers.householdSituation === "good" && (breed.children === "good" || breed.children === "excellent")) {
        score += 4;
      } else if (answers.householdSituation === "singles") {
        score += 4; // Singles can handle most cats
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
              Your Perfect Cat Breed Matches
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              Based on your lifestyle and preferences, here are the cat breeds that would be the best fit for you:
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            {recommendations.map((breed, index) => (
              <Card key={breed.name} className="border-l-4 border-l-primary">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={breed.imageUrl}
                        alt={breed.name}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg">
                            {index + 1}. {breed.name}
                          </CardTitle>
                          <p className="text-sm text-muted-foreground mt-1">{breed.description}</p>
                        </div>
                        <div className="text-right ml-4">
                          <div className="text-2xl font-bold text-primary">{breed.score}%</div>
                          <div className="text-xs text-muted-foreground">Match</div>
                        </div>
                      </div>
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
                      <span className="font-medium">Affection:</span> {breed.affection}
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
              Remember: Every cat is an individual. Meet potential cats in person and consider adoption from shelters or rescues.
              Always research thoroughly and ensure you can commit to a cat for their entire lifetime (15-20+ years).
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
          <CardTitle>Cat Breed Quiz</CardTitle>
          <p className="text-sm text-muted-foreground">
            Answer a few questions about your lifestyle to find your perfect cat match
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