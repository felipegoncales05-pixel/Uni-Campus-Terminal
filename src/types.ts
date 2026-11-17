export type Lesson = {
  title: string;
  text: string;
  example: string;
};

export type Source = {
  title: string;
  url: string;
};

export type Track = {
  id: string;
  title: string;
  icon: string;
  category: string;
  description: string;
  color: string;
  optional?: boolean;
  original?: boolean;
  lessons: Lesson[];
  sources: Source[];
};

export type Question = {
  id: string;
  trackId: string;
  prompt: string;
  options: [string, string, string, string];
  answer: number;
  explanation: string;
};
