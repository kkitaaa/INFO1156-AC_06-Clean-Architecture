import { ProhibitedWord } from "../entities/prohibited-word.entity";

export interface ModerationRepository {
  findAllWords(): Promise<ProhibitedWord[]>;
  addWord(word: ProhibitedWord): Promise<ProhibitedWord>;
  removeWord(id: string): Promise<void>;
}