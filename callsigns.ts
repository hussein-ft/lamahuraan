export type Category = 'Motivation' | 'Wisdom' | 'Religious' | 'Inspiration' | 'Quote';

export interface CallSign {
  id: number;
  category: Category;
  text: string;
  emoji?: string;
}

export const callSigns: CallSign[] = [
  { id: 1, category: 'Motivation', text: 'Team work makes the dream work.', emoji: '💪' },
  { id: 2, category: 'Wisdom', text: "I'm not perfect, but I am real. That's my truth." },
  { id: 3, category: 'Motivation', text: "Don't watch the clock; do what it does. Keep going.", emoji: '💪' },
  { id: 4, category: 'Religious', text: 'And He is the most forgiving, the Most Loving.', emoji: '🙏' },
  { id: 5, category: 'Motivation', text: 'Still dreaming. Still grinding. Still believing.', emoji: '💪' },
  { id: 6, category: 'Quote', text: 'Take only memories, leave only footprints.' },
  { id: 7, category: 'Wisdom', text: "It's okay to rest. Doing nothing is doing something.", emoji: '💪' },
  { id: 8, category: 'Wisdom', text: "Take care of your body. It's the only place you have to live.", emoji: '😊' },
  { id: 9, category: 'Inspiration', text: 'Sometimes the struggle is the blessing in disguise.', emoji: '😏' },
  { id: 10, category: 'Wisdom', text: 'The weak can never forgive. Forgiveness is the attribute of the strong.', emoji: '💪' },
  { id: 11, category: 'Wisdom', text: 'To forgive is to set a prisoner free and discover that the prisoner was you.', emoji: '🙏' },
  { id: 12, category: 'Motivation', text: 'Success is not final, failure is not fatal: it is the courage to continue that counts.', emoji: '🔥' },
  { id: 13, category: 'Inspiration', text: 'The only way to do great work is to love what you do.', emoji: '✨' },
  { id: 14, category: 'Religious', text: 'With hardship comes ease. Truly, with hardship comes ease.', emoji: '🤲' },
  { id: 15, category: 'Quote', text: 'Be the change you wish to see in the world.' },
  { id: 16, category: 'Motivation', text: 'Your limitation—it\'s only your imagination.', emoji: '🚀' },
  { id: 17, category: 'Wisdom', text: 'The quieter you become, the more you can hear.' },
  { id: 18, category: 'Inspiration', text: 'Every expert was once a beginner.', emoji: '🌱' },
  { id: 19, category: 'Religious', text: 'Trust in the timing of your life. Everything happens for a reason.', emoji: '🙏' },
  { id: 20, category: 'Quote', text: 'Not all those who wander are lost.' },
  { id: 21, category: 'Motivation', text: 'Push yourself, because no one else is going to do it for you.', emoji: '💪' },
  { id: 22, category: 'Wisdom', text: 'The best time to plant a tree was 20 years ago. The second best time is now.' },
  { id: 23, category: 'Inspiration', text: 'Stars can\'t shine without darkness.', emoji: '⭐' },
  { id: 24, category: 'Quote', text: 'In the middle of difficulty lies opportunity.' },
];

export const categories: Category[] = ['Motivation', 'Wisdom', 'Religious', 'Inspiration', 'Quote'];

export const getCategoryColor = (category: Category): string => {
  const colors: Record<Category, string> = {
    Motivation: 'motivation',
    Wisdom: 'wisdom',
    Religious: 'religious',
    Inspiration: 'inspiration',
    Quote: 'quote',
  };
  return colors[category];
};

export const getCategoryIcon = (category: Category): string => {
  const icons: Record<Category, string> = {
    Motivation: '💪',
    Wisdom: '🧠',
    Religious: '🙏',
    Inspiration: '✨',
    Quote: '💬',
  };
  return icons[category];
};
