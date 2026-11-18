export type RelationshipType = 
  | 'girlfriend' 
  | 'boyfriend' 
  | 'wife' 
  | 'husband' 
  | 'best_friend' 
  | 'sister' 
  | 'brother' 
  | 'other';

export interface HeartCollagePhotos {
  /** Top left lobe */
  slot1: string;
  /** Top right lobe */
  slot2: string;
  /** Row 2 left */
  slot3: string;
  /** Row 2 center (spans across the spine fold) */
  slot4: string;
  /** Row 2 right */
  slot5: string;
  /** Row 3 left */
  slot6: string;
  /** Row 3 center (spans across the spine fold) */
  slot7: string;
  /** Row 3 right */
  slot8: string;
  /** Row 4 left */
  slot9: string;
  /** Row 4 right */
  slot10: string;
  /** Bottom tip (spans across the spine fold) */
  slot11: string;
}

export interface CelebrationConfig {
  /** Basic Details */
  recipient: {
    fullName: string;
    nickname: string;
    age: number | string;
    birthDateFormatted: string; // e.g. "24th October"
    relationship: RelationshipType;
  };

  /** Cover & Header Customization */
  cover: {
    magazineTitle: string; // e.g. "VOGUE" or "ELLE" or "BIRTHDAY EDITION"
    subtitle: string;
    coverPhotoUrl: string;
    barcodeNumber?: string;
  };

  /** Page 2-3: Polaroids & Early Memories */
  earlyMemories: {
    polaroid1: { photoUrl: string; caption: string };
    polaroid2: { photoUrl: string; caption: string };
    polaroid3: { photoUrl: string; caption: string };
  };

  /** Page 4-5: Editorial Feature & Quotes */
  editorial: {
    heroPhotoUrl: string;
    headline: string;
    quote: string;
  };

  /** Page 8-9: Personal Letter */
  personalLetter: {
    salutation: string; // e.g. "Dear Shreya,"
    bodyParagraphs: string[];
    closingSignature: string; // e.g. "Forever yours,"
  };

  /** Page 10: Reasons List */
  reasonsWhy: {
    title: string; // e.g. "10 Reasons Why You're My Favorite Human"
    reasons: string[];
  };

  /** Pages 11-12: The 11-Photo Heart Mosaic */
  heartCollage: {
    headerLeft: string; // "My only"
    headerRight: string; // "love"
    bottomQuote: string;
    photos: HeartCollagePhotos;
  };

  /** Background Music & Ambience */
  ambience: {
    musicTrackUrl: string;
    confettiColors?: string[];
  };
}

/**
 * Default fallback data matching the current live magazine
 */
export const DEFAULT_CELEBRATION_CONFIG: CelebrationConfig = {
  recipient: {
    fullName: "Shreya",
    nickname: "Chotu",
    age: 21,
    birthDateFormatted: "October 24",
    relationship: "girlfriend",
  },
  cover: {
    magazineTitle: "SHREYA",
    subtitle: "A special birthday edition dedicated to the most wonderful person",
    coverPhotoUrl: "/photos/birthday-girl.jpg",
    barcodeNumber: "0 12345 67890 5",
  },
  earlyMemories: {
    polaroid1: { photoUrl: "/photos/girl1.jpg", caption: "Day we first met" },
    polaroid2: { photoUrl: "/photos/girl2.jpg", caption: "Endless laughter" },
    polaroid3: { photoUrl: "/photos/girl3.jpg", caption: "My favorite smile" },
  },
  editorial: {
    heroPhotoUrl: "/photos/girl4.jpg",
    headline: "ELEGANCE IN EVERY FRAME",
    quote: "You bring a special kind of sunshine into my world every single day.",
  },
  personalLetter: {
    salutation: "Happy Birthday, My Love",
    bodyParagraphs: [
      "From the moment you stepped into my life, everything became brighter, warmer, and so much more meaningful.",
      "Thank you for being my constant source of joy, my peace after long days, and my favorite person in the entire world.",
      "May this year bring you all the love, happiness, and dreams you truly deserve."
    ],
    closingSignature: "With all my love",
  },
  reasonsWhy: {
    title: "10 Reasons Why I Love You",
    reasons: [
      "The way your eyes light up when you laugh",
      "Your endless kindness towards everyone",
      "How you always know how to make me smile",
      "Our late night conversations that feel like minutes",
      "Your determination and how passionate you are",
      "The warmth of your hugs when I need them most",
      "How beautifully you care for the little things",
      "Your cute little habits that never fail to charm me",
      "How safe and at home I feel whenever I'm with you",
      "Simply because you are you, perfectly unforgettable"
    ],
  },
  heartCollage: {
    headerLeft: "My only",
    headerRight: "love",
    bottomQuote: "Every heartbeat whispers your name across every page.",
    photos: {
      slot1: "/photos/girl7.jpg",
      slot2: "/photos/girl8.jpg",
      slot3: "/photos/girl1.jpg",
      slot4: "/photos/birthday-girl.jpg",
      slot5: "/photos/girl2.jpg",
      slot6: "/photos/girl3.jpg",
      slot7: "/photos/girl4.jpg",
      slot8: "/photos/girl5.jpg",
      slot9: "/photos/girl6.jpg",
      slot10: "/photos/girl9.jpg",
      slot11: "/photos/girl10.jpg",
    },
  },
  ambience: {
    musicTrackUrl: "/music/birthday-song.mp3",
    confettiColors: ["#e11d48", "#f43f5e", "#fb7185", "#fda4af", "#fff1f2"],
  },
};
